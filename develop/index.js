"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 9971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/StatusCard.js
var StatusCard = __webpack_require__(7551);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "chart.js"
const external_chart_js_namespaceObject = require("chart.js");
var external_chart_js_default = /*#__PURE__*/__webpack_require__.n(external_chart_js_namespaceObject);
// EXTERNAL MODULE: external "@material-tailwind/react/Card"
var Card_ = __webpack_require__(1658);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@material-tailwind/react/CardHeader"
var CardHeader_ = __webpack_require__(3789);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@material-tailwind/react/CardBody"
var CardBody_ = __webpack_require__(9816);
var CardBody_default = /*#__PURE__*/__webpack_require__.n(CardBody_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/CharLine.js







function ChartLine() {
  (0,external_react_.useEffect)(() => {
    var config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: '#03a9f4',
          borderColor: '#03a9f4',
          data: [65, 78, 66, 44, 56, 67, 75],
          fill: false
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: '#ff9800',
          borderColor: '#ff9800',
          data: [40, 68, 86, 74, 56, 60, 87]
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white'
        },
        legend: {
          labels: {
            fontColor: 'black'
          },
          align: 'end',
          position: 'bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: 'rgba(17,17,17,.7)'
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Month',
              fontColor: 'white'
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(0, 0, 0, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'rgba(17,17,17,.7)'
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
              fontColor: 'white'
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: 'rgba(17, 17, 17, 0.15)',
              zeroLineColor: 'rgba(33, 37, 41, 0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    var ctx = document.getElementById('line-chart').getContext('2d');
    window.myLine = new (external_chart_js_default())(ctx, config);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((CardHeader_default()), {
      color: "orange",
      contentPosition: "left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
        className: "uppercase text-gray-200 text-xs font-medium",
        children: "Overview"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-white text-2xl",
        children: "Sales value"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((CardBody_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative h-96",
        children: /*#__PURE__*/jsx_runtime_.jsx("canvas", {
          id: "line-chart"
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/ChartBar.js







function ChartBar() {
  (0,external_react_.useEffect)(() => {
    let config = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: '#03a9f4',
          borderColor: '#03a9f4',
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: '#f44336',
          borderColor: '#f44336',
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          labels: {
            fontColor: 'rgba(17,17,17,.7)'
          },
          align: 'end',
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.3)',
              zeroLineColor: 'rgba(33, 37, 41, 0.3)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value'
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: 'rgba(33, 37, 41, 0.2)',
              zeroLineColor: 'rgba(33, 37, 41, 0.15)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    let ctx = document.getElementById('bar-chart').getContext('2d');
    window.myBar = new (external_chart_js_default())(ctx, config);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((CardHeader_default()), {
      color: "pink",
      contentPosition: "left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
        className: "uppercase text-gray-200 text-xs font-medium",
        children: "Overview"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-white text-2xl",
        children: "Sales value"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((CardBody_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative h-96",
        children: /*#__PURE__*/jsx_runtime_.jsx("canvas", {
          id: "bar-chart"
        })
      })
    })]
  });
}
// EXTERNAL MODULE: external "@material-tailwind/react/Button"
var Button_ = __webpack_require__(5351);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/PageVisitsCard.js








function CoinsMarkets({
  markets
}) {
  const {
    0: state,
    1: setMarkets
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setMarkets(markets);
  }, [markets]); //console.log(state)

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((CardHeader_default()), {
      color: "blue",
      contentPosition: "none",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-white text-2xl",
          children: "Coins Markets"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          style: {
            padding: 0
          },
          children: "See More"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((CardBody_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overflow-x-auto max-h-96",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: "items-center w-full bg-transparent border-collapse",
          children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "ID"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Name"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Name"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Precio"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "1 hr"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "24 hr"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "7 dias"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
            children: state === null || state === void 0 ? void 0 : state.map((coin, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: i + 1
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: coin.image,
                  height: 30,
                  width: 30
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: coin.name
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: coin.current_price
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: coin.price_change_24h
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: ` ${coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'} border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left`,
                children: coin.price_change_percentage_24h
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: coin.total_volumen
              })]
            }, coin.id))
          })]
        })
      })
    })]
  });
}
// EXTERNAL MODULE: external "@material-tailwind/react/Progress"
var Progress_ = __webpack_require__(128);
var Progress_default = /*#__PURE__*/__webpack_require__.n(Progress_);
// EXTERNAL MODULE: ./firebase/client.js + 1 modules
var client = __webpack_require__(9517);
;// CONCATENATED MODULE: ./components/TrafficCard.js









