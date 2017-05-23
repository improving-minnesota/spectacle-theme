(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 287);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49)
  , defined = __webpack_require__(32);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export adjustHue */
/* unused harmony export animation */
/* unused harmony export backgroundImages */
/* unused harmony export backgrounds */
/* unused harmony export borderColor */
/* unused harmony export borderRadius */
/* unused harmony export borderStyle */
/* unused harmony export borderWidth */
/* unused harmony export buttons */
/* unused harmony export clearFix */
/* unused harmony export complement */
/* unused harmony export darken */
/* unused harmony export desaturate */
/* unused harmony export directionalProperty */
/* unused harmony export ellipsis */
/* unused harmony export em */
/* unused harmony export fontFace */
/* unused harmony export grayscale */
/* unused harmony export invert */
/* unused harmony export hideText */
/* unused harmony export hiDPI */
/* unused harmony export hsl */
/* unused harmony export hsla */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lighten$1; });
/* unused harmony export margin */
/* unused harmony export mix */
/* unused harmony export modularScale */
/* unused harmony export normalize */
/* unused harmony export opacify */
/* unused harmony export padding */
/* unused harmony export parseToHsl */
/* unused harmony export parseToRgb */
/* unused harmony export placeholder */
/* unused harmony export position */
/* unused harmony export radialGradient */
/* unused harmony export rem */
/* unused harmony export retinaImage */
/* unused harmony export rgb */
/* unused harmony export rgba */
/* unused harmony export saturate */
/* unused harmony export selection */
/* unused harmony export setHue */
/* unused harmony export setLightness */
/* unused harmony export setSaturation */
/* unused harmony export shade */
/* unused harmony export size */
/* unused harmony export stripUnit */
/* unused harmony export textInputs */
/* unused harmony export timingFunctions */
/* unused harmony export tint */
/* unused harmony export toColorString */
/* unused harmony export transitions */
/* unused harmony export transparentize */
/* unused harmony export wordWrap */
//      
var positionMap = ['top', 'right', 'bottom', 'left'];

function generateProperty(property, position) {
  if (!property) return position;
  var splitPropertyName = property.split('-');
  splitPropertyName.splice(1, 0, position);
  return splitPropertyName.join('-');
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};
  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i]) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }
  return styles;
}

/**
 * The directional property helper enables shorthand for direction based properties. It accepts a property and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'padding-top': '12px',
 *   'padding-right': '24px',
 *   'padding-bottom': '36px',
 *   'padding-left': '48px'
 * }
 */

function directionalProperty(property) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  // $FlowIgnoreNextLine doesn't understand destructuring with chained defaults.
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === undefined ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === undefined ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === undefined ? secondValue : _values$3;

  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

//      

/**
 * Check if a string ends with something
 * @private
 */
var endsWith = function (string, suffix) {
  return string.substr(-suffix.length) === suffix;
};

//      

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit(100px)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit(100px)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

//      

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
var pxtoFactory$1 = function pxtoFactory$1(to) {
  return function (pxval) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';

    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the first argument to ' + to + '(), got "' + pxval + '" instead.');
      }
      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the second argument to ' + to + '(), got "' + base + '" instead.');
      }
      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error('Passed invalid pixel value ("' + pxval + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    if (typeof newBase === 'string') {
      throw new Error('Passed invalid base value ("' + base + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    return '' + newPxval / newBase + to;
  };
};

//      

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em = pxtoFactory$1('em');

//      

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

/** */

/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'font-size': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   font-size: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'font-size': '1.77689em'
 * }
 */
function modularScale(steps) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1em';
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'perfectFourth';

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio;

  if (typeof realBase === 'string') {
    throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "' + base + '"');
  }

  return realBase * Math.pow(realRatio, steps) + 'em';
}

//      

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */
var rem = pxtoFactory$1('rem');

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};





var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

//      

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */

function clearFix() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&';

  var pseudoSelector = parent + '::after';
  return defineProperty({}, pseudoSelector, {
    'clear': 'both',
    'content': '""',
    'display': 'table'
  });
}

//      

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'max-width': '250px',
 *   'overflow': 'hidden',
 *   'text-overflow': 'ellipsis',
 *   'white-space': 'nowrap',
 *   'word-wrap': 'normal'
 * }
 */

function ellipsis() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100%';

  return {
    'display': 'inline-block',
    'max-width': width,
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal'
  };
}

//      

/** */

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return 'url("' + fontFilePath + '.' + format + '")';
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return 'local("' + font + '")';
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));
  if (fontFilePath) fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  return fontReferences.join(', ');
}

/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro'
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * injectGlobal`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro'
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'font-family': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */

function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === undefined ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange;

  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');
  if (!fontFilePath && !localFonts) throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  if (localFonts && !Array.isArray(localFonts)) throw new Error('fontFace expects localFonts to be an array.');
  if (!Array.isArray(fileFormats)) throw new Error('fontFace expects fileFormats to be an array.');

  var fontFaceDeclaration = {
    '@font-face': {
      'font-family': fontFamily,
      'src': generateSources(fontFilePath, localFonts, fileFormats),
      'unicode-range': unicodeRange,
      'font-stretch': fontStretch,
      'font-style': fontStyle,
      'font-variant': fontVariant,
      'font-weight': fontWeight
    }
  };

  // Removes undefined fields for cleaner css object.
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

//      

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background-image': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background-image: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'background-image': 'url(logo.png)',
 *   'text-indent': '101%',
 *   'overflow': 'hidden',
 *   'white-space': 'nowrap',
 * }
 */

function hideText() {
  return {
    'text-indent': '101%',
    'overflow': 'hidden',
    'white-space': 'nowrap'
  };
}

//      

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */

function hiDPI() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.3;

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

var _opinionatedRules;
var _unopinionatedRules;

//      
var opinionatedRules = (_opinionatedRules = {
  'html': {
    'font-family': 'sans-serif'
  },

  'body': {
    'margin': '0'
  }

}, defineProperty(_opinionatedRules, 'a:active,\n  a:hover', {
  'outline-width': '0'
}), defineProperty(_opinionatedRules, 'button,\n  input,\n  optgroup,\n  select,\n  textarea', {
  'font-family': 'sans-serif',
  'font-size': '100%',
  'line-height': '1.15'
}), _opinionatedRules);

var unopinionatedRules = (_unopinionatedRules = {
  'html': {
    'line-height': '1.15',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%'
  }

}, defineProperty(_unopinionatedRules, 'article,\n  aside,\n  footer,\n  header,\n  nav,\n  section', {
  'display': 'block'
}), defineProperty(_unopinionatedRules, 'h1', {
  'font-size': '2em',
  'margin': '0.67em 0'
}), defineProperty(_unopinionatedRules, 'figcaption,\n  figure,\n  main', {
  'display': 'block'
}), defineProperty(_unopinionatedRules, 'figure', {
  'margin': '1em 40px'
}), defineProperty(_unopinionatedRules, 'hr', {
  'box-sizing': 'content-box',
  'height': '0',
  'overflow': 'visible'
}), defineProperty(_unopinionatedRules, 'pre', {
  'font-family': 'monospace, monospace',
  'font-size': '1em'
}), defineProperty(_unopinionatedRules, 'a', {
  'background-color': 'transparent',
  '-webkit-text-decoration-skip': 'objects'
}), defineProperty(_unopinionatedRules, 'abbr[title]', defineProperty({
  'border-bottom': 'none',
  'text-decoration': 'underline'
}, 'text-decoration', 'underline dotted')), defineProperty(_unopinionatedRules, 'b,\n  strong', {
  'font-weight': 'inherit'
}), defineProperty(_unopinionatedRules, 'code,\n  kbd,\n  samp', {
  'font-family': 'monospace, monospace',
  'font-size': '1em'
}), defineProperty(_unopinionatedRules, 'dfn', {
  'font-style': 'italic'
}), defineProperty(_unopinionatedRules, 'mark', {
  'background-color': '#ff0',
  'color': '#000'
}), defineProperty(_unopinionatedRules, 'small', {
  'font-size': '80%'
}), defineProperty(_unopinionatedRules, 'sub,\n  sup', {
  'font-size': '75%',
  'line-height': '0',
  'position': 'relative',
  'vertical-align': 'baseline'
}), defineProperty(_unopinionatedRules, 'sub', {
  'bottom': '-0.25em'
}), defineProperty(_unopinionatedRules, 'sup', {
  'top': '-0.5em'
}), defineProperty(_unopinionatedRules, 'audio,\n  video', {
  'display': 'inline-block'
}), defineProperty(_unopinionatedRules, 'audio:not([controls])', {
  'display': 'none',
  'height': '0'
}), defineProperty(_unopinionatedRules, 'img', {
  'border-style': 'none'
}), defineProperty(_unopinionatedRules, 'svg:not(:root)', {
  'overflow': 'hidden'
}), defineProperty(_unopinionatedRules, 'button,\n  input,\n  optgroup,\n  select,\n  textarea', {
  'margin': '0'
}), defineProperty(_unopinionatedRules, 'button,\n  input', {
  'overflow': 'visible'
}), defineProperty(_unopinionatedRules, 'button,\n  select', {
  'text-transform': 'none'
}), defineProperty(_unopinionatedRules, 'button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]', {
  '-webkit-appearance': 'button'
}), defineProperty(_unopinionatedRules, 'button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner', {
  'border-style': 'none',
  'padding': '0'
}), defineProperty(_unopinionatedRules, 'button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring', {
  'outline': '1px dotted ButtonText'
}), defineProperty(_unopinionatedRules, 'fieldset', {
  'border': '1px solid #c0c0c0',
  'margin': '0 2px',
  'padding': '0.35em 0.625em 0.75em'
}), defineProperty(_unopinionatedRules, 'legend', {
  'box-sizing': 'border-box',
  'color': 'inherit',
  'display': 'table',
  'max-width': '100%',
  'padding': '0',
  'white-space': 'normal'
}), defineProperty(_unopinionatedRules, 'progress', {
  'display': 'inline-block',
  'vertical-align': 'baseline'
}), defineProperty(_unopinionatedRules, 'textarea', {
  'overflow': 'auto'
}), defineProperty(_unopinionatedRules, '[type="checkbox"],\n  [type="radio"]', {
  'box-sizing': 'border-box',
  'padding': '0'
}), defineProperty(_unopinionatedRules, '[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button', {
  'height': 'auto'
}), defineProperty(_unopinionatedRules, '[type="search"]', {
  '-webkit-appearance': 'textfield',
  'outline-offset': '-2px'
}), defineProperty(_unopinionatedRules, '[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration', {
  '-webkit-appearance': 'none'
}), defineProperty(_unopinionatedRules, '::-webkit-file-upload-button', {
  '-webkit-appearance': 'button',
  'font': 'inherit'
}), defineProperty(_unopinionatedRules, 'details,\n  menu', {
  'display': 'block'
}), defineProperty(_unopinionatedRules, 'summary', {
  'display': 'list-item'
}), defineProperty(_unopinionatedRules, 'canvas', {
  'display': 'inline-block'
}), defineProperty(_unopinionatedRules, 'template', {
  'display': 'none'
}), defineProperty(_unopinionatedRules, '[hidden]', {
  'display': 'none'
}), _unopinionatedRules);

function mergeRules(baseRules, additionalRules) {
  var mergedRules = _extends({}, baseRules);
  Object.keys(additionalRules).forEach(function (key) {
    if (mergedRules[key]) {
      mergedRules[key] = _extends({}, mergedRules[key], additionalRules[key]);
    } else {
      mergedRules[key] = _extends({}, additionalRules[key]);
    }
  });
  return mergedRules;
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobal`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   font-family: sans-serif,
 *   line-height: 1.15,
 *   -ms-text-size-adjust: 100%,
 *   -webkit-text-size-adjust: 100%,
 * } ...
 */

function normalize(excludeOpinionated) {
  if (excludeOpinionated) return unopinionatedRules;
  return mergeRules(unopinionatedRules, opinionatedRules);
}

//      

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';

  return _ref = {}, defineProperty(_ref, parent + '::-webkit-input-placeholder', _extends({}, styles)), defineProperty(_ref, parent + ':-moz-placeholder', _extends({}, styles)), defineProperty(_ref, parent + '::-moz-placeholder', _extends({}, styles)), defineProperty(_ref, parent + ':-ms-input-placeholder', _extends({}, styles)), _ref;
}

var _templateObject = taggedTemplateLiteral(['radial-gradient(', '', '', '', ')'], ['radial-gradient(', '', '', '', ')']);

//      

/** */

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';
  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];
    // Adds leading coma if properties preceed color-stops
    if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ', ' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += '' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // Only adds substitution if it is defined
    } else if (arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (arguments.length <= i + 1 ? undefined : arguments[i + 1]) + ' ';
    }
  }
  return template.trim();
}

/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'background-color': '#00FFFF',
 *   'background-image': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */

function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  return {
    'background-color': fallback || parseFallback(colorStops),
    'background-image': constructGradientValue(_templateObject, position, shape, extent, colorStops.join(', '))
  };
}

//      

/**
 * The retina-image mixin is a helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize) {
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'png';
  var retinaFilename = arguments[3];
  var retinaSuffix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '_2x';

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  }
  // Replace the dot at the beginning of the passed extension if one exists
  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + '.' + ext : '' + filename + retinaSuffix + '.' + ext;

  return defineProperty({
    backgroundImage: 'url(' + filename + '.' + ext + ')'
  }, hiDPI(), {
    backgroundImage: 'url(' + rFilename + ')',
    backgroundSize: backgroundSize
  });
}

//      

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'background': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'background': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'background-color':'blue',
 *   },
 *   'section::selection': {
 *     'background-color': 'blue',
 *   }
 * }
 */

function selection(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return _ref = {}, defineProperty(_ref, parent + '::-moz-selection', _extends({}, styles)), defineProperty(_ref, parent + '::selection', _extends({}, styles)), _ref;
}

//      

/* eslint-disable key-spacing */
var functionsMap = {
  'easeInBack': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  'easeInCirc': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  'easeInCubic': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  'easeInExpo': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  'easeInQuad': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  'easeInQuart': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  'easeInQuint': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  'easeInSine': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',

  'easeOutBack': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  'easeOutCubic': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  'easeOutCirc': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  'easeOutExpo': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  'easeOutQuad': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  'easeOutQuart': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  'easeOutQuint': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  'easeOutSine': 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',

  'easeInOutBack': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  'easeInOutCirc': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  'easeInOutCubic': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  'easeInOutExpo': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  'easeInOutQuad': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  'easeInOutQuart': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  'easeInOutQuint': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  'easeInOutSine': 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
};
/* eslint-enable key-spacing */

/** */

/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transition-timing-function': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transition-timing-function: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

function timingFunctions(timingFunction) {
  return functionsMap[timingFunction];
}

//      

/**
 * Provides an easy way to change the `word-wrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-all')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-all')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflow-wrap: 'break-all',
 *   word-wrap: 'break-all',
 *   word-break: 'break-all',
 * }
 */

function wordWrap() {
  var wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'break-word';

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    'overflow-wrap': wrap,
    'word-wrap': wrap,
    'word-break': wordBreak
  };
}

//      


function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness) {
  var convert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : convertToInt;

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

//      
var namedColorMap = {
  'aliceblue': 'f0f8ff',
  'antiquewhite': 'faebd7',
  'aqua': '00ffff',
  'aquamarine': '7fffd4',
  'azure': 'f0ffff',
  'beige': 'f5f5dc',
  'bisque': 'ffe4c4',
  'black': '000',
  'blanchedalmond': 'ffebcd',
  'blue': '0000ff',
  'blueviolet': '8a2be2',
  'brown': 'a52a2a',
  'burlywood': 'deb887',
  'cadetblue': '5f9ea0',
  'chartreuse': '7fff00',
  'chocolate': 'd2691e',
  'coral': 'ff7f50',
  'cornflowerblue': '6495ed',
  'cornsilk': 'fff8dc',
  'crimson': 'dc143c',
  'cyan': '00ffff',
  'darkblue': '00008b',
  'darkcyan': '008b8b',
  'darkgoldenrod': 'b8860b',
  'darkgray': 'a9a9a9',
  'darkgreen': '006400',
  'darkgrey': 'a9a9a9',
  'darkkhaki': 'bdb76b',
  'darkmagenta': '8b008b',
  'darkolivegreen': '556b2f',
  'darkorange': 'ff8c00',
  'darkorchid': '9932cc',
  'darkred': '8b0000',
  'darksalmon': 'e9967a',
  'darkseagreen': '8fbc8f',
  'darkslateblue': '483d8b',
  'darkslategray': '2f4f4f',
  'darkslategrey': '2f4f4f',
  'darkturquoise': '00ced1',
  'darkviolet': '9400d3',
  'deeppink': 'ff1493',
  'deepskyblue': '00bfff',
  'dimgray': '696969',
  'dimgrey': '696969',
  'dodgerblue': '1e90ff',
  'firebrick': 'b22222',
  'floralwhite': 'fffaf0',
  'forestgreen': '228b22',
  'fuchsia': 'ff00ff',
  'gainsboro': 'dcdcdc',
  'ghostwhite': 'f8f8ff',
  'gold': 'ffd700',
  'goldenrod': 'daa520',
  'gray': '808080',
  'green': '008000',
  'greenyellow': 'adff2f',
  'grey': '808080',
  'honeydew': 'f0fff0',
  'hotpink': 'ff69b4',
  'indianred': 'cd5c5c',
  'indigo': '4b0082',
  'ivory': 'fffff0',
  'khaki': 'f0e68c',
  'lavender': 'e6e6fa',
  'lavenderblush': 'fff0f5',
  'lawngreen': '7cfc00',
  'lemonchiffon': 'fffacd',
  'lightblue': 'add8e6',
  'lightcoral': 'f08080',
  'lightcyan': 'e0ffff',
  'lightgoldenrodyellow': 'fafad2',
  'lightgray': 'd3d3d3',
  'lightgreen': '90ee90',
  'lightgrey': 'd3d3d3',
  'lightpink': 'ffb6c1',
  'lightsalmon': 'ffa07a',
  'lightseagreen': '20b2aa',
  'lightskyblue': '87cefa',
  'lightslategray': '789',
  'lightslategrey': '789',
  'lightsteelblue': 'b0c4de',
  'lightyellow': 'ffffe0',
  'lime': '0f0',
  'limegreen': '32cd32',
  'linen': 'faf0e6',
  'magenta': 'f0f',
  'maroon': '800000',
  'mediumaquamarine': '66cdaa',
  'mediumblue': '0000cd',
  'mediumorchid': 'ba55d3',
  'mediumpurple': '9370db',
  'mediumseagreen': '3cb371',
  'mediumslateblue': '7b68ee',
  'mediumspringgreen': '00fa9a',
  'mediumturquoise': '48d1cc',
  'mediumvioletred': 'c71585',
  'midnightblue': '191970',
  'mintcream': 'f5fffa',
  'mistyrose': 'ffe4e1',
  'moccasin': 'ffe4b5',
  'navajowhite': 'ffdead',
  'navy': '000080',
  'oldlace': 'fdf5e6',
  'olive': '808000',
  'olivedrab': '6b8e23',
  'orange': 'ffa500',
  'orangered': 'ff4500',
  'orchid': 'da70d6',
  'palegoldenrod': 'eee8aa',
  'palegreen': '98fb98',
  'paleturquoise': 'afeeee',
  'palevioletred': 'db7093',
  'papayawhip': 'ffefd5',
  'peachpuff': 'ffdab9',
  'peru': 'cd853f',
  'pink': 'ffc0cb',
  'plum': 'dda0dd',
  'powderblue': 'b0e0e6',
  'purple': '800080',
  'rebeccapurple': '639',
  'red': 'f00',
  'rosybrown': 'bc8f8f',
  'royalblue': '4169e1',
  'saddlebrown': '8b4513',
  'salmon': 'fa8072',
  'sandybrown': 'f4a460',
  'seagreen': '2e8b57',
  'seashell': 'fff5ee',
  'sienna': 'a0522d',
  'silver': 'c0c0c0',
  'skyblue': '87ceeb',
  'slateblue': '6a5acd',
  'slategray': '708090',
  'slategrey': '708090',
  'snow': 'fffafa',
  'springgreen': '00ff7f',
  'steelblue': '4682b4',
  'tan': 'd2b48c',
  'teal': '008080',
  'thistle': 'd8bfd8',
  'tomato': 'ff6347',
  'turquoise': '40e0d0',
  'violet': 'ee82ee',
  'wheat': 'f5deb3',
  'white': 'fff',
  'whitesmoke': 'f5f5f5',
  'yellow': 'ff0',
  'yellowgreen': '9acd32'
};

/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */
function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? '#' + namedColorMap[normalizedColorName] : color;
}

//      

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;

/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToRgb(color) {
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4], 10)
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4], 10)
    };
  }
  throw new Error('Couldn\'t parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.');
}

//      


function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;

  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return { hue: 0, saturation: 0, lightness: lightness, alpha: color.alpha };
    } else {
      return { hue: 0, saturation: 0, lightness: lightness };
    }
  }

  var hue = void 0;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;
  if (color.alpha !== undefined) {
    return { hue: hue, saturation: saturation, lightness: lightness, alpha: color.alpha };
  }
  return { hue: hue, saturation: saturation, lightness: lightness };
}

//      

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

//      

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};

//      

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue('#' + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue('#' + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 * }
 */
function rgba(value, green, blue, alpha) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? rgb(value, green, blue) : 'rgba(' + value + ',' + green + ',' + blue + ',' + alpha + ')';
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && green === undefined && blue === undefined && alpha === undefined) {
    return value.alpha >= 1 ? rgb(value.red, value.green, value.blue) : 'rgba(' + value.red + ',' + value.green + ',' + value.blue + ',' + value.alpha + ')';
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

//      

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : 'rgba(' + hslToRgb(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

//      

var isRgb = function isRgb(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number';
};

var isRgba = function isRgba(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha !== 'number';
};

var isHsla = function isHsla(color) {
  return (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' &&
  // $FlowIgnoreNextLine not sure why this complains
  typeof color.alpha === 'number';
};

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
function toColorString(color) {
  if (isRgba(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return rgba(color);
  } else if (isRgb(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return rgb(color);
  } else if (isHsla(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return hsla(color);
  } else if (isHsl(color)) {
    // $FlowIgnoreNextLine not sure why this complains
    return hsl(color);
  }
  throw new Error('Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.');
}

//      

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js


// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}

function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

//      

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue(180, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue(180, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */
function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + degree) % 360
  }));
}

var adjustHue$1 = curry(adjustHue);

//      

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

//      

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

//      

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken(0.2, 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken(0.2, 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - amount)
  }));
}

var darken$1 = curry(darken);

//      

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - amount)
  }));
}

var desaturate$1 = curry(desaturate);

//      

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function grayscale(color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: 0
  }));
}

//      

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

//      

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + amount)
  }));
}

var lighten$1 = curry(lighten);

//      

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  var color = arguments[1];
  var otherColor = arguments[2];

  var parsedColor1 = parseToRgb(color);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  });

  // The formular is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  var alphaDelta = color1.alpha - color2.alpha;
  var x = weight * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;

  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0)
  };

  return rgba(mixedColor);
}

var mix$1 = curry(mix);

//      
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, alpha + amount)
  });
  return rgba(colorWithAlpha);
}

var opacify$1 = curry(opacify);

//      

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */
function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + amount)
  }));
}

var saturate$1 = curry(saturate);

//      

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue(244, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue(244, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */
function setHue(hue, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    hue: hue
  }));
}

var setHue$1 = curry(setHue);

//      

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */
function setLightness(lightness, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: lightness
  }));
}

var setLightness$1 = curry(setLightness);

//      

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */
function setSaturation(saturation, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: saturation
  }));
}

var setSaturation$1 = curry(setSaturation);

//      

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) throw new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  return mix$1(percentage, color, 'rgb(0, 0, 0)');
}

var shade$1 = curry(shade);

//      

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  if (typeof color !== 'string') throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  return mix$1(percentage, color, 'rgb(255, 255, 255)');
}

var tint$1 = curry(tint);

//      
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, alpha - amount)
  });
  return rgba(colorWithAlpha);
}

var transparentize$1 = curry(transparentize);

//      

/** */

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);
  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }
  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error('To pass multiple animations please supply them in arrays, e.g. animation([\'rotate\', \'2s\'], [\'move\', \'1s\'])\nTo pass a single animation please supply them in simple values, e.g. animation(\'rotate\', \'2s\')');
    }
    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');

  return {
    'animation': code
  };
}

//      

/**
 * The backgroundImages shorthand accepts any number of backgroundImage values as parameters for creating a single background statement..
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background-image': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */

function backgroundImages() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    'background-image': properties.join(', ')
  };
}

//      

/**
 * The backgrounds shorthand accepts any number of background values as parameters for creating a single background statement..
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    'background': properties.join(', ')
  };
}

//      
/**
 * The border-color shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-color': 'red',
 *   'border-right-color': 'green',
 *   'border-bottom-color': 'blue',
 *   'border-left-color': 'yellow'
 * }
 */

function borderColor() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['border-color'].concat(values));
}

//      

/**
 * The border-radius shorthand accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-right-radius': '5px',
 *   'border-top-left-radius': '5px',
 * }
 */

function borderRadius(side, radius) {
  if (!radius || typeof radius !== 'string') throw new Error('borderRadius expects a radius value as a string as the second argument.');
  if (side === 'top' || side === 'bottom') {
    var _ref;

    return _ref = {}, defineProperty(_ref, 'border-' + side + '-right-radius', radius), defineProperty(_ref, 'border-' + side + '-left-radius', radius), _ref;
  }

  if (side === 'left' || side === 'right') {
    var _ref2;

    return _ref2 = {}, defineProperty(_ref2, 'border-top-' + side + '-radius', radius), defineProperty(_ref2, 'border-bottom-' + side + '-radius', radius), _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

//      
/**
 * The border-style shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-style': 'solid',
 *   'border-right-style': 'dashed',
 *   'border-bottom-style': 'dotted',
 *   'border-left-style': 'double'
 * }
 */

function borderStyle() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['border-style'].concat(values));
}

//      
/**
 * The border-width shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'border-top-width': '12px',
 *   'border-right-width': '24px',
 *   'border-bottom-width': '36px',
 *   'border-left-width': '48px'
 * }
 */

function borderWidth() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['border-width'].concat(values));
}

//      
function generateSelectors(template, state) {
  var stateSuffix = state ? ':' + state : '';
  return template(stateSuffix);
}

/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];
  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && !stateMap.includes(states[i])) throw new Error('You passed an unsupported selector state to this method.');
    selectors.push(generateSelectors(template, states[i]));
  }
  selectors = selectors.join(',');
  return selectors;
}

//      
var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return 'button' + state + ',\n  input[type="button"]' + state + ',\n  input[type="reset"]' + state + ',\n  input[type="submit"]' + state;
}

/** */

/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */

function buttons() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

//      
/**
 * The margin shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'margin-top': '12px',
 *   'margin-right': '24px',
 *   'margin-bottom': '36px',
 *   'margin-left': '48px'
 * }
 */

function margin() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['margin'].concat(values));
}

//      
/**
 * The padding shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'padding-top': '12px',
 *   'padding-right': '24px',
 *   'padding-bottom': '36px',
 *   'padding-left': '48px'
 * }
 */

function padding() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['padding'].concat(values));
}

//      
var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];

/**
 * The position shorthand accepts up to five values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions. The first calue can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.includes(positionKeyword)) {
    return _extends({
      position: positionKeyword
    }, directionalProperty.apply(undefined, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value
    return directionalProperty.apply(undefined, ['', firstValue].concat(values));
  }
}

//      

/**
 * Mixin to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */

function size(height) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : height;

  return {
    height: height,
    width: width
  };
}

//      
var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return 'input[type="color"]' + state + ',\n    input[type="date"]' + state + ',\n    input[type="datetime"]' + state + ',\n    input[type="datetime-local"]' + state + ',\n    input[type="email"]' + state + ',\n    input[type="month"]' + state + ',\n    input[type="number"]' + state + ',\n    input[type="password"]' + state + ',\n    input[type="search"]' + state + ',\n    input[type="tel"]' + state + ',\n    input[type="text"]' + state + ',\n    input[type="time"]' + state + ',\n    input[type="url"]' + state + ',\n    input[type="week"]' + state + ',\n    input:not([type])' + state + ',\n    textarea' + state;
}

/** */

/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  ''input[type="color"]:active,
 *  'input[type="date"]:active,
 *  'input[type="datetime"]:active,
 *  'input[type="datetime-local"]:active,
 *  'input[type="email"]:active,
 *  'input[type="month"]:active,
 *  'input[type="number"]:active,
 *  'input[type="password"]:active,
 *  'input[type="search"]:active,
 *  'input[type="tel"]:active,
 *  'input[type="text"]:active,
 *  'input[type="time"]:active,
 *  'input[type="url"]:active,
 *  'input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */

function textInputs() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

//      

/**
 * The transitions shorthand accepts any number of transition values as parameters for creating a single transition statement..
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 * }
 */

function transitions() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    'transition': properties.join(', ')
  };
}

//      
// Helpers
// Mixins
// Color
// Shorthands




/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPI_BLACK; });
/* unused harmony export OPI_BLACK_LIGHT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPI_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPI_WHITE; });


var OPI_BLACK = '#000000';
var OPI_BLACK_LIGHT = __WEBPACK_IMPORTED_MODULE_0_polished__["a" /* lighten */](0.2, OPI_BLACK);
var OPI_RED = '#C82506';
var OPI_WHITE = '#FFFFFF';

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
module.exports = __webpack_require__(6).Object.assign;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(114)
  , toIndex   = __webpack_require__(113);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(27)
  , gOPS     = __webpack_require__(50)
  , pIE      = __webpack_require__(33)
  , toObject = __webpack_require__(76)
  , IObject  = __webpack_require__(49)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(109)});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(7)
  , core      = __webpack_require__(6)
  , ctx       = __webpack_require__(72)
  , hide      = __webpack_require__(20)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(21)
  , createDesc = __webpack_require__(34);
module.exports = __webpack_require__(11) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(26)
  , IE8_DOM_DEFINE = __webpack_require__(74)
  , toPrimitive    = __webpack_require__(53)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(75)
  , enumBugKeys = __webpack_require__(48);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polished__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_pattern_svg__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_pattern_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_pattern_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_colors__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_class_names__ = __webpack_require__(69);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var defaultColors = {
  primary: __WEBPACK_IMPORTED_MODULE_3__util_colors__["a" /* OPI_RED */],
  secondary: __WEBPACK_IMPORTED_MODULE_3__util_colors__["b" /* OPI_BLACK */],
  tertiary: 'white',
  quartenary: __WEBPACK_IMPORTED_MODULE_3__util_colors__["a" /* OPI_RED */]
};

var defaultFonts = {
  primary: {
    googleFont: true,
    name: 'Roboto',
    styles: ['400', '700']
  },
  secondary: {
    googleFont: true,
    name: 'Montserrat'
  },
  tertiary: 'monospace'
};

var titleSlide = function titleSlide(str) {
  return '.' + __WEBPACK_IMPORTED_MODULE_4__util_class_names__["a" /* TITLE_SLIDE_CLASS */] + ' .spectacle-slide > div' + str;
};

var absolute = function absolute() {
  return {
    content: JSON.stringify(''),
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _global;

  var colorArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColors;
  var fontArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFonts;

  var colors = Object.assign({}, defaultColors, colorArgs);
  var normalizedFontArgs = {};
  var googleFonts = {};
  Object.keys(fontArgs).forEach(function (key) {
    var value = fontArgs[key];
    var fontName = value.hasOwnProperty('name') ? value.name : value;
    normalizedFontArgs = _extends({}, normalizedFontArgs, _defineProperty({}, key, fontName));
    if (value.hasOwnProperty('googleFont') && value.googleFont) {
      googleFonts = _extends({}, googleFonts, _defineProperty({}, key, value));
    }
  });
  var fonts = Object.assign({}, defaultFonts, normalizedFontArgs);

  return {
    colors: colors,
    fonts: fonts,
    googleFonts: googleFonts,
    global: (_global = {
      body: {
        background: colors.tertiary,
        fontFamily: fonts.primary,
        fontWeight: 'normal',
        fontSize: '2em',
        color: colors.secondary,
        overflow: 'hidden'
      },
      'html, body': {
        height: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      }
    }, _defineProperty(_global, titleSlide(':before'), _extends({}, absolute(), {
      height: '65vh',
      transform: 'skewY(-8deg)',
      transformOrigin: 0,
      background: 'linear-gradient(65deg, ' + colors.secondary + ', ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polished__["a" /* lighten */])(0.2, colors.secondary) + ' 75%)'
    })), _defineProperty(_global, titleSlide(':after'), _extends({}, absolute(), {
      height: 56,
      width: '100%',
      background: 'url(' + __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg___default.a + ') no-repeat right 10px center / auto 50%'
    })), _defineProperty(_global, '.' + __WEBPACK_IMPORTED_MODULE_4__util_class_names__["b" /* CONTENT_SLIDE_CLASS */] + ' .spectacle-slide, .' + __WEBPACK_IMPORTED_MODULE_4__util_class_names__["a" /* TITLE_SLIDE_CLASS */] + ' .spectacle-slide', {
      backgroundSize: '200px !important',
      backgroundImage: 'url(' + __WEBPACK_IMPORTED_MODULE_2__images_pattern_svg___default.a + ')'
    }), _defineProperty(_global, '.' + __WEBPACK_IMPORTED_MODULE_4__util_class_names__["b" /* CONTENT_SLIDE_CLASS */] + ' .spectacle-slide:before, .' + __WEBPACK_IMPORTED_MODULE_4__util_class_names__["a" /* TITLE_SLIDE_CLASS */] + ' .spectacle-slide:before', _extends({}, absolute(), {
      backgroundImage: 'linear-gradient(270deg, #fff 25%, hsla(0,0%,100%,0)) !important'
    })), _global),
    fullscreen: {
      fill: colors.tertiary
    },
    controls: {
      prev: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      prevIcon: {
        fill: colors.quartenary
      },
      next: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      nextIcon: {
        fill: colors.quartenary
      }
    },
    progress: {
      pacman: {
        container: {
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000
        },
        pacman: {
          position: 'absolute',
          transition: 'left 0.3s ease-in-out 0.2s',
          width: '20px',
          height: '20px',
          transform: 'translate(-5px, -5px)'
        },
        pacmanTop: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          background: colors.quartenary
        },
        pacmanBottom: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          background: colors.quartenary,
          top: '10px'
        },
        point: {
          position: 'absolute',
          float: 'left',
          background: 'transparent',
          width: '10px',
          height: '10px',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: colors.quartenary,
          borderRadius: '50%',
          transition: 'all 0.01s ease-out 0.4s'
        }
      },
      bar: {
        container: {
          position: 'absolute',
          height: '10px',
          width: '100%',
          bottom: 0,
          left: 0,
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000
        },
        bar: {
          height: '100%',
          background: colors.quartenary,
          transition: 'all 0.3s ease-out'
        }
      },
      number: {
        container: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.quartenary
        }
      }
    },
    components: {
      blockquote: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-block',
        margin: 20
      },
      quote: {
        borderLeft: '5px solid ' + colors.primary,
        paddingLeft: 40,
        display: 'block',
        color: colors.secondary,
        fontSize: '4.9rem',
        lineHeight: 1,
        fontWeight: 'bold'
      },
      cite: {
        color: colors.primary,
        display: 'block',
        clear: 'left',
        fontSize: '2rem',
        marginTop: '1rem'
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      codePane: {
        pre: {
          margin: 'auto',
          fontSize: '0.8rem',
          fontWeight: 'normal',
          fontFamily: fonts.tertiary,
          minWidth: '100%',
          maxWidth: 800
        },
        code: {
          textAlign: 'left',
          fontWeight: 'normal'
        }
      },
      code: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.tertiary,
        margin: '0.25rem auto',
        backgroundColor: 'rgba(0,0,0,0.15)',
        padding: '0 10px',
        borderRadius: 3
      },
      heading: {
        h1: {
          color: colors.tertiary,
          fontSize: '7.05rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: 0,
          zoom: 1,
          zIndex: 2
        },
        h2: {
          color: colors.secondary,
          fontSize: '5.88rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: 0,
          zIndex: 2
        },
        h3: {
          color: 'black',
          fontSize: '4.9rem',
          fontFamily: fonts.secondary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h4: {
          color: 'black',
          fontSize: '3.82rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h5: {
          color: 'black',
          fontSize: '3.19rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h6: {
          color: 'black',
          fontSize: '2.66rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        }
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
      },
      link: {
        textDecoration: 'none'
      },
      listItem: {
        fontSize: '2.66rem'
      },
      list: {
        textAlign: 'left',
        listStylePosition: 'inside',
        padding: 0
      },
      s: {
        strikethrough: {}
      },
      tableHeaderItem: {
        fontSize: '2.66rem',
        fontWeight: 'bold'
      },
      tableItem: {
        fontSize: '2.66rem'
      },
      table: {
        width: '100%'
      },
      text: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.primary,
        margin: '0.25rem auto'
      }
    }
  };
});

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(70);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable object-shorthand*/

var defaultColors = {
  primary: "black",
  secondary: "black",
  tertiary: "black",
  quartenary: "black"
};

var defaultFonts = {
  primary: "Open Sans Condensed",
  secondary: "Lobster Two",
  tertiary: "monospace"
};

