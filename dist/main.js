/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\nvar _gameIsOver = /*#__PURE__*/new WeakMap();\n\nvar _updateDOM = /*#__PURE__*/new WeakMap();\n\nvar _getRandSpace = /*#__PURE__*/new WeakMap();\n\nvar game = /*#__PURE__*/_createClass(function game() {\n  var _this = this;\n\n  _classCallCheck(this, game);\n\n  _classPrivateFieldInitSpec(this, _gameIsOver, {\n    writable: true,\n    value: function value() {\n      return _this.p1.board.allSunken() || _this.cpu.board.allSunken() || _this.possibleTurns < 1;\n    }\n  });\n\n  _classPrivateFieldInitSpec(this, _updateDOM, {\n    writable: true,\n    value: function value() {\n      return console.log(\"DOM updated\");\n    }\n  });\n\n  _defineProperty(this, \"switchTurns\", function () {\n    _this.currentTurn === \"p1\" ? _this.currentTurn = \"cpu\" : _this.currentTurn = \"p1\";\n    _this.possibleTurns--;\n  });\n\n  _defineProperty(this, \"update\", function () {\n    _classPrivateFieldGet(_this, _updateDOM).call(_this);\n\n    console.log(\"Game is over: \".concat(_classPrivateFieldGet(_this, _gameIsOver).call(_this)));\n\n    _this.switchTurns();\n  });\n\n  _defineProperty(this, \"makeMove\", function (attacker, target, opponent) {\n    if (!opponent.board.totalHits.includes(target) && target >= 0 && target < 100) {\n      attacker.attack(opponent, target);\n      return true;\n    } else {\n      console.log(\"player: \".concat(attacker.board.totalHits, \"\\ncpu: \").concat(opponent.board.totalHits));\n      return false;\n    }\n  });\n\n  _classPrivateFieldInitSpec(this, _getRandSpace, {\n    writable: true,\n    value: function value() {\n      return Math.floor(Math.random() * 100);\n    }\n  });\n\n  _defineProperty(this, \"getCpuMove\", function () {\n    var choice = _classPrivateFieldGet(_this, _getRandSpace).call(_this);\n\n    while (_this.p1.board.totalHits.includes(choice)) {\n      choice = _classPrivateFieldGet(_this, _getRandSpace).call(_this);\n    }\n\n    return choice;\n  });\n\n  _defineProperty(this, \"defaultSetup\", function () {\n    _this.p1.board.placeShip(\"carrier\", \"horizontal\", 0); //       [0, 1, 2, 3, 4]\n\n\n    _this.p1.board.placeShip(\"battleship\", \"vertical\", 14); //     [14, 24, 34, 44]\n\n\n    _this.p1.board.placeShip(\"cruiser\", \"horizontal\", 45); //      [45, 46, 47]\n\n\n    _this.p1.board.placeShip(\"submarine\", \"vertical\", 9); //       [9, 19, 29]\n\n\n    _this.p1.board.placeShip(\"destroyer\", \"horizontal\", 90); //    [90, 91, 92]\n\n\n    _this.cpu.board.placeShip(\"carrier\", \"vertical\", 0); //        [0, 10, 20, 30, 40]\n\n\n    _this.cpu.board.placeShip(\"battleship\", \"vertical\", 8); //     [8, 18, 28, 38]\n\n\n    _this.cpu.board.placeShip(\"cruiser\", \"horizontal\", 45); //     [45, 46, 47]\n\n\n    _this.cpu.board.placeShip(\"submarine\", \"vertical\", 9); //      [9, 19, 29]\n\n\n    _this.cpu.board.placeShip(\"destroyer\", \"horizontal\", 90); //   [90, 91]\n\n  });\n\n  this.currentTurn = \"p1\";\n  this.possibleTurns = 100;\n  this.p1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"p1\");\n  this.cpu = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"cpu\");\n} // helpers\n);\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n\n\nfunction gameboardFactory() {\n  var _generateBlankBoard = function _generateBlankBoard() {\n    var arr = [];\n\n    for (var i = 0; i < 100; i++) {\n      arr.push({\n        ship: null,\n        isHit: false\n      });\n    }\n\n    return arr;\n  };\n\n  var spaces = _generateBlankBoard();\n\n  var totalHits = [];\n  var ships = {};\n  var sunkenShips = [];\n\n  var allSunken = function allSunken() {\n    return Object.keys(ships).length > 0 && Object.keys(ships).length === sunkenShips.length;\n  };\n\n  var _getShipCoords = function _getShipCoords(length, direction, origin) {\n    var coords = [];\n\n    if (direction === \"vertical\") {\n      for (var i = 0; i < length * 10; i += 10) {\n        coords.push(origin + i);\n      }\n    } else if (direction === \"horizontal\") {\n      for (var _i = 0; _i < length; _i++) {\n        coords.push(origin + _i);\n      }\n    }\n\n    return coords;\n  };\n\n  var _placementDoesNotOverhang = function _placementDoesNotOverhang(coords, direction) {\n    var first = coords[0];\n    var last = coords.slice(-1)[0];\n\n    if (direction === \"horizontal\") {\n      if (first < 10 && last < 10) {\n        return true;\n      } else if (first > 10) {\n        var firstTensPlace = first.toString().split(\"\")[0];\n        var lastTensPlace = last.toString().split(\"\")[0];\n        if (firstTensPlace === lastTensPlace) return true;\n      }\n    } else if (direction === \"vertical\") {\n      if (last < 100) return true;\n    }\n\n    return false;\n  };\n\n  var _placementDoesNotIntersect = function _placementDoesNotIntersect(coords) {\n    // checks the spaces's \"ship\" property for each coordinate\n    return !coords.some(function (pos) {\n      return spaces[pos].ship;\n    });\n  };\n\n  var placeShip = function placeShip(type, direction, origin) {\n    var newShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(type);\n\n    var coords = _getShipCoords(newShip.length, direction, origin);\n\n    if (!ships[type] && // has not already placed this kind of ship\n    _placementDoesNotOverhang(coords, direction) && _placementDoesNotIntersect(coords)) {\n      coords.forEach(function (pos) {\n        return spaces[pos].ship = type;\n      });\n      ships[type] = newShip;\n    }\n  };\n\n  var receiveHit = function receiveHit(space) {\n    var target = spaces[space];\n\n    if (!target.isHit && target.ship) {\n      target.isHit = true;\n      ships[target.ship].hit();\n      totalHits.push(space);\n      if (ships[target.ship].isSunk()) sunkenShips.push(target.ship);\n      if (allSunken()) console.log(\"All ships have sunk!\");\n    } else if (!target.isHit) {\n      target.isHit = true;\n      totalHits.push(space);\n    } else {\n      return;\n    }\n  };\n\n  return {\n    spaces: spaces,\n    ships: ships,\n    totalHits: totalHits,\n    sunkenShips: sunkenShips,\n    allSunken: allSunken,\n    receiveHit: receiveHit,\n    placeShip: placeShip\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLoop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop.js */ \"./src/gameLoop.js\");\n\nvar GAME = new _gameLoop_js__WEBPACK_IMPORTED_MODULE_0__.game();\nvar p1 = GAME.p1;\nvar cpu = GAME.cpu;\nGAME.defaultSetup();\nvar attackBtn = document.getElementById('test-button');\nattackBtn.addEventListener('click', function () {\n  // check to see if player's choice was valid before proceeding\n  if (GAME.makeMove(p1, 2, cpu)) {\n    console.log(\"cpu hits: \".concat(cpu.board.totalHits));\n    GAME.update();\n    GAME.makeMove(cpu, GAME.getCpuMove(), p1);\n    console.log(\"p1 hits: \".concat(p1.board.totalHits));\n    GAME.update();\n  }\n\n  ;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/gameboardFactory.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name) {\n    _classCallCheck(this, Player);\n\n    this.name = name;\n    this.board = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();\n    this.misses = [];\n  }\n\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(opponent, targetSpace) {\n      if (targetSpace < 100) {\n        opponent.board.receiveHit(targetSpace);\n\n        if (!opponent.board.spaces[targetSpace].ship && !this.misses.includes(targetSpace)) {\n          this.misses.push(targetSpace);\n        }\n      } else {\n        console.log(\"invalid\");\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction getShipLength(type) {\n  switch (type) {\n    case \"carrier\":\n      return 5;\n\n    case \"battleship\":\n      return 4;\n\n    case \"cruiser\":\n      return 3;\n\n    case \"submarine\":\n      return 3;\n\n    case \"destroyer\":\n      return 2;\n  }\n}\n\nfunction shipFactory(type) {\n  var length = getShipLength(type);\n  var hits = [];\n\n  var isSunk = function isSunk() {\n    return hits.length === length;\n  };\n\n  var hit = function hit() {\n    if (!isSunk()) {\n      hits.push(hits.length);\n      if (isSunk()) console.log(\"You sank the \".concat(type, \"!\"));\n    }\n  };\n\n  return {\n    isSunk: isSunk,\n    hit: hit,\n    hits: hits,\n    length: length\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;