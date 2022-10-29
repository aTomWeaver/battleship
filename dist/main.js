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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bindGameEvents\": () => (/* binding */ bindGameEvents)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nfunction bindGameEvents(game) {\n  // rename to something more specific\n  var cpuSpaces = document.querySelectorAll(\".cpu-space\");\n  var p1 = game.p1;\n  var cpu = game.cpu;\n  cpuSpaces.forEach(function (space) {\n    return space.addEventListener(\"click\", function () {\n      // player turn then cpu turn\n      if (game.makeMove(p1, parseInt(space.dataset.index), cpu)) {\n        // returns if player clicks invalid space\n        (0,_render__WEBPACK_IMPORTED_MODULE_0__.refreshBoard)(cpu);\n        (0,_render__WEBPACK_IMPORTED_MODULE_0__.updateActionDisplay)(p1); // CPU move\n\n        game.makeMove(cpu, game.getCpuMove(), p1);\n        (0,_render__WEBPACK_IMPORTED_MODULE_0__.refreshBoard)(p1);\n        (0,_render__WEBPACK_IMPORTED_MODULE_0__.updateActionDisplay)(cpu); // logs\n\n        console.log('\\nP1:');\n        console.table(p1.attempts);\n        console.log('\\nCPU:');\n        console.table(cpu.attempts);\n      }\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/events.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\nvar _gameIsOver = /*#__PURE__*/new WeakMap();\n\nvar _getRandSpace = /*#__PURE__*/new WeakMap();\n\nvar game = /*#__PURE__*/_createClass(function game() {\n  var _this = this;\n\n  _classCallCheck(this, game);\n\n  _classPrivateFieldInitSpec(this, _gameIsOver, {\n    writable: true,\n    value: function value() {\n      return _this.p1.board.allSunken() || _this.cpu.board.allSunken();\n    }\n  });\n\n  _defineProperty(this, \"makeMove\", function (attacker, target, opponent) {\n    if (!opponent.board.ownAttackedSpaces.includes(target) && // if space has not been attacked yet\n    target >= 0 && target < 100) {\n      attacker.attack(opponent, target);\n      attacker.attempts.push({\n        space: target,\n        result: attacker.lastAttackResult\n      }); // \n\n      return true; // reports that attack was successful\n    } else {\n      console.log(\"Invalid choice!\");\n      return false;\n    }\n  });\n\n  _classPrivateFieldInitSpec(this, _getRandSpace, {\n    writable: true,\n    value: function value() {\n      return Math.floor(Math.random() * 100);\n    }\n  });\n\n  _defineProperty(this, \"getCpuMove\", function () {\n    var choice;\n\n    if (_this.cpu.currentTargetShip == 'none') {\n      choice = _classPrivateFieldGet(_this, _getRandSpace).call(_this);\n\n      while (_this.p1.board.ownAttackedSpaces.includes(choice)) {\n        choice = _classPrivateFieldGet(_this, _getRandSpace).call(_this);\n      }\n    }\n\n    return choice;\n  });\n\n  _defineProperty(this, \"defaultSetup\", function () {\n    _this.p1.board.placeShip(\"carrier\", \"horizontal\", 0); //       [0, 1, 2, 3, 4]\n\n\n    _this.p1.board.placeShip(\"battleship\", \"vertical\", 14); //     [14, 24, 34, 44]\n\n\n    _this.p1.board.placeShip(\"cruiser\", \"horizontal\", 45); //      [45, 46, 47]\n\n\n    _this.p1.board.placeShip(\"submarine\", \"vertical\", 9); //       [9, 19, 29]\n\n\n    _this.p1.board.placeShip(\"destroyer\", \"horizontal\", 90); //    [90, 91, 92]\n\n\n    _this.cpu.board.placeShip(\"carrier\", \"vertical\", 0); //        [0, 10, 20, 30, 40]\n\n\n    _this.cpu.board.placeShip(\"battleship\", \"vertical\", 8); //     [8, 18, 28, 38]\n\n\n    _this.cpu.board.placeShip(\"cruiser\", \"horizontal\", 45); //     [45, 46, 47]\n\n\n    _this.cpu.board.placeShip(\"submarine\", \"vertical\", 9); //      [9, 19, 29]\n\n\n    _this.cpu.board.placeShip(\"destroyer\", \"horizontal\", 90); //   [90, 91]\n\n  });\n\n  this.p1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"p1\");\n  this.cpu = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"cpu\");\n  this.cpu.currentTargetShip = 'none';\n  /*\n  // when cpu gets two successful hits in a row, ^ this value will become a new targetShip\n  // from the targetShip class in cpuAI.js\n  */\n} // helpers\n);\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/game.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardFactory\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n\n\nfunction gameboardFactory() {\n  var _generateBlankBoard = function _generateBlankBoard() {\n    var arr = [];\n\n    for (var i = 0; i < 100; i++) {\n      arr.push({\n        ship: null,\n        isHit: false\n      });\n    }\n\n    return arr;\n  };\n\n  var spaces = _generateBlankBoard();\n\n  var ownAttackedSpaces = [];\n  var ships = {};\n  var sunkenShips = [];\n\n  var allSunken = function allSunken() {\n    return Object.keys(ships).length > 0 && Object.keys(ships).length === sunkenShips.length;\n  };\n\n  var _getShipCoords = function _getShipCoords(length, direction, origin) {\n    var coords = [];\n\n    if (direction === \"vertical\") {\n      for (var i = 0; i < length * 10; i += 10) {\n        coords.push(origin + i);\n      }\n    } else if (direction === \"horizontal\") {\n      for (var _i = 0; _i < length; _i++) {\n        coords.push(origin + _i);\n      }\n    }\n\n    return coords;\n  };\n\n  var _placementDoesNotOverhang = function _placementDoesNotOverhang(coords, direction) {\n    var first = coords[0];\n    var last = coords.slice(-1)[0];\n\n    if (direction === \"horizontal\") {\n      if (first < 10 && last < 10) {\n        return true;\n      } else if (first > 10) {\n        var firstTensPlace = first.toString().split(\"\")[0];\n        var lastTensPlace = last.toString().split(\"\")[0];\n        if (firstTensPlace === lastTensPlace) return true;\n      }\n    } else if (direction === \"vertical\") {\n      if (last < 100) return true;\n    }\n\n    return false;\n  };\n\n  var _placementDoesNotIntersect = function _placementDoesNotIntersect(coords) {\n    // checks the spaces's \"ship\" property for each coordinate\n    return !coords.some(function (pos) {\n      return spaces[pos].ship;\n    });\n  };\n\n  var placeShip = function placeShip(type, direction, origin) {\n    var newShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(type);\n\n    var coords = _getShipCoords(newShip.length, direction, origin);\n\n    if (!ships[type] && // has not already placed this kind of ship\n    _placementDoesNotOverhang(coords, direction) && _placementDoesNotIntersect(coords)) {\n      coords.forEach(function (pos) {\n        return spaces[pos].ship = type;\n      });\n      ships[type] = newShip;\n    }\n  };\n\n  var receiveHit = function receiveHit(space) {\n    var target = spaces[space];\n\n    if (!target.isHit && target.ship) {\n      target.isHit = true;\n      ships[target.ship].hit();\n      if (ships[target.ship].isSunk()) sunkenShips.push(target.ship);\n      if (allSunken()) console.log(\"All ships have sunk!\");\n    } else if (!target.isHit) {\n      target.isHit = true;\n    } else {}\n\n    ownAttackedSpaces.push(space);\n  };\n\n  return {\n    spaces: spaces,\n    ships: ships,\n    ownAttackedSpaces: ownAttackedSpaces,\n    sunkenShips: sunkenShips,\n    allSunken: allSunken,\n    receiveHit: receiveHit,\n    placeShip: placeShip\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nvar GAME = new _game_js__WEBPACK_IMPORTED_MODULE_0__.game();\nGAME.defaultSetup();\n(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderMain)();\n(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderPlacedShips)(GAME.p1); //this should be done on a ship-by-ship basis\n\n(0,_events_js__WEBPACK_IMPORTED_MODULE_2__.bindGameEvents)(GAME);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/gameboardFactory.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name) {\n    _classCallCheck(this, Player);\n\n    this.name = name;\n    this.board = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();\n    this.lastAttackResult;\n    this.attempts = [];\n  }\n\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(opponent, targetSpace) {\n      opponent.board.receiveHit(targetSpace);\n\n      if (!opponent.board.spaces[targetSpace].ship && // opponent doesn't have a ship on targetSpace &&\n      !this.attempts.filter(function (att) {\n        return att.result === \"MISS\";\n      }).find(function (elm) {\n        return elm.space == targetSpace;\n      }) // attacker has not already missed targetSpace\n      ) {\n        this.lastAttackResult = \"MISS\";\n      } else {\n        this.lastAttackResult = \"HIT\";\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/player.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshBoard\": () => (/* binding */ refreshBoard),\n/* harmony export */   \"renderMain\": () => (/* binding */ renderMain),\n/* harmony export */   \"renderPlacedShips\": () => (/* binding */ renderPlacedShips),\n/* harmony export */   \"updateActionDisplay\": () => (/* binding */ updateActionDisplay)\n/* harmony export */ });\nfunction _generateBoard(player, parentElm) {\n  for (var i = 0; i < 100; i++) {\n    var space = document.createElement(\"div\");\n    space.classList.add(\"\".concat(player, \"-space\"));\n    space.dataset.index = i;\n    parentElm.append(space);\n  }\n}\n\nfunction renderMain() {\n  var pageCtr = document.querySelector(\".page-ctr\");\n  var pageTitle = document.createElement(\"h1\");\n  pageTitle.id = \"page-title\";\n  pageTitle.innerText = \"TUSSLEBOAT\";\n  var appCtr = document.createElement(\"div\");\n  appCtr.classList.add(\"app-ctr\"); // CPU ELEMENTS\n\n  var p1ActionDisplay = document.createElement(\"div\");\n  p1ActionDisplay.classList.add(\"p1-action-display\");\n  var cpuBoard = document.createElement(\"div\");\n  cpuBoard.classList.add(\"cpu-board\");\n\n  _generateBoard(\"cpu\", cpuBoard);\n\n  var cpuHUD = document.createElement(\"div\");\n  cpuHUD.classList.add(\"hud\");\n  var cpuTitle = document.createElement(\"h2\");\n  cpuTitle.classList.add(\"player-hud-title\");\n  cpuTitle.innerText = \"CPU\";\n  var cpuSunkenShips = document.createElement(\"div\");\n  cpuSunkenShips.classList.add(\"sunken-ships\"); // P1 ELEMENTS\n\n  var p1HUD = document.createElement(\"div\");\n  p1HUD.classList.add(\"hud\");\n  var p1Title = document.createElement(\"h2\");\n  p1Title.classList.add(\"player-hud-title\");\n  p1Title.innerText = \"Player One\";\n  var p1SunkenShips = document.createElement(\"div\");\n  p1SunkenShips.classList.add(\"sunken-ships\");\n  var p1Board = document.createElement(\"div\");\n  p1Board.classList.add(\"p1-board\");\n\n  _generateBoard(\"p1\", p1Board);\n\n  var cpuActionDisplay = document.createElement(\"div\");\n  cpuActionDisplay.classList.add(\"cpu-action-display\"); // APPEND\n\n  cpuHUD.append(cpuTitle, cpuSunkenShips);\n  p1HUD.append(p1Title, p1SunkenShips);\n  appCtr.append(p1ActionDisplay, cpuBoard, cpuHUD, p1HUD, p1Board, cpuActionDisplay);\n  pageCtr.append(pageTitle, appCtr);\n  document.body.append(pageCtr);\n}\n\nfunction updateActionDisplay(player) {\n  var actionDisplay = document.querySelector(\".\".concat(player.name, \"-action-display\"));\n  var result = player.lastAttackResult;\n  actionDisplay.style.color = 'white';\n  if (result === 'HIT') actionDisplay.style.color = 'red';\n  actionDisplay.innerText = \"\".concat(result, \"!\");\n  actionDisplay.classList.add('action-display-vis');\n  setTimeout(function () {\n    return actionDisplay.classList.remove('action-display-vis');\n  }, 100);\n}\n\nfunction renderPlacedShips(player) {\n  var spaces = document.querySelectorAll(\".p1-space\");\n\n  for (var i = 0; i < player.board.spaces.length; i++) {\n    var space = spaces[i];\n    if (player.board.spaces[i].ship) space.classList.add(\"occupied\");\n  }\n}\n\nfunction refreshBoard(player) {\n  var playerSpaces = document.querySelectorAll(\".\".concat(player.name, \"-space\"));\n\n  for (var i = 0; i < player.board.spaces.length; i++) {\n    var space = playerSpaces[i];\n\n    if (player.board.spaces[i].isHit && player.board.spaces[i].ship) {\n      space.classList.add(\"hit\");\n    } else if (player.board.spaces[i].isHit) {\n      space.classList.add(\"miss\");\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/render.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction getShipLength(type) {\n  switch (type) {\n    case \"carrier\":\n      return 5;\n\n    case \"battleship\":\n      return 4;\n\n    case \"cruiser\":\n      return 3;\n\n    case \"submarine\":\n      return 3;\n\n    case \"destroyer\":\n      return 2;\n  }\n}\n\nfunction shipFactory(type) {\n  var length = getShipLength(type);\n  var hits = [];\n\n  var isSunk = function isSunk() {\n    return hits.length === length;\n  };\n\n  var hit = function hit() {\n    if (!isSunk()) {\n      hits.push(hits.length);\n      if (isSunk()) console.log(\"You sank the \".concat(type, \"!\"));\n    }\n  };\n\n  return {\n    isSunk: isSunk,\n    hit: hit,\n    hits: hits,\n    length: length\n  };\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/shipFactory.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary: #66fcf1;\\n  --secondary: #45a29e;\\n  --tertiary: #1f2833;\\n  --background: #0b0c10;\\n  --occupied: #ffa536;\\n  --hit: #db452a;\\n  --miss: #c5c6c7;\\n\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  /* border: 1px solid white; */\\n  margin: 0px;\\n}\\n\\nbody {\\n  margin: 0px;\\n  padding: 0px;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: var(--background);\\n}\\n\\n.page-ctr {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#page-title {\\n  font-size: 65px;\\n  /* font-family: 'Rubik Distressed', cursive; */\\n  font-family: Impact, Haettenschweiler, \\\"Arial Narrow Bold\\\", sans-serif;\\n  color: var(--primary);\\n  margin: 0px;\\n}\\n\\n.app-ctr {\\n  margin-top: 5px;\\n  width: 1380px;\\n  height: 800px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  grid-gap: 20px;\\n}\\n\\n.hud {\\n  background-color: var(--tertiary);\\n  border-radius: 10px;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n.hud * {\\n  color: white;\\n  font-size: 25px;\\n}\\n\\n.player-hud-title {\\n  margin-bottom: 5px;\\n}\\n\\n.cpu-board, .p1-board {\\n  background-color: var(--tertiary);\\n  border: 1px solid white;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  pointer-events: all;\\n}\\n\\n.cpu-board div, .p1-board div {\\n  border: 1px solid white;\\n}\\n\\n.occupied {\\n  background-color: var(--occupied);\\n}\\n\\n.hit {\\n  background-color: var(--hit);\\n}\\n\\n.miss {\\n  background-color: var(--miss);\\n}\\n\\n.p1-action-display, .cpu-action-display {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-style: bold;\\n  font-size: 60px;\\n  color: white;\\n  opacity: 0;\\n  transition: opacity 2s;\\n}\\n\\n.action-display-vis {\\n  opacity: 1;\\n  transition: none;\\n}\\n\\n.fire-msg {\\n  color: white;\\n  font-size: 75px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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