function TrafficCard() {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(undefined);
  const {
    0: backend,
    1: setBacken
  } = (0,external_react_.useState)(null);

  const getData = async () => {
    const rst = await client.db.collection('user').doc(user === null || user === void 0 ? void 0 : user.uid).get();
    const rest = rst.data(); // const rest = data.map(d => d.data())

    setBacken(rest); //console.log(rest)
  };

  (0,external_react_.useEffect)(async () => {
    client/* app.auth */.l2.auth().onAuthStateChanged(user => setUser(user));

    if (backend == null) {
      getData();
    }
  }, [user]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Card_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((CardHeader_default()), {
      color: "purple",
      contentPosition: "none",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-white text-2xl",
          children: "Social Media"
        }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
          color: "transparent",
          buttonType: "link",
          size: "lg",
          style: {
            padding: 0
          },
          children: "See More"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((CardBody_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: "items-center w-full bg-transparent border-collapse",
          children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
            className: "thead-light",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Referral"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left",
                children: "Visitors"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: backend === null || backend === void 0 ? void 0 : backend.email
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: backend === null || backend === void 0 ? void 0 : backend.uid
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/jsx_runtime_.jsx((Progress_default()), {
                  color: "blue",
                  value: "60"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Google"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "4,807"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/jsx_runtime_.jsx((Progress_default()), {
                  color: "red",
                  value: "80"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Instagram"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "3,678"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/jsx_runtime_.jsx((Progress_default()), {
                  color: "indigo",
                  value: "75"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "Twitter"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: "2,645"
              }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                className: "border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left",
                children: /*#__PURE__*/jsx_runtime_.jsx((Progress_default()), {
                  color: "lightBlue",
                  value: "90"
                })
              })]
            })]
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: external "next-auth/client"
const client_namespaceObject = require("next-auth/client");
;// CONCATENATED MODULE: ./pages/index.js











function Home({
  markets,
  backend
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Next-Tailwind | Crypto Coins"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-gray-800 px-3 md:px-8 h-40"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-3 md:px-8 -mt-24",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container mx-auto max-w-full",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 xl:grid-cols-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "xl:col-start-1 xl:col-end-4 px-4 mb-14",
              children: /*#__PURE__*/jsx_runtime_.jsx(ChartLine, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "xl:col-start-4 xl:col-end-6 px-4 mb-14",
              children: /*#__PURE__*/jsx_runtime_.jsx(ChartBar, {})
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-3 md:px-8",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container mx-auto max-w-full",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(StatusCard/* default */.Z, {
              color: "pink",
              icon: "trending_up",
              title: "Traffic",
              amount: "350,897",
              percentage: "3.48",
              percentageIcon: "arrow_upward",
              percentageColor: "green",
              date: "Since last month"
            }), /*#__PURE__*/jsx_runtime_.jsx(StatusCard/* default */.Z, {
              color: "orange",
              icon: "groups",
              title: "New Users",
              amount: "2,356",
              percentage: "3.48",
              percentageIcon: "arrow_downward",
              percentageColor: "red",
              date: "Since last week"
            }), /*#__PURE__*/jsx_runtime_.jsx(StatusCard/* default */.Z, {
              color: "purple",
              icon: "paid",
              title: "Sales",
              amount: "924",
              percentage: "1.10",
              percentageIcon: "arrow_downward",
              percentageColor: "orange",
              date: "Since yesterday"
            }), /*#__PURE__*/jsx_runtime_.jsx(StatusCard/* default */.Z, {
              color: "blue",
              icon: "poll",
              title: "Performance",
              amount: "49,65%",
              percentage: "12",
              percentageIcon: "arrow_upward",
              percentageColor: "green",
              date: "Since last month"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-3 md:px-8 h-auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container mx-auto max-w-full",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 xl:grid-cols-1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "xl:col-start-1 xl:col-end-4 px-4 mb-14",
              children: /*#__PURE__*/jsx_runtime_.jsx(CoinsMarkets, {
                markets: markets
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "xl:col-start-4 xl:col-end-6 px-4 mb-14",
              children: /*#__PURE__*/jsx_runtime_.jsx(TrafficCard, {})
            })]
          })
        })
      })]
    })]
  });
}
async function getServerSideProps(ctx) {
  const res = await fetch(`https://crypto-coins-virid.vercel.app/api/coins/markets`);
  const data = await res.json();

  if (!data) {
    return {
      props: {}
    };
  }

  return {
    props: {
      markets: data
    } // will be passed to the page component as props

  };
}

/***/ }),

/***/ 5351:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Button");

/***/ }),

/***/ 1658:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Card");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardBody");

/***/ }),

/***/ 3789:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardHeader");

/***/ }),

/***/ 592:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardRow");

/***/ }),

/***/ 3803:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardStatus");

/***/ }),

/***/ 6811:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/CardStatusFooter");

/***/ }),

/***/ 2195:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Icon");

/***/ }),

/***/ 128:
/***/ ((module) => {

module.exports = require("@material-tailwind/react/Progress");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [426,675,551], () => (__webpack_exec__(9971)));
module.exports = __webpack_exports__;

})();