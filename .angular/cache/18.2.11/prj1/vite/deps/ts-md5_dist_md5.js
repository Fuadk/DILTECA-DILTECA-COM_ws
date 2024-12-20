import {
  __commonJS
} from "./chunk-4MWRP73S.js";

// node_modules/ts-md5/dist/md5.js
var require_md5 = __commonJS({
  "node_modules/ts-md5/dist/md5.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Md5 = void 0;
    var Md5 = (
      /** @class */
      function() {
        function Md52() {
          this._dataLength = 0;
          this._bufferLength = 0;
          this._state = new Int32Array(4);
          this._buffer = new ArrayBuffer(68);
          this._buffer8 = new Uint8Array(this._buffer, 0, 68);
          this._buffer32 = new Uint32Array(this._buffer, 0, 17);
          this.start();
        }
        Md52.hashStr = function(str, raw) {
          if (raw === void 0) {
            raw = false;
          }
          return this.onePassHasher.start().appendStr(str).end(raw);
        };
        Md52.hashAsciiStr = function(str, raw) {
          if (raw === void 0) {
            raw = false;
          }
          return this.onePassHasher.start().appendAsciiStr(str).end(raw);
        };
        Md52._hex = function(x) {
          var hc = Md52.hexChars;
          var ho = Md52.hexOut;
          var n;
          var offset;
          var j;
          var i;
          for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
              ho[offset + 1 + j] = hc.charAt(n & 15);
              n >>>= 4;
              ho[offset + 0 + j] = hc.charAt(n & 15);
              n >>>= 4;
            }
          }
          return ho.join("");
        };
        Md52._md5cycle = function(x, k) {
          var a = x[0];
          var b = x[1];
          var c = x[2];
          var d = x[3];
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        };
        Md52.prototype.start = function() {
          this._dataLength = 0;
          this._bufferLength = 0;
          this._state.set(Md52.stateIdentity);
          return this;
        };
        Md52.prototype.appendStr = function(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var code;
          var i;
          for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
              buf8[bufLen++] = code;
            } else if (code < 2048) {
              buf8[bufLen++] = (code >>> 6) + 192;
              buf8[bufLen++] = code & 63 | 128;
            } else if (code < 55296 || code > 56319) {
              buf8[bufLen++] = (code >>> 12) + 224;
              buf8[bufLen++] = code >>> 6 & 63 | 128;
              buf8[bufLen++] = code & 63 | 128;
            } else {
              code = (code - 55296) * 1024 + (str.charCodeAt(++i) - 56320) + 65536;
              if (code > 1114111) {
                throw new Error("Unicode standard supports code points up to U+10FFFF");
              }
              buf8[bufLen++] = (code >>> 18) + 240;
              buf8[bufLen++] = code >>> 12 & 63 | 128;
              buf8[bufLen++] = code >>> 6 & 63 | 128;
              buf8[bufLen++] = code & 63 | 128;
            }
            if (bufLen >= 64) {
              this._dataLength += 64;
              Md52._md5cycle(this._state, buf32);
              bufLen -= 64;
              buf32[0] = buf32[16];
            }
          }
          this._bufferLength = bufLen;
          return this;
        };
        Md52.prototype.appendAsciiStr = function(str) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;
          for (; ; ) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
              buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
              break;
            }
            this._dataLength += 64;
            Md52._md5cycle(this._state, buf32);
            bufLen = 0;
          }
          this._bufferLength = bufLen;
          return this;
        };
        Md52.prototype.appendByteArray = function(input) {
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var bufLen = this._bufferLength;
          var i;
          var j = 0;
          for (; ; ) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
              buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
              break;
            }
            this._dataLength += 64;
            Md52._md5cycle(this._state, buf32);
            bufLen = 0;
          }
          this._bufferLength = bufLen;
          return this;
        };
        Md52.prototype.getState = function() {
          var s = this._state;
          return {
            buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
            buflen: this._bufferLength,
            length: this._dataLength,
            state: [s[0], s[1], s[2], s[3]]
          };
        };
        Md52.prototype.setState = function(state) {
          var buf = state.buffer;
          var x = state.state;
          var s = this._state;
          var i;
          this._dataLength = state.length;
          this._bufferLength = state.buflen;
          s[0] = x[0];
          s[1] = x[1];
          s[2] = x[2];
          s[3] = x[3];
          for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
          }
        };
        Md52.prototype.end = function(raw) {
          if (raw === void 0) {
            raw = false;
          }
          var bufLen = this._bufferLength;
          var buf8 = this._buffer8;
          var buf32 = this._buffer32;
          var i = (bufLen >> 2) + 1;
          this._dataLength += bufLen;
          var dataBitsLen = this._dataLength * 8;
          buf8[bufLen] = 128;
          buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
          buf32.set(Md52.buffer32Identity.subarray(i), i);
          if (bufLen > 55) {
            Md52._md5cycle(this._state, buf32);
            buf32.set(Md52.buffer32Identity);
          }
          if (dataBitsLen <= 4294967295) {
            buf32[14] = dataBitsLen;
          } else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
              return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
          }
          Md52._md5cycle(this._state, buf32);
          return raw ? this._state : Md52._hex(this._state);
        };
        Md52.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
        Md52.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        Md52.hexChars = "0123456789abcdef";
        Md52.hexOut = [];
        Md52.onePassHasher = new Md52();
        return Md52;
      }()
    );
    exports.Md5 = Md5;
    if (Md5.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592") {
      throw new Error("Md5 self test failed.");
    }
  }
});
export default require_md5();
//# sourceMappingURL=ts-md5_dist_md5.js.map
