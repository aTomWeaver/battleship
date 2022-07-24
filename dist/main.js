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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nvar _defaultSetup = function _defaultSetup(p1, cpu) {\n  p1.board.placeShip(\"carrier\", \"horizontal\", 0); //       [0, 1, 2, 3, 4]\n\n  p1.board.placeShip(\"battleship\", \"vertical\", 14); //     [14, 24, 34, 44]\n\n  p1.board.placeShip(\"cruiser\", \"horizontal\", 45); //      [45, 46, 47]\n\n  p1.board.placeShip(\"submarine\", \"vertical\", 9); //       [9, 19, 29]\n\n  p1.board.placeShip(\"destroyer\", \"horizontal\", 90); //    [90, 91, 92]\n\n  cpu.board.placeShip(\"carrier\", \"vertical\", 0); //        [0, 10, 20, 30, 40]\n\n  cpu.board.placeShip(\"battleship\", \"vertical\", 8); //     [8, 18, 28, 38]\n\n  cpu.board.placeShip(\"cruiser\", \"horizontal\", 45); //     [45, 46, 47]\n\n  cpu.board.placeShip(\"submarine\", \"vertical\", 9); //      [9, 19, 29]\n\n  cpu.board.placeShip(\"destroyer\", \"horizontal\", 90); //   [90, 91]\n};\n\nvar game = function game() {\n  var playerOne = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Player 1\");\n  var cpu = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"CPU\");\n\n  _defaultSetup(playerOne, cpu);\n\n  var gameIsOver = false;\n  var turn = playerOne.name;\n\n  var checkWin = function checkWin() {\n    if (playerOne.board.allSunken() || cpu.board.allSunken()) return true;\n  };\n\n  var playerMakeMove = function playerMakeMove() {\n    var choice = parseInt(prompt(\"What space?\"));\n\n    if (!cpu.board.totalHits.includes(choice) && choice > 0 && choice < 100) {\n      playerOne.attack(cpu, choice);\n    } else {\n      playerMakeMove();\n    }\n  };\n\n  var cpuMakeMove = function cpuMakeMove() {\n    var choice = Math.floor(Math.random() * 100);\n    console.log(\"cpu choice: \".concat(choice));\n  };\n\n  playerMakeMove(); // while (!checkWin()) {\n  // }\n};\n\n\n/*\nGame loop: \n1 get player choice\n  a. if player has not chosen this before (should be checked on gameboard?)\n2 player attacks\n3 checkWin()\n3.5 update DOM\n4 cpu attacks\n  a. if cpu has not chosen.. etc.\n5 checkWin()\n5.5 update DOM\n*/\n\n//# sourceURL=webpack://my-webpack-project/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n\n\nfunction gameboardFactory() {\n  var _generateBlankBoard = function _generateBlankBoard() {\n    var arr = [];\n\n    for (var i = 0; i < 100; i++) {\n      arr.push({\n        ship: null,\n        isHit: false\n      });\n    }\n\n    return arr;\n  };\n\n  var spaces = _generateBlankBoard();\n\n  var totalHits = [];\n  var ships = {};\n  var sunkenShips = [];\n\n  var allSunken = function allSunken() {\n    if (Object.keys(ships).length > 0 && Object.keys(ships).length === sunkenShips.length) {\n      return true;\n    }\n  };\n\n  var _getShipCoords = function _getShipCoords(length, direction, origin) {\n    var coords = [];\n\n    if (direction === \"vertical\") {\n      for (var i = 0; i < length * 10; i += 10) {\n        coords.push(origin + i);\n      }\n    } else if (direction === \"horizontal\") {\n      for (var _i = 0; _i < length; _i++) {\n        coords.push(origin + _i);\n      }\n    }\n\n    return coords;\n  };\n\n  var _placementDoesNotOverhang = function _placementDoesNotOverhang(coords, direction) {\n    var first = coords[0];\n    var last = coords.slice(-1)[0];\n\n    if (direction === \"horizontal\") {\n      if (first < 10 && last < 10) {\n        return true;\n      } else if (first > 10) {\n        var firstTensPlace = first.toString().split(\"\")[0];\n        var lastTensPlace = last.toString().split(\"\")[0];\n        if (firstTensPlace === lastTensPlace) return true;\n      }\n    } else if (direction === \"vertical\") {\n      if (last < 100) return true;\n    }\n\n    return false;\n  };\n\n  var _placementDoesNotIntersect = function _placementDoesNotIntersect(coords) {\n    // checks the spaces's \"ship\" property for each coordinate\n    return !coords.some(function (pos) {\n      return spaces[pos].ship;\n    });\n  };\n\n  var placeShip = function placeShip(type, direction, origin) {\n    var newShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(type);\n\n    var coords = _getShipCoords(newShip.length, direction, origin);\n\n    if (_placementDoesNotOverhang(coords, direction) && _placementDoesNotIntersect(coords) && !ships[type] // has not already placed this kind of ship\n    ) {\n      coords.forEach(function (pos) {\n        return spaces[pos].ship = type;\n      });\n      ships[type] = newShip;\n    }\n  };\n\n  var receiveHit = function receiveHit(x) {\n    var pos = spaces[x];\n\n    if (!pos.isHit && pos.ship) {\n      pos.isHit = true;\n      ships[pos.ship].hit();\n      totalHits.push(x);\n      if (ships[pos.ship].isSunk()) sunkenShips.push(pos.ship);\n      if (allSunken()) console.log(\"All ships have sunk!\");\n    } else if (!pos.isHit) {\n      pos.isHit = true;\n      totalHits.push(x);\n    } else {\n      return;\n    }\n  };\n\n  return {\n    spaces: spaces,\n    ships: ships,\n    totalHits: totalHits,\n    sunkenShips: sunkenShips,\n    allSunken: allSunken,\n    receiveHit: receiveHit,\n    placeShip: placeShip\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLoop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop.js */ \"./src/gameLoop.js\");\n\n(0,_gameLoop_js__WEBPACK_IMPORTED_MODULE_0__.game)();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/gameboardFactory.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name) {\n    _classCallCheck(this, Player);\n\n    this.name = name;\n    this.board = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();\n    this.misses = [];\n  }\n\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(player, pos) {\n      if (pos < 100) {\n        player.board.receiveHit(pos);\n\n        if (!player.board.spaces[pos].ship && !this.misses.includes(pos)) {\n          this.misses.push(pos);\n        }\n      } else {\n        console.log(\"invalid\");\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction getShipLength(type) {\n  switch (type) {\n    case \"carrier\":\n      return 5;\n\n    case \"battleship\":\n      return 4;\n\n    case \"cruiser\":\n      return 3;\n\n    case \"submarine\":\n      return 3;\n\n    case \"destroyer\":\n      return 2;\n  }\n}\n\nfunction shipFactory(type) {\n  var length = getShipLength(type); // currently unused\n\n  var hits = [];\n\n  var isSunk = function isSunk() {\n    return hits.length === length;\n  };\n\n  var hit = function hit() {\n    if (!isSunk()) {\n      hits.push(hits.length);\n      if (isSunk()) console.log(\"You sank the \".concat(type, \"!\"));\n    }\n  };\n\n  return {\n    isSunk: isSunk,\n    hit: hit,\n    hits: hits,\n    length: length\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/shipFactory.js?");

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