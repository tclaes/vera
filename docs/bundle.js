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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar createAdress = function createAdress(straat, gemeente, postcode, land) {\n  return {\n    straat: straat,\n    gemeente: gemeente,\n    postcode: postcode,\n    land: land\n  };\n};\n\nvar createPerson = function createPerson(voornaam, naam, tel) {\n  var email = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"not provided\";\n\n  return {\n    voornaam: voornaam,\n    naam: naam,\n    tel: tel,\n    email: email\n  };\n};\n\n$('#btnRoute').on('click', function (e) {\n  e.preventDefault();\n  var ophaalAdres = createAdress($('#straat').val(), $('#gemeente').val(), $('#postcode').val(), $('#land').val());\n\n  var bestemming = createAdress($('#straat_bestemming').val(), $('#gemeente_bestemming').val(), $('#postcode_bestemming').val(), $('#land_bestemming').val());\n\n  calcRoute(ophaalAdres, bestemming);\n});\n\n$('#frmRit').on('submit', function (e) {\n  e.preventDefault();\n\n  var ophaalAdres = createAdress($('#straat').val(), $('#gemeente').val(), $('#postcode').val(), $('#land').val());\n\n  var bestemming = createAdress($('#straat_bestemming').val(), $('#gemeente_bestemming').val(), $('#postcode_bestemming').val(), $('#land_bestemming').val());\n\n  var lid = {\n    lidnummer: $('#lidNummer').val(),\n    voornaam: $('#voornaam').val(),\n    naam: $('#naam').val(),\n    email: $('#email').val(),\n    telefoon: $('#zone').val() + ' ' + $('#tel').val()\n  };\n\n  var begeleider = createPerson($('#voornaam_begeleider').val(), $('#naam_begeleider').val(), '' + $('#zone') + $('#tel').val());\n\n  var aanvrager = createPerson($('#voornaam_aanvrager').val(), $('#naam_aanvrager').val(), '' + $('#zone_aanvrager') + $('#tel_aanvrager').val());\n\n  var organisatie = '';\n  if ($('#straat_org').val() !== '') {\n    organisatie = createAdress($('#straat_org').val(), $('#gemeente_org').val(), $('#postcode_org').val(), $('#land_org').val());\n  }\n\n  var ritAanvraag = {\n    lid: lid,\n    begeleider: begeleider,\n    aanvrager: aanvrager,\n    adres: ophaalAdres,\n    organisatie: organisatie,\n    bestemming: bestemming,\n    typeRit: $('#type-rit').val(),\n    aardRit: $('#aard-rit').val(),\n    rollator: $('#rollator').val(),\n    datumOphaling: $('#datum-ophaling').val(),\n    datumTerug: $('#ophaalDatum').val()\n  };\n\n  var json_data = JSON.stringify(ritAanvraag);\n  var url = \"https://vera.bettywebblocks.com/aanvraag\";\n  var ritAanvragen = postRequest(url, json_data);\n  ritAanvragen().then(function (data) {\n    return console.log(JSON.stringify(data));\n  }).catch(function (error) {\n    return console.log(error);\n  });\n});\n\nvar postRequest = function postRequest(url, data) {\n\n  return fetch(url, {\n    method: \"POST\",\n    mode: \"cors\",\n    cache: \"no-cache\",\n    credentials: \"\", //TODO Need to be provided\n    headers: {\n      \"Content-Type\": \"application/json; charset=utf-8\"\n    },\n    redirect: \"follow\", // manual, *follow, error\n    referrer: \"no-referrer\", // no-referrer, *client\n    body: JSON.stringify(data) // body data type must match \"Content-Type\" header\n  }).then(function (data) {\n    return data.json();\n  });\n};\n\nfunction initMap() {\n  directionsService = new google.maps.DirectionsService();\n  directionsDisplay = new google.maps.DirectionsRenderer();\n  var location = new google.maps.LatLng(50.930691, 5.332480);\n  var mapOptions = {\n    zoom: 8,\n    center: location\n  };\n\n  var map = new google.maps.Map(document.getElementById('map'), mapOptions);\n  directionsDisplay.setMap(map);\n  directionsDisplay.setPanel(document.getElementById('directionsPanel'));\n}\n\nvar calcRoute = function calcRoute(start, end) {\n\n  start = Object.values(start).join(' ');\n  end = Object.values(end).join(' ');\n\n  var distanceMatrixService = new google.maps.DistanceMatrixService();\n  distanceMatrixService.getDistanceMatrix({\n    origins: [start],\n    destinations: [end],\n    travelMode: 'DRIVING'\n  }, callback);\n\n  var request = {\n    origin: start,\n    destination: end,\n    travelMode: 'DRIVING'\n  };\n  directionsService.route(request, function (response, status) {\n    if (status == 'OK') {\n      directionsDisplay.setDirections(response);\n    }\n  });\n};\n\nvar callback = function callback(response, status) {\n  if (status == 'OK') {\n    var origins = response.originAddresses;\n    var destinations = response.destinationAddresses;\n\n    for (var i = 0; i < origins.length; i++) {\n      var results = response.rows[i].elements;\n      for (var j = 0; j < results.length; j++) {\n        var element = results[j];\n        var distance = element.distance.text;\n        var duration = element.duration.text;\n        var from = origins[i];\n        var to = destinations[j];\n      }\n    }\n    $('#aantal_km').text(\"Afstand: \" + distance);\n    console.log(distance);\n  }\n};\n\nvar _class = function _class() {\n  _classCallCheck(this, _class);\n};\n\nexports.default = _class;\n;\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });