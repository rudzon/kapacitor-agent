module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "udf",
    "messages": [
        {
            "name": "InfoRequest",
            "fields": []
        },
        {
            "name": "InfoResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "EdgeType",
                    "name": "wants",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "EdgeType",
                    "name": "provides",
                    "id": 2
                },
                {
                    "rule": "map",
                    "type": "OptionInfo",
                    "keytype": "string",
                    "name": "options",
                    "id": 3
                }
            ]
        },
        {
            "name": "OptionInfo",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "ValueType",
                    "name": "valueTypes",
                    "id": 1
                }
            ]
        },
        {
            "name": "InitRequest",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Option",
                    "name": "options",
                    "id": 1
                }
            ]
        },
        {
            "name": "Option",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "OptionValue",
                    "name": "values",
                    "id": 2
                }
            ]
        },
        {
            "name": "OptionValue",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ValueType",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "boolValue",
                    "id": 2,
                    "oneof": "value"
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "intValue",
                    "id": 3,
                    "oneof": "value"
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "doubleValue",
                    "id": 4,
                    "oneof": "value"
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "stringValue",
                    "id": 5,
                    "oneof": "value"
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "durationValue",
                    "id": 6,
                    "oneof": "value"
                }
            ],
            "oneofs": {
                "value": [
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            }
        },
        {
            "name": "InitResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "success",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "error",
                    "id": 2
                }
            ]
        },
        {
            "name": "SnapshotRequest",
            "fields": []
        },
        {
            "name": "SnapshotResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "snapshot",
                    "id": 1
                }
            ]
        },
        {
            "name": "RestoreRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "snapshot",
                    "id": 1
                }
            ]
        },
        {
            "name": "RestoreResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "success",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "error",
                    "id": 2
                }
            ]
        },
        {
            "name": "KeepaliveRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "time",
                    "id": 1
                }
            ]
        },
        {
            "name": "KeepaliveResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "time",
                    "id": 1
                }
            ]
        },
        {
            "name": "ErrorResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "error",
                    "id": 1
                }
            ]
        },
        {
            "name": "BeginBatch",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "group",
                    "id": 2
                },
                {
                    "rule": "map",
                    "type": "string",
                    "keytype": "string",
                    "name": "tags",
                    "id": 3
                }
            ]
        },
        {
            "name": "Point",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "database",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "retentionPolicy",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "group",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "dimensions",
                    "id": 6
                },
                {
                    "rule": "map",
                    "type": "string",
                    "keytype": "string",
                    "name": "tags",
                    "id": 7
                },
                {
                    "rule": "map",
                    "type": "double",
                    "keytype": "string",
                    "name": "fieldsDouble",
                    "id": 8
                },
                {
                    "rule": "map",
                    "type": "int64",
                    "keytype": "string",
                    "name": "fieldsInt",
                    "id": 9
                },
                {
                    "rule": "map",
                    "type": "string",
                    "keytype": "string",
                    "name": "fieldsString",
                    "id": 10
                }
            ]
        },
        {
            "name": "EndBatch",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "group",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "tmax",
                    "id": 3
                },
                {
                    "rule": "map",
                    "type": "string",
                    "keytype": "string",
                    "name": "tags",
                    "id": 4
                }
            ]
        },
        {
            "name": "Request",
            "fields": [
                {
                    "rule": "optional",
                    "type": "InfoRequest",
                    "name": "info",
                    "id": 1,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "InitRequest",
                    "name": "init",
                    "id": 2,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "KeepaliveRequest",
                    "name": "keepalive",
                    "id": 3,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "SnapshotRequest",
                    "name": "snapshot",
                    "id": 4,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "RestoreRequest",
                    "name": "restore",
                    "id": 5,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "BeginBatch",
                    "name": "begin",
                    "id": 16,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "Point",
                    "name": "point",
                    "id": 17,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "EndBatch",
                    "name": "end",
                    "id": 18,
                    "oneof": "message"
                }
            ],
            "oneofs": {
                "message": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    16,
                    17,
                    18
                ]
            }
        },
        {
            "name": "Response",
            "fields": [
                {
                    "rule": "optional",
                    "type": "InfoResponse",
                    "name": "info",
                    "id": 1,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "InitResponse",
                    "name": "init",
                    "id": 2,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "KeepaliveResponse",
                    "name": "keepalive",
                    "id": 3,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "SnapshotResponse",
                    "name": "snapshot",
                    "id": 4,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "RestoreResponse",
                    "name": "restore",
                    "id": 5,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "ErrorResponse",
                    "name": "error",
                    "id": 6,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "BeginBatch",
                    "name": "begin",
                    "id": 16,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "Point",
                    "name": "point",
                    "id": 17,
                    "oneof": "message"
                },
                {
                    "rule": "optional",
                    "type": "EndBatch",
                    "name": "end",
                    "id": 18,
                    "oneof": "message"
                }
            ],
            "oneofs": {
                "message": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    16,
                    17,
                    18
                ]
            }
        }
    ],
    "enums": [
        {
            "name": "EdgeType",
            "values": [
                {
                    "name": "STREAM",
                    "id": 0
                },
                {
                    "name": "BATCH",
                    "id": 1
                }
            ]
        },
        {
            "name": "ValueType",
            "values": [
                {
                    "name": "BOOL",
                    "id": 0
                },
                {
                    "name": "INT",
                    "id": 1
                },
                {
                    "name": "DOUBLE",
                    "id": 2
                },
                {
                    "name": "STRING",
                    "id": 3
                },
                {
                    "name": "DURATION",
                    "id": 4
                }
            ]
        }
    ]
}).build();
