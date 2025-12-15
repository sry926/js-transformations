"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _main() {
  // ----------
  (function (input) {
    var lines = input.split("\n");

    var _splitNum = splitNum(lines[0]),
        _splitNum2 = _slicedToArray(_splitNum, 3),
        A = _splitNum2[0],
        B = _splitNum2[1],
        Q = _splitNum2[2];

    var s = splitNum(lines.slice(1).slice(0, A));
    var t = splitNum(lines.slice(1 + A).slice(0, B));
    var xs = splitNum(lines.slice(1 + A + B).slice(0, Q));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;
        // search for nearby S.
        var sNearby = binarySearch(s, x);
        var min = Infinity;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = [sNearby.low.value, sNearby.high.value].filter(function (x) {
            return !isNaN(x);
          })[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var y = _step2.value;

            var _tNearby = binarySearch(t, y);

            var res = Math.abs(x - y) + minIgnoreNaN(Math.abs(_tNearby.low.value - y), Math.abs(_tNearby.high.value - y));

            if (min > res) {
              min = res;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var tNearby = binarySearch(t, x);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = [tNearby.low.value, tNearby.high.value].filter(function (x) {
            return !isNaN(x);
          })[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _y = _step3.value;

            var _sNearby = binarySearch(s, _y);

            var _res = Math.abs(x - _y) + minIgnoreNaN(Math.abs(_sNearby.low.value - _y), Math.abs(_sNearby.high.value - _y));

            if (min > _res) {
              min = _res;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        console.log(min);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    function binarySearch(arr, target) {
      var start = 0,
          end = arr.length;

      while (start + 1 < end) {
        var mid = Math.floor((end + start) / 2);
        var val = arr[mid];

        if (val <= target) {
          start = mid;
        } else {
          end = mid;
        }
      }

      if (start === end) {
        return {
          exact: true,
          low: {
            index: start,
            value: arr[start]
          },
          high: {
            index: start,
            value: arr[start]
          }
        };
      } else {
        return {
          exact: false,
          low: {
            index: start,
            value: arr[start]
          },
          high: {
            index: start + 1,
            value: arr[start + 1]
          }
        };
      }
    }

    function minIgnoreNaN() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Math.min.apply(Math, _toConsumableArray(args.filter(function (x) {
        return !isNaN(x);
      })));
    }
  })(require("fs").readFileSync("/dev/stdin", "utf8"));

  function splitNum(line) {
    return (Array.isArray(line) ? line : line.split(/\s+/)).map(function (n) {
      return parseInt(n);
    });
  }
  /**
   * Iterates over integers in [start, end).
   */


  /**
   * implementation of arbitrary-precision unsigned integer.
   */
  var Longer =
  /*#__PURE__*/
  function () {
    function Longer(value) {
      _classCallCheck(this, Longer);

      // enough for 64bit
      this.data = [0, 0, 0];
      var idx = 0;

      while (value !== 0) {
        this.data[idx] = value % Longer.border;
        value = Math.floor(value / Longer.border);
        idx++;
      }
    }

    _createClass(Longer, [{
      key: "add",
      value: function add(right) {
        var result = new Longer(0);
        var max = Math.max(this.data.length, right.data.length);
        var carry = 0;
        var idx = 0;

        for (; idx < max; idx++) {
          var sum = (this.data[idx] || 0) + (right.data[idx] || 0) + carry;
          result.data[idx] = sum % Longer.border;
          carry = Math.floor(sum / Longer.border);
        }

        if (carry > 0) {
          result.data[idx] = carry;
        }

        return result;
      }
    }, {
      key: "mul",
      value: function mul(right) {
        var result = new Longer(0);

        for (var lidx = 0; lidx < this.data.length; lidx++) {
          for (var ridx = 0; ridx < right.data.length; ridx++) {
            var me = this.data[lidx] * right.data[ridx];
            var tidx = lidx + ridx;
            var value = me;

            while (value > 0) {
              var sum = (result.data[tidx] || 0) + value;
              result.data[tidx] = sum % Longer.border;
              value = Math.floor(sum / Longer.border);
              tidx++;
            }
          }
        }

        return result;
      }
    }, {
      key: "toString",
      value: function toString() {
        var d = this.data.concat().reverse(); // let fsti = d.findIndex(v => v !== 0);

        var fsti = function (arr, pred) {
          for (var i = 0; i < arr.length; i++) {
            if (pred(arr[i], i)) {
              return i;
            }
          }

          return null;
        } // not full polyfill!
        (d, function (v) {
          return v !== 0;
        });

        if (fsti == null) {
          return "0";
        }

        return d.slice(fsti).map(function (v, i) {
          if (i === 0) {
            return String(v);
          } else {
            // return String(v).padStart(Longer.digits, "0");
            return padStart(String(v), Longer.digits, "0");
          }
        }).join("");

        function padStart(str, num, pad) {
          var n = num - str.length;
          var result = "";

          for (var i = 0; i < n; i++) {
            result += pad;
          }

          return result + str;
        }
      }
    }]);

    return Longer;
  }();
  /** digits per element. */


  Longer.digits = 7;
  Longer.border = Math.pow(10, Longer.digits);
  /**
   * Runs a recursive function expressed as a generator function.
   */
  // ----------
}

_main();
