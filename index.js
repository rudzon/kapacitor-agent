'use strict';

const ProtoBuf = require('protobufjs');
const varint   = require('varint');

console.log = console.error;

class Agent {
    constructor(handler) {
        let builder = ProtoBuf.newBuilder({ convertFieldsToCamelCase: true });
        ProtoBuf.loadProtoFile("./udf.proto", builder);
        let root = builder.build('udf');

        this.root = root;
        this.handler = handler;
    }

    start() {
        process.stdin.on('readable', () => {
            let varintBuf = process.stdin.read(1);
            if (!varintBuf) return;

            let size = varint.decode(varintBuf);

            while (!size && varintBuf) {
                Buffer.concat([varintBuf, process.stdin.read(1)]);
                size = varint.decode(varintBuf);
            }

            if (size) {
                let messageByte = process.stdin.read(size);
                if (messageByte) {
                    let request = this.root.Request.decode(messageByte);

                    if (request.message == 'keepalive') {
                        let resp = new this.root.Response({
                            keepalive: new this.root.KeepaliveResponse({
                                time: request.keepalive.time
                            })
                        });
                        this.writeResponse(resp)
                    } else if (request.message == 'info'){
                        let resp = new this.root.Response({
                            info: new this.root.InfoResponse({
                                wants: this.root.EdgeType.STREAM,
                                provides: this.root.EdgeType.STREAM
                            })
                        });
                        this.writeResponse(resp);
                    }
                }
            }

        });
    }

    writeResponse(resp) {
        let encoded = resp.encode();
        let dataBuf = encoded.toBuffer();
        let varintBuf = new Buffer(varint.encode(dataBuf.length));

        let all = Buffer.concat([varintBuf, dataBuf]);
        process.stdout.write(all);
    }
}

module.exports = Agent;
