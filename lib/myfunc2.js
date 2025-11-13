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
exports.color = (_0x386224, _0x2c3b5e) => {
  if (!_0x2c3b5e) {
    return chalk.green(_0x386224);
  } else {
    return chalk.keyword(_0x2c3b5e)(_0x386224);
  }
};
exports.getGroupAdmins = _0x29ef41 => {
  let _0xd63b52 = [];
  for (let _0x51539e of _0x29ef41) {
    if (_0x51539e.admin === "superadmin") {
      _0xd63b52.push(_0x51539e.id);
    } else if (_0x51539e.admin === "admin") {
      _0xd63b52.push(_0x51539e.id);
    } else {
      "";
    }
  }
  return _0xd63b52 || [];
};
exports.getBuffer = async (_0x1cc365, _0x71ca1) => {
  try {
    if (_0x71ca1) {
      _0x71ca1;
    } else {
      ({});
    }
    const _0x551ebb = await axios({
      method: "get",
      url: _0x1cc365,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1
      },
      ..._0x71ca1,
      responseType: "arraybuffer"
    });
    return _0x551ebb.data;
  } catch (_0x26d8e4) {
    return _0x26d8e4;
  }
};
exports.bytesToSize = (_0x4cf175, _0x5e3c71 = 2) => {
  if (_0x4cf175 === 0) {
    return "0 Bytes";
  }
  const _0xfaafe7 = 1024;
  const _0x4dade7 = _0x5e3c71 < 0 ? 0 : _0x5e3c71;
  const _0x1b315f = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const _0x2930dd = Math.floor(Math.log(_0x4cf175) / Math.log(_0xfaafe7));
  return parseFloat((_0x4cf175 / Math.pow(_0xfaafe7, _0x2930dd)).toFixed(_0x4dade7)) + " " + _0x1b315f[_0x2930dd];
};
exports.checkBandwidth = async () => {
  let _0xdb264d = 0;
  let _0x1a0beb = 0;
  for (let _0x5ca9fc of await require("node-os-utils").netstat.stats()) {
    _0xdb264d += parseInt(_0x5ca9fc.inputBytes);
    _0x1a0beb += parseInt(_0x5ca9fc.outputBytes);
  }
  return {
    download: exports.bytesToSize(_0xdb264d),
    upload: exports.bytesToSize(_0x1a0beb)
  };
};
exports.formatSize = _0x40071e => {
  const _0xd4defc = ["Bytes", "KB", "MB", "GB", "TB"];
  if (_0x40071e === 0) {
    return "0 Bytes";
  }
  const _0x3b6686 = Math.floor(Math.log(_0x40071e) / Math.log(1024));
  return (_0x40071e / Math.pow(1024, _0x3b6686)).toFixed(2) + " " + _0xd4defc[_0x3b6686];
};
exports.getBuffer = async (_0x4721bc, _0x45ae68) => {
  try {
    _0x45ae68 = _0x45ae68 || {};
    const _0x24bc16 = await axios({
      method: "get",
      url: _0x4721bc,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1
      },
      ..._0x45ae68,
      responseType: "arraybuffer"
    });
    return _0x24bc16.data;
  } catch (_0x27185e) {
    return _0x27185e;
  }
};
exports.isUrl = _0x3aaece => {
  return _0x3aaece.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
};
exports.jsonformat = _0x6efc71 => {
  return JSON.stringify(_0x6efc71, null, 2);
};
exports.nganuin = async (_0x2e4373, _0x51bea3) => {
  try {
    _0x51bea3 = _0x51bea3 || {};
    const _0x22631b = await axios({
      method: "GET",
      url: _0x2e4373,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x51bea3
    });
    return _0x22631b.data;
  } catch (_0x42376d) {
    return _0x42376d;
  }
};
exports.pickRandom = _0x1664cc => {
  return "" + Math.floor(Math.random() * 10000) + _0x1664cc;
};
exports.runtime = function (_0x41663b) {
  _0x41663b = Number(_0x41663b);
  var _0x371f19 = Math.floor(_0x41663b / 86400);
  var _0x4b3c48 = Math.floor(_0x41663b % 86400 / 3600);
  var _0x5f654c = Math.floor(_0x41663b % 3600 / 60);
  var _0x59e943 = Math.floor(_0x41663b % 60);
  var _0x31fa5d = _0x371f19 > 0 ? _0x371f19 + (_0x371f19 == 1 ? " day, " : " days, ") : "";
  var _0x4f05a4 = _0x4b3c48 > 0 ? _0x4b3c48 + (_0x4b3c48 == 1 ? " hour, " : " hours, ") : "";
  var _0x1e2695 = _0x5f654c > 0 ? _0x5f654c + (_0x5f654c == 1 ? " minute, " : " minutes, ") : "";
  var _0xf9164f = _0x59e943 > 0 ? _0x59e943 + (_0x59e943 == 1 ? " second" : " seconds") : "";
  return _0x31fa5d + _0x4f05a4 + _0x1e2695 + _0xf9164f;
};
exports.shorturl = async function shorturl(_0x2d7f4d) {
  try {
    const _0x5e65b4 = {
      url: _0x2d7f4d
    };
    const _0xc3921e = await axios.post("https://shrtrl.vercel.app/", _0x5e65b4);
    return _0xc3921e.data.data.shortUrl;
  } catch (_0x42468f) {
    return _0x42468f;
  }
};
exports.formatp = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (_0x4c4513, _0x4eb066) => _0x4c4513 + " " + _0x4eb066 + "B"
});
exports.smsg = (_0x36a263, _0x1fedf9, _0x376bb5) => {
  try {
    if (!_0x1fedf9) {
      return _0x1fedf9;
    }
    let _0x462608 = proto.WebMessageInfo;
    if (_0x1fedf9.key) {
      _0x1fedf9.id = _0x1fedf9.key.id;
      _0x1fedf9.isBaileys = _0x1fedf9.id.startsWith("BAE5") && _0x1fedf9.id.length === 16;
      _0x1fedf9.chat = _0x1fedf9.key.remoteJid;
      _0x1fedf9.fromMe = _0x1fedf9.key.fromMe;
      _0x1fedf9.isGroup = _0x1fedf9.chat.endsWith("@g.us");
      _0x1fedf9.sender = _0x36a263.decodeJid(_0x1fedf9.fromMe && _0x36a263.user.id || _0x1fedf9.participant || _0x1fedf9.key.participant || _0x1fedf9.chat || "");
      if (_0x1fedf9.isGroup) {
        _0x1fedf9.participant = _0x36a263.decodeJid(_0x1fedf9.key.participant) || "";
      }
    }
    if (_0x1fedf9.message) {
      _0x1fedf9.mtype = getContentType(_0x1fedf9.message);
      _0x1fedf9.msg = _0x1fedf9.mtype == "viewOnceMessage" ? _0x1fedf9.message[_0x1fedf9.mtype].message[getContentType(_0x1fedf9.message[_0x1fedf9.mtype].message)] : _0x1fedf9.message[_0x1fedf9.mtype];
      _0x1fedf9.body = _0x1fedf9.message.conversation || _0x1fedf9.msg.caption || _0x1fedf9.msg.text || _0x1fedf9.mtype == "listResponseMessage" && _0x1fedf9.msg.singleSelectReply.selectedRowId || _0x1fedf9.mtype == "buttonsResponseMessage" && _0x1fedf9.msg.selectedButtonId || _0x1fedf9.mtype == "viewOnceMessage" && _0x1fedf9.msg.caption || _0x1fedf9.text;
      let _0x205a63 = _0x1fedf9.quoted = _0x1fedf9.msg.contextInfo ? _0x1fedf9.msg.contextInfo.quotedMessage : null;
      _0x1fedf9.mentionedJid = _0x1fedf9.msg.contextInfo ? _0x1fedf9.msg.contextInfo.mentionedJid : [];
      if (_0x1fedf9.msg.caption) {
        _0x1fedf9.caption = _0x1fedf9.msg.caption;
      }
      if (_0x1fedf9.quoted) {
        let _0x9d781f = Object.keys(_0x1fedf9.quoted)[0];
        _0x1fedf9.quoted = _0x1fedf9.quoted[_0x9d781f];
        if (["productMessage"].includes(_0x9d781f)) {
          _0x9d781f = Object.keys(_0x1fedf9.quoted)[0];
          _0x1fedf9.quoted = _0x1fedf9.quoted[_0x9d781f];
        }
        if (typeof _0x1fedf9.quoted === "string") {
          _0x1fedf9.quoted = {
            text: _0x1fedf9.quoted
          };
        }
        _0x1fedf9.quoted.mtype = _0x9d781f;
        _0x1fedf9.quoted.id = _0x1fedf9.msg.contextInfo.stanzaId;
        _0x1fedf9.quoted.chat = _0x1fedf9.msg.contextInfo.remoteJid || _0x1fedf9.chat;
        _0x1fedf9.quoted.isBaileys = _0x1fedf9.quoted.id ? _0x1fedf9.quoted.id.startsWith("BAE5") && _0x1fedf9.quoted.id.length === 16 : false;
        _0x1fedf9.quoted.sender = _0x36a263.decodeJid(_0x1fedf9.msg.contextInfo.participant);
        _0x1fedf9.quoted.fromMe = _0x1fedf9.quoted.sender === _0x36a263.decodeJid(_0x36a263.user.id);
        _0x1fedf9.quoted.text = _0x1fedf9.quoted.text || _0x1fedf9.quoted.caption || _0x1fedf9.quoted.conversation || _0x1fedf9.quoted.contentText || _0x1fedf9.quoted.selectedDisplayText || _0x1fedf9.quoted.title || "";
        _0x1fedf9.quoted.mentionedJid = _0x1fedf9.msg.contextInfo ? _0x1fedf9.msg.contextInfo.mentionedJid : [];
        _0x1fedf9.getQuotedObj = _0x1fedf9.getQuotedMessage = async () => {
          if (!_0x1fedf9.quoted.id) {
            return false;
          }
          let _0x4f0c3d = await _0x376bb5.loadMessage(_0x1fedf9.chat, _0x1fedf9.quoted.id, _0x36a263);
          return smsg(_0x36a263, _0x4f0c3d, _0x376bb5);
        };
        let _0x8d14e4 = _0x1fedf9.quoted.fakeObj = _0x462608.fromObject({
          key: {
            remoteJid: _0x1fedf9.quoted.chat,
            fromMe: _0x1fedf9.quoted.fromMe,
            id: _0x1fedf9.quoted.id
          },
          message: _0x205a63,
          ...(_0x1fedf9.isGroup ? {
            participant: _0x1fedf9.quoted.sender
          } : {})
        });
        _0x1fedf9.quoted.delete = () => _0x36a263.sendMessage(_0x1fedf9.quoted.chat, {
          delete: _0x8d14e4.key
        });
        _0x1fedf9.quoted.copyNForward = (_0xbf697c, _0x2d1e0e = false, _0x15fbf7 = {}) => _0x36a263.copyNForward(_0xbf697c, _0x8d14e4, _0x2d1e0e, _0x15fbf7);
        _0x1fedf9.quoted.download = () => _0x36a263.downloadMediaMessage(_0x1fedf9.quoted);
      }
    }
    if (_0x1fedf9.msg.url) {
      _0x1fedf9.download = () => _0x36a263.downloadMediaMessage(_0x1fedf9.msg);
    }
    _0x1fedf9.text = _0x1fedf9.msg.text || _0x1fedf9.msg.caption || _0x1fedf9.message.conversation || _0x1fedf9.msg.contentText || _0x1fedf9.msg.selectedDisplayText || _0x1fedf9.msg.title || "";
    _0x1fedf9.reply = (_0x1b11b8, _0x42387d = _0x1fedf9.chat, _0x24c2f7 = {}) => Buffer.isBuffer(_0x1b11b8) ? _0x36a263.sendMedia(_0x42387d, _0x1b11b8, "file", "", _0x1fedf9, {
      ..._0x24c2f7
    }) : _0x36a263.sendText(_0x42387d, _0x1b11b8, _0x1fedf9, {
      ..._0x24c2f7
    });
    _0x1fedf9.copy = () => smsg(_0x36a263, _0x462608.fromObject(_0x462608.toObject(_0x1fedf9)));
    _0x1fedf9.copyNForward = (_0x23cfd6 = _0x1fedf9.chat, _0xa4f945 = false, _0x5a839a = {}) => _0x36a263.copyNForward(_0x23cfd6, _0x1fedf9, _0xa4f945, _0x5a839a);
    _0x36a263.appenTextMessage = async (_0x3c0635, _0x5b3322) => {
      let _0x49f497 = await generateWAMessage(_0x1fedf9.chat, {
        text: _0x3c0635,
        mentions: _0x1fedf9.mentionedJid
      }, {
        userJid: _0x36a263.user.id,
        quoted: _0x1fedf9.quoted && _0x1fedf9.quoted.fakeObj
      });
      _0x49f497.key.fromMe = areJidsSameUser(_0x1fedf9.sender, _0x36a263.user.id);
      _0x49f497.key.id = _0x1fedf9.key.id;
      _0x49f497.pushName = _0x1fedf9.pushName;
      if (_0x1fedf9.isGroup) {
        _0x49f497.participant = _0x1fedf9.sender;
      }
      let _0x3685a7 = {
        ..._0x5b3322,
        messages: [proto.WebMessageInfo.fromObject(_0x49f497)],
        type: "append"
      };
      _0x36a263.ev.emit("messages.upsert", _0x3685a7);
    };
    return _0x1fedf9;
  } catch (_0x57a97a) {}
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});