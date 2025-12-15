"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var AtCoder;
(function (AtCoder) {
    var abc115;
    (function (abc115) {
        var Program = /** @class */ (function () {
            function Program() {
            }
            /**
             * in
             *  25
             * out
             *  Christmas
             */
            Program.prototype.main = function (inp) {
                var days = {
                    '22': 'Christmas Eve Eve Eve',
                    '23': 'Christmas Eve Eve',
                    '24': 'Christmas Eve',
                    '25': 'Christmas',
                };
                console.log(days[inp]);
            };
            return Program;
        }());
        var prg = new Program();
        prg.main(fs.readFileSync('/dev/stdin', 'utf8').trim());
    })(abc115 = AtCoder.abc115 || (AtCoder.abc115 = {}));
})(AtCoder || (AtCoder = {}));
