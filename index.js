'use strict';

const varint   = require('varint');
const udf      = require('./udf');

// console.log = console.error;

class Agent {
    constructor(opts) {
        this.udf         = udf.udf;
        this.handler     = opts.handler;
        this.readStream  = opts.readStream;
        this.writeStream = opts.writeStream;
    }

    start() {
        return this.readStream.on('readable', () => {
            // TODO: make safer
            let varintBuf = this.readStream.read(1);
            if (!varintBuf) return;

            let size = varint.decode(varintBuf);

            while (!size && varintBuf) {
                Buffer.concat([varintBuf, this.readStream.read(1)]);
                size = varint.decode(varintBuf);
            }

            if (size) {
                let messageByte = this.readStream.read(size);
                if (messageByte) {
                    let request = this.udf.Request.decode(messageByte);
                    this.processRequest(request);
                }
            }
        });
    }

    processRequest(request) {
        let methodName = request.message;

        if (methodName == 'keepalive') {
            let resp = new this.udf.Response({
                keepalive: new this.udf.KeepaliveResponse({
                    time: request.keepalive.time
                })
            });

            return this.writeResponse(resp);
        }

        let handlerFunc = this.handler[methodName];

        if (typeof handlerFunc === 'function') {
            let result = handlerFunc(this.udf, request[methodName]);

            if (!result) return;

            if (typeof result.then === 'function') {
                return result.then(response => {
                    return this.writeResponse(response);
                });
            }

            return this.writeResponse(result);
        }
    }

    writeResponse(resp) {
        let dataBuf = resp.encode().toBuffer();
        let varintBuf = new Buffer(varint.encode(dataBuf.length));
        let all = Buffer.concat([varintBuf, dataBuf]);
        // console.log(`\n \n SENT RESPONSE: ${all} \n \n `);
        this.writeStream.write(all);
    }
}

class Handler {
    static get udf() {
        return udf.udf;
    }

    info() {
        throw new Error('info Not implemented');
    }
    init() {
        throw new Error('init Not implemented');
    }
    snapshot() {
        throw new Error('snapshot Not implemented');
    }
    restore() {
        throw new Error('restore Not implemented');
    }
    begin_batch() {
        throw new Error('begin_batch Not implemented');
    }
    point() {
        throw new Error('point Not implemented');
    }
    end_batch() {
        throw new Error('end_batch Not implemented');
    }
}

module.exports = {
    Agent: Agent,
    Handler: Handler
};
