/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
                    value: true
});
exports.plan = exports.directionNames = exports.directions = undefined;

var _Vector = __webpack_require__(1);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directions = exports.directions = {
                    "n": new _Vector2.default(0, -1),
                    "ne": new _Vector2.default(1, -1),
                    "e": new _Vector2.default(1, 0),
                    "se": new _Vector2.default(1, 1),
                    "s": new _Vector2.default(0, 1),
                    "sw": new _Vector2.default(-1, 1),
                    "w": new _Vector2.default(-1, 0),
                    "nw": new _Vector2.default(-1, -1)
};

var directionNames = exports.directionNames = "n ne e se s sw w nw".split(" ");

var plan = exports.plan = ["############################", "#      #    #      o      ##", "#                          #", "#     ~    #####           #", "##         #   #    ##     #", "###           ## o   #     #", "#           ###      #     #", "#   ####                   #", "#   ##       o        ~    #", "# o  #         o       ### #", "#    #                     #", "############################"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
    function Vector(x, y) {
        _classCallCheck(this, Vector);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector, [{
        key: "plus",
        value: function plus(other) {
            return new Vector(this.x + other.x, this.y + other.y);
        }
    }]);

    return Vector;
}();

exports.default = Vector;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomElement = randomElement;
exports.charFromElement = charFromElement;
exports.elementFromChar = elementFromChar;
exports.dirPlus = dirPlus;

var _Constants = __webpack_require__(0);

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function charFromElement(element) {
  if (element == null) return " ";else return element.originChar;
}

function elementFromChar(legend, ch) {
  if (ch == " ") return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function dirPlus(dir, n) {
  var index = _Constants.directionNames.indexOf(dir);
  return _Constants.directionNames[(index + n + 8) % 8];
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(1);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
    function Grid(width, height) {
        _classCallCheck(this, Grid);

        this.space = new Array(width + height);
        this.width = width;
        this.height = height;
    }

    _createClass(Grid, [{
        key: 'isInside',
        value: function isInside(vector) {
            return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;
        }
    }, {
        key: 'get',
        value: function get(vector) {
            return this.space[vector.x + this.width * vector.y];
        }
    }, {
        key: 'set',
        value: function set(vector, value) {
            this.space[vector.x + this.width * vector.y] = value;
        }
    }, {
        key: 'forEach',
        value: function forEach(f, context) {
            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var value = this.space[x + y * this.width];
                    if (value != null) f.call(context, value, new _Vector2.default(x, y));
                }
            }
        }
    }]);

    return Grid;
}();

exports.default = Grid;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Constants = __webpack_require__(0);

var _Vector = __webpack_require__(1);

var _Vector2 = _interopRequireDefault(_Vector);

var _Grid = __webpack_require__(3);

var _Grid2 = _interopRequireDefault(_Grid);

var _BouncingCritter = __webpack_require__(5);

var _BouncingCritter2 = _interopRequireDefault(_BouncingCritter);

var _Plant = __webpack_require__(11);

var _Plant2 = _interopRequireDefault(_Plant);

var _PlantEater = __webpack_require__(12);

var _PlantEater2 = _interopRequireDefault(_PlantEater);

var _Tiger = __webpack_require__(14);

var _Tiger2 = _interopRequireDefault(_Tiger);

var _SmartPlantEater = __webpack_require__(13);

var _SmartPlantEater2 = _interopRequireDefault(_SmartPlantEater);

var _Wall = __webpack_require__(6);

var _Wall2 = _interopRequireDefault(_Wall);

var _World = __webpack_require__(7);

var _World2 = _interopRequireDefault(_World);

var _LifelikeWorld = __webpack_require__(10);

var _LifelikeWorld2 = _interopRequireDefault(_LifelikeWorld);

var _WallFollower = __webpack_require__(9);

