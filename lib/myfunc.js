function hi() {
  console.log("Hello World!");
}
hi();
const {
  proto,
  delay,
  getContentType
} = require("wileys");
const chalk = require("chalk");
const axios = require("axios");
const {
  sizeFormatter
} = require("human-readable");
const fs = require("fs");
exports.color = (_0x5f4f8b, _0x4466e9) => {
  if (!_0x4466e9) {
    return chalk.green(_0x5f4f8b);
  } else {
    return chalk.keyword(_0x4466e9)(_0x5f4f8b);
  }
};
exports.getGroupAdmins = _0x1cb4d1 => {
  let _0x3046e5 = [];
  for (let _0x2beafe of _0x1cb4d1) {
    if (_0x2beafe.admin === "superadmin") {
      _0x3046e5.push(_0x2beafe.id);
    } else if (_0x2beafe.admin === "admin") {
      _0x3046e5.push(_0x2beafe.id);
    } else {
      "";
    }
  }
  return _0x3046e5 || [];
};
exports.getBuffer = async (_0x5973f3, _0x4e497e) => {
  try {
    if (_0x4e497e) {
      _0x4e497e;
    } else {
      ({});
    }
    const _0x578dc1 = await axios({
      method: "get",
      url: _0x5973f3,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1
      },
      ..._0x4e497e,
      responseType: "arraybuffer"
    });
    return _0x578dc1.data;
  } catch (_0x4fc239) {
    return _0x4fc239;
  }
};
exports.bytesToSize = (_0x5aa881, _0x318bed = 2) => {
  if (_0x5aa881 === 0) {
    return "0 Bytes";
  }
  const _0x5d8d85 = 1024;
  const _0x2de7dc = _0x318bed < 0 ? 0 : _0x318bed;
  const _0x341013 = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const _0x532cae = Math.floor(Math.log(_0x5aa881) / Math.log(_0x5d8d85));
  return parseFloat((_0x5aa881 / Math.pow(_0x5d8d85, _0x532cae)).toFixed(_0x2de7dc)) + " " + _0x341013[_0x532cae];
};
exports.checkBandwidth = async () => {
  let _0x285523 = 0;
  let _0x53405b = 0;
  for (let _0x584503 of await require("node-os-utils").netstat.stats()) {
    _0x285523 += parseInt(_0x584503.inputBytes);
    _0x53405b += parseInt(_0x584503.outputBytes);
  }
  return {
    download: exports.bytesToSize(_0x285523),
    upload: exports.bytesToSize(_0x53405b)
  };
};
exports.formatSize = _0x2079fd => {
  const _0x40aa47 = ["Bytes", "KB", "MB", "GB", "TB"];
  if (_0x2079fd === 0) {
    return "0 Bytes";
  }
  const _0x355bcf = Math.floor(Math.log(_0x2079fd) / Math.log(1024));
  return (_0x2079fd / Math.pow(1024, _0x355bcf)).toFixed(2) + " " + _0x40aa47[_0x355bcf];
};
exports.getBuffer = async (_0x4e6049, _0x40ac61) => {
  try {
    _0x40ac61 = _0x40ac61 || {};
    const _0x10ea8b = await axios({
      method: "get",
      url: _0x4e6049,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1
      },
      ..._0x40ac61,
      responseType: "arraybuffer"
    });
    return _0x10ea8b.data;
  } catch (_0x8e2c8) {
    return _0x8e2c8;
  }
};
exports.isUrl = _0xdcdff7 => {
  return _0xdcdff7.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
};
exports.jsonformat = _0x3cd561 => {
  return JSON.stringify(_0x3cd561, null, 2);
};
exports.nganuin = async (_0x2df6c8, _0x4d26b7) => {
  try {
    _0x4d26b7 = _0x4d26b7 || {};
    const _0x185fc5 = await axios({
      method: "GET",
      url: _0x2df6c8,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x4d26b7
    });
    return _0x185fc5.data;
  } catch (_0x2799f6) {
    return _0x2799f6;
  }
};
exports.pickRandom = _0x226437 => {
  return "" + Math.floor(Math.random() * 10000) + _0x226437;
};
exports.runtime = function (_0x3336ec) {
  _0x3336ec = Number(_0x3336ec);
  var _0x49d5f0 = Math.floor(_0x3336ec / 86400);
  var _0x31c9d4 = Math.floor(_0x3336ec % 86400 / 3600);
  var _0xe16184 = Math.floor(_0x3336ec % 3600 / 60);
  var _0x288edb = Math.floor(_0x3336ec % 60);
  var _0x66bf7 = _0x49d5f0 > 0 ? _0x49d5f0 + (_0x49d5f0 == 1 ? " day, " : " days, ") : "";
  var _0x1ce90a = _0x31c9d4 > 0 ? _0x31c9d4 + (_0x31c9d4 == 1 ? " hour, " : " hours, ") : "";
  var _0x52019c = _0xe16184 > 0 ? _0xe16184 + (_0xe16184 == 1 ? " minute, " : " minutes, ") : "";
  var _0x2e403d = _0x288edb > 0 ? _0x288edb + (_0x288edb == 1 ? " second" : " seconds") : "";
  return _0x66bf7 + _0x1ce90a + _0x52019c + _0x2e403d;
};
exports.shorturl = async function shorturl(_0x569693) {
  try {
    const _0x355fca = {
      url: _0x569693
    };
    const _0x9058c6 = await axios.post("https://shrtrl.vercel.app/", _0x355fca);
    return _0x9058c6.data.data.shortUrl;
  } catch (_0x67b4a2) {
    return _0x67b4a2;
  }
};
exports.formatp = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (_0x5a64cb, _0x48e84a) => _0x5a64cb + " " + _0x48e84a + "B"
});
exports.smsg = (_0x1c5b58, _0x5c51a7, _0x1a7a3a) => {
  try {
    if (!_0x5c51a7) {
      return _0x5c51a7;
    }
    let _0x3b5380 = proto.WebMessageInfo;
    if (_0x5c51a7.key) {
      _0x5c51a7.id = _0x5c51a7.key.id;
      _0x5c51a7.isBaileys = _0x5c51a7.id.startsWith("BAE5") && _0x5c51a7.id.length === 16;
      _0x5c51a7.chat = _0x5c51a7.key.remoteJid;
      _0x5c51a7.fromMe = _0x5c51a7.key.fromMe;
      _0x5c51a7.isGroup = _0x5c51a7.chat.endsWith("@g.us");
      _0x5c51a7.sender = _0x1c5b58.decodeJid(_0x5c51a7.fromMe && _0x1c5b58.user.id || _0x5c51a7.participant || _0x5c51a7.key.participant || _0x5c51a7.chat || "");
      if (_0x5c51a7.isGroup) {
        _0x5c51a7.participant = _0x1c5b58.decodeJid(_0x5c51a7.key.participant) || "";
      }
    }
    if (_0x5c51a7.message) {
      _0x5c51a7.mtype = getContentType(_0x5c51a7.message);
      _0x5c51a7.msg = _0x5c51a7.mtype == "viewOnceMessage" ? _0x5c51a7.message[_0x5c51a7.mtype].message[getContentType(_0x5c51a7.message[_0x5c51a7.mtype].message)] : _0x5c51a7.message[_0x5c51a7.mtype];
      _0x5c51a7.body = _0x5c51a7.message.conversation || _0x5c51a7.msg.caption || _0x5c51a7.msg.text || _0x5c51a7.mtype == "listResponseMessage" && _0x5c51a7.msg.singleSelectReply.selectedRowId || _0x5c51a7.mtype == "buttonsResponseMessage" && _0x5c51a7.msg.selectedButtonId || _0x5c51a7.mtype == "viewOnceMessage" && _0x5c51a7.msg.caption || _0x5c51a7.text;
      let _0x39a88e = _0x5c51a7.quoted = _0x5c51a7.msg.contextInfo ? _0x5c51a7.msg.contextInfo.quotedMessage : null;
      _0x5c51a7.mentionedJid = _0x5c51a7.msg.contextInfo ? _0x5c51a7.msg.contextInfo.mentionedJid : [];
      if (_0x5c51a7.msg.caption) {
        _0x5c51a7.caption = _0x5c51a7.msg.caption;
      }
      if (_0x5c51a7.quoted) {
        let _0x120650 = Object.keys(_0x5c51a7.quoted)[0];
        _0x5c51a7.quoted = _0x5c51a7.quoted[_0x120650];
        if (["productMessage"].includes(_0x120650)) {
          _0x120650 = Object.keys(_0x5c51a7.quoted)[0];
          _0x5c51a7.quoted = _0x5c51a7.quoted[_0x120650];
        }
        if (typeof _0x5c51a7.quoted === "string") {
          _0x5c51a7.quoted = {
            text: _0x5c51a7.quoted
          };
        }
        _0x5c51a7.quoted.mtype = _0x120650;
        _0x5c51a7.quoted.id = _0x5c51a7.msg.contextInfo.stanzaId;
        _0x5c51a7.quoted.chat = _0x5c51a7.msg.contextInfo.remoteJid || _0x5c51a7.chat;
        _0x5c51a7.quoted.isBaileys = _0x5c51a7.quoted.id ? _0x5c51a7.quoted.id.startsWith("BAE5") && _0x5c51a7.quoted.id.length === 16 : false;
        _0x5c51a7.quoted.sender = _0x1c5b58.decodeJid(_0x5c51a7.msg.contextInfo.participant);
        _0x5c51a7.quoted.fromMe = _0x5c51a7.quoted.sender === _0x1c5b58.decodeJid(_0x1c5b58.user.id);
        _0x5c51a7.quoted.text = _0x5c51a7.quoted.text || _0x5c51a7.quoted.caption || _0x5c51a7.quoted.conversation || _0x5c51a7.quoted.contentText || _0x5c51a7.quoted.selectedDisplayText || _0x5c51a7.quoted.title || "";
        _0x5c51a7.quoted.mentionedJid = _0x5c51a7.msg.contextInfo ? _0x5c51a7.msg.contextInfo.mentionedJid : [];
        _0x5c51a7.getQuotedObj = _0x5c51a7.getQuotedMessage = async () => {
          if (!_0x5c51a7.quoted.id) {
            return false;
          }
          let _0x2665b6 = await _0x1a7a3a.loadMessage(_0x5c51a7.chat, _0x5c51a7.quoted.id, _0x1c5b58);
          return smsg(_0x1c5b58, _0x2665b6, _0x1a7a3a);
        };
        let _0x121202 = _0x5c51a7.quoted.fakeObj = _0x3b5380.fromObject({
          key: {
            remoteJid: _0x5c51a7.quoted.chat,
            fromMe: _0x5c51a7.quoted.fromMe,
            id: _0x5c51a7.quoted.id
          },
          message: _0x39a88e,
          ...(_0x5c51a7.isGroup ? {
            participant: _0x5c51a7.quoted.sender
          } : {})
        });
        _0x5c51a7.quoted.delete = () => _0x1c5b58.sendMessage(_0x5c51a7.quoted.chat, {
          delete: _0x121202.key
        });
        _0x5c51a7.quoted.copyNForward = (_0x872aa4, _0x7d2d30 = false, _0xa6b8e4 = {}) => _0x1c5b58.copyNForward(_0x872aa4, _0x121202, _0x7d2d30, _0xa6b8e4);
        _0x5c51a7.quoted.download = () => _0x1c5b58.downloadMediaMessage(_0x5c51a7.quoted);
      }
    }
    if (_0x5c51a7.msg.url) {
      _0x5c51a7.download = () => _0x1c5b58.downloadMediaMessage(_0x5c51a7.msg);
    }
    _0x5c51a7.text = _0x5c51a7.msg.text || _0x5c51a7.msg.caption || _0x5c51a7.message.conversation || _0x5c51a7.msg.contentText || _0x5c51a7.msg.selectedDisplayText || _0x5c51a7.msg.title || "";
    _0x5c51a7.reply = (_0x24f1e0, _0x2ada55 = _0x5c51a7.chat, _0x997346 = {}) => Buffer.isBuffer(_0x24f1e0) ? _0x1c5b58.sendMedia(_0x2ada55, _0x24f1e0, "file", "", _0x5c51a7, {
      ..._0x997346
    }) : _0x1c5b58.sendText(_0x2ada55, _0x24f1e0, _0x5c51a7, {
      ..._0x997346
    });
    _0x5c51a7.copy = () => smsg(_0x1c5b58, _0x3b5380.fromObject(_0x3b5380.toObject(_0x5c51a7)));
    _0x5c51a7.copyNForward = (_0x45d310 = _0x5c51a7.chat, _0x5371d5 = false, _0x20eb78 = {}) => _0x1c5b58.copyNForward(_0x45d310, _0x5c51a7, _0x5371d5, _0x20eb78);
    _0x1c5b58.appenTextMessage = async (_0x32e788, _0x2c35c9) => {
      let _0x364666 = await generateWAMessage(_0x5c51a7.chat, {
        text: _0x32e788,
        mentions: _0x5c51a7.mentionedJid
      }, {
        userJid: _0x1c5b58.user.id,
        quoted: _0x5c51a7.quoted && _0x5c51a7.quoted.fakeObj
      });
      _0x364666.key.fromMe = areJidsSameUser(_0x5c51a7.sender, _0x1c5b58.user.id);
      _0x364666.key.id = _0x5c51a7.key.id;
      _0x364666.pushName = _0x5c51a7.pushName;
      if (_0x5c51a7.isGroup) {
        _0x364666.participant = _0x5c51a7.sender;
      }
      let _0x5b95b8 = {
        ..._0x2c35c9,
        messages: [proto.WebMessageInfo.fromObject(_0x364666)],
        type: "append"
      };
      _0x1c5b58.ev.emit("messages.upsert", _0x5b95b8);
    };
    return _0x5c51a7;
  } catch (_0x114e3a) {}
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});