var print = function print() {
  var colorArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColors;
  var fontArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFonts;

  var colors = (0, _assign2.default)({}, defaultColors, colorArgs);
  var fonts = (0, _assign2.default)({}, defaultFonts, fontArgs);
  return {
    colors: colors,
    fonts: fonts,
    global: {
      body: {
        background: "white",
        fontFamily: fonts.primary,
        fontWeight: "normal",
        fontSize: "2em",
        color: "black",
        overflow: "hidden"
      },
      ".hljs": {
        background: "white",
        color: "black"
      },
      ".hljs span": {
        color: "black !important"
      }
    },
    fullscreen: {
      fill: colors.tertiary
    },
    controls: {
      prev: {
        position: "absolute",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        zIndex: 9999,
        background: "none",
        border: "none",
        outline: 0
      },
      prevIcon: {
        fill: colors.quartenary
      },
      next: {
        position: "absolute",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        zIndex: 9999,
        background: "none",
        border: "none",
        outline: 0
      },
      nextIcon: {
        fill: colors.quartenary
      }
    },
    progress: {
      pacman: {
        container: {
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transition: "all 1s ease-in-out 0.2s",
          zIndex: 1000
        },
        pacman: {
          position: "absolute",
          transition: "left 0.3s ease-in-out 0.2s",
          width: "20px",
          height: "20px",
          transform: "translate(-5px, -5px)"
        },
        pacmanTop: {
          position: "absolute",
          content: " ",
          width: "20px",
          height: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          background: colors.tertiary
        },
        pacmanBottom: {
          position: "absolute",
          content: " ",
          width: "20px",
          height: "10px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          background: colors.tertiary,
          top: "10px"
        },
        point: {
          position: "absolute",
          float: "left",
          background: "transparent",
          width: "10px",
          height: "10px",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: colors.tertiary,
          borderRadius: "50%",
          transition: "all 0.01s ease-out 0.4s"
        }
      },
      bar: {
        container: {
          position: "absolute",
          height: "10px",
          width: "100%",
          bottom: 0,
          left: 0,
          transition: "all 1s ease-in-out 0.2s",
          zIndex: 1000
        },
        bar: {
          height: "100%",
          background: colors.tertiary,
          transition: "all 0.3s ease-out"
        }
      },
      number: {
        container: {
          position: "absolute",
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.tertiary
        }
      }
    },
    components: {
      blockquote: {
        textAlign: "left",
        position: "relative",
        display: "inline-block"
      },
      quote: {
        borderLeft: "1px solid " + colors.primary,
        paddingLeft: 40,
        display: "block",
        color: "black",
        fontSize: "4.9rem",
        lineHeight: 1,
        fontWeight: "bold"
      },
      cite: {
        color: "black",
        display: "block",
        clear: "left",
        fontSize: "2rem",
        marginTop: "1rem"
      },
      content: {
        margin: "auto",
        textAlign: "center"
      },
      codePane: {
        pre: {
          maxWidth: 800,
          margin: "auto",
          fontSize: "0.8rem",
          fontWeight: "normal",
          fontFamily: fonts.tertiary
        },
        code: {
          textAlign: "left",
          padding: 20,
          fontWeight: "normal"
        }
      },
      code: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.tertiary,
        margin: "0.25rem auto",
        backgroundColor: "rgba(0,0,0,0.15)",
        padding: "0 10px",
        borderRadius: 3
      },
      heading: {
        h1: {
          color: "black",
          fontSize: "7.05rem",
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: 0
        },
        h2: {
          color: "black",
          fontSize: "5.88rem",
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: 0
        },
        h3: {
          color: "black",
          fontSize: "4.9rem",
          fontFamily: fonts.secondary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: "0.5rem auto"
        },
        h4: {
          color: "black",
          fontSize: "3.82rem",
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: "0.5rem auto"
        },
        h5: {
          color: "black",
          fontSize: "3.19rem",
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: "0.5rem auto"
        },
        h6: {
          color: "black",
          fontSize: "2.66rem",
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: "bold",
          margin: "0.5rem auto"
        }
      },
      image: {
        display: "block",
        margin: "0.5rem auto"
      },
      link: {
        textDecoration: "none"
      },
      listItem: {
        fontSize: "2.66rem"
      },
      list: {
        textAlign: "left",
        listStylePosition: "inside",
        padding: 0
      },
      s: {
        strikethrough: {}
      },
      tableHeaderItem: {
        fontSize: "2.66rem",
        fontWeight: "bold"
      },
      tableItem: {
        fontSize: "2.66rem"
      },
      table: {
        width: "100%"
      },
      text: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.primary,
        margin: "0.25rem auto"
      }
    }
  };
};

exports.default = print;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spectacle_lib_themes_default_print__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_spectacle_lib_themes_default_print___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_spectacle_lib_themes_default_print__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });



var createTheme = function createTheme() {
  return {
    screen: __WEBPACK_IMPORTED_MODULE_0__screen__["a" /* default */].apply(undefined, arguments),
    print: __WEBPACK_IMPORTED_MODULE_1_spectacle_lib_themes_default_print___default()()
  };
};

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(71);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(52)('keys')
  , uid    = __webpack_require__(36);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQ3LjggMzQuMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQ3LjggMzQuMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgogIDxkZWZzPgogICAgPHJlY3QgaWQ9IlNWR0lEXzFfIiB5PSIwIiB3aWR0aD0iMjQ3LjgiIGhlaWdodD0iMzQuMiI+PC9yZWN0PgogIDwvZGVmcz4KICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjOTcxQjFFIiBkPSJNMTAuOCwyNS44YzAuNi0wLjEsMS4yLTAuMiwxLjctMC40YzAuNi0wLjIsMS4xLTAuNCwxLjYtMC42CiAgICBjMC41LTAuMiwxLTAuNSwxLjUtMC44YzAuNS0wLjMsMC45LTAuNiwxLjQtMWMwLjQtMC40LDAuOS0wLjgsMS4yLTEuMmMwLjQtMC40LDAuNy0wLjksMS4xLTEuM2MwLjMtMC41LDAuNi0xLDAuOS0xLjUKICAgIGMwLjMtMC41LDAuNS0xLDAuNy0xLjZjMC4yLTAuNSwwLjQtMS4xLDAuNS0xLjdjMC4xLTAuNiwwLjItMS4yLDAuMy0xLjhjMC0wLjMsMC0wLjYsMC0wLjljMC0wLjMsMC0wLjYsMC0wLjkKICAgIGMtMC4xLDItMC41LDQtMS42LDUuOGMtMC42LDEtMS40LDEuOS0yLjMsMi43QzE2LDIyLjIsMTMuNSwyMywxMSwyM2MtMSwwLTItMC4xLTMtMC40Yy0yLjQtMC43LTQuNC0yLjUtNS42LTQuOQogICAgYy0xLjMtMi44LTEuNS02LjEtMC4zLTguOWMwLjgtMiwyLjMtMy44LDQuMS01bDAtMC4xQzMsNS4yLDAuOCw4LjIsMC4yLDExLjdjLTAuNiwzLjMsMC4zLDYuOCwyLjQsOS44YzEuNiwyLjIsMy42LDMuNyw2LDQuNQogICAgYzAuMSwwLDAuMywwLDAuNCwwQzkuNiwyNiwxMC4yLDI1LjksMTAuOCwyNS44Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTI4LDguM2MtMS00LjktNC45LTguMy05LjYtOC4zYy0xLDAtMS45LDAuMS0yLjgsMC40Yy0wLjksMC4zLTEuNywwLjctMi41LDEuMgogICAgYy0wLjgsMC41LTEuNCwxLjItMiwxLjljLTAuNCwwLjUtMC44LDEuMS0xLjEsMS43YzAsMCwwLTAuMSwwLTAuMUMxMCw1LjMsOS45LDUuNCw5LjksNS42YzAsMCwwLDAuMSwwLDAuMWMwLDAsMC0wLjEsMC0wLjEKICAgIEM5LjgsNS43LDkuNyw1LjksOS43LDZjMCwwLDAsMCwwLDBjMCwwLDAsMC4xLTAuMSwwLjFjMCwwLDAsMCwwLTAuMUM5LjYsNi4yLDkuNSw2LjQsOS41LDYuNmMwLDAsMCwwLDAtMC4xCiAgICBDOS40LDYuOCw5LjMsNy4xLDkuMiw3LjRjMCwwLDAsMCwwLTAuMWMwLDAuMi0wLjEsMC40LTAuMSwwLjZjMCwwLDAsMCwwLDBDOS4xLDguMSw5LDguMyw5LDguNGMwLDAsMCwwLDAsMGMwLDAuMSwwLDAuMSwwLDAuMgogICAgYzAsMCwwLjUtMC44LDAuOS0xLjFjMC4zLTAuMywwLjYtMC42LDEtMC45YzEuOS0xLjUsNC4yLTIuMyw2LjgtMi4zYzUsMCw5LjMsMy40LDEwLjYsNy45YzAtMC40LDAtMC43LDAtMS4xCiAgICBDMjguMywxMC4yLDI4LjIsOS4yLDI4LDguMyI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNFMDI5MjYiIGQ9Ik05LjEsOEM5LjEsOCw5LjEsOCw5LjEsOEM5LjEsOCw5LjEsOCw5LjEsOCI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNFMDI5MjYiIGQ9Ik05LjIsNy41QzkuMiw3LjUsOS4yLDcuNSw5LjIsNy41QzkuMiw3LjUsOS4yLDcuNSw5LjIsNy41Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTkuNSw2LjVDOS41LDYuNSw5LjUsNi41LDkuNSw2LjVDOS41LDYuNSw5LjUsNi41LDkuNSw2LjUiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRTAyOTI2IiBkPSJNOS4zLDdDOS4zLDcsOS4zLDcsOS4zLDdDOS4zLDcsOS4zLDcsOS4zLDciPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjQkMyMDI2IiBkPSJNMjguMywxMi40YzAtMC4yLDAtMC40LDAtMC42QzI4LjMsMTIsMjguMywxMi4xLDI4LjMsMTIuNAogICAgYy0xLjQtNC43LTUuNi04LTEwLjctOGMtMi42LDAtNC45LDAuOS02LjgsMi4zYzEuMS0wLjgsMi41LTEuMyw0LTEuM2MxLjMsMCwyLjYsMC40LDMuNywxLjFjMS42LDEsMi44LDIuOCwzLjEsNC43CiAgICBjMC4xLDAuNiwwLjEsMS4zLDAuMSwxLjljMCwwLjMsMCwwLjYsMCwwLjljLTAuMSwwLjYtMC4xLDEuMi0wLjMsMS44Yy0wLjEsMC42LTAuMywxLjEtMC41LDEuN2MtMC4yLDAuNS0wLjQsMS4xLTAuNywxLjYKICAgIGMtMC4zLDAuNS0wLjYsMS0wLjksMS41Yy0wLjMsMC41LTAuNywwLjktMS4xLDEuM2MtMC40LDAuNC0wLjgsMC44LTEuMiwxLjJjLTAuNCwwLjQtMC45LDAuNy0xLjQsMWMtMC41LDAuMy0xLDAuNi0xLjUsMC44CiAgICBjLTAuNSwwLjItMS4xLDAuNS0xLjYsMC42Yy0wLjYsMC4yLTEuMSwwLjMtMS43LDAuNGMtMC42LDAuMS0xLjIsMC4yLTEuOCwwLjJjLTAuMSwwLTAuMywwLTAuNCwwYzAuNiwwLjIsMS4xLDAuMywxLjcsMC40CiAgICBjMC44LDAuMSwxLjYsMC4yLDIuNCwwLjJjMC4xLDAsMC4yLDAsMC4zLDBDMjEsMjYuNiwyNy43LDIwLjMsMjguMywxMi40QzI4LjMsMTIuMywyOC4zLDEyLjQsMjguMywxMi40Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTE0LjYsOC40Yy0yLjQsMC4xLTQuNCwxLjMtNS42LDMuMmMwLDAsMCwwLDAsMC4xdjIyLjRjMCwwLjEsMC4xLDAuMSwwLjEsMC4xCiAgICBjMi40LTAuMSw0LjQtMS4zLDUuNi0zLjJjMCwwLDAsMCwwLTAuMVY4LjVDMTQuNyw4LjUsMTQuNyw4LjQsMTQuNiw4LjQiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNjEuMSwxMy41YzAsMy44LTIuMyw3LjMtNy4yLDcuM3MtNy4yLTMuNi03LjItNy4zYzAtNC4zLDMtNy40LDcuMy03LjQKICAgIEM1OC43LDYuMSw2MS4xLDkuNiw2MS4xLDEzLjUgTTUzLjgsMTguN2MzLjUsMCw1LTIuNSw1LTUuMmMwLTIuNi0xLjUtNS4zLTUtNS40Yy0zLjMsMC01LDIuMy01LDUuNEM0OC45LDE2LDUwLjMsMTguNyw1My44LDE4LjciPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNzAuMyw2LjNjMi43LDAsNC44LDEuMiw0LjgsNGMwLDEuMi0wLjYsMi4zLTIsMi44YzEuNywwLjUsMi40LDIuMiwyLjQsMy4zCiAgICBjMCwzLjEtMi41LDQtNS4zLDRoLTYuNVY2LjNINzAuM3ogTTY2LDEyLjJoNC4zYzEuNywwLDIuNS0wLjcsMi41LTEuOGMwLTEtMC45LTItMi42LTJINjZWMTIuMnogTTY2LDE4LjRoNC4yYzEuMywwLDMtMC40LDMtMgogICAgYzAtMS41LTEuNy0yLjItMy0yLjJINjZWMTguNHoiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNODkuNSw2LjN2OC4zYzAsMy42LTIuMyw2LjEtNi4xLDYuMWMtMy41LDAtNi0yLjItNi02aDIuMgogICAgYzAsMi41LDEuNCwzLjksMy44LDMuOWMyLjUsMCwzLjgtMS43LDMuOC00VjYuM0g4OS41eiI+PC9wYXRoPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTAzLjMsMjAuNSA5Mi45LDIwLjUgOTIuOSw2LjMgMTAzLjMsNi4zIDEwMy4zLDguNSA5NS4yLDguNSAKICAgIDk1LjIsMTIuNCAxMDMsMTIuNCAxMDMsMTQuNSA5NS4yLDE0LjUgOTUuMiwxOC4zIDEwMy4zLDE4LjMgICI+PC9wb2x5Z29uPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMTguMywxOC43Yy0xLjUsMS40LTMuMywyLjEtNS4zLDIuMWMtNS4xLDAtNy40LTMuNS03LjUtNy4zCiAgICBjMC0zLjcsMi40LTcuNCw3LjUtNy40YzEuOSwwLDMuNywwLjcsNS4yLDIuMWwtMS41LDEuNWMtMS0xLTIuMy0xLjUtMy43LTEuNWMtMy42LDAtNS4yLDIuNi01LjIsNS4zYzAsMi42LDEuNiw1LjIsNS4yLDUuMgogICAgYzEuMywwLDIuOC0wLjUsMy44LTEuNUwxMTguMywxOC43eiI+PC9wYXRoPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTI0LjIsOC40IDExOS41LDguNCAxMTkuNSw2LjMgMTMxLjEsNi4zIDEzMS4xLDguNCAxMjYuNCw4LjQgCiAgICAxMjYuNCwyMC41IDEyNC4yLDIwLjUgICAiPjwvcG9seWdvbj4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTM5LjksMTYuMXY0LjNoLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDBjNi44LDAsNi44LDkuOCwwLDkuOEgxMzkuOXoKICAgICBNMTM5LjksMTQuMWg0LjNjMy43LDAsMy43LTUuNywwLTUuN2gtNC4zVjE0LjF6Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTE2MC40LDE3LjVoLTcuN2wtMS4zLDNIMTQ5bDYuMy0xNC4yaDIuNWw2LjMsMTQuMmgtMi40TDE2MC40LDE3LjV6CiAgICAgTTE1Ni42LDguN2wtMyw2LjdoNkwxNTYuNiw4Ljd6Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTE3OC41LDIwLjVoLTIuNmwtNC4zLTQuOWgtM3Y0LjloLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDAKICAgIGMzLjMsMCw1LDIuMiw1LDQuNmMwLDItMS4xLDQtMy44LDQuNGw0LjIsNC43TDE3OC41LDIwLjV6IE0xNjguNSw4LjR2NS4xaDQuM2MxLjksMCwyLjctMS4yLDIuNy0yLjVjMC0xLjMtMC44LTIuNi0yLjctMi42SDE2OC41egogICAgIj48L3BhdGg+CiAgPHBvbHlnb24gY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxODQuMyw4LjQgMTc5LjYsOC40IDE3OS42LDYuMyAxOTEuMiw2LjMgMTkxLjIsOC40IDE4Ni41LDguNCAKICAgIDE4Ni41LDIwLjUgMTg0LjMsMjAuNSAgICI+PC9wb2x5Z29uPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjAzLjIsMTYuNCAyMDMuMiw2LjMgMjA1LjUsNi4zIDIwNS41LDIwLjUgMjAzLjgsMjAuNSAxOTUuOCwxMC41IAogICAgMTk1LjgsMjAuNSAxOTMuNSwyMC41IDE5My41LDYuMyAxOTUuMiw2LjMgICAiPjwvcG9seWdvbj4KICA8cG9seWdvbiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjIxOS41LDIwLjUgMjA5LjEsMjAuNSAyMDkuMSw2LjMgMjE5LjUsNi4zIDIxOS41LDguNSAyMTEuMyw4LjUgCiAgICAyMTEuMywxMi40IDIxOS4xLDEyLjQgMjE5LjEsMTQuNSAyMTEuMywxNC41IDIxMS4zLDE4LjMgMjE5LjUsMTguMyAgICI+PC9wb2x5Z29uPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMzQuNywyMC41SDIzMmwtNC4zLTQuOWgtM3Y0LjloLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDBjMy4zLDAsNSwyLjIsNSw0LjYKICAgIGMwLDItMS4xLDQtMy44LDQuNGw0LjIsNC43TDIzNC43LDIwLjV6IE0yMjQuNyw4LjR2NS4xaDQuM2MxLjksMCwyLjctMS4yLDIuNy0yLjVjMC0xLjMtMC44LTIuNi0yLjctMi42SDIyNC43eiI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNDUuNSw5LjVjLTAuNy0xLTItMS42LTMuNS0xLjZjLTEuOSwwLTMuMywwLjgtMy4zLDIuMWMwLDEuNCwxLjYsMS44LDMuNCwyCiAgICBjMi45LDAuNCw1LjcsMS4yLDUuNyw0LjRjMCwzLjItMi45LDQuNC01LjksNC40Yy0yLjcsMC00LjgtMC44LTYuMS0zLjJsMS43LTEuMWMxLDEuNywyLjgsMi4zLDQuNCwyLjNjMS43LDAsMy42LTAuNiwzLjYtMi4zCiAgICBjMC0xLjUtMS42LTIuMS0zLjYtMi4zYy0yLjgtMC40LTUuNS0xLjEtNS41LTQuMWMwLTIuOSwyLjktNC4xLDUuNS00LjFjMiwwLDQuMSwwLjUsNS4zLDIuNEwyNDUuNSw5LjV6Ij48L3BhdGg+CjwvZz4KPC9zdmc+"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAuNyAxODAuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDojZmZmO30uY2xzLTF7c3Ryb2tlOiNiYmJiYmI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuMzJweDt9LmNscy0ze2ZpbGw6I2JiYmJiYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnBhdHRlcm48L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODAuODYgLTQ1LjE2IDIyNi4wMiAwIDIyNi4wMiAtOTAuMzIgMTgwLjg2IC00NS4xNiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODAuODYgLTQ1LjE2IDkwLjU0IC00NS4xNiAxMzUuNyAwIDE4MC44NiAtNDUuMTYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDUuMzggLTkwLjMyIDQ1LjM4IDAgOTAuNTQgLTQ1LjE2IDQ1LjM4IC05MC4zMiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwLjIzIC00NS4xNiA0NS4zOCAwIDQ1LjM4IC05MC4zMiAwLjIzIC00NS4xNiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwLjIzIDAgNDUuMzggMCAwLjIzIC00NS4xNiAwLjIzIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTM1LjcgMCAxODAuODYgMCAxODAuODYgLTQ1LjE2IDEzNS43IDAiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xODEsLjE2aC00NS43bC4yNy0uMjdMMTgxLTQ1LjU0Wk0xMzYuMDktLjE2SDE4MC43Vi00NC43N1oiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iOTAuNTQgLTQ1LjE2IDkwLjU0IDAgMTM1LjcgMCA5MC41NCAtNDUuMTYiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMzYuMDkuMTZIOTAuMzh2LTQ1LjdsLjI3LjI3Wk05MC43LS4xNmg0NC42MUw5MC43LTQ0Ljc3WiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0NS4zOCAwIDkwLjU0IDAgOTAuNTQgLTQ1LjE2IDQ1LjM4IDAiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik05MC43LjE2SDQ1bC4yNy0uMjdMOTAuNy00NS41NFpNNDUuNzctLjE2SDkwLjM4Vi00NC43N1oiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTgwLjg2IDIyNS44NCAyMjYuMDIgMjcxIDIyNi4wMiAxODAuNjggMTgwLjg2IDIyNS44NCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwLjIzIDQ1LjIxIDQ1LjM4IDAuMDUgMC4yMyAwLjA1IDAuMjMgNDUuMjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTM1LjcgMTgwLjY4IDEzNS43IDI3MSAxODAuODYgMjI1Ljg0IDEzNS43IDE4MC42OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI5MC41NCAyMjUuODQgMTM1LjcgMjcxIDEzNS43IDE4MC42OCA5MC41NCAyMjUuODQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTM1LjcgMTgwLjY4IDE4MC44NiAyMjUuODQgMTgwLjg2IDEzNS41MiAxMzUuNyAxODAuNjgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTgwLjg2IDEzNS41MiAyMjYuMDIgMTgwLjY4IDIyNi4wMiA5MC4zNiAxODAuODYgMTM1LjUyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAuMjMgMjI1Ljg0IDQ1LjM4IDI3MSA0NS4zOCAxODAuNjggMC4yMyAyMjUuODQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDUuMzggMTgwLjY4IDQ1LjM4IDI3MSA5MC41NCAyMjUuODQgNDUuMzggMTgwLjY4Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQ1LjM4IDE4MC42OCA5MC41NCAyMjUuODQgOTAuNTQgMTM1LjUyIDQ1LjM4IDE4MC42OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI5MC41NCAxMzUuNTIgOTAuNTQgMjI1Ljg0IDEzNS43IDE4MC42OCA5MC41NCAxMzUuNTIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iOTAuNTQgMTM1LjUyIDEzNS43IDE4MC42OCAxMzUuNyA5MC4zNiA5MC41NCAxMzUuNTIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTM1LjcgOTAuMzYgMTM1LjcgMTgwLjY4IDE4MC44NiAxMzUuNTIgMTM1LjcgOTAuMzYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTM1LjcgOTAuMzYgMTgwLjg2IDEzNS41MiAxODAuODYgNDUuMjEgMTM1LjcgOTAuMzYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTgwLjg2IDQ1LjIxIDIyNi4wMiA5MC4zNiAyMjYuMDIgMC4wNSAxODAuODYgNDUuMjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMC4yMyAyMjUuODQgNDUuMzggMTgwLjY4IDAuMjMgMTM1LjUyIDAuMjMgMjI1Ljg0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQ1LjM4IDkwLjM2IDQ1LjM4IDE4MC42OCA5MC41NCAxMzUuNTIgNDUuMzggOTAuMzYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMC4yMyAxMzUuNTIgNDUuMzggMTgwLjY4IDQ1LjM4IDkwLjM2IDAuMjMgMTM1LjUyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQ1LjM4IDkwLjM2IDkwLjU0IDEzNS41MiA5MC41NCA0NS4yMSA0NS4zOCA5MC4zNiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI5MC41NCA0NS4yMSA5MC41NCAxMzUuNTIgMTM1LjcgOTAuMzYgOTAuNTQgNDUuMjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTM1LjcgMC4wNSA5MC41NCA0NS4yMSAxODAuODYgNDUuMjEgMTM1LjcgMC4wNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODAuODYgNDUuMjEgOTAuNTQgNDUuMjEgMTM1LjcgOTAuMzYgMTgwLjg2IDQ1LjIxIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjEzNS43IDAuMDUgMTgwLjg2IDQ1LjIxIDE4MC44NiAwLjA1IDEzNS43IDAuMDUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMC4yMyAxMzUuNTIgNDUuMzggOTAuMzYgMC4yMyA0NS4yMSAwLjIzIDEzNS41MiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwLjIzIDQ1LjIxIDQ1LjM4IDkwLjM2IDQ1LjM4IDAuMDUgMC4yMyA0NS4yMSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0NS4zOCAwLjA1IDQ1LjM4IDkwLjM2IDkwLjU0IDQ1LjIxIDQ1LjM4IDAuMDUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iOTAuNTQgMC4wNSA5MC41NCA0NS4yMSAxMzUuNyAwLjA1IDkwLjU0IDAuMDUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDUuMzggMC4wNSA5MC41NCA0NS4yMSA5MC41NCAwLjA1IDQ1LjM4IDAuMDUiLz48L3N2Zz4="

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TITLE_SLIDE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONTENT_SLIDE_CLASS; });
var TITLE_SLIDE_CLASS = 'opi-title-slide';
var CONTENT_SLIDE_CLASS = 'opi-content-slide';

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(105);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14)
  , document = __webpack_require__(7).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(73)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(13)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(106)(false)
  , IE_PROTO     = __webpack_require__(51)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function(it){
  return Object(defined(it));
};

/***/ })

/******/ });
});
//# sourceMappingURL=create-theme.js.map