var _WallFollower2 = _interopRequireDefault(_WallFollower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var world = new _World2.default(_Constants.plan, { "#": _Wall2.default, "o": _BouncingCritter2.default, "~": _WallFollower2.default });
var valley = new _LifelikeWorld2.default(["####################################################", "#                 ####         ****              ###", "#   *  @  ##                 ########       OO    ##", "#   *    ##        O O                 ****       *#", "#       ##*                        ##########     *#", "#      ##***  *         ****                     **#", "#* **  #  *  ***      #########                  **#", "#* **  #      *               #   *              **#", "#     ##              #   O   #  ***          ######", "#*            @       #       #   *        O  #    #", "#*                    #  ######                 ** #", "###          ****          ***                  ** #", "#       O                        @         O       #", "#   *     ##  ##  ##  ##               ###      *  #", "#   **         #              *       #####  O     #", "##  **  O   O  #  #    ***  ***        ###      ** #", "###               #   *****                    ****#", "####################################################"], { "#": _Wall2.default,
    "@": _Tiger2.default,
    "O": _SmartPlantEater2.default, // from previous exercise
    "*": _Plant2.default });
var worldElement = document.querySelector('#world');

function updateWorldElement(w) {
    worldElement.innerHTML = w.toString();
}

document.addEventListener('DOMContentLoaded', function () {
    window.setInterval(function () {
        valley.turn();
        updateWorldElement(valley);
    }, 300);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function randomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }


var BouncingCritter = function () {
  function BouncingCritter() {
    _classCallCheck(this, BouncingCritter);

    this.direction = (0, _util.randomElement)(_Constants.directionNames);
  }

  _createClass(BouncingCritter, [{
    key: 'act',
    value: function act(view) {
      if (view.look(this.direction) != " ") {
        this.direction = view.find(" ") || "s";
      }
      return {
        type: "move",
        direction: this.direction
      };
    }
  }]);

  return BouncingCritter;
}();

exports.default = BouncingCritter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = __webpack_require__(3);

var _Grid2 = _interopRequireDefault(_Grid);

var _Vector = __webpack_require__(1);

var _Vector2 = _interopRequireDefault(_Vector);

var _View = __webpack_require__(8);

var _View2 = _interopRequireDefault(_View);

var _Constants = __webpack_require__(0);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
    function World(map, legend) {
        var _this = this;

        _classCallCheck(this, World);

        this.grid = new _Grid2.default(map[0].length, map.length);
        this.legend = legend;
        map.forEach(function (line, y) {
            for (var x = 0; x < line.length; x++) {
                _this.grid.set(new _Vector2.default(x, y), (0, _util.elementFromChar)(legend, line[x]));
            }
        });
    }

    _createClass(World, [{
        key: 'toString',
        value: function toString() {
            var output = "";
            for (var y = 0; y < this.grid.height; y++) {
                for (var x = 0; x < this.grid.width; x++) {
                    var element = this.grid.get(new _Vector2.default(x, y));
                    output += (0, _util.charFromElement)(element);
                }
                output += "\n";
            }
            return output;
        }
    }, {
        key: 'turn',
        value: function turn() {
            var _this2 = this;

            var acted = [];
            this.grid.forEach(function (critter, vector) {
                if (!critter) return;
                if (critter.act && !acted.includes(critter)) {
                    acted.push(critter);
                    _this2.letAct(critter, vector);
                }
            });
        }
    }, {
        key: 'letAct',
        value: function letAct(critter, vector) {
            var action = critter.act(new _View2.default(this, vector));
            if (action && action.type == "move") {
                var dest = this.checkDestination(action, vector);
                if (dest && this.grid.get(dest) == null) {
                    this.grid.set(vector, null);
                    this.grid.set(dest, critter);
                }
            }
        }
    }, {
        key: 'checkDestination',
        value: function checkDestination(action, vector) {
            if (_Constants.directions.hasOwnProperty(action.direction)) {
                var dest = vector.plus(_Constants.directions[action.direction]);
                if (this.grid.isInside(dest)) {
                    return dest;
                }
            }
        }
    }]);

    return World;
}();

exports.default = World;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(world, vector) {
        _classCallCheck(this, View);

        this.world = world;
        this.vector = vector;
    }

    _createClass(View, [{
        key: 'look',
        value: function look(dir) {
            var target = this.vector.plus(_Constants.directions[dir]);
            if (this.world.grid.isInside(target)) {
                return (0, _util.charFromElement)(this.world.grid.get(target));
            } else {
                return "#";
            }
        }
    }, {
        key: 'findAll',
        value: function findAll(ch) {
            var found = [];
            for (var dir in _Constants.directions) {
                if (this.look(dir) == ch) {
                    found.push(dir);
                }
            }
            return found;
        }
    }, {
        key: 'find',
        value: function find(ch) {
            var found = this.findAll(ch);
            if (found.length == 0) return null;
            return (0, _util.randomElement)(found);
        }
    }]);

    return View;
}();

exports.default = View;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WallFollower = function () {
    function WallFollower() {
        _classCallCheck(this, WallFollower);

        this.dir = 's';
    }

    _createClass(WallFollower, [{
        key: 'act',
        value: function act(view) {
            var start = this.dir;
            if (view.look((0, _util.dirPlus)(this.dir, -3)) != ' ') start = this.dir = (0, _util.dirPlus)(this.dir, -2);
            while (view.look(this.dir) != " ") {
                this.dir = (0, _util.dirPlus)(this.dir, 1);
                if (this.dir == start) break;
            }
            return { type: "move", direction: this.dir };
        }
    }]);

    return WallFollower;
}();

exports.default = WallFollower;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _World2 = __webpack_require__(7);

var _World3 = _interopRequireDefault(_World2);

var _View = __webpack_require__(8);

var _View2 = _interopRequireDefault(_View);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionTypes = Object.create(null);

actionTypes.grow = function (critter) {
  critter.energy += 0.5;
  return true;
};

actionTypes.move = function (critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest == null || critter.energy <= 1 || this.grid.get(dest) != null) return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
};

actionTypes.eat = function (critter, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null) return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};

actionTypes.reproduce = function (critter, vector, action) {
  var baby = (0, _util.elementFromChar)(this.legend, critter.originChar);
  var dest = this.checkDestination(action, vector);
  if (dest == null || critter.energy <= 2 * baby.energy || this.grid.get(dest) != null) return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};

var LifelikeWorld = function (_World) {
  _inherits(LifelikeWorld, _World);

  function LifelikeWorld() {
    _classCallCheck(this, LifelikeWorld);

    return _possibleConstructorReturn(this, (LifelikeWorld.__proto__ || Object.getPrototypeOf(LifelikeWorld)).apply(this, arguments));
  }

  _createClass(LifelikeWorld, [{
    key: 'letAct',
    value: function letAct(critter, vector) {
      var action = critter.act(new _View2.default(this, vector));
      var handled = action && action.type in actionTypes && actionTypes[action.type].call(this, critter, vector, action);

      if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0) this.grid.set(vector, null);
      }
    }
  }]);

  return LifelikeWorld;
}(_World3.default);

exports.default = LifelikeWorld;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plant = function () {
    function Plant() {
        _classCallCheck(this, Plant);

        this.energy = 3 + Math.random() * 4;
    }

    _createClass(Plant, [{
        key: "act",
        value: function act(view) {
            if (this.energy > 15) {
                var space = view.find(" ");
                if (space) return { type: "reproduce", direction: space };
            }
            if (this.energy < 20) return { type: "grow" };
        }
    }]);

    return Plant;
}();

exports.default = Plant;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlantEater = function () {
    function PlantEater() {
        _classCallCheck(this, PlantEater);

        this.energy = 20;
    }

    _createClass(PlantEater, [{
        key: "act",
        value: function act(view) {
            var space = view.find(" ");
            if (this.energy > 60 && space) return { type: "reproduce", direction: space };
            var plant = view.find("*");
            if (plant) return { type: "eat", direction: plant };
            if (space) return { type: "move", direction: space };
        }
    }]);

    return PlantEater;
}();

exports.default = PlantEater;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmartPlantEater = function () {
    function SmartPlantEater() {
        _classCallCheck(this, SmartPlantEater);

        this.energy = 20;
    }

    _createClass(SmartPlantEater, [{
        key: "act",
        value: function act(view) {
            var space = view.find(" ");
            if (this.energy > 60 && space) return { type: "reproduce", direction: space };
            var plant = view.find("*");
            if (plant) return { type: "eat", direction: plant };
            if (space) return { type: "move", direction: space };
        }
    }]);

    return SmartPlantEater;
}();

exports.default = SmartPlantEater;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tiger = function () {
    function Tiger() {
        _classCallCheck(this, Tiger);

        this.energy = 50;
    }

    _createClass(Tiger, [{
        key: "act",
        value: function act(view) {
            var space = view.find(" ");
            if (this.energy > 150 && space) return { type: "reproduce", direction: space };
            var prey = view.find("O");
            if (prey) return { type: "eat", direction: prey };
            var plant = view.find("*");
            if (plant) return { type: "eat", direction: plant };
            if (space) return { type: "move", direction: space };
        }
    }]);

    return Tiger;
}();

exports.default = Tiger;

/***/ })
/******/ ]);