(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l2": () => (/* binding */ app),
  "db": () => (/* binding */ db),
  "M3": () => (/* binding */ facebookAuthProvider),
  "qV": () => (/* binding */ googleAuthProvider)
});

;// CONCATENATED MODULE: external "firebase"
const external_firebase_namespaceObject = require("firebase");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_namespaceObject);
;// CONCATENATED MODULE: ./firebase/client.js

const firebaseConfig = {
  apiKey: "AIzaSyDtln2KCrL5a5dbeD89SCJgZdFy3MGhZgU",
  authDomain: "crypto-coins-b0085.firebaseapp.com",
  projectId: "crypto-coins-b0085",
  storageBucket: "crypto-coins-b0085.appspot.com",
  messagingSenderId: "1005267153997",
  appId: "1:1005267153997:web:f87ebeb14f333f63a6d804",
  measurementId: "G-BGY1PM2N99"
};
const app = !(external_firebase_default()).apps.length ? external_firebase_default().initializeApp(firebaseConfig) : external_firebase_default().app(); // const firebaseAnalytics = app.analytics();

const googleAuthProvider = new (external_firebase_default()).auth.GoogleAuthProvider();
const facebookAuthProvider = new (external_firebase_default()).auth.FacebookAuthProvider();
const db = external_firebase_default().firestore();


/***/ }),

/***/ 2948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-tailwind/react/Button"
var Button_ = __webpack_require__(5351);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-tailwind/react/Icon"
var Icon_ = __webpack_require__(2195);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
;// CONCATENATED MODULE: external "@material-tailwind/react/NavbarInput"
const NavbarInput_namespaceObject = require("@material-tailwind/react/NavbarInput");
var NavbarInput_default = /*#__PURE__*/__webpack_require__.n(NavbarInput_namespaceObject);
// EXTERNAL MODULE: external "@material-tailwind/react/Image"
var Image_ = __webpack_require__(4755);
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);
;// CONCATENATED MODULE: external "@material-tailwind/react/Dropdown"
const Dropdown_namespaceObject = require("@material-tailwind/react/Dropdown");
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown_namespaceObject);
;// CONCATENATED MODULE: external "@material-tailwind/react/DropdownItem"
const DropdownItem_namespaceObject = require("@material-tailwind/react/DropdownItem");
var DropdownItem_default = /*#__PURE__*/__webpack_require__.n(DropdownItem_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var router = __webpack_require__(4651);
// EXTERNAL MODULE: ./firebase/client.js + 1 modules
var client = __webpack_require__(9517);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/AdminNavbar.js










function AdminNavbar({
  showSidebar,
  setShowSidebar
}) {
  const cerrarSesion = () => {
    console.log('salir');
    client/* app.auth */.l2.auth().signOut();
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "bg-gray-800 md:ml-64 py-6 px-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          iconOnly: true,
          rounded: true,
          ripple: "light",
          onClick: () => setShowSidebar('left-0'),
          children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
            name: "menu",
            size: "2xl",
            color: "white"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'} z-50 transition-all duration-300`,
          children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
            color: "transparent",
            buttonType: "link",
            size: "lg",
            iconOnly: true,
            rounded: true,
            ripple: "light",
            onClick: () => setShowSidebar('-left-64'),
            children: /*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
              name: "close",
              size: "2xl",
              color: "white"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-end items-center w-full",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx((NavbarInput_default()), {
            placeholder: "Search"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "-mr-4 ml-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Dropdown_default()), {
              color: "transparent",
              buttonText: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-12",
                children: /*#__PURE__*/jsx_runtime_.jsx((Image_default()), {
                  src: "https://demos.creative-tim.com/material-tailwind-dashboard-react/static/media/team-1-800x800.fa5a7ac2.jpg",
                  rounded: true
                })
              }),
              rounded: true,
              style: {
                padding: 0,
                color: 'transparent'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx((DropdownItem_default()), {
                color: "lightBlue",
                children: "Action"
              }), /*#__PURE__*/jsx_runtime_.jsx((DropdownItem_default()), {
                color: "lightBlue",
                children: "Another Action"
              }), /*#__PURE__*/jsx_runtime_.jsx((DropdownItem_default()), {
                onClick: () => cerrarSesion(),
                color: "lightBlue",
                children: "Cerrar Sesion"
              })]
            })
          })]
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: external "@material-tailwind/react/Heading6"
const Heading6_namespaceObject = require("@material-tailwind/react/Heading6");
var Heading6_default = /*#__PURE__*/__webpack_require__.n(Heading6_namespaceObject);
;// CONCATENATED MODULE: ./components/Side.js








function Sidebar() {
  const {
    0: showSidebar,
    1: setShowSidebar
  } = (0,external_react_.useState)('-left-64');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AdminNavbar, {
      showSidebar: showSidebar,
      setShowSidebar: setShowSidebar
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `h-screen fixed top-0 md:left-0 ${showSidebar}  overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-gray-800  w-64 z-10 py-4 px-6 transition-all duration-300`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-col  items-stretch min-h-full flex-nowrap px-0 relative",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-2 text-center w-full inline-block",
            children: /*#__PURE__*/jsx_runtime_.jsx((Heading6_default()), {
              color: "white",
              children: "Material Tailwind"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
            className: "my-4 min-w-full"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "flex-col min-w-full flex list-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "rounded-lg mb-4",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
                    name: "dashboard",
                    size: "2xl"
                  }), "Dashboard"]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "rounded-lg mb-2",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/settings",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
                    name: "settings",
                    size: "2xl"
                  }), "Settings"]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "rounded-lg mb-2 ",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/tables",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
                    name: "toc",
                    size: "2xl"
                  }), "Tables"]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "rounded-lg mb-2 text-white",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/map",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
                    name: "map",
                    size: "2xl"
                  }), "Maps"]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "px-4 rounded-lg mb-2 text-white",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/profile",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  rel: "noreferrer",
                  className: "flex items-center gap-4 text-sm font-light py-3",
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
                    name: "account_circle",
                    size: "2xl"
                  }), "Profile Page"]
                })
              })
            })]
          })]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "@material-tailwind/react/Card"
var Card_ = __webpack_require__(1658);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@material-tailwind/react/CardHeader"
var CardHeader_ = __webpack_require__(3789);
// EXTERNAL MODULE: external "@material-tailwind/react/CardBody"
var CardBody_ = __webpack_require__(9816);
var CardBody_default = /*#__PURE__*/__webpack_require__.n(CardBody_);
// EXTERNAL MODULE: external "@material-tailwind/react/CardFooter"
var CardFooter_ = __webpack_require__(4109);
var CardFooter_default = /*#__PURE__*/__webpack_require__.n(CardFooter_);
// EXTERNAL MODULE: external "@material-tailwind/react/Heading5"
var Heading5_ = __webpack_require__(3586);
;// CONCATENATED MODULE: external "@material-tailwind/react/InputIcon"
const InputIcon_namespaceObject = require("@material-tailwind/react/InputIcon");
var InputIcon_default = /*#__PURE__*/__webpack_require__.n(InputIcon_namespaceObject);
;// CONCATENATED MODULE: external "@material-tailwind/react/Checkbox"
const Checkbox_namespaceObject = require("@material-tailwind/react/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: ./components/Login.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Login({
  children
}) {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(null);

  const handleInputChange = e => {
    e.preventDefault();
    const {
      name,
      value
    } = e.target;
    setUser(_objectSpread(_objectSpread({}, user), {}, {
      [name]: value
    }));
  };

  const iniciarSesion = async () => {
    const {
      email,
      password
    } = user;

    try {
      await client/* app.auth */.l2.auth().signInWithEmailAndPassword(email, password);
      const currentUser = await client/* app.auth */.l2.auth().currentUser;
      const firebaseToken = await client/* app.auth */.l2.auth().currentUser.getIdToken();
      await client.db.collection('user').doc(currentUser.uid).set({
        token: firebaseToken,
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName
      });
      console.log(currentUser);
    } catch (e) {
      alert(e);
    }
  };

  const iniciarSesionProviders = async provider => {
    try {
      await client/* app.auth */.l2.auth().signInWithPopup(provider);
      const currentUser = await client/* app.auth */.l2.auth().currentUser;
      const firebaseToken = await client/* app.auth */.l2.auth().currentUser.getIdToken();
      await client.db.collection('user').doc(currentUser.uid).set({
        token: firebaseToken,
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName
      });
      console.log(firebaseToken);
    } catch (e) {
      alert(e);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Iniciar | Crypto Coins"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-login-background bg-cover bg-center w-screen h-screen relative flex flex-col justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "max-w-sm w-96",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((CardBody_default()), {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mb-12 px-4 bg-bb",
                children: /*#__PURE__*/jsx_runtime_.jsx((InputIcon_default()), {
                  type: "email",
                  color: "lightBlue",
                  placeholder: "Email Address",
                  iconName: "email",
                  name: "email",
                  onChange: handleInputChange
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mb-8 px-4",
                children: /*#__PURE__*/jsx_runtime_.jsx((InputIcon_default()), {
                  type: "password",
                  color: "lightBlue",
                  placeholder: "Password",
                  iconName: "lock",
                  name: "password",
                  onChange: handleInputChange
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mb-4 px-4",
                children: /*#__PURE__*/jsx_runtime_.jsx((Checkbox_default()), {
                  color: "lightBlue",
                  text: "Remember Me",
                  id: "remember"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((CardFooter_default()), {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex justify-center bg-bb",
                children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                  onClick: iniciarSesion,
                  color: "lightBlue",
                  buttonType: "link",
                  size: "lg",
                  ripple: "dark",
                  children: "Ingresar"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between",
                children: [/*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                  onClick: () => iniciarSesionProviders(client/* googleAuthProvider */.qV),
                  color: "lightBlue",
                  buttonType: "link",
                  size: "lg",
                  ripple: "dark",
                  children: "Google"
                }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                  onClick: () => iniciarSesionProviders(client/* facebookAuthProvider */.M3),
                  color: "lightBlue",
                  buttonType: "link",
                  size: "lg",
                  ripple: "dark",
                  children: "Facebook"
                })]
              })]
            })]
          })
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(undefined);
  (0,external_react_.useEffect)(() => {
    client/* app.auth */.l2.auth().onAuthStateChanged(user => setUser(user));
  }, []);
  if (user === undefined) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});else if (!user) return /*#__PURE__*/jsx_runtime_.jsx(Login, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
        integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
        crossOrigin: "anonymous"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:ml-64",
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5351:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/Button");

/***/ }),

/***/ 1658:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/Card");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/CardBody");

/***/ }),

/***/ 4109:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/CardFooter");

/***/ }),

/***/ 3789:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/CardHeader");

/***/ }),

/***/ 3586:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/Heading5");

/***/ }),

/***/ 2195:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/Icon");

/***/ }),

/***/ 4755:
/***/ ((module) => {

"use strict";
module.exports = require("@material-tailwind/react/Image");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,664], () => (__webpack_exec__(2948)));
module.exports = __webpack_exports__;

})();