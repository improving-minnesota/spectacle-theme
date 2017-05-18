(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a)
      (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
    /******/
    /******/ /******/ __webpack_require__.i = function(value) {
      return value;
    }; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter = module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 277));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ /***/ 272: function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deep_assign__ = __webpack_require__(
          276
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg__ = __webpack_require__(
          87
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1__images_OPi_logo_svg__
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(
          86
        );

        /* harmony default export */ __webpack_exports__['a'] = function(
          userColors
        ) {
          for (
            var _len = arguments.length,
              rest = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            rest[_key - 1] = arguments[_key];
          }

          var colors = __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0__deep_assign__['a' /* default */]
          )(
            {
              primary: __WEBPACK_IMPORTED_MODULE_2__colors__['a' /* OPI_RED */],
              secondary: __WEBPACK_IMPORTED_MODULE_2__colors__[
                'b' /* OPI_BLACK */
              ],
              tertiary: 'white',
              quartenary: 'white'
            },
            userColors
          );
          var fonts = __WEBPACK_IMPORTED_MODULE_0__deep_assign__[
            'a' /* default */
          ].apply(
            undefined,
            [
              {
                primary: 'Montserrat',
                secondary: 'Helvetica'
              }
            ].concat(rest)
          );
          var googleFonts = {};
          return {
            colors: colors,
            fonts: fonts,
            googleFonts: googleFonts,
            global: {
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
              },
              '.spectacle-content': {
                // maxHeight: '100% !important',
                // maxWidth: '100% !important',
                // position: 'absolute',
                // top: 0,
                // right: 0,
                // bottom: 0,
                // left: 0,
                // display: 'flex',
                // justifyContent: 'center',
                // flexDirection: 'column'
              }
            },
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
                  background: colors.secondary
                },
                pacmanBottom: {
                  position: 'absolute',
                  content: '',
                  width: '20px',
                  height: '10px',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  background: colors.secondary,
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
                  borderColor: colors.secondary,
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
                color: colors.tertiary,
                fontSize: '4.9rem',
                lineHeight: 1,
                fontWeight: 'bold'
              },
              cite: {
                color: colors.tertiary,
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
        };

        /***/
      },

      /***/ /***/ 276: function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = deepAssign;
        function deepAssign() {
          var base = arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};

          for (
            var _len = arguments.length,
              rest = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            rest[_key - 1] = arguments[_key];
          }

          return rest.reduce(function(assigned, obj) {
            return Object.keys(obj || {}).reduce(function(nestedAssigned, key) {
              nestedAssigned[key] = Object.assign(
                nestedAssigned[key] || {},
                obj[key] || {}
              );
              return nestedAssigned;
            }, assigned);
          }, base);
        }

        /***/
      },

      /***/ /***/ 277: function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__screen__ = __webpack_require__(
          272
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createTheme',
          function() {
            return createTheme;
          }
        );

        var createTheme = function createTheme() {
          return {
            screen: __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__screen__['a' /* default */]
            )()
          };
        };

        /***/
      },

      /***/ /***/ 86: function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'b',
          function() {
            return OPI_BLACK;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return OPI_RED;
          }
        );

        var OPI_BLACK = '#333';
        var OPI_RED = '#C82506';

        /***/
      },

      /***/ /***/ 87: function(module, exports) {
        module.exports =
          'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQ3LjggMzQuMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQ3LjggMzQuMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgogIDxkZWZzPgogICAgPHJlY3QgaWQ9IlNWR0lEXzFfIiB5PSIwIiB3aWR0aD0iMjQ3LjgiIGhlaWdodD0iMzQuMiI+PC9yZWN0PgogIDwvZGVmcz4KICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjOTcxQjFFIiBkPSJNMTAuOCwyNS44YzAuNi0wLjEsMS4yLTAuMiwxLjctMC40YzAuNi0wLjIsMS4xLTAuNCwxLjYtMC42CiAgICBjMC41LTAuMiwxLTAuNSwxLjUtMC44YzAuNS0wLjMsMC45LTAuNiwxLjQtMWMwLjQtMC40LDAuOS0wLjgsMS4yLTEuMmMwLjQtMC40LDAuNy0wLjksMS4xLTEuM2MwLjMtMC41LDAuNi0xLDAuOS0xLjUKICAgIGMwLjMtMC41LDAuNS0xLDAuNy0xLjZjMC4yLTAuNSwwLjQtMS4xLDAuNS0xLjdjMC4xLTAuNiwwLjItMS4yLDAuMy0xLjhjMC0wLjMsMC0wLjYsMC0wLjljMC0wLjMsMC0wLjYsMC0wLjkKICAgIGMtMC4xLDItMC41LDQtMS42LDUuOGMtMC42LDEtMS40LDEuOS0yLjMsMi43QzE2LDIyLjIsMTMuNSwyMywxMSwyM2MtMSwwLTItMC4xLTMtMC40Yy0yLjQtMC43LTQuNC0yLjUtNS42LTQuOQogICAgYy0xLjMtMi44LTEuNS02LjEtMC4zLTguOWMwLjgtMiwyLjMtMy44LDQuMS01bDAtMC4xQzMsNS4yLDAuOCw4LjIsMC4yLDExLjdjLTAuNiwzLjMsMC4zLDYuOCwyLjQsOS44YzEuNiwyLjIsMy42LDMuNyw2LDQuNQogICAgYzAuMSwwLDAuMywwLDAuNCwwQzkuNiwyNiwxMC4yLDI1LjksMTAuOCwyNS44Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTI4LDguM2MtMS00LjktNC45LTguMy05LjYtOC4zYy0xLDAtMS45LDAuMS0yLjgsMC40Yy0wLjksMC4zLTEuNywwLjctMi41LDEuMgogICAgYy0wLjgsMC41LTEuNCwxLjItMiwxLjljLTAuNCwwLjUtMC44LDEuMS0xLjEsMS43YzAsMCwwLTAuMSwwLTAuMUMxMCw1LjMsOS45LDUuNCw5LjksNS42YzAsMCwwLDAuMSwwLDAuMWMwLDAsMC0wLjEsMC0wLjEKICAgIEM5LjgsNS43LDkuNyw1LjksOS43LDZjMCwwLDAsMCwwLDBjMCwwLDAsMC4xLTAuMSwwLjFjMCwwLDAsMCwwLTAuMUM5LjYsNi4yLDkuNSw2LjQsOS41LDYuNmMwLDAsMCwwLDAtMC4xCiAgICBDOS40LDYuOCw5LjMsNy4xLDkuMiw3LjRjMCwwLDAsMCwwLTAuMWMwLDAuMi0wLjEsMC40LTAuMSwwLjZjMCwwLDAsMCwwLDBDOS4xLDguMSw5LDguMyw5LDguNGMwLDAsMCwwLDAsMGMwLDAuMSwwLDAuMSwwLDAuMgogICAgYzAsMCwwLjUtMC44LDAuOS0xLjFjMC4zLTAuMywwLjYtMC42LDEtMC45YzEuOS0xLjUsNC4yLTIuMyw2LjgtMi4zYzUsMCw5LjMsMy40LDEwLjYsNy45YzAtMC40LDAtMC43LDAtMS4xCiAgICBDMjguMywxMC4yLDI4LjIsOS4yLDI4LDguMyI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNFMDI5MjYiIGQ9Ik05LjEsOEM5LjEsOCw5LjEsOCw5LjEsOEM5LjEsOCw5LjEsOCw5LjEsOCI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNFMDI5MjYiIGQ9Ik05LjIsNy41QzkuMiw3LjUsOS4yLDcuNSw5LjIsNy41QzkuMiw3LjUsOS4yLDcuNSw5LjIsNy41Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTkuNSw2LjVDOS41LDYuNSw5LjUsNi41LDkuNSw2LjVDOS41LDYuNSw5LjUsNi41LDkuNSw2LjUiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRTAyOTI2IiBkPSJNOS4zLDdDOS4zLDcsOS4zLDcsOS4zLDdDOS4zLDcsOS4zLDcsOS4zLDciPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjQkMyMDI2IiBkPSJNMjguMywxMi40YzAtMC4yLDAtMC40LDAtMC42QzI4LjMsMTIsMjguMywxMi4xLDI4LjMsMTIuNAogICAgYy0xLjQtNC43LTUuNi04LTEwLjctOGMtMi42LDAtNC45LDAuOS02LjgsMi4zYzEuMS0wLjgsMi41LTEuMyw0LTEuM2MxLjMsMCwyLjYsMC40LDMuNywxLjFjMS42LDEsMi44LDIuOCwzLjEsNC43CiAgICBjMC4xLDAuNiwwLjEsMS4zLDAuMSwxLjljMCwwLjMsMCwwLjYsMCwwLjljLTAuMSwwLjYtMC4xLDEuMi0wLjMsMS44Yy0wLjEsMC42LTAuMywxLjEtMC41LDEuN2MtMC4yLDAuNS0wLjQsMS4xLTAuNywxLjYKICAgIGMtMC4zLDAuNS0wLjYsMS0wLjksMS41Yy0wLjMsMC41LTAuNywwLjktMS4xLDEuM2MtMC40LDAuNC0wLjgsMC44LTEuMiwxLjJjLTAuNCwwLjQtMC45LDAuNy0xLjQsMWMtMC41LDAuMy0xLDAuNi0xLjUsMC44CiAgICBjLTAuNSwwLjItMS4xLDAuNS0xLjYsMC42Yy0wLjYsMC4yLTEuMSwwLjMtMS43LDAuNGMtMC42LDAuMS0xLjIsMC4yLTEuOCwwLjJjLTAuMSwwLTAuMywwLTAuNCwwYzAuNiwwLjIsMS4xLDAuMywxLjcsMC40CiAgICBjMC44LDAuMSwxLjYsMC4yLDIuNCwwLjJjMC4xLDAsMC4yLDAsMC4zLDBDMjEsMjYuNiwyNy43LDIwLjMsMjguMywxMi40QzI4LjMsMTIuMywyOC4zLDEyLjQsMjguMywxMi40Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0UwMjkyNiIgZD0iTTE0LjYsOC40Yy0yLjQsMC4xLTQuNCwxLjMtNS42LDMuMmMwLDAsMCwwLDAsMC4xdjIyLjRjMCwwLjEsMC4xLDAuMSwwLjEsMC4xCiAgICBjMi40LTAuMSw0LjQtMS4zLDUuNi0zLjJjMCwwLDAsMCwwLTAuMVY4LjVDMTQuNyw4LjUsMTQuNyw4LjQsMTQuNiw4LjQiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNjEuMSwxMy41YzAsMy44LTIuMyw3LjMtNy4yLDcuM3MtNy4yLTMuNi03LjItNy4zYzAtNC4zLDMtNy40LDcuMy03LjQKICAgIEM1OC43LDYuMSw2MS4xLDkuNiw2MS4xLDEzLjUgTTUzLjgsMTguN2MzLjUsMCw1LTIuNSw1LTUuMmMwLTIuNi0xLjUtNS4zLTUtNS40Yy0zLjMsMC01LDIuMy01LDUuNEM0OC45LDE2LDUwLjMsMTguNyw1My44LDE4LjciPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNzAuMyw2LjNjMi43LDAsNC44LDEuMiw0LjgsNGMwLDEuMi0wLjYsMi4zLTIsMi44YzEuNywwLjUsMi40LDIuMiwyLjQsMy4zCiAgICBjMCwzLjEtMi41LDQtNS4zLDRoLTYuNVY2LjNINzAuM3ogTTY2LDEyLjJoNC4zYzEuNywwLDIuNS0wLjcsMi41LTEuOGMwLTEtMC45LTItMi42LTJINjZWMTIuMnogTTY2LDE4LjRoNC4yYzEuMywwLDMtMC40LDMtMgogICAgYzAtMS41LTEuNy0yLjItMy0yLjJINjZWMTguNHoiPjwvcGF0aD4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNODkuNSw2LjN2OC4zYzAsMy42LTIuMyw2LjEtNi4xLDYuMWMtMy41LDAtNi0yLjItNi02aDIuMgogICAgYzAsMi41LDEuNCwzLjksMy44LDMuOWMyLjUsMCwzLjgtMS43LDMuOC00VjYuM0g4OS41eiI+PC9wYXRoPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTAzLjMsMjAuNSA5Mi45LDIwLjUgOTIuOSw2LjMgMTAzLjMsNi4zIDEwMy4zLDguNSA5NS4yLDguNSAKICAgIDk1LjIsMTIuNCAxMDMsMTIuNCAxMDMsMTQuNSA5NS4yLDE0LjUgOTUuMiwxOC4zIDEwMy4zLDE4LjMgICI+PC9wb2x5Z29uPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMTguMywxOC43Yy0xLjUsMS40LTMuMywyLjEtNS4zLDIuMWMtNS4xLDAtNy40LTMuNS03LjUtNy4zCiAgICBjMC0zLjcsMi40LTcuNCw3LjUtNy40YzEuOSwwLDMuNywwLjcsNS4yLDIuMWwtMS41LDEuNWMtMS0xLTIuMy0xLjUtMy43LTEuNWMtMy42LDAtNS4yLDIuNi01LjIsNS4zYzAsMi42LDEuNiw1LjIsNS4yLDUuMgogICAgYzEuMywwLDIuOC0wLjUsMy44LTEuNUwxMTguMywxOC43eiI+PC9wYXRoPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTI0LjIsOC40IDExOS41LDguNCAxMTkuNSw2LjMgMTMxLjEsNi4zIDEzMS4xLDguNCAxMjYuNCw4LjQgCiAgICAxMjYuNCwyMC41IDEyNC4yLDIwLjUgICAiPjwvcG9seWdvbj4KICA8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTM5LjksMTYuMXY0LjNoLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDBjNi44LDAsNi44LDkuOCwwLDkuOEgxMzkuOXoKICAgICBNMTM5LjksMTQuMWg0LjNjMy43LDAsMy43LTUuNywwLTUuN2gtNC4zVjE0LjF6Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTE2MC40LDE3LjVoLTcuN2wtMS4zLDNIMTQ5bDYuMy0xNC4yaDIuNWw2LjMsMTQuMmgtMi40TDE2MC40LDE3LjV6CiAgICAgTTE1Ni42LDguN2wtMyw2LjdoNkwxNTYuNiw4Ljd6Ij48L3BhdGg+CiAgPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTE3OC41LDIwLjVoLTIuNmwtNC4zLTQuOWgtM3Y0LjloLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDAKICAgIGMzLjMsMCw1LDIuMiw1LDQuNmMwLDItMS4xLDQtMy44LDQuNGw0LjIsNC43TDE3OC41LDIwLjV6IE0xNjguNSw4LjR2NS4xaDQuM2MxLjksMCwyLjctMS4yLDIuNy0yLjVjMC0xLjMtMC44LTIuNi0yLjctMi42SDE2OC41egogICAgIj48L3BhdGg+CiAgPHBvbHlnb24gY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxODQuMyw4LjQgMTc5LjYsOC40IDE3OS42LDYuMyAxOTEuMiw2LjMgMTkxLjIsOC40IDE4Ni41LDguNCAKICAgIDE4Ni41LDIwLjUgMTg0LjMsMjAuNSAgICI+PC9wb2x5Z29uPgogIDxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjAzLjIsMTYuNCAyMDMuMiw2LjMgMjA1LjUsNi4zIDIwNS41LDIwLjUgMjAzLjgsMjAuNSAxOTUuOCwxMC41IAogICAgMTk1LjgsMjAuNSAxOTMuNSwyMC41IDE5My41LDYuMyAxOTUuMiw2LjMgICAiPjwvcG9seWdvbj4KICA8cG9seWdvbiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjIxOS41LDIwLjUgMjA5LjEsMjAuNSAyMDkuMSw2LjMgMjE5LjUsNi4zIDIxOS41LDguNSAyMTEuMyw4LjUgCiAgICAyMTEuMywxMi40IDIxOS4xLDEyLjQgMjE5LjEsMTQuNSAyMTEuMywxNC41IDIxMS4zLDE4LjMgMjE5LjUsMTguMyAgICI+PC9wb2x5Z29uPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMzQuNywyMC41SDIzMmwtNC4zLTQuOWgtM3Y0LjloLTIuM1Y2LjNjMi4yLDAsNC40LDAsNi42LDBjMy4zLDAsNSwyLjIsNSw0LjYKICAgIGMwLDItMS4xLDQtMy44LDQuNGw0LjIsNC43TDIzNC43LDIwLjV6IE0yMjQuNyw4LjR2NS4xaDQuM2MxLjksMCwyLjctMS4yLDIuNy0yLjVjMC0xLjMtMC44LTIuNi0yLjctMi42SDIyNC43eiI+PC9wYXRoPgogIDxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNDUuNSw5LjVjLTAuNy0xLTItMS42LTMuNS0xLjZjLTEuOSwwLTMuMywwLjgtMy4zLDIuMWMwLDEuNCwxLjYsMS44LDMuNCwyCiAgICBjMi45LDAuNCw1LjcsMS4yLDUuNyw0LjRjMCwzLjItMi45LDQuNC01LjksNC40Yy0yLjcsMC00LjgtMC44LTYuMS0zLjJsMS43LTEuMWMxLDEuNywyLjgsMi4zLDQuNCwyLjNjMS43LDAsMy42LTAuNiwzLjYtMi4zCiAgICBjMC0xLjUtMS42LTIuMS0zLjYtMi4zYy0yLjgtMC40LTUuNS0xLjEtNS41LTQuMWMwLTIuOSwyLjktNC4xLDUuNS00LjFjMiwwLDQuMSwwLjUsNS4zLDIuNEwyNDUuNSw5LjV6Ij48L3BhdGg+CjwvZz4KPC9zdmc+';

        /***/
      }

      /******/
    }
  );
});
//# sourceMappingURL=create-theme.js.map
