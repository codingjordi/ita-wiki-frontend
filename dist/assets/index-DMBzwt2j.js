(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = r(o);
    fetch(o.href, u);
  }
})();
function Df(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Pd = { exports: {} },
  Ki = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm;
function iv() {
  if (Xm) return Ki;
  Xm = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(i, o, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var h in o) h !== "key" && (u[h] = o[h]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: a, type: i, key: f, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (Ki.Fragment = n), (Ki.jsx = r), (Ki.jsxs = r), Ki;
}
var Qm;
function lv() {
  return Qm || ((Qm = 1), (Pd.exports = iv())), Pd.exports;
}
var p = lv(),
  Gd = { exports: {} },
  Me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km;
function ov() {
  if (Km) return Me;
  Km = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (v && E[v]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    G = {};
  function H(E, z, K) {
    (this.props = E),
      (this.context = z),
      (this.refs = G),
      (this.updater = K || R);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (E, z) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, z, "setState");
    }),
    (H.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function B() {}
  B.prototype = H.prototype;
  function I(E, z, K) {
    (this.props = E),
      (this.context = z),
      (this.refs = G),
      (this.updater = K || R);
  }
  var V = (I.prototype = new B());
  (V.constructor = I), A(V, H.prototype), (V.isPureReactComponent = !0);
  var te = Array.isArray,
    U = { H: null, A: null, T: null, S: null, V: null },
    ne = Object.prototype.hasOwnProperty;
  function $(E, z, K, F, de, ke) {
    return (
      (K = ke.ref),
      { $$typeof: a, type: E, key: z, ref: K !== void 0 ? K : null, props: ke }
    );
  }
  function me(E, z) {
    return $(E.type, z, void 0, void 0, void 0, E.props);
  }
  function ve(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function Re(E) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (K) {
        return z[K];
      })
    );
  }
  var oe = /\/+/g;
  function re(E, z) {
    return typeof E == "object" && E !== null && E.key != null
      ? Re("" + E.key)
      : z.toString(36);
  }
  function ge() {}
  function Ce(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(ge, ge)
            : ((E.status = "pending"),
              E.then(
                function (z) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = z));
                },
                function (z) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = z));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Se(E, z, K, F, de) {
    var ke = typeof E;
    (ke === "undefined" || ke === "boolean") && (E = null);
    var le = !1;
    if (E === null) le = !0;
    else
      switch (ke) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case n:
              le = !0;
              break;
            case _:
              return (le = E._init), Se(le(E._payload), z, K, F, de);
          }
      }
    if (le)
      return (
        (de = de(E)),
        (le = F === "" ? "." + re(E, 0) : F),
        te(de)
          ? ((K = ""),
            le != null && (K = le.replace(oe, "$&/") + "/"),
            Se(de, z, K, "", function (lt) {
              return lt;
            }))
          : de != null &&
            (ve(de) &&
              (de = me(
                de,
                K +
                  (de.key == null || (E && E.key === de.key)
                    ? ""
                    : ("" + de.key).replace(oe, "$&/") + "/") +
                  le,
              )),
            z.push(de)),
        1
      );
    le = 0;
    var nt = F === "" ? "." : F + ":";
    if (te(E))
      for (var je = 0; je < E.length; je++)
        (F = E[je]), (ke = nt + re(F, je)), (le += Se(F, z, K, ke, de));
    else if (((je = C(E)), typeof je == "function"))
      for (E = je.call(E), je = 0; !(F = E.next()).done; )
        (F = F.value), (ke = nt + re(F, je++)), (le += Se(F, z, K, ke, de));
    else if (ke === "object") {
      if (typeof E.then == "function") return Se(Ce(E), z, K, F, de);
      throw (
        ((z = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return le;
  }
  function k(E, z, K) {
    if (E == null) return E;
    var F = [],
      de = 0;
    return (
      Se(E, F, "", "", function (ke) {
        return z.call(K, ke, de++);
      }),
      F
    );
  }
  function Q(E) {
    if (E._status === -1) {
      var z = E._result;
      (z = z()),
        z.then(
          function (K) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = K));
          },
          function (K) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = K));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = z));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce =
    typeof reportError == "function"
      ? reportError
      : function (E) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == "object" &&
                E !== null &&
                typeof E.message == "string"
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        };
  function Ee() {}
  return (
    (Me.Children = {
      map: k,
      forEach: function (E, z, K) {
        k(
          E,
          function () {
            z.apply(this, arguments);
          },
          K,
        );
      },
      count: function (E) {
        var z = 0;
        return (
          k(E, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (E) {
        return (
          k(E, function (z) {
            return z;
          }) || []
        );
      },
      only: function (E) {
        if (!ve(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    }),
    (Me.Component = H),
    (Me.Fragment = r),
    (Me.Profiler = o),
    (Me.PureComponent = I),
    (Me.StrictMode = i),
    (Me.Suspense = g),
    (Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (Me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return U.H.useMemoCache(E);
      },
    }),
    (Me.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Me.cloneElement = function (E, z, K) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var F = A({}, E.props),
        de = E.key,
        ke = void 0;
      if (z != null)
        for (le in (z.ref !== void 0 && (ke = void 0),
        z.key !== void 0 && (de = "" + z.key),
        z))
          !ne.call(z, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && z.ref === void 0) ||
            (F[le] = z[le]);
      var le = arguments.length - 2;
      if (le === 1) F.children = K;
      else if (1 < le) {
        for (var nt = Array(le), je = 0; je < le; je++)
          nt[je] = arguments[je + 2];
        F.children = nt;
      }
      return $(E.type, de, void 0, void 0, ke, F);
    }),
    (Me.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: u, _context: E }),
        E
      );
    }),
    (Me.createElement = function (E, z, K) {
      var F,
        de = {},
        ke = null;
      if (z != null)
        for (F in (z.key !== void 0 && (ke = "" + z.key), z))
          ne.call(z, F) &&
            F !== "key" &&
            F !== "__self" &&
            F !== "__source" &&
            (de[F] = z[F]);
      var le = arguments.length - 2;
      if (le === 1) de.children = K;
      else if (1 < le) {
        for (var nt = Array(le), je = 0; je < le; je++)
          nt[je] = arguments[je + 2];
        de.children = nt;
      }
      if (E && E.defaultProps)
        for (F in ((le = E.defaultProps), le))
          de[F] === void 0 && (de[F] = le[F]);
      return $(E, ke, void 0, void 0, null, de);
    }),
    (Me.createRef = function () {
      return { current: null };
    }),
    (Me.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (Me.isValidElement = ve),
    (Me.lazy = function (E) {
      return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: Q };
    }),
    (Me.memo = function (E, z) {
      return { $$typeof: m, type: E, compare: z === void 0 ? null : z };
    }),
    (Me.startTransition = function (E) {
      var z = U.T,
        K = {};
      U.T = K;
      try {
        var F = E(),
          de = U.S;
        de !== null && de(K, F),
          typeof F == "object" &&
            F !== null &&
            typeof F.then == "function" &&
            F.then(Ee, ce);
      } catch (ke) {
        ce(ke);
      } finally {
        U.T = z;
      }
    }),
    (Me.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (Me.use = function (E) {
      return U.H.use(E);
    }),
    (Me.useActionState = function (E, z, K) {
      return U.H.useActionState(E, z, K);
    }),
    (Me.useCallback = function (E, z) {
      return U.H.useCallback(E, z);
    }),
    (Me.useContext = function (E) {
      return U.H.useContext(E);
    }),
    (Me.useDebugValue = function () {}),
    (Me.useDeferredValue = function (E, z) {
      return U.H.useDeferredValue(E, z);
    }),
    (Me.useEffect = function (E, z, K) {
      var F = U.H;
      if (typeof K == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return F.useEffect(E, z);
    }),
    (Me.useId = function () {
      return U.H.useId();
    }),
    (Me.useImperativeHandle = function (E, z, K) {
      return U.H.useImperativeHandle(E, z, K);
    }),
    (Me.useInsertionEffect = function (E, z) {
      return U.H.useInsertionEffect(E, z);
    }),
    (Me.useLayoutEffect = function (E, z) {
      return U.H.useLayoutEffect(E, z);
    }),
    (Me.useMemo = function (E, z) {
      return U.H.useMemo(E, z);
    }),
    (Me.useOptimistic = function (E, z) {
      return U.H.useOptimistic(E, z);
    }),
    (Me.useReducer = function (E, z, K) {
      return U.H.useReducer(E, z, K);
    }),
    (Me.useRef = function (E) {
      return U.H.useRef(E);
    }),
    (Me.useState = function (E) {
      return U.H.useState(E);
    }),
    (Me.useSyncExternalStore = function (E, z, K) {
      return U.H.useSyncExternalStore(E, z, K);
    }),
    (Me.useTransition = function () {
      return U.H.useTransition();
    }),
    (Me.version = "19.1.0"),
    Me
  );
}
var Jm;
function Mf() {
  return Jm || ((Jm = 1), (Gd.exports = ov())), Gd.exports;
}
var x = Mf();
const J = Df(x);
var Yd = { exports: {} },
  Ji = {},
  $d = { exports: {} },
  Fd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm;
function cv() {
  return (
    Wm ||
      ((Wm = 1),
      (function (a) {
        function n(k, Q) {
          var ce = k.length;
          k.push(Q);
          e: for (; 0 < ce; ) {
            var Ee = (ce - 1) >>> 1,
              E = k[Ee];
            if (0 < o(E, Q)) (k[Ee] = Q), (k[ce] = E), (ce = Ee);
            else break e;
          }
        }
        function r(k) {
          return k.length === 0 ? null : k[0];
        }
        function i(k) {
          if (k.length === 0) return null;
          var Q = k[0],
            ce = k.pop();
          if (ce !== Q) {
            k[0] = ce;
            e: for (var Ee = 0, E = k.length, z = E >>> 1; Ee < z; ) {
              var K = 2 * (Ee + 1) - 1,
                F = k[K],
                de = K + 1,
                ke = k[de];
              if (0 > o(F, ce))
                de < E && 0 > o(ke, F)
                  ? ((k[Ee] = ke), (k[de] = ce), (Ee = de))
                  : ((k[Ee] = F), (k[K] = ce), (Ee = K));
              else if (de < E && 0 > o(ke, ce))
                (k[Ee] = ke), (k[de] = ce), (Ee = de);
              else break e;
            }
          }
          return Q;
        }
        function o(k, Q) {
          var ce = k.sortIndex - Q.sortIndex;
          return ce !== 0 ? ce : k.id - Q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          a.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            h = f.now();
          a.unstable_now = function () {
            return f.now() - h;
          };
        }
        var g = [],
          m = [],
          _ = 1,
          v = null,
          C = 3,
          R = !1,
          A = !1,
          G = !1,
          H = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function te(k) {
          for (var Q = r(m); Q !== null; ) {
            if (Q.callback === null) i(m);
            else if (Q.startTime <= k)
              i(m), (Q.sortIndex = Q.expirationTime), n(g, Q);
            else break;
            Q = r(m);
          }
        }
        function U(k) {
          if (((G = !1), te(k), !A))
            if (r(g) !== null) (A = !0), ne || ((ne = !0), re());
            else {
              var Q = r(m);
              Q !== null && Se(U, Q.startTime - k);
            }
        }
        var ne = !1,
          $ = -1,
          me = 5,
          ve = -1;
        function Re() {
          return H ? !0 : !(a.unstable_now() - ve < me);
        }
        function oe() {
          if (((H = !1), ne)) {
            var k = a.unstable_now();
            ve = k;
            var Q = !0;
            try {
              e: {
                (A = !1), G && ((G = !1), I($), ($ = -1)), (R = !0);
                var ce = C;
                try {
                  t: {
                    for (
                      te(k), v = r(g);
                      v !== null && !(v.expirationTime > k && Re());

                    ) {
                      var Ee = v.callback;
                      if (typeof Ee == "function") {
                        (v.callback = null), (C = v.priorityLevel);
                        var E = Ee(v.expirationTime <= k);
                        if (((k = a.unstable_now()), typeof E == "function")) {
                          (v.callback = E), te(k), (Q = !0);
                          break t;
                        }
                        v === r(g) && i(g), te(k);
                      } else i(g);
                      v = r(g);
                    }
                    if (v !== null) Q = !0;
                    else {
                      var z = r(m);
                      z !== null && Se(U, z.startTime - k), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (C = ce), (R = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? re() : (ne = !1);
            }
          }
        }
        var re;
        if (typeof V == "function")
          re = function () {
            V(oe);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            Ce = ge.port2;
          (ge.port1.onmessage = oe),
            (re = function () {
              Ce.postMessage(null);
            });
        } else
          re = function () {
            B(oe, 0);
          };
        function Se(k, Q) {
          $ = B(function () {
            k(a.unstable_now());
          }, Q);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (a.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (me = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (a.unstable_next = function (k) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = C;
            }
            var ce = C;
            C = Q;
            try {
              return k();
            } finally {
              C = ce;
            }
          }),
          (a.unstable_requestPaint = function () {
            H = !0;
          }),
          (a.unstable_runWithPriority = function (k, Q) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var ce = C;
            C = k;
            try {
              return Q();
            } finally {
              C = ce;
            }
          }),
          (a.unstable_scheduleCallback = function (k, Q, ce) {
            var Ee = a.unstable_now();
            switch (
              (typeof ce == "object" && ce !== null
                ? ((ce = ce.delay),
                  (ce = typeof ce == "number" && 0 < ce ? Ee + ce : Ee))
                : (ce = Ee),
              k)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = ce + E),
              (k = {
                id: _++,
                callback: Q,
                priorityLevel: k,
                startTime: ce,
                expirationTime: E,
                sortIndex: -1,
              }),
              ce > Ee
                ? ((k.sortIndex = ce),
                  n(m, k),
                  r(g) === null &&
                    k === r(m) &&
                    (G ? (I($), ($ = -1)) : (G = !0), Se(U, ce - Ee)))
                : ((k.sortIndex = E),
                  n(g, k),
                  A || R || ((A = !0), ne || ((ne = !0), re()))),
              k
            );
          }),
          (a.unstable_shouldYield = Re),
          (a.unstable_wrapCallback = function (k) {
            var Q = C;
            return function () {
              var ce = C;
              C = Q;
              try {
                return k.apply(this, arguments);
              } finally {
                C = ce;
              }
            };
          });
      })(Fd)),
    Fd
  );
}
var e0;
function uv() {
  return e0 || ((e0 = 1), ($d.exports = cv())), $d.exports;
}
var Xd = { exports: {} },
  Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0;
function dv() {
  if (t0) return Bt;
  t0 = 1;
  var a = Mf();
  function n(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        m += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(g, m, _) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : "" + v,
      children: g,
      containerInfo: m,
      implementation: _,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Bt.createPortal = function (g, m) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(n(299));
      return u(g, m, null, _);
    }),
    (Bt.flushSync = function (g) {
      var m = f.T,
        _ = i.p;
      try {
        if (((f.T = null), (i.p = 2), g)) return g();
      } finally {
        (f.T = m), (i.p = _), i.d.f();
      }
    }),
    (Bt.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(g, m));
    }),
    (Bt.prefetchDNS = function (g) {
      typeof g == "string" && i.d.D(g);
    }),
    (Bt.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var _ = m.as,
          v = h(_, m.crossOrigin),
          C = typeof m.integrity == "string" ? m.integrity : void 0,
          R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        _ === "style"
          ? i.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: C,
              fetchPriority: R,
            })
          : _ === "script" &&
            i.d.X(g, {
              crossOrigin: v,
              integrity: C,
              fetchPriority: R,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Bt.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var _ = h(m.as, m.crossOrigin);
            i.d.M(g, {
              crossOrigin: _,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(g);
    }),
    (Bt.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var _ = m.as,
          v = h(_, m.crossOrigin);
        i.d.L(g, _, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Bt.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var _ = h(m.as, m.crossOrigin);
          i.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: _,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    (Bt.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (Bt.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (Bt.useFormState = function (g, m, _) {
      return f.H.useFormState(g, m, _);
    }),
    (Bt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Bt.version = "19.1.0"),
    Bt
  );
}
var n0;
function hp() {
  if (n0) return Xd.exports;
  n0 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (Xd.exports = dv()), Xd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0;
function fv() {
  if (a0) return Ji;
  a0 = 1;
  var a = uv(),
    n = Mf(),
    r = hp();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        t += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var t = e,
      s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (s = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e) throw Error(i(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = u(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var s = e, l = t; ; ) {
      var c = s.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((l = c.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === s) return h(c), e;
          if (d === l) return h(c), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== l.return) (s = c), (l = d);
      else {
        for (var y = !1, b = c.child; b; ) {
          if (b === s) {
            (y = !0), (s = c), (l = d);
            break;
          }
          if (b === l) {
            (y = !0), (l = c), (s = d);
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = d.child; b; ) {
            if (b === s) {
              (y = !0), (s = d), (l = c);
              break;
            }
            if (b === l) {
              (y = !0), (l = d), (s = c);
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (s.alternate !== l) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    v = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    I = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    te = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    ne = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ve = Symbol.for("react.activity"),
    Re = Symbol.for("react.memo_cache_sentinel"),
    oe = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (oe && e[oe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case A:
        return "Fragment";
      case H:
        return "Profiler";
      case G:
        return "StrictMode";
      case U:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case ve:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case V:
          return (e.displayName || "Context") + ".Provider";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case te:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case $:
          return (
            (t = e.displayName || null), t !== null ? t : Ce(e.type) || "Memo"
          );
        case me:
          (t = e._payload), (e = e._init);
          try {
            return Ce(e(t));
          } catch {}
      }
    return null;
  }
  var Se = Array.isArray,
    k = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ce = { pending: !1, data: null, method: null, action: null },
    Ee = [],
    E = -1;
  function z(e) {
    return { current: e };
  }
  function K(e) {
    0 > E || ((e.current = Ee[E]), (Ee[E] = null), E--);
  }
  function F(e, t) {
    E++, (Ee[E] = e.current), (e.current = t);
  }
  var de = z(null),
    ke = z(null),
    le = z(null),
    nt = z(null);
  function je(e, t) {
    switch ((F(le, t), F(ke, e), F(de, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = wm(t)), (e = Sm(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    K(de), F(de, e);
  }
  function lt() {
    K(de), K(ke), K(le);
  }
  function Ht(e) {
    e.memoizedState !== null && F(nt, e);
    var t = de.current,
      s = Sm(t, e.type);
    t !== s && (F(ke, e), F(de, s));
  }
  function dn(e) {
    ke.current === e && (K(de), K(ke)),
      nt.current === e && (K(nt), (Yi._currentValue = ce));
  }
  var Sn = Object.prototype.hasOwnProperty,
    We = a.unstable_scheduleCallback,
    ot = a.unstable_cancelCallback,
    In = a.unstable_shouldYield,
    sa = a.unstable_requestPaint,
    Ct = a.unstable_now,
    Fr = a.unstable_getCurrentPriorityLevel,
    Yt = a.unstable_ImmediatePriority,
    ti = a.unstable_UserBlockingPriority,
    ia = a.unstable_NormalPriority,
    S = a.unstable_LowPriority,
    M = a.unstable_IdlePriority,
    Z = a.log,
    ie = a.unstable_setDisableYieldValue,
    ee = null,
    X = null;
  function se(e) {
    if (
      (typeof Z == "function" && ie(e),
      X && typeof X.setStrictMode == "function")
    )
      try {
        X.setStrictMode(ee, e);
      } catch {}
  }
  var _e = Math.clz32 ? Math.clz32 : Hn,
    Pe = Math.log,
    dt = Math.LN2;
  function Hn(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Pe(e) / dt) | 0)) | 0;
  }
  var Vn = 256,
    Zn = 4194304;
  function fn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function qn(e, t, s) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var b = l & 134217727;
    return (
      b !== 0
        ? ((l = b & ~d),
          l !== 0
            ? (c = fn(l))
            : ((y &= b),
              y !== 0
                ? (c = fn(y))
                : s || ((s = b & ~e), s !== 0 && (c = fn(s)))))
        : ((b = l & ~d),
          b !== 0
            ? (c = fn(b))
            : y !== 0
              ? (c = fn(y))
              : s || ((s = l & ~e), s !== 0 && (c = fn(s)))),
      c === 0
        ? 0
        : t !== 0 &&
            t !== c &&
            (t & d) === 0 &&
            ((d = c & -c),
            (s = t & -t),
            d >= s || (d === 32 && (s & 4194048) !== 0))
          ? t
          : c
    );
  }
  function la(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ba(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function En() {
    var e = Vn;
    return (Vn <<= 1), (Vn & 4194048) === 0 && (Vn = 256), e;
  }
  function zl() {
    var e = Zn;
    return (Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function ni(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function za(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Il(e, t, s, l, c, d) {
    var y = e.pendingLanes;
    (e.pendingLanes = s),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= s),
      (e.entangledLanes &= s),
      (e.errorRecoveryDisabledLanes &= s),
      (e.shellSuspendCounter = 0);
    var b = e.entanglements,
      w = e.expirationTimes,
      D = e.hiddenUpdates;
    for (s = y & ~s; 0 < s; ) {
      var q = 31 - _e(s),
        Y = 1 << q;
      (b[q] = 0), (w[q] = -1);
      var j = D[q];
      if (j !== null)
        for (D[q] = null, q = 0; q < j.length; q++) {
          var L = j[q];
          L !== null && (L.lane &= -536870913);
        }
      s &= ~Y;
    }
    l !== 0 && Oe(e, l, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~t));
  }
  function Oe(e, t, s) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - _e(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (s & 4194090));
  }
  function ft(e, t) {
    var s = (e.entangledLanes |= t);
    for (e = e.entanglements; s; ) {
      var l = 31 - _e(s),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (s &= ~c);
    }
  }
  function vt(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Dt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function br() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : qm(e.type));
  }
  function wt(e, t) {
    var s = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = s;
    }
  }
  var ht = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + ht,
    et = "__reactProps$" + ht,
    At = "__reactContainer$" + ht,
    Xr = "__reactEvents$" + ht,
    oa = "__reactListeners$" + ht,
    uh = "__reactHandles$" + ht,
    dh = "__reactResources$" + ht,
    ai = "__reactMarker$" + ht;
  function Bc(e) {
    delete e[mt], delete e[et], delete e[Xr], delete e[oa], delete e[uh];
  }
  function Qr(e) {
    var t = e[mt];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if ((t = s[At] || s[mt])) {
        if (
          ((s = t.alternate),
          t.child !== null || (s !== null && s.child !== null))
        )
          for (e = Nm(e); e !== null; ) {
            if ((s = e[mt])) return s;
            e = Nm(e);
          }
        return t;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Kr(e) {
    if ((e = e[mt] || e[At])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ri(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Jr(e) {
    var t = e[dh];
    return (
      t ||
        (t = e[dh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Nt(e) {
    e[ai] = !0;
  }
  var fh = new Set(),
    hh = {};
  function _r(e, t) {
    Wr(e, t), Wr(e + "Capture", t);
  }
  function Wr(e, t) {
    for (hh[e] = t, e = 0; e < t.length; e++) fh.add(t[e]);
  }
  var Jg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    mh = {},
    ph = {};
  function Wg(e) {
    return Sn.call(ph, e)
      ? !0
      : Sn.call(mh, e)
        ? !1
        : Jg.test(e)
          ? (ph[e] = !0)
          : ((mh[e] = !0), !1);
  }
  function Hl(e, t, s) {
    if (Wg(t))
      if (s === null) e.removeAttribute(t);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + s);
      }
  }
  function Vl(e, t, s) {
    if (s === null) e.removeAttribute(t);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + s);
    }
  }
  function ca(e, t, s, l) {
    if (l === null) e.removeAttribute(s);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return;
      }
      e.setAttributeNS(t, s, "" + l);
    }
  }
  var zc, gh;
  function es(e) {
    if (zc === void 0)
      try {
        throw Error();
      } catch (s) {
        var t = s.stack.trim().match(/\n( *(at )?)/);
        (zc = (t && t[1]) || ""),
          (gh =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      zc +
      e +
      gh
    );
  }
  var Ic = !1;
  function Hc(e, t) {
    if (!e || Ic) return "";
    Ic = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (L) {
                  var j = L;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (L) {
                  j = L;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                j = L;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (L) {
            if (L && j && typeof L.stack == "string") return [L.stack, j.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = l.DetermineComponentFrameRoot(),
        y = d[0],
        b = d[1];
      if (y && b) {
        var w = y.split(`
`),
          D = b.split(`
`);
        for (
          c = l = 0;
          l < w.length && !w[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < D.length && !D[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === w.length || c === D.length)
          for (
            l = w.length - 1, c = D.length - 1;
            1 <= l && 0 <= c && w[l] !== D[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (w[l] !== D[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || w[l] !== D[c])) {
                  var q =
                    `
` + w[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", e.displayName)),
                    q
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (Ic = !1), (Error.prepareStackTrace = s);
    }
    return (s = e ? e.displayName || e.name : "") ? es(s) : "";
  }
  function ey(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return es(e.type);
      case 16:
        return es("Lazy");
      case 13:
        return es("Suspense");
      case 19:
        return es("SuspenseList");
      case 0:
      case 15:
        return Hc(e.type, !1);
      case 11:
        return Hc(e.type.render, !1);
      case 1:
        return Hc(e.type, !0);
      case 31:
        return es("Activity");
      default:
        return "";
    }
  }
  function yh(e) {
    try {
      var t = "";
      do (t += ey(e)), (e = e.return);
      while (e);
      return t;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function hn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function vh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ty(e) {
    var t = vh(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var c = s.get,
        d = s.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (l = "" + y), d.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Zl(e) {
    e._valueTracker || (e._valueTracker = ty(e));
  }
  function bh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(),
      l = "";
    return (
      e && (l = vh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== s ? (t.setValue(e), !0) : !1
    );
  }
  function ql(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ny = /[\n"\\]/g;
  function mn(e) {
    return e.replace(ny, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vc(e, t, s, l, c, d, y, b) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      t != null
        ? y === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + hn(t))
          : e.value !== "" + hn(t) && (e.value = "" + hn(t))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      t != null
        ? Zc(e, y, hn(t))
        : s != null
          ? Zc(e, y, hn(s))
          : l != null && e.removeAttribute("value"),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (e.name = "" + hn(b))
        : e.removeAttribute("name");
  }
  function _h(e, t, s, l, c, d, y, b) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      t != null || s != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || t != null)) return;
      (s = s != null ? "" + hn(s) : ""),
        (t = t != null ? "" + hn(t) : s),
        b || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = b ? e.checked : !!l),
      (e.defaultChecked = !!l),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y);
  }
  function Zc(e, t, s) {
    (t === "number" && ql(e.ownerDocument) === e) ||
      e.defaultValue === "" + s ||
      (e.defaultValue = "" + s);
  }
  function ts(e, t, s, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < s.length; c++) t["$" + s[c]] = !0;
      for (s = 0; s < e.length; s++)
        (c = t.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== c && (e[s].selected = c),
          c && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + hn(s), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xh(e, t, s) {
    if (
      t != null &&
      ((t = "" + hn(t)), t !== e.value && (e.value = t), s == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = s != null ? "" + hn(s) : "";
  }
  function Ch(e, t, s, l) {
    if (t == null) {
      if (l != null) {
        if (s != null) throw Error(i(92));
        if (Se(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        s = l;
      }
      s == null && (s = ""), (t = s);
    }
    (s = hn(t)),
      (e.defaultValue = s),
      (l = e.textContent),
      l === s && l !== "" && l !== null && (e.value = l);
  }
  function ns(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ay = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wh(e, t, s) {
    var l = t.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, s)
        : typeof s != "number" || s === 0 || ay.has(t)
          ? t === "float"
            ? (e.cssFloat = s)
            : (e[t] = ("" + s).trim())
          : (e[t] = s + "px");
  }
  function Sh(e, t, s) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), s != null)) {
      for (var l in s)
        !s.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var c in t)
        (l = t[c]), t.hasOwnProperty(c) && s[c] !== l && wh(e, c, l);
    } else for (var d in t) t.hasOwnProperty(d) && wh(e, d, t[d]);
  }
  function qc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ry = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    sy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(e) {
    return sy.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Pc = null;
  function Gc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var as = null,
    rs = null;
  function Eh(e) {
    var t = Kr(e);
    if (t && (e = t.stateNode)) {
      var s = e[et] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Vc(
              e,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name,
            ),
            (t = s.name),
            s.type === "radio" && t != null)
          ) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + mn("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < s.length;
              t++
            ) {
              var l = s[t];
              if (l !== e && l.form === e.form) {
                var c = l[et] || null;
                if (!c) throw Error(i(90));
                Vc(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (t = 0; t < s.length; t++)
              (l = s[t]), l.form === e.form && bh(l);
          }
          break e;
        case "textarea":
          xh(e, s.value, s.defaultValue);
          break e;
        case "select":
          (t = s.value), t != null && ts(e, !!s.multiple, t, !1);
      }
    }
  }
  var Yc = !1;
  function Th(e, t, s) {
    if (Yc) return e(t, s);
    Yc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Yc = !1),
        (as !== null || rs !== null) &&
          (Ro(), as && ((t = as), (e = rs), (rs = as = null), Eh(t), e)))
      )
        for (t = 0; t < e.length; t++) Eh(e[t]);
    }
  }
  function si(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = s[et] || null;
    if (l === null) return null;
    s = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(i(231, t, typeof s));
    return s;
  }
  var ua = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $c = !1;
  if (ua)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function () {
          $c = !0;
        },
      }),
        window.addEventListener("test", ii, ii),
        window.removeEventListener("test", ii, ii);
    } catch {
      $c = !1;
    }
  var Ia = null,
    Fc = null,
    Gl = null;
  function Ah() {
    if (Gl) return Gl;
    var e,
      t = Fc,
      s = t.length,
      l,
      c = "value" in Ia ? Ia.value : Ia.textContent,
      d = c.length;
    for (e = 0; e < s && t[e] === c[e]; e++);
    var y = s - e;
    for (l = 1; l <= y && t[s - l] === c[d - l]; l++);
    return (Gl = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Yl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $l() {
    return !0;
  }
  function Nh() {
    return !1;
  }
  function $t(e) {
    function t(s, l, c, d, y) {
      (this._reactName = s),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((s = e[b]), (this[b] = s ? s(d) : d[b]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? $l
          : Nh),
        (this.isPropagationStopped = Nh),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = $l));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = $l));
        },
        persist: function () {},
        isPersistent: $l,
      }),
      t
    );
  }
  var xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fl = $t(xr),
    li = _({}, xr, { view: 0, detail: 0 }),
    iy = $t(li),
    Xc,
    Qc,
    oi,
    Xl = _({}, li, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== oi &&
              (oi && e.type === "mousemove"
                ? ((Xc = e.screenX - oi.screenX), (Qc = e.screenY - oi.screenY))
                : (Qc = Xc = 0),
              (oi = e)),
            Xc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Qc;
      },
    }),
    kh = $t(Xl),
    ly = _({}, Xl, { dataTransfer: 0 }),
    oy = $t(ly),
    cy = _({}, li, { relatedTarget: 0 }),
    Kc = $t(cy),
    uy = _({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dy = $t(uy),
    fy = _({}, xr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hy = $t(fy),
    my = _({}, xr, { data: 0 }),
    Rh = $t(my),
    py = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    yy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vy(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = yy[e])
        ? !!t[e]
        : !1;
  }
  function Jc() {
    return vy;
  }
  var by = _({}, li, {
      key: function (e) {
        if (e.key) {
          var t = py[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? gy[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jc,
      charCode: function (e) {
        return e.type === "keypress" ? Yl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Yl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    _y = $t(by),
    xy = _({}, Xl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Oh = $t(xy),
    Cy = _({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jc,
    }),
    wy = $t(Cy),
    Sy = _({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ey = $t(Sy),
    Ty = _({}, Xl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ay = $t(Ty),
    Ny = _({}, xr, { newState: 0, oldState: 0 }),
    ky = $t(Ny),
    Ry = [9, 13, 27, 32],
    Wc = ua && "CompositionEvent" in window,
    ci = null;
  ua && "documentMode" in document && (ci = document.documentMode);
  var Oy = ua && "TextEvent" in window && !ci,
    Dh = ua && (!Wc || (ci && 8 < ci && 11 >= ci)),
    Mh = " ",
    jh = !1;
  function Lh(e, t) {
    switch (e) {
      case "keyup":
        return Ry.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ss = !1;
  function Dy(e, t) {
    switch (e) {
      case "compositionend":
        return Uh(t);
      case "keypress":
        return t.which !== 32 ? null : ((jh = !0), Mh);
      case "textInput":
        return (e = t.data), e === Mh && jh ? null : e;
      default:
        return null;
    }
  }
  function My(e, t) {
    if (ss)
      return e === "compositionend" || (!Wc && Lh(e, t))
        ? ((e = Ah()), (Gl = Fc = Ia = null), (ss = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Dh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jy[e.type] : t === "textarea";
  }
  function zh(e, t, s, l) {
    as ? (rs ? rs.push(l) : (rs = [l])) : (as = l),
      (t = Uo(t, "onChange")),
      0 < t.length &&
        ((s = new Fl("onChange", "change", null, s, l)),
        e.push({ event: s, listeners: t }));
  }
  var ui = null,
    di = null;
  function Ly(e) {
    vm(e, 0);
  }
  function Ql(e) {
    var t = ri(e);
    if (bh(t)) return e;
  }
  function Ih(e, t) {
    if (e === "change") return t;
  }
  var Hh = !1;
  if (ua) {
    var eu;
    if (ua) {
      var tu = "oninput" in document;
      if (!tu) {
        var Vh = document.createElement("div");
        Vh.setAttribute("oninput", "return;"),
          (tu = typeof Vh.oninput == "function");
      }
      eu = tu;
    } else eu = !1;
    Hh = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    ui && (ui.detachEvent("onpropertychange", qh), (di = ui = null));
  }
  function qh(e) {
    if (e.propertyName === "value" && Ql(di)) {
      var t = [];
      zh(t, di, e, Gc(e)), Th(Ly, t);
    }
  }
  function Uy(e, t, s) {
    e === "focusin"
      ? (Zh(), (ui = t), (di = s), ui.attachEvent("onpropertychange", qh))
      : e === "focusout" && Zh();
  }
  function By(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ql(di);
  }
  function zy(e, t) {
    if (e === "click") return Ql(t);
  }
  function Iy(e, t) {
    if (e === "input" || e === "change") return Ql(t);
  }
  function Hy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var en = typeof Object.is == "function" ? Object.is : Hy;
  function fi(e, t) {
    if (en(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var s = Object.keys(e),
      l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var c = s[l];
      if (!Sn.call(t, c) || !en(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Ph(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gh(e, t) {
    var s = Ph(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = e + s.textContent.length), e <= t && l >= t))
          return { node: s, offset: t - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Ph(s);
    }
  }
  function Yh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Yh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function $h(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ql(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = ql(e.document);
    }
    return t;
  }
  function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Vy = ua && "documentMode" in document && 11 >= document.documentMode,
    is = null,
    au = null,
    hi = null,
    ru = !1;
  function Fh(e, t, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ru ||
      is == null ||
      is !== ql(l) ||
      ((l = is),
      "selectionStart" in l && nu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (hi && fi(hi, l)) ||
        ((hi = l),
        (l = Uo(au, "onSelect")),
        0 < l.length &&
          ((t = new Fl("onSelect", "select", null, t, s)),
          e.push({ event: t, listeners: l }),
          (t.target = is))));
  }
  function Cr(e, t) {
    var s = {};
    return (
      (s[e.toLowerCase()] = t.toLowerCase()),
      (s["Webkit" + e] = "webkit" + t),
      (s["Moz" + e] = "moz" + t),
      s
    );
  }
  var ls = {
      animationend: Cr("Animation", "AnimationEnd"),
      animationiteration: Cr("Animation", "AnimationIteration"),
      animationstart: Cr("Animation", "AnimationStart"),
      transitionrun: Cr("Transition", "TransitionRun"),
      transitionstart: Cr("Transition", "TransitionStart"),
      transitioncancel: Cr("Transition", "TransitionCancel"),
      transitionend: Cr("Transition", "TransitionEnd"),
    },
    su = {},
    Xh = {};
  ua &&
    ((Xh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ls.animationend.animation,
      delete ls.animationiteration.animation,
      delete ls.animationstart.animation),
    "TransitionEvent" in window || delete ls.transitionend.transition);
  function wr(e) {
    if (su[e]) return su[e];
    if (!ls[e]) return e;
    var t = ls[e],
      s;
    for (s in t) if (t.hasOwnProperty(s) && s in Xh) return (su[e] = t[s]);
    return e;
  }
  var Qh = wr("animationend"),
    Kh = wr("animationiteration"),
    Jh = wr("animationstart"),
    Zy = wr("transitionrun"),
    qy = wr("transitionstart"),
    Py = wr("transitioncancel"),
    Wh = wr("transitionend"),
    e1 = new Map(),
    iu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  iu.push("scrollEnd");
  function Tn(e, t) {
    e1.set(e, t), _r(t, [e]);
  }
  var t1 = new WeakMap();
  function pn(e, t) {
    if (typeof e == "object" && e !== null) {
      var s = t1.get(e);
      return s !== void 0
        ? s
        : ((t = { value: e, source: t, stack: yh(t) }), t1.set(e, t), t);
    }
    return { value: e, source: t, stack: yh(t) };
  }
  var gn = [],
    os = 0,
    lu = 0;
  function Kl() {
    for (var e = os, t = (lu = os = 0); t < e; ) {
      var s = gn[t];
      gn[t++] = null;
      var l = gn[t];
      gn[t++] = null;
      var c = gn[t];
      gn[t++] = null;
      var d = gn[t];
      if (((gn[t++] = null), l !== null && c !== null)) {
        var y = l.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (l.pending = c);
      }
      d !== 0 && n1(s, c, d);
    }
  }
  function Jl(e, t, s, l) {
    (gn[os++] = e),
      (gn[os++] = t),
      (gn[os++] = s),
      (gn[os++] = l),
      (lu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function ou(e, t, s, l) {
    return Jl(e, t, s, l), Wl(e);
  }
  function cs(e, t) {
    return Jl(e, null, null, t), Wl(e);
  }
  function n1(e, t, s) {
    e.lanes |= s;
    var l = e.alternate;
    l !== null && (l.lanes |= s);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= s),
        (l = d.alternate),
        l !== null && (l.childLanes |= s),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - _e(s)),
          (e = d.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [t]) : l.push(t),
          (t.lane = s | 536870912)),
        d)
      : null;
  }
  function Wl(e) {
    if (50 < zi) throw ((zi = 0), (md = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var us = {};
  function Gy(e, t, s, l) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function tn(e, t, s, l) {
    return new Gy(e, t, s, l);
  }
  function cu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function da(e, t) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = tn(e.tag, t, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = t),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 65011712),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (s.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      (s.refCleanup = e.refCleanup),
      s
    );
  }
  function a1(e, t) {
    e.flags &= 65011714;
    var s = e.alternate;
    return (
      s === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = s.childLanes),
          (e.lanes = s.lanes),
          (e.child = s.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = s.memoizedProps),
          (e.memoizedState = s.memoizedState),
          (e.updateQueue = s.updateQueue),
          (e.type = s.type),
          (t = s.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function eo(e, t, s, l, c, d) {
    var y = 0;
    if (((l = e), typeof e == "function")) cu(e) && (y = 1);
    else if (typeof e == "string")
      y = $3(e, s, de.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ve:
          return (e = tn(31, s, t, c)), (e.elementType = ve), (e.lanes = d), e;
        case A:
          return Sr(s.children, c, d, t);
        case G:
          (y = 8), (c |= 24);
          break;
        case H:
          return (
            (e = tn(12, s, t, c | 2)), (e.elementType = H), (e.lanes = d), e
          );
        case U:
          return (e = tn(13, s, t, c)), (e.elementType = U), (e.lanes = d), e;
        case ne:
          return (e = tn(19, s, t, c)), (e.elementType = ne), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case B:
              case V:
                y = 10;
                break e;
              case I:
                y = 9;
                break e;
              case te:
                y = 11;
                break e;
              case $:
                y = 14;
                break e;
              case me:
                (y = 16), (l = null);
                break e;
            }
          (y = 29),
            (s = Error(i(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = tn(y, s, t, c)), (t.elementType = e), (t.type = l), (t.lanes = d), t
    );
  }
  function Sr(e, t, s, l) {
    return (e = tn(7, e, l, t)), (e.lanes = s), e;
  }
  function uu(e, t, s) {
    return (e = tn(6, e, null, t)), (e.lanes = s), e;
  }
  function du(e, t, s) {
    return (
      (t = tn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = s),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ds = [],
    fs = 0,
    to = null,
    no = 0,
    yn = [],
    vn = 0,
    Er = null,
    fa = 1,
    ha = "";
  function Tr(e, t) {
    (ds[fs++] = no), (ds[fs++] = to), (to = e), (no = t);
  }
  function r1(e, t, s) {
    (yn[vn++] = fa), (yn[vn++] = ha), (yn[vn++] = Er), (Er = e);
    var l = fa;
    e = ha;
    var c = 32 - _e(l) - 1;
    (l &= ~(1 << c)), (s += 1);
    var d = 32 - _e(t) + c;
    if (30 < d) {
      var y = c - (c % 5);
      (d = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (c -= y),
        (fa = (1 << (32 - _e(t) + c)) | (s << c) | l),
        (ha = d + e);
    } else (fa = (1 << d) | (s << c) | l), (ha = e);
  }
  function fu(e) {
    e.return !== null && (Tr(e, 1), r1(e, 1, 0));
  }
  function hu(e) {
    for (; e === to; )
      (to = ds[--fs]), (ds[fs] = null), (no = ds[--fs]), (ds[fs] = null);
    for (; e === Er; )
      (Er = yn[--vn]),
        (yn[vn] = null),
        (ha = yn[--vn]),
        (yn[vn] = null),
        (fa = yn[--vn]),
        (yn[vn] = null);
  }
  var Vt = null,
    ct = null,
    qe = !1,
    Ar = null,
    Pn = !1,
    mu = Error(i(519));
  function Nr(e) {
    var t = Error(i(418, ""));
    throw (gi(pn(t, e)), mu);
  }
  function s1(e) {
    var t = e.stateNode,
      s = e.type,
      l = e.memoizedProps;
    switch (((t[mt] = e), (t[et] = l), s)) {
      case "dialog":
        Ie("cancel", t), Ie("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Hi.length; s++) Ie(Hi[s], t);
        break;
      case "source":
        Ie("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", t), Ie("load", t);
        break;
      case "details":
        Ie("toggle", t);
        break;
      case "input":
        Ie("invalid", t),
          _h(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          Zl(t);
        break;
      case "select":
        Ie("invalid", t);
        break;
      case "textarea":
        Ie("invalid", t), Ch(t, l.value, l.defaultValue, l.children), Zl(t);
    }
    (s = l.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      t.textContent === "" + s ||
      l.suppressHydrationWarning === !0 ||
      Cm(t.textContent, s)
        ? (l.popover != null && (Ie("beforetoggle", t), Ie("toggle", t)),
          l.onScroll != null && Ie("scroll", t),
          l.onScrollEnd != null && Ie("scrollend", t),
          l.onClick != null && (t.onclick = Bo),
          (t = !0))
        : (t = !1),
      t || Nr(e);
  }
  function i1(e) {
    for (Vt = e.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 13:
          Pn = !1;
          return;
        case 27:
        case 3:
          Pn = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function mi(e) {
    if (e !== Vt) return !1;
    if (!qe) return i1(e), (qe = !0), !1;
    var t = e.tag,
      s;
    if (
      ((s = t !== 3 && t !== 27) &&
        ((s = t === 5) &&
          ((s = e.type),
          (s =
            !(s !== "form" && s !== "button") || Rd(e.type, e.memoizedProps))),
        (s = !s)),
      s && ct && Nr(e),
      i1(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === "/$")) {
              if (t === 0) {
                ct = Nn(e.nextSibling);
                break e;
              }
              t--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || t++;
          e = e.nextSibling;
        }
        ct = null;
      }
    } else
      t === 27
        ? ((t = ct), tr(e.type) ? ((e = jd), (jd = null), (ct = e)) : (ct = t))
        : (ct = Vt ? Nn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function pi() {
    (ct = Vt = null), (qe = !1);
  }
  function l1() {
    var e = Ar;
    return (
      e !== null &&
        (Qt === null ? (Qt = e) : Qt.push.apply(Qt, e), (Ar = null)),
      e
    );
  }
  function gi(e) {
    Ar === null ? (Ar = [e]) : Ar.push(e);
  }
  var pu = z(null),
    kr = null,
    ma = null;
  function Ha(e, t, s) {
    F(pu, t._currentValue), (t._currentValue = s);
  }
  function pa(e) {
    (e._currentValue = pu.current), K(pu);
  }
  function gu(e, t, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function yu(e, t, s, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var y = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var b = d;
          d = c;
          for (var w = 0; w < t.length; w++)
            if (b.context === t[w]) {
              (d.lanes |= s),
                (b = d.alternate),
                b !== null && (b.lanes |= s),
                gu(d.return, s, e),
                l || (y = null);
              break e;
            }
          d = b.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(i(341));
        (y.lanes |= s),
          (d = y.alternate),
          d !== null && (d.lanes |= s),
          gu(y, s, e),
          (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function yi(e, t, s, l) {
    e = null;
    for (var c = t, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(i(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = c.type;
          en(c.pendingProps.value, y.value) ||
            (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (c === nt.current) {
        if (((y = c.alternate), y === null)) throw Error(i(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Yi) : (e = [Yi]));
      }
      c = c.return;
    }
    e !== null && yu(t, e, s, l), (t.flags |= 262144);
  }
  function ao(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!en(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Rr(e) {
    (kr = e),
      (ma = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return o1(kr, e);
  }
  function ro(e, t) {
    return kr === null && Rr(e), o1(e, t);
  }
  function o1(e, t) {
    var s = t._currentValue;
    if (((t = { context: t, memoizedValue: s, next: null }), ma === null)) {
      if (e === null) throw Error(i(308));
      (ma = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else ma = ma.next = t;
    return s;
  }
  var Yy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (s, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (s) {
                  return s();
                });
            };
          },
    $y = a.unstable_scheduleCallback,
    Fy = a.unstable_NormalPriority,
    St = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function vu() {
    return { controller: new Yy(), data: new Map(), refCount: 0 };
  }
  function vi(e) {
    e.refCount--,
      e.refCount === 0 &&
        $y(Fy, function () {
          e.controller.abort();
        });
  }
  var bi = null,
    bu = 0,
    hs = 0,
    ms = null;
  function Xy(e, t) {
    if (bi === null) {
      var s = (bi = []);
      (bu = 0),
        (hs = xd()),
        (ms = {
          status: "pending",
          value: void 0,
          then: function (l) {
            s.push(l);
          },
        });
    }
    return bu++, t.then(c1, c1), t;
  }
  function c1() {
    if (--bu === 0 && bi !== null) {
      ms !== null && (ms.status = "fulfilled");
      var e = bi;
      (bi = null), (hs = 0), (ms = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Qy(e, t) {
    var s = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          s.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var c = 0; c < s.length; c++) (0, s[c])(t);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < s.length; c++)
            (0, s[c])(void 0);
        },
      ),
      l
    );
  }
  var u1 = k.S;
  k.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Xy(e, t),
      u1 !== null && u1(e, t);
  };
  var Or = z(null);
  function _u() {
    var e = Or.current;
    return e !== null ? e : tt.pooledCache;
  }
  function so(e, t) {
    t === null ? F(Or, Or.current) : F(Or, t.pool);
  }
  function d1() {
    var e = _u();
    return e === null ? null : { parent: St._currentValue, pool: e };
  }
  var _i = Error(i(460)),
    f1 = Error(i(474)),
    io = Error(i(542)),
    xu = { then: function () {} };
  function h1(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function lo() {}
  function m1(e, t, s) {
    switch (
      ((s = e[s]),
      s === void 0 ? e.push(t) : s !== t && (t.then(lo, lo), (t = s)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), g1(e), e);
      default:
        if (typeof t.status == "string") t.then(lo, lo);
        else {
          if (((e = tt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "rejected"), (c.reason = l);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), g1(e), e);
        }
        throw ((xi = t), _i);
    }
  }
  var xi = null;
  function p1() {
    if (xi === null) throw Error(i(459));
    var e = xi;
    return (xi = null), e;
  }
  function g1(e) {
    if (e === _i || e === io) throw Error(i(483));
  }
  var Va = !1;
  function Cu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function wu(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Za(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function qa(e, t, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ge & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        (t = Wl(e)),
        n1(e, null, s),
        t
      );
    }
    return Jl(e, l, t, s), Wl(e);
  }
  function Ci(e, t, s) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (s & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (s |= l), (t.lanes = s), ft(e, s);
    }
  }
  function Su(e, t) {
    var s = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var c = null,
        d = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          d === null ? (c = d = y) : (d = d.next = y), (s = s.next);
        } while (s !== null);
        d === null ? (c = d = t) : (d = d.next = t);
      } else c = d = t;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = t) : (e.next = t),
      (s.lastBaseUpdate = t);
  }
  var Eu = !1;
  function wi() {
    if (Eu) {
      var e = ms;
      if (e !== null) throw e;
    }
  }
  function Si(e, t, s, l) {
    Eu = !1;
    var c = e.updateQueue;
    Va = !1;
    var d = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var w = b,
        D = w.next;
      (w.next = null), y === null ? (d = D) : (y.next = D), (y = w);
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (b = q.lastBaseUpdate),
        b !== y &&
          (b === null ? (q.firstBaseUpdate = D) : (b.next = D),
          (q.lastBaseUpdate = w)));
    }
    if (d !== null) {
      var Y = c.baseState;
      (y = 0), (q = D = w = null), (b = d);
      do {
        var j = b.lane & -536870913,
          L = j !== b.lane;
        if (L ? (He & j) === j : (l & j) === j) {
          j !== 0 && j === hs && (Eu = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Te = e,
              be = b;
            j = t;
            var Xe = s;
            switch (be.tag) {
              case 1:
                if (((Te = be.payload), typeof Te == "function")) {
                  Y = Te.call(Xe, Y, j);
                  break e;
                }
                Y = Te;
                break e;
              case 3:
                Te.flags = (Te.flags & -65537) | 128;
              case 0:
                if (
                  ((Te = be.payload),
                  (j = typeof Te == "function" ? Te.call(Xe, Y, j) : Te),
                  j == null)
                )
                  break e;
                Y = _({}, Y, j);
                break e;
              case 2:
                Va = !0;
            }
          }
          (j = b.callback),
            j !== null &&
              ((e.flags |= 64),
              L && (e.flags |= 8192),
              (L = c.callbacks),
              L === null ? (c.callbacks = [j]) : L.push(j));
        } else
          (L = {
            lane: j,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            q === null ? ((D = q = L), (w = Y)) : (q = q.next = L),
            (y |= j);
        if (((b = b.next), b === null)) {
          if (((b = c.shared.pending), b === null)) break;
          (L = b),
            (b = L.next),
            (L.next = null),
            (c.lastBaseUpdate = L),
            (c.shared.pending = null);
        }
      } while (!0);
      q === null && (w = Y),
        (c.baseState = w),
        (c.firstBaseUpdate = D),
        (c.lastBaseUpdate = q),
        d === null && (c.shared.lanes = 0),
        (Ka |= y),
        (e.lanes = y),
        (e.memoizedState = Y);
    }
  }
  function y1(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function v1(e, t) {
    var s = e.callbacks;
    if (s !== null)
      for (e.callbacks = null, e = 0; e < s.length; e++) y1(s[e], t);
  }
  var ps = z(null),
    oo = z(0);
  function b1(e, t) {
    (e = Ca), F(oo, e), F(ps, t), (Ca = e | t.baseLanes);
  }
  function Tu() {
    F(oo, Ca), F(ps, ps.current);
  }
  function Au() {
    (Ca = oo.current), K(ps), K(oo);
  }
  var Pa = 0,
    Ue = null,
    $e = null,
    bt = null,
    co = !1,
    gs = !1,
    Dr = !1,
    uo = 0,
    Ei = 0,
    ys = null,
    Ky = 0;
  function pt() {
    throw Error(i(321));
  }
  function Nu(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++)
      if (!en(e[s], t[s])) return !1;
    return !0;
  }
  function ku(e, t, s, l, c, d) {
    return (
      (Pa = d),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? n2 : a2),
      (Dr = !1),
      (d = s(l, c)),
      (Dr = !1),
      gs && (d = x1(t, s, l, c)),
      _1(e),
      d
    );
  }
  function _1(e) {
    k.H = yo;
    var t = $e !== null && $e.next !== null;
    if (((Pa = 0), (bt = $e = Ue = null), (co = !1), (Ei = 0), (ys = null), t))
      throw Error(i(300));
    e === null ||
      kt ||
      ((e = e.dependencies), e !== null && ao(e) && (kt = !0));
  }
  function x1(e, t, s, l) {
    Ue = e;
    var c = 0;
    do {
      if ((gs && (ys = null), (Ei = 0), (gs = !1), 25 <= c))
        throw Error(i(301));
      if (((c += 1), (bt = $e = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (k.H = r3), (d = t(s, l));
    } while (gs);
    return d;
  }
  function Jy() {
    var e = k.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ti(t) : t),
      (e = e.useState()[0]),
      ($e !== null ? $e.memoizedState : null) !== e && (Ue.flags |= 1024),
      t
    );
  }
  function Ru() {
    var e = uo !== 0;
    return (uo = 0), e;
  }
  function Ou(e, t, s) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s);
  }
  function Du(e) {
    if (co) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      co = !1;
    }
    (Pa = 0), (bt = $e = Ue = null), (gs = !1), (Ei = uo = 0), (ys = null);
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return bt === null ? (Ue.memoizedState = bt = e) : (bt = bt.next = e), bt;
  }
  function _t() {
    if ($e === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = bt === null ? Ue.memoizedState : bt.next;
    if (t !== null) (bt = t), ($e = e);
    else {
      if (e === null)
        throw Ue.alternate === null ? Error(i(467)) : Error(i(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        bt === null ? (Ue.memoizedState = bt = e) : (bt = bt.next = e);
    }
    return bt;
  }
  function Mu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ti(e) {
    var t = Ei;
    return (
      (Ei += 1),
      ys === null && (ys = []),
      (e = m1(ys, e, t)),
      (t = Ue),
      (bt === null ? t.memoizedState : bt.next) === null &&
        ((t = t.alternate),
        (k.H = t === null || t.memoizedState === null ? n2 : a2)),
      e
    );
  }
  function fo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ti(e);
      if (e.$$typeof === V) return Ut(e);
    }
    throw Error(i(438, String(e)));
  }
  function ju(e) {
    var t = null,
      s = Ue.updateQueue;
    if ((s !== null && (t = s.memoCache), t == null)) {
      var l = Ue.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      s === null && ((s = Mu()), (Ue.updateQueue = s)),
      (s.memoCache = t),
      (s = t.data[t.index]),
      s === void 0)
    )
      for (s = t.data[t.index] = Array(e), l = 0; l < e; l++) s[l] = Re;
    return t.index++, s;
  }
  function ga(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ho(e) {
    var t = _t();
    return Lu(t, $e, e);
  }
  function Lu(e, t, s) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = s;
    var c = e.baseQueue,
      d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = d.next), (d.next = y);
      }
      (t.baseQueue = c = d), (l.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      t = c.next;
      var b = (y = null),
        w = null,
        D = t,
        q = !1;
      do {
        var Y = D.lane & -536870913;
        if (Y !== D.lane ? (He & Y) === Y : (Pa & Y) === Y) {
          var j = D.revertLane;
          if (j === 0)
            w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              Y === hs && (q = !0);
          else if ((Pa & j) === j) {
            (D = D.next), j === hs && (q = !0);
            continue;
          } else
            (Y = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              w === null ? ((b = w = Y), (y = d)) : (w = w.next = Y),
              (Ue.lanes |= j),
              (Ka |= j);
          (Y = D.action),
            Dr && s(d, Y),
            (d = D.hasEagerState ? D.eagerState : s(d, Y));
        } else
          (j = {
            lane: Y,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            w === null ? ((b = w = j), (y = d)) : (w = w.next = j),
            (Ue.lanes |= Y),
            (Ka |= Y);
        D = D.next;
      } while (D !== null && D !== t);
      if (
        (w === null ? (y = d) : (w.next = b),
        !en(d, e.memoizedState) && ((kt = !0), q && ((s = ms), s !== null)))
      )
        throw s;
      (e.memoizedState = d),
        (e.baseState = y),
        (e.baseQueue = w),
        (l.lastRenderedState = d);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Uu(e) {
    var t = _t(),
      s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch,
      c = s.pending,
      d = t.memoizedState;
    if (c !== null) {
      s.pending = null;
      var y = (c = c.next);
      do (d = e(d, y.action)), (y = y.next);
      while (y !== c);
      en(d, t.memoizedState) || (kt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (s.lastRenderedState = d);
    }
    return [d, l];
  }
  function C1(e, t, s) {
    var l = Ue,
      c = _t(),
      d = qe;
    if (d) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = t();
    var y = !en(($e || c).memoizedState, s);
    y && ((c.memoizedState = s), (kt = !0)), (c = c.queue);
    var b = E1.bind(null, l, c, e);
    if (
      (Ai(2048, 8, b, [e]),
      c.getSnapshot !== t || y || (bt !== null && bt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        vs(9, mo(), S1.bind(null, l, c, s, t), null),
        tt === null)
      )
        throw Error(i(349));
      d || (Pa & 124) !== 0 || w1(l, t, s);
    }
    return s;
  }
  function w1(e, t, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: s }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = Mu()), (Ue.updateQueue = t), (t.stores = [e]))
        : ((s = t.stores), s === null ? (t.stores = [e]) : s.push(e));
  }
  function S1(e, t, s, l) {
    (t.value = s), (t.getSnapshot = l), T1(t) && A1(e);
  }
  function E1(e, t, s) {
    return s(function () {
      T1(t) && A1(e);
    });
  }
  function T1(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !en(e, s);
    } catch {
      return !0;
    }
  }
  function A1(e) {
    var t = cs(e, 2);
    t !== null && ln(t, e, 2);
  }
  function Bu(e) {
    var t = Ft();
    if (typeof e == "function") {
      var s = e;
      if (((e = s()), Dr)) {
        se(!0);
        try {
          s();
        } finally {
          se(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ga,
        lastRenderedState: e,
      }),
      t
    );
  }
  function N1(e, t, s, l) {
    return (e.baseState = s), Lu(e, $e, typeof l == "function" ? l : ga);
  }
  function Wy(e, t, s, l, c) {
    if (go(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          d.listeners.push(y);
        },
      };
      k.T !== null ? s(!0) : (d.isTransition = !1),
        l(d),
        (s = t.pending),
        s === null
          ? ((d.next = t.pending = d), k1(t, d))
          : ((d.next = s.next), (t.pending = s.next = d));
    }
  }
  function k1(e, t) {
    var s = t.action,
      l = t.payload,
      c = e.state;
    if (t.isTransition) {
      var d = k.T,
        y = {};
      k.T = y;
      try {
        var b = s(c, l),
          w = k.S;
        w !== null && w(y, b), R1(e, t, b);
      } catch (D) {
        zu(e, t, D);
      } finally {
        k.T = d;
      }
    } else
      try {
        (d = s(c, l)), R1(e, t, d);
      } catch (D) {
        zu(e, t, D);
      }
  }
  function R1(e, t, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (l) {
            O1(e, t, l);
          },
          function (l) {
            return zu(e, t, l);
          },
        )
      : O1(e, t, s);
  }
  function O1(e, t, s) {
    (t.status = "fulfilled"),
      (t.value = s),
      D1(t),
      (e.state = s),
      (t = e.pending),
      t !== null &&
        ((s = t.next),
        s === t ? (e.pending = null) : ((s = s.next), (t.next = s), k1(e, s)));
  }
  function zu(e, t, s) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = s), D1(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function D1(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function M1(e, t) {
    return t;
  }
  function j1(e, t) {
    if (qe) {
      var s = tt.formState;
      if (s !== null) {
        e: {
          var l = Ue;
          if (qe) {
            if (ct) {
              t: {
                for (var c = ct, d = Pn; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = Nn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === "F!" || d === "F" ? c : null);
              }
              if (c) {
                (ct = Nn(c.nextSibling)), (l = c.data === "F!");
                break e;
              }
            }
            Nr(l);
          }
          l = !1;
        }
        l && (t = s[0]);
      }
    }
    return (
      (s = Ft()),
      (s.memoizedState = s.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: M1,
        lastRenderedState: t,
      }),
      (s.queue = l),
      (s = W1.bind(null, Ue, l)),
      (l.dispatch = s),
      (l = Bu(!1)),
      (d = qu.bind(null, Ue, !1, l.queue)),
      (l = Ft()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (s = Wy.bind(null, Ue, c, d, s)),
      (c.dispatch = s),
      (l.memoizedState = e),
      [t, s, !1]
    );
  }
  function L1(e) {
    var t = _t();
    return U1(t, $e, e);
  }
  function U1(e, t, s) {
    if (
      ((t = Lu(e, t, M1)[0]),
      (e = ho(ga)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Ti(t);
      } catch (y) {
        throw y === _i ? io : y;
      }
    else l = t;
    t = _t();
    var c = t.queue,
      d = c.dispatch;
    return (
      s !== t.memoizedState &&
        ((Ue.flags |= 2048), vs(9, mo(), e3.bind(null, c, s), null)),
      [l, d, e]
    );
  }
  function e3(e, t) {
    e.action = t;
  }
  function B1(e) {
    var t = _t(),
      s = $e;
    if (s !== null) return U1(t, s, e);
    _t(), (t = t.memoizedState), (s = _t());
    var l = s.queue.dispatch;
    return (s.memoizedState = e), [t, l, !1];
  }
  function vs(e, t, s, l) {
    return (
      (e = { tag: e, create: s, deps: l, inst: t, next: null }),
      (t = Ue.updateQueue),
      t === null && ((t = Mu()), (Ue.updateQueue = t)),
      (s = t.lastEffect),
      s === null
        ? (t.lastEffect = e.next = e)
        : ((l = s.next), (s.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function mo() {
    return { destroy: void 0, resource: void 0 };
  }
  function z1() {
    return _t().memoizedState;
  }
  function po(e, t, s, l) {
    var c = Ft();
    (l = l === void 0 ? null : l),
      (Ue.flags |= e),
      (c.memoizedState = vs(1 | t, mo(), s, l));
  }
  function Ai(e, t, s, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var d = c.memoizedState.inst;
    $e !== null && l !== null && Nu(l, $e.memoizedState.deps)
      ? (c.memoizedState = vs(t, d, s, l))
      : ((Ue.flags |= e), (c.memoizedState = vs(1 | t, d, s, l)));
  }
  function I1(e, t) {
    po(8390656, 8, e, t);
  }
  function H1(e, t) {
    Ai(2048, 8, e, t);
  }
  function V1(e, t) {
    return Ai(4, 2, e, t);
  }
  function Z1(e, t) {
    return Ai(4, 4, e, t);
  }
  function q1(e, t) {
    if (typeof t == "function") {
      e = e();
      var s = t(e);
      return function () {
        typeof s == "function" ? s() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function P1(e, t, s) {
    (s = s != null ? s.concat([e]) : null), Ai(4, 4, q1.bind(null, t, e), s);
  }
  function Iu() {}
  function G1(e, t) {
    var s = _t();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return t !== null && Nu(t, l[1]) ? l[0] : ((s.memoizedState = [e, t]), e);
  }
  function Y1(e, t) {
    var s = _t();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    if (t !== null && Nu(t, l[1])) return l[0];
    if (((l = e()), Dr)) {
      se(!0);
      try {
        e();
      } finally {
        se(!1);
      }
    }
    return (s.memoizedState = [l, t]), l;
  }
  function Hu(e, t, s) {
    return s === void 0 || (Pa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = s), (e = X2()), (Ue.lanes |= e), (Ka |= e), s);
  }
  function $1(e, t, s, l) {
    return en(s, t)
      ? s
      : ps.current !== null
        ? ((e = Hu(e, s, l)), en(e, t) || (kt = !0), e)
        : (Pa & 42) === 0
          ? ((kt = !0), (e.memoizedState = s))
          : ((e = X2()), (Ue.lanes |= e), (Ka |= e), t);
  }
  function F1(e, t, s, l, c) {
    var d = Q.p;
    Q.p = d !== 0 && 8 > d ? d : 8;
    var y = k.T,
      b = {};
    (k.T = b), qu(e, !1, t, s);
    try {
      var w = c(),
        D = k.S;
      if (
        (D !== null && D(b, w),
        w !== null && typeof w == "object" && typeof w.then == "function")
      ) {
        var q = Qy(w, l);
        Ni(e, t, q, sn(e));
      } else Ni(e, t, l, sn(e));
    } catch (Y) {
      Ni(e, t, { then: function () {}, status: "rejected", reason: Y }, sn());
    } finally {
      (Q.p = d), (k.T = y);
    }
  }
  function t3() {}
  function Vu(e, t, s, l) {
    if (e.tag !== 5) throw Error(i(476));
    var c = X1(e).queue;
    F1(
      e,
      c,
      t,
      ce,
      s === null
        ? t3
        : function () {
            return Q1(e), s(l);
          },
    );
  }
  function X1(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ga,
        lastRenderedState: ce,
      },
      next: null,
    };
    var s = {};
    return (
      (t.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ga,
          lastRenderedState: s,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Q1(e) {
    var t = X1(e).next.queue;
    Ni(e, t, {}, sn());
  }
  function Zu() {
    return Ut(Yi);
  }
  function K1() {
    return _t().memoizedState;
  }
  function J1() {
    return _t().memoizedState;
  }
  function n3(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var s = sn();
          e = Za(s);
          var l = qa(t, e, s);
          l !== null && (ln(l, t, s), Ci(l, t, s)),
            (t = { cache: vu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function a3(e, t, s) {
    var l = sn();
    (s = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      go(e)
        ? e2(t, s)
        : ((s = ou(e, t, s, l)), s !== null && (ln(s, e, l), t2(s, t, l)));
  }
  function W1(e, t, s) {
    var l = sn();
    Ni(e, t, s, l);
  }
  function Ni(e, t, s, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (go(e)) e2(t, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var y = t.lastRenderedState,
            b = d(y, s);
          if (((c.hasEagerState = !0), (c.eagerState = b), en(b, y)))
            return Jl(e, t, c, 0), tt === null && Kl(), !1;
        } catch {
        } finally {
        }
      if (((s = ou(e, t, c, l)), s !== null))
        return ln(s, e, l), t2(s, t, l), !0;
    }
    return !1;
  }
  function qu(e, t, s, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: xd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      go(e))
    ) {
      if (t) throw Error(i(479));
    } else (t = ou(e, s, l, 2)), t !== null && ln(t, e, 2);
  }
  function go(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function e2(e, t) {
    gs = co = !0;
    var s = e.pending;
    s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (e.pending = t);
  }
  function t2(e, t, s) {
    if ((s & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (s |= l), (t.lanes = s), ft(e, s);
    }
  }
  var yo = {
      readContext: Ut,
      use: fo,
      useCallback: pt,
      useContext: pt,
      useEffect: pt,
      useImperativeHandle: pt,
      useLayoutEffect: pt,
      useInsertionEffect: pt,
      useMemo: pt,
      useReducer: pt,
      useRef: pt,
      useState: pt,
      useDebugValue: pt,
      useDeferredValue: pt,
      useTransition: pt,
      useSyncExternalStore: pt,
      useId: pt,
      useHostTransitionStatus: pt,
      useFormState: pt,
      useActionState: pt,
      useOptimistic: pt,
      useMemoCache: pt,
      useCacheRefresh: pt,
    },
    n2 = {
      readContext: Ut,
      use: fo,
      useCallback: function (e, t) {
        return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ut,
      useEffect: I1,
      useImperativeHandle: function (e, t, s) {
        (s = s != null ? s.concat([e]) : null),
          po(4194308, 4, q1.bind(null, t, e), s);
      },
      useLayoutEffect: function (e, t) {
        return po(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        po(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var s = Ft();
        t = t === void 0 ? null : t;
        var l = e();
        if (Dr) {
          se(!0);
          try {
            e();
          } finally {
            se(!1);
          }
        }
        return (s.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, s) {
        var l = Ft();
        if (s !== void 0) {
          var c = s(t);
          if (Dr) {
            se(!0);
            try {
              s(t);
            } finally {
              se(!1);
            }
          }
        } else c = t;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = a3.bind(null, Ue, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Bu(e);
        var t = e.queue,
          s = W1.bind(null, Ue, t);
        return (t.dispatch = s), [e.memoizedState, s];
      },
      useDebugValue: Iu,
      useDeferredValue: function (e, t) {
        var s = Ft();
        return Hu(s, e, t);
      },
      useTransition: function () {
        var e = Bu(!1);
        return (
          (e = F1.bind(null, Ue, e.queue, !0, !1)),
          (Ft().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, s) {
        var l = Ue,
          c = Ft();
        if (qe) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = t()), tt === null)) throw Error(i(349));
          (He & 124) !== 0 || w1(l, t, s);
        }
        c.memoizedState = s;
        var d = { value: s, getSnapshot: t };
        return (
          (c.queue = d),
          I1(E1.bind(null, l, d, e), [e]),
          (l.flags |= 2048),
          vs(9, mo(), S1.bind(null, l, d, s, t), null),
          s
        );
      },
      useId: function () {
        var e = Ft(),
          t = tt.identifierPrefix;
        if (qe) {
          var s = ha,
            l = fa;
          (s = (l & ~(1 << (32 - _e(l) - 1))).toString(32) + s),
            (t = "«" + t + "R" + s),
            (s = uo++),
            0 < s && (t += "H" + s.toString(32)),
            (t += "»");
        } else (s = Ky++), (t = "«" + t + "r" + s.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zu,
      useFormState: j1,
      useActionState: j1,
      useOptimistic: function (e) {
        var t = Ft();
        t.memoizedState = t.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = s),
          (t = qu.bind(null, Ue, !0, s)),
          (s.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: ju,
      useCacheRefresh: function () {
        return (Ft().memoizedState = n3.bind(null, Ue));
      },
    },
    a2 = {
      readContext: Ut,
      use: fo,
      useCallback: G1,
      useContext: Ut,
      useEffect: H1,
      useImperativeHandle: P1,
      useInsertionEffect: V1,
      useLayoutEffect: Z1,
      useMemo: Y1,
      useReducer: ho,
      useRef: z1,
      useState: function () {
        return ho(ga);
      },
      useDebugValue: Iu,
      useDeferredValue: function (e, t) {
        var s = _t();
        return $1(s, $e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ho(ga)[0],
          t = _t().memoizedState;
        return [typeof e == "boolean" ? e : Ti(e), t];
      },
      useSyncExternalStore: C1,
      useId: K1,
      useHostTransitionStatus: Zu,
      useFormState: L1,
      useActionState: L1,
      useOptimistic: function (e, t) {
        var s = _t();
        return N1(s, $e, e, t);
      },
      useMemoCache: ju,
      useCacheRefresh: J1,
    },
    r3 = {
      readContext: Ut,
      use: fo,
      useCallback: G1,
      useContext: Ut,
      useEffect: H1,
      useImperativeHandle: P1,
      useInsertionEffect: V1,
      useLayoutEffect: Z1,
      useMemo: Y1,
      useReducer: Uu,
      useRef: z1,
      useState: function () {
        return Uu(ga);
      },
      useDebugValue: Iu,
      useDeferredValue: function (e, t) {
        var s = _t();
        return $e === null ? Hu(s, e, t) : $1(s, $e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uu(ga)[0],
          t = _t().memoizedState;
        return [typeof e == "boolean" ? e : Ti(e), t];
      },
      useSyncExternalStore: C1,
      useId: K1,
      useHostTransitionStatus: Zu,
      useFormState: B1,
      useActionState: B1,
      useOptimistic: function (e, t) {
        var s = _t();
        return $e !== null
          ? N1(s, $e, e, t)
          : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: ju,
      useCacheRefresh: J1,
    },
    bs = null,
    ki = 0;
  function vo(e) {
    var t = ki;
    return (ki += 1), bs === null && (bs = []), m1(bs, e, t);
  }
  function Ri(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function bo(e, t) {
    throw t.$$typeof === v
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function r2(e) {
    var t = e._init;
    return t(e._payload);
  }
  function s2(e) {
    function t(N, T) {
      if (e) {
        var O = N.deletions;
        O === null ? ((N.deletions = [T]), (N.flags |= 16)) : O.push(T);
      }
    }
    function s(N, T) {
      if (!e) return null;
      for (; T !== null; ) t(N, T), (T = T.sibling);
      return null;
    }
    function l(N) {
      for (var T = new Map(); N !== null; )
        N.key !== null ? T.set(N.key, N) : T.set(N.index, N), (N = N.sibling);
      return T;
    }
    function c(N, T) {
      return (N = da(N, T)), (N.index = 0), (N.sibling = null), N;
    }
    function d(N, T, O) {
      return (
        (N.index = O),
        e
          ? ((O = N.alternate),
            O !== null
              ? ((O = O.index), O < T ? ((N.flags |= 67108866), T) : O)
              : ((N.flags |= 67108866), T))
          : ((N.flags |= 1048576), T)
      );
    }
    function y(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function b(N, T, O, P) {
      return T === null || T.tag !== 6
        ? ((T = uu(O, N.mode, P)), (T.return = N), T)
        : ((T = c(T, O)), (T.return = N), T);
    }
    function w(N, T, O, P) {
      var fe = O.type;
      return fe === A
        ? q(N, T, O.props.children, P, O.key)
        : T !== null &&
            (T.elementType === fe ||
              (typeof fe == "object" &&
                fe !== null &&
                fe.$$typeof === me &&
                r2(fe) === T.type))
          ? ((T = c(T, O.props)), Ri(T, O), (T.return = N), T)
          : ((T = eo(O.type, O.key, O.props, null, N.mode, P)),
            Ri(T, O),
            (T.return = N),
            T);
    }
    function D(N, T, O, P) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== O.containerInfo ||
        T.stateNode.implementation !== O.implementation
        ? ((T = du(O, N.mode, P)), (T.return = N), T)
        : ((T = c(T, O.children || [])), (T.return = N), T);
    }
    function q(N, T, O, P, fe) {
      return T === null || T.tag !== 7
        ? ((T = Sr(O, N.mode, P, fe)), (T.return = N), T)
        : ((T = c(T, O)), (T.return = N), T);
    }
    function Y(N, T, O) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = uu("" + T, N.mode, O)), (T.return = N), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return (
              (O = eo(T.type, T.key, T.props, null, N.mode, O)),
              Ri(O, T),
              (O.return = N),
              O
            );
          case R:
            return (T = du(T, N.mode, O)), (T.return = N), T;
          case me:
            var P = T._init;
            return (T = P(T._payload)), Y(N, T, O);
        }
        if (Se(T) || re(T))
          return (T = Sr(T, N.mode, O, null)), (T.return = N), T;
        if (typeof T.then == "function") return Y(N, vo(T), O);
        if (T.$$typeof === V) return Y(N, ro(N, T), O);
        bo(N, T);
      }
      return null;
    }
    function j(N, T, O, P) {
      var fe = T !== null ? T.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return fe !== null ? null : b(N, T, "" + O, P);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case C:
            return O.key === fe ? w(N, T, O, P) : null;
          case R:
            return O.key === fe ? D(N, T, O, P) : null;
          case me:
            return (fe = O._init), (O = fe(O._payload)), j(N, T, O, P);
        }
        if (Se(O) || re(O)) return fe !== null ? null : q(N, T, O, P, null);
        if (typeof O.then == "function") return j(N, T, vo(O), P);
        if (O.$$typeof === V) return j(N, T, ro(N, O), P);
        bo(N, O);
      }
      return null;
    }
    function L(N, T, O, P, fe) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return (N = N.get(O) || null), b(T, N, "" + P, fe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case C:
            return (
              (N = N.get(P.key === null ? O : P.key) || null), w(T, N, P, fe)
            );
          case R:
            return (
              (N = N.get(P.key === null ? O : P.key) || null), D(T, N, P, fe)
            );
          case me:
            var Be = P._init;
            return (P = Be(P._payload)), L(N, T, O, P, fe);
        }
        if (Se(P) || re(P)) return (N = N.get(O) || null), q(T, N, P, fe, null);
        if (typeof P.then == "function") return L(N, T, O, vo(P), fe);
        if (P.$$typeof === V) return L(N, T, O, ro(T, P), fe);
        bo(T, P);
      }
      return null;
    }
    function Te(N, T, O, P) {
      for (
        var fe = null, Be = null, ye = T, xe = (T = 0), Ot = null;
        ye !== null && xe < O.length;
        xe++
      ) {
        ye.index > xe ? ((Ot = ye), (ye = null)) : (Ot = ye.sibling);
        var Ze = j(N, ye, O[xe], P);
        if (Ze === null) {
          ye === null && (ye = Ot);
          break;
        }
        e && ye && Ze.alternate === null && t(N, ye),
          (T = d(Ze, T, xe)),
          Be === null ? (fe = Ze) : (Be.sibling = Ze),
          (Be = Ze),
          (ye = Ot);
      }
      if (xe === O.length) return s(N, ye), qe && Tr(N, xe), fe;
      if (ye === null) {
        for (; xe < O.length; xe++)
          (ye = Y(N, O[xe], P)),
            ye !== null &&
              ((T = d(ye, T, xe)),
              Be === null ? (fe = ye) : (Be.sibling = ye),
              (Be = ye));
        return qe && Tr(N, xe), fe;
      }
      for (ye = l(ye); xe < O.length; xe++)
        (Ot = L(ye, N, xe, O[xe], P)),
          Ot !== null &&
            (e &&
              Ot.alternate !== null &&
              ye.delete(Ot.key === null ? xe : Ot.key),
            (T = d(Ot, T, xe)),
            Be === null ? (fe = Ot) : (Be.sibling = Ot),
            (Be = Ot));
      return (
        e &&
          ye.forEach(function (ir) {
            return t(N, ir);
          }),
        qe && Tr(N, xe),
        fe
      );
    }
    function be(N, T, O, P) {
      if (O == null) throw Error(i(151));
      for (
        var fe = null,
          Be = null,
          ye = T,
          xe = (T = 0),
          Ot = null,
          Ze = O.next();
        ye !== null && !Ze.done;
        xe++, Ze = O.next()
      ) {
        ye.index > xe ? ((Ot = ye), (ye = null)) : (Ot = ye.sibling);
        var ir = j(N, ye, Ze.value, P);
        if (ir === null) {
          ye === null && (ye = Ot);
          break;
        }
        e && ye && ir.alternate === null && t(N, ye),
          (T = d(ir, T, xe)),
          Be === null ? (fe = ir) : (Be.sibling = ir),
          (Be = ir),
          (ye = Ot);
      }
      if (Ze.done) return s(N, ye), qe && Tr(N, xe), fe;
      if (ye === null) {
        for (; !Ze.done; xe++, Ze = O.next())
          (Ze = Y(N, Ze.value, P)),
            Ze !== null &&
              ((T = d(Ze, T, xe)),
              Be === null ? (fe = Ze) : (Be.sibling = Ze),
              (Be = Ze));
        return qe && Tr(N, xe), fe;
      }
      for (ye = l(ye); !Ze.done; xe++, Ze = O.next())
        (Ze = L(ye, N, xe, Ze.value, P)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              ye.delete(Ze.key === null ? xe : Ze.key),
            (T = d(Ze, T, xe)),
            Be === null ? (fe = Ze) : (Be.sibling = Ze),
            (Be = Ze));
      return (
        e &&
          ye.forEach(function (sv) {
            return t(N, sv);
          }),
        qe && Tr(N, xe),
        fe
      );
    }
    function Xe(N, T, O, P) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === A &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case C:
            e: {
              for (var fe = O.key; T !== null; ) {
                if (T.key === fe) {
                  if (((fe = O.type), fe === A)) {
                    if (T.tag === 7) {
                      s(N, T.sibling),
                        (P = c(T, O.props.children)),
                        (P.return = N),
                        (N = P);
                      break e;
                    }
                  } else if (
                    T.elementType === fe ||
                    (typeof fe == "object" &&
                      fe !== null &&
                      fe.$$typeof === me &&
                      r2(fe) === T.type)
                  ) {
                    s(N, T.sibling),
                      (P = c(T, O.props)),
                      Ri(P, O),
                      (P.return = N),
                      (N = P);
                    break e;
                  }
                  s(N, T);
                  break;
                } else t(N, T);
                T = T.sibling;
              }
              O.type === A
                ? ((P = Sr(O.props.children, N.mode, P, O.key)),
                  (P.return = N),
                  (N = P))
                : ((P = eo(O.type, O.key, O.props, null, N.mode, P)),
                  Ri(P, O),
                  (P.return = N),
                  (N = P));
            }
            return y(N);
          case R:
            e: {
              for (fe = O.key; T !== null; ) {
                if (T.key === fe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === O.containerInfo &&
                    T.stateNode.implementation === O.implementation
                  ) {
                    s(N, T.sibling),
                      (P = c(T, O.children || [])),
                      (P.return = N),
                      (N = P);
                    break e;
                  } else {
                    s(N, T);
                    break;
                  }
                else t(N, T);
                T = T.sibling;
              }
              (P = du(O, N.mode, P)), (P.return = N), (N = P);
            }
            return y(N);
          case me:
            return (fe = O._init), (O = fe(O._payload)), Xe(N, T, O, P);
        }
        if (Se(O)) return Te(N, T, O, P);
        if (re(O)) {
          if (((fe = re(O)), typeof fe != "function")) throw Error(i(150));
          return (O = fe.call(O)), be(N, T, O, P);
        }
        if (typeof O.then == "function") return Xe(N, T, vo(O), P);
        if (O.$$typeof === V) return Xe(N, T, ro(N, O), P);
        bo(N, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          T !== null && T.tag === 6
            ? (s(N, T.sibling), (P = c(T, O)), (P.return = N), (N = P))
            : (s(N, T), (P = uu(O, N.mode, P)), (P.return = N), (N = P)),
          y(N))
        : s(N, T);
    }
    return function (N, T, O, P) {
      try {
        ki = 0;
        var fe = Xe(N, T, O, P);
        return (bs = null), fe;
      } catch (ye) {
        if (ye === _i || ye === io) throw ye;
        var Be = tn(29, ye, null, N.mode);
        return (Be.lanes = P), (Be.return = N), Be;
      } finally {
      }
    };
  }
  var _s = s2(!0),
    i2 = s2(!1),
    bn = z(null),
    Gn = null;
  function Ga(e) {
    var t = e.alternate;
    F(Et, Et.current & 1),
      F(bn, e),
      Gn === null &&
        (t === null || ps.current !== null || t.memoizedState !== null) &&
        (Gn = e);
  }
  function l2(e) {
    if (e.tag === 22) {
      if ((F(Et, Et.current), F(bn, e), Gn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Gn = e);
      }
    } else Ya();
  }
  function Ya() {
    F(Et, Et.current), F(bn, bn.current);
  }
  function ya(e) {
    K(bn), Gn === e && (Gn = null), K(Et);
  }
  var Et = z(0);
  function _o(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || Md(s))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Pu(e, t, s, l) {
    (t = e.memoizedState),
      (s = s(l, t)),
      (s = s == null ? t : _({}, t, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Gu = {
    enqueueSetState: function (e, t, s) {
      e = e._reactInternals;
      var l = sn(),
        c = Za(l);
      (c.payload = t),
        s != null && (c.callback = s),
        (t = qa(e, c, l)),
        t !== null && (ln(t, e, l), Ci(t, e, l));
    },
    enqueueReplaceState: function (e, t, s) {
      e = e._reactInternals;
      var l = sn(),
        c = Za(l);
      (c.tag = 1),
        (c.payload = t),
        s != null && (c.callback = s),
        (t = qa(e, c, l)),
        t !== null && (ln(t, e, l), Ci(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var s = sn(),
        l = Za(s);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = qa(e, l, s)),
        t !== null && (ln(t, e, s), Ci(t, e, s));
    },
  };
  function o2(e, t, s, l, c, d, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, d, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !fi(s, l) || !fi(c, d)
          : !0
    );
  }
  function c2(e, t, s, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(s, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(s, l),
      t.state !== e && Gu.enqueueReplaceState(t, t.state, null);
  }
  function Mr(e, t) {
    var s = t;
    if ("ref" in t) {
      s = {};
      for (var l in t) l !== "ref" && (s[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      s === t && (s = _({}, s));
      for (var c in e) s[c] === void 0 && (s[c] = e[c]);
    }
    return s;
  }
  var xo =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function u2(e) {
    xo(e);
  }
  function d2(e) {
    console.error(e);
  }
  function f2(e) {
    xo(e);
  }
  function Co(e, t) {
    try {
      var s = e.onUncaughtError;
      s(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function h2(e, t, s) {
    try {
      var l = e.onCaughtError;
      l(s.value, {
        componentStack: s.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Yu(e, t, s) {
    return (
      (s = Za(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Co(e, t);
      }),
      s
    );
  }
  function m2(e) {
    return (e = Za(e)), (e.tag = 3), e;
  }
  function p2(e, t, s, l) {
    var c = s.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = l.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          h2(t, s, l);
        });
    }
    var y = s.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        h2(t, s, l),
          typeof c != "function" &&
            (Ja === null ? (Ja = new Set([this])) : Ja.add(this));
        var b = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function s3(e, t, s, l, c) {
    if (
      ((s.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = s.alternate),
        t !== null && yi(t, s, c, !0),
        (s = bn.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              Gn === null ? gd() : s.alternate === null && ut === 0 && (ut = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = c),
              l === xu
                ? (s.flags |= 16384)
                : ((t = s.updateQueue),
                  t === null ? (s.updateQueue = new Set([l])) : t.add(l),
                  vd(e, l, c)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              l === xu
                ? (s.flags |= 16384)
                : ((t = s.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (s.updateQueue = t))
                    : ((s = t.retryQueue),
                      s === null ? (t.retryQueue = new Set([l])) : s.add(l)),
                  vd(e, l, c)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return vd(e, l, c), gd(), !1;
    }
    if (qe)
      return (
        (t = bn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            l !== mu && ((e = Error(i(422), { cause: l })), gi(pn(e, s))))
          : (l !== mu && ((t = Error(i(423), { cause: l })), gi(pn(t, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = pn(l, s)),
            (c = Yu(e.stateNode, l, c)),
            Su(e, c),
            ut !== 4 && (ut = 2)),
        !1
      );
    var d = Error(i(520), { cause: l });
    if (
      ((d = pn(d, s)),
      Bi === null ? (Bi = [d]) : Bi.push(d),
      ut !== 4 && (ut = 2),
      t === null)
    )
      return !0;
    (l = pn(l, s)), (s = t);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = c & -c),
            (s.lanes |= e),
            (e = Yu(s.stateNode, l, e)),
            Su(s, e),
            !1
          );
        case 1:
          if (
            ((t = s.type),
            (d = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (Ja === null || !Ja.has(d)))))
          )
            return (
              (s.flags |= 65536),
              (c &= -c),
              (s.lanes |= c),
              (c = m2(c)),
              p2(c, e, s, l),
              Su(s, c),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var g2 = Error(i(461)),
    kt = !1;
  function Mt(e, t, s, l) {
    t.child = e === null ? i2(t, null, s, l) : _s(t, e.child, s, l);
  }
  function y2(e, t, s, l, c) {
    s = s.render;
    var d = t.ref;
    if ("ref" in l) {
      var y = {};
      for (var b in l) b !== "ref" && (y[b] = l[b]);
    } else y = l;
    return (
      Rr(t),
      (l = ku(e, t, s, y, d, c)),
      (b = Ru()),
      e !== null && !kt
        ? (Ou(e, t, c), va(e, t, c))
        : (qe && b && fu(t), (t.flags |= 1), Mt(e, t, l, c), t.child)
    );
  }
  function v2(e, t, s, l, c) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" &&
        !cu(d) &&
        d.defaultProps === void 0 &&
        s.compare === null
        ? ((t.tag = 15), (t.type = d), b2(e, t, d, l, c))
        : ((e = eo(s.type, null, l, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !ed(e, c))) {
      var y = d.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : fi), s(y, l) && e.ref === t.ref)
      )
        return va(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = da(d, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function b2(e, t, s, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (fi(d, l) && e.ref === t.ref)
        if (((kt = !1), (t.pendingProps = l = d), ed(e, c)))
          (e.flags & 131072) !== 0 && (kt = !0);
        else return (t.lanes = e.lanes), va(e, t, c);
    }
    return $u(e, t, s, l, c);
  }
  function _2(e, t, s) {
    var l = t.pendingProps,
      c = l.children,
      d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = d !== null ? d.baseLanes | s : s), e !== null)) {
          for (c = t.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = d & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return x2(e, t, l, s);
      }
      if ((s & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && so(t, d !== null ? d.cachePool : null),
          d !== null ? b1(t, d) : Tu(),
          l2(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          x2(e, t, d !== null ? d.baseLanes | s : s, s)
        );
    } else
      d !== null
        ? (so(t, d.cachePool), b1(t, d), Ya(), (t.memoizedState = null))
        : (e !== null && so(t, null), Tu(), Ya());
    return Mt(e, t, c, s), t.child;
  }
  function x2(e, t, s, l) {
    var c = _u();
    return (
      (c = c === null ? null : { parent: St._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: s, cachePool: c }),
      e !== null && so(t, null),
      Tu(),
      l2(t),
      e !== null && yi(e, t, l, !0),
      null
    );
  }
  function wo(e, t) {
    var s = t.ref;
    if (s === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (e === null || e.ref !== s) && (t.flags |= 4194816);
    }
  }
  function $u(e, t, s, l, c) {
    return (
      Rr(t),
      (s = ku(e, t, s, l, void 0, c)),
      (l = Ru()),
      e !== null && !kt
        ? (Ou(e, t, c), va(e, t, c))
        : (qe && l && fu(t), (t.flags |= 1), Mt(e, t, s, c), t.child)
    );
  }
  function C2(e, t, s, l, c, d) {
    return (
      Rr(t),
      (t.updateQueue = null),
      (s = x1(t, l, s, c)),
      _1(e),
      (l = Ru()),
      e !== null && !kt
        ? (Ou(e, t, d), va(e, t, d))
        : (qe && l && fu(t), (t.flags |= 1), Mt(e, t, s, d), t.child)
    );
  }
  function w2(e, t, s, l, c) {
    if ((Rr(t), t.stateNode === null)) {
      var d = us,
        y = s.contextType;
      typeof y == "object" && y !== null && (d = Ut(y)),
        (d = new s(l, d)),
        (t.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Gu),
        (t.stateNode = d),
        (d._reactInternals = t),
        (d = t.stateNode),
        (d.props = l),
        (d.state = t.memoizedState),
        (d.refs = {}),
        Cu(t),
        (y = s.contextType),
        (d.context = typeof y == "object" && y !== null ? Ut(y) : us),
        (d.state = t.memoizedState),
        (y = s.getDerivedStateFromProps),
        typeof y == "function" && (Pu(t, s, y, l), (d.state = t.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((y = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          y !== d.state && Gu.enqueueReplaceState(d, d.state, null),
          Si(t, l, d, c),
          wi(),
          (d.state = t.memoizedState)),
        typeof d.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      d = t.stateNode;
      var b = t.memoizedProps,
        w = Mr(s, b);
      d.props = w;
      var D = d.context,
        q = s.contextType;
      (y = us), typeof q == "object" && q !== null && (y = Ut(q));
      var Y = s.getDerivedStateFromProps;
      (q =
        typeof Y == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (b = t.pendingProps !== b),
        q ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((b || D !== y) && c2(t, d, l, y)),
        (Va = !1);
      var j = t.memoizedState;
      (d.state = j),
        Si(t, l, d, c),
        wi(),
        (D = t.memoizedState),
        b || j !== D || Va
          ? (typeof Y == "function" && (Pu(t, s, Y, l), (D = t.memoizedState)),
            (w = Va || o2(t, s, w, l, j, D, y))
              ? (q ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = D)),
            (d.props = l),
            (d.state = D),
            (d.context = y),
            (l = w))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (d = t.stateNode),
        wu(e, t),
        (y = t.memoizedProps),
        (q = Mr(s, y)),
        (d.props = q),
        (Y = t.pendingProps),
        (j = d.context),
        (D = s.contextType),
        (w = us),
        typeof D == "object" && D !== null && (w = Ut(D)),
        (b = s.getDerivedStateFromProps),
        (D =
          typeof b == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((y !== Y || j !== w) && c2(t, d, l, w)),
        (Va = !1),
        (j = t.memoizedState),
        (d.state = j),
        Si(t, l, d, c),
        wi();
      var L = t.memoizedState;
      y !== Y ||
      j !== L ||
      Va ||
      (e !== null && e.dependencies !== null && ao(e.dependencies))
        ? (typeof b == "function" && (Pu(t, s, b, l), (L = t.memoizedState)),
          (q =
            Va ||
            o2(t, s, q, l, j, L, w) ||
            (e !== null && e.dependencies !== null && ao(e.dependencies)))
            ? (D ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(l, L, w),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(l, L, w)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = L)),
          (d.props = l),
          (d.state = L),
          (d.context = w),
          (l = q))
        : (typeof d.componentDidUpdate != "function" ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (d = l),
      wo(e, t),
      (l = (t.flags & 128) !== 0),
      d || l
        ? ((d = t.stateNode),
          (s =
            l && typeof s.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = _s(t, e.child, null, c)),
              (t.child = _s(t, null, s, c)))
            : Mt(e, t, s, c),
          (t.memoizedState = d.state),
          (e = t.child))
        : (e = va(e, t, c)),
      e
    );
  }
  function S2(e, t, s, l) {
    return pi(), (t.flags |= 256), Mt(e, t, s, l), t.child;
  }
  var Fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Xu(e) {
    return { baseLanes: e, cachePool: d1() };
  }
  function Qu(e, t, s) {
    return (e = e !== null ? e.childLanes & ~s : 0), t && (e |= _n), e;
  }
  function E2(e, t, s) {
    var l = t.pendingProps,
      c = !1,
      d = (t.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Et.current & 2) !== 0),
      y && ((c = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (qe) {
        if ((c ? Ga(t) : Ya(), qe)) {
          var b = ct,
            w;
          if ((w = b)) {
            e: {
              for (w = b, b = Pn; w.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((w = Nn(w.nextSibling)), w === null)) {
                  b = null;
                  break e;
                }
              }
              b = w;
            }
            b !== null
              ? ((t.memoizedState = {
                  dehydrated: b,
                  treeContext: Er !== null ? { id: fa, overflow: ha } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (w = tn(18, null, null, 0)),
                (w.stateNode = b),
                (w.return = t),
                (t.child = w),
                (Vt = t),
                (ct = null),
                (w = !0))
              : (w = !1);
          }
          w || Nr(t);
        }
        if (
          ((b = t.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return Md(b) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        ya(t);
      }
      return (
        (b = l.children),
        (l = l.fallback),
        c
          ? (Ya(),
            (c = t.mode),
            (b = So({ mode: "hidden", children: b }, c)),
            (l = Sr(l, c, s, null)),
            (b.return = t),
            (l.return = t),
            (b.sibling = l),
            (t.child = b),
            (c = t.child),
            (c.memoizedState = Xu(s)),
            (c.childLanes = Qu(e, y, s)),
            (t.memoizedState = Fu),
            l)
          : (Ga(t), Ku(t, b))
      );
    }
    if (
      ((w = e.memoizedState), w !== null && ((b = w.dehydrated), b !== null))
    ) {
      if (d)
        t.flags & 256
          ? (Ga(t), (t.flags &= -257), (t = Ju(e, t, s)))
          : t.memoizedState !== null
            ? (Ya(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ya(),
              (c = l.fallback),
              (b = t.mode),
              (l = So({ mode: "visible", children: l.children }, b)),
              (c = Sr(c, b, s, null)),
              (c.flags |= 2),
              (l.return = t),
              (c.return = t),
              (l.sibling = c),
              (t.child = l),
              _s(t, e.child, null, s),
              (l = t.child),
              (l.memoizedState = Xu(s)),
              (l.childLanes = Qu(e, y, s)),
              (t.memoizedState = Fu),
              (t = c));
      else if ((Ga(t), Md(b))) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var D = y.dgst;
        (y = D),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = y),
          gi({ value: l, source: null, stack: null }),
          (t = Ju(e, t, s));
      } else if (
        (kt || yi(e, t, s, !1), (y = (s & e.childLanes) !== 0), kt || y)
      ) {
        if (
          ((y = tt),
          y !== null &&
            ((l = s & -s),
            (l = (l & 42) !== 0 ? 1 : vt(l)),
            (l = (l & (y.suspendedLanes | s)) !== 0 ? 0 : l),
            l !== 0 && l !== w.retryLane))
        )
          throw ((w.retryLane = l), cs(e, l), ln(y, e, l), g2);
        b.data === "$?" || gd(), (t = Ju(e, t, s));
      } else
        b.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (ct = Nn(b.nextSibling)),
            (Vt = t),
            (qe = !0),
            (Ar = null),
            (Pn = !1),
            e !== null &&
              ((yn[vn++] = fa),
              (yn[vn++] = ha),
              (yn[vn++] = Er),
              (fa = e.id),
              (ha = e.overflow),
              (Er = t)),
            (t = Ku(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (Ya(),
        (c = l.fallback),
        (b = t.mode),
        (w = e.child),
        (D = w.sibling),
        (l = da(w, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = w.subtreeFlags & 65011712),
        D !== null ? (c = da(D, c)) : ((c = Sr(c, b, s, null)), (c.flags |= 2)),
        (c.return = t),
        (l.return = t),
        (l.sibling = c),
        (t.child = l),
        (l = c),
        (c = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = Xu(s))
          : ((w = b.cachePool),
            w !== null
              ? ((D = St._currentValue),
                (w = w.parent !== D ? { parent: D, pool: D } : w))
              : (w = d1()),
            (b = { baseLanes: b.baseLanes | s, cachePool: w })),
        (c.memoizedState = b),
        (c.childLanes = Qu(e, y, s)),
        (t.memoizedState = Fu),
        l)
      : (Ga(t),
        (s = e.child),
        (e = s.sibling),
        (s = da(s, { mode: "visible", children: l.children })),
        (s.return = t),
        (s.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = s),
        (t.memoizedState = null),
        s);
  }
  function Ku(e, t) {
    return (
      (t = So({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function So(e, t) {
    return (
      (e = tn(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ju(e, t, s) {
    return (
      _s(t, e.child, null, s),
      (e = Ku(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function T2(e, t, s) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gu(e.return, t, s);
  }
  function Wu(e, t, s, l, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: c,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = s),
        (d.tailMode = c));
  }
  function A2(e, t, s) {
    var l = t.pendingProps,
      c = l.revealOrder,
      d = l.tail;
    if ((Mt(e, t, l.children, s), (l = Et.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && T2(e, s, t);
          else if (e.tag === 19) T2(e, s, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((F(Et, l), c)) {
      case "forwards":
        for (s = t.child, c = null; s !== null; )
          (e = s.alternate),
            e !== null && _o(e) === null && (c = s),
            (s = s.sibling);
        (s = c),
          s === null
            ? ((c = t.child), (t.child = null))
            : ((c = s.sibling), (s.sibling = null)),
          Wu(t, !1, c, s, d);
        break;
      case "backwards":
        for (s = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && _o(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = s), (s = c), (c = e);
        }
        Wu(t, !0, s, null, d);
        break;
      case "together":
        Wu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function va(e, t, s) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ka |= t.lanes),
      (s & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((yi(e, t, s, !1), (s & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, s = da(e, e.pendingProps), t.child = s, s.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = da(e, e.pendingProps)),
          (s.return = t);
      s.sibling = null;
    }
    return t.child;
  }
  function ed(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ao(e)));
  }
  function i3(e, t, s) {
    switch (t.tag) {
      case 3:
        je(t, t.stateNode.containerInfo),
          Ha(t, St, e.memoizedState.cache),
          pi();
        break;
      case 27:
      case 5:
        Ht(t);
        break;
      case 4:
        je(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ha(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ga(t), (t.flags |= 128), null)
            : (s & t.child.childLanes) !== 0
              ? E2(e, t, s)
              : (Ga(t), (e = va(e, t, s)), e !== null ? e.sibling : null);
        Ga(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (s & t.childLanes) !== 0),
          l || (yi(e, t, s, !1), (l = (s & t.childLanes) !== 0)),
          c)
        ) {
          if (l) return A2(e, t, s);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          F(Et, Et.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), _2(e, t, s);
      case 24:
        Ha(t, St, e.memoizedState.cache);
    }
    return va(e, t, s);
  }
  function N2(e, t, s) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) kt = !0;
      else {
        if (!ed(e, s) && (t.flags & 128) === 0) return (kt = !1), i3(e, t, s);
        kt = (e.flags & 131072) !== 0;
      }
    else (kt = !1), qe && (t.flags & 1048576) !== 0 && r1(t, no, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            c = l._init;
          if (((l = c(l._payload)), (t.type = l), typeof l == "function"))
            cu(l)
              ? ((e = Mr(l, e)), (t.tag = 1), (t = w2(null, t, l, e, s)))
              : ((t.tag = 0), (t = $u(null, t, l, e, s)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === te)) {
                (t.tag = 11), (t = y2(null, t, l, e, s));
                break e;
              } else if (c === $) {
                (t.tag = 14), (t = v2(null, t, l, e, s));
                break e;
              }
            }
            throw ((t = Ce(l) || l), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return $u(e, t, t.type, t.pendingProps, s);
      case 1:
        return (l = t.type), (c = Mr(l, t.pendingProps)), w2(e, t, l, c, s);
      case 3:
        e: {
          if ((je(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          l = t.pendingProps;
          var d = t.memoizedState;
          (c = d.element), wu(e, t), Si(t, l, null, s);
          var y = t.memoizedState;
          if (
            ((l = y.cache),
            Ha(t, St, l),
            l !== d.cache && yu(t, [St], s, !0),
            wi(),
            (l = y.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: l, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              t = S2(e, t, l, s);
              break e;
            } else if (l !== c) {
              (c = pn(Error(i(424)), t)), gi(c), (t = S2(e, t, l, s));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ct = Nn(e.firstChild),
                  Vt = t,
                  qe = !0,
                  Ar = null,
                  Pn = !0,
                  s = i2(t, null, l, s),
                  t.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((pi(), l === c)) {
              t = va(e, t, s);
              break e;
            }
            Mt(e, t, l, s);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          wo(e, t),
          e === null
            ? (s = Dm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = s)
              : qe ||
                ((s = t.type),
                (e = t.pendingProps),
                (l = zo(le.current).createElement(s)),
                (l[mt] = t),
                (l[et] = e),
                Lt(l, s, e),
                Nt(l),
                (t.stateNode = l))
            : (t.memoizedState = Dm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ht(t),
          e === null &&
            qe &&
            ((l = t.stateNode = km(t.type, t.pendingProps, le.current)),
            (Vt = t),
            (Pn = !0),
            (c = ct),
            tr(t.type) ? ((jd = c), (ct = Nn(l.firstChild))) : (ct = c)),
          Mt(e, t, t.pendingProps.children, s),
          wo(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            qe &&
            ((c = l = ct) &&
              ((l = j3(l, t.type, t.pendingProps, Pn)),
              l !== null
                ? ((t.stateNode = l),
                  (Vt = t),
                  (ct = Nn(l.firstChild)),
                  (Pn = !1),
                  (c = !0))
                : (c = !1)),
            c || Nr(t)),
          Ht(t),
          (c = t.type),
          (d = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (l = d.children),
          Rd(c, d) ? (l = null) : y !== null && Rd(c, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = ku(e, t, Jy, null, null, s)), (Yi._currentValue = c)),
          wo(e, t),
          Mt(e, t, l, s),
          t.child
        );
      case 6:
        return (
          e === null &&
            qe &&
            ((e = s = ct) &&
              ((s = L3(s, t.pendingProps, Pn)),
              s !== null
                ? ((t.stateNode = s), (Vt = t), (ct = null), (e = !0))
                : (e = !1)),
            e || Nr(t)),
          null
        );
      case 13:
        return E2(e, t, s);
      case 4:
        return (
          je(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = _s(t, null, l, s)) : Mt(e, t, l, s),
          t.child
        );
      case 11:
        return y2(e, t, t.type, t.pendingProps, s);
      case 7:
        return Mt(e, t, t.pendingProps, s), t.child;
      case 8:
        return Mt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return Mt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          Ha(t, t.type, l.value),
          Mt(e, t, l.children, s),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (l = t.pendingProps.children),
          Rr(t),
          (c = Ut(c)),
          (l = l(c)),
          (t.flags |= 1),
          Mt(e, t, l, s),
          t.child
        );
      case 14:
        return v2(e, t, t.type, t.pendingProps, s);
      case 15:
        return b2(e, t, t.type, t.pendingProps, s);
      case 19:
        return A2(e, t, s);
      case 31:
        return (
          (l = t.pendingProps),
          (s = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((s = So(l, s)),
              (s.ref = t.ref),
              (t.child = s),
              (s.return = t),
              (t = s))
            : ((s = da(e.child, l)),
              (s.ref = t.ref),
              (t.child = s),
              (s.return = t),
              (t = s)),
          t
        );
      case 22:
        return _2(e, t, s);
      case 24:
        return (
          Rr(t),
          (l = Ut(St)),
          e === null
            ? ((c = _u()),
              c === null &&
                ((c = tt),
                (d = vu()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= s),
                (c = d)),
              (t.memoizedState = { parent: l, cache: c }),
              Cu(t),
              Ha(t, St, c))
            : ((e.lanes & s) !== 0 && (wu(e, t), Si(t, null, null, s), wi()),
              (c = e.memoizedState),
              (d = t.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  Ha(t, St, l))
                : ((l = d.cache),
                  Ha(t, St, l),
                  l !== c.cache && yu(t, [St], s, !0))),
          Mt(e, t, t.pendingProps.children, s),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function ba(e) {
    e.flags |= 4;
  }
  function k2(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Bm(t))) {
      if (
        ((t = bn.current),
        t !== null &&
          ((He & 4194048) === He
            ? Gn !== null
            : ((He & 62914560) !== He && (He & 536870912) === 0) || t !== Gn))
      )
        throw ((xi = xu), f1);
      e.flags |= 8192;
    }
  }
  function Eo(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? zl() : 536870912), (e.lanes |= t), (Ss |= t));
  }
  function Oi(e, t) {
    if (!qe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var s = null; t !== null; )
            t.alternate !== null && (s = t), (t = t.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (s |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = s), t;
  }
  function l3(e, t, s) {
    var l = t.pendingProps;
    switch ((hu(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return st(t), null;
      case 1:
        return st(t), null;
      case 3:
        return (
          (s = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          pa(St),
          lt(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (mi(t)
              ? ba(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), l1())),
          st(t),
          null
        );
      case 26:
        return (
          (s = t.memoizedState),
          e === null
            ? (ba(t),
              s !== null ? (st(t), k2(t, s)) : (st(t), (t.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (ba(t), st(t), k2(t, s))
                : (st(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && ba(t), st(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        dn(t), (s = le.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && ba(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return st(t), null;
          }
          (e = de.current),
            mi(t) ? s1(t) : ((e = km(c, l, s)), (t.stateNode = e), ba(t));
        }
        return st(t), null;
      case 5:
        if ((dn(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && ba(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return st(t), null;
          }
          if (((e = de.current), mi(t))) s1(t);
          else {
            switch (((c = zo(le.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? c.createElement(s, { is: l.is })
                        : c.createElement(s);
                }
            }
            (e[mt] = t), (e[et] = l);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((Lt(e, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ba(t);
          }
        }
        return st(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && ba(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = le.current), mi(t))) {
            if (
              ((e = t.stateNode),
              (s = t.memoizedProps),
              (l = null),
              (c = Vt),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[mt] = t),
              (e = !!(
                e.nodeValue === s ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Cm(e.nodeValue, s)
              )),
              e || Nr(t);
          } else (e = zo(e).createTextNode(l)), (e[mt] = t), (t.stateNode = e);
        }
        return st(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = mi(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[mt] = t;
            } else
              pi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            st(t), (c = !1);
          } else
            (c = l1()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return t.flags & 256 ? (ya(t), t) : (ya(t), null);
        }
        if ((ya(t), (t.flags & 128) !== 0)) return (t.lanes = s), t;
        if (
          ((s = l !== null), (e = e !== null && e.memoizedState !== null), s)
        ) {
          (l = t.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var d = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (d = l.memoizedState.cachePool.pool),
            d !== c && (l.flags |= 2048);
        }
        return (
          s !== e && s && (t.child.flags |= 8192),
          Eo(t, t.updateQueue),
          st(t),
          null
        );
      case 4:
        return lt(), e === null && Ed(t.stateNode.containerInfo), st(t), null;
      case 10:
        return pa(t.type), st(t), null;
      case 19:
        if ((K(Et), (c = t.memoizedState), c === null)) return st(t), null;
        if (((l = (t.flags & 128) !== 0), (d = c.rendering), d === null))
          if (l) Oi(c, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = _o(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Oi(c, !1),
                      e = d.updateQueue,
                      t.updateQueue = e,
                      Eo(t, e),
                      t.subtreeFlags = 0,
                      e = s,
                      s = t.child;
                    s !== null;

                  )
                    a1(s, e), (s = s.sibling);
                  return F(Et, (Et.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Ct() > No &&
              ((t.flags |= 128), (l = !0), Oi(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = _o(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Eo(t, e),
                Oi(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !qe)
              )
                return st(t), null;
            } else
              2 * Ct() - c.renderingStartTime > No &&
                s !== 536870912 &&
                ((t.flags |= 128), (l = !0), Oi(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((e = c.last),
              e !== null ? (e.sibling = d) : (t.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ct()),
            (t.sibling = null),
            (e = Et.current),
            F(Et, l ? (e & 1) | 2 : e & 1),
            t)
          : (st(t), null);
      case 22:
      case 23:
        return (
          ya(t),
          Au(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (s & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : st(t),
          (s = t.updateQueue),
          s !== null && Eo(t, s.retryQueue),
          (s = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== s && (t.flags |= 2048),
          e !== null && K(Or),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          t.memoizedState.cache !== s && (t.flags |= 2048),
          pa(St),
          st(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function o3(e, t) {
    switch ((hu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          pa(St),
          lt(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return dn(t), null;
      case 13:
        if (
          (ya(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          pi();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return K(Et), null;
      case 4:
        return lt(), null;
      case 10:
        return pa(t.type), null;
      case 22:
      case 23:
        return (
          ya(t),
          Au(),
          e !== null && K(Or),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return pa(St), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function R2(e, t) {
    switch ((hu(t), t.tag)) {
      case 3:
        pa(St), lt();
        break;
      case 26:
      case 27:
      case 5:
        dn(t);
        break;
      case 4:
        lt();
        break;
      case 13:
        ya(t);
        break;
      case 19:
        K(Et);
        break;
      case 10:
        pa(t.type);
        break;
      case 22:
      case 23:
        ya(t), Au(), e !== null && K(Or);
        break;
      case 24:
        pa(St);
    }
  }
  function Di(e, t) {
    try {
      var s = t.updateQueue,
        l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        s = c;
        do {
          if ((s.tag & e) === e) {
            l = void 0;
            var d = s.create,
              y = s.inst;
            (l = d()), (y.destroy = l);
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (b) {
      Ke(t, t.return, b);
    }
  }
  function $a(e, t, s) {
    try {
      var l = t.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst,
              b = y.destroy;
            if (b !== void 0) {
              (y.destroy = void 0), (c = t);
              var w = s,
                D = b;
              try {
                D();
              } catch (q) {
                Ke(c, w, q);
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (q) {
      Ke(t, t.return, q);
    }
  }
  function O2(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var s = e.stateNode;
      try {
        v1(t, s);
      } catch (l) {
        Ke(e, e.return, l);
      }
    }
  }
  function D2(e, t, s) {
    (s.props = Mr(e.type, e.memoizedProps)), (s.state = e.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (l) {
      Ke(e, t, l);
    }
  }
  function Mi(e, t) {
    try {
      var s = e.ref;
      if (s !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof s == "function" ? (e.refCleanup = s(l)) : (s.current = l);
      }
    } catch (c) {
      Ke(e, t, c);
    }
  }
  function Yn(e, t) {
    var s = e.ref,
      l = e.refCleanup;
    if (s !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          Ke(e, t, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (c) {
          Ke(e, t, c);
        }
      else s.current = null;
  }
  function M2(e) {
    var t = e.type,
      s = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && l.focus();
          break e;
        case "img":
          s.src ? (l.src = s.src) : s.srcSet && (l.srcset = s.srcSet);
      }
    } catch (c) {
      Ke(e, e.return, c);
    }
  }
  function td(e, t, s) {
    try {
      var l = e.stateNode;
      k3(l, e.type, s, t), (l[et] = t);
    } catch (c) {
      Ke(e, e.return, c);
    }
  }
  function j2(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && tr(e.type)) ||
      e.tag === 4
    );
  }
  function nd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || j2(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && tr(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ad(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s
            ).insertBefore(e, t)
          : ((t =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                  ? s.ownerDocument.body
                  : s),
            t.appendChild(e),
            (s = s._reactRootContainer),
            s != null || t.onclick !== null || (t.onclick = Bo));
    else if (
      l !== 4 &&
      (l === 27 && tr(e.type) && ((s = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ad(e, t, s), e = e.sibling; e !== null; )
        ad(e, t, s), (e = e.sibling);
  }
  function To(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && tr(e.type) && (s = e.stateNode), (e = e.child), e !== null)
    )
      for (To(e, t, s), e = e.sibling; e !== null; )
        To(e, t, s), (e = e.sibling);
  }
  function L2(e) {
    var t = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Lt(t, l, s), (t[mt] = e), (t[et] = s);
    } catch (d) {
      Ke(e, e.return, d);
    }
  }
  var _a = !1,
    gt = !1,
    rd = !1,
    U2 = typeof WeakSet == "function" ? WeakSet : Set,
    Rt = null;
  function c3(e, t) {
    if (((e = e.containerInfo), (Nd = Po), (e = $h(e)), nu(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var c = l.anchorOffset,
              d = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, d.nodeType;
            } catch {
              s = null;
              break e;
            }
            var y = 0,
              b = -1,
              w = -1,
              D = 0,
              q = 0,
              Y = e,
              j = null;
            t: for (;;) {
              for (
                var L;
                Y !== s || (c !== 0 && Y.nodeType !== 3) || (b = y + c),
                  Y !== d || (l !== 0 && Y.nodeType !== 3) || (w = y + l),
                  Y.nodeType === 3 && (y += Y.nodeValue.length),
                  (L = Y.firstChild) !== null;

              )
                (j = Y), (Y = L);
              for (;;) {
                if (Y === e) break t;
                if (
                  (j === s && ++D === c && (b = y),
                  j === d && ++q === l && (w = y),
                  (L = Y.nextSibling) !== null)
                )
                  break;
                (Y = j), (j = Y.parentNode);
              }
              Y = L;
            }
            s = b === -1 || w === -1 ? null : { start: b, end: w };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      kd = { focusedElem: e, selectionRange: s }, Po = !1, Rt = t;
      Rt !== null;

    )
      if (
        ((t = Rt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Rt = e);
      else
        for (; Rt !== null; ) {
          switch (((t = Rt), (d = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (s = t),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (l = s.stateNode);
                try {
                  var Te = Mr(s.type, c, s.elementType === s.type);
                  (e = l.getSnapshotBeforeUpdate(Te, d)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (be) {
                  Ke(s, s.return, be);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (s = e.nodeType), s === 9)
                )
                  Dd(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Dd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Rt = e);
            break;
          }
          Rt = t.return;
        }
  }
  function B2(e, t, s) {
    var l = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Fa(e, s), l & 4 && Di(5, s);
        break;
      case 1:
        if ((Fa(e, s), l & 4))
          if (((e = s.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (y) {
              Ke(s, s.return, y);
            }
          else {
            var c = Mr(s.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Ke(s, s.return, y);
            }
          }
        l & 64 && O2(s), l & 512 && Mi(s, s.return);
        break;
      case 3:
        if ((Fa(e, s), l & 64 && ((e = s.updateQueue), e !== null))) {
          if (((t = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                t = s.child.stateNode;
                break;
              case 1:
                t = s.child.stateNode;
            }
          try {
            v1(e, t);
          } catch (y) {
            Ke(s, s.return, y);
          }
        }
        break;
      case 27:
        t === null && l & 4 && L2(s);
      case 26:
      case 5:
        Fa(e, s), t === null && l & 4 && M2(s), l & 512 && Mi(s, s.return);
        break;
      case 12:
        Fa(e, s);
        break;
      case 13:
        Fa(e, s),
          l & 4 && H2(e, s),
          l & 64 &&
            ((e = s.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((s = v3.bind(null, s)), U3(e, s))));
        break;
      case 22:
        if (((l = s.memoizedState !== null || _a), !l)) {
          (t = (t !== null && t.memoizedState !== null) || gt), (c = _a);
          var d = gt;
          (_a = l),
            (gt = t) && !d ? Xa(e, s, (s.subtreeFlags & 8772) !== 0) : Fa(e, s),
            (_a = c),
            (gt = d);
        }
        break;
      case 30:
        break;
      default:
        Fa(e, s);
    }
  }
  function z2(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), z2(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Bc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var at = null,
    Xt = !1;
  function xa(e, t, s) {
    for (s = s.child; s !== null; ) I2(e, t, s), (s = s.sibling);
  }
  function I2(e, t, s) {
    if (X && typeof X.onCommitFiberUnmount == "function")
      try {
        X.onCommitFiberUnmount(ee, s);
      } catch {}
    switch (s.tag) {
      case 26:
        gt || Yn(s, t),
          xa(e, t, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        gt || Yn(s, t);
        var l = at,
          c = Xt;
        tr(s.type) && ((at = s.stateNode), (Xt = !1)),
          xa(e, t, s),
          Zi(s.stateNode),
          (at = l),
          (Xt = c);
        break;
      case 5:
        gt || Yn(s, t);
      case 6:
        if (
          ((l = at),
          (c = Xt),
          (at = null),
          xa(e, t, s),
          (at = l),
          (Xt = c),
          at !== null)
        )
          if (Xt)
            try {
              (at.nodeType === 9
                ? at.body
                : at.nodeName === "HTML"
                  ? at.ownerDocument.body
                  : at
              ).removeChild(s.stateNode);
            } catch (d) {
              Ke(s, t, d);
            }
          else
            try {
              at.removeChild(s.stateNode);
            } catch (d) {
              Ke(s, t, d);
            }
        break;
      case 18:
        at !== null &&
          (Xt
            ? ((e = at),
              Am(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                s.stateNode,
              ),
              Qi(e))
            : Am(at, s.stateNode));
        break;
      case 4:
        (l = at),
          (c = Xt),
          (at = s.stateNode.containerInfo),
          (Xt = !0),
          xa(e, t, s),
          (at = l),
          (Xt = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gt || $a(2, s, t), gt || $a(4, s, t), xa(e, t, s);
        break;
      case 1:
        gt ||
          (Yn(s, t),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function" && D2(s, t, l)),
          xa(e, t, s);
        break;
      case 21:
        xa(e, t, s);
        break;
      case 22:
        (gt = (l = gt) || s.memoizedState !== null), xa(e, t, s), (gt = l);
        break;
      default:
        xa(e, t, s);
    }
  }
  function H2(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Qi(e);
      } catch (s) {
        Ke(t, t.return, s);
      }
  }
  function u3(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new U2()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new U2()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function sd(e, t) {
    var s = u3(e);
    t.forEach(function (l) {
      var c = b3.bind(null, e, l);
      s.has(l) || (s.add(l), l.then(c, c));
    });
  }
  function nn(e, t) {
    var s = t.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var c = s[l],
          d = e,
          y = t,
          b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (tr(b.type)) {
                (at = b.stateNode), (Xt = !1);
                break e;
              }
              break;
            case 5:
              (at = b.stateNode), (Xt = !1);
              break e;
            case 3:
            case 4:
              (at = b.stateNode.containerInfo), (Xt = !0);
              break e;
          }
          b = b.return;
        }
        if (at === null) throw Error(i(160));
        I2(d, y, c),
          (at = null),
          (Xt = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) V2(t, e), (t = t.sibling);
  }
  var An = null;
  function V2(e, t) {
    var s = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nn(t, e),
          an(e),
          l & 4 && ($a(3, e, e.return), Di(3, e), $a(5, e, e.return));
        break;
      case 1:
        nn(t, e),
          an(e),
          l & 512 && (gt || s === null || Yn(s, s.return)),
          l & 64 &&
            _a &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((s = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = s === null ? l : s.concat(l)))));
        break;
      case 26:
        var c = An;
        if (
          (nn(t, e),
          an(e),
          l & 512 && (gt || s === null || Yn(s, s.return)),
          l & 4)
        ) {
          var d = s !== null ? s.memoizedState : null;
          if (((l = e.memoizedState), s === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (s = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (l) {
                    case "title":
                      (d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[ai] ||
                          d[mt] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(l)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title"),
                          )),
                        Lt(d, l, s),
                        (d[mt] = e),
                        Nt(d),
                        (l = d);
                      break e;
                    case "link":
                      var y = Lm("link", "href", c).get(l + (s.href || ""));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((d = y[b]),
                            d.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              d.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              d.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              d.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)),
                        Lt(d, l, s),
                        c.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (y = Lm("meta", "content", c).get(
                          l + (s.content || ""),
                        ))
                      ) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((d = y[b]),
                            d.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              d.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              d.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              d.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(l)),
                        Lt(d, l, s),
                        c.head.appendChild(d);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (d[mt] = e), Nt(d), (l = d);
                }
                e.stateNode = l;
              } else Um(c, e.type, e.stateNode);
            else e.stateNode = jm(c, l, e.memoizedProps);
          else
            d !== l
              ? (d === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : d.count--,
                l === null
                  ? Um(c, e.type, e.stateNode)
                  : jm(c, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                td(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        nn(t, e),
          an(e),
          l & 512 && (gt || s === null || Yn(s, s.return)),
          s !== null && l & 4 && td(e, e.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (
          (nn(t, e),
          an(e),
          l & 512 && (gt || s === null || Yn(s, s.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ns(c, "");
          } catch (L) {
            Ke(e, e.return, L);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), td(e, c, s !== null ? s.memoizedProps : c)),
          l & 1024 && (rd = !0);
        break;
      case 6:
        if ((nn(t, e), an(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.memoizedProps), (s = e.stateNode);
          try {
            s.nodeValue = l;
          } catch (L) {
            Ke(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Vo = null),
          (c = An),
          (An = Io(t.containerInfo)),
          nn(t, e),
          (An = c),
          an(e),
          l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Qi(t.containerInfo);
          } catch (L) {
            Ke(e, e.return, L);
          }
        rd && ((rd = !1), Z2(e));
        break;
      case 4:
        (l = An),
          (An = Io(e.stateNode.containerInfo)),
          nn(t, e),
          an(e),
          (An = l);
        break;
      case 12:
        nn(t, e), an(e);
        break;
      case 13:
        nn(t, e),
          an(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (dd = Ct()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), sd(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var w = s !== null && s.memoizedState !== null,
          D = _a,
          q = gt;
        if (
          ((_a = D || c),
          (gt = q || w),
          nn(t, e),
          (gt = q),
          (_a = D),
          an(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (s === null || w || _a || gt || jr(e)),
              s = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (s === null) {
                w = s = t;
                try {
                  if (((d = w.stateNode), c))
                    (y = d.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    b = w.stateNode;
                    var Y = w.memoizedProps.style,
                      j =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    b.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (L) {
                  Ke(w, w.return, L);
                }
              }
            } else if (t.tag === 6) {
              if (s === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = c ? "" : w.memoizedProps;
                } catch (L) {
                  Ke(w, w.return, L);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              s === t && (s = null), (t = t.return);
            }
            s === t && (s = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((s = l.retryQueue),
            s !== null && ((l.retryQueue = null), sd(e, s))));
        break;
      case 19:
        nn(t, e),
          an(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), sd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nn(t, e), an(e);
    }
  }
  function an(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var s, l = e.return; l !== null; ) {
          if (j2(l)) {
            s = l;
            break;
          }
          l = l.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var c = s.stateNode,
              d = nd(e);
            To(e, d, c);
            break;
          case 5:
            var y = s.stateNode;
            s.flags & 32 && (ns(y, ""), (s.flags &= -33));
            var b = nd(e);
            To(e, b, y);
            break;
          case 3:
          case 4:
            var w = s.stateNode.containerInfo,
              D = nd(e);
            ad(e, D, w);
            break;
          default:
            throw Error(i(161));
        }
      } catch (q) {
        Ke(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Z2(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Z2(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Fa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) B2(e, t.alternate, t), (t = t.sibling);
  }
  function jr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $a(4, t, t.return), jr(t);
          break;
        case 1:
          Yn(t, t.return);
          var s = t.stateNode;
          typeof s.componentWillUnmount == "function" && D2(t, t.return, s),
            jr(t);
          break;
        case 27:
          Zi(t.stateNode);
        case 26:
        case 5:
          Yn(t, t.return), jr(t);
          break;
        case 22:
          t.memoizedState === null && jr(t);
          break;
        case 30:
          jr(t);
          break;
        default:
          jr(t);
      }
      e = e.sibling;
    }
  }
  function Xa(e, t, s) {
    for (s = s && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        c = e,
        d = t,
        y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Xa(c, d, s), Di(4, d);
          break;
        case 1:
          if (
            (Xa(c, d, s),
            (l = d),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (D) {
              Ke(l, l.return, D);
            }
          if (((l = d), (c = l.updateQueue), c !== null)) {
            var b = l.stateNode;
            try {
              var w = c.shared.hiddenCallbacks;
              if (w !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < w.length; c++)
                  y1(w[c], b);
            } catch (D) {
              Ke(l, l.return, D);
            }
          }
          s && y & 64 && O2(d), Mi(d, d.return);
          break;
        case 27:
          L2(d);
        case 26:
        case 5:
          Xa(c, d, s), s && l === null && y & 4 && M2(d), Mi(d, d.return);
          break;
        case 12:
          Xa(c, d, s);
          break;
        case 13:
          Xa(c, d, s), s && y & 4 && H2(c, d);
          break;
        case 22:
          d.memoizedState === null && Xa(c, d, s), Mi(d, d.return);
          break;
        case 30:
          break;
        default:
          Xa(c, d, s);
      }
      t = t.sibling;
    }
  }
  function id(e, t) {
    var s = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && vi(s));
  }
  function ld(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && vi(e));
  }
  function $n(e, t, s, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) q2(e, t, s, l), (t = t.sibling);
  }
  function q2(e, t, s, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $n(e, t, s, l), c & 2048 && Di(9, t);
        break;
      case 1:
        $n(e, t, s, l);
        break;
      case 3:
        $n(e, t, s, l),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && vi(e)));
        break;
      case 12:
        if (c & 2048) {
          $n(e, t, s, l), (e = t.stateNode);
          try {
            var d = t.memoizedProps,
              y = d.id,
              b = d.onPostCommit;
            typeof b == "function" &&
              b(
                y,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (w) {
            Ke(t, t.return, w);
          }
        } else $n(e, t, s, l);
        break;
      case 13:
        $n(e, t, s, l);
        break;
      case 23:
        break;
      case 22:
        (d = t.stateNode),
          (y = t.alternate),
          t.memoizedState !== null
            ? d._visibility & 2
              ? $n(e, t, s, l)
              : ji(e, t)
            : d._visibility & 2
              ? $n(e, t, s, l)
              : ((d._visibility |= 2),
                xs(e, t, s, l, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && id(y, t);
        break;
      case 24:
        $n(e, t, s, l), c & 2048 && ld(t.alternate, t);
        break;
      default:
        $n(e, t, s, l);
    }
  }
  function xs(e, t, s, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e,
        y = t,
        b = s,
        w = l,
        D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          xs(d, y, b, w, c), Di(8, y);
          break;
        case 23:
          break;
        case 22:
          var q = y.stateNode;
          y.memoizedState !== null
            ? q._visibility & 2
              ? xs(d, y, b, w, c)
              : ji(d, y)
            : ((q._visibility |= 2), xs(d, y, b, w, c)),
            c && D & 2048 && id(y.alternate, y);
          break;
        case 24:
          xs(d, y, b, w, c), c && D & 2048 && ld(y.alternate, y);
          break;
        default:
          xs(d, y, b, w, c);
      }
      t = t.sibling;
    }
  }
  function ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var s = e,
          l = t,
          c = l.flags;
        switch (l.tag) {
          case 22:
            ji(s, l), c & 2048 && id(l.alternate, l);
            break;
          case 24:
            ji(s, l), c & 2048 && ld(l.alternate, l);
            break;
          default:
            ji(s, l);
        }
        t = t.sibling;
      }
  }
  var Li = 8192;
  function Cs(e) {
    if (e.subtreeFlags & Li)
      for (e = e.child; e !== null; ) P2(e), (e = e.sibling);
  }
  function P2(e) {
    switch (e.tag) {
      case 26:
        Cs(e),
          e.flags & Li &&
            e.memoizedState !== null &&
            X3(An, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Cs(e);
        break;
      case 3:
      case 4:
        var t = An;
        (An = Io(e.stateNode.containerInfo)), Cs(e), (An = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Li), (Li = 16777216), Cs(e), (Li = t))
            : Cs(e));
        break;
      default:
        Cs(e);
    }
  }
  function G2(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Ui(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var s = 0; s < t.length; s++) {
          var l = t[s];
          (Rt = l), $2(l, e);
        }
      G2(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Y2(e), (e = e.sibling);
  }
  function Y2(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ui(e), e.flags & 2048 && $a(9, e, e.return);
        break;
      case 3:
        Ui(e);
        break;
      case 12:
        Ui(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ao(e))
          : Ui(e);
        break;
      default:
        Ui(e);
    }
  }
  function Ao(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var s = 0; s < t.length; s++) {
          var l = t[s];
          (Rt = l), $2(l, e);
        }
      G2(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          $a(8, t, t.return), Ao(t);
          break;
        case 22:
          (s = t.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Ao(t));
          break;
        default:
          Ao(t);
      }
      e = e.sibling;
    }
  }
  function $2(e, t) {
    for (; Rt !== null; ) {
      var s = Rt;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          $a(8, s, t);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var l = s.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          vi(s.memoizedState.cache);
      }
      if (((l = s.child), l !== null)) (l.return = s), (Rt = l);
      else
        e: for (s = e; Rt !== null; ) {
          l = Rt;
          var c = l.sibling,
            d = l.return;
          if ((z2(l), l === s)) {
            Rt = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (Rt = c);
            break e;
          }
          Rt = d;
        }
    }
  }
  var d3 = {
      getCacheForType: function (e) {
        var t = Ut(St),
          s = t.data.get(e);
        return s === void 0 && ((s = e()), t.data.set(e, s)), s;
      },
    },
    f3 = typeof WeakMap == "function" ? WeakMap : Map,
    Ge = 0,
    tt = null,
    ze = null,
    He = 0,
    Ye = 0,
    rn = null,
    Qa = !1,
    ws = !1,
    od = !1,
    Ca = 0,
    ut = 0,
    Ka = 0,
    Lr = 0,
    cd = 0,
    _n = 0,
    Ss = 0,
    Bi = null,
    Qt = null,
    ud = !1,
    dd = 0,
    No = 1 / 0,
    ko = null,
    Ja = null,
    jt = 0,
    Wa = null,
    Es = null,
    Ts = 0,
    fd = 0,
    hd = null,
    F2 = null,
    zi = 0,
    md = null;
  function sn() {
    if ((Ge & 2) !== 0 && He !== 0) return He & -He;
    if (k.T !== null) {
      var e = hs;
      return e !== 0 ? e : xd();
    }
    return br();
  }
  function X2() {
    _n === 0 && (_n = (He & 536870912) === 0 || qe ? En() : 536870912);
    var e = bn.current;
    return e !== null && (e.flags |= 32), _n;
  }
  function ln(e, t, s) {
    ((e === tt && (Ye === 2 || Ye === 9)) || e.cancelPendingCommit !== null) &&
      (As(e, 0), er(e, He, _n, !1)),
      za(e, s),
      ((Ge & 2) === 0 || e !== tt) &&
        (e === tt &&
          ((Ge & 2) === 0 && (Lr |= s), ut === 4 && er(e, He, _n, !1)),
        Fn(e));
  }
  function Q2(e, t, s) {
    if ((Ge & 6) !== 0) throw Error(i(327));
    var l = (!s && (t & 124) === 0 && (t & e.expiredLanes) === 0) || la(e, t),
      c = l ? p3(e, t) : yd(e, t, !0),
      d = l;
    do {
      if (c === 0) {
        ws && !l && er(e, t, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), d && !h3(s))) {
          (c = yd(e, t, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = t), e.errorRecoveryDisabledLanes & d)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var b = e;
              c = Bi;
              var w = b.current.memoizedState.isDehydrated;
              if ((w && (As(b, y).flags |= 256), (y = yd(b, y, !1)), y !== 2)) {
                if (od && !w) {
                  (b.errorRecoveryDisabledLanes |= d), (Lr |= d), (c = 4);
                  break e;
                }
                (d = Qt),
                  (Qt = c),
                  d !== null && (Qt === null ? (Qt = d) : Qt.push.apply(Qt, d));
              }
              c = y;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          As(e, 0), er(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              er(l, t, _n, !Qa);
              break e;
            case 2:
              Qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((c = dd + 300 - Ct()), 10 < c)) {
            if ((er(l, t, _n, !Qa), qn(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Em(
              K2.bind(null, l, s, Qt, ko, ud, t, _n, Lr, Ss, Qa, d, 2, -0, 0),
              c,
            );
            break e;
          }
          K2(l, s, Qt, ko, ud, t, _n, Lr, Ss, Qa, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Fn(e);
  }
  function K2(e, t, s, l, c, d, y, b, w, D, q, Y, j, L) {
    if (
      ((e.timeoutHandle = -1),
      (Y = t.subtreeFlags),
      (Y & 8192 || (Y & 16785408) === 16785408) &&
        ((Gi = { stylesheets: null, count: 0, unsuspend: F3 }),
        P2(t),
        (Y = Q3()),
        Y !== null))
    ) {
      (e.cancelPendingCommit = Y(
        rm.bind(null, e, t, d, s, l, c, y, b, w, q, 1, j, L),
      )),
        er(e, d, y, !D);
      return;
    }
    rm(e, t, d, s, l, c, y, b, w);
  }
  function h3(e) {
    for (var t = e; ; ) {
      var s = t.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        t.flags & 16384 &&
        ((s = t.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var l = 0; l < s.length; l++) {
          var c = s[l],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!en(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = t.child), t.subtreeFlags & 16384 && s !== null))
        (s.return = t), (t = s);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function er(e, t, s, l) {
    (t &= ~cd),
      (t &= ~Lr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var d = 31 - _e(c),
        y = 1 << d;
      (l[d] = -1), (c &= ~y);
    }
    s !== 0 && Oe(e, s, t);
  }
  function Ro() {
    return (Ge & 6) === 0 ? (Ii(0), !1) : !0;
  }
  function pd() {
    if (ze !== null) {
      if (Ye === 0) var e = ze.return;
      else (e = ze), (ma = kr = null), Du(e), (bs = null), (ki = 0), (e = ze);
      for (; e !== null; ) R2(e.alternate, e), (e = e.return);
      ze = null;
    }
  }
  function As(e, t) {
    var s = e.timeoutHandle;
    s !== -1 && ((e.timeoutHandle = -1), O3(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      pd(),
      (tt = e),
      (ze = s = da(e.current, null)),
      (He = t),
      (Ye = 0),
      (rn = null),
      (Qa = !1),
      (ws = la(e, t)),
      (od = !1),
      (Ss = _n = cd = Lr = Ka = ut = 0),
      (Qt = Bi = null),
      (ud = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - _e(l),
          d = 1 << c;
        (t |= e[c]), (l &= ~d);
      }
    return (Ca = t), Kl(), s;
  }
  function J2(e, t) {
    (Ue = null),
      (k.H = yo),
      t === _i || t === io
        ? ((t = p1()), (Ye = 3))
        : t === f1
          ? ((t = p1()), (Ye = 4))
          : (Ye =
              t === g2
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (rn = t),
      ze === null && ((ut = 1), Co(e, pn(t, e.current)));
  }
  function W2() {
    var e = k.H;
    return (k.H = yo), e === null ? yo : e;
  }
  function em() {
    var e = k.A;
    return (k.A = d3), e;
  }
  function gd() {
    (ut = 4),
      Qa || ((He & 4194048) !== He && bn.current !== null) || (ws = !0),
      ((Ka & 134217727) === 0 && (Lr & 134217727) === 0) ||
        tt === null ||
        er(tt, He, _n, !1);
  }
  function yd(e, t, s) {
    var l = Ge;
    Ge |= 2;
    var c = W2(),
      d = em();
    (tt !== e || He !== t) && ((ko = null), As(e, t)), (t = !1);
    var y = ut;
    e: do
      try {
        if (Ye !== 0 && ze !== null) {
          var b = ze,
            w = rn;
          switch (Ye) {
            case 8:
              pd(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bn.current === null && (t = !0);
              var D = Ye;
              if (((Ye = 0), (rn = null), Ns(e, b, w, D), s && ws)) {
                y = 0;
                break e;
              }
              break;
            default:
              (D = Ye), (Ye = 0), (rn = null), Ns(e, b, w, D);
          }
        }
        m3(), (y = ut);
        break;
      } catch (q) {
        J2(e, q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ma = kr = null),
      (Ge = l),
      (k.H = c),
      (k.A = d),
      ze === null && ((tt = null), (He = 0), Kl()),
      y
    );
  }
  function m3() {
    for (; ze !== null; ) tm(ze);
  }
  function p3(e, t) {
    var s = Ge;
    Ge |= 2;
    var l = W2(),
      c = em();
    tt !== e || He !== t
      ? ((ko = null), (No = Ct() + 500), As(e, t))
      : (ws = la(e, t));
    e: do
      try {
        if (Ye !== 0 && ze !== null) {
          t = ze;
          var d = rn;
          t: switch (Ye) {
            case 1:
              (Ye = 0), (rn = null), Ns(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (h1(d)) {
                (Ye = 0), (rn = null), nm(t);
                break;
              }
              (t = function () {
                (Ye !== 2 && Ye !== 9) || tt !== e || (Ye = 7), Fn(e);
              }),
                d.then(t, t);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              h1(d)
                ? ((Ye = 0), (rn = null), nm(t))
                : ((Ye = 0), (rn = null), Ns(e, t, d, 7));
              break;
            case 5:
              var y = null;
              switch (ze.tag) {
                case 26:
                  y = ze.memoizedState;
                case 5:
                case 27:
                  var b = ze;
                  if (!y || Bm(y)) {
                    (Ye = 0), (rn = null);
                    var w = b.sibling;
                    if (w !== null) ze = w;
                    else {
                      var D = b.return;
                      D !== null ? ((ze = D), Oo(D)) : (ze = null);
                    }
                    break t;
                  }
              }
              (Ye = 0), (rn = null), Ns(e, t, d, 5);
              break;
            case 6:
              (Ye = 0), (rn = null), Ns(e, t, d, 6);
              break;
            case 8:
              pd(), (ut = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        g3();
        break;
      } catch (q) {
        J2(e, q);
      }
    while (!0);
    return (
      (ma = kr = null),
      (k.H = l),
      (k.A = c),
      (Ge = s),
      ze !== null ? 0 : ((tt = null), (He = 0), Kl(), ut)
    );
  }
  function g3() {
    for (; ze !== null && !In(); ) tm(ze);
  }
  function tm(e) {
    var t = N2(e.alternate, e, Ca);
    (e.memoizedProps = e.pendingProps), t === null ? Oo(e) : (ze = t);
  }
  function nm(e) {
    var t = e,
      s = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = C2(s, t, t.pendingProps, t.type, void 0, He);
        break;
      case 11:
        t = C2(s, t, t.pendingProps, t.type.render, t.ref, He);
        break;
      case 5:
        Du(t);
      default:
        R2(s, t), (t = ze = a1(t, Ca)), (t = N2(s, t, Ca));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Oo(e) : (ze = t);
  }
  function Ns(e, t, s, l) {
    (ma = kr = null), Du(t), (bs = null), (ki = 0);
    var c = t.return;
    try {
      if (s3(e, c, t, s, He)) {
        (ut = 1), Co(e, pn(s, e.current)), (ze = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((ze = c), d);
      (ut = 1), Co(e, pn(s, e.current)), (ze = null);
      return;
    }
    t.flags & 32768
      ? (qe || l === 1
          ? (e = !0)
          : ws || (He & 536870912) !== 0
            ? (e = !1)
            : ((Qa = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = bn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        am(t, e))
      : Oo(t);
  }
  function Oo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(t, Qa);
        return;
      }
      e = t.return;
      var s = l3(t.alternate, t, Ca);
      if (s !== null) {
        ze = s;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function am(e, t) {
    do {
      var s = o3(e.alternate, e);
      if (s !== null) {
        (s.flags &= 32767), (ze = s);
        return;
      }
      if (
        ((s = e.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ze = e;
        return;
      }
      ze = e = s;
    } while (e !== null);
    (ut = 6), (ze = null);
  }
  function rm(e, t, s, l, c, d, y, b, w) {
    e.cancelPendingCommit = null;
    do Do();
    while (jt !== 0);
    if ((Ge & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((d = t.lanes | t.childLanes),
        (d |= lu),
        Il(e, s, d, y, b, w),
        e === tt && ((ze = tt = null), (He = 0)),
        (Es = t),
        (Wa = e),
        (Ts = s),
        (fd = d),
        (hd = c),
        (F2 = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            _3(ia, function () {
              return cm(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = k.T), (k.T = null), (c = Q.p), (Q.p = 2), (y = Ge), (Ge |= 4);
        try {
          c3(e, t, s);
        } finally {
          (Ge = y), (Q.p = c), (k.T = l);
        }
      }
      (jt = 1), sm(), im(), lm();
    }
  }
  function sm() {
    if (jt === 1) {
      jt = 0;
      var e = Wa,
        t = Es,
        s = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || s) {
        (s = k.T), (k.T = null);
        var l = Q.p;
        Q.p = 2;
        var c = Ge;
        Ge |= 4;
        try {
          V2(t, e);
          var d = kd,
            y = $h(e.containerInfo),
            b = d.focusedElem,
            w = d.selectionRange;
          if (
            y !== b &&
            b &&
            b.ownerDocument &&
            Yh(b.ownerDocument.documentElement, b)
          ) {
            if (w !== null && nu(b)) {
              var D = w.start,
                q = w.end;
              if ((q === void 0 && (q = D), "selectionStart" in b))
                (b.selectionStart = D),
                  (b.selectionEnd = Math.min(q, b.value.length));
              else {
                var Y = b.ownerDocument || document,
                  j = (Y && Y.defaultView) || window;
                if (j.getSelection) {
                  var L = j.getSelection(),
                    Te = b.textContent.length,
                    be = Math.min(w.start, Te),
                    Xe = w.end === void 0 ? be : Math.min(w.end, Te);
                  !L.extend && be > Xe && ((y = Xe), (Xe = be), (be = y));
                  var N = Gh(b, be),
                    T = Gh(b, Xe);
                  if (
                    N &&
                    T &&
                    (L.rangeCount !== 1 ||
                      L.anchorNode !== N.node ||
                      L.anchorOffset !== N.offset ||
                      L.focusNode !== T.node ||
                      L.focusOffset !== T.offset)
                  ) {
                    var O = Y.createRange();
                    O.setStart(N.node, N.offset),
                      L.removeAllRanges(),
                      be > Xe
                        ? (L.addRange(O), L.extend(T.node, T.offset))
                        : (O.setEnd(T.node, T.offset), L.addRange(O));
                  }
                }
              }
            }
            for (Y = [], L = b; (L = L.parentNode); )
              L.nodeType === 1 &&
                Y.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
            for (
              typeof b.focus == "function" && b.focus(), b = 0;
              b < Y.length;
              b++
            ) {
              var P = Y[b];
              (P.element.scrollLeft = P.left), (P.element.scrollTop = P.top);
            }
          }
          (Po = !!Nd), (kd = Nd = null);
        } finally {
          (Ge = c), (Q.p = l), (k.T = s);
        }
      }
      (e.current = t), (jt = 2);
    }
  }
  function im() {
    if (jt === 2) {
      jt = 0;
      var e = Wa,
        t = Es,
        s = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || s) {
        (s = k.T), (k.T = null);
        var l = Q.p;
        Q.p = 2;
        var c = Ge;
        Ge |= 4;
        try {
          B2(e, t.alternate, t);
        } finally {
          (Ge = c), (Q.p = l), (k.T = s);
        }
      }
      jt = 3;
    }
  }
  function lm() {
    if (jt === 4 || jt === 3) {
      (jt = 0), sa();
      var e = Wa,
        t = Es,
        s = Ts,
        l = F2;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (jt = 5)
        : ((jt = 0), (Es = Wa = null), om(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (Ja = null),
        Dt(s),
        (t = t.stateNode),
        X && typeof X.onCommitFiberRoot == "function")
      )
        try {
          X.onCommitFiberRoot(ee, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = k.T), (c = Q.p), (Q.p = 2), (k.T = null);
        try {
          for (var d = e.onRecoverableError, y = 0; y < l.length; y++) {
            var b = l[y];
            d(b.value, { componentStack: b.stack });
          }
        } finally {
          (k.T = t), (Q.p = c);
        }
      }
      (Ts & 3) !== 0 && Do(),
        Fn(e),
        (c = e.pendingLanes),
        (s & 4194090) !== 0 && (c & 42) !== 0
          ? e === md
            ? zi++
            : ((zi = 0), (md = e))
          : (zi = 0),
        Ii(0);
    }
  }
  function om(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), vi(t)));
  }
  function Do(e) {
    return sm(), im(), lm(), cm();
  }
  function cm() {
    if (jt !== 5) return !1;
    var e = Wa,
      t = fd;
    fd = 0;
    var s = Dt(Ts),
      l = k.T,
      c = Q.p;
    try {
      (Q.p = 32 > s ? 32 : s), (k.T = null), (s = hd), (hd = null);
      var d = Wa,
        y = Ts;
      if (((jt = 0), (Es = Wa = null), (Ts = 0), (Ge & 6) !== 0))
        throw Error(i(331));
      var b = Ge;
      if (
        ((Ge |= 4),
        Y2(d.current),
        q2(d, d.current, y, s),
        (Ge = b),
        Ii(0, !1),
        X && typeof X.onPostCommitFiberRoot == "function")
      )
        try {
          X.onPostCommitFiberRoot(ee, d);
        } catch {}
      return !0;
    } finally {
      (Q.p = c), (k.T = l), om(e, t);
    }
  }
  function um(e, t, s) {
    (t = pn(s, t)),
      (t = Yu(e.stateNode, t, 2)),
      (e = qa(e, t, 2)),
      e !== null && (za(e, 2), Fn(e));
  }
  function Ke(e, t, s) {
    if (e.tag === 3) um(e, e, s);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          um(t, e, s);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ja === null || !Ja.has(l)))
          ) {
            (e = pn(s, e)),
              (s = m2(2)),
              (l = qa(t, s, 2)),
              l !== null && (p2(s, l, t, e), za(l, 2), Fn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function vd(e, t, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new f3();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(s) ||
      ((od = !0), c.add(s), (e = y3.bind(null, e, t, s)), t.then(e, e));
  }
  function y3(e, t, s) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      tt === e &&
        (He & s) === s &&
        (ut === 4 || (ut === 3 && (He & 62914560) === He && 300 > Ct() - dd)
          ? (Ge & 2) === 0 && As(e, 0)
          : (cd |= s),
        Ss === He && (Ss = 0)),
      Fn(e);
  }
  function dm(e, t) {
    t === 0 && (t = zl()), (e = cs(e, t)), e !== null && (za(e, t), Fn(e));
  }
  function v3(e) {
    var t = e.memoizedState,
      s = 0;
    t !== null && (s = t.retryLane), dm(e, s);
  }
  function b3(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), dm(e, s);
  }
  function _3(e, t) {
    return We(e, t);
  }
  var Mo = null,
    ks = null,
    bd = !1,
    jo = !1,
    _d = !1,
    Ur = 0;
  function Fn(e) {
    e !== ks &&
      e.next === null &&
      (ks === null ? (Mo = ks = e) : (ks = ks.next = e)),
      (jo = !0),
      bd || ((bd = !0), C3());
  }
  function Ii(e, t) {
    if (!_d && jo) {
      _d = !0;
      do
        for (var s = !1, l = Mo; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var y = l.suspendedLanes,
                b = l.pingedLanes;
              (d = (1 << (31 - _e(42 | e) + 1)) - 1),
                (d &= c & ~(y & ~b)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((s = !0), pm(l, d));
          } else
            (d = He),
              (d = qn(
                l,
                l === tt ? d : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || la(l, d) || ((s = !0), pm(l, d));
          l = l.next;
        }
      while (s);
      _d = !1;
    }
  }
  function x3() {
    fm();
  }
  function fm() {
    jo = bd = !1;
    var e = 0;
    Ur !== 0 && (R3() && (e = Ur), (Ur = 0));
    for (var t = Ct(), s = null, l = Mo; l !== null; ) {
      var c = l.next,
        d = hm(l, t);
      d === 0
        ? ((l.next = null),
          s === null ? (Mo = c) : (s.next = c),
          c === null && (ks = s))
        : ((s = l), (e !== 0 || (d & 3) !== 0) && (jo = !0)),
        (l = c);
    }
    Ii(e);
  }
  function hm(e, t) {
    for (
      var s = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var y = 31 - _e(d),
        b = 1 << y,
        w = c[y];
      w === -1
        ? ((b & s) === 0 || (b & l) !== 0) && (c[y] = Ba(b, t))
        : w <= t && (e.expiredLanes |= b),
        (d &= ~b);
    }
    if (
      ((t = tt),
      (s = He),
      (s = qn(
        e,
        e === t ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      s === 0 ||
        (e === t && (Ye === 2 || Ye === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && ot(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((s & 3) === 0 || la(e, s)) {
      if (((t = s & -s), t === e.callbackPriority)) return t;
      switch ((l !== null && ot(l), Dt(s))) {
        case 2:
        case 8:
          s = ti;
          break;
        case 32:
          s = ia;
          break;
        case 268435456:
          s = M;
          break;
        default:
          s = ia;
      }
      return (
        (l = mm.bind(null, e)),
        (s = We(s, l)),
        (e.callbackPriority = t),
        (e.callbackNode = s),
        t
      );
    }
    return (
      l !== null && l !== null && ot(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function mm(e, t) {
    if (jt !== 0 && jt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var s = e.callbackNode;
    if (Do() && e.callbackNode !== s) return null;
    var l = He;
    return (
      (l = qn(
        e,
        e === tt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Q2(e, l, t),
          hm(e, Ct()),
          e.callbackNode != null && e.callbackNode === s
            ? mm.bind(null, e)
            : null)
    );
  }
  function pm(e, t) {
    if (Do()) return null;
    Q2(e, t, !0);
  }
  function C3() {
    D3(function () {
      (Ge & 6) !== 0 ? We(Yt, x3) : fm();
    });
  }
  function xd() {
    return Ur === 0 && (Ur = En()), Ur;
  }
  function gm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Pl("" + e);
  }
  function ym(e, t) {
    var s = t.ownerDocument.createElement("input");
    return (
      (s.name = t.name),
      (s.value = t.value),
      e.id && s.setAttribute("form", e.id),
      t.parentNode.insertBefore(s, t),
      (e = new FormData(e)),
      s.parentNode.removeChild(s),
      e
    );
  }
  function w3(e, t, s, l, c) {
    if (t === "submit" && s && s.stateNode === c) {
      var d = gm((c[et] || null).action),
        y = l.submitter;
      y &&
        ((t = (t = y[et] || null)
          ? gm(t.formAction)
          : y.getAttribute("formAction")),
        t !== null && ((d = t), (y = null)));
      var b = new Fl("action", "action", null, l, c);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ur !== 0) {
                  var w = y ? ym(c, y) : new FormData(c);
                  Vu(
                    s,
                    { pending: !0, data: w, method: c.method, action: d },
                    null,
                    w,
                  );
                }
              } else
                typeof d == "function" &&
                  (b.preventDefault(),
                  (w = y ? ym(c, y) : new FormData(c)),
                  Vu(
                    s,
                    { pending: !0, data: w, method: c.method, action: d },
                    d,
                    w,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Cd = 0; Cd < iu.length; Cd++) {
    var wd = iu[Cd],
      S3 = wd.toLowerCase(),
      E3 = wd[0].toUpperCase() + wd.slice(1);
    Tn(S3, "on" + E3);
  }
  Tn(Qh, "onAnimationEnd"),
    Tn(Kh, "onAnimationIteration"),
    Tn(Jh, "onAnimationStart"),
    Tn("dblclick", "onDoubleClick"),
    Tn("focusin", "onFocus"),
    Tn("focusout", "onBlur"),
    Tn(Zy, "onTransitionRun"),
    Tn(qy, "onTransitionStart"),
    Tn(Py, "onTransitionCancel"),
    Tn(Wh, "onTransitionEnd"),
    Wr("onMouseEnter", ["mouseout", "mouseover"]),
    Wr("onMouseLeave", ["mouseout", "mouseover"]),
    Wr("onPointerEnter", ["pointerout", "pointerover"]),
    Wr("onPointerLeave", ["pointerout", "pointerover"]),
    _r(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    _r(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    _r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _r(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    _r(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    _r(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Hi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    T3 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Hi),
    );
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s],
        c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var b = l[y],
              w = b.instance,
              D = b.currentTarget;
            if (((b = b.listener), w !== d && c.isPropagationStopped()))
              break e;
            (d = b), (c.currentTarget = D);
            try {
              d(c);
            } catch (q) {
              xo(q);
            }
            (c.currentTarget = null), (d = w);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((b = l[y]),
              (w = b.instance),
              (D = b.currentTarget),
              (b = b.listener),
              w !== d && c.isPropagationStopped())
            )
              break e;
            (d = b), (c.currentTarget = D);
            try {
              d(c);
            } catch (q) {
              xo(q);
            }
            (c.currentTarget = null), (d = w);
          }
      }
    }
  }
  function Ie(e, t) {
    var s = t[Xr];
    s === void 0 && (s = t[Xr] = new Set());
    var l = e + "__bubble";
    s.has(l) || (bm(t, e, 2, !1), s.add(l));
  }
  function Sd(e, t, s) {
    var l = 0;
    t && (l |= 4), bm(s, e, l, t);
  }
  var Lo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ed(e) {
    if (!e[Lo]) {
      (e[Lo] = !0),
        fh.forEach(function (s) {
          s !== "selectionchange" && (T3.has(s) || Sd(s, !1, e), Sd(s, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Lo] || ((t[Lo] = !0), Sd("selectionchange", !1, t));
    }
  }
  function bm(e, t, s, l) {
    switch (qm(t)) {
      case 2:
        var c = W3;
        break;
      case 8:
        c = ev;
        break;
      default:
        c = Id;
    }
    (s = c.bind(null, t, s, e)),
      (c = void 0),
      !$c ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, s, { capture: !0, passive: c })
          : e.addEventListener(t, s, !0)
        : c !== void 0
          ? e.addEventListener(t, s, { passive: c })
          : e.addEventListener(t, s, !1);
  }
  function Td(e, t, s, l, c) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var b = l.stateNode.containerInfo;
          if (b === c) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var w = y.tag;
              if ((w === 3 || w === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = Qr(b)), y === null)) return;
            if (((w = y.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              l = d = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    Th(function () {
      var D = d,
        q = Gc(s),
        Y = [];
      e: {
        var j = e1.get(e);
        if (j !== void 0) {
          var L = Fl,
            Te = e;
          switch (e) {
            case "keypress":
              if (Yl(s) === 0) break e;
            case "keydown":
            case "keyup":
              L = _y;
              break;
            case "focusin":
              (Te = "focus"), (L = Kc);
              break;
            case "focusout":
              (Te = "blur"), (L = Kc);
              break;
            case "beforeblur":
            case "afterblur":
              L = Kc;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = kh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = oy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = wy;
              break;
            case Qh:
            case Kh:
            case Jh:
              L = dy;
              break;
            case Wh:
              L = Ey;
              break;
            case "scroll":
            case "scrollend":
              L = iy;
              break;
            case "wheel":
              L = Ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = hy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Oh;
              break;
            case "toggle":
            case "beforetoggle":
              L = ky;
          }
          var be = (t & 4) !== 0,
            Xe = !be && (e === "scroll" || e === "scrollend"),
            N = be ? (j !== null ? j + "Capture" : null) : j;
          be = [];
          for (var T = D, O; T !== null; ) {
            var P = T;
            if (
              ((O = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                O === null ||
                N === null ||
                ((P = si(T, N)), P != null && be.push(Vi(T, P, O))),
              Xe)
            )
              break;
            T = T.return;
          }
          0 < be.length &&
            ((j = new L(j, Te, null, s, q)),
            Y.push({ event: j, listeners: be }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (L = e === "mouseout" || e === "pointerout"),
            j &&
              s !== Pc &&
              (Te = s.relatedTarget || s.fromElement) &&
              (Qr(Te) || Te[At]))
          )
            break e;
          if (
            (L || j) &&
            ((j =
              q.window === q
                ? q
                : (j = q.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            L
              ? ((Te = s.relatedTarget || s.toElement),
                (L = D),
                (Te = Te ? Qr(Te) : null),
                Te !== null &&
                  ((Xe = u(Te)),
                  (be = Te.tag),
                  Te !== Xe || (be !== 5 && be !== 27 && be !== 6)) &&
                  (Te = null))
              : ((L = null), (Te = D)),
            L !== Te)
          ) {
            if (
              ((be = kh),
              (P = "onMouseLeave"),
              (N = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((be = Oh),
                (P = "onPointerLeave"),
                (N = "onPointerEnter"),
                (T = "pointer")),
              (Xe = L == null ? j : ri(L)),
              (O = Te == null ? j : ri(Te)),
              (j = new be(P, T + "leave", L, s, q)),
              (j.target = Xe),
              (j.relatedTarget = O),
              (P = null),
              Qr(q) === D &&
                ((be = new be(N, T + "enter", Te, s, q)),
                (be.target = O),
                (be.relatedTarget = Xe),
                (P = be)),
              (Xe = P),
              L && Te)
            )
              t: {
                for (be = L, N = Te, T = 0, O = be; O; O = Rs(O)) T++;
                for (O = 0, P = N; P; P = Rs(P)) O++;
                for (; 0 < T - O; ) (be = Rs(be)), T--;
                for (; 0 < O - T; ) (N = Rs(N)), O--;
                for (; T--; ) {
                  if (be === N || (N !== null && be === N.alternate)) break t;
                  (be = Rs(be)), (N = Rs(N));
                }
                be = null;
              }
            else be = null;
            L !== null && _m(Y, j, L, be, !1),
              Te !== null && Xe !== null && _m(Y, Xe, Te, be, !0);
          }
        }
        e: {
          if (
            ((j = D ? ri(D) : window),
            (L = j.nodeName && j.nodeName.toLowerCase()),
            L === "select" || (L === "input" && j.type === "file"))
          )
            var fe = Ih;
          else if (Bh(j))
            if (Hh) fe = Iy;
            else {
              fe = By;
              var Be = Uy;
            }
          else
            (L = j.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? D && qc(D.elementType) && (fe = Ih)
                : (fe = zy);
          if (fe && (fe = fe(e, D))) {
            zh(Y, fe, s, q);
            break e;
          }
          Be && Be(e, j, D),
            e === "focusout" &&
              D &&
              j.type === "number" &&
              D.memoizedProps.value != null &&
              Zc(j, "number", j.value);
        }
        switch (((Be = D ? ri(D) : window), e)) {
          case "focusin":
            (Bh(Be) || Be.contentEditable === "true") &&
              ((is = Be), (au = D), (hi = null));
            break;
          case "focusout":
            hi = au = is = null;
            break;
          case "mousedown":
            ru = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ru = !1), Fh(Y, s, q);
            break;
          case "selectionchange":
            if (Vy) break;
          case "keydown":
          case "keyup":
            Fh(Y, s, q);
        }
        var ye;
        if (Wc)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          ss
            ? Lh(e, s) && (xe = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (xe = "onCompositionStart");
        xe &&
          (Dh &&
            s.locale !== "ko" &&
            (ss || xe !== "onCompositionStart"
              ? xe === "onCompositionEnd" && ss && (ye = Ah())
              : ((Ia = q),
                (Fc = "value" in Ia ? Ia.value : Ia.textContent),
                (ss = !0))),
          (Be = Uo(D, xe)),
          0 < Be.length &&
            ((xe = new Rh(xe, e, null, s, q)),
            Y.push({ event: xe, listeners: Be }),
            ye
              ? (xe.data = ye)
              : ((ye = Uh(s)), ye !== null && (xe.data = ye)))),
          (ye = Oy ? Dy(e, s) : My(e, s)) &&
            ((xe = Uo(D, "onBeforeInput")),
            0 < xe.length &&
              ((Be = new Rh("onBeforeInput", "beforeinput", null, s, q)),
              Y.push({ event: Be, listeners: xe }),
              (Be.data = ye))),
          w3(Y, e, D, s, q);
      }
      vm(Y, t);
    });
  }
  function Vi(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function Uo(e, t) {
    for (var s = t + "Capture", l = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = si(e, s)),
          c != null && l.unshift(Vi(e, c, d)),
          (c = si(e, t)),
          c != null && l.push(Vi(e, c, d))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Rs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _m(e, t, s, l, c) {
    for (var d = t._reactName, y = []; s !== null && s !== l; ) {
      var b = s,
        w = b.alternate,
        D = b.stateNode;
      if (((b = b.tag), w !== null && w === l)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        D === null ||
        ((w = D),
        c
          ? ((D = si(s, d)), D != null && y.unshift(Vi(s, D, w)))
          : c || ((D = si(s, d)), D != null && y.push(Vi(s, D, w)))),
        (s = s.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var A3 = /\r\n?/g,
    N3 = /\u0000|\uFFFD/g;
  function xm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        A3,
        `
`,
      )
      .replace(N3, "");
  }
  function Cm(e, t) {
    return (t = xm(t)), xm(e) === t;
  }
  function Bo() {}
  function Fe(e, t, s, l, c, d) {
    switch (s) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || ns(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            ns(e, "" + l);
        break;
      case "className":
        Vl(e, "class", l);
        break;
      case "tabIndex":
        Vl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vl(e, s, l);
        break;
      case "style":
        Sh(e, l, d);
        break;
      case "data":
        if (t !== "object") {
          Vl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || s !== "href")) {
          e.removeAttribute(s);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(s);
          break;
        }
        (l = Pl("" + l)), e.setAttribute(s, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (s === "formAction"
              ? (t !== "input" && Fe(e, t, "name", c.name, c, null),
                Fe(e, t, "formEncType", c.formEncType, c, null),
                Fe(e, t, "formMethod", c.formMethod, c, null),
                Fe(e, t, "formTarget", c.formTarget, c, null))
              : (Fe(e, t, "encType", c.encType, c, null),
                Fe(e, t, "method", c.method, c, null),
                Fe(e, t, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(s);
          break;
        }
        (l = Pl("" + l)), e.setAttribute(s, l);
        break;
      case "onClick":
        l != null && (e.onclick = Bo);
        break;
      case "onScroll":
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (s = Pl("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(s, "" + l)
          : e.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(s, "")
          : e.removeAttribute(s);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(s, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(s, l)
            : e.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(s, l)
          : e.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(s)
          : e.setAttribute(s, l);
        break;
      case "popover":
        Ie("beforetoggle", e), Ie("toggle", e), Hl(e, "popover", l);
        break;
      case "xlinkActuate":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Hl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = ry.get(s) || s), Hl(e, s, l));
    }
  }
  function Ad(e, t, s, l, c, d) {
    switch (s) {
      case "style":
        Sh(e, l, d);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ns(e, l)
          : (typeof l == "number" || typeof l == "bigint") && ns(e, "" + l);
        break;
      case "onScroll":
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Bo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hh.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((c = s.endsWith("Capture")),
              (t = s.slice(2, c ? s.length - 7 : void 0)),
              (d = e[et] || null),
              (d = d != null ? d[s] : null),
              typeof d == "function" && e.removeEventListener(t, d, c),
              typeof l == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (s in e
                  ? (e[s] = null)
                  : e.hasAttribute(s) && e.removeAttribute(s)),
                e.addEventListener(t, l, c);
              break e;
            }
            s in e
              ? (e[s] = l)
              : l === !0
                ? e.setAttribute(s, "")
                : Hl(e, s, l);
          }
    }
  }
  function Lt(e, t, s) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ie("error", e), Ie("load", e);
        var l = !1,
          c = !1,
          d;
        for (d in s)
          if (s.hasOwnProperty(d)) {
            var y = s[d];
            if (y != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Fe(e, t, d, y, s, null);
              }
          }
        c && Fe(e, t, "srcSet", s.srcSet, s, null),
          l && Fe(e, t, "src", s.src, s, null);
        return;
      case "input":
        Ie("invalid", e);
        var b = (d = y = c = null),
          w = null,
          D = null;
        for (l in s)
          if (s.hasOwnProperty(l)) {
            var q = s[l];
            if (q != null)
              switch (l) {
                case "name":
                  c = q;
                  break;
                case "type":
                  y = q;
                  break;
                case "checked":
                  w = q;
                  break;
                case "defaultChecked":
                  D = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  b = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(i(137, t));
                  break;
                default:
                  Fe(e, t, l, q, s, null);
              }
          }
        _h(e, d, b, w, D, y, c, !1), Zl(e);
        return;
      case "select":
        Ie("invalid", e), (l = y = d = null);
        for (c in s)
          if (s.hasOwnProperty(c) && ((b = s[c]), b != null))
            switch (c) {
              case "value":
                d = b;
                break;
              case "defaultValue":
                y = b;
                break;
              case "multiple":
                l = b;
              default:
                Fe(e, t, c, b, s, null);
            }
        (t = d),
          (s = y),
          (e.multiple = !!l),
          t != null ? ts(e, !!l, t, !1) : s != null && ts(e, !!l, s, !0);
        return;
      case "textarea":
        Ie("invalid", e), (d = c = l = null);
        for (y in s)
          if (s.hasOwnProperty(y) && ((b = s[y]), b != null))
            switch (y) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
                d = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(i(91));
                break;
              default:
                Fe(e, t, y, b, s, null);
            }
        Ch(e, l, c, d), Zl(e);
        return;
      case "option":
        for (w in s)
          if (s.hasOwnProperty(w) && ((l = s[w]), l != null))
            switch (w) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Fe(e, t, w, l, s, null);
            }
        return;
      case "dialog":
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hi.length; l++) Ie(Hi[l], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in s)
          if (s.hasOwnProperty(D) && ((l = s[D]), l != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Fe(e, t, D, l, s, null);
            }
        return;
      default:
        if (qc(t)) {
          for (q in s)
            s.hasOwnProperty(q) &&
              ((l = s[q]), l !== void 0 && Ad(e, t, q, l, s, void 0));
          return;
        }
    }
    for (b in s)
      s.hasOwnProperty(b) && ((l = s[b]), l != null && Fe(e, t, b, l, s, null));
  }
  function k3(e, t, s, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          d = null,
          y = null,
          b = null,
          w = null,
          D = null,
          q = null;
        for (L in s) {
          var Y = s[L];
          if (s.hasOwnProperty(L) && Y != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = Y;
              default:
                l.hasOwnProperty(L) || Fe(e, t, L, null, l, Y);
            }
        }
        for (var j in l) {
          var L = l[j];
          if (((Y = s[j]), l.hasOwnProperty(j) && (L != null || Y != null)))
            switch (j) {
              case "type":
                d = L;
                break;
              case "name":
                c = L;
                break;
              case "checked":
                D = L;
                break;
              case "defaultChecked":
                q = L;
                break;
              case "value":
                y = L;
                break;
              case "defaultValue":
                b = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(i(137, t));
                break;
              default:
                L !== Y && Fe(e, t, j, L, l, Y);
            }
        }
        Vc(e, y, b, w, D, q, d, c);
        return;
      case "select":
        L = y = b = j = null;
        for (d in s)
          if (((w = s[d]), s.hasOwnProperty(d) && w != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                L = w;
              default:
                l.hasOwnProperty(d) || Fe(e, t, d, null, l, w);
            }
        for (c in l)
          if (
            ((d = l[c]),
            (w = s[c]),
            l.hasOwnProperty(c) && (d != null || w != null))
          )
            switch (c) {
              case "value":
                j = d;
                break;
              case "defaultValue":
                b = d;
                break;
              case "multiple":
                y = d;
              default:
                d !== w && Fe(e, t, c, d, l, w);
            }
        (t = b),
          (s = y),
          (l = L),
          j != null
            ? ts(e, !!s, j, !1)
            : !!l != !!s &&
              (t != null ? ts(e, !!s, t, !0) : ts(e, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        L = j = null;
        for (b in s)
          if (
            ((c = s[b]),
            s.hasOwnProperty(b) && c != null && !l.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Fe(e, t, b, null, l, c);
            }
        for (y in l)
          if (
            ((c = l[y]),
            (d = s[y]),
            l.hasOwnProperty(y) && (c != null || d != null))
          )
            switch (y) {
              case "value":
                j = c;
                break;
              case "defaultValue":
                L = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== d && Fe(e, t, y, c, l, d);
            }
        xh(e, j, L);
        return;
      case "option":
        for (var Te in s)
          if (
            ((j = s[Te]),
            s.hasOwnProperty(Te) && j != null && !l.hasOwnProperty(Te))
          )
            switch (Te) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Fe(e, t, Te, null, l, j);
            }
        for (w in l)
          if (
            ((j = l[w]),
            (L = s[w]),
            l.hasOwnProperty(w) && j !== L && (j != null || L != null))
          )
            switch (w) {
              case "selected":
                e.selected =
                  j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Fe(e, t, w, j, l, L);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in s)
          (j = s[be]),
            s.hasOwnProperty(be) &&
              j != null &&
              !l.hasOwnProperty(be) &&
              Fe(e, t, be, null, l, j);
        for (D in l)
          if (
            ((j = l[D]),
            (L = s[D]),
            l.hasOwnProperty(D) && j !== L && (j != null || L != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(i(137, t));
                break;
              default:
                Fe(e, t, D, j, l, L);
            }
        return;
      default:
        if (qc(t)) {
          for (var Xe in s)
            (j = s[Xe]),
              s.hasOwnProperty(Xe) &&
                j !== void 0 &&
                !l.hasOwnProperty(Xe) &&
                Ad(e, t, Xe, void 0, l, j);
          for (q in l)
            (j = l[q]),
              (L = s[q]),
              !l.hasOwnProperty(q) ||
                j === L ||
                (j === void 0 && L === void 0) ||
                Ad(e, t, q, j, l, L);
          return;
        }
    }
    for (var N in s)
      (j = s[N]),
        s.hasOwnProperty(N) &&
          j != null &&
          !l.hasOwnProperty(N) &&
          Fe(e, t, N, null, l, j);
    for (Y in l)
      (j = l[Y]),
        (L = s[Y]),
        !l.hasOwnProperty(Y) ||
          j === L ||
          (j == null && L == null) ||
          Fe(e, t, Y, j, l, L);
  }
  var Nd = null,
    kd = null;
  function zo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Rd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Od = null;
  function R3() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Od
        ? !1
        : ((Od = e), !0)
      : ((Od = null), !1);
  }
  var Em = typeof setTimeout == "function" ? setTimeout : void 0,
    O3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tm = typeof Promise == "function" ? Promise : void 0,
    D3 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Tm < "u"
          ? function (e) {
              return Tm.resolve(null).then(e).catch(M3);
            }
          : Em;
  function M3(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function tr(e) {
    return e === "head";
  }
  function Am(e, t) {
    var s = t,
      l = 0,
      c = 0;
    do {
      var d = s.nextSibling;
      if ((e.removeChild(s), d && d.nodeType === 8))
        if (((s = d.data), s === "/$")) {
          if (0 < l && 8 > l) {
            s = l;
            var y = e.ownerDocument;
            if ((s & 1 && Zi(y.documentElement), s & 2 && Zi(y.body), s & 4))
              for (s = y.head, Zi(s), y = s.firstChild; y; ) {
                var b = y.nextSibling,
                  w = y.nodeName;
                y[ai] ||
                  w === "SCRIPT" ||
                  w === "STYLE" ||
                  (w === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  s.removeChild(y),
                  (y = b);
              }
          }
          if (c === 0) {
            e.removeChild(d), Qi(t);
            return;
          }
          c--;
        } else
          s === "$" || s === "$?" || s === "$!"
            ? c++
            : (l = s.charCodeAt(0) - 48);
      else l = 0;
      s = d;
    } while (s);
    Qi(t);
  }
  function Dd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var s = t;
      switch (((t = t.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Dd(s), Bc(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(s);
    }
  }
  function j3(e, t, s, l) {
    for (; e.nodeType === 1; ) {
      var c = s;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[ai])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = Nn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function L3(e, t, s) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !s) ||
        ((e = Nn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Md(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function U3(e, t) {
    var s = e.ownerDocument;
    if (e.data !== "$?" || s.readyState === "complete") t();
    else {
      var l = function () {
        t(), s.removeEventListener("DOMContentLoaded", l);
      };
      s.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var jd = null;
  function Nm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function km(e, t, s) {
    switch (((t = zo(s)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Zi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Bc(e);
  }
  var xn = new Map(),
    Rm = new Set();
  function Io(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var wa = Q.d;
  Q.d = { f: B3, r: z3, D: I3, C: H3, L: V3, m: Z3, X: P3, S: q3, M: G3 };
  function B3() {
    var e = wa.f(),
      t = Ro();
    return e || t;
  }
  function z3(e) {
    var t = Kr(e);
    t !== null && t.tag === 5 && t.type === "form" ? Q1(t) : wa.r(e);
  }
  var Os = typeof document > "u" ? null : document;
  function Om(e, t, s) {
    var l = Os;
    if (l && typeof t == "string" && t) {
      var c = mn(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof s == "string" && (c += '[crossorigin="' + s + '"]'),
        Rm.has(c) ||
          (Rm.add(c),
          (e = { rel: e, crossOrigin: s, href: t }),
          l.querySelector(c) === null &&
            ((t = l.createElement("link")),
            Lt(t, "link", e),
            Nt(t),
            l.head.appendChild(t)));
    }
  }
  function I3(e) {
    wa.D(e), Om("dns-prefetch", e, null);
  }
  function H3(e, t) {
    wa.C(e, t), Om("preconnect", e, t);
  }
  function V3(e, t, s) {
    wa.L(e, t, s);
    var l = Os;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + mn(t) + '"]';
      t === "image" && s && s.imageSrcSet
        ? ((c += '[imagesrcset="' + mn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (c += '[imagesizes="' + mn(s.imageSizes) + '"]'))
        : (c += '[href="' + mn(e) + '"]');
      var d = c;
      switch (t) {
        case "style":
          d = Ds(e);
          break;
        case "script":
          d = Ms(e);
      }
      xn.has(d) ||
        ((e = _(
          {
            rel: "preload",
            href: t === "image" && s && s.imageSrcSet ? void 0 : e,
            as: t,
          },
          s,
        )),
        xn.set(d, e),
        l.querySelector(c) !== null ||
          (t === "style" && l.querySelector(qi(d))) ||
          (t === "script" && l.querySelector(Pi(d))) ||
          ((t = l.createElement("link")),
          Lt(t, "link", e),
          Nt(t),
          l.head.appendChild(t)));
    }
  }
  function Z3(e, t) {
    wa.m(e, t);
    var s = Os;
    if (s && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + mn(l) + '"][href="' + mn(e) + '"]',
        d = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ms(e);
      }
      if (
        !xn.has(d) &&
        ((e = _({ rel: "modulepreload", href: e }, t)),
        xn.set(d, e),
        s.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(Pi(d))) return;
        }
        (l = s.createElement("link")),
          Lt(l, "link", e),
          Nt(l),
          s.head.appendChild(l);
      }
    }
  }
  function q3(e, t, s) {
    wa.S(e, t, s);
    var l = Os;
    if (l && e) {
      var c = Jr(l).hoistableStyles,
        d = Ds(e);
      t = t || "default";
      var y = c.get(d);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = l.querySelector(qi(d)))) b.loading = 5;
        else {
          (e = _({ rel: "stylesheet", href: e, "data-precedence": t }, s)),
            (s = xn.get(d)) && Ld(e, s);
          var w = (y = l.createElement("link"));
          Nt(w),
            Lt(w, "link", e),
            (w._p = new Promise(function (D, q) {
              (w.onload = D), (w.onerror = q);
            })),
            w.addEventListener("load", function () {
              b.loading |= 1;
            }),
            w.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            Ho(y, t, l);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: b }),
          c.set(d, y);
      }
    }
  }
  function P3(e, t) {
    wa.X(e, t);
    var s = Os;
    if (s && e) {
      var l = Jr(s).hoistableScripts,
        c = Ms(e),
        d = l.get(c);
      d ||
        ((d = s.querySelector(Pi(c))),
        d ||
          ((e = _({ src: e, async: !0 }, t)),
          (t = xn.get(c)) && Ud(e, t),
          (d = s.createElement("script")),
          Nt(d),
          Lt(d, "link", e),
          s.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function G3(e, t) {
    wa.M(e, t);
    var s = Os;
    if (s && e) {
      var l = Jr(s).hoistableScripts,
        c = Ms(e),
        d = l.get(c);
      d ||
        ((d = s.querySelector(Pi(c))),
        d ||
          ((e = _({ src: e, async: !0, type: "module" }, t)),
          (t = xn.get(c)) && Ud(e, t),
          (d = s.createElement("script")),
          Nt(d),
          Lt(d, "link", e),
          s.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        l.set(c, d));
    }
  }
  function Dm(e, t, s, l) {
    var c = (c = le.current) ? Io(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((t = Ds(s.href)),
            (s = Jr(c).hoistableStyles),
            (l = s.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              s.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          e = Ds(s.href);
          var d = Jr(c).hoistableStyles,
            y = d.get(e);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, y),
              (d = c.querySelector(qi(e))) &&
                !d._p &&
                ((y.instance = d), (y.state.loading = 5)),
              xn.has(e) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                xn.set(e, s),
                d || Y3(c, e, s, y.state))),
            t && l === null)
          )
            throw Error(i(528, ""));
          return y;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = s.async),
          (s = s.src),
          typeof s == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ms(s)),
              (s = Jr(c).hoistableScripts),
              (l = s.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Ds(e) {
    return 'href="' + mn(e) + '"';
  }
  function qi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mm(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Y3(e, t, s, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Lt(t, "link", s),
        Nt(t),
        e.head.appendChild(t));
  }
  function Ms(e) {
    return '[src="' + mn(e) + '"]';
  }
  function Pi(e) {
    return "script[async]" + e;
  }
  function jm(e, t, s) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + mn(s.href) + '"]');
          if (l) return (t.instance = l), Nt(l), l;
          var c = _({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Nt(l),
            Lt(l, "style", c),
            Ho(l, s.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          c = Ds(s.href);
          var d = e.querySelector(qi(c));
          if (d) return (t.state.loading |= 4), (t.instance = d), Nt(d), d;
          (l = Mm(s)),
            (c = xn.get(c)) && Ld(l, c),
            (d = (e.ownerDocument || e).createElement("link")),
            Nt(d);
          var y = d;
          return (
            (y._p = new Promise(function (b, w) {
              (y.onload = b), (y.onerror = w);
            })),
            Lt(d, "link", l),
            (t.state.loading |= 4),
            Ho(d, s.precedence, e),
            (t.instance = d)
          );
        case "script":
          return (
            (d = Ms(s.src)),
            (c = e.querySelector(Pi(d)))
              ? ((t.instance = c), Nt(c), c)
              : ((l = s),
                (c = xn.get(d)) && ((l = _({}, s)), Ud(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                Nt(c),
                Lt(c, "link", l),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Ho(l, s.precedence, e));
    return t.instance;
  }
  function Ho(e, t, s) {
    for (
      var l = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = l.length ? l[l.length - 1] : null,
        d = c,
        y = 0;
      y < l.length;
      y++
    ) {
      var b = l[y];
      if (b.dataset.precedence === t) d = b;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((t = s.nodeType === 9 ? s.head : s), t.insertBefore(e, t.firstChild));
  }
  function Ld(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Ud(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Vo = null;
  function Lm(e, t, s) {
    if (Vo === null) {
      var l = new Map(),
        c = (Vo = new Map());
      c.set(s, l);
    } else (c = Vo), (l = c.get(s)), l || ((l = new Map()), c.set(s, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), s = s.getElementsByTagName(e), c = 0;
      c < s.length;
      c++
    ) {
      var d = s[c];
      if (
        !(
          d[ai] ||
          d[mt] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = d.getAttribute(t) || "";
        y = e + y;
        var b = l.get(y);
        b ? b.push(d) : l.set(y, [d]);
      }
    }
    return l;
  }
  function Um(e, t, s) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        s,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function $3(e, t, s) {
    if (s === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Gi = null;
  function F3() {}
  function X3(e, t, s) {
    if (Gi === null) throw Error(i(475));
    var l = Gi;
    if (
      t.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Ds(s.href),
          d = e.querySelector(qi(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Zo.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = d),
            Nt(d);
          return;
        }
        (d = e.ownerDocument || e),
          (s = Mm(s)),
          (c = xn.get(c)) && Ld(s, c),
          (d = d.createElement("link")),
          Nt(d);
        var y = d;
        (y._p = new Promise(function (b, w) {
          (y.onload = b), (y.onerror = w);
        })),
          Lt(d, "link", s),
          (t.instance = d);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Zo.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Q3() {
    if (Gi === null) throw Error(i(475));
    var e = Gi;
    return (
      e.stylesheets && e.count === 0 && Bd(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var s = setTimeout(function () {
              if ((e.stylesheets && Bd(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Zo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Bd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var qo = null;
  function Bd(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (qo = new Map()),
        t.forEach(K3, e),
        (qo = null),
        Zo.call(e));
  }
  function K3(e, t) {
    if (!(t.state.loading & 4)) {
      var s = qo.get(e);
      if (s) var l = s.get(null);
      else {
        (s = new Map()), qo.set(e, s);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var y = c[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (s.set(y.dataset.precedence, y), (l = y));
        }
        l && s.set(null, l);
      }
      (c = t.instance),
        (y = c.getAttribute("data-precedence")),
        (d = s.get(y) || l),
        d === l && s.set(null, c),
        s.set(y, c),
        this.count++,
        (l = Zo.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Yi = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0,
  };
  function J3(e, t, s, l, c, d, y, b) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ni(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ni(0)),
      (this.hiddenUpdates = ni(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function zm(e, t, s, l, c, d, y, b, w, D, q, Y) {
    return (
      (e = new J3(e, t, s, y, b, w, D, Y)),
      (t = 1),
      d === !0 && (t |= 24),
      (d = tn(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (t = vu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (d.memoizedState = { element: l, isDehydrated: s, cache: t }),
      Cu(d),
      e
    );
  }
  function Im(e) {
    return e ? ((e = us), e) : us;
  }
  function Hm(e, t, s, l, c, d) {
    (c = Im(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Za(t)),
      (l.payload = { element: s }),
      (d = d === void 0 ? null : d),
      d !== null && (l.callback = d),
      (s = qa(e, l, t)),
      s !== null && (ln(s, e, t), Ci(s, e, t));
  }
  function Vm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function zd(e, t) {
    Vm(e, t), (e = e.alternate) && Vm(e, t);
  }
  function Zm(e) {
    if (e.tag === 13) {
      var t = cs(e, 67108864);
      t !== null && ln(t, e, 67108864), zd(e, 67108864);
    }
  }
  var Po = !0;
  function W3(e, t, s, l) {
    var c = k.T;
    k.T = null;
    var d = Q.p;
    try {
      (Q.p = 2), Id(e, t, s, l);
    } finally {
      (Q.p = d), (k.T = c);
    }
  }
  function ev(e, t, s, l) {
    var c = k.T;
    k.T = null;
    var d = Q.p;
    try {
      (Q.p = 8), Id(e, t, s, l);
    } finally {
      (Q.p = d), (k.T = c);
    }
  }
  function Id(e, t, s, l) {
    if (Po) {
      var c = Hd(l);
      if (c === null) Td(e, t, l, Go, s), Pm(e, l);
      else if (nv(c, e, t, s, l)) l.stopPropagation();
      else if ((Pm(e, l), t & 4 && -1 < tv.indexOf(e))) {
        for (; c !== null; ) {
          var d = Kr(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var y = fn(d.pendingLanes);
                  if (y !== 0) {
                    var b = d;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var w = 1 << (31 - _e(y));
                      (b.entanglements[1] |= w), (y &= ~w);
                    }
                    Fn(d), (Ge & 6) === 0 && ((No = Ct() + 500), Ii(0));
                  }
                }
                break;
              case 13:
                (b = cs(d, 2)), b !== null && ln(b, d, 2), Ro(), zd(d, 2);
            }
          if (((d = Hd(l)), d === null && Td(e, t, l, Go, s), d === c)) break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else Td(e, t, l, null, s);
    }
  }
  function Hd(e) {
    return (e = Gc(e)), Vd(e);
  }
  var Go = null;
  function Vd(e) {
    if (((Go = null), (e = Qr(e)), e !== null)) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var s = t.tag;
        if (s === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Go = e), null;
  }
  function qm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Fr()) {
          case Yt:
            return 2;
          case ti:
            return 8;
          case ia:
          case S:
            return 32;
          case M:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zd = !1,
    nr = null,
    ar = null,
    rr = null,
    $i = new Map(),
    Fi = new Map(),
    sr = [],
    tv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Pm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        nr = null;
        break;
      case "dragenter":
      case "dragleave":
        ar = null;
        break;
      case "mouseover":
      case "mouseout":
        rr = null;
        break;
      case "pointerover":
      case "pointerout":
        $i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fi.delete(t.pointerId);
    }
  }
  function Xi(e, t, s, l, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: d,
          targetContainers: [c],
        }),
        t !== null && ((t = Kr(t)), t !== null && Zm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function nv(e, t, s, l, c) {
    switch (t) {
      case "focusin":
        return (nr = Xi(nr, e, t, s, l, c)), !0;
      case "dragenter":
        return (ar = Xi(ar, e, t, s, l, c)), !0;
      case "mouseover":
        return (rr = Xi(rr, e, t, s, l, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return $i.set(d, Xi($i.get(d) || null, e, t, s, l, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), Fi.set(d, Xi(Fi.get(d) || null, e, t, s, l, c)), !0
        );
    }
    return !1;
  }
  function Gm(e) {
    var t = Qr(e.target);
    if (t !== null) {
      var s = u(t);
      if (s !== null) {
        if (((t = s.tag), t === 13)) {
          if (((t = f(s)), t !== null)) {
            (e.blockedOn = t),
              wt(e.priority, function () {
                if (s.tag === 13) {
                  var l = sn();
                  l = vt(l);
                  var c = cs(s, l);
                  c !== null && ln(c, s, l), zd(s, l);
                }
              });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = Hd(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        (Pc = l), s.target.dispatchEvent(l), (Pc = null);
      } else return (t = Kr(s)), t !== null && Zm(t), (e.blockedOn = s), !1;
      t.shift();
    }
    return !0;
  }
  function Ym(e, t, s) {
    Yo(e) && s.delete(t);
  }
  function av() {
    (Zd = !1),
      nr !== null && Yo(nr) && (nr = null),
      ar !== null && Yo(ar) && (ar = null),
      rr !== null && Yo(rr) && (rr = null),
      $i.forEach(Ym),
      Fi.forEach(Ym);
  }
  function $o(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zd ||
        ((Zd = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, av)));
  }
  var Fo = null;
  function $m(e) {
    Fo !== e &&
      ((Fo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Fo === e && (Fo = null);
        for (var t = 0; t < e.length; t += 3) {
          var s = e[t],
            l = e[t + 1],
            c = e[t + 2];
          if (typeof l != "function") {
            if (Vd(l || s) === null) continue;
            break;
          }
          var d = Kr(s);
          d !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Vu(d, { pending: !0, data: c, method: s.method, action: l }, l, c));
        }
      }));
  }
  function Qi(e) {
    function t(w) {
      return $o(w, e);
    }
    nr !== null && $o(nr, e),
      ar !== null && $o(ar, e),
      rr !== null && $o(rr, e),
      $i.forEach(t),
      Fi.forEach(t);
    for (var s = 0; s < sr.length; s++) {
      var l = sr[s];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < sr.length && ((s = sr[0]), s.blockedOn === null); )
      Gm(s), s.blockedOn === null && sr.shift();
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (l = 0; l < s.length; l += 3) {
        var c = s[l],
          d = s[l + 1],
          y = c[et] || null;
        if (typeof d == "function") y || $m(s);
        else if (y) {
          var b = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (y = d[et] || null))) b = y.formAction;
            else if (Vd(c) !== null) continue;
          } else b = y.action;
          typeof b == "function" ? (s[l + 1] = b) : (s.splice(l, 3), (l -= 3)),
            $m(s);
        }
      }
  }
  function qd(e) {
    this._internalRoot = e;
  }
  (Xo.prototype.render = qd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var s = t.current,
        l = sn();
      Hm(s, l, e, t, null, null);
    }),
    (Xo.prototype.unmount = qd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Hm(e.current, 2, null, e, null, null), Ro(), (t[At] = null);
        }
      });
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = br();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < sr.length && t !== 0 && t < sr[s].priority; s++);
      sr.splice(s, 0, e), s === 0 && Gm(e);
    }
  };
  var Fm = n.version;
  if (Fm !== "19.1.0") throw Error(i(527, Fm, "19.1.0"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var rv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        (ee = Qo.inject(rv)), (X = Qo);
      } catch {}
  }
  return (
    (Ji.createRoot = function (e, t) {
      if (!o(e)) throw Error(i(299));
      var s = !1,
        l = "",
        c = u2,
        d = d2,
        y = f2,
        b = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (s = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (d = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (b = t.unstable_transitionCallbacks)),
        (t = zm(e, 1, !1, null, null, s, l, c, d, y, b, null)),
        (e[At] = t.current),
        Ed(e),
        new qd(t)
      );
    }),
    (Ji.hydrateRoot = function (e, t, s) {
      if (!o(e)) throw Error(i(299));
      var l = !1,
        c = "",
        d = u2,
        y = d2,
        b = f2,
        w = null,
        D = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (l = !0),
          s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (d = s.onUncaughtError),
          s.onCaughtError !== void 0 && (y = s.onCaughtError),
          s.onRecoverableError !== void 0 && (b = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (w = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (D = s.formState)),
        (t = zm(e, 1, !0, t, s ?? null, l, c, d, y, b, w, D)),
        (t.context = Im(null)),
        (s = t.current),
        (l = sn()),
        (l = vt(l)),
        (c = Za(l)),
        (c.callback = null),
        qa(s, c, l),
        (s = l),
        (t.current.lanes = s),
        za(t, s),
        Fn(t),
        (e[At] = t.current),
        Ed(e),
        new Xo(t)
      );
    }),
    (Ji.version = "19.1.0"),
    Ji
  );
}
var r0;
function hv() {
  if (r0) return Yd.exports;
  r0 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (Yd.exports = fv()), Yd.exports;
}
var mv = hv(),
  Wi = {},
  s0;
function pv() {
  if (s0) return Wi;
  (s0 = 1),
    Object.defineProperty(Wi, "__esModule", { value: !0 }),
    (Wi.parse = f),
    (Wi.serialize = m);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    u = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function f(C, R) {
    const A = new u(),
      G = C.length;
    if (G < 2) return A;
    const H = (R == null ? void 0 : R.decode) || _;
    let B = 0;
    do {
      const I = C.indexOf("=", B);
      if (I === -1) break;
      const V = C.indexOf(";", B),
        te = V === -1 ? G : V;
      if (I > te) {
        B = C.lastIndexOf(";", I - 1) + 1;
        continue;
      }
      const U = h(C, B, I),
        ne = g(C, I, U),
        $ = C.slice(U, ne);
      if (A[$] === void 0) {
        let me = h(C, I + 1, te),
          ve = g(C, te, me);
        const Re = H(C.slice(me, ve));
        A[$] = Re;
      }
      B = te + 1;
    } while (B < G);
    return A;
  }
  function h(C, R, A) {
    do {
      const G = C.charCodeAt(R);
      if (G !== 32 && G !== 9) return R;
    } while (++R < A);
    return A;
  }
  function g(C, R, A) {
    for (; R > A; ) {
      const G = C.charCodeAt(--R);
      if (G !== 32 && G !== 9) return R + 1;
    }
    return A;
  }
  function m(C, R, A) {
    const G = (A == null ? void 0 : A.encode) || encodeURIComponent;
    if (!a.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const H = G(R);
    if (!n.test(H)) throw new TypeError(`argument val is invalid: ${R}`);
    let B = C + "=" + H;
    if (!A) return B;
    if (A.maxAge !== void 0) {
      if (!Number.isInteger(A.maxAge))
        throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
      B += "; Max-Age=" + A.maxAge;
    }
    if (A.domain) {
      if (!r.test(A.domain))
        throw new TypeError(`option domain is invalid: ${A.domain}`);
      B += "; Domain=" + A.domain;
    }
    if (A.path) {
      if (!i.test(A.path))
        throw new TypeError(`option path is invalid: ${A.path}`);
      B += "; Path=" + A.path;
    }
    if (A.expires) {
      if (!v(A.expires) || !Number.isFinite(A.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${A.expires}`);
      B += "; Expires=" + A.expires.toUTCString();
    }
    if (
      (A.httpOnly && (B += "; HttpOnly"),
      A.secure && (B += "; Secure"),
      A.partitioned && (B += "; Partitioned"),
      A.priority)
    )
      switch (
        typeof A.priority == "string" ? A.priority.toLowerCase() : void 0
      ) {
        case "low":
          B += "; Priority=Low";
          break;
        case "medium":
          B += "; Priority=Medium";
          break;
        case "high":
          B += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${A.priority}`);
      }
    if (A.sameSite)
      switch (
        typeof A.sameSite == "string" ? A.sameSite.toLowerCase() : A.sameSite
      ) {
        case !0:
        case "strict":
          B += "; SameSite=Strict";
          break;
        case "lax":
          B += "; SameSite=Lax";
          break;
        case "none":
          B += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${A.sameSite}`);
      }
    return B;
  }
  function _(C) {
    if (C.indexOf("%") === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function v(C) {
    return o.call(C) === "[object Date]";
  }
  return Wi;
}
pv();
var i0 = "popstate";
function gv(a = {}) {
  function n(i, o) {
    let { pathname: u, search: f, hash: h } = i.location;
    return mf(
      "",
      { pathname: u, search: f, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function r(i, o) {
    return typeof o == "string" ? o : cl(o);
  }
  return vv(n, r, null, a);
}
function rt(a, n) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(n);
}
function Cn(a, n) {
  if (!a) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function yv() {
  return Math.random().toString(36).substring(2, 10);
}
function l0(a, n) {
  return { usr: a.state, key: a.key, idx: n };
}
function mf(a, n, r = null, i) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Xs(n) : n),
    state: r,
    key: (n && n.key) || i || yv(),
  };
}
function cl({ pathname: a = "/", search: n = "", hash: r = "" }) {
  return (
    n && n !== "?" && (a += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (a += r.charAt(0) === "#" ? r : "#" + r),
    a
  );
}
function Xs(a) {
  let n = {};
  if (a) {
    let r = a.indexOf("#");
    r >= 0 && ((n.hash = a.substring(r)), (a = a.substring(0, r)));
    let i = a.indexOf("?");
    i >= 0 && ((n.search = a.substring(i)), (a = a.substring(0, i))),
      a && (n.pathname = a);
  }
  return n;
}
function vv(a, n, r, i = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = i,
    f = o.history,
    h = "POP",
    g = null,
    m = _();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
  function _() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    h = "POP";
    let H = _(),
      B = H == null ? null : H - m;
    (m = H), g && g({ action: h, location: G.location, delta: B });
  }
  function C(H, B) {
    h = "PUSH";
    let I = mf(G.location, H, B);
    m = _() + 1;
    let V = l0(I, m),
      te = G.createHref(I);
    try {
      f.pushState(V, "", te);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError") throw U;
      o.location.assign(te);
    }
    u && g && g({ action: h, location: G.location, delta: 1 });
  }
  function R(H, B) {
    h = "REPLACE";
    let I = mf(G.location, H, B);
    m = _();
    let V = l0(I, m),
      te = G.createHref(I);
    f.replaceState(V, "", te),
      u && g && g({ action: h, location: G.location, delta: 0 });
  }
  function A(H) {
    let B = o.location.origin !== "null" ? o.location.origin : o.location.href,
      I = typeof H == "string" ? H : cl(H);
    return (
      (I = I.replace(/ $/, "%20")),
      rt(
        B,
        `No window.location.(origin|href) available to create URL for href: ${I}`,
      ),
      new URL(I, B)
    );
  }
  let G = {
    get action() {
      return h;
    },
    get location() {
      return a(o, f);
    },
    listen(H) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(i0, v),
        (g = H),
        () => {
          o.removeEventListener(i0, v), (g = null);
        }
      );
    },
    createHref(H) {
      return n(o, H);
    },
    createURL: A,
    encodeLocation(H) {
      let B = A(H);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: C,
    replace: R,
    go(H) {
      return f.go(H);
    },
  };
  return G;
}
function mp(a, n, r = "/") {
  return bv(a, n, r, !1);
}
function bv(a, n, r, i) {
  let o = typeof n == "string" ? Xs(n) : n,
    u = Da(o.pathname || "/", r);
  if (u == null) return null;
  let f = pp(a);
  _v(f);
  let h = null;
  for (let g = 0; h == null && g < f.length; ++g) {
    let m = Ov(u);
    h = kv(f[g], m, i);
  }
  return h;
}
function pp(a, n = [], r = [], i = "") {
  let o = (u, f, h) => {
    let g = {
      relativePath: h === void 0 ? u.path || "" : h,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    g.relativePath.startsWith("/") &&
      (rt(
        g.relativePath.startsWith(i),
        `Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (g.relativePath = g.relativePath.slice(i.length)));
    let m = Oa([i, g.relativePath]),
      _ = r.concat(g);
    u.children &&
      u.children.length > 0 &&
      (rt(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      pp(u.children, n, _, m)),
      !(u.path == null && !u.index) &&
        n.push({ path: m, score: Av(m, u.index), routesMeta: _ });
  };
  return (
    a.forEach((u, f) => {
      var h;
      if (u.path === "" || !((h = u.path) != null && h.includes("?"))) o(u, f);
      else for (let g of gp(u.path)) o(u, f, g);
    }),
    n
  );
}
function gp(a) {
  let n = a.split("/");
  if (n.length === 0) return [];
  let [r, ...i] = n,
    o = r.endsWith("?"),
    u = r.replace(/\?$/, "");
  if (i.length === 0) return o ? [u, ""] : [u];
  let f = gp(i.join("/")),
    h = [];
  return (
    h.push(...f.map((g) => (g === "" ? u : [u, g].join("/")))),
    o && h.push(...f),
    h.map((g) => (a.startsWith("/") && g === "" ? "/" : g))
  );
}
function _v(a) {
  a.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : Nv(
          n.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
var xv = /^:[\w-]+$/,
  Cv = 3,
  wv = 2,
  Sv = 1,
  Ev = 10,
  Tv = -2,
  o0 = (a) => a === "*";
function Av(a, n) {
  let r = a.split("/"),
    i = r.length;
  return (
    r.some(o0) && (i += Tv),
    n && (i += wv),
    r
      .filter((o) => !o0(o))
      .reduce((o, u) => o + (xv.test(u) ? Cv : u === "" ? Sv : Ev), i)
  );
}
function Nv(a, n) {
  return a.length === n.length && a.slice(0, -1).every((i, o) => i === n[o])
    ? a[a.length - 1] - n[n.length - 1]
    : 0;
}
function kv(a, n, r = !1) {
  let { routesMeta: i } = a,
    o = {},
    u = "/",
    f = [];
  for (let h = 0; h < i.length; ++h) {
    let g = i[h],
      m = h === i.length - 1,
      _ = u === "/" ? n : n.slice(u.length) || "/",
      v = cc(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        _,
      ),
      C = g.route;
    if (
      (!v &&
        m &&
        r &&
        !i[i.length - 1].route.index &&
        (v = cc(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          _,
        )),
      !v)
    )
      return null;
    Object.assign(o, v.params),
      f.push({
        params: o,
        pathname: Oa([u, v.pathname]),
        pathnameBase: Lv(Oa([u, v.pathnameBase])),
        route: C,
      }),
      v.pathnameBase !== "/" && (u = Oa([u, v.pathnameBase]));
  }
  return f;
}
function cc(a, n) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [r, i] = Rv(a.path, a.caseSensitive, a.end),
    o = n.match(r);
  if (!o) return null;
  let u = o[0],
    f = u.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: i.reduce((m, { paramName: _, isOptional: v }, C) => {
      if (_ === "*") {
        let A = h[C] || "";
        f = u.slice(0, u.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const R = h[C];
      return (
        v && !R ? (m[_] = void 0) : (m[_] = (R || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: a,
  };
}
function Rv(a, n = !1, r = !0) {
  Cn(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let i = [],
    o =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, g) => (
            i.push({ paramName: h, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    a.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (o += "\\/*$")
        : a !== "" && a !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), i]
  );
}
function Ov(a) {
  try {
    return a
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Cn(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`,
      ),
      a
    );
  }
}
function Da(a, n) {
  if (n === "/") return a;
  if (!a.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    i = a.charAt(r);
  return i && i !== "/" ? null : a.slice(r) || "/";
}
function Dv(a, n = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: o = "",
  } = typeof a == "string" ? Xs(a) : a;
  return {
    pathname: r ? (r.startsWith("/") ? r : Mv(r, n)) : n,
    search: Uv(i),
    hash: Bv(o),
  };
}
function Mv(a, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Qd(a, n, r, i) {
  return `Cannot include a '${a}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function jv(a) {
  return a.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function jf(a) {
  let n = jv(a);
  return n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase));
}
function Lf(a, n, r, i = !1) {
  let o;
  typeof a == "string"
    ? (o = Xs(a))
    : ((o = { ...a }),
      rt(
        !o.pathname || !o.pathname.includes("?"),
        Qd("?", "pathname", "search", o),
      ),
      rt(
        !o.pathname || !o.pathname.includes("#"),
        Qd("#", "pathname", "hash", o),
      ),
      rt(!o.search || !o.search.includes("#"), Qd("#", "search", "hash", o)));
  let u = a === "" || o.pathname === "",
    f = u ? "/" : o.pathname,
    h;
  if (f == null) h = r;
  else {
    let v = n.length - 1;
    if (!i && f.startsWith("..")) {
      let C = f.split("/");
      for (; C[0] === ".."; ) C.shift(), (v -= 1);
      o.pathname = C.join("/");
    }
    h = v >= 0 ? n[v] : "/";
  }
  let g = Dv(o, h),
    m = f && f !== "/" && f.endsWith("/"),
    _ = (u || f === ".") && r.endsWith("/");
  return !g.pathname.endsWith("/") && (m || _) && (g.pathname += "/"), g;
}
var Oa = (a) => a.join("/").replace(/\/\/+/g, "/"),
  Lv = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Uv = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  Bv = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function zv(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var yp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(yp);
var Iv = ["GET", ...yp];
new Set(Iv);
var Qs = x.createContext(null);
Qs.displayName = "DataRouter";
var Rc = x.createContext(null);
Rc.displayName = "DataRouterState";
var vp = x.createContext({ isTransitioning: !1 });
vp.displayName = "ViewTransition";
var Hv = x.createContext(new Map());
Hv.displayName = "Fetchers";
var Vv = x.createContext(null);
Vv.displayName = "Await";
var Bn = x.createContext(null);
Bn.displayName = "Navigation";
var Al = x.createContext(null);
Al.displayName = "Location";
var wn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 });
wn.displayName = "Route";
var Uf = x.createContext(null);
Uf.displayName = "RouteError";
function Zv(a, { relative: n } = {}) {
  rt(
    Ks(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: i } = x.useContext(Bn),
    { hash: o, pathname: u, search: f } = Nl(a, { relative: n }),
    h = u;
  return (
    r !== "/" && (h = u === "/" ? r : Oa([r, u])),
    i.createHref({ pathname: h, search: f, hash: o })
  );
}
function Ks() {
  return x.useContext(Al) != null;
}
function un() {
  return (
    rt(
      Ks(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    x.useContext(Al).location
  );
}
var bp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _p(a) {
  x.useContext(Bn).static || x.useLayoutEffect(a);
}
function Ua() {
  let { isDataRoute: a } = x.useContext(wn);
  return a ? a4() : qv();
}
function qv() {
  rt(
    Ks(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = x.useContext(Qs),
    { basename: n, navigator: r } = x.useContext(Bn),
    { matches: i } = x.useContext(wn),
    { pathname: o } = un(),
    u = JSON.stringify(jf(i)),
    f = x.useRef(!1);
  return (
    _p(() => {
      f.current = !0;
    }),
    x.useCallback(
      (g, m = {}) => {
        if ((Cn(f.current, bp), !f.current)) return;
        if (typeof g == "number") {
          r.go(g);
          return;
        }
        let _ = Lf(g, JSON.parse(u), o, m.relative === "path");
        a == null &&
          n !== "/" &&
          (_.pathname = _.pathname === "/" ? n : Oa([n, _.pathname])),
          (m.replace ? r.replace : r.push)(_, m.state, m);
      },
      [n, r, u, o, a],
    )
  );
}
var Pv = x.createContext(null);
function Gv(a) {
  let n = x.useContext(wn).outlet;
  return n && x.createElement(Pv.Provider, { value: a }, n);
}
function Bf() {
  let { matches: a } = x.useContext(wn),
    n = a[a.length - 1];
  return n ? n.params : {};
}
function Nl(a, { relative: n } = {}) {
  let { matches: r } = x.useContext(wn),
    { pathname: i } = un(),
    o = JSON.stringify(jf(r));
  return x.useMemo(() => Lf(a, JSON.parse(o), i, n === "path"), [a, o, i, n]);
}
function Yv(a, n) {
  return xp(a, n);
}
function xp(a, n, r, i) {
  var I;
  rt(
    Ks(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: o, static: u } = x.useContext(Bn),
    { matches: f } = x.useContext(wn),
    h = f[f.length - 1],
    g = h ? h.params : {},
    m = h ? h.pathname : "/",
    _ = h ? h.pathnameBase : "/",
    v = h && h.route;
  {
    let V = (v && v.path) || "";
    Cp(
      m,
      !v || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`,
    );
  }
  let C = un(),
    R;
  if (n) {
    let V = typeof n == "string" ? Xs(n) : n;
    rt(
      _ === "/" || ((I = V.pathname) == null ? void 0 : I.startsWith(_)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${V.pathname}" was given in the \`location\` prop.`,
    ),
      (R = V);
  } else R = C;
  let A = R.pathname || "/",
    G = A;
  if (_ !== "/") {
    let V = _.replace(/^\//, "").split("/");
    G = "/" + A.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let H =
    !u && r && r.matches && r.matches.length > 0
      ? r.matches
      : mp(a, { pathname: G });
  Cn(
    v || H != null,
    `No routes matched location "${R.pathname}${R.search}${R.hash}" `,
  ),
    Cn(
      H == null ||
        H[H.length - 1].route.element !== void 0 ||
        H[H.length - 1].route.Component !== void 0 ||
        H[H.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let B = Kv(
    H &&
      H.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, g, V.params),
          pathname: Oa([
            _,
            o.encodeLocation
              ? o.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? _
              : Oa([
                  _,
                  o.encodeLocation
                    ? o.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        }),
      ),
    f,
    r,
    i,
  );
  return n && B
    ? x.createElement(
        Al.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...R,
            },
            navigationType: "POP",
          },
        },
        B,
      )
    : B;
}
function $v() {
  let a = n4(),
    n = zv(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    r = a instanceof Error ? a.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    u = { padding: "2px 4px", backgroundColor: i },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (f = x.createElement(
      x.Fragment,
      null,
      x.createElement("p", null, "💿 Hey developer 👋"),
      x.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        x.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        x.createElement("code", { style: u }, "errorElement"),
        " prop on your route.",
      ),
    )),
    x.createElement(
      x.Fragment,
      null,
      x.createElement("h2", null, "Unexpected Application Error!"),
      x.createElement("h3", { style: { fontStyle: "italic" } }, n),
      r ? x.createElement("pre", { style: o }, r) : null,
      f,
    )
  );
}
var Fv = x.createElement($v, null),
  Xv = class extends x.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, n) {
      return n.location !== a.location ||
        (n.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : n.error,
            location: n.location,
            revalidation: a.revalidation || n.revalidation,
          };
    }
    componentDidCatch(a, n) {
      console.error(
        "React Router caught the following error during render",
        a,
        n,
      );
    }
    render() {
      return this.state.error !== void 0
        ? x.createElement(
            wn.Provider,
            { value: this.props.routeContext },
            x.createElement(Uf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Qv({ routeContext: a, match: n, children: r }) {
  let i = x.useContext(Qs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(wn.Provider, { value: a }, r)
  );
}
function Kv(a, n = [], r = null, i = null) {
  if (a == null) {
    if (!r) return null;
    if (r.errors) a = r.matches;
    else if (n.length === 0 && !r.initialized && r.matches.length > 0)
      a = r.matches;
    else return null;
  }
  let o = a,
    u = r == null ? void 0 : r.errors;
  if (u != null) {
    let g = o.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0,
    );
    rt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`,
    ),
      (o = o.slice(0, Math.min(o.length, g + 1)));
  }
  let f = !1,
    h = -1;
  if (r)
    for (let g = 0; g < o.length; g++) {
      let m = o[g];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = g),
        m.route.id)
      ) {
        let { loaderData: _, errors: v } = r,
          C =
            m.route.loader &&
            !_.hasOwnProperty(m.route.id) &&
            (!v || v[m.route.id] === void 0);
        if (m.route.lazy || C) {
          (f = !0), h >= 0 ? (o = o.slice(0, h + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((g, m, _) => {
    let v,
      C = !1,
      R = null,
      A = null;
    r &&
      ((v = u && m.route.id ? u[m.route.id] : void 0),
      (R = m.route.errorElement || Fv),
      f &&
        (h < 0 && _ === 0
          ? (Cp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (C = !0),
            (A = null))
          : h === _ &&
            ((C = !0), (A = m.route.hydrateFallbackElement || null))));
    let G = n.concat(o.slice(0, _ + 1)),
      H = () => {
        let B;
        return (
          v
            ? (B = R)
            : C
              ? (B = A)
              : m.route.Component
                ? (B = x.createElement(m.route.Component, null))
                : m.route.element
                  ? (B = m.route.element)
                  : (B = g),
          x.createElement(Qv, {
            match: m,
            routeContext: { outlet: g, matches: G, isDataRoute: r != null },
            children: B,
          })
        );
      };
    return r && (m.route.ErrorBoundary || m.route.errorElement || _ === 0)
      ? x.createElement(Xv, {
          location: r.location,
          revalidation: r.revalidation,
          component: R,
          error: v,
          children: H(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
        })
      : H();
  }, null);
}
function zf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jv(a) {
  let n = x.useContext(Qs);
  return rt(n, zf(a)), n;
}
function Wv(a) {
  let n = x.useContext(Rc);
  return rt(n, zf(a)), n;
}
function e4(a) {
  let n = x.useContext(wn);
  return rt(n, zf(a)), n;
}
function If(a) {
  let n = e4(a),
    r = n.matches[n.matches.length - 1];
  return (
    rt(
      r.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function t4() {
  return If("useRouteId");
}
function n4() {
  var i;
  let a = x.useContext(Uf),
    n = Wv("useRouteError"),
    r = If("useRouteError");
  return a !== void 0 ? a : (i = n.errors) == null ? void 0 : i[r];
}
function a4() {
  let { router: a } = Jv("useNavigate"),
    n = If("useNavigate"),
    r = x.useRef(!1);
  return (
    _p(() => {
      r.current = !0;
    }),
    x.useCallback(
      async (o, u = {}) => {
        Cn(r.current, bp),
          r.current &&
            (typeof o == "number"
              ? a.navigate(o)
              : await a.navigate(o, { fromRouteId: n, ...u }));
      },
      [a, n],
    )
  );
}
var c0 = {};
function Cp(a, n, r) {
  !n && !c0[a] && ((c0[a] = !0), Cn(!1, r));
}
x.memo(r4);
function r4({ routes: a, future: n, state: r }) {
  return xp(a, void 0, r, n);
}
function wp({ to: a, replace: n, state: r, relative: i }) {
  rt(
    Ks(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: o } = x.useContext(Bn);
  Cn(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: u } = x.useContext(wn),
    { pathname: f } = un(),
    h = Ua(),
    g = Lf(a, jf(u), f, i === "path"),
    m = JSON.stringify(g);
  return (
    x.useEffect(() => {
      h(JSON.parse(m), { replace: n, state: r, relative: i });
    }, [h, m, i, n, r]),
    null
  );
}
function s4(a) {
  return Gv(a.context);
}
function Qn(a) {
  rt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function i4({
  basename: a = "/",
  children: n = null,
  location: r,
  navigationType: i = "POP",
  navigator: o,
  static: u = !1,
}) {
  rt(
    !Ks(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let f = a.replace(/^\/*/, "/"),
    h = x.useMemo(
      () => ({ basename: f, navigator: o, static: u, future: {} }),
      [f, o, u],
    );
  typeof r == "string" && (r = Xs(r));
  let {
      pathname: g = "/",
      search: m = "",
      hash: _ = "",
      state: v = null,
      key: C = "default",
    } = r,
    R = x.useMemo(() => {
      let A = Da(g, f);
      return A == null
        ? null
        : {
            location: { pathname: A, search: m, hash: _, state: v, key: C },
            navigationType: i,
          };
    }, [f, g, m, _, v, C, i]);
  return (
    Cn(
      R != null,
      `<Router basename="${f}"> is not able to match the URL "${g}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    R == null
      ? null
      : x.createElement(
          Bn.Provider,
          { value: h },
          x.createElement(Al.Provider, { children: n, value: R }),
        )
  );
}
function l4({ children: a, location: n }) {
  return Yv(pf(a), n);
}
function pf(a, n = []) {
  let r = [];
  return (
    x.Children.forEach(a, (i, o) => {
      if (!x.isValidElement(i)) return;
      let u = [...n, o];
      if (i.type === x.Fragment) {
        r.push.apply(r, pf(i.props.children, u));
        return;
      }
      rt(
        i.type === Qn,
        `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        rt(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes.",
        );
      let f = {
        id: i.props.id || u.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (f.children = pf(i.props.children, u)), r.push(f);
    }),
    r
  );
}
var tc = "get",
  nc = "application/x-www-form-urlencoded";
function Oc(a) {
  return a != null && typeof a.tagName == "string";
}
function o4(a) {
  return Oc(a) && a.tagName.toLowerCase() === "button";
}
function c4(a) {
  return Oc(a) && a.tagName.toLowerCase() === "form";
}
function u4(a) {
  return Oc(a) && a.tagName.toLowerCase() === "input";
}
function d4(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function f4(a, n) {
  return a.button === 0 && (!n || n === "_self") && !d4(a);
}
function gf(a = "") {
  return new URLSearchParams(
    typeof a == "string" || Array.isArray(a) || a instanceof URLSearchParams
      ? a
      : Object.keys(a).reduce((n, r) => {
          let i = a[r];
          return n.concat(Array.isArray(i) ? i.map((o) => [r, o]) : [[r, i]]);
        }, []),
  );
}
function h4(a, n) {
  let r = gf(a);
  return (
    n &&
      n.forEach((i, o) => {
        r.has(o) ||
          n.getAll(o).forEach((u) => {
            r.append(o, u);
          });
      }),
    r
  );
}
var Ko = null;
function m4() {
  if (Ko === null)
    try {
      new FormData(document.createElement("form"), 0), (Ko = !1);
    } catch {
      Ko = !0;
    }
  return Ko;
}
var p4 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Kd(a) {
  return a != null && !p4.has(a)
    ? (Cn(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nc}"`,
      ),
      null)
    : a;
}
function g4(a, n) {
  let r, i, o, u, f;
  if (c4(a)) {
    let h = a.getAttribute("action");
    (i = h ? Da(h, n) : null),
      (r = a.getAttribute("method") || tc),
      (o = Kd(a.getAttribute("enctype")) || nc),
      (u = new FormData(a));
  } else if (o4(a) || (u4(a) && (a.type === "submit" || a.type === "image"))) {
    let h = a.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let g = a.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((i = g ? Da(g, n) : null),
      (r = a.getAttribute("formmethod") || h.getAttribute("method") || tc),
      (o =
        Kd(a.getAttribute("formenctype")) ||
        Kd(h.getAttribute("enctype")) ||
        nc),
      (u = new FormData(h, a)),
      !m4())
    ) {
      let { name: m, type: _, value: v } = a;
      if (_ === "image") {
        let C = m ? `${m}.` : "";
        u.append(`${C}x`, "0"), u.append(`${C}y`, "0");
      } else m && u.append(m, v);
    }
  } else {
    if (Oc(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = tc), (i = null), (o = nc), (f = a);
  }
  return (
    u && o === "text/plain" && ((f = u), (u = void 0)),
    { action: i, method: r.toLowerCase(), encType: o, formData: u, body: f }
  );
}
function Hf(a, n) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(n);
}
async function y4(a, n) {
  if (a.id in n) return n[a.id];
  try {
    let r = await import(a.module);
    return (n[a.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function v4(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function b4(a, n, r) {
  let i = await Promise.all(
    a.map(async (o) => {
      let u = n.routes[o.route.id];
      if (u) {
        let f = await y4(u, r);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return w4(
    i
      .flat(1)
      .filter(v4)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" },
      ),
  );
}
function u0(a, n, r, i, o, u) {
  let f = (g, m) => (r[m] ? g.route.id !== r[m].route.id : !0),
    h = (g, m) => {
      var _;
      return (
        r[m].pathname !== g.pathname ||
        (((_ = r[m].route.path) == null ? void 0 : _.endsWith("*")) &&
          r[m].params["*"] !== g.params["*"])
      );
    };
  return u === "assets"
    ? n.filter((g, m) => f(g, m) || h(g, m))
    : u === "data"
      ? n.filter((g, m) => {
          var v;
          let _ = i.routes[g.route.id];
          if (!_ || !_.hasLoader) return !1;
          if (f(g, m) || h(g, m)) return !0;
          if (g.route.shouldRevalidate) {
            let C = g.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin,
              ),
              currentParams: ((v = r[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: g.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof C == "boolean") return C;
          }
          return !0;
        })
      : [];
}
function _4(a, n, { includeHydrateFallback: r } = {}) {
  return x4(
    a
      .map((i) => {
        let o = n.routes[i.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          r &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1),
  );
}
function x4(a) {
  return [...new Set(a)];
}
function C4(a) {
  let n = {},
    r = Object.keys(a).sort();
  for (let i of r) n[i] = a[i];
  return n;
}
function w4(a, n) {
  let r = new Set();
  return (
    new Set(n),
    a.reduce((i, o) => {
      let u = JSON.stringify(C4(o));
      return r.has(u) || (r.add(u), i.push({ key: u, link: o })), i;
    }, [])
  );
}
var S4 = new Set([100, 101, 204, 205]);
function E4(a, n) {
  let r =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : n && Da(r.pathname, n) === "/"
        ? (r.pathname = `${n.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function Sp() {
  let a = x.useContext(Qs);
  return (
    Hf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function T4() {
  let a = x.useContext(Rc);
  return (
    Hf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Vf = x.createContext(void 0);
Vf.displayName = "FrameworkContext";
function Ep() {
  let a = x.useContext(Vf);
  return (
    Hf(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function A4(a, n) {
  let r = x.useContext(Vf),
    [i, o] = x.useState(!1),
    [u, f] = x.useState(!1),
    {
      onFocus: h,
      onBlur: g,
      onMouseEnter: m,
      onMouseLeave: _,
      onTouchStart: v,
    } = n,
    C = x.useRef(null);
  x.useEffect(() => {
    if ((a === "render" && f(!0), a === "viewport")) {
      let G = (B) => {
          B.forEach((I) => {
            f(I.isIntersecting);
          });
        },
        H = new IntersectionObserver(G, { threshold: 0.5 });
      return (
        C.current && H.observe(C.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [a]),
    x.useEffect(() => {
      if (i) {
        let G = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(G);
        };
      }
    }, [i]);
  let R = () => {
      o(!0);
    },
    A = () => {
      o(!1), f(!1);
    };
  return r
    ? a !== "intent"
      ? [u, C, {}]
      : [
          u,
          C,
          {
            onFocus: el(h, R),
            onBlur: el(g, A),
            onMouseEnter: el(m, R),
            onMouseLeave: el(_, A),
            onTouchStart: el(v, R),
          },
        ]
    : [!1, C, {}];
}
function el(a, n) {
  return (r) => {
    a && a(r), r.defaultPrevented || n(r);
  };
}
function N4({ page: a, ...n }) {
  let { router: r } = Sp(),
    i = x.useMemo(() => mp(r.routes, a, r.basename), [r.routes, a, r.basename]);
  return i ? x.createElement(R4, { page: a, matches: i, ...n }) : null;
}
function k4(a) {
  let { manifest: n, routeModules: r } = Ep(),
    [i, o] = x.useState([]);
  return (
    x.useEffect(() => {
      let u = !1;
      return (
        b4(a, n, r).then((f) => {
          u || o(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [a, n, r]),
    i
  );
}
function R4({ page: a, matches: n, ...r }) {
  let i = un(),
    { manifest: o, routeModules: u } = Ep(),
    { basename: f } = Sp(),
    { loaderData: h, matches: g } = T4(),
    m = x.useMemo(() => u0(a, n, g, o, i, "data"), [a, n, g, o, i]),
    _ = x.useMemo(() => u0(a, n, g, o, i, "assets"), [a, n, g, o, i]),
    v = x.useMemo(() => {
      if (a === i.pathname + i.search + i.hash) return [];
      let A = new Set(),
        G = !1;
      if (
        (n.forEach((B) => {
          var V;
          let I = o.routes[B.route.id];
          !I ||
            !I.hasLoader ||
            ((!m.some((te) => te.route.id === B.route.id) &&
              B.route.id in h &&
              (V = u[B.route.id]) != null &&
              V.shouldRevalidate) ||
            I.hasClientLoader
              ? (G = !0)
              : A.add(B.route.id));
        }),
        A.size === 0)
      )
        return [];
      let H = E4(a, f);
      return (
        G &&
          A.size > 0 &&
          H.searchParams.set(
            "_routes",
            n
              .filter((B) => A.has(B.route.id))
              .map((B) => B.route.id)
              .join(","),
          ),
        [H.pathname + H.search]
      );
    }, [f, h, i, o, m, n, a, u]),
    C = x.useMemo(() => _4(_, o), [_, o]),
    R = k4(_);
  return x.createElement(
    x.Fragment,
    null,
    v.map((A) =>
      x.createElement("link", {
        key: A,
        rel: "prefetch",
        as: "fetch",
        href: A,
        ...r,
      }),
    ),
    C.map((A) =>
      x.createElement("link", { key: A, rel: "modulepreload", href: A, ...r }),
    ),
    R.map(({ key: A, link: G }) => x.createElement("link", { key: A, ...G })),
  );
}
function O4(...a) {
  return (n) => {
    a.forEach((r) => {
      typeof r == "function" ? r(n) : r != null && (r.current = n);
    });
  };
}
var Tp =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Tp && (window.__reactRouterVersion = "7.5.2");
} catch {}
function D4({ basename: a, children: n, window: r }) {
  let i = x.useRef();
  i.current == null && (i.current = gv({ window: r, v5Compat: !0 }));
  let o = i.current,
    [u, f] = x.useState({ action: o.action, location: o.location }),
    h = x.useCallback(
      (g) => {
        x.startTransition(() => f(g));
      },
      [f],
    );
  return (
    x.useLayoutEffect(() => o.listen(h), [o, h]),
    x.createElement(i4, {
      basename: a,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
var Ap = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ul = x.forwardRef(function (
    {
      onClick: n,
      discover: r = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: u,
      replace: f,
      state: h,
      target: g,
      to: m,
      preventScrollReset: _,
      viewTransition: v,
      ...C
    },
    R,
  ) {
    let { basename: A } = x.useContext(Bn),
      G = typeof m == "string" && Ap.test(m),
      H,
      B = !1;
    if (typeof m == "string" && G && ((H = m), Tp))
      try {
        let ve = new URL(window.location.href),
          Re = m.startsWith("//") ? new URL(ve.protocol + m) : new URL(m),
          oe = Da(Re.pathname, A);
        Re.origin === ve.origin && oe != null
          ? (m = oe + Re.search + Re.hash)
          : (B = !0);
      } catch {
        Cn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let I = Zv(m, { relative: o }),
      [V, te, U] = A4(i, C),
      ne = U4(m, {
        replace: f,
        state: h,
        target: g,
        preventScrollReset: _,
        relative: o,
        viewTransition: v,
      });
    function $(ve) {
      n && n(ve), ve.defaultPrevented || ne(ve);
    }
    let me = x.createElement("a", {
      ...C,
      ...U,
      href: H || I,
      onClick: B || u ? n : $,
      ref: O4(R, te),
      target: g,
      "data-discover": !G && r === "render" ? "true" : void 0,
    });
    return V && !G
      ? x.createElement(x.Fragment, null, me, x.createElement(N4, { page: I }))
      : me;
  });
ul.displayName = "Link";
var M4 = x.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: o = !1,
    style: u,
    to: f,
    viewTransition: h,
    children: g,
    ...m
  },
  _,
) {
  let v = Nl(f, { relative: m.relative }),
    C = un(),
    R = x.useContext(Rc),
    { navigator: A, basename: G } = x.useContext(Bn),
    H = R != null && V4(v) && h === !0,
    B = A.encodeLocation ? A.encodeLocation(v).pathname : v.pathname,
    I = C.pathname,
    V =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  r ||
    ((I = I.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (B = B.toLowerCase())),
    V && G && (V = Da(V, G) || V);
  const te = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
  let U = I === B || (!o && I.startsWith(B) && I.charAt(te) === "/"),
    ne =
      V != null &&
      (V === B || (!o && V.startsWith(B) && V.charAt(B.length) === "/")),
    $ = { isActive: U, isPending: ne, isTransitioning: H },
    me = U ? n : void 0,
    ve;
  typeof i == "function"
    ? (ve = i($))
    : (ve = [
        i,
        U ? "active" : null,
        ne ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Re = typeof u == "function" ? u($) : u;
  return x.createElement(
    ul,
    {
      ...m,
      "aria-current": me,
      className: ve,
      ref: _,
      style: Re,
      to: f,
      viewTransition: h,
    },
    typeof g == "function" ? g($) : g,
  );
});
M4.displayName = "NavLink";
var j4 = x.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: n,
      navigate: r,
      reloadDocument: i,
      replace: o,
      state: u,
      method: f = tc,
      action: h,
      onSubmit: g,
      relative: m,
      preventScrollReset: _,
      viewTransition: v,
      ...C
    },
    R,
  ) => {
    let A = I4(),
      G = H4(h, { relative: m }),
      H = f.toLowerCase() === "get" ? "get" : "post",
      B = typeof h == "string" && Ap.test(h),
      I = (V) => {
        if ((g && g(V), V.defaultPrevented)) return;
        V.preventDefault();
        let te = V.nativeEvent.submitter,
          U = (te == null ? void 0 : te.getAttribute("formmethod")) || f;
        A(te || V.currentTarget, {
          fetcherKey: n,
          method: U,
          navigate: r,
          replace: o,
          state: u,
          relative: m,
          preventScrollReset: _,
          viewTransition: v,
        });
      };
    return x.createElement("form", {
      ref: R,
      method: H,
      action: G,
      onSubmit: i ? g : I,
      ...C,
      "data-discover": !B && a === "render" ? "true" : void 0,
    });
  },
);
j4.displayName = "Form";
function L4(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Np(a) {
  let n = x.useContext(Qs);
  return rt(n, L4(a)), n;
}
function U4(
  a,
  {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: u,
    viewTransition: f,
  } = {},
) {
  let h = Ua(),
    g = un(),
    m = Nl(a, { relative: u });
  return x.useCallback(
    (_) => {
      if (f4(_, n)) {
        _.preventDefault();
        let v = r !== void 0 ? r : cl(g) === cl(m);
        h(a, {
          replace: v,
          state: i,
          preventScrollReset: o,
          relative: u,
          viewTransition: f,
        });
      }
    },
    [g, h, m, r, i, n, a, o, u, f],
  );
}
function Zf(a) {
  Cn(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let n = x.useRef(gf(a)),
    r = x.useRef(!1),
    i = un(),
    o = x.useMemo(() => h4(i.search, r.current ? null : n.current), [i.search]),
    u = Ua(),
    f = x.useCallback(
      (h, g) => {
        const m = gf(typeof h == "function" ? h(o) : h);
        (r.current = !0), u("?" + m, g);
      },
      [u, o],
    );
  return [o, f];
}
var B4 = 0,
  z4 = () => `__${String(++B4)}__`;
function I4() {
  let { router: a } = Np("useSubmit"),
    { basename: n } = x.useContext(Bn),
    r = t4();
  return x.useCallback(
    async (i, o = {}) => {
      let { action: u, method: f, encType: h, formData: g, body: m } = g4(i, n);
      if (o.navigate === !1) {
        let _ = o.fetcherKey || z4();
        await a.fetch(_, r, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: g,
          body: m,
          formMethod: o.method || f,
          formEncType: o.encType || h,
          flushSync: o.flushSync,
        });
      } else
        await a.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: g,
          body: m,
          formMethod: o.method || f,
          formEncType: o.encType || h,
          replace: o.replace,
          state: o.state,
          fromRouteId: r,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [a, n, r],
  );
}
function H4(a, { relative: n } = {}) {
  let { basename: r } = x.useContext(Bn),
    i = x.useContext(wn);
  rt(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    u = { ...Nl(a || ".", { relative: n }) },
    f = un();
  if (a == null) {
    u.search = f.search;
    let h = new URLSearchParams(u.search),
      g = h.getAll("index");
    if (g.some((_) => _ === "")) {
      h.delete("index"),
        g.filter((v) => v).forEach((v) => h.append("index", v));
      let _ = h.toString();
      u.search = _ ? `?${_}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (u.pathname = u.pathname === "/" ? r : Oa([r, u.pathname])),
    cl(u)
  );
}
function V4(a, n = {}) {
  let r = x.useContext(vp);
  rt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = Np("useViewTransitionState"),
    o = Nl(a, { relative: n.relative });
  if (!r.isTransitioning) return !1;
  let u = Da(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    f = Da(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return cc(o.pathname, f) != null || cc(o.pathname, u) != null;
}
new TextEncoder();
[...S4];
const Z4 = "/assets/new-folder-dynamic-color-plO5DZV7.svg",
  q4 = "/assets/puzzle-dynamic-color-CRJUyS2b.svg",
  P4 = "/assets/thumb-up-dynamic-color-DwcGL8Kh.svg",
  G4 = () => {};
var d0 = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kp = function (a) {
    const n = [];
    let r = 0;
    for (let i = 0; i < a.length; i++) {
      let o = a.charCodeAt(i);
      o < 128
        ? (n[r++] = o)
        : o < 2048
          ? ((n[r++] = (o >> 6) | 192), (n[r++] = (o & 63) | 128))
          : (o & 64512) === 55296 &&
              i + 1 < a.length &&
              (a.charCodeAt(i + 1) & 64512) === 56320
            ? ((o = 65536 + ((o & 1023) << 10) + (a.charCodeAt(++i) & 1023)),
              (n[r++] = (o >> 18) | 240),
              (n[r++] = ((o >> 12) & 63) | 128),
              (n[r++] = ((o >> 6) & 63) | 128),
              (n[r++] = (o & 63) | 128))
            : ((n[r++] = (o >> 12) | 224),
              (n[r++] = ((o >> 6) & 63) | 128),
              (n[r++] = (o & 63) | 128));
    }
    return n;
  },
  Y4 = function (a) {
    const n = [];
    let r = 0,
      i = 0;
    for (; r < a.length; ) {
      const o = a[r++];
      if (o < 128) n[i++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const u = a[r++];
        n[i++] = String.fromCharCode(((o & 31) << 6) | (u & 63));
      } else if (o > 239 && o < 365) {
        const u = a[r++],
          f = a[r++],
          h = a[r++],
          g =
            (((o & 7) << 18) | ((u & 63) << 12) | ((f & 63) << 6) | (h & 63)) -
            65536;
        (n[i++] = String.fromCharCode(55296 + (g >> 10))),
          (n[i++] = String.fromCharCode(56320 + (g & 1023)));
      } else {
        const u = a[r++],
          f = a[r++];
        n[i++] = String.fromCharCode(
          ((o & 15) << 12) | ((u & 63) << 6) | (f & 63),
        );
      }
    }
    return n.join("");
  },
  Rp = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(a, n) {
      if (!Array.isArray(a))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const r = n ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        i = [];
      for (let o = 0; o < a.length; o += 3) {
        const u = a[o],
          f = o + 1 < a.length,
          h = f ? a[o + 1] : 0,
          g = o + 2 < a.length,
          m = g ? a[o + 2] : 0,
          _ = u >> 2,
          v = ((u & 3) << 4) | (h >> 4);
        let C = ((h & 15) << 2) | (m >> 6),
          R = m & 63;
        g || ((R = 64), f || (C = 64)), i.push(r[_], r[v], r[C], r[R]);
      }
      return i.join("");
    },
    encodeString(a, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? btoa(a)
        : this.encodeByteArray(kp(a), n);
    },
    decodeString(a, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? atob(a)
        : Y4(this.decodeStringToByteArray(a, n));
    },
    decodeStringToByteArray(a, n) {
      this.init_();
      const r = n ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = [];
      for (let o = 0; o < a.length; ) {
        const u = r[a.charAt(o++)],
          h = o < a.length ? r[a.charAt(o)] : 0;
        ++o;
        const m = o < a.length ? r[a.charAt(o)] : 64;
        ++o;
        const v = o < a.length ? r[a.charAt(o)] : 64;
        if ((++o, u == null || h == null || m == null || v == null))
          throw new $4();
        const C = (u << 2) | (h >> 4);
        if ((i.push(C), m !== 64)) {
          const R = ((h << 4) & 240) | (m >> 2);
          if ((i.push(R), v !== 64)) {
            const A = ((m << 6) & 192) | v;
            i.push(A);
          }
        }
      }
      return i;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let a = 0; a < this.ENCODED_VALS.length; a++)
          (this.byteToCharMap_[a] = this.ENCODED_VALS.charAt(a)),
            (this.charToByteMap_[this.byteToCharMap_[a]] = a),
            (this.byteToCharMapWebSafe_[a] =
              this.ENCODED_VALS_WEBSAFE.charAt(a)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]] = a),
            a >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)] = a),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)] = a));
      }
    },
  };
class $4 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const F4 = function (a) {
    const n = kp(a);
    return Rp.encodeByteArray(n, !0);
  },
  Op = function (a) {
    return F4(a).replace(/\./g, "");
  },
  Dp = function (a) {
    try {
      return Rp.decodeString(a, !0);
    } catch (n) {
      console.error("base64Decode failed: ", n);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function X4() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q4 = () => X4().__FIREBASE_DEFAULTS__,
  K4 = () => {
    if (typeof process > "u" || typeof d0 > "u") return;
    const a = d0.__FIREBASE_DEFAULTS__;
    if (a) return JSON.parse(a);
  },
  J4 = () => {
    if (typeof document > "u") return;
    let a;
    try {
      a = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const n = a && Dp(a[1]);
    return n && JSON.parse(n);
  },
  qf = () => {
    try {
      return G4() || Q4() || K4() || J4();
    } catch (a) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);
      return;
    }
  },
  W4 = (a) => {
    var n, r;
    return (r =
      (n = qf()) === null || n === void 0 ? void 0 : n.emulatorHosts) ===
      null || r === void 0
      ? void 0
      : r[a];
  },
  Mp = () => {
    var a;
    return (a = qf()) === null || a === void 0 ? void 0 : a.config;
  },
  jp = (a) => {
    var n;
    return (n = qf()) === null || n === void 0 ? void 0 : n[`_${a}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e6 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((n, r) => {
        (this.resolve = n), (this.reject = r);
      }));
  }
  wrapCallback(n) {
    return (r, i) => {
      r ? this.reject(r) : this.resolve(i),
        typeof n == "function" &&
          (this.promise.catch(() => {}), n.length === 1 ? n(r) : n(r, i));
    };
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pf(a) {
  return a.endsWith(".cloudworkstations.dev");
}
async function t6(a) {
  return (await fetch(a, { credentials: "include" })).ok;
}
const sl = {};
function n6() {
  const a = { prod: [], emulator: [] };
  for (const n of Object.keys(sl)) sl[n] ? a.emulator.push(n) : a.prod.push(n);
  return a;
}
function a6(a) {
  let n = document.getElementById(a),
    r = !1;
  return (
    n ||
      ((n = document.createElement("div")), n.setAttribute("id", a), (r = !0)),
    { created: r, element: n }
  );
}
let f0 = !1;
function r6(a, n) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !Pf(window.location.host) ||
    sl[a] === n ||
    sl[a] ||
    f0
  )
    return;
  sl[a] = n;
  function r(C) {
    return `__firebase__banner__${C}`;
  }
  const i = "__firebase__banner",
    u = n6().prod.length > 0;
  function f() {
    const C = document.getElementById(i);
    C && C.remove();
  }
  function h(C) {
    (C.style.display = "flex"),
      (C.style.background = "#7faaf0"),
      (C.style.position = "fixed"),
      (C.style.bottom = "5px"),
      (C.style.left = "5px"),
      (C.style.padding = ".5em"),
      (C.style.borderRadius = "5px"),
      (C.style.alignItems = "center");
  }
  function g(C, R) {
    C.setAttribute("width", "24"),
      C.setAttribute("id", R),
      C.setAttribute("height", "24"),
      C.setAttribute("viewBox", "0 0 24 24"),
      C.setAttribute("fill", "none"),
      (C.style.marginLeft = "-6px");
  }
  function m() {
    const C = document.createElement("span");
    return (
      (C.style.cursor = "pointer"),
      (C.style.marginLeft = "16px"),
      (C.style.fontSize = "24px"),
      (C.innerHTML = " &times;"),
      (C.onclick = () => {
        (f0 = !0), f();
      }),
      C
    );
  }
  function _(C, R) {
    C.setAttribute("id", R),
      (C.innerText = "Learn more"),
      (C.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      C.setAttribute("target", "__blank"),
      (C.style.paddingLeft = "5px"),
      (C.style.textDecoration = "underline");
  }
  function v() {
    const C = a6(i),
      R = r("text"),
      A = document.getElementById(R) || document.createElement("span"),
      G = r("learnmore"),
      H = document.getElementById(G) || document.createElement("a"),
      B = r("preprendIcon"),
      I =
        document.getElementById(B) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (C.created) {
      const V = C.element;
      h(V), _(H, G);
      const te = m();
      g(I, B), V.append(I, A, H, te), document.body.appendChild(V);
    }
    u
      ? ((A.innerText = "Preview backend disconnected."),
        (I.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((I.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (A.innerText = "Preview backend running in this workspace.")),
      A.setAttribute("id", R);
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", v)
    : v();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function s6() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())
  );
}
function i6() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function l6() {
  const a =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
        ? browser.runtime
        : void 0;
  return typeof a == "object" && a.id !== void 0;
}
function o6() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function c6() {
  const a = Pt();
  return a.indexOf("MSIE ") >= 0 || a.indexOf("Trident/") >= 0;
}
function u6() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function d6() {
  return new Promise((a, n) => {
    try {
      let r = !0;
      const i = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(i);
      (o.onsuccess = () => {
        o.result.close(), r || self.indexedDB.deleteDatabase(i), a(!0);
      }),
        (o.onupgradeneeded = () => {
          r = !1;
        }),
        (o.onerror = () => {
          var u;
          n(
            ((u = o.error) === null || u === void 0 ? void 0 : u.message) || "",
          );
        });
    } catch (r) {
      n(r);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f6 = "FirebaseError";
class yr extends Error {
  constructor(n, r, i) {
    super(r),
      (this.code = n),
      (this.customData = i),
      (this.name = f6),
      Object.setPrototypeOf(this, yr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, kl.prototype.create);
  }
}
class kl {
  constructor(n, r, i) {
    (this.service = n), (this.serviceName = r), (this.errors = i);
  }
  create(n, ...r) {
    const i = r[0] || {},
      o = `${this.service}/${n}`,
      u = this.errors[n],
      f = u ? h6(u, i) : "Error",
      h = `${this.serviceName}: ${f} (${o}).`;
    return new yr(o, h, i);
  }
}
function h6(a, n) {
  return a.replace(m6, (r, i) => {
    const o = n[i];
    return o != null ? String(o) : `<${i}?>`;
  });
}
const m6 = /\{\$([^}]+)}/g;
function p6(a) {
  for (const n in a) if (Object.prototype.hasOwnProperty.call(a, n)) return !1;
  return !0;
}
function Zs(a, n) {
  if (a === n) return !0;
  const r = Object.keys(a),
    i = Object.keys(n);
  for (const o of r) {
    if (!i.includes(o)) return !1;
    const u = a[o],
      f = n[o];
    if (h0(u) && h0(f)) {
      if (!Zs(u, f)) return !1;
    } else if (u !== f) return !1;
  }
  for (const o of i) if (!r.includes(o)) return !1;
  return !0;
}
function h0(a) {
  return a !== null && typeof a == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rl(a) {
  const n = [];
  for (const [r, i] of Object.entries(a))
    Array.isArray(i)
      ? i.forEach((o) => {
          n.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
        })
      : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
  return n.length ? "&" + n.join("&") : "";
}
function g6(a, n) {
  const r = new y6(a, n);
  return r.subscribe.bind(r);
}
class y6 {
  constructor(n, r) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = r),
      this.task
        .then(() => {
          n(this);
        })
        .catch((i) => {
          this.error(i);
        });
  }
  next(n) {
    this.forEachObserver((r) => {
      r.next(n);
    });
  }
  error(n) {
    this.forEachObserver((r) => {
      r.error(n);
    }),
      this.close(n);
  }
  complete() {
    this.forEachObserver((n) => {
      n.complete();
    }),
      this.close();
  }
  subscribe(n, r, i) {
    let o;
    if (n === void 0 && r === void 0 && i === void 0)
      throw new Error("Missing Observer.");
    v6(n, ["next", "error", "complete"])
      ? (o = n)
      : (o = { next: n, error: r, complete: i }),
      o.next === void 0 && (o.next = Jd),
      o.error === void 0 && (o.error = Jd),
      o.complete === void 0 && (o.complete = Jd);
    const u = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      u
    );
  }
  unsubscribeOne(n) {
    this.observers === void 0 ||
      this.observers[n] === void 0 ||
      (delete this.observers[n],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(n) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++) this.sendOne(r, n);
  }
  sendOne(n, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[n] !== void 0)
        try {
          r(this.observers[n]);
        } catch (i) {
          typeof console < "u" && console.error && console.error(i);
        }
    });
  }
  close(n) {
    this.finalized ||
      ((this.finalized = !0),
      n !== void 0 && (this.finalError = n),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function v6(a, n) {
  if (typeof a != "object" || a === null) return !1;
  for (const r of n) if (r in a && typeof a[r] == "function") return !0;
  return !1;
}
function Jd() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Js(a) {
  return a && a._delegate ? a._delegate : a;
}
class qs {
  constructor(n, r, i) {
    (this.name = n),
      (this.instanceFactory = r),
      (this.type = i),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(n) {
    return (this.instantiationMode = n), this;
  }
  setMultipleInstances(n) {
    return (this.multipleInstances = n), this;
  }
  setServiceProps(n) {
    return (this.serviceProps = n), this;
  }
  setInstanceCreatedCallback(n) {
    return (this.onInstanceCreated = n), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Br = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b6 {
  constructor(n, r) {
    (this.name = n),
      (this.container = r),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(n) {
    const r = this.normalizeInstanceIdentifier(n);
    if (!this.instancesDeferred.has(r)) {
      const i = new e6();
      if (
        (this.instancesDeferred.set(r, i),
        this.isInitialized(r) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: r });
          o && i.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(n) {
    var r;
    const i = this.normalizeInstanceIdentifier(
        n == null ? void 0 : n.identifier,
      ),
      o =
        (r = n == null ? void 0 : n.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(i) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: i });
      } catch (u) {
        if (o) return null;
        throw u;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(n) {
    if (n.name !== this.name)
      throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = n), !!this.shouldAutoInitialize())) {
      if (x6(n))
        try {
          this.getOrInitializeService({ instanceIdentifier: Br });
        } catch {}
      for (const [r, i] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(r);
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: o });
          i.resolve(u);
        } catch {}
      }
    }
  }
  clearInstance(n = Br) {
    this.instancesDeferred.delete(n),
      this.instancesOptions.delete(n),
      this.instances.delete(n);
  }
  async delete() {
    const n = Array.from(this.instances.values());
    await Promise.all([
      ...n.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...n.filter((r) => "_delete" in r).map((r) => r._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(n = Br) {
    return this.instances.has(n);
  }
  getOptions(n = Br) {
    return this.instancesOptions.get(n) || {};
  }
  initialize(n = {}) {
    const { options: r = {} } = n,
      i = this.normalizeInstanceIdentifier(n.instanceIdentifier);
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: i,
      options: r,
    });
    for (const [u, f] of this.instancesDeferred.entries()) {
      const h = this.normalizeInstanceIdentifier(u);
      i === h && f.resolve(o);
    }
    return o;
  }
  onInit(n, r) {
    var i;
    const o = this.normalizeInstanceIdentifier(r),
      u =
        (i = this.onInitCallbacks.get(o)) !== null && i !== void 0
          ? i
          : new Set();
    u.add(n), this.onInitCallbacks.set(o, u);
    const f = this.instances.get(o);
    return (
      f && n(f, o),
      () => {
        u.delete(n);
      }
    );
  }
  invokeOnInitCallbacks(n, r) {
    const i = this.onInitCallbacks.get(r);
    if (i)
      for (const o of i)
        try {
          o(n, r);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: n, options: r = {} }) {
    let i = this.instances.get(n);
    if (
      !i &&
      this.component &&
      ((i = this.component.instanceFactory(this.container, {
        instanceIdentifier: _6(n),
        options: r,
      })),
      this.instances.set(n, i),
      this.instancesOptions.set(n, r),
      this.invokeOnInitCallbacks(i, n),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, n, i);
      } catch {}
    return i || null;
  }
  normalizeInstanceIdentifier(n = Br) {
    return this.component ? (this.component.multipleInstances ? n : Br) : n;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function _6(a) {
  return a === Br ? void 0 : a;
}
function x6(a) {
  return a.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C6 {
  constructor(n) {
    (this.name = n), (this.providers = new Map());
  }
  addComponent(n) {
    const r = this.getProvider(n.name);
    if (r.isComponentSet())
      throw new Error(
        `Component ${n.name} has already been registered with ${this.name}`,
      );
    r.setComponent(n);
  }
  addOrOverwriteComponent(n) {
    this.getProvider(n.name).isComponentSet() && this.providers.delete(n.name),
      this.addComponent(n);
  }
  getProvider(n) {
    if (this.providers.has(n)) return this.providers.get(n);
    const r = new b6(n, this);
    return this.providers.set(n, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Je;
(function (a) {
  (a[(a.DEBUG = 0)] = "DEBUG"),
    (a[(a.VERBOSE = 1)] = "VERBOSE"),
    (a[(a.INFO = 2)] = "INFO"),
    (a[(a.WARN = 3)] = "WARN"),
    (a[(a.ERROR = 4)] = "ERROR"),
    (a[(a.SILENT = 5)] = "SILENT");
})(Je || (Je = {}));
const w6 = {
    debug: Je.DEBUG,
    verbose: Je.VERBOSE,
    info: Je.INFO,
    warn: Je.WARN,
    error: Je.ERROR,
    silent: Je.SILENT,
  },
  S6 = Je.INFO,
  E6 = {
    [Je.DEBUG]: "log",
    [Je.VERBOSE]: "log",
    [Je.INFO]: "info",
    [Je.WARN]: "warn",
    [Je.ERROR]: "error",
  },
  T6 = (a, n, ...r) => {
    if (n < a.logLevel) return;
    const i = new Date().toISOString(),
      o = E6[n];
    if (o) console[o](`[${i}]  ${a.name}:`, ...r);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${n})`,
      );
  };
class Lp {
  constructor(n) {
    (this.name = n),
      (this._logLevel = S6),
      (this._logHandler = T6),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(n) {
    if (!(n in Je))
      throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);
    this._logLevel = n;
  }
  setLogLevel(n) {
    this._logLevel = typeof n == "string" ? w6[n] : n;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(n) {
    if (typeof n != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = n;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(n) {
    this._userLogHandler = n;
  }
  debug(...n) {
    this._userLogHandler && this._userLogHandler(this, Je.DEBUG, ...n),
      this._logHandler(this, Je.DEBUG, ...n);
  }
  log(...n) {
    this._userLogHandler && this._userLogHandler(this, Je.VERBOSE, ...n),
      this._logHandler(this, Je.VERBOSE, ...n);
  }
  info(...n) {
    this._userLogHandler && this._userLogHandler(this, Je.INFO, ...n),
      this._logHandler(this, Je.INFO, ...n);
  }
  warn(...n) {
    this._userLogHandler && this._userLogHandler(this, Je.WARN, ...n),
      this._logHandler(this, Je.WARN, ...n);
  }
  error(...n) {
    this._userLogHandler && this._userLogHandler(this, Je.ERROR, ...n),
      this._logHandler(this, Je.ERROR, ...n);
  }
}
const A6 = (a, n) => n.some((r) => a instanceof r);
let m0, p0;
function N6() {
  return (
    m0 ||
    (m0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function k6() {
  return (
    p0 ||
    (p0 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Up = new WeakMap(),
  yf = new WeakMap(),
  Bp = new WeakMap(),
  Wd = new WeakMap(),
  Gf = new WeakMap();
function R6(a) {
  const n = new Promise((r, i) => {
    const o = () => {
        a.removeEventListener("success", u), a.removeEventListener("error", f);
      },
      u = () => {
        r(dr(a.result)), o();
      },
      f = () => {
        i(a.error), o();
      };
    a.addEventListener("success", u), a.addEventListener("error", f);
  });
  return (
    n
      .then((r) => {
        r instanceof IDBCursor && Up.set(r, a);
      })
      .catch(() => {}),
    Gf.set(n, a),
    n
  );
}
function O6(a) {
  if (yf.has(a)) return;
  const n = new Promise((r, i) => {
    const o = () => {
        a.removeEventListener("complete", u),
          a.removeEventListener("error", f),
          a.removeEventListener("abort", f);
      },
      u = () => {
        r(), o();
      },
      f = () => {
        i(a.error || new DOMException("AbortError", "AbortError")), o();
      };
    a.addEventListener("complete", u),
      a.addEventListener("error", f),
      a.addEventListener("abort", f);
  });
  yf.set(a, n);
}
let vf = {
  get(a, n, r) {
    if (a instanceof IDBTransaction) {
      if (n === "done") return yf.get(a);
      if (n === "objectStoreNames") return a.objectStoreNames || Bp.get(a);
      if (n === "store")
        return r.objectStoreNames[1]
          ? void 0
          : r.objectStore(r.objectStoreNames[0]);
    }
    return dr(a[n]);
  },
  set(a, n, r) {
    return (a[n] = r), !0;
  },
  has(a, n) {
    return a instanceof IDBTransaction && (n === "done" || n === "store")
      ? !0
      : n in a;
  },
};
function D6(a) {
  vf = a(vf);
}
function M6(a) {
  return a === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (n, ...r) {
        const i = a.call(ef(this), n, ...r);
        return Bp.set(i, n.sort ? n.sort() : [n]), dr(i);
      }
    : k6().includes(a)
      ? function (...n) {
          return a.apply(ef(this), n), dr(Up.get(this));
        }
      : function (...n) {
          return dr(a.apply(ef(this), n));
        };
}
function j6(a) {
  return typeof a == "function"
    ? M6(a)
    : (a instanceof IDBTransaction && O6(a),
      A6(a, N6()) ? new Proxy(a, vf) : a);
}
function dr(a) {
  if (a instanceof IDBRequest) return R6(a);
  if (Wd.has(a)) return Wd.get(a);
  const n = j6(a);
  return n !== a && (Wd.set(a, n), Gf.set(n, a)), n;
}
const ef = (a) => Gf.get(a);
function L6(a, n, { blocked: r, upgrade: i, blocking: o, terminated: u } = {}) {
  const f = indexedDB.open(a, n),
    h = dr(f);
  return (
    i &&
      f.addEventListener("upgradeneeded", (g) => {
        i(dr(f.result), g.oldVersion, g.newVersion, dr(f.transaction), g);
      }),
    r && f.addEventListener("blocked", (g) => r(g.oldVersion, g.newVersion, g)),
    h
      .then((g) => {
        u && g.addEventListener("close", () => u()),
          o &&
            g.addEventListener("versionchange", (m) =>
              o(m.oldVersion, m.newVersion, m),
            );
      })
      .catch(() => {}),
    h
  );
}
const U6 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  B6 = ["put", "add", "delete", "clear"],
  tf = new Map();
function g0(a, n) {
  if (!(a instanceof IDBDatabase && !(n in a) && typeof n == "string")) return;
  if (tf.get(n)) return tf.get(n);
  const r = n.replace(/FromIndex$/, ""),
    i = n !== r,
    o = B6.includes(r);
  if (
    !(r in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || U6.includes(r))
  )
    return;
  const u = async function (f, ...h) {
    const g = this.transaction(f, o ? "readwrite" : "readonly");
    let m = g.store;
    return (
      i && (m = m.index(h.shift())),
      (await Promise.all([m[r](...h), o && g.done]))[0]
    );
  };
  return tf.set(n, u), u;
}
D6((a) => ({
  ...a,
  get: (n, r, i) => g0(n, r) || a.get(n, r, i),
  has: (n, r) => !!g0(n, r) || a.has(n, r),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z6 {
  constructor(n) {
    this.container = n;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((r) => {
        if (I6(r)) {
          const i = r.getImmediate();
          return `${i.library}/${i.version}`;
        } else return null;
      })
      .filter((r) => r)
      .join(" ");
  }
}
function I6(a) {
  const n = a.getComponent();
  return (n == null ? void 0 : n.type) === "VERSION";
}
const bf = "@firebase/app",
  y0 = "0.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ma = new Lp("@firebase/app"),
  H6 = "@firebase/app-compat",
  V6 = "@firebase/analytics-compat",
  Z6 = "@firebase/analytics",
  q6 = "@firebase/app-check-compat",
  P6 = "@firebase/app-check",
  G6 = "@firebase/auth",
  Y6 = "@firebase/auth-compat",
  $6 = "@firebase/database",
  F6 = "@firebase/data-connect",
  X6 = "@firebase/database-compat",
  Q6 = "@firebase/functions",
  K6 = "@firebase/functions-compat",
  J6 = "@firebase/installations",
  W6 = "@firebase/installations-compat",
  e5 = "@firebase/messaging",
  t5 = "@firebase/messaging-compat",
  n5 = "@firebase/performance",
  a5 = "@firebase/performance-compat",
  r5 = "@firebase/remote-config",
  s5 = "@firebase/remote-config-compat",
  i5 = "@firebase/storage",
  l5 = "@firebase/storage-compat",
  o5 = "@firebase/firestore",
  c5 = "@firebase/ai",
  u5 = "@firebase/firestore-compat",
  d5 = "firebase",
  f5 = "11.8.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _f = "[DEFAULT]",
  h5 = {
    [bf]: "fire-core",
    [H6]: "fire-core-compat",
    [Z6]: "fire-analytics",
    [V6]: "fire-analytics-compat",
    [P6]: "fire-app-check",
    [q6]: "fire-app-check-compat",
    [G6]: "fire-auth",
    [Y6]: "fire-auth-compat",
    [$6]: "fire-rtdb",
    [F6]: "fire-data-connect",
    [X6]: "fire-rtdb-compat",
    [Q6]: "fire-fn",
    [K6]: "fire-fn-compat",
    [J6]: "fire-iid",
    [W6]: "fire-iid-compat",
    [e5]: "fire-fcm",
    [t5]: "fire-fcm-compat",
    [n5]: "fire-perf",
    [a5]: "fire-perf-compat",
    [r5]: "fire-rc",
    [s5]: "fire-rc-compat",
    [i5]: "fire-gcs",
    [l5]: "fire-gcs-compat",
    [o5]: "fire-fst",
    [u5]: "fire-fst-compat",
    [c5]: "fire-vertex",
    "fire-js": "fire-js",
    [d5]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uc = new Map(),
  m5 = new Map(),
  xf = new Map();
function v0(a, n) {
  try {
    a.container.addComponent(n);
  } catch (r) {
    Ma.debug(
      `Component ${n.name} failed to register with FirebaseApp ${a.name}`,
      r,
    );
  }
}
function dl(a) {
  const n = a.name;
  if (xf.has(n))
    return (
      Ma.debug(`There were multiple attempts to register component ${n}.`), !1
    );
  xf.set(n, a);
  for (const r of uc.values()) v0(r, a);
  for (const r of m5.values()) v0(r, a);
  return !0;
}
function zp(a, n) {
  const r = a.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), a.container.getProvider(n);
}
function Jn(a) {
  return a == null ? !1 : a.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const p5 = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  fr = new kl("app", "Firebase", p5);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class g5 {
  constructor(n, r, i) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, n)),
      (this._config = Object.assign({}, r)),
      (this._name = r.name),
      (this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled),
      (this._container = i),
      this.container.addComponent(new qs("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(n) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = n);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(n) {
    this._isDeleted = n;
  }
  checkDestroyed() {
    if (this.isDeleted) throw fr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ol = f5;
function Ip(a, n = {}) {
  let r = a;
  typeof n != "object" && (n = { name: n });
  const i = Object.assign({ name: _f, automaticDataCollectionEnabled: !0 }, n),
    o = i.name;
  if (typeof o != "string" || !o)
    throw fr.create("bad-app-name", { appName: String(o) });
  if ((r || (r = Mp()), !r)) throw fr.create("no-options");
  const u = uc.get(o);
  if (u) {
    if (Zs(r, u.options) && Zs(i, u.config)) return u;
    throw fr.create("duplicate-app", { appName: o });
  }
  const f = new C6(o);
  for (const g of xf.values()) f.addComponent(g);
  const h = new g5(r, i, f);
  return uc.set(o, h), h;
}
function y5(a = _f) {
  const n = uc.get(a);
  if (!n && a === _f && Mp()) return Ip();
  if (!n) throw fr.create("no-app", { appName: a });
  return n;
}
function Bs(a, n, r) {
  var i;
  let o = (i = h5[a]) !== null && i !== void 0 ? i : a;
  r && (o += `-${r}`);
  const u = o.match(/\s|\//),
    f = n.match(/\s|\//);
  if (u || f) {
    const h = [`Unable to register library "${o}" with version "${n}":`];
    u &&
      h.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`,
      ),
      u && f && h.push("and"),
      f &&
        h.push(
          `version name "${n}" contains illegal characters (whitespace or "/")`,
        ),
      Ma.warn(h.join(" "));
    return;
  }
  dl(new qs(`${o}-version`, () => ({ library: o, version: n }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const v5 = "firebase-heartbeat-database",
  b5 = 1,
  fl = "firebase-heartbeat-store";
let nf = null;
function Hp() {
  return (
    nf ||
      (nf = L6(v5, b5, {
        upgrade: (a, n) => {
          switch (n) {
            case 0:
              try {
                a.createObjectStore(fl);
              } catch (r) {
                console.warn(r);
              }
          }
        },
      }).catch((a) => {
        throw fr.create("idb-open", { originalErrorMessage: a.message });
      })),
    nf
  );
}
async function _5(a) {
  try {
    const r = (await Hp()).transaction(fl),
      i = await r.objectStore(fl).get(Vp(a));
    return await r.done, i;
  } catch (n) {
    if (n instanceof yr) Ma.warn(n.message);
    else {
      const r = fr.create("idb-get", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Ma.warn(r.message);
    }
  }
}
async function b0(a, n) {
  try {
    const i = (await Hp()).transaction(fl, "readwrite");
    await i.objectStore(fl).put(n, Vp(a)), await i.done;
  } catch (r) {
    if (r instanceof yr) Ma.warn(r.message);
    else {
      const i = fr.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message,
      });
      Ma.warn(i.message);
    }
  }
}
function Vp(a) {
  return `${a.name}!${a.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const x5 = 1024,
  C5 = 30;
class w5 {
  constructor(n) {
    (this.container = n), (this._heartbeatsCache = null);
    const r = this.container.getProvider("app").getImmediate();
    (this._storage = new E5(r)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((i) => ((this._heartbeatsCache = i), i)));
  }
  async triggerHeartbeat() {
    var n, r;
    try {
      const o = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        u = _0();
      if (
        (((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((r = this._heartbeatsCache) === null || r === void 0
            ? void 0
            : r.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === u ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === u)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: u, agent: o }),
        this._heartbeatsCache.heartbeats.length > C5)
      ) {
        const f = T5(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (i) {
      Ma.warn(i);
    }
  }
  async getHeartbeatsHeader() {
    var n;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const r = _0(),
        { heartbeatsToSend: i, unsentEntries: o } = S5(
          this._heartbeatsCache.heartbeats,
        ),
        u = Op(JSON.stringify({ version: 2, heartbeats: i }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = r),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        u
      );
    } catch (r) {
      return Ma.warn(r), "";
    }
  }
}
function _0() {
  return new Date().toISOString().substring(0, 10);
}
function S5(a, n = x5) {
  const r = [];
  let i = a.slice();
  for (const o of a) {
    const u = r.find((f) => f.agent === o.agent);
    if (u) {
      if ((u.dates.push(o.date), x0(r) > n)) {
        u.dates.pop();
        break;
      }
    } else if ((r.push({ agent: o.agent, dates: [o.date] }), x0(r) > n)) {
      r.pop();
      break;
    }
    i = i.slice(1);
  }
  return { heartbeatsToSend: r, unsentEntries: i };
}
class E5 {
  constructor(n) {
    (this.app = n),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return u6()
      ? d6()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await _5(this.app);
      return r != null && r.heartbeats ? r : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(n) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return b0(this.app, {
        lastSentHeartbeatDate:
          (r = n.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : o.lastSentHeartbeatDate,
        heartbeats: n.heartbeats,
      });
    } else return;
  }
  async add(n) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return b0(this.app, {
        lastSentHeartbeatDate:
          (r = n.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...n.heartbeats],
      });
    } else return;
  }
}
function x0(a) {
  return Op(JSON.stringify({ version: 2, heartbeats: a })).length;
}
function T5(a) {
  if (a.length === 0) return -1;
  let n = 0,
    r = a[0].date;
  for (let i = 1; i < a.length; i++)
    a[i].date < r && ((r = a[i].date), (n = i));
  return n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A5(a) {
  dl(new qs("platform-logger", (n) => new z6(n), "PRIVATE")),
    dl(new qs("heartbeat", (n) => new w5(n), "PRIVATE")),
    Bs(bf, y0, a),
    Bs(bf, y0, "esm2017"),
    Bs("fire-js", "");
}
A5("");
var N5 = "firebase",
  k5 = "11.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Bs(N5, k5, "app");
function Yf(a, n) {
  var r = {};
  for (var i in a)
    Object.prototype.hasOwnProperty.call(a, i) &&
      n.indexOf(i) < 0 &&
      (r[i] = a[i]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(a); o < i.length; o++)
      n.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, i[o]) &&
        (r[i[o]] = a[i[o]]);
  return r;
}
function Zp() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const R5 = Zp,
  qp = new kl("auth", "Firebase", Zp());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dc = new Lp("@firebase/auth");
function O5(a, ...n) {
  dc.logLevel <= Je.WARN && dc.warn(`Auth (${Ol}): ${a}`, ...n);
}
function ac(a, ...n) {
  dc.logLevel <= Je.ERROR && dc.error(`Auth (${Ol}): ${a}`, ...n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function na(a, ...n) {
  throw Ff(a, ...n);
}
function Mn(a, ...n) {
  return Ff(a, ...n);
}
function $f(a, n, r) {
  const i = Object.assign(Object.assign({}, R5()), { [n]: r });
  return new kl("auth", "Firebase", i).create(n, { appName: a.name });
}
function Vr(a) {
  return $f(
    a,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp",
  );
}
function D5(a, n, r) {
  const i = r;
  if (!(n instanceof i))
    throw (
      (i.name !== n.constructor.name && na(a, "argument-error"),
      $f(
        a,
        "argument-error",
        `Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      ))
    );
}
function Ff(a, ...n) {
  if (typeof a != "string") {
    const r = n[0],
      i = [...n.slice(1)];
    return i[0] && (i[0].appName = a.name), a._errorFactory.create(r, ...i);
  }
  return qp.create(a, ...n);
}
function Ne(a, n, ...r) {
  if (!a) throw Ff(n, ...r);
}
function ka(a) {
  const n = "INTERNAL ASSERTION FAILED: " + a;
  throw (ac(n), new Error(n));
}
function ja(a, n) {
  a || ka(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cf() {
  var a;
  return (
    (typeof self < "u" &&
      ((a = self.location) === null || a === void 0 ? void 0 : a.href)) ||
    ""
  );
}
function M5() {
  return C0() === "http:" || C0() === "https:";
}
function C0() {
  var a;
  return (
    (typeof self < "u" &&
      ((a = self.location) === null || a === void 0 ? void 0 : a.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j5() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (M5() || l6() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function L5() {
  if (typeof navigator > "u") return null;
  const a = navigator;
  return (a.languages && a.languages[0]) || a.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dl {
  constructor(n, r) {
    (this.shortDelay = n),
      (this.longDelay = r),
      ja(r > n, "Short delay should be less than long delay!"),
      (this.isMobile = s6() || o6());
  }
  get() {
    return j5()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xf(a, n) {
  ja(a.emulator, "Emulator should always be set here");
  const { url: r } = a.emulator;
  return n ? `${r}${n.startsWith("/") ? n.slice(1) : n}` : r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pp {
  static initialize(n, r, i) {
    (this.fetchImpl = n),
      r && (this.headersImpl = r),
      i && (this.responseImpl = i);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    ka(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    ka(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    ka(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const U5 = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const B5 = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  z5 = new Dl(3e4, 6e4);
function Qf(a, n) {
  return a.tenantId && !n.tenantId
    ? Object.assign(Object.assign({}, n), { tenantId: a.tenantId })
    : n;
}
async function Ws(a, n, r, i, o = {}) {
  return Gp(a, o, async () => {
    let u = {},
      f = {};
    i && (n === "GET" ? (f = i) : (u = { body: JSON.stringify(i) }));
    const h = Rl(Object.assign({ key: a.config.apiKey }, f)).slice(1),
      g = await a._getAdditionalHeaders();
    (g["Content-Type"] = "application/json"),
      a.languageCode && (g["X-Firebase-Locale"] = a.languageCode);
    const m = Object.assign({ method: n, headers: g }, u);
    return (
      i6() || (m.referrerPolicy = "no-referrer"),
      a.emulatorConfig &&
        Pf(a.emulatorConfig.host) &&
        (m.credentials = "include"),
      Pp.fetch()(await Yp(a, a.config.apiHost, r, h), m)
    );
  });
}
async function Gp(a, n, r) {
  a._canInitEmulator = !1;
  const i = Object.assign(Object.assign({}, U5), n);
  try {
    const o = new H5(a),
      u = await Promise.race([r(), o.promise]);
    o.clearNetworkTimeout();
    const f = await u.json();
    if ("needConfirmation" in f)
      throw Jo(a, "account-exists-with-different-credential", f);
    if (u.ok && !("errorMessage" in f)) return f;
    {
      const h = u.ok ? f.errorMessage : f.error.message,
        [g, m] = h.split(" : ");
      if (g === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Jo(a, "credential-already-in-use", f);
      if (g === "EMAIL_EXISTS") throw Jo(a, "email-already-in-use", f);
      if (g === "USER_DISABLED") throw Jo(a, "user-disabled", f);
      const _ = i[g] || g.toLowerCase().replace(/[_\s]+/g, "-");
      if (m) throw $f(a, _, m);
      na(a, _);
    }
  } catch (o) {
    if (o instanceof yr) throw o;
    na(a, "network-request-failed", { message: String(o) });
  }
}
async function I5(a, n, r, i, o = {}) {
  const u = await Ws(a, n, r, i, o);
  return (
    "mfaPendingCredential" in u &&
      na(a, "multi-factor-auth-required", { _serverResponse: u }),
    u
  );
}
async function Yp(a, n, r, i) {
  const o = `${n}${r}?${i}`,
    u = a,
    f = u.config.emulator ? Xf(a.config, o) : `${a.config.apiScheme}://${o}`;
  return B5.includes(r) &&
    (await u._persistenceManagerAvailable, u._getPersistenceType() === "COOKIE")
    ? u._getPersistence()._getFinalTarget(f).toString()
    : f;
}
class H5 {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(n) {
    (this.auth = n),
      (this.timer = null),
      (this.promise = new Promise((r, i) => {
        this.timer = setTimeout(
          () => i(Mn(this.auth, "network-request-failed")),
          z5.get(),
        );
      }));
  }
}
function Jo(a, n, r) {
  const i = { appName: a.name };
  r.email && (i.email = r.email),
    r.phoneNumber && (i.phoneNumber = r.phoneNumber);
  const o = Mn(a, n, i);
  return (o.customData._tokenResponse = r), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function V5(a, n) {
  return Ws(a, "POST", "/v1/accounts:delete", n);
}
async function fc(a, n) {
  return Ws(a, "POST", "/v1/accounts:lookup", n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function il(a) {
  if (a)
    try {
      const n = new Date(Number(a));
      if (!isNaN(n.getTime())) return n.toUTCString();
    } catch {}
}
async function Z5(a, n = !1) {
  const r = Js(a),
    i = await r.getIdToken(n),
    o = Kf(i);
  Ne(o && o.exp && o.auth_time && o.iat, r.auth, "internal-error");
  const u = typeof o.firebase == "object" ? o.firebase : void 0,
    f = u == null ? void 0 : u.sign_in_provider;
  return {
    claims: o,
    token: i,
    authTime: il(af(o.auth_time)),
    issuedAtTime: il(af(o.iat)),
    expirationTime: il(af(o.exp)),
    signInProvider: f || null,
    signInSecondFactor: (u == null ? void 0 : u.sign_in_second_factor) || null,
  };
}
function af(a) {
  return Number(a) * 1e3;
}
function Kf(a) {
  const [n, r, i] = a.split(".");
  if (n === void 0 || r === void 0 || i === void 0)
    return ac("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = Dp(r);
    return o
      ? JSON.parse(o)
      : (ac("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return (
      ac(
        "Caught error parsing JWT payload as JSON",
        o == null ? void 0 : o.toString(),
      ),
      null
    );
  }
}
function w0(a) {
  const n = Kf(a);
  return (
    Ne(n, "internal-error"),
    Ne(typeof n.exp < "u", "internal-error"),
    Ne(typeof n.iat < "u", "internal-error"),
    Number(n.exp) - Number(n.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function hl(a, n, r = !1) {
  if (r) return n;
  try {
    return await n;
  } catch (i) {
    throw (
      (i instanceof yr &&
        q5(i) &&
        a.auth.currentUser === a &&
        (await a.auth.signOut()),
      i)
    );
  }
}
function q5({ code: a }) {
  return a === "auth/user-disabled" || a === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P5 {
  constructor(n) {
    (this.user = n),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(n) {
    var r;
    if (n) {
      const i = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), i;
    } else {
      this.errorBackoff = 3e4;
      const o =
        ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0
          ? r
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, o);
    }
  }
  schedule(n = !1) {
    if (!this.isRunning) return;
    const r = this.getInterval(n);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (n) {
      (n == null ? void 0 : n.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wf {
  constructor(n, r) {
    (this.createdAt = n), (this.lastLoginAt = r), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = il(this.lastLoginAt)),
      (this.creationTime = il(this.createdAt));
  }
  _copy(n) {
    (this.createdAt = n.createdAt),
      (this.lastLoginAt = n.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function hc(a) {
  var n;
  const r = a.auth,
    i = await a.getIdToken(),
    o = await hl(a, fc(r, { idToken: i }));
  Ne(o == null ? void 0 : o.users.length, r, "internal-error");
  const u = o.users[0];
  a._notifyReloadListener(u);
  const f =
      !((n = u.providerUserInfo) === null || n === void 0) && n.length
        ? $p(u.providerUserInfo)
        : [],
    h = Y5(a.providerData, f),
    g = a.isAnonymous,
    m = !(a.email && u.passwordHash) && !(h != null && h.length),
    _ = g ? m : !1,
    v = {
      uid: u.localId,
      displayName: u.displayName || null,
      photoURL: u.photoUrl || null,
      email: u.email || null,
      emailVerified: u.emailVerified || !1,
      phoneNumber: u.phoneNumber || null,
      tenantId: u.tenantId || null,
      providerData: h,
      metadata: new wf(u.createdAt, u.lastLoginAt),
      isAnonymous: _,
    };
  Object.assign(a, v);
}
async function G5(a) {
  const n = Js(a);
  await hc(n),
    await n.auth._persistUserIfCurrent(n),
    n.auth._notifyListenersIfCurrent(n);
}
function Y5(a, n) {
  return [
    ...a.filter((i) => !n.some((o) => o.providerId === i.providerId)),
    ...n,
  ];
}
function $p(a) {
  return a.map((n) => {
    var { providerId: r } = n,
      i = Yf(n, ["providerId"]);
    return {
      providerId: r,
      uid: i.rawId || "",
      displayName: i.displayName || null,
      email: i.email || null,
      phoneNumber: i.phoneNumber || null,
      photoURL: i.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $5(a, n) {
  const r = await Gp(a, {}, async () => {
    const i = Rl({ grant_type: "refresh_token", refresh_token: n }).slice(1),
      { tokenApiHost: o, apiKey: u } = a.config,
      f = await Yp(a, o, "/v1/token", `key=${u}`),
      h = await a._getAdditionalHeaders();
    return (
      (h["Content-Type"] = "application/x-www-form-urlencoded"),
      Pp.fetch()(f, { method: "POST", headers: h, body: i })
    );
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token,
  };
}
async function F5(a, n) {
  return Ws(a, "POST", "/v2/accounts:revokeToken", Qf(a, n));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zs {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(n) {
    Ne(n.idToken, "internal-error"),
      Ne(typeof n.idToken < "u", "internal-error"),
      Ne(typeof n.refreshToken < "u", "internal-error");
    const r =
      "expiresIn" in n && typeof n.expiresIn < "u"
        ? Number(n.expiresIn)
        : w0(n.idToken);
    this.updateTokensAndExpiration(n.idToken, n.refreshToken, r);
  }
  updateFromIdToken(n) {
    Ne(n.length !== 0, "internal-error");
    const r = w0(n);
    this.updateTokensAndExpiration(n, null, r);
  }
  async getToken(n, r = !1) {
    return !r && this.accessToken && !this.isExpired
      ? this.accessToken
      : (Ne(this.refreshToken, n, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(n, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(n, r) {
    const { accessToken: i, refreshToken: o, expiresIn: u } = await $5(n, r);
    this.updateTokensAndExpiration(i, o, Number(u));
  }
  updateTokensAndExpiration(n, r, i) {
    (this.refreshToken = r || null),
      (this.accessToken = n || null),
      (this.expirationTime = Date.now() + i * 1e3);
  }
  static fromJSON(n, r) {
    const { refreshToken: i, accessToken: o, expirationTime: u } = r,
      f = new zs();
    return (
      i &&
        (Ne(typeof i == "string", "internal-error", { appName: n }),
        (f.refreshToken = i)),
      o &&
        (Ne(typeof o == "string", "internal-error", { appName: n }),
        (f.accessToken = o)),
      u &&
        (Ne(typeof u == "number", "internal-error", { appName: n }),
        (f.expirationTime = u)),
      f
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(n) {
    (this.accessToken = n.accessToken),
      (this.refreshToken = n.refreshToken),
      (this.expirationTime = n.expirationTime);
  }
  _clone() {
    return Object.assign(new zs(), this.toJSON());
  }
  _performRefresh() {
    return ka("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lr(a, n) {
  Ne(typeof a == "string" || typeof a > "u", "internal-error", { appName: n });
}
class On {
  constructor(n) {
    var { uid: r, auth: i, stsTokenManager: o } = n,
      u = Yf(n, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new P5(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = r),
      (this.auth = i),
      (this.stsTokenManager = o),
      (this.accessToken = o.accessToken),
      (this.displayName = u.displayName || null),
      (this.email = u.email || null),
      (this.emailVerified = u.emailVerified || !1),
      (this.phoneNumber = u.phoneNumber || null),
      (this.photoURL = u.photoURL || null),
      (this.isAnonymous = u.isAnonymous || !1),
      (this.tenantId = u.tenantId || null),
      (this.providerData = u.providerData ? [...u.providerData] : []),
      (this.metadata = new wf(u.createdAt || void 0, u.lastLoginAt || void 0));
  }
  async getIdToken(n) {
    const r = await hl(this, this.stsTokenManager.getToken(this.auth, n));
    return (
      Ne(r, this.auth, "internal-error"),
      this.accessToken !== r &&
        ((this.accessToken = r),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      r
    );
  }
  getIdTokenResult(n) {
    return Z5(this, n);
  }
  reload() {
    return G5(this);
  }
  _assign(n) {
    this !== n &&
      (Ne(this.uid === n.uid, this.auth, "internal-error"),
      (this.displayName = n.displayName),
      (this.photoURL = n.photoURL),
      (this.email = n.email),
      (this.emailVerified = n.emailVerified),
      (this.phoneNumber = n.phoneNumber),
      (this.isAnonymous = n.isAnonymous),
      (this.tenantId = n.tenantId),
      (this.providerData = n.providerData.map((r) => Object.assign({}, r))),
      this.metadata._copy(n.metadata),
      this.stsTokenManager._assign(n.stsTokenManager));
  }
  _clone(n) {
    const r = new On(
      Object.assign(Object.assign({}, this), {
        auth: n,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(n) {
    Ne(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = n),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(n) {
    this.reloadListener ? this.reloadListener(n) : (this.reloadUserInfo = n);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(n, r = !1) {
    let i = !1;
    n.idToken &&
      n.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(n), (i = !0)),
      r && (await hc(this)),
      await this.auth._persistUserIfCurrent(this),
      i && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Jn(this.auth.app)) return Promise.reject(Vr(this.auth));
    const n = await this.getIdToken();
    return (
      await hl(this, V5(this.auth, { idToken: n })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((n) => Object.assign({}, n)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON(),
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name },
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(n, r) {
    var i, o, u, f, h, g, m, _;
    const v = (i = r.displayName) !== null && i !== void 0 ? i : void 0,
      C = (o = r.email) !== null && o !== void 0 ? o : void 0,
      R = (u = r.phoneNumber) !== null && u !== void 0 ? u : void 0,
      A = (f = r.photoURL) !== null && f !== void 0 ? f : void 0,
      G = (h = r.tenantId) !== null && h !== void 0 ? h : void 0,
      H = (g = r._redirectEventId) !== null && g !== void 0 ? g : void 0,
      B = (m = r.createdAt) !== null && m !== void 0 ? m : void 0,
      I = (_ = r.lastLoginAt) !== null && _ !== void 0 ? _ : void 0,
      {
        uid: V,
        emailVerified: te,
        isAnonymous: U,
        providerData: ne,
        stsTokenManager: $,
      } = r;
    Ne(V && $, n, "internal-error");
    const me = zs.fromJSON(this.name, $);
    Ne(typeof V == "string", n, "internal-error"),
      lr(v, n.name),
      lr(C, n.name),
      Ne(typeof te == "boolean", n, "internal-error"),
      Ne(typeof U == "boolean", n, "internal-error"),
      lr(R, n.name),
      lr(A, n.name),
      lr(G, n.name),
      lr(H, n.name),
      lr(B, n.name),
      lr(I, n.name);
    const ve = new On({
      uid: V,
      auth: n,
      email: C,
      emailVerified: te,
      displayName: v,
      isAnonymous: U,
      photoURL: A,
      phoneNumber: R,
      tenantId: G,
      stsTokenManager: me,
      createdAt: B,
      lastLoginAt: I,
    });
    return (
      ne &&
        Array.isArray(ne) &&
        (ve.providerData = ne.map((Re) => Object.assign({}, Re))),
      H && (ve._redirectEventId = H),
      ve
    );
  }
  static async _fromIdTokenResponse(n, r, i = !1) {
    const o = new zs();
    o.updateFromServerResponse(r);
    const u = new On({
      uid: r.localId,
      auth: n,
      stsTokenManager: o,
      isAnonymous: i,
    });
    return await hc(u), u;
  }
  static async _fromGetAccountInfoResponse(n, r, i) {
    const o = r.users[0];
    Ne(o.localId !== void 0, "internal-error");
    const u = o.providerUserInfo !== void 0 ? $p(o.providerUserInfo) : [],
      f = !(o.email && o.passwordHash) && !(u != null && u.length),
      h = new zs();
    h.updateFromIdToken(i);
    const g = new On({
        uid: o.localId,
        auth: n,
        stsTokenManager: h,
        isAnonymous: f,
      }),
      m = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: u,
        metadata: new wf(o.createdAt, o.lastLoginAt),
        isAnonymous: !(o.email && o.passwordHash) && !(u != null && u.length),
      };
    return Object.assign(g, m), g;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S0 = new Map();
function Ra(a) {
  ja(a instanceof Function, "Expected a class definition");
  let n = S0.get(a);
  return n
    ? (ja(n instanceof a, "Instance stored in cache mismatched with class"), n)
    : ((n = new a()), S0.set(a, n), n);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fp {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(n, r) {
    this.storage[n] = r;
  }
  async _get(n) {
    const r = this.storage[n];
    return r === void 0 ? null : r;
  }
  async _remove(n) {
    delete this.storage[n];
  }
  _addListener(n, r) {}
  _removeListener(n, r) {}
}
Fp.type = "NONE";
const E0 = Fp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rc(a, n, r) {
  return `firebase:${a}:${n}:${r}`;
}
class Is {
  constructor(n, r, i) {
    (this.persistence = n), (this.auth = r), (this.userKey = i);
    const { config: o, name: u } = this.auth;
    (this.fullUserKey = rc(this.userKey, o.apiKey, u)),
      (this.fullPersistenceKey = rc("persistence", o.apiKey, u)),
      (this.boundEventHandler = r._onStorageEvent.bind(r)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(n) {
    return this.persistence._set(this.fullUserKey, n.toJSON());
  }
  async getCurrentUser() {
    const n = await this.persistence._get(this.fullUserKey);
    if (!n) return null;
    if (typeof n == "string") {
      const r = await fc(this.auth, { idToken: n }).catch(() => {});
      return r ? On._fromGetAccountInfoResponse(this.auth, r, n) : null;
    }
    return On._fromJSON(this.auth, n);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(n) {
    if (this.persistence === n) return;
    const r = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = n), r))
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(n, r, i = "authUser") {
    if (!r.length) return new Is(Ra(E0), n, i);
    const o = (
      await Promise.all(
        r.map(async (m) => {
          if (await m._isAvailable()) return m;
        }),
      )
    ).filter((m) => m);
    let u = o[0] || Ra(E0);
    const f = rc(i, n.config.apiKey, n.name);
    let h = null;
    for (const m of r)
      try {
        const _ = await m._get(f);
        if (_) {
          let v;
          if (typeof _ == "string") {
            const C = await fc(n, { idToken: _ }).catch(() => {});
            if (!C) break;
            v = await On._fromGetAccountInfoResponse(n, C, _);
          } else v = On._fromJSON(n, _);
          m !== u && (h = v), (u = m);
          break;
        }
      } catch {}
    const g = o.filter((m) => m._shouldAllowMigration);
    return !u._shouldAllowMigration || !g.length
      ? new Is(u, n, i)
      : ((u = g[0]),
        h && (await u._set(f, h.toJSON())),
        await Promise.all(
          r.map(async (m) => {
            if (m !== u)
              try {
                await m._remove(f);
              } catch {}
          }),
        ),
        new Is(u, n, i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T0(a) {
  const n = a.toLowerCase();
  if (n.includes("opera/") || n.includes("opr/") || n.includes("opios/"))
    return "Opera";
  if (Jp(n)) return "IEMobile";
  if (n.includes("msie") || n.includes("trident/")) return "IE";
  if (n.includes("edge/")) return "Edge";
  if (Xp(n)) return "Firefox";
  if (n.includes("silk/")) return "Silk";
  if (eg(n)) return "Blackberry";
  if (tg(n)) return "Webos";
  if (Qp(n)) return "Safari";
  if ((n.includes("chrome/") || Kp(n)) && !n.includes("edge/")) return "Chrome";
  if (Wp(n)) return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      i = a.match(r);
    if ((i == null ? void 0 : i.length) === 2) return i[1];
  }
  return "Other";
}
function Xp(a = Pt()) {
  return /firefox\//i.test(a);
}
function Qp(a = Pt()) {
  const n = a.toLowerCase();
  return (
    n.includes("safari/") &&
    !n.includes("chrome/") &&
    !n.includes("crios/") &&
    !n.includes("android")
  );
}
function Kp(a = Pt()) {
  return /crios\//i.test(a);
}
function Jp(a = Pt()) {
  return /iemobile/i.test(a);
}
function Wp(a = Pt()) {
  return /android/i.test(a);
}
function eg(a = Pt()) {
  return /blackberry/i.test(a);
}
function tg(a = Pt()) {
  return /webos/i.test(a);
}
function Jf(a = Pt()) {
  return (
    /iphone|ipad|ipod/i.test(a) || (/macintosh/i.test(a) && /mobile/i.test(a))
  );
}
function X5(a = Pt()) {
  var n;
  return (
    Jf(a) &&
    !!(!((n = window.navigator) === null || n === void 0) && n.standalone)
  );
}
function Q5() {
  return c6() && document.documentMode === 10;
}
function ng(a = Pt()) {
  return Jf(a) || Wp(a) || tg(a) || eg(a) || /windows phone/i.test(a) || Jp(a);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ag(a, n = []) {
  let r;
  switch (a) {
    case "Browser":
      r = T0(Pt());
      break;
    case "Worker":
      r = `${T0(Pt())}-${a}`;
      break;
    default:
      r = a;
  }
  const i = n.length ? n.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Ol}/${i}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K5 {
  constructor(n) {
    (this.auth = n), (this.queue = []);
  }
  pushCallback(n, r) {
    const i = (u) =>
      new Promise((f, h) => {
        try {
          const g = n(u);
          f(g);
        } catch (g) {
          h(g);
        }
      });
    (i.onAbort = r), this.queue.push(i);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(n) {
    if (this.auth.currentUser === n) return;
    const r = [];
    try {
      for (const i of this.queue) await i(n), i.onAbort && r.push(i.onAbort);
    } catch (i) {
      r.reverse();
      for (const o of r)
        try {
          o();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: i == null ? void 0 : i.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function J5(a, n = {}) {
  return Ws(a, "GET", "/v2/passwordPolicy", Qf(a, n));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const W5 = 6;
class e8 {
  constructor(n) {
    var r, i, o, u;
    const f = n.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (r = f.minPasswordLength) !== null && r !== void 0 ? r : W5),
      f.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = f.maxPasswordLength),
      f.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          f.containsLowercaseCharacter),
      f.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          f.containsUppercaseCharacter),
      f.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          f.containsNumericCharacter),
      f.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          f.containsNonAlphanumericCharacter),
      (this.enforcementState = n.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (o =
          (i = n.allowedNonAlphanumericCharacters) === null || i === void 0
            ? void 0
            : i.join("")) !== null && o !== void 0
          ? o
          : ""),
      (this.forceUpgradeOnSignin =
        (u = n.forceUpgradeOnSignin) !== null && u !== void 0 ? u : !1),
      (this.schemaVersion = n.schemaVersion);
  }
  validatePassword(n) {
    var r, i, o, u, f, h;
    const g = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(n, g),
      this.validatePasswordCharacterOptions(n, g),
      g.isValid &&
        (g.isValid =
          (r = g.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0),
      g.isValid &&
        (g.isValid =
          (i = g.meetsMaxPasswordLength) !== null && i !== void 0 ? i : !0),
      g.isValid &&
        (g.isValid =
          (o = g.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
      g.isValid &&
        (g.isValid =
          (u = g.containsUppercaseLetter) !== null && u !== void 0 ? u : !0),
      g.isValid &&
        (g.isValid =
          (f = g.containsNumericCharacter) !== null && f !== void 0 ? f : !0),
      g.isValid &&
        (g.isValid =
          (h = g.containsNonAlphanumericCharacter) !== null && h !== void 0
            ? h
            : !0),
      g
    );
  }
  validatePasswordLengthOptions(n, r) {
    const i = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    i && (r.meetsMinPasswordLength = n.length >= i),
      o && (r.meetsMaxPasswordLength = n.length <= o);
  }
  validatePasswordCharacterOptions(n, r) {
    this.updatePasswordCharacterOptionsStatuses(r, !1, !1, !1, !1);
    let i;
    for (let o = 0; o < n.length; o++)
      (i = n.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          r,
          i >= "a" && i <= "z",
          i >= "A" && i <= "Z",
          i >= "0" && i <= "9",
          this.allowedNonAlphanumericCharacters.includes(i),
        );
  }
  updatePasswordCharacterOptionsStatuses(n, r, i, o, u) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (n.containsLowercaseLetter || (n.containsLowercaseLetter = r)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (n.containsUppercaseLetter || (n.containsUppercaseLetter = i)),
      this.customStrengthOptions.containsNumericCharacter &&
        (n.containsNumericCharacter || (n.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (n.containsNonAlphanumericCharacter ||
          (n.containsNonAlphanumericCharacter = u));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8 {
  constructor(n, r, i, o) {
    (this.app = n),
      (this.heartbeatServiceProvider = r),
      (this.appCheckServiceProvider = i),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new A0(this)),
      (this.idTokenSubscription = new A0(this)),
      (this.beforeStateQueue = new K5(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = qp),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = n.name),
      (this.clientVersion = o.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (u) => (this._resolvePersistenceManagerAvailable = u),
      ));
  }
  _initializeWithPersistence(n, r) {
    return (
      r && (this._popupRedirectResolver = Ra(r)),
      (this._initializationPromise = this.queue(async () => {
        var i, o, u;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Is.create(this, n)),
          (i = this._resolvePersistenceManagerAvailable) === null ||
            i === void 0 ||
            i.call(this),
          !this._deleted)
        ) {
          if (
            !((o = this._popupRedirectResolver) === null || o === void 0) &&
            o._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(r),
            (this.lastNotifiedUid =
              ((u = this.currentUser) === null || u === void 0
                ? void 0
                : u.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const n = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !n)) {
      if (this.currentUser && n && this.currentUser.uid === n.uid) {
        this._currentUser._assign(n), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(n, !0);
    }
  }
  async initializeCurrentUserFromIdToken(n) {
    try {
      const r = await fc(this, { idToken: n }),
        i = await On._fromGetAccountInfoResponse(this, r, n);
      await this.directlySetCurrentUser(i);
    } catch (r) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        r,
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(n) {
    var r;
    if (Jn(this.app)) {
      const f = this.app.settings.authIdToken;
      return f
        ? new Promise((h) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(f).then(h, h),
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const i = await this.assertedPersistence.getCurrentUser();
    let o = i,
      u = !1;
    if (n && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const f =
          (r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId,
        h = o == null ? void 0 : o._redirectEventId,
        g = await this.tryRedirectSignIn(n);
      (!f || f === h) && g != null && g.user && ((o = g.user), (u = !0));
    }
    if (!o) return this.directlySetCurrentUser(null);
    if (!o._redirectEventId) {
      if (u)
        try {
          await this.beforeStateQueue.runMiddleware(o);
        } catch (f) {
          (o = i),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(f),
            );
        }
      return o
        ? this.reloadAndSetCurrentUserOrClear(o)
        : this.directlySetCurrentUser(null);
    }
    return (
      Ne(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === o._redirectEventId
        ? this.directlySetCurrentUser(o)
        : this.reloadAndSetCurrentUserOrClear(o)
    );
  }
  async tryRedirectSignIn(n) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, n, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(n) {
    try {
      await hc(n);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(n);
  }
  useDeviceLanguage() {
    this.languageCode = L5();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(n) {
    if (Jn(this.app)) return Promise.reject(Vr(this));
    const r = n ? Js(n) : null;
    return (
      r &&
        Ne(
          r.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token",
        ),
      this._updateCurrentUser(r && r._clone(this))
    );
  }
  async _updateCurrentUser(n, r = !1) {
    if (!this._deleted)
      return (
        n && Ne(this.tenantId === n.tenantId, this, "tenant-id-mismatch"),
        r || (await this.beforeStateQueue.runMiddleware(n)),
        this.queue(async () => {
          await this.directlySetCurrentUser(n), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Jn(this.app)
      ? Promise.reject(Vr(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(n) {
    return Jn(this.app)
      ? Promise.reject(Vr(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Ra(n));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(n) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {},
          ),
        )
      : r.validatePassword(n);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const n = await J5(this),
      r = new e8(n);
    this.tenantId === null
      ? (this._projectPasswordPolicy = r)
      : (this._tenantPasswordPolicies[this.tenantId] = r);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(n) {
    this._errorFactory = new kl("auth", "Firebase", n());
  }
  onAuthStateChanged(n, r, i) {
    return this.registerStateListener(this.authStateSubscription, n, r, i);
  }
  beforeAuthStateChanged(n, r) {
    return this.beforeStateQueue.pushCallback(n, r);
  }
  onIdTokenChanged(n, r, i) {
    return this.registerStateListener(this.idTokenSubscription, n, r, i);
  }
  authStateReady() {
    return new Promise((n, r) => {
      if (this.currentUser) n();
      else {
        const i = this.onAuthStateChanged(() => {
          i(), n();
        }, r);
      }
    });
  }
  async revokeAccessToken(n) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(),
        i = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: n,
          idToken: r,
        };
      this.tenantId != null && (i.tenantId = this.tenantId), await F5(this, i);
    }
  }
  toJSON() {
    var n;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (n = this._currentUser) === null || n === void 0 ? void 0 : n.toJSON(),
    };
  }
  async _setRedirectUser(n, r) {
    const i = await this.getOrInitRedirectPersistenceManager(r);
    return n === null ? i.removeCurrentUser() : i.setCurrentUser(n);
  }
  async getOrInitRedirectPersistenceManager(n) {
    if (!this.redirectPersistenceManager) {
      const r = (n && Ra(n)) || this._popupRedirectResolver;
      Ne(r, this, "argument-error"),
        (this.redirectPersistenceManager = await Is.create(
          this,
          [Ra(r._redirectPersistence)],
          "redirectUser",
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(n) {
    var r, i;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((r = this._currentUser) === null || r === void 0
        ? void 0
        : r._redirectEventId) === n
        ? this._currentUser
        : ((i = this.redirectUser) === null || i === void 0
              ? void 0
              : i._redirectEventId) === n
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(n) {
    if (n === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(n));
  }
  _notifyListenersIfCurrent(n) {
    n === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var n, r;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const i =
      (r = (n = this.currentUser) === null || n === void 0 ? void 0 : n.uid) !==
        null && r !== void 0
        ? r
        : null;
    this.lastNotifiedUid !== i &&
      ((this.lastNotifiedUid = i),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(n, r, i, o) {
    if (this._deleted) return () => {};
    const u = typeof r == "function" ? r : r.next.bind(r);
    let f = !1;
    const h = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (Ne(h, this, "internal-error"),
      h.then(() => {
        f || u(this.currentUser);
      }),
      typeof r == "function")
    ) {
      const g = n.addObserver(r, i, o);
      return () => {
        (f = !0), g();
      };
    } else {
      const g = n.addObserver(r);
      return () => {
        (f = !0), g();
      };
    }
  }
  async directlySetCurrentUser(n) {
    this.currentUser &&
      this.currentUser !== n &&
      this._currentUser._stopProactiveRefresh(),
      n && this.isProactiveRefreshEnabled && n._startProactiveRefresh(),
      (this.currentUser = n),
      n
        ? await this.assertedPersistence.setCurrentUser(n)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(n) {
    return (this.operations = this.operations.then(n, n)), this.operations;
  }
  get assertedPersistence() {
    return (
      Ne(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(n) {
    !n ||
      this.frameworks.includes(n) ||
      (this.frameworks.push(n),
      this.frameworks.sort(),
      (this.clientVersion = ag(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var n;
    const r = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (r["X-Firebase-gmpid"] = this.app.options.appId);
    const i = await ((n = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || n === void 0
      ? void 0
      : n.getHeartbeatsHeader());
    i && (r["X-Firebase-Client"] = i);
    const o = await this._getAppCheckToken();
    return o && (r["X-Firebase-AppCheck"] = o), r;
  }
  async _getAppCheckToken() {
    var n;
    if (Jn(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const r = await ((n = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || n === void 0
      ? void 0
      : n.getToken());
    return (
      r != null &&
        r.error &&
        O5(`Error while retrieving App Check token: ${r.error}`),
      r == null ? void 0 : r.token
    );
  }
}
function Dc(a) {
  return Js(a);
}
class A0 {
  constructor(n) {
    (this.auth = n),
      (this.observer = null),
      (this.addObserver = g6((r) => (this.observer = r)));
  }
  get next() {
    return (
      Ne(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Wf = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function n8(a) {
  Wf = a;
}
function a8(a) {
  return Wf.loadJS(a);
}
function r8() {
  return Wf.gapiScript;
}
function s8(a) {
  return `__${a}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i8(a, n) {
  const r = zp(a, "auth");
  if (r.isInitialized()) {
    const o = r.getImmediate(),
      u = r.getOptions();
    if (Zs(u, n ?? {})) return o;
    na(o, "already-initialized");
  }
  return r.initialize({ options: n });
}
function l8(a, n) {
  const r = (n == null ? void 0 : n.persistence) || [],
    i = (Array.isArray(r) ? r : [r]).map(Ra);
  n != null && n.errorMap && a._updateErrorMap(n.errorMap),
    a._initializeWithPersistence(
      i,
      n == null ? void 0 : n.popupRedirectResolver,
    );
}
function o8(a, n, r) {
  const i = Dc(a);
  Ne(/^https?:\/\//.test(n), i, "invalid-emulator-scheme");
  const o = !1,
    u = rg(n),
    { host: f, port: h } = c8(n),
    g = h === null ? "" : `:${h}`,
    m = { url: `${u}//${f}${g}/` },
    _ = Object.freeze({
      host: f,
      port: h,
      protocol: u.replace(":", ""),
      options: Object.freeze({ disableWarnings: o }),
    });
  if (!i._canInitEmulator) {
    Ne(i.config.emulator && i.emulatorConfig, i, "emulator-config-failed"),
      Ne(
        Zs(m, i.config.emulator) && Zs(_, i.emulatorConfig),
        i,
        "emulator-config-failed",
      );
    return;
  }
  (i.config.emulator = m),
    (i.emulatorConfig = _),
    (i.settings.appVerificationDisabledForTesting = !0),
    Pf(f) ? (t6(`${u}//${f}${g}`), r6("Auth", !0)) : u8();
}
function rg(a) {
  const n = a.indexOf(":");
  return n < 0 ? "" : a.substr(0, n + 1);
}
function c8(a) {
  const n = rg(a),
    r = /(\/\/)?([^?#/]+)/.exec(a.substr(n.length));
  if (!r) return { host: "", port: null };
  const i = r[2].split("@").pop() || "",
    o = /^(\[[^\]]+\])(:|$)/.exec(i);
  if (o) {
    const u = o[1];
    return { host: u, port: N0(i.substr(u.length + 1)) };
  } else {
    const [u, f] = i.split(":");
    return { host: u, port: N0(f) };
  }
}
function N0(a) {
  if (!a) return null;
  const n = Number(a);
  return isNaN(n) ? null : n;
}
function u8() {
  function a() {
    const n = document.createElement("p"),
      r = n.style;
    (n.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (r.position = "fixed"),
      (r.width = "100%"),
      (r.backgroundColor = "#ffffff"),
      (r.border = ".1em solid #000000"),
      (r.color = "#b50000"),
      (r.bottom = "0px"),
      (r.left = "0px"),
      (r.margin = "0px"),
      (r.zIndex = "10000"),
      (r.textAlign = "center"),
      n.classList.add("firebase-emulator-warning"),
      document.body.appendChild(n);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", a)
        : a());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sg {
  constructor(n, r) {
    (this.providerId = n), (this.signInMethod = r);
  }
  toJSON() {
    return ka("not implemented");
  }
  _getIdTokenResponse(n) {
    return ka("not implemented");
  }
  _linkToIdToken(n, r) {
    return ka("not implemented");
  }
  _getReauthenticationResolver(n) {
    return ka("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Hs(a, n) {
  return I5(a, "POST", "/v1/accounts:signInWithIdp", Qf(a, n));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const d8 = "http://localhost";
class qr extends sg {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(n) {
    const r = new qr(n.providerId, n.signInMethod);
    return (
      n.idToken || n.accessToken
        ? (n.idToken && (r.idToken = n.idToken),
          n.accessToken && (r.accessToken = n.accessToken),
          n.nonce && !n.pendingToken && (r.nonce = n.nonce),
          n.pendingToken && (r.pendingToken = n.pendingToken))
        : n.oauthToken && n.oauthTokenSecret
          ? ((r.accessToken = n.oauthToken), (r.secret = n.oauthTokenSecret))
          : na("argument-error"),
      r
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(n) {
    const r = typeof n == "string" ? JSON.parse(n) : n,
      { providerId: i, signInMethod: o } = r,
      u = Yf(r, ["providerId", "signInMethod"]);
    if (!i || !o) return null;
    const f = new qr(i, o);
    return (
      (f.idToken = u.idToken || void 0),
      (f.accessToken = u.accessToken || void 0),
      (f.secret = u.secret),
      (f.nonce = u.nonce),
      (f.pendingToken = u.pendingToken || null),
      f
    );
  }
  _getIdTokenResponse(n) {
    const r = this.buildRequest();
    return Hs(n, r);
  }
  _linkToIdToken(n, r) {
    const i = this.buildRequest();
    return (i.idToken = r), Hs(n, i);
  }
  _getReauthenticationResolver(n) {
    const r = this.buildRequest();
    return (r.autoCreate = !1), Hs(n, r);
  }
  buildRequest() {
    const n = { requestUri: d8, returnSecureToken: !0 };
    if (this.pendingToken) n.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken),
        this.accessToken && (r.access_token = this.accessToken),
        this.secret && (r.oauth_token_secret = this.secret),
        (r.providerId = this.providerId),
        this.nonce && !this.pendingToken && (r.nonce = this.nonce),
        (n.postBody = Rl(r));
    }
    return n;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eh {
  constructor(n) {
    (this.providerId = n),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(n) {
    this.defaultLanguageCode = n;
  }
  setCustomParameters(n) {
    return (this.customParameters = n), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ml extends eh {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(n) {
    return this.scopes.includes(n) || this.scopes.push(n), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class or extends Ml {
  constructor() {
    super("facebook.com");
  }
  static credential(n) {
    return qr._fromParams({
      providerId: or.PROVIDER_ID,
      signInMethod: or.FACEBOOK_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return or.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return or.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return or.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
or.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
or.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cr extends Ml {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(n, r) {
    return qr._fromParams({
      providerId: cr.PROVIDER_ID,
      signInMethod: cr.GOOGLE_SIGN_IN_METHOD,
      idToken: n,
      accessToken: r,
    });
  }
  static credentialFromResult(n) {
    return cr.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return cr.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthIdToken: r, oauthAccessToken: i } = n;
    if (!r && !i) return null;
    try {
      return cr.credential(r, i);
    } catch {
      return null;
    }
  }
}
cr.GOOGLE_SIGN_IN_METHOD = "google.com";
cr.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Aa extends Ml {
  constructor() {
    super("github.com");
  }
  static credential(n) {
    return qr._fromParams({
      providerId: Aa.PROVIDER_ID,
      signInMethod: Aa.GITHUB_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return Aa.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Aa.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return Aa.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Aa.GITHUB_SIGN_IN_METHOD = "github.com";
Aa.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ur extends Ml {
  constructor() {
    super("twitter.com");
  }
  static credential(n, r) {
    return qr._fromParams({
      providerId: ur.PROVIDER_ID,
      signInMethod: ur.TWITTER_SIGN_IN_METHOD,
      oauthToken: n,
      oauthTokenSecret: r,
    });
  }
  static credentialFromResult(n) {
    return ur.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return ur.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthAccessToken: r, oauthTokenSecret: i } = n;
    if (!r || !i) return null;
    try {
      return ur.credential(r, i);
    } catch {
      return null;
    }
  }
}
ur.TWITTER_SIGN_IN_METHOD = "twitter.com";
ur.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ps {
  constructor(n) {
    (this.user = n.user),
      (this.providerId = n.providerId),
      (this._tokenResponse = n._tokenResponse),
      (this.operationType = n.operationType);
  }
  static async _fromIdTokenResponse(n, r, i, o = !1) {
    const u = await On._fromIdTokenResponse(n, i, o),
      f = k0(i);
    return new Ps({
      user: u,
      providerId: f,
      _tokenResponse: i,
      operationType: r,
    });
  }
  static async _forOperation(n, r, i) {
    await n._updateTokensIfNecessary(i, !0);
    const o = k0(i);
    return new Ps({
      user: n,
      providerId: o,
      _tokenResponse: i,
      operationType: r,
    });
  }
}
function k0(a) {
  return a.providerId ? a.providerId : "phoneNumber" in a ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mc extends yr {
  constructor(n, r, i, o) {
    var u;
    super(r.code, r.message),
      (this.operationType = i),
      (this.user = o),
      Object.setPrototypeOf(this, mc.prototype),
      (this.customData = {
        appName: n.name,
        tenantId: (u = n.tenantId) !== null && u !== void 0 ? u : void 0,
        _serverResponse: r.customData._serverResponse,
        operationType: i,
      });
  }
  static _fromErrorAndOperation(n, r, i, o) {
    return new mc(n, r, i, o);
  }
}
function ig(a, n, r, i) {
  return (
    n === "reauthenticate"
      ? r._getReauthenticationResolver(a)
      : r._getIdTokenResponse(a)
  ).catch((u) => {
    throw u.code === "auth/multi-factor-auth-required"
      ? mc._fromErrorAndOperation(a, u, n, i)
      : u;
  });
}
async function f8(a, n, r = !1) {
  const i = await hl(a, n._linkToIdToken(a.auth, await a.getIdToken()), r);
  return Ps._forOperation(a, "link", i);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function h8(a, n, r = !1) {
  const { auth: i } = a;
  if (Jn(i.app)) return Promise.reject(Vr(i));
  const o = "reauthenticate";
  try {
    const u = await hl(a, ig(i, o, n, a), r);
    Ne(u.idToken, i, "internal-error");
    const f = Kf(u.idToken);
    Ne(f, i, "internal-error");
    const { sub: h } = f;
    return Ne(a.uid === h, i, "user-mismatch"), Ps._forOperation(a, o, u);
  } catch (u) {
    throw (
      ((u == null ? void 0 : u.code) === "auth/user-not-found" &&
        na(i, "user-mismatch"),
      u)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function m8(a, n, r = !1) {
  if (Jn(a.app)) return Promise.reject(Vr(a));
  const i = "signIn",
    o = await ig(a, i, n),
    u = await Ps._fromIdTokenResponse(a, i, o);
  return r || (await a._updateCurrentUser(u.user)), u;
}
function p8(a, n, r, i) {
  return Js(a).onIdTokenChanged(n, r, i);
}
function g8(a, n, r) {
  return Js(a).beforeAuthStateChanged(n, r);
}
const pc = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lg {
  constructor(n, r) {
    (this.storageRetriever = n), (this.type = r);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(pc, "1"),
          this.storage.removeItem(pc),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(n, r) {
    return this.storage.setItem(n, JSON.stringify(r)), Promise.resolve();
  }
  _get(n) {
    const r = this.storage.getItem(n);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(n) {
    return this.storage.removeItem(n), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y8 = 1e3,
  v8 = 10;
class og extends lg {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (n, r) => this.onStorageEvent(n, r)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = ng()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(n) {
    for (const r of Object.keys(this.listeners)) {
      const i = this.storage.getItem(r),
        o = this.localCache[r];
      i !== o && n(r, o, i);
    }
  }
  onStorageEvent(n, r = !1) {
    if (!n.key) {
      this.forAllChangedKeys((f, h, g) => {
        this.notifyListeners(f, g);
      });
      return;
    }
    const i = n.key;
    r ? this.detachListener() : this.stopPolling();
    const o = () => {
        const f = this.storage.getItem(i);
        (!r && this.localCache[i] === f) || this.notifyListeners(i, f);
      },
      u = this.storage.getItem(i);
    Q5() && u !== n.newValue && n.newValue !== n.oldValue
      ? setTimeout(o, v8)
      : o();
  }
  notifyListeners(n, r) {
    this.localCache[n] = r;
    const i = this.listeners[n];
    if (i) for (const o of Array.from(i)) o(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((n, r, i) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: n, oldValue: r, newValue: i }),
            !0,
          );
        });
      }, y8));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(n, r) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[n] ||
        ((this.listeners[n] = new Set()),
        (this.localCache[n] = this.storage.getItem(n))),
      this.listeners[n].add(r);
  }
  _removeListener(n, r) {
    this.listeners[n] &&
      (this.listeners[n].delete(r),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(n, r) {
    await super._set(n, r), (this.localCache[n] = JSON.stringify(r));
  }
  async _get(n) {
    const r = await super._get(n);
    return (this.localCache[n] = JSON.stringify(r)), r;
  }
  async _remove(n) {
    await super._remove(n), delete this.localCache[n];
  }
}
og.type = "LOCAL";
const b8 = og;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cg extends lg {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(n, r) {}
  _removeListener(n, r) {}
}
cg.type = "SESSION";
const ug = cg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _8(a) {
  return Promise.all(
    a.map(async (n) => {
      try {
        return { fulfilled: !0, value: await n };
      } catch (r) {
        return { fulfilled: !1, reason: r };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mc {
  constructor(n) {
    (this.eventTarget = n),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(n) {
    const r = this.receivers.find((o) => o.isListeningto(n));
    if (r) return r;
    const i = new Mc(n);
    return this.receivers.push(i), i;
  }
  isListeningto(n) {
    return this.eventTarget === n;
  }
  async handleEvent(n) {
    const r = n,
      { eventId: i, eventType: o, data: u } = r.data,
      f = this.handlersMap[o];
    if (!(f != null && f.size)) return;
    r.ports[0].postMessage({ status: "ack", eventId: i, eventType: o });
    const h = Array.from(f).map(async (m) => m(r.origin, u)),
      g = await _8(h);
    r.ports[0].postMessage({
      status: "done",
      eventId: i,
      eventType: o,
      response: g,
    });
  }
  _subscribe(n, r) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[n] || (this.handlersMap[n] = new Set()),
      this.handlersMap[n].add(r);
  }
  _unsubscribe(n, r) {
    this.handlersMap[n] && r && this.handlersMap[n].delete(r),
      (!r || this.handlersMap[n].size === 0) && delete this.handlersMap[n],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Mc.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function th(a = "", n = 10) {
  let r = "";
  for (let i = 0; i < n; i++) r += Math.floor(Math.random() * 10);
  return a + r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x8 {
  constructor(n) {
    (this.target = n), (this.handlers = new Set());
  }
  removeMessageHandler(n) {
    n.messageChannel &&
      (n.messageChannel.port1.removeEventListener("message", n.onMessage),
      n.messageChannel.port1.close()),
      this.handlers.delete(n);
  }
  async _send(n, r, i = 50) {
    const o = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!o) throw new Error("connection_unavailable");
    let u, f;
    return new Promise((h, g) => {
      const m = th("", 20);
      o.port1.start();
      const _ = setTimeout(() => {
        g(new Error("unsupported_event"));
      }, i);
      (f = {
        messageChannel: o,
        onMessage(v) {
          const C = v;
          if (C.data.eventId === m)
            switch (C.data.status) {
              case "ack":
                clearTimeout(_),
                  (u = setTimeout(() => {
                    g(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(u), h(C.data.response);
                break;
              default:
                clearTimeout(_),
                  clearTimeout(u),
                  g(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(f),
        o.port1.addEventListener("message", f.onMessage),
        this.target.postMessage({ eventType: n, eventId: m, data: r }, [
          o.port2,
        ]);
    }).finally(() => {
      f && this.removeMessageHandler(f);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ea() {
  return window;
}
function C8(a) {
  ea().location.href = a;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dg() {
  return (
    typeof ea().WorkerGlobalScope < "u" &&
    typeof ea().importScripts == "function"
  );
}
async function w8() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function S8() {
  var a;
  return (
    ((a = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    a === void 0
      ? void 0
      : a.controller) || null
  );
}
function E8() {
  return dg() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fg = "firebaseLocalStorageDb",
  T8 = 1,
  gc = "firebaseLocalStorage",
  hg = "fbase_key";
class jl {
  constructor(n) {
    this.request = n;
  }
  toPromise() {
    return new Promise((n, r) => {
      this.request.addEventListener("success", () => {
        n(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          r(this.request.error);
        });
    });
  }
}
function jc(a, n) {
  return a.transaction([gc], n ? "readwrite" : "readonly").objectStore(gc);
}
function A8() {
  const a = indexedDB.deleteDatabase(fg);
  return new jl(a).toPromise();
}
function Sf() {
  const a = indexedDB.open(fg, T8);
  return new Promise((n, r) => {
    a.addEventListener("error", () => {
      r(a.error);
    }),
      a.addEventListener("upgradeneeded", () => {
        const i = a.result;
        try {
          i.createObjectStore(gc, { keyPath: hg });
        } catch (o) {
          r(o);
        }
      }),
      a.addEventListener("success", async () => {
        const i = a.result;
        i.objectStoreNames.contains(gc)
          ? n(i)
          : (i.close(), await A8(), n(await Sf()));
      });
  });
}
async function R0(a, n, r) {
  const i = jc(a, !0).put({ [hg]: n, value: r });
  return new jl(i).toPromise();
}
async function N8(a, n) {
  const r = jc(a, !1).get(n),
    i = await new jl(r).toPromise();
  return i === void 0 ? null : i.value;
}
function O0(a, n) {
  const r = jc(a, !0).delete(n);
  return new jl(r).toPromise();
}
const k8 = 800,
  R8 = 3;
class mg {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Sf()), this.db);
  }
  async _withRetries(n) {
    let r = 0;
    for (;;)
      try {
        const i = await this._openDb();
        return await n(i);
      } catch (i) {
        if (r++ > R8) throw i;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return dg() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Mc._getInstance(E8())),
      this.receiver._subscribe("keyChanged", async (n, r) => ({
        keyProcessed: (await this._poll()).includes(r.key),
      })),
      this.receiver._subscribe("ping", async (n, r) => ["keyChanged"]);
  }
  async initializeSender() {
    var n, r;
    if (((this.activeServiceWorker = await w8()), !this.activeServiceWorker))
      return;
    this.sender = new x8(this.activeServiceWorker);
    const i = await this.sender._send("ping", {}, 800);
    i &&
      !((n = i[0]) === null || n === void 0) &&
      n.fulfilled &&
      !((r = i[0]) === null || r === void 0) &&
      r.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(n) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        S8() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: n },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const n = await Sf();
      return await R0(n, pc, "1"), await O0(n, pc), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(n) {
    this.pendingWrites++;
    try {
      await n();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(n, r) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((i) => R0(i, n, r)),
        (this.localCache[n] = r),
        this.notifyServiceWorker(n)
      ),
    );
  }
  async _get(n) {
    const r = await this._withRetries((i) => N8(i, n));
    return (this.localCache[n] = r), r;
  }
  async _remove(n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => O0(r, n)),
        delete this.localCache[n],
        this.notifyServiceWorker(n)
      ),
    );
  }
  async _poll() {
    const n = await this._withRetries((o) => {
      const u = jc(o, !1).getAll();
      return new jl(u).toPromise();
    });
    if (!n) return [];
    if (this.pendingWrites !== 0) return [];
    const r = [],
      i = new Set();
    if (n.length !== 0)
      for (const { fbase_key: o, value: u } of n)
        i.add(o),
          JSON.stringify(this.localCache[o]) !== JSON.stringify(u) &&
            (this.notifyListeners(o, u), r.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] &&
        !i.has(o) &&
        (this.notifyListeners(o, null), r.push(o));
    return r;
  }
  notifyListeners(n, r) {
    this.localCache[n] = r;
    const i = this.listeners[n];
    if (i) for (const o of Array.from(i)) o(r);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), k8));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(n, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[n] || ((this.listeners[n] = new Set()), this._get(n)),
      this.listeners[n].add(r);
  }
  _removeListener(n, r) {
    this.listeners[n] &&
      (this.listeners[n].delete(r),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
mg.type = "LOCAL";
const O8 = mg;
new Dl(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pg(a, n) {
  return n
    ? Ra(n)
    : (Ne(a._popupRedirectResolver, a, "argument-error"),
      a._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nh extends sg {
  constructor(n) {
    super("custom", "custom"), (this.params = n);
  }
  _getIdTokenResponse(n) {
    return Hs(n, this._buildIdpRequest());
  }
  _linkToIdToken(n, r) {
    return Hs(n, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(n) {
    return Hs(n, this._buildIdpRequest());
  }
  _buildIdpRequest(n) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return n && (r.idToken = n), r;
  }
}
function D8(a) {
  return m8(a.auth, new nh(a), a.bypassAuthState);
}
function M8(a) {
  const { auth: n, user: r } = a;
  return Ne(r, n, "internal-error"), h8(r, new nh(a), a.bypassAuthState);
}
async function j8(a) {
  const { auth: n, user: r } = a;
  return Ne(r, n, "internal-error"), f8(r, new nh(a), a.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gg {
  constructor(n, r, i, o, u = !1) {
    (this.auth = n),
      (this.resolver = i),
      (this.user = o),
      (this.bypassAuthState = u),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(r) ? r : [r]);
  }
  execute() {
    return new Promise(async (n, r) => {
      this.pendingPromise = { resolve: n, reject: r };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (i) {
        this.reject(i);
      }
    });
  }
  async onAuthEvent(n) {
    const {
      urlResponse: r,
      sessionId: i,
      postBody: o,
      tenantId: u,
      error: f,
      type: h,
    } = n;
    if (f) {
      this.reject(f);
      return;
    }
    const g = {
      auth: this.auth,
      requestUri: r,
      sessionId: i,
      tenantId: u || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(h)(g));
    } catch (m) {
      this.reject(m);
    }
  }
  onError(n) {
    this.reject(n);
  }
  getIdpTask(n) {
    switch (n) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return D8;
      case "linkViaPopup":
      case "linkViaRedirect":
        return j8;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return M8;
      default:
        na(this.auth, "internal-error");
    }
  }
  resolve(n) {
    ja(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(n),
      this.unregisterAndCleanUp();
  }
  reject(n) {
    ja(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(n),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const L8 = new Dl(2e3, 1e4);
async function U8(a, n, r) {
  if (Jn(a.app))
    return Promise.reject(Mn(a, "operation-not-supported-in-this-environment"));
  const i = Dc(a);
  D5(a, n, eh);
  const o = pg(i, r);
  return new Ir(i, "signInViaPopup", n, o).executeNotNull();
}
class Ir extends gg {
  constructor(n, r, i, o, u) {
    super(n, r, o, u),
      (this.provider = i),
      (this.authWindow = null),
      (this.pollId = null),
      Ir.currentPopupAction && Ir.currentPopupAction.cancel(),
      (Ir.currentPopupAction = this);
  }
  async executeNotNull() {
    const n = await this.execute();
    return Ne(n, this.auth, "internal-error"), n;
  }
  async onExecution() {
    ja(this.filter.length === 1, "Popup operations only handle one event");
    const n = th();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      n,
    )),
      (this.authWindow.associatedEvent = n),
      this.resolver._originValidation(this.auth).catch((r) => {
        this.reject(r);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
        r || this.reject(Mn(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var n;
    return (
      ((n = this.authWindow) === null || n === void 0
        ? void 0
        : n.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(Mn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Ir.currentPopupAction = null);
  }
  pollUserCancellation() {
    const n = () => {
      var r, i;
      if (
        !(
          (i =
            (r = this.authWindow) === null || r === void 0
              ? void 0
              : r.window) === null || i === void 0
        ) &&
        i.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Mn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(n, L8.get());
    };
    n();
  }
}
Ir.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const B8 = "pendingRedirect",
  sc = new Map();
class z8 extends gg {
  constructor(n, r, i = !1) {
    super(
      n,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      r,
      void 0,
      i,
    ),
      (this.eventId = null);
  }
  async execute() {
    let n = sc.get(this.auth._key());
    if (!n) {
      try {
        const i = (await I8(this.resolver, this.auth))
          ? await super.execute()
          : null;
        n = () => Promise.resolve(i);
      } catch (r) {
        n = () => Promise.reject(r);
      }
      sc.set(this.auth._key(), n);
    }
    return (
      this.bypassAuthState ||
        sc.set(this.auth._key(), () => Promise.resolve(null)),
      n()
    );
  }
  async onAuthEvent(n) {
    if (n.type === "signInViaRedirect") return super.onAuthEvent(n);
    if (n.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (n.eventId) {
      const r = await this.auth._redirectUserForId(n.eventId);
      if (r) return (this.user = r), super.onAuthEvent(n);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function I8(a, n) {
  const r = Z8(n),
    i = V8(a);
  if (!(await i._isAvailable())) return !1;
  const o = (await i._get(r)) === "true";
  return await i._remove(r), o;
}
function H8(a, n) {
  sc.set(a._key(), n);
}
function V8(a) {
  return Ra(a._redirectPersistence);
}
function Z8(a) {
  return rc(B8, a.config.apiKey, a.name);
}
async function q8(a, n, r = !1) {
  if (Jn(a.app)) return Promise.reject(Vr(a));
  const i = Dc(a),
    o = pg(i, n),
    f = await new z8(i, o, r).execute();
  return (
    f &&
      !r &&
      (delete f.user._redirectEventId,
      await i._persistUserIfCurrent(f.user),
      await i._setRedirectUser(null, n)),
    f
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P8 = 10 * 60 * 1e3;
class G8 {
  constructor(n) {
    (this.auth = n),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(n) {
    this.consumers.add(n),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, n) &&
        (this.sendToConsumer(this.queuedRedirectEvent, n),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(n) {
    this.consumers.delete(n);
  }
  onEvent(n) {
    if (this.hasEventBeenHandled(n)) return !1;
    let r = !1;
    return (
      this.consumers.forEach((i) => {
        this.isEventForConsumer(n, i) &&
          ((r = !0), this.sendToConsumer(n, i), this.saveEventToCache(n));
      }),
      this.hasHandledPotentialRedirect ||
        !Y8(n) ||
        ((this.hasHandledPotentialRedirect = !0),
        r || ((this.queuedRedirectEvent = n), (r = !0))),
      r
    );
  }
  sendToConsumer(n, r) {
    var i;
    if (n.error && !yg(n)) {
      const o =
        ((i = n.error.code) === null || i === void 0
          ? void 0
          : i.split("auth/")[1]) || "internal-error";
      r.onError(Mn(this.auth, o));
    } else r.onAuthEvent(n);
  }
  isEventForConsumer(n, r) {
    const i = r.eventId === null || (!!n.eventId && n.eventId === r.eventId);
    return r.filter.includes(n.type) && i;
  }
  hasEventBeenHandled(n) {
    return (
      Date.now() - this.lastProcessedEventTime >= P8 &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(D0(n))
    );
  }
  saveEventToCache(n) {
    this.cachedEventUids.add(D0(n)), (this.lastProcessedEventTime = Date.now());
  }
}
function D0(a) {
  return [a.type, a.eventId, a.sessionId, a.tenantId]
    .filter((n) => n)
    .join("-");
}
function yg({ type: a, error: n }) {
  return (
    a === "unknown" && (n == null ? void 0 : n.code) === "auth/no-auth-event"
  );
}
function Y8(a) {
  switch (a.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return yg(a);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $8(a, n = {}) {
  return Ws(a, "GET", "/v1/projects", n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const F8 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  X8 = /^https?/;
async function Q8(a) {
  if (a.config.emulator) return;
  const { authorizedDomains: n } = await $8(a);
  for (const r of n)
    try {
      if (K8(r)) return;
    } catch {}
  na(a, "unauthorized-domain");
}
function K8(a) {
  const n = Cf(),
    { protocol: r, hostname: i } = new URL(n);
  if (a.startsWith("chrome-extension://")) {
    const f = new URL(a);
    return f.hostname === "" && i === ""
      ? r === "chrome-extension:" &&
          a.replace("chrome-extension://", "") ===
            n.replace("chrome-extension://", "")
      : r === "chrome-extension:" && f.hostname === i;
  }
  if (!X8.test(r)) return !1;
  if (F8.test(a)) return i === a;
  const o = a.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(i);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const J8 = new Dl(3e4, 6e4);
function M0() {
  const a = ea().___jsl;
  if (a != null && a.H) {
    for (const n of Object.keys(a.H))
      if (
        ((a.H[n].r = a.H[n].r || []),
        (a.H[n].L = a.H[n].L || []),
        (a.H[n].r = [...a.H[n].L]),
        a.CP)
      )
        for (let r = 0; r < a.CP.length; r++) a.CP[r] = null;
  }
}
function W8(a) {
  return new Promise((n, r) => {
    var i, o, u;
    function f() {
      M0(),
        gapi.load("gapi.iframes", {
          callback: () => {
            n(gapi.iframes.getContext());
          },
          ontimeout: () => {
            M0(), r(Mn(a, "network-request-failed"));
          },
          timeout: J8.get(),
        });
    }
    if (
      !(
        (o = (i = ea().gapi) === null || i === void 0 ? void 0 : i.iframes) ===
          null || o === void 0
      ) &&
      o.Iframe
    )
      n(gapi.iframes.getContext());
    else if (!((u = ea().gapi) === null || u === void 0) && u.load) f();
    else {
      const h = s8("iframefcb");
      return (
        (ea()[h] = () => {
          gapi.load ? f() : r(Mn(a, "network-request-failed"));
        }),
        a8(`${r8()}?onload=${h}`).catch((g) => r(g))
      );
    }
  }).catch((n) => {
    throw ((ic = null), n);
  });
}
let ic = null;
function eb(a) {
  return (ic = ic || W8(a)), ic;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tb = new Dl(5e3, 15e3),
  nb = "__/auth/iframe",
  ab = "emulator/auth/iframe",
  rb = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  sb = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function ib(a) {
  const n = a.config;
  Ne(n.authDomain, a, "auth-domain-config-required");
  const r = n.emulator ? Xf(n, ab) : `https://${a.config.authDomain}/${nb}`,
    i = { apiKey: n.apiKey, appName: a.name, v: Ol },
    o = sb.get(a.config.apiHost);
  o && (i.eid = o);
  const u = a._getFrameworks();
  return u.length && (i.fw = u.join(",")), `${r}?${Rl(i).slice(1)}`;
}
async function lb(a) {
  const n = await eb(a),
    r = ea().gapi;
  return (
    Ne(r, a, "internal-error"),
    n.open(
      {
        where: document.body,
        url: ib(a),
        messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: rb,
        dontclear: !0,
      },
      (i) =>
        new Promise(async (o, u) => {
          await i.restyle({ setHideOnLeave: !1 });
          const f = Mn(a, "network-request-failed"),
            h = ea().setTimeout(() => {
              u(f);
            }, tb.get());
          function g() {
            ea().clearTimeout(h), o(i);
          }
          i.ping(g).then(g, () => {
            u(f);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ob = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  cb = 500,
  ub = 600,
  db = "_blank",
  fb = "http://localhost";
class j0 {
  constructor(n) {
    (this.window = n), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function hb(a, n, r, i = cb, o = ub) {
  const u = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    f = Math.max((window.screen.availWidth - i) / 2, 0).toString();
  let h = "";
  const g = Object.assign(Object.assign({}, ob), {
      width: i.toString(),
      height: o.toString(),
      top: u,
      left: f,
    }),
    m = Pt().toLowerCase();
  r && (h = Kp(m) ? db : r), Xp(m) && ((n = n || fb), (g.scrollbars = "yes"));
  const _ = Object.entries(g).reduce((C, [R, A]) => `${C}${R}=${A},`, "");
  if (X5(m) && h !== "_self") return mb(n || "", h), new j0(null);
  const v = window.open(n || "", h, _);
  Ne(v, a, "popup-blocked");
  try {
    v.focus();
  } catch {}
  return new j0(v);
}
function mb(a, n) {
  const r = document.createElement("a");
  (r.href = a), (r.target = n);
  const i = document.createEvent("MouseEvent");
  i.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    r.dispatchEvent(i);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pb = "__/auth/handler",
  gb = "emulator/auth/handler",
  yb = encodeURIComponent("fac");
async function L0(a, n, r, i, o, u) {
  Ne(a.config.authDomain, a, "auth-domain-config-required"),
    Ne(a.config.apiKey, a, "invalid-api-key");
  const f = {
    apiKey: a.config.apiKey,
    appName: a.name,
    authType: r,
    redirectUrl: i,
    v: Ol,
    eventId: o,
  };
  if (n instanceof eh) {
    n.setDefaultLanguage(a.languageCode),
      (f.providerId = n.providerId || ""),
      p6(n.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(n.getCustomParameters()));
    for (const [_, v] of Object.entries({})) f[_] = v;
  }
  if (n instanceof Ml) {
    const _ = n.getScopes().filter((v) => v !== "");
    _.length > 0 && (f.scopes = _.join(","));
  }
  a.tenantId && (f.tid = a.tenantId);
  const h = f;
  for (const _ of Object.keys(h)) h[_] === void 0 && delete h[_];
  const g = await a._getAppCheckToken(),
    m = g ? `#${yb}=${encodeURIComponent(g)}` : "";
  return `${vb(a)}?${Rl(h).slice(1)}${m}`;
}
function vb({ config: a }) {
  return a.emulator ? Xf(a, gb) : `https://${a.authDomain}/${pb}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rf = "webStorageSupport";
class bb {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = ug),
      (this._completeRedirectFn = q8),
      (this._overrideRedirectResult = H8);
  }
  async _openPopup(n, r, i, o) {
    var u;
    ja(
      (u = this.eventManagers[n._key()]) === null || u === void 0
        ? void 0
        : u.manager,
      "_initialize() not called before _openPopup()",
    );
    const f = await L0(n, r, i, Cf(), o);
    return hb(n, f, th());
  }
  async _openRedirect(n, r, i, o) {
    await this._originValidation(n);
    const u = await L0(n, r, i, Cf(), o);
    return C8(u), new Promise(() => {});
  }
  _initialize(n) {
    const r = n._key();
    if (this.eventManagers[r]) {
      const { manager: o, promise: u } = this.eventManagers[r];
      return o
        ? Promise.resolve(o)
        : (ja(u, "If manager is not set, promise should be"), u);
    }
    const i = this.initAndGetManager(n);
    return (
      (this.eventManagers[r] = { promise: i }),
      i.catch(() => {
        delete this.eventManagers[r];
      }),
      i
    );
  }
  async initAndGetManager(n) {
    const r = await lb(n),
      i = new G8(n);
    return (
      r.register(
        "authEvent",
        (o) => (
          Ne(o == null ? void 0 : o.authEvent, n, "invalid-auth-event"),
          { status: i.onEvent(o.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[n._key()] = { manager: i }),
      (this.iframes[n._key()] = r),
      i
    );
  }
  _isIframeWebStorageSupported(n, r) {
    this.iframes[n._key()].send(
      rf,
      { type: rf },
      (o) => {
        var u;
        const f =
          (u = o == null ? void 0 : o[0]) === null || u === void 0
            ? void 0
            : u[rf];
        f !== void 0 && r(!!f), na(n, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(n) {
    const r = n._key();
    return (
      this.originValidationPromises[r] ||
        (this.originValidationPromises[r] = Q8(n)),
      this.originValidationPromises[r]
    );
  }
  get _shouldInitProactively() {
    return ng() || Qp() || Jf();
  }
}
const _b = bb;
var U0 = "@firebase/auth",
  B0 = "1.10.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xb {
  constructor(n) {
    (this.auth = n), (this.internalListeners = new Map());
  }
  getUid() {
    var n;
    return (
      this.assertAuthConfigured(),
      ((n = this.auth.currentUser) === null || n === void 0 ? void 0 : n.uid) ||
        null
    );
  }
  async getToken(n) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(n) }
        : null
    );
  }
  addAuthTokenListener(n) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(n))) return;
    const r = this.auth.onIdTokenChanged((i) => {
      n((i == null ? void 0 : i.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(n, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(n) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(n);
    r && (this.internalListeners.delete(n), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    Ne(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth",
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cb(a) {
  switch (a) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function wb(a) {
  dl(
    new qs(
      "auth",
      (n, { options: r }) => {
        const i = n.getProvider("app").getImmediate(),
          o = n.getProvider("heartbeat"),
          u = n.getProvider("app-check-internal"),
          { apiKey: f, authDomain: h } = i.options;
        Ne(f && !f.includes(":"), "invalid-api-key", { appName: i.name });
        const g = {
            apiKey: f,
            authDomain: h,
            clientPlatform: a,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: ag(a),
          },
          m = new t8(i, o, u, g);
        return l8(m, r), m;
      },
      "PUBLIC",
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((n, r, i) => {
        n.getProvider("auth-internal").initialize();
      }),
  ),
    dl(
      new qs(
        "auth-internal",
        (n) => {
          const r = Dc(n.getProvider("auth").getImmediate());
          return ((i) => new xb(i))(r);
        },
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    Bs(U0, B0, Cb(a)),
    Bs(U0, B0, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sb = 5 * 60,
  Eb = jp("authIdTokenMaxAge") || Sb;
let z0 = null;
const Tb = (a) => async (n) => {
  const r = n && (await n.getIdTokenResult()),
    i = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (i && i > Eb) return;
  const o = r == null ? void 0 : r.token;
  z0 !== o &&
    ((z0 = o),
    await fetch(a, {
      method: o ? "POST" : "DELETE",
      headers: o ? { Authorization: `Bearer ${o}` } : {},
    }));
};
function Ab(a = y5()) {
  const n = zp(a, "auth");
  if (n.isInitialized()) return n.getImmediate();
  const r = i8(a, { popupRedirectResolver: _b, persistence: [O8, b8, ug] }),
    i = jp("authTokenSyncURL");
  if (i && typeof isSecureContext == "boolean" && isSecureContext) {
    const u = new URL(i, location.origin);
    if (location.origin === u.origin) {
      const f = Tb(u.toString());
      g8(r, f, () => f(r.currentUser)), p8(r, (h) => f(h));
    }
  }
  const o = W4("auth");
  return o && o8(r, `http://${o}`), r;
}
function Nb() {
  var a, n;
  return (n =
    (a = document.getElementsByTagName("head")) === null || a === void 0
      ? void 0
      : a[0]) !== null && n !== void 0
    ? n
    : document;
}
n8({
  loadJS(a) {
    return new Promise((n, r) => {
      const i = document.createElement("script");
      i.setAttribute("src", a),
        (i.onload = n),
        (i.onerror = (o) => {
          const u = Mn("internal-error");
          (u.customData = o), r(u);
        }),
        (i.type = "text/javascript"),
        (i.charset = "UTF-8"),
        Nb().appendChild(i);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
wb("Browser");
const kb = "https://ita-wiki-backend-production.up.railway.app/api/",
  ei = async (a) => {
    var n;
    try {
      const r = await fetch(`${kb}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github_id: a }),
      });
      return r.ok
        ? (n = (await r.json()).role) == null
          ? void 0
          : n.role
        : "anonymous";
    } catch (r) {
      throw r instanceof Error
        ? new Error(
            r.message ||
              "Error during fetching user role. Please, try again 👾",
          )
        : new Error("Something went wrong, sis. Please, try again 👾");
    }
  },
  Rb = {
    apiKey: "AIzaSyBIgEQGjSM3w3mNc8nwrkbFrIi_6D--1cw",
    authDomain: "it-wiki-e39ef.firebaseapp.com",
    projectId: "it-wiki-e39ef",
    storageBucket: "it-wiki-e39ef.firebasestorage.app",
    messagingSenderId: "429206878017",
    appId: "1:429206878017:web:ca5eb2bafcef9a291393c0",
  },
  Ob = Ip(Rb),
  Db = new Aa(),
  Mb = Ab(Ob),
  vg = async () => {
    try {
      const a = await U8(Mb, Db),
        n = {
          id: Number(a.user.providerData[0].uid),
          displayName: a.user.providerData[0].displayName ?? "",
          photoURL: a.user.providerData[0].photoURL ?? "",
        };
      return (n.role = await ei(n.id)), n;
    } catch (a) {
      throw a instanceof Error
        ? new Error(
            a.message ||
              "Error during GitHub authentication. Please try again.",
          )
        : new Error("An unknown error occurred during GitHub authentication.");
    }
  },
  bg = x.createContext(void 0),
  jb = ({ children: a }) => {
    const [n, r] = x.useState(null),
      [i, o] = x.useState(null),
      u = (_) => {
        r(_);
      },
      f = async () => {
        try {
          const _ = await vg();
          r(_), await h(_);
        } catch (_) {
          _ instanceof Error ? o(_.message) : o("Unknown error during sign in");
        }
      },
      h = async (_) => {
        try {
          const v = await ei(_.id),
            C = { ..._, role: v };
          r(C);
        } catch (v) {
          console.error("Error setting user role:", v);
        }
      },
      g = () => {
        r(null), o(null);
      },
      m = !!n;
    return p.jsx(bg.Provider, {
      value: {
        user: n,
        setUser: r,
        signOut: g,
        signIn: f,
        saveUser: u,
        isAuthenticated: m,
        error: i,
        setError: o,
      },
      children: a,
    });
  },
  Jt = () => {
    const a = x.useContext(bg);
    if (!a) throw new Error("useUser must be used within a UserProvider");
    return a;
  },
  Lb =
    "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.802411%2023.8265C0.314256%2024.3147%200.314256%2025.1062%200.802411%2025.5943C1.29057%2026.0825%202.08202%2026.0825%202.57018%2025.5943L0.802411%2023.8265ZM25.1976%202.96689C25.6858%202.47874%2025.6858%201.68728%2025.1976%201.19912C24.7094%200.710969%2023.918%200.710969%2023.4298%201.19912L25.1976%202.96689ZM2.57018%201.19959C2.08202%200.711433%201.29057%200.711433%200.802412%201.19959C0.314257%201.68774%200.314257%202.4792%200.802412%202.96736L2.57018%201.19959ZM23.4298%2025.5948C23.918%2026.0829%2024.7094%2026.0829%2025.1976%2025.5948C25.6858%2025.1066%2025.6858%2024.3152%2025.1976%2023.827L23.4298%2025.5948ZM2.57018%2025.5943L25.1976%202.96689L23.4298%201.19912L0.802411%2023.8265L2.57018%2025.5943ZM0.802412%202.96736L23.4298%2025.5948L25.1976%2023.827L2.57018%201.19959L0.802412%202.96736Z'%20fill='black'/%3e%3c/svg%3e",
  sf =
    "block text-[14px] h-[41px] capitalize text-center rounded-[12px] outline-none cursor-pointer box-sizing w-full",
  Ub = {
    primary: `${sf} text-white min-w-[152px] bg-primary font-[600] hover:opacity-90 border-none`,
    secondary: `${sf} border border-gray-foreground font-[600] text-gray-foregorund hover:bg-neutral-50 min-w-[138px]`,
    neutral: `${sf} bg-white text-gray-foreground font-[500] min-w-[138px] hover:bg-neutral-50`,
    github:
      "text-[var(--github-color)] bg-[var(--github-bg)]  justify-between max-w-60 hover:bg-[var(--github-color)] hover:text-[var(--github-bg)] hover:border-black outline-none cursor-pointer box-sizing",
    close:
      "inline-flex items-center justify-center w-[21px] h-[19px] text-[#282828] bg-transparent border-none hover:duration-100 will-change-transform hover:opacity-50 outline-none cursor-pointer box-sizing m-[10px]",
    icon: "inline-flex items-center justify-center h-[41px] px-4 text-[#808080] border-2 rounded-[10px] border-white bg-white hover:duration-200 will-change-transform ease-in-out hover:bg-[#dcdcdc]  hover:border-[#808080] hover:scale-95 outline-none cursor-pointer box-sizing",
  },
  jn = ({
    children: a,
    variant: n,
    text: r,
    icon: i,
    type: o,
    className: u,
    onClick: f,
  }) => {
    const h =
      n === "custom" ? u || "" : `${Ub[n ?? "primary"]} ${u || ""}`.trim();
    return p.jsxs("button", {
      type: o || "button",
      onClick: f,
      className: h,
      children: [
        n === "close" && p.jsx("img", { src: Lb, alt: "Close" }),
        n === "icon" &&
          r &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsx("span", { className: "mr-2", children: r }),
              p.jsx("img", { src: i, alt: "icon", className: "h-[17px]" }),
            ],
          }),
        n === "icon" &&
          !r &&
          p.jsx("img", { src: i, alt: "icon", className: "h-[17px]" }),
        n !== "icon" && (r || a),
      ],
    });
  },
  lf = ({ number: a, imageSource: n, imageAlt: r, title: i, text: o }) =>
    p.jsxs("div", {
      className:
        "relative flex flex-col items-center gap-4 bg-card w-64 lg:w-52 xl:w-64 px-4 rounded-lg py-8",
      children: [
        p.jsxs("span", {
          className:
            "absolute left-0 top-1 p-3 text-sm text-gray-foreground tracking-widest",
          children: ["/0", a],
        }),
        p.jsx("img", { src: n, alt: r, width: 100, height: 100 }),
        p.jsx("h3", { className: "font-bold", children: i }),
        p.jsx("p", { className: "text-gray-foreground", children: o }),
      ],
    }),
  Ll = ({ title: a }) => {
    const n = x.useMemo(
      () => (a ? `${a} | IT Academy Wiki` : "IT Academy Wiki"),
      [a],
    );
    return (
      x.useEffect(() => {
        document.title = n;
      }, [n]),
      null
    );
  },
  yc = ({ children: a, className: n }) =>
    p.jsx("div", {
      className: "h-full flex flex-col",
      children: p.jsx("div", {
        className: `${n} flex-1 bg-white rounded-xl mb-6 mx-6 py-8 px-15`,
        children: a,
      }),
    });
function Bb() {
  const a = Ua(),
    { user: n } = Jt(),
    [r, i] = x.useState(null),
    [o, u] = x.useState(!0),
    f = "React";
  x.useEffect(() => {
    n && n.id
      ? ei(n.id)
          .then((g) => {
            i(g || "anonymous"), u(!1);
          })
          .catch((g) => {
            console.error("Error fetching role:", g), i("anonymous"), u(!1);
          })
      : (i("anonymous"), u(!1));
  }, [n]),
    x.useEffect(() => {
      !n ||
        !r ||
        (["anonymous", "student", "mentor"].includes(r)
          ? a(`/resources/${f}`)
          : ["admin", "superadmin"].includes(r) && a("/admin-dashboard"));
    }, [n, r, a]);
  const h = x.useCallback(() => {
    a(`/resources/${f}`);
  }, [a]);
  return o
    ? p.jsx("main", {
        className: "flex justify-center items-center h-screen w-full",
        children: p.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid",
        }),
      })
    : p.jsxs(p.Fragment, {
        children: [
          p.jsx(Ll, { title: "" }),
          p.jsx(yc, {
            className: "!px-6",
            children: p.jsxs("div", {
              className:
                "flex flex-col gap-10 justify-center items-center h-full text-center",
              children: [
                p.jsx("h1", {
                  className: "font-bold text-3xl",
                  children: "¡Bienvenid@ a la wiki de la IT Academy!",
                }),
                p.jsx("div", {
                  children: p.jsx(jn, { onClick: h, children: "Ver Recursos" }),
                }),
                p.jsx("h2", {
                  children:
                    "Funcionalidades básicas que te ofrece esta plataforma:",
                }),
                p.jsxs("section", {
                  className:
                    "flex flex-col gap-8 items-center md:items-stretch md:flex-row",
                  children: [
                    p.jsx(lf, {
                      number: 1,
                      imageSource: Z4,
                      imageAlt: "folder",
                      title: "Guarda tus recursos favoritos",
                      text: "Ten tus recursos bien organizados",
                    }),
                    p.jsx(lf, {
                      number: 2,
                      imageSource: q4,
                      imageAlt: "puzzle",
                      title: "Colabora con tus compañer@s",
                      text: "Recursos compartidos",
                    }),
                    p.jsx(lf, {
                      number: 3,
                      imageSource: P4,
                      imageAlt: "ok",
                      title: "Vota los recursos",
                      text: "La comunidad decide cuáles son más relevantes",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
var Ul = (a) => a.type === "checkbox",
  Hr = (a) => a instanceof Date,
  qt = (a) => a == null;
const _g = (a) => typeof a == "object";
var yt = (a) => !qt(a) && !Array.isArray(a) && _g(a) && !Hr(a),
  zb = (a) =>
    yt(a) && a.target ? (Ul(a.target) ? a.target.checked : a.target.value) : a,
  Ib = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  Hb = (a, n) => a.has(Ib(n)),
  Vb = (a) => {
    const n = a.constructor && a.constructor.prototype;
    return yt(n) && n.hasOwnProperty("isPrototypeOf");
  },
  ah =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function zt(a) {
  let n;
  const r = Array.isArray(a),
    i = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) n = new Date(a);
  else if (a instanceof Set) n = new Set(a);
  else if (!(ah && (a instanceof Blob || i)) && (r || yt(a)))
    if (((n = r ? [] : {}), !r && !Vb(a))) n = a;
    else for (const o in a) a.hasOwnProperty(o) && (n[o] = zt(a[o]));
  else return a;
  return n;
}
var Lc = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  xt = (a) => a === void 0,
  he = (a, n, r) => {
    if (!n || !yt(a)) return r;
    const i = Lc(n.split(/[,[\].]+?/)).reduce((o, u) => (qt(o) ? o : o[u]), a);
    return xt(i) || i === a ? (xt(a[n]) ? r : a[n]) : i;
  },
  Kn = (a) => typeof a == "boolean",
  rh = (a) => /^\w*$/.test(a),
  xg = (a) => Lc(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Qe = (a, n, r) => {
    let i = -1;
    const o = rh(n) ? [n] : xg(n),
      u = o.length,
      f = u - 1;
    for (; ++i < u; ) {
      const h = o[i];
      let g = r;
      if (i !== f) {
        const m = a[h];
        g = yt(m) || Array.isArray(m) ? m : isNaN(+o[i + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (a[h] = g), (a = a[h]);
    }
  };
const I0 = { BLUR: "blur", FOCUS_OUT: "focusout" },
  kn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Sa = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Zb = J.createContext(null),
  qb = () => J.useContext(Zb);
var Pb = (a, n, r, i = !0) => {
    const o = { defaultValues: n._defaultValues };
    for (const u in a)
      Object.defineProperty(o, u, {
        get: () => {
          const f = u;
          return (
            n._proxyFormState[f] !== kn.all &&
              (n._proxyFormState[f] = !i || kn.all),
            a[f]
          );
        },
      });
    return o;
  },
  Ef = (a) => qt(a) || !_g(a);
function Na(a, n) {
  if (Ef(a) || Ef(n)) return a === n;
  if (Hr(a) && Hr(n)) return a.getTime() === n.getTime();
  const r = Object.keys(a),
    i = Object.keys(n);
  if (r.length !== i.length) return !1;
  for (const o of r) {
    const u = a[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const f = n[o];
      if (
        (Hr(u) && Hr(f)) ||
        (yt(u) && yt(f)) ||
        (Array.isArray(u) && Array.isArray(f))
          ? !Na(u, f)
          : u !== f
      )
        return !1;
    }
  }
  return !0;
}
const Gb = (a, n) => {
  const r = x.useRef(n);
  Na(n, r.current) || (r.current = n), x.useEffect(a, r.current);
};
var Wn = (a) => typeof a == "string",
  Cg = (a, n, r, i, o) =>
    Wn(a)
      ? (i && n.watch.add(a), he(r, a, o))
      : Array.isArray(a)
        ? a.map((u) => (i && n.watch.add(u), he(r, u)))
        : (i && (n.watchAll = !0), r);
function H0(a) {
  const n = qb(),
    {
      control: r = n.control,
      name: i,
      defaultValue: o,
      disabled: u,
      exact: f,
    } = a || {},
    [h, g] = J.useState(r._getWatch(i, o));
  return (
    Gb(
      () =>
        r._subscribe({
          name: i,
          formState: { values: !0 },
          exact: f,
          callback: (m) =>
            !u && g(Cg(i, r._names, m.values || r._formValues, !1, o)),
        }),
      [i, o, u, f],
    ),
    J.useEffect(() => r._removeUnmounted()),
    h
  );
}
var wg = (a, n, r, i, o) =>
    n
      ? {
          ...r[a],
          types: { ...(r[a] && r[a].types ? r[a].types : {}), [i]: o || !0 },
        }
      : {},
  ll = (a) => (Array.isArray(a) ? a : [a]),
  V0 = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (o) => {
        for (const u of a) u.next && u.next(o);
      },
      subscribe: (o) => (
        a.push(o),
        {
          unsubscribe: () => {
            a = a.filter((u) => u !== o);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  },
  Zt = (a) => yt(a) && !Object.keys(a).length,
  sh = (a) => a.type === "file",
  Rn = (a) => typeof a == "function",
  vc = (a) => {
    if (!ah) return !1;
    const n = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  Sg = (a) => a.type === "select-multiple",
  ih = (a) => a.type === "radio",
  Yb = (a) => ih(a) || Ul(a),
  of = (a) => vc(a) && a.isConnected;
function $b(a, n) {
  const r = n.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) a = xt(a) ? i++ : a[n[i++]];
  return a;
}
function Fb(a) {
  for (const n in a) if (a.hasOwnProperty(n) && !xt(a[n])) return !1;
  return !0;
}
function Tt(a, n) {
  const r = Array.isArray(n) ? n : rh(n) ? [n] : xg(n),
    i = r.length === 1 ? a : $b(a, r),
    o = r.length - 1,
    u = r[o];
  return (
    i && delete i[u],
    o !== 0 &&
      ((yt(i) && Zt(i)) || (Array.isArray(i) && Fb(i))) &&
      Tt(a, r.slice(0, -1)),
    a
  );
}
var Eg = (a) => {
  for (const n in a) if (Rn(a[n])) return !0;
  return !1;
};
function bc(a, n = {}) {
  const r = Array.isArray(a);
  if (yt(a) || r)
    for (const i in a)
      Array.isArray(a[i]) || (yt(a[i]) && !Eg(a[i]))
        ? ((n[i] = Array.isArray(a[i]) ? [] : {}), bc(a[i], n[i]))
        : qt(a[i]) || (n[i] = !0);
  return n;
}
function Tg(a, n, r) {
  const i = Array.isArray(a);
  if (yt(a) || i)
    for (const o in a)
      Array.isArray(a[o]) || (yt(a[o]) && !Eg(a[o]))
        ? xt(n) || Ef(r[o])
          ? (r[o] = Array.isArray(a[o]) ? bc(a[o], []) : { ...bc(a[o]) })
          : Tg(a[o], qt(n) ? {} : n[o], r[o])
        : (r[o] = !Na(a[o], n[o]));
  return r;
}
var tl = (a, n) => Tg(a, n, bc(n));
const Z0 = { value: !1, isValid: !1 },
  q0 = { value: !0, isValid: !0 };
var Ag = (a) => {
    if (Array.isArray(a)) {
      if (a.length > 1) {
        const n = a
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: n, isValid: !!n.length };
      }
      return a[0].checked && !a[0].disabled
        ? a[0].attributes && !xt(a[0].attributes.value)
          ? xt(a[0].value) || a[0].value === ""
            ? q0
            : { value: a[0].value, isValid: !0 }
          : q0
        : Z0;
    }
    return Z0;
  },
  Ng = (a, { valueAsNumber: n, valueAsDate: r, setValueAs: i }) =>
    xt(a)
      ? a
      : n
        ? a === ""
          ? NaN
          : a && +a
        : r && Wn(a)
          ? new Date(a)
          : i
            ? i(a)
            : a;
const P0 = { isValid: !1, value: null };
var kg = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (n, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : n,
        P0,
      )
    : P0;
function G0(a) {
  const n = a.ref;
  return sh(n)
    ? n.files
    : ih(n)
      ? kg(a.refs).value
      : Sg(n)
        ? [...n.selectedOptions].map(({ value: r }) => r)
        : Ul(n)
          ? Ag(a.refs).value
          : Ng(xt(n.value) ? a.ref.value : n.value, a);
}
var Xb = (a, n, r, i) => {
    const o = {};
    for (const u of a) {
      const f = he(n, u);
      f && Qe(o, u, f._f);
    }
    return {
      criteriaMode: r,
      names: [...a],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  _c = (a) => a instanceof RegExp,
  nl = (a) =>
    xt(a)
      ? a
      : _c(a)
        ? a.source
        : yt(a)
          ? _c(a.value)
            ? a.value.source
            : a.value
          : a,
  Y0 = (a) => ({
    isOnSubmit: !a || a === kn.onSubmit,
    isOnBlur: a === kn.onBlur,
    isOnChange: a === kn.onChange,
    isOnAll: a === kn.all,
    isOnTouch: a === kn.onTouched,
  });
const $0 = "AsyncFunction";
var Qb = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (Rn(a.validate) && a.validate.constructor.name === $0) ||
      (yt(a.validate) &&
        Object.values(a.validate).find((n) => n.constructor.name === $0))
    ),
  Kb = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate),
  F0 = (a, n, r) =>
    !r &&
    (n.watchAll ||
      n.watch.has(a) ||
      [...n.watch].some(
        (i) => a.startsWith(i) && /^\.\w+/.test(a.slice(i.length)),
      ));
const ol = (a, n, r, i) => {
  for (const o of r || Object.keys(a)) {
    const u = he(a, o);
    if (u) {
      const { _f: f, ...h } = u;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], o) && !i) return !0;
        if (f.ref && n(f.ref, f.name) && !i) return !0;
        if (ol(h, n)) break;
      } else if (yt(h) && ol(h, n)) break;
    }
  }
};
function X0(a, n, r) {
  const i = he(a, r);
  if (i || rh(r)) return { error: i, name: r };
  const o = r.split(".");
  for (; o.length; ) {
    const u = o.join("."),
      f = he(n, u),
      h = he(a, u);
    if (f && !Array.isArray(f) && r !== u) return { name: r };
    if (h && h.type) return { name: u, error: h };
    o.pop();
  }
  return { name: r };
}
var Jb = (a, n, r, i) => {
    r(a);
    const { name: o, ...u } = a;
    return (
      Zt(u) ||
      Object.keys(u).length >= Object.keys(n).length ||
      Object.keys(u).find((f) => n[f] === (!i || kn.all))
    );
  },
  Wb = (a, n, r) =>
    !a ||
    !n ||
    a === n ||
    ll(a).some((i) => i && (r ? i === n : i.startsWith(n) || n.startsWith(i))),
  e7 = (a, n, r, i, o) =>
    o.isOnAll
      ? !1
      : !r && o.isOnTouch
        ? !(n || a)
        : (r ? i.isOnBlur : o.isOnBlur)
          ? !a
          : (r ? i.isOnChange : o.isOnChange)
            ? a
            : !0,
  t7 = (a, n) => !Lc(he(a, n)).length && Tt(a, n),
  n7 = (a, n, r) => {
    const i = ll(he(a, r));
    return Qe(i, "root", n[r]), Qe(a, r, i), a;
  },
  lc = (a) => Wn(a);
function Q0(a, n, r = "validate") {
  if (lc(a) || (Array.isArray(a) && a.every(lc)) || (Kn(a) && !a))
    return { type: r, message: lc(a) ? a : "", ref: n };
}
var js = (a) => (yt(a) && !_c(a) ? a : { value: a, message: "" }),
  K0 = async (a, n, r, i, o, u) => {
    const {
        ref: f,
        refs: h,
        required: g,
        maxLength: m,
        minLength: _,
        min: v,
        max: C,
        pattern: R,
        validate: A,
        name: G,
        valueAsNumber: H,
        mount: B,
      } = a._f,
      I = he(r, G);
    if (!B || n.has(G)) return {};
    const V = h ? h[0] : f,
      te = (re) => {
        o &&
          V.reportValidity &&
          (V.setCustomValidity(Kn(re) ? "" : re || ""), V.reportValidity());
      },
      U = {},
      ne = ih(f),
      $ = Ul(f),
      me = ne || $,
      ve =
        ((H || sh(f)) && xt(f.value) && xt(I)) ||
        (vc(f) && f.value === "") ||
        I === "" ||
        (Array.isArray(I) && !I.length),
      Re = wg.bind(null, G, i, U),
      oe = (re, ge, Ce, Se = Sa.maxLength, k = Sa.minLength) => {
        const Q = re ? ge : Ce;
        U[G] = { type: re ? Se : k, message: Q, ref: f, ...Re(re ? Se : k, Q) };
      };
    if (
      u
        ? !Array.isArray(I) || !I.length
        : g &&
          ((!me && (ve || qt(I))) ||
            (Kn(I) && !I) ||
            ($ && !Ag(h).isValid) ||
            (ne && !kg(h).isValid))
    ) {
      const { value: re, message: ge } = lc(g)
        ? { value: !!g, message: g }
        : js(g);
      if (
        re &&
        ((U[G] = {
          type: Sa.required,
          message: ge,
          ref: V,
          ...Re(Sa.required, ge),
        }),
        !i)
      )
        return te(ge), U;
    }
    if (!ve && (!qt(v) || !qt(C))) {
      let re, ge;
      const Ce = js(C),
        Se = js(v);
      if (!qt(I) && !isNaN(I)) {
        const k = f.valueAsNumber || (I && +I);
        qt(Ce.value) || (re = k > Ce.value),
          qt(Se.value) || (ge = k < Se.value);
      } else {
        const k = f.valueAsDate || new Date(I),
          Q = (E) => new Date(new Date().toDateString() + " " + E),
          ce = f.type == "time",
          Ee = f.type == "week";
        Wn(Ce.value) &&
          I &&
          (re = ce
            ? Q(I) > Q(Ce.value)
            : Ee
              ? I > Ce.value
              : k > new Date(Ce.value)),
          Wn(Se.value) &&
            I &&
            (ge = ce
              ? Q(I) < Q(Se.value)
              : Ee
                ? I < Se.value
                : k < new Date(Se.value));
      }
      if ((re || ge) && (oe(!!re, Ce.message, Se.message, Sa.max, Sa.min), !i))
        return te(U[G].message), U;
    }
    if ((m || _) && !ve && (Wn(I) || (u && Array.isArray(I)))) {
      const re = js(m),
        ge = js(_),
        Ce = !qt(re.value) && I.length > +re.value,
        Se = !qt(ge.value) && I.length < +ge.value;
      if ((Ce || Se) && (oe(Ce, re.message, ge.message), !i))
        return te(U[G].message), U;
    }
    if (R && !ve && Wn(I)) {
      const { value: re, message: ge } = js(R);
      if (
        _c(re) &&
        !I.match(re) &&
        ((U[G] = {
          type: Sa.pattern,
          message: ge,
          ref: f,
          ...Re(Sa.pattern, ge),
        }),
        !i)
      )
        return te(ge), U;
    }
    if (A) {
      if (Rn(A)) {
        const re = await A(I, r),
          ge = Q0(re, V);
        if (ge && ((U[G] = { ...ge, ...Re(Sa.validate, ge.message) }), !i))
          return te(ge.message), U;
      } else if (yt(A)) {
        let re = {};
        for (const ge in A) {
          if (!Zt(re) && !i) break;
          const Ce = Q0(await A[ge](I, r), V, ge);
          Ce &&
            ((re = { ...Ce, ...Re(ge, Ce.message) }),
            te(Ce.message),
            i && (U[G] = re));
        }
        if (!Zt(re) && ((U[G] = { ref: V, ...re }), !i)) return U;
      }
    }
    return te(!0), U;
  };
const a7 = {
  mode: kn.onSubmit,
  reValidateMode: kn.onChange,
  shouldFocusError: !0,
};
function r7(a = {}) {
  let n = { ...a7, ...a },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: Rn(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    };
  const i = {};
  let o =
      yt(n.defaultValues) || yt(n.values)
        ? zt(n.values || n.defaultValues) || {}
        : {},
    u = n.shouldUnregister ? {} : zt(o),
    f = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    g,
    m = 0;
  const _ = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let v = { ..._ };
  const C = { array: V0(), state: V0() },
    R = Y0(n.mode),
    A = Y0(n.reValidateMode),
    G = n.criteriaMode === kn.all,
    H = (S) => (M) => {
      clearTimeout(m), (m = setTimeout(S, M));
    },
    B = async (S) => {
      if (!n.disabled && (_.isValid || v.isValid || S)) {
        const M = n.resolver ? Zt((await ve()).errors) : await oe(i, !0);
        M !== r.isValid && C.state.next({ isValid: M });
      }
    },
    I = (S, M) => {
      !n.disabled &&
        (_.isValidating ||
          _.validatingFields ||
          v.isValidating ||
          v.validatingFields) &&
        ((S || Array.from(h.mount)).forEach((Z) => {
          Z && (M ? Qe(r.validatingFields, Z, M) : Tt(r.validatingFields, Z));
        }),
        C.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Zt(r.validatingFields),
        }));
    },
    V = (S, M = [], Z, ie, ee = !0, X = !0) => {
      if (ie && Z && !n.disabled) {
        if (((f.action = !0), X && Array.isArray(he(i, S)))) {
          const se = Z(he(i, S), ie.argA, ie.argB);
          ee && Qe(i, S, se);
        }
        if (X && Array.isArray(he(r.errors, S))) {
          const se = Z(he(r.errors, S), ie.argA, ie.argB);
          ee && Qe(r.errors, S, se), t7(r.errors, S);
        }
        if (
          (_.touchedFields || v.touchedFields) &&
          X &&
          Array.isArray(he(r.touchedFields, S))
        ) {
          const se = Z(he(r.touchedFields, S), ie.argA, ie.argB);
          ee && Qe(r.touchedFields, S, se);
        }
        (_.dirtyFields || v.dirtyFields) && (r.dirtyFields = tl(o, u)),
          C.state.next({
            name: S,
            isDirty: ge(S, M),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else Qe(u, S, M);
    },
    te = (S, M) => {
      Qe(r.errors, S, M), C.state.next({ errors: r.errors });
    },
    U = (S) => {
      (r.errors = S), C.state.next({ errors: r.errors, isValid: !1 });
    },
    ne = (S, M, Z, ie) => {
      const ee = he(i, S);
      if (ee) {
        const X = he(u, S, xt(Z) ? he(o, S) : Z);
        xt(X) || (ie && ie.defaultChecked) || M
          ? Qe(u, S, M ? X : G0(ee._f))
          : k(S, X),
          f.mount && B();
      }
    },
    $ = (S, M, Z, ie, ee) => {
      let X = !1,
        se = !1;
      const _e = { name: S };
      if (!n.disabled) {
        if (!Z || ie) {
          (_.isDirty || v.isDirty) &&
            ((se = r.isDirty),
            (r.isDirty = _e.isDirty = ge()),
            (X = se !== _e.isDirty));
          const Pe = Na(he(o, S), M);
          (se = !!he(r.dirtyFields, S)),
            Pe ? Tt(r.dirtyFields, S) : Qe(r.dirtyFields, S, !0),
            (_e.dirtyFields = r.dirtyFields),
            (X = X || ((_.dirtyFields || v.dirtyFields) && se !== !Pe));
        }
        if (Z) {
          const Pe = he(r.touchedFields, S);
          Pe ||
            (Qe(r.touchedFields, S, Z),
            (_e.touchedFields = r.touchedFields),
            (X = X || ((_.touchedFields || v.touchedFields) && Pe !== Z)));
        }
        X && ee && C.state.next(_e);
      }
      return X ? _e : {};
    },
    me = (S, M, Z, ie) => {
      const ee = he(r.errors, S),
        X = (_.isValid || v.isValid) && Kn(M) && r.isValid !== M;
      if (
        (n.delayError && Z
          ? ((g = H(() => te(S, Z))), g(n.delayError))
          : (clearTimeout(m),
            (g = null),
            Z ? Qe(r.errors, S, Z) : Tt(r.errors, S)),
        (Z ? !Na(ee, Z) : ee) || !Zt(ie) || X)
      ) {
        const se = {
          ...ie,
          ...(X && Kn(M) ? { isValid: M } : {}),
          errors: r.errors,
          name: S,
        };
        (r = { ...r, ...se }), C.state.next(se);
      }
    },
    ve = async (S) => {
      I(S, !0);
      const M = await n.resolver(
        u,
        n.context,
        Xb(S || h.mount, i, n.criteriaMode, n.shouldUseNativeValidation),
      );
      return I(S), M;
    },
    Re = async (S) => {
      const { errors: M } = await ve(S);
      if (S)
        for (const Z of S) {
          const ie = he(M, Z);
          ie ? Qe(r.errors, Z, ie) : Tt(r.errors, Z);
        }
      else r.errors = M;
      return M;
    },
    oe = async (S, M, Z = { valid: !0 }) => {
      for (const ie in S) {
        const ee = S[ie];
        if (ee) {
          const { _f: X, ...se } = ee;
          if (X) {
            const _e = h.array.has(X.name),
              Pe = ee._f && Qb(ee._f);
            Pe && _.validatingFields && I([ie], !0);
            const dt = await K0(
              ee,
              h.disabled,
              u,
              G,
              n.shouldUseNativeValidation && !M,
              _e,
            );
            if (
              (Pe && _.validatingFields && I([ie]),
              dt[X.name] && ((Z.valid = !1), M))
            )
              break;
            !M &&
              (he(dt, X.name)
                ? _e
                  ? n7(r.errors, dt, X.name)
                  : Qe(r.errors, X.name, dt[X.name])
                : Tt(r.errors, X.name));
          }
          !Zt(se) && (await oe(se, M, Z));
        }
      }
      return Z.valid;
    },
    re = () => {
      for (const S of h.unMount) {
        const M = he(i, S);
        M &&
          (M._f.refs ? M._f.refs.every((Z) => !of(Z)) : !of(M._f.ref)) &&
          lt(S);
      }
      h.unMount = new Set();
    },
    ge = (S, M) => !n.disabled && (S && M && Qe(u, S, M), !Na(K(), o)),
    Ce = (S, M, Z) =>
      Cg(S, h, { ...(f.mount ? u : xt(M) ? o : Wn(S) ? { [S]: M } : M) }, Z, M),
    Se = (S) =>
      Lc(he(f.mount ? u : o, S, n.shouldUnregister ? he(o, S, []) : [])),
    k = (S, M, Z = {}) => {
      const ie = he(i, S);
      let ee = M;
      if (ie) {
        const X = ie._f;
        X &&
          (!X.disabled && Qe(u, S, Ng(M, X)),
          (ee = vc(X.ref) && qt(M) ? "" : M),
          Sg(X.ref)
            ? [...X.ref.options].forEach(
                (se) => (se.selected = ee.includes(se.value)),
              )
            : X.refs
              ? Ul(X.ref)
                ? X.refs.length > 1
                  ? X.refs.forEach(
                      (se) =>
                        (!se.defaultChecked || !se.disabled) &&
                        (se.checked = Array.isArray(ee)
                          ? !!ee.find((_e) => _e === se.value)
                          : ee === se.value),
                    )
                  : X.refs[0] && (X.refs[0].checked = !!ee)
                : X.refs.forEach((se) => (se.checked = se.value === ee))
              : sh(X.ref)
                ? (X.ref.value = "")
                : ((X.ref.value = ee),
                  X.ref.type || C.state.next({ name: S, values: zt(u) })));
      }
      (Z.shouldDirty || Z.shouldTouch) &&
        $(S, ee, Z.shouldTouch, Z.shouldDirty, !0),
        Z.shouldValidate && z(S);
    },
    Q = (S, M, Z) => {
      for (const ie in M) {
        const ee = M[ie],
          X = `${S}.${ie}`,
          se = he(i, X);
        (h.array.has(S) || yt(ee) || (se && !se._f)) && !Hr(ee)
          ? Q(X, ee, Z)
          : k(X, ee, Z);
      }
    },
    ce = (S, M, Z = {}) => {
      const ie = he(i, S),
        ee = h.array.has(S),
        X = zt(M);
      Qe(u, S, X),
        ee
          ? (C.array.next({ name: S, values: zt(u) }),
            (_.isDirty || _.dirtyFields || v.isDirty || v.dirtyFields) &&
              Z.shouldDirty &&
              C.state.next({
                name: S,
                dirtyFields: tl(o, u),
                isDirty: ge(S, X),
              }))
          : ie && !ie._f && !qt(X)
            ? Q(S, X, Z)
            : k(S, X, Z),
        F0(S, h) && C.state.next({ ...r }),
        C.state.next({ name: f.mount ? S : void 0, values: zt(u) });
    },
    Ee = async (S) => {
      f.mount = !0;
      const M = S.target;
      let Z = M.name,
        ie = !0;
      const ee = he(i, Z),
        X = (se) => {
          ie =
            Number.isNaN(se) ||
            (Hr(se) && isNaN(se.getTime())) ||
            Na(se, he(u, Z, se));
        };
      if (ee) {
        let se, _e;
        const Pe = M.type ? G0(ee._f) : zb(S),
          dt = S.type === I0.BLUR || S.type === I0.FOCUS_OUT,
          Hn =
            (!Kb(ee._f) && !n.resolver && !he(r.errors, Z) && !ee._f.deps) ||
            e7(dt, he(r.touchedFields, Z), r.isSubmitted, A, R),
          Vn = F0(Z, h, dt);
        Qe(u, Z, Pe),
          dt
            ? (ee._f.onBlur && ee._f.onBlur(S), g && g(0))
            : ee._f.onChange && ee._f.onChange(S);
        const Zn = $(Z, Pe, dt),
          fn = !Zt(Zn) || Vn;
        if ((!dt && C.state.next({ name: Z, type: S.type, values: zt(u) }), Hn))
          return (
            (_.isValid || v.isValid) &&
              (n.mode === "onBlur" ? dt && B() : dt || B()),
            fn && C.state.next({ name: Z, ...(Vn ? {} : Zn) })
          );
        if ((!dt && Vn && C.state.next({ ...r }), n.resolver)) {
          const { errors: qn } = await ve([Z]);
          if ((X(Pe), ie)) {
            const la = X0(r.errors, i, Z),
              Ba = X0(qn, i, la.name || Z);
            (se = Ba.error), (Z = Ba.name), (_e = Zt(qn));
          }
        } else
          I([Z], !0),
            (se = (await K0(ee, h.disabled, u, G, n.shouldUseNativeValidation))[
              Z
            ]),
            I([Z]),
            X(Pe),
            ie &&
              (se
                ? (_e = !1)
                : (_.isValid || v.isValid) && (_e = await oe(i, !0)));
        ie && (ee._f.deps && z(ee._f.deps), me(Z, _e, se, Zn));
      }
    },
    E = (S, M) => {
      if (he(r.errors, M) && S.focus) return S.focus(), 1;
    },
    z = async (S, M = {}) => {
      let Z, ie;
      const ee = ll(S);
      if (n.resolver) {
        const X = await Re(xt(S) ? S : ee);
        (Z = Zt(X)), (ie = S ? !ee.some((se) => he(X, se)) : Z);
      } else
        S
          ? ((ie = (
              await Promise.all(
                ee.map(async (X) => {
                  const se = he(i, X);
                  return await oe(se && se._f ? { [X]: se } : se);
                }),
              )
            ).every(Boolean)),
            !(!ie && !r.isValid) && B())
          : (ie = Z = await oe(i));
      return (
        C.state.next({
          ...(!Wn(S) || ((_.isValid || v.isValid) && Z !== r.isValid)
            ? {}
            : { name: S }),
          ...(n.resolver || !S ? { isValid: Z } : {}),
          errors: r.errors,
        }),
        M.shouldFocus && !ie && ol(i, E, S ? ee : h.mount),
        ie
      );
    },
    K = (S) => {
      const M = { ...(f.mount ? u : o) };
      return xt(S) ? M : Wn(S) ? he(M, S) : S.map((Z) => he(M, Z));
    },
    F = (S, M) => ({
      invalid: !!he((M || r).errors, S),
      isDirty: !!he((M || r).dirtyFields, S),
      error: he((M || r).errors, S),
      isValidating: !!he(r.validatingFields, S),
      isTouched: !!he((M || r).touchedFields, S),
    }),
    de = (S) => {
      S && ll(S).forEach((M) => Tt(r.errors, M)),
        C.state.next({ errors: S ? r.errors : {} });
    },
    ke = (S, M, Z) => {
      const ie = (he(i, S, { _f: {} })._f || {}).ref,
        ee = he(r.errors, S) || {},
        { ref: X, message: se, type: _e, ...Pe } = ee;
      Qe(r.errors, S, { ...Pe, ...M, ref: ie }),
        C.state.next({ name: S, errors: r.errors, isValid: !1 }),
        Z && Z.shouldFocus && ie && ie.focus && ie.focus();
    },
    le = (S, M) =>
      Rn(S)
        ? C.state.subscribe({ next: (Z) => S(Ce(void 0, M), Z) })
        : Ce(S, M, !0),
    nt = (S) =>
      C.state.subscribe({
        next: (M) => {
          Wb(S.name, M.name, S.exact) &&
            Jb(M, S.formState || _, Yt, S.reRenderRoot) &&
            S.callback({ values: { ...u }, ...r, ...M });
        },
      }).unsubscribe,
    je = (S) => (
      (f.mount = !0), (v = { ...v, ...S.formState }), nt({ ...S, formState: v })
    ),
    lt = (S, M = {}) => {
      for (const Z of S ? ll(S) : h.mount)
        h.mount.delete(Z),
          h.array.delete(Z),
          M.keepValue || (Tt(i, Z), Tt(u, Z)),
          !M.keepError && Tt(r.errors, Z),
          !M.keepDirty && Tt(r.dirtyFields, Z),
          !M.keepTouched && Tt(r.touchedFields, Z),
          !M.keepIsValidating && Tt(r.validatingFields, Z),
          !n.shouldUnregister && !M.keepDefaultValue && Tt(o, Z);
      C.state.next({ values: zt(u) }),
        C.state.next({ ...r, ...(M.keepDirty ? { isDirty: ge() } : {}) }),
        !M.keepIsValid && B();
    },
    Ht = ({ disabled: S, name: M }) => {
      ((Kn(S) && f.mount) || S || h.disabled.has(M)) &&
        (S ? h.disabled.add(M) : h.disabled.delete(M));
    },
    dn = (S, M = {}) => {
      let Z = he(i, S);
      const ie = Kn(M.disabled) || Kn(n.disabled);
      return (
        Qe(i, S, {
          ...(Z || {}),
          _f: {
            ...(Z && Z._f ? Z._f : { ref: { name: S } }),
            name: S,
            mount: !0,
            ...M,
          },
        }),
        h.mount.add(S),
        Z
          ? Ht({ disabled: Kn(M.disabled) ? M.disabled : n.disabled, name: S })
          : ne(S, !0, M.value),
        {
          ...(ie ? { disabled: M.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!M.required,
                min: nl(M.min),
                max: nl(M.max),
                minLength: nl(M.minLength),
                maxLength: nl(M.maxLength),
                pattern: nl(M.pattern),
              }
            : {}),
          name: S,
          onChange: Ee,
          onBlur: Ee,
          ref: (ee) => {
            if (ee) {
              dn(S, M), (Z = he(i, S));
              const X =
                  (xt(ee.value) &&
                    ee.querySelectorAll &&
                    ee.querySelectorAll("input,select,textarea")[0]) ||
                  ee,
                se = Yb(X),
                _e = Z._f.refs || [];
              if (se ? _e.find((Pe) => Pe === X) : X === Z._f.ref) return;
              Qe(i, S, {
                _f: {
                  ...Z._f,
                  ...(se
                    ? {
                        refs: [
                          ..._e.filter(of),
                          X,
                          ...(Array.isArray(he(o, S)) ? [{}] : []),
                        ],
                        ref: { type: X.type, name: S },
                      }
                    : { ref: X }),
                },
              }),
                ne(S, !1, void 0, X);
            } else
              (Z = he(i, S, {})),
                Z._f && (Z._f.mount = !1),
                (n.shouldUnregister || M.shouldUnregister) &&
                  !(Hb(h.array, S) && f.action) &&
                  h.unMount.add(S);
          },
        }
      );
    },
    Sn = () => n.shouldFocusError && ol(i, E, h.mount),
    We = (S) => {
      Kn(S) &&
        (C.state.next({ disabled: S }),
        ol(
          i,
          (M, Z) => {
            const ie = he(i, Z);
            ie &&
              ((M.disabled = ie._f.disabled || S),
              Array.isArray(ie._f.refs) &&
                ie._f.refs.forEach((ee) => {
                  ee.disabled = ie._f.disabled || S;
                }));
          },
          0,
          !1,
        ));
    },
    ot = (S, M) => async (Z) => {
      let ie;
      Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
      let ee = zt(u);
      if ((C.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: X, values: se } = await ve();
        (r.errors = X), (ee = se);
      } else await oe(i);
      if (h.disabled.size) for (const X of h.disabled) Qe(ee, X, void 0);
      if ((Tt(r.errors, "root"), Zt(r.errors))) {
        C.state.next({ errors: {} });
        try {
          await S(ee, Z);
        } catch (X) {
          ie = X;
        }
      } else M && (await M({ ...r.errors }, Z)), Sn(), setTimeout(Sn);
      if (
        (C.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Zt(r.errors) && !ie,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        ie)
      )
        throw ie;
    },
    In = (S, M = {}) => {
      he(i, S) &&
        (xt(M.defaultValue)
          ? ce(S, zt(he(o, S)))
          : (ce(S, M.defaultValue), Qe(o, S, zt(M.defaultValue))),
        M.keepTouched || Tt(r.touchedFields, S),
        M.keepDirty ||
          (Tt(r.dirtyFields, S),
          (r.isDirty = M.defaultValue ? ge(S, zt(he(o, S))) : ge())),
        M.keepError || (Tt(r.errors, S), _.isValid && B()),
        C.state.next({ ...r }));
    },
    sa = (S, M = {}) => {
      const Z = S ? zt(S) : o,
        ie = zt(Z),
        ee = Zt(S),
        X = ee ? o : ie;
      if ((M.keepDefaultValues || (o = Z), !M.keepValues)) {
        if (M.keepDirtyValues) {
          const se = new Set([...h.mount, ...Object.keys(tl(o, u))]);
          for (const _e of Array.from(se))
            he(r.dirtyFields, _e) ? Qe(X, _e, he(u, _e)) : ce(_e, he(X, _e));
        } else {
          if (ah && xt(S))
            for (const se of h.mount) {
              const _e = he(i, se);
              if (_e && _e._f) {
                const Pe = Array.isArray(_e._f.refs)
                  ? _e._f.refs[0]
                  : _e._f.ref;
                if (vc(Pe)) {
                  const dt = Pe.closest("form");
                  if (dt) {
                    dt.reset();
                    break;
                  }
                }
              }
            }
          for (const se of h.mount) ce(se, he(X, se));
        }
        (u = zt(X)),
          C.array.next({ values: { ...X } }),
          C.state.next({ values: { ...X } });
      }
      (h = {
        mount: M.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount = !_.isValid || !!M.keepIsValid || !!M.keepDirtyValues),
        (f.watch = !!n.shouldUnregister),
        C.state.next({
          submitCount: M.keepSubmitCount ? r.submitCount : 0,
          isDirty: ee
            ? !1
            : M.keepDirty
              ? r.isDirty
              : !!(M.keepDefaultValues && !Na(S, o)),
          isSubmitted: M.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: ee
            ? {}
            : M.keepDirtyValues
              ? M.keepDefaultValues && u
                ? tl(o, u)
                : r.dirtyFields
              : M.keepDefaultValues && S
                ? tl(o, S)
                : M.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: M.keepTouched ? r.touchedFields : {},
          errors: M.keepErrors ? r.errors : {},
          isSubmitSuccessful: M.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Ct = (S, M) => sa(Rn(S) ? S(u) : S, M),
    Fr = (S, M = {}) => {
      const Z = he(i, S),
        ie = Z && Z._f;
      if (ie) {
        const ee = ie.refs ? ie.refs[0] : ie.ref;
        ee.focus &&
          (ee.focus(), M.shouldSelect && Rn(ee.select) && ee.select());
      }
    },
    Yt = (S) => {
      r = { ...r, ...S };
    },
    ia = {
      control: {
        register: dn,
        unregister: lt,
        getFieldState: F,
        handleSubmit: ot,
        setError: ke,
        _subscribe: nt,
        _runSchema: ve,
        _getWatch: Ce,
        _getDirty: ge,
        _setValid: B,
        _setFieldArray: V,
        _setDisabledField: Ht,
        _setErrors: U,
        _getFieldArray: Se,
        _reset: sa,
        _resetDefaultValues: () =>
          Rn(n.defaultValues) &&
          n.defaultValues().then((S) => {
            Ct(S, n.resetOptions), C.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: re,
        _disableForm: We,
        _subjects: C,
        _proxyFormState: _,
        get _fields() {
          return i;
        },
        get _formValues() {
          return u;
        },
        get _state() {
          return f;
        },
        set _state(S) {
          f = S;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return h;
        },
        set _names(S) {
          h = S;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return n;
        },
        set _options(S) {
          n = { ...n, ...S };
        },
      },
      subscribe: je,
      trigger: z,
      register: dn,
      handleSubmit: ot,
      watch: le,
      setValue: ce,
      getValues: K,
      reset: Ct,
      resetField: In,
      clearErrors: de,
      unregister: lt,
      setError: ke,
      setFocus: Fr,
      getFieldState: F,
    };
  return { ...ia, formControl: ia };
}
const s7 = typeof window < "u" ? J.useLayoutEffect : J.useEffect;
function i7(a = {}) {
  const n = J.useRef(void 0),
    r = J.useRef(void 0),
    [i, o] = J.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Rn(a.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
      isReady: !1,
      defaultValues: Rn(a.defaultValues) ? void 0 : a.defaultValues,
    });
  n.current ||
    ((n.current = { ...(a.formControl ? a.formControl : r7(a)), formState: i }),
    a.formControl &&
      a.defaultValues &&
      !Rn(a.defaultValues) &&
      a.formControl.reset(a.defaultValues, a.resetOptions));
  const u = n.current.control;
  return (
    (u._options = a),
    s7(() => {
      const f = u._subscribe({
        formState: u._proxyFormState,
        callback: () => o({ ...u._formState }),
        reRenderRoot: !0,
      });
      return o((h) => ({ ...h, isReady: !0 })), (u._formState.isReady = !0), f;
    }, [u]),
    J.useEffect(() => u._disableForm(a.disabled), [u, a.disabled]),
    J.useEffect(() => {
      a.mode && (u._options.mode = a.mode),
        a.reValidateMode && (u._options.reValidateMode = a.reValidateMode),
        a.errors && !Zt(a.errors) && u._setErrors(a.errors);
    }, [u, a.errors, a.mode, a.reValidateMode]),
    J.useEffect(() => {
      a.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
    }, [u, a.shouldUnregister]),
    J.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const f = u._getDirty();
        f !== i.isDirty && u._subjects.state.next({ isDirty: f });
      }
    }, [u, i.isDirty]),
    J.useEffect(() => {
      a.values && !Na(a.values, r.current)
        ? (u._reset(a.values, u._options.resetOptions),
          (r.current = a.values),
          o((f) => ({ ...f })))
        : u._resetDefaultValues();
    }, [u, a.values]),
    J.useEffect(() => {
      u._state.mount || (u._setValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    (n.current.formState = Pb(i, u)),
    n.current
  );
}
const J0 = (a, n, r) => {
    if (a && "reportValidity" in a) {
      const i = he(r, n);
      a.setCustomValidity((i && i.message) || ""), a.reportValidity();
    }
  },
  Rg = (a, n) => {
    for (const r in n.fields) {
      const i = n.fields[r];
      i && i.ref && "reportValidity" in i.ref
        ? J0(i.ref, r, a)
        : i && i.refs && i.refs.forEach((o) => J0(o, r, a));
    }
  },
  l7 = (a, n) => {
    n.shouldUseNativeValidation && Rg(a, n);
    const r = {};
    for (const i in a) {
      const o = he(n.fields, i),
        u = Object.assign(a[i] || {}, { ref: o && o.ref });
      if (o7(n.names || Object.keys(a), i)) {
        const f = Object.assign({}, he(r, i));
        Qe(f, "root", u), Qe(r, i, f);
      } else Qe(r, i, u);
    }
    return r;
  },
  o7 = (a, n) => {
    const r = W0(n);
    return a.some((i) => W0(i).match(`^${r}\\.\\d+`));
  };
function W0(a) {
  return a.replace(/\]|\[/g, "");
}
function c7(a, n) {
  for (var r = {}; a.length; ) {
    var i = a[0],
      o = i.code,
      u = i.message,
      f = i.path.join(".");
    if (!r[f])
      if ("unionErrors" in i) {
        var h = i.unionErrors[0].errors[0];
        r[f] = { message: h.message, type: h.code };
      } else r[f] = { message: u, type: o };
    if (
      ("unionErrors" in i &&
        i.unionErrors.forEach(function (_) {
          return _.errors.forEach(function (v) {
            return a.push(v);
          });
        }),
      n)
    ) {
      var g = r[f].types,
        m = g && g[i.code];
      r[f] = wg(f, n, r, o, m ? [].concat(m, i.message) : i.message);
    }
    a.shift();
  }
  return r;
}
function u7(a, n, r) {
  return (
    r === void 0 && (r = {}),
    function (i, o, u) {
      try {
        return Promise.resolve(
          (function (f, h) {
            try {
              var g = Promise.resolve(
                a[r.mode === "sync" ? "parse" : "parseAsync"](i, n),
              ).then(function (m) {
                return (
                  u.shouldUseNativeValidation && Rg({}, u),
                  { errors: {}, values: r.raw ? Object.assign({}, i) : m }
                );
              });
            } catch (m) {
              return h(m);
            }
            return g && g.then ? g.then(void 0, h) : g;
          })(0, function (f) {
            if (
              (function (h) {
                return Array.isArray(h == null ? void 0 : h.errors);
              })(f)
            )
              return {
                values: {},
                errors: l7(
                  c7(
                    f.errors,
                    !u.shouldUseNativeValidation && u.criteriaMode === "all",
                  ),
                  u,
                ),
              };
            throw f;
          }),
        );
      } catch (f) {
        return Promise.reject(f);
      }
    }
  );
}
var Ve;
(function (a) {
  a.assertEqual = (o) => o;
  function n(o) {}
  a.assertIs = n;
  function r(o) {
    throw new Error();
  }
  (a.assertNever = r),
    (a.arrayToEnum = (o) => {
      const u = {};
      for (const f of o) u[f] = f;
      return u;
    }),
    (a.getValidEnumValues = (o) => {
      const u = a.objectKeys(o).filter((h) => typeof o[o[h]] != "number"),
        f = {};
      for (const h of u) f[h] = o[h];
      return a.objectValues(f);
    }),
    (a.objectValues = (o) =>
      a.objectKeys(o).map(function (u) {
        return o[u];
      })),
    (a.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            const u = [];
            for (const f in o)
              Object.prototype.hasOwnProperty.call(o, f) && u.push(f);
            return u;
          }),
    (a.find = (o, u) => {
      for (const f of o) if (u(f)) return f;
    }),
    (a.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o);
  function i(o, u = " | ") {
    return o.map((f) => (typeof f == "string" ? `'${f}'` : f)).join(u);
  }
  (a.joinValues = i),
    (a.jsonStringifyReplacer = (o, u) =>
      typeof u == "bigint" ? u.toString() : u);
})(Ve || (Ve = {}));
var Tf;
(function (a) {
  a.mergeShapes = (n, r) => ({ ...n, ...r });
})(Tf || (Tf = {}));
const ue = Ve.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Ta = (a) => {
    switch (typeof a) {
      case "undefined":
        return ue.undefined;
      case "string":
        return ue.string;
      case "number":
        return isNaN(a) ? ue.nan : ue.number;
      case "boolean":
        return ue.boolean;
      case "function":
        return ue.function;
      case "bigint":
        return ue.bigint;
      case "symbol":
        return ue.symbol;
      case "object":
        return Array.isArray(a)
          ? ue.array
          : a === null
            ? ue.null
            : a.then &&
                typeof a.then == "function" &&
                a.catch &&
                typeof a.catch == "function"
              ? ue.promise
              : typeof Map < "u" && a instanceof Map
                ? ue.map
                : typeof Set < "u" && a instanceof Set
                  ? ue.set
                  : typeof Date < "u" && a instanceof Date
                    ? ue.date
                    : ue.object;
      default:
        return ue.unknown;
    }
  },
  W = Ve.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  d7 = (a) => JSON.stringify(a, null, 2).replace(/"([^"]+)":/g, "$1:");
class cn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = n);
  }
  format(n) {
    const r =
        n ||
        function (u) {
          return u.message;
        },
      i = { _errors: [] },
      o = (u) => {
        for (const f of u.issues)
          if (f.code === "invalid_union") f.unionErrors.map(o);
          else if (f.code === "invalid_return_type") o(f.returnTypeError);
          else if (f.code === "invalid_arguments") o(f.argumentsError);
          else if (f.path.length === 0) i._errors.push(r(f));
          else {
            let h = i,
              g = 0;
            for (; g < f.path.length; ) {
              const m = f.path[g];
              g === f.path.length - 1
                ? ((h[m] = h[m] || { _errors: [] }), h[m]._errors.push(r(f)))
                : (h[m] = h[m] || { _errors: [] }),
                (h = h[m]),
                g++;
            }
          }
      };
    return o(this), i;
  }
  static assert(n) {
    if (!(n instanceof cn)) throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ve.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (r) => r.message) {
    const r = {},
      i = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((r[o.path[0]] = r[o.path[0]] || []), r[o.path[0]].push(n(o)))
        : i.push(n(o));
    return { formErrors: i, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
cn.create = (a) => new cn(a);
const Gs = (a, n) => {
  let r;
  switch (a.code) {
    case W.invalid_type:
      a.received === ue.undefined
        ? (r = "Required")
        : (r = `Expected ${a.expected}, received ${a.received}`);
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(a.expected, Ve.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ve.joinValues(a.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ve.joinValues(a.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ve.joinValues(a.options)}, received '${a.received}'`;
      break;
    case W.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case W.invalid_return_type:
      r = "Invalid function return type";
      break;
    case W.invalid_date:
      r = "Invalid date";
      break;
    case W.invalid_string:
      typeof a.validation == "object"
        ? "includes" in a.validation
          ? ((r = `Invalid input: must include "${a.validation.includes}"`),
            typeof a.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${a.validation.position}`))
          : "startsWith" in a.validation
            ? (r = `Invalid input: must start with "${a.validation.startsWith}"`)
            : "endsWith" in a.validation
              ? (r = `Invalid input: must end with "${a.validation.endsWith}"`)
              : Ve.assertNever(a.validation)
        : a.validation !== "regex"
          ? (r = `Invalid ${a.validation}`)
          : (r = "Invalid");
      break;
    case W.too_small:
      a.type === "array"
        ? (r = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "more than"} ${a.minimum} element(s)`)
        : a.type === "string"
          ? (r = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "over"} ${a.minimum} character(s)`)
          : a.type === "number"
            ? (r = `Number must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${a.minimum}`)
            : a.type === "date"
              ? (r = `Date must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(a.minimum))}`)
              : (r = "Invalid input");
      break;
    case W.too_big:
      a.type === "array"
        ? (r = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "less than"} ${a.maximum} element(s)`)
        : a.type === "string"
          ? (r = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "under"} ${a.maximum} character(s)`)
          : a.type === "number"
            ? (r = `Number must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}`)
            : a.type === "bigint"
              ? (r = `BigInt must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}`)
              : a.type === "date"
                ? (r = `Date must be ${a.exact ? "exactly" : a.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(a.maximum))}`)
                : (r = "Invalid input");
      break;
    case W.custom:
      r = "Invalid input";
      break;
    case W.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      r = `Number must be a multiple of ${a.multipleOf}`;
      break;
    case W.not_finite:
      r = "Number must be finite";
      break;
    default:
      (r = n.defaultError), Ve.assertNever(a);
  }
  return { message: r };
};
let Og = Gs;
function f7(a) {
  Og = a;
}
function xc() {
  return Og;
}
const Cc = (a) => {
    const { data: n, path: r, errorMaps: i, issueData: o } = a,
      u = [...r, ...(o.path || [])],
      f = { ...o, path: u };
    if (o.message !== void 0) return { ...o, path: u, message: o.message };
    let h = "";
    const g = i
      .filter((m) => !!m)
      .slice()
      .reverse();
    for (const m of g) h = m(f, { data: n, defaultError: h }).message;
    return { ...o, path: u, message: h };
  },
  h7 = [];
function ae(a, n) {
  const r = xc(),
    i = Cc({
      issueData: n,
      data: a.data,
      path: a.path,
      errorMaps: [
        a.common.contextualErrorMap,
        a.schemaErrorMap,
        r,
        r === Gs ? void 0 : Gs,
      ].filter((o) => !!o),
    });
  a.common.issues.push(i);
}
class It {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(n, r) {
    const i = [];
    for (const o of r) {
      if (o.status === "aborted") return Ae;
      o.status === "dirty" && n.dirty(), i.push(o.value);
    }
    return { status: n.value, value: i };
  }
  static async mergeObjectAsync(n, r) {
    const i = [];
    for (const o of r) {
      const u = await o.key,
        f = await o.value;
      i.push({ key: u, value: f });
    }
    return It.mergeObjectSync(n, i);
  }
  static mergeObjectSync(n, r) {
    const i = {};
    for (const o of r) {
      const { key: u, value: f } = o;
      if (u.status === "aborted" || f.status === "aborted") return Ae;
      u.status === "dirty" && n.dirty(),
        f.status === "dirty" && n.dirty(),
        u.value !== "__proto__" &&
          (typeof f.value < "u" || o.alwaysSet) &&
          (i[u.value] = f.value);
    }
    return { status: n.value, value: i };
  }
}
const Ae = Object.freeze({ status: "aborted" }),
  Us = (a) => ({ status: "dirty", value: a }),
  Gt = (a) => ({ status: "valid", value: a }),
  Af = (a) => a.status === "aborted",
  Nf = (a) => a.status === "dirty",
  Pr = (a) => a.status === "valid",
  ml = (a) => typeof Promise < "u" && a instanceof Promise;
function wc(a, n, r, i) {
  if (typeof n == "function" ? a !== n || !0 : !n.has(a))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return n.get(a);
}
function Dg(a, n, r, i, o) {
  if (typeof n == "function" ? a !== n || !0 : !n.has(a))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return n.set(a, r), r;
}
var pe;
(function (a) {
  (a.errToObj = (n) => (typeof n == "string" ? { message: n } : n || {})),
    (a.toString = (n) =>
      typeof n == "string" ? n : n == null ? void 0 : n.message);
})(pe || (pe = {}));
var al, rl;
class aa {
  constructor(n, r, i, o) {
    (this._cachedPath = []),
      (this.parent = n),
      (this.data = r),
      (this._path = i),
      (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const ep = (a, n) => {
  if (Pr(n)) return { success: !0, data: n.value };
  if (!a.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new cn(a.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function De(a) {
  if (!a) return {};
  const {
    errorMap: n,
    invalid_type_error: r,
    required_error: i,
    description: o,
  } = a;
  if (n && (r || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return n
    ? { errorMap: n, description: o }
    : {
        errorMap: (f, h) => {
          var g, m;
          const { message: _ } = a;
          return f.code === "invalid_enum_value"
            ? { message: _ ?? h.defaultError }
            : typeof h.data > "u"
              ? {
                  message:
                    (g = _ ?? i) !== null && g !== void 0 ? g : h.defaultError,
                }
              : f.code !== "invalid_type"
                ? { message: h.defaultError }
                : {
                    message:
                      (m = _ ?? r) !== null && m !== void 0
                        ? m
                        : h.defaultError,
                  };
        },
        description: o,
      };
}
class Le {
  get description() {
    return this._def.description;
  }
  _getType(n) {
    return Ta(n.data);
  }
  _getOrReturnCtx(n, r) {
    return (
      r || {
        common: n.parent.common,
        data: n.data,
        parsedType: Ta(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      }
    );
  }
  _processInputParams(n) {
    return {
      status: new It(),
      ctx: {
        common: n.parent.common,
        data: n.data,
        parsedType: Ta(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      },
    };
  }
  _parseSync(n) {
    const r = this._parse(n);
    if (ml(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(n) {
    const r = this._parse(n);
    return Promise.resolve(r);
  }
  parse(n, r) {
    const i = this.safeParse(n, r);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(n, r) {
    var i;
    const o = {
        common: {
          issues: [],
          async:
            (i = r == null ? void 0 : r.async) !== null && i !== void 0
              ? i
              : !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ta(n),
      },
      u = this._parseSync({ data: n, path: o.path, parent: o });
    return ep(o, u);
  }
  "~validate"(n) {
    var r, i;
    const o = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: n,
      parsedType: Ta(n),
    };
    if (!this["~standard"].async)
      try {
        const u = this._parseSync({ data: n, path: [], parent: o });
        return Pr(u) ? { value: u.value } : { issues: o.common.issues };
      } catch (u) {
        !(
          (i =
            (r = u == null ? void 0 : u.message) === null || r === void 0
              ? void 0
              : r.toLowerCase()) === null || i === void 0
        ) &&
          i.includes("encountered") &&
          (this["~standard"].async = !0),
          (o.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: n, path: [], parent: o }).then((u) =>
      Pr(u) ? { value: u.value } : { issues: o.common.issues },
    );
  }
  async parseAsync(n, r) {
    const i = await this.safeParseAsync(n, r);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(n, r) {
    const i = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ta(n),
      },
      o = this._parse({ data: n, path: i.path, parent: i }),
      u = await (ml(o) ? o : Promise.resolve(o));
    return ep(i, u);
  }
  refine(n, r) {
    const i = (o) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
          ? r(o)
          : r;
    return this._refinement((o, u) => {
      const f = n(o),
        h = () => u.addIssue({ code: W.custom, ...i(o) });
      return typeof Promise < "u" && f instanceof Promise
        ? f.then((g) => (g ? !0 : (h(), !1)))
        : f
          ? !0
          : (h(), !1);
    });
  }
  refinement(n, r) {
    return this._refinement((i, o) =>
      n(i) ? !0 : (o.addIssue(typeof r == "function" ? r(i, o) : r), !1),
    );
  }
  _refinement(n) {
    return new Un({
      schema: this,
      typeName: we.ZodEffects,
      effect: { type: "refinement", refinement: n },
    });
  }
  superRefine(n) {
    return this._refinement(n);
  }
  constructor(n) {
    (this.spa = this.safeParseAsync),
      (this._def = n),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (r) => this["~validate"](r),
      });
  }
  optional() {
    return ta.create(this, this._def);
  }
  nullable() {
    return gr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ln.create(this);
  }
  promise() {
    return $s.create(this, this._def);
  }
  or(n) {
    return vl.create([this, n], this._def);
  }
  and(n) {
    return bl.create(this, n, this._def);
  }
  transform(n) {
    return new Un({
      ...De(this._def),
      schema: this,
      typeName: we.ZodEffects,
      effect: { type: "transform", transform: n },
    });
  }
  default(n) {
    const r = typeof n == "function" ? n : () => n;
    return new Sl({
      ...De(this._def),
      innerType: this,
      defaultValue: r,
      typeName: we.ZodDefault,
    });
  }
  brand() {
    return new lh({ typeName: we.ZodBranded, type: this, ...De(this._def) });
  }
  catch(n) {
    const r = typeof n == "function" ? n : () => n;
    return new El({
      ...De(this._def),
      innerType: this,
      catchValue: r,
      typeName: we.ZodCatch,
    });
  }
  describe(n) {
    const r = this.constructor;
    return new r({ ...this._def, description: n });
  }
  pipe(n) {
    return Bl.create(this, n);
  }
  readonly() {
    return Tl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const m7 = /^c[^\s-]{8,}$/i,
  p7 = /^[0-9a-z]+$/,
  g7 = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  y7 =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  v7 = /^[a-z0-9_-]{21}$/i,
  b7 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  _7 =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  x7 =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  C7 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let cf;
const w7 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  S7 =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  E7 =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  T7 =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  A7 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  N7 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Mg =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  k7 = new RegExp(`^${Mg}$`);
function jg(a) {
  let n = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    a.precision
      ? (n = `${n}\\.\\d{${a.precision}}`)
      : a.precision == null && (n = `${n}(\\.\\d+)?`),
    n
  );
}
function R7(a) {
  return new RegExp(`^${jg(a)}$`);
}
function Lg(a) {
  let n = `${Mg}T${jg(a)}`;
  const r = [];
  return (
    r.push(a.local ? "Z?" : "Z"),
    a.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (n = `${n}(${r.join("|")})`),
    new RegExp(`^${n}$`)
  );
}
function O7(a, n) {
  return !!(
    ((n === "v4" || !n) && w7.test(a)) ||
    ((n === "v6" || !n) && E7.test(a))
  );
}
function D7(a, n) {
  if (!b7.test(a)) return !1;
  try {
    const [r] = a.split("."),
      i = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      o = JSON.parse(atob(i));
    return !(
      typeof o != "object" ||
      o === null ||
      !o.typ ||
      !o.alg ||
      (n && o.alg !== n)
    );
  } catch {
    return !1;
  }
}
function M7(a, n) {
  return !!(
    ((n === "v4" || !n) && S7.test(a)) ||
    ((n === "v6" || !n) && T7.test(a))
  );
}
class Dn extends Le {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = String(n.data)),
      this._getType(n) !== ue.string)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ae(u, {
          code: W.invalid_type,
          expected: ue.string,
          received: u.parsedType,
        }),
        Ae
      );
    }
    const i = new It();
    let o;
    for (const u of this._def.checks)
      if (u.kind === "min")
        n.data.length < u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            code: W.too_small,
            minimum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "max")
        n.data.length > u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            code: W.too_big,
            maximum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "length") {
        const f = n.data.length > u.value,
          h = n.data.length < u.value;
        (f || h) &&
          ((o = this._getOrReturnCtx(n, o)),
          f
            ? ae(o, {
                code: W.too_big,
                maximum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              })
            : h &&
              ae(o, {
                code: W.too_small,
                minimum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              }),
          i.dirty());
      } else if (u.kind === "email")
        x7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "email",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "emoji")
        cf || (cf = new RegExp(C7, "u")),
          cf.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ae(o, {
              validation: "emoji",
              code: W.invalid_string,
              message: u.message,
            }),
            i.dirty());
      else if (u.kind === "uuid")
        y7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "uuid",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "nanoid")
        v7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "nanoid",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid")
        m7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "cuid",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid2")
        p7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "cuid2",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "ulid")
        g7.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            validation: "ulid",
            code: W.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "url")
        try {
          new URL(n.data);
        } catch {
          (o = this._getOrReturnCtx(n, o)),
            ae(o, {
              validation: "url",
              code: W.invalid_string,
              message: u.message,
            }),
            i.dirty();
        }
      else
        u.kind === "regex"
          ? ((u.regex.lastIndex = 0),
            u.regex.test(n.data) ||
              ((o = this._getOrReturnCtx(n, o)),
              ae(o, {
                validation: "regex",
                code: W.invalid_string,
                message: u.message,
              }),
              i.dirty()))
          : u.kind === "trim"
            ? (n.data = n.data.trim())
            : u.kind === "includes"
              ? n.data.includes(u.value, u.position) ||
                ((o = this._getOrReturnCtx(n, o)),
                ae(o, {
                  code: W.invalid_string,
                  validation: { includes: u.value, position: u.position },
                  message: u.message,
                }),
                i.dirty())
              : u.kind === "toLowerCase"
                ? (n.data = n.data.toLowerCase())
                : u.kind === "toUpperCase"
                  ? (n.data = n.data.toUpperCase())
                  : u.kind === "startsWith"
                    ? n.data.startsWith(u.value) ||
                      ((o = this._getOrReturnCtx(n, o)),
                      ae(o, {
                        code: W.invalid_string,
                        validation: { startsWith: u.value },
                        message: u.message,
                      }),
                      i.dirty())
                    : u.kind === "endsWith"
                      ? n.data.endsWith(u.value) ||
                        ((o = this._getOrReturnCtx(n, o)),
                        ae(o, {
                          code: W.invalid_string,
                          validation: { endsWith: u.value },
                          message: u.message,
                        }),
                        i.dirty())
                      : u.kind === "datetime"
                        ? Lg(u).test(n.data) ||
                          ((o = this._getOrReturnCtx(n, o)),
                          ae(o, {
                            code: W.invalid_string,
                            validation: "datetime",
                            message: u.message,
                          }),
                          i.dirty())
                        : u.kind === "date"
                          ? k7.test(n.data) ||
                            ((o = this._getOrReturnCtx(n, o)),
                            ae(o, {
                              code: W.invalid_string,
                              validation: "date",
                              message: u.message,
                            }),
                            i.dirty())
                          : u.kind === "time"
                            ? R7(u).test(n.data) ||
                              ((o = this._getOrReturnCtx(n, o)),
                              ae(o, {
                                code: W.invalid_string,
                                validation: "time",
                                message: u.message,
                              }),
                              i.dirty())
                            : u.kind === "duration"
                              ? _7.test(n.data) ||
                                ((o = this._getOrReturnCtx(n, o)),
                                ae(o, {
                                  validation: "duration",
                                  code: W.invalid_string,
                                  message: u.message,
                                }),
                                i.dirty())
                              : u.kind === "ip"
                                ? O7(n.data, u.version) ||
                                  ((o = this._getOrReturnCtx(n, o)),
                                  ae(o, {
                                    validation: "ip",
                                    code: W.invalid_string,
                                    message: u.message,
                                  }),
                                  i.dirty())
                                : u.kind === "jwt"
                                  ? D7(n.data, u.alg) ||
                                    ((o = this._getOrReturnCtx(n, o)),
                                    ae(o, {
                                      validation: "jwt",
                                      code: W.invalid_string,
                                      message: u.message,
                                    }),
                                    i.dirty())
                                  : u.kind === "cidr"
                                    ? M7(n.data, u.version) ||
                                      ((o = this._getOrReturnCtx(n, o)),
                                      ae(o, {
                                        validation: "cidr",
                                        code: W.invalid_string,
                                        message: u.message,
                                      }),
                                      i.dirty())
                                    : u.kind === "base64"
                                      ? A7.test(n.data) ||
                                        ((o = this._getOrReturnCtx(n, o)),
                                        ae(o, {
                                          validation: "base64",
                                          code: W.invalid_string,
                                          message: u.message,
                                        }),
                                        i.dirty())
                                      : u.kind === "base64url"
                                        ? N7.test(n.data) ||
                                          ((o = this._getOrReturnCtx(n, o)),
                                          ae(o, {
                                            validation: "base64url",
                                            code: W.invalid_string,
                                            message: u.message,
                                          }),
                                          i.dirty())
                                        : Ve.assertNever(u);
    return { status: i.value, value: n.data };
  }
  _regex(n, r, i) {
    return this.refinement((o) => n.test(o), {
      validation: r,
      code: W.invalid_string,
      ...pe.errToObj(i),
    });
  }
  _addCheck(n) {
    return new Dn({ ...this._def, checks: [...this._def.checks, n] });
  }
  email(n) {
    return this._addCheck({ kind: "email", ...pe.errToObj(n) });
  }
  url(n) {
    return this._addCheck({ kind: "url", ...pe.errToObj(n) });
  }
  emoji(n) {
    return this._addCheck({ kind: "emoji", ...pe.errToObj(n) });
  }
  uuid(n) {
    return this._addCheck({ kind: "uuid", ...pe.errToObj(n) });
  }
  nanoid(n) {
    return this._addCheck({ kind: "nanoid", ...pe.errToObj(n) });
  }
  cuid(n) {
    return this._addCheck({ kind: "cuid", ...pe.errToObj(n) });
  }
  cuid2(n) {
    return this._addCheck({ kind: "cuid2", ...pe.errToObj(n) });
  }
  ulid(n) {
    return this._addCheck({ kind: "ulid", ...pe.errToObj(n) });
  }
  base64(n) {
    return this._addCheck({ kind: "base64", ...pe.errToObj(n) });
  }
  base64url(n) {
    return this._addCheck({ kind: "base64url", ...pe.errToObj(n) });
  }
  jwt(n) {
    return this._addCheck({ kind: "jwt", ...pe.errToObj(n) });
  }
  ip(n) {
    return this._addCheck({ kind: "ip", ...pe.errToObj(n) });
  }
  cidr(n) {
    return this._addCheck({ kind: "cidr", ...pe.errToObj(n) });
  }
  datetime(n) {
    var r, i;
    return typeof n == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: n,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
                ? void 0
                : n.precision,
          offset:
            (r = n == null ? void 0 : n.offset) !== null && r !== void 0
              ? r
              : !1,
          local:
            (i = n == null ? void 0 : n.local) !== null && i !== void 0
              ? i
              : !1,
          ...pe.errToObj(n == null ? void 0 : n.message),
        });
  }
  date(n) {
    return this._addCheck({ kind: "date", message: n });
  }
  time(n) {
    return typeof n == "string"
      ? this._addCheck({ kind: "time", precision: null, message: n })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
                ? void 0
                : n.precision,
          ...pe.errToObj(n == null ? void 0 : n.message),
        });
  }
  duration(n) {
    return this._addCheck({ kind: "duration", ...pe.errToObj(n) });
  }
  regex(n, r) {
    return this._addCheck({ kind: "regex", regex: n, ...pe.errToObj(r) });
  }
  includes(n, r) {
    return this._addCheck({
      kind: "includes",
      value: n,
      position: r == null ? void 0 : r.position,
      ...pe.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(n, r) {
    return this._addCheck({ kind: "startsWith", value: n, ...pe.errToObj(r) });
  }
  endsWith(n, r) {
    return this._addCheck({ kind: "endsWith", value: n, ...pe.errToObj(r) });
  }
  min(n, r) {
    return this._addCheck({ kind: "min", value: n, ...pe.errToObj(r) });
  }
  max(n, r) {
    return this._addCheck({ kind: "max", value: n, ...pe.errToObj(r) });
  }
  length(n, r) {
    return this._addCheck({ kind: "length", value: n, ...pe.errToObj(r) });
  }
  nonempty(n) {
    return this.min(1, pe.errToObj(n));
  }
  trim() {
    return new Dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((n) => n.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((n) => n.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((n) => n.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((n) => n.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((n) => n.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((n) => n.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((n) => n.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((n) => n.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((n) => n.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((n) => n.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((n) => n.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((n) => n.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((n) => n.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((n) => n.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((n) => n.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((n) => n.kind === "base64url");
  }
  get minLength() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxLength() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
}
Dn.create = (a) => {
  var n;
  return new Dn({
    checks: [],
    typeName: we.ZodString,
    coerce:
      (n = a == null ? void 0 : a.coerce) !== null && n !== void 0 ? n : !1,
    ...De(a),
  });
};
function j7(a, n) {
  const r = (a.toString().split(".")[1] || "").length,
    i = (n.toString().split(".")[1] || "").length,
    o = r > i ? r : i,
    u = parseInt(a.toFixed(o).replace(".", "")),
    f = parseInt(n.toFixed(o).replace(".", ""));
  return (u % f) / Math.pow(10, o);
}
class hr extends Le {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(n) {
    if (
      (this._def.coerce && (n.data = Number(n.data)),
      this._getType(n) !== ue.number)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ae(u, {
          code: W.invalid_type,
          expected: ue.number,
          received: u.parsedType,
        }),
        Ae
      );
    }
    let i;
    const o = new It();
    for (const u of this._def.checks)
      u.kind === "int"
        ? Ve.isInteger(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ae(i, {
            code: W.invalid_type,
            expected: "integer",
            received: "float",
            message: u.message,
          }),
          o.dirty())
        : u.kind === "min"
          ? (u.inclusive ? n.data < u.value : n.data <= u.value) &&
            ((i = this._getOrReturnCtx(n, i)),
            ae(i, {
              code: W.too_small,
              minimum: u.value,
              type: "number",
              inclusive: u.inclusive,
              exact: !1,
              message: u.message,
            }),
            o.dirty())
          : u.kind === "max"
            ? (u.inclusive ? n.data > u.value : n.data >= u.value) &&
              ((i = this._getOrReturnCtx(n, i)),
              ae(i, {
                code: W.too_big,
                maximum: u.value,
                type: "number",
                inclusive: u.inclusive,
                exact: !1,
                message: u.message,
              }),
              o.dirty())
            : u.kind === "multipleOf"
              ? j7(n.data, u.value) !== 0 &&
                ((i = this._getOrReturnCtx(n, i)),
                ae(i, {
                  code: W.not_multiple_of,
                  multipleOf: u.value,
                  message: u.message,
                }),
                o.dirty())
              : u.kind === "finite"
                ? Number.isFinite(n.data) ||
                  ((i = this._getOrReturnCtx(n, i)),
                  ae(i, { code: W.not_finite, message: u.message }),
                  o.dirty())
                : Ve.assertNever(u);
    return { status: o.value, value: n.data };
  }
  gte(n, r) {
    return this.setLimit("min", n, !0, pe.toString(r));
  }
  gt(n, r) {
    return this.setLimit("min", n, !1, pe.toString(r));
  }
  lte(n, r) {
    return this.setLimit("max", n, !0, pe.toString(r));
  }
  lt(n, r) {
    return this.setLimit("max", n, !1, pe.toString(r));
  }
  setLimit(n, r, i, o) {
    return new hr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: r, inclusive: i, message: pe.toString(o) },
      ],
    });
  }
  _addCheck(n) {
    return new hr({ ...this._def, checks: [...this._def.checks, n] });
  }
  int(n) {
    return this._addCheck({ kind: "int", message: pe.toString(n) });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: pe.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: pe.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: pe.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: pe.toString(n),
    });
  }
  multipleOf(n, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: pe.toString(r),
    });
  }
  finite(n) {
    return this._addCheck({ kind: "finite", message: pe.toString(n) });
  }
  safe(n) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: pe.toString(n),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: pe.toString(n),
    });
  }
  get minValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
  get isInt() {
    return !!this._def.checks.find(
      (n) =>
        n.kind === "int" || (n.kind === "multipleOf" && Ve.isInteger(n.value)),
    );
  }
  get isFinite() {
    let n = null,
      r = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (r === null || i.value > r) && (r = i.value)
        : i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    }
    return Number.isFinite(r) && Number.isFinite(n);
  }
}
hr.create = (a) =>
  new hr({
    checks: [],
    typeName: we.ZodNumber,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...De(a),
  });
class mr extends Le {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(n) {
    if (this._def.coerce)
      try {
        n.data = BigInt(n.data);
      } catch {
        return this._getInvalidInput(n);
      }
    if (this._getType(n) !== ue.bigint) return this._getInvalidInput(n);
    let i;
    const o = new It();
    for (const u of this._def.checks)
      u.kind === "min"
        ? (u.inclusive ? n.data < u.value : n.data <= u.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          ae(i, {
            code: W.too_small,
            type: "bigint",
            minimum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "max"
          ? (u.inclusive ? n.data > u.value : n.data >= u.value) &&
            ((i = this._getOrReturnCtx(n, i)),
            ae(i, {
              code: W.too_big,
              type: "bigint",
              maximum: u.value,
              inclusive: u.inclusive,
              message: u.message,
            }),
            o.dirty())
          : u.kind === "multipleOf"
            ? n.data % u.value !== BigInt(0) &&
              ((i = this._getOrReturnCtx(n, i)),
              ae(i, {
                code: W.not_multiple_of,
                multipleOf: u.value,
                message: u.message,
              }),
              o.dirty())
            : Ve.assertNever(u);
    return { status: o.value, value: n.data };
  }
  _getInvalidInput(n) {
    const r = this._getOrReturnCtx(n);
    return (
      ae(r, {
        code: W.invalid_type,
        expected: ue.bigint,
        received: r.parsedType,
      }),
      Ae
    );
  }
  gte(n, r) {
    return this.setLimit("min", n, !0, pe.toString(r));
  }
  gt(n, r) {
    return this.setLimit("min", n, !1, pe.toString(r));
  }
  lte(n, r) {
    return this.setLimit("max", n, !0, pe.toString(r));
  }
  lt(n, r) {
    return this.setLimit("max", n, !1, pe.toString(r));
  }
  setLimit(n, r, i, o) {
    return new mr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: r, inclusive: i, message: pe.toString(o) },
      ],
    });
  }
  _addCheck(n) {
    return new mr({ ...this._def, checks: [...this._def.checks, n] });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: pe.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: pe.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: pe.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: pe.toString(n),
    });
  }
  multipleOf(n, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: pe.toString(r),
    });
  }
  get minValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n;
  }
}
mr.create = (a) => {
  var n;
  return new mr({
    checks: [],
    typeName: we.ZodBigInt,
    coerce:
      (n = a == null ? void 0 : a.coerce) !== null && n !== void 0 ? n : !1,
    ...De(a),
  });
};
class pl extends Le {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = !!n.data), this._getType(n) !== ue.boolean)
    ) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.boolean,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return Gt(n.data);
  }
}
pl.create = (a) =>
  new pl({
    typeName: we.ZodBoolean,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...De(a),
  });
class Gr extends Le {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = new Date(n.data)),
      this._getType(n) !== ue.date)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ae(u, {
          code: W.invalid_type,
          expected: ue.date,
          received: u.parsedType,
        }),
        Ae
      );
    }
    if (isNaN(n.data.getTime())) {
      const u = this._getOrReturnCtx(n);
      return ae(u, { code: W.invalid_date }), Ae;
    }
    const i = new It();
    let o;
    for (const u of this._def.checks)
      u.kind === "min"
        ? n.data.getTime() < u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ae(o, {
            code: W.too_small,
            message: u.message,
            inclusive: !0,
            exact: !1,
            minimum: u.value,
            type: "date",
          }),
          i.dirty())
        : u.kind === "max"
          ? n.data.getTime() > u.value &&
            ((o = this._getOrReturnCtx(n, o)),
            ae(o, {
              code: W.too_big,
              message: u.message,
              inclusive: !0,
              exact: !1,
              maximum: u.value,
              type: "date",
            }),
            i.dirty())
          : Ve.assertNever(u);
    return { status: i.value, value: new Date(n.data.getTime()) };
  }
  _addCheck(n) {
    return new Gr({ ...this._def, checks: [...this._def.checks, n] });
  }
  min(n, r) {
    return this._addCheck({
      kind: "min",
      value: n.getTime(),
      message: pe.toString(r),
    });
  }
  max(n, r) {
    return this._addCheck({
      kind: "max",
      value: n.getTime(),
      message: pe.toString(r),
    });
  }
  get minDate() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "min" && (n === null || r.value > n) && (n = r.value);
    return n != null ? new Date(n) : null;
  }
  get maxDate() {
    let n = null;
    for (const r of this._def.checks)
      r.kind === "max" && (n === null || r.value < n) && (n = r.value);
    return n != null ? new Date(n) : null;
  }
}
Gr.create = (a) =>
  new Gr({
    checks: [],
    coerce: (a == null ? void 0 : a.coerce) || !1,
    typeName: we.ZodDate,
    ...De(a),
  });
class Sc extends Le {
  _parse(n) {
    if (this._getType(n) !== ue.symbol) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.symbol,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return Gt(n.data);
  }
}
Sc.create = (a) => new Sc({ typeName: we.ZodSymbol, ...De(a) });
class gl extends Le {
  _parse(n) {
    if (this._getType(n) !== ue.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.undefined,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return Gt(n.data);
  }
}
gl.create = (a) => new gl({ typeName: we.ZodUndefined, ...De(a) });
class yl extends Le {
  _parse(n) {
    if (this._getType(n) !== ue.null) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.null,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return Gt(n.data);
  }
}
yl.create = (a) => new yl({ typeName: we.ZodNull, ...De(a) });
class Ys extends Le {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(n) {
    return Gt(n.data);
  }
}
Ys.create = (a) => new Ys({ typeName: we.ZodAny, ...De(a) });
class Zr extends Le {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(n) {
    return Gt(n.data);
  }
}
Zr.create = (a) => new Zr({ typeName: we.ZodUnknown, ...De(a) });
class La extends Le {
  _parse(n) {
    const r = this._getOrReturnCtx(n);
    return (
      ae(r, {
        code: W.invalid_type,
        expected: ue.never,
        received: r.parsedType,
      }),
      Ae
    );
  }
}
La.create = (a) => new La({ typeName: we.ZodNever, ...De(a) });
class Ec extends Le {
  _parse(n) {
    if (this._getType(n) !== ue.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.void,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return Gt(n.data);
  }
}
Ec.create = (a) => new Ec({ typeName: we.ZodVoid, ...De(a) });
class Ln extends Le {
  _parse(n) {
    const { ctx: r, status: i } = this._processInputParams(n),
      o = this._def;
    if (r.parsedType !== ue.array)
      return (
        ae(r, {
          code: W.invalid_type,
          expected: ue.array,
          received: r.parsedType,
        }),
        Ae
      );
    if (o.exactLength !== null) {
      const f = r.data.length > o.exactLength.value,
        h = r.data.length < o.exactLength.value;
      (f || h) &&
        (ae(r, {
          code: f ? W.too_big : W.too_small,
          minimum: h ? o.exactLength.value : void 0,
          maximum: f ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (o.minLength !== null &&
        r.data.length < o.minLength.value &&
        (ae(r, {
          code: W.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        i.dirty()),
      o.maxLength !== null &&
        r.data.length > o.maxLength.value &&
        (ae(r, {
          code: W.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        i.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((f, h) => o.type._parseAsync(new aa(r, f, r.path, h))),
      ).then((f) => It.mergeArray(i, f));
    const u = [...r.data].map((f, h) =>
      o.type._parseSync(new aa(r, f, r.path, h)),
    );
    return It.mergeArray(i, u);
  }
  get element() {
    return this._def.type;
  }
  min(n, r) {
    return new Ln({
      ...this._def,
      minLength: { value: n, message: pe.toString(r) },
    });
  }
  max(n, r) {
    return new Ln({
      ...this._def,
      maxLength: { value: n, message: pe.toString(r) },
    });
  }
  length(n, r) {
    return new Ln({
      ...this._def,
      exactLength: { value: n, message: pe.toString(r) },
    });
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Ln.create = (a, n) =>
  new Ln({
    type: a,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: we.ZodArray,
    ...De(n),
  });
function Ls(a) {
  if (a instanceof it) {
    const n = {};
    for (const r in a.shape) {
      const i = a.shape[r];
      n[r] = ta.create(Ls(i));
    }
    return new it({ ...a._def, shape: () => n });
  } else
    return a instanceof Ln
      ? new Ln({ ...a._def, type: Ls(a.element) })
      : a instanceof ta
        ? ta.create(Ls(a.unwrap()))
        : a instanceof gr
          ? gr.create(Ls(a.unwrap()))
          : a instanceof ra
            ? ra.create(a.items.map((n) => Ls(n)))
            : a;
}
class it extends Le {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const n = this._def.shape(),
      r = Ve.objectKeys(n);
    return (this._cached = { shape: n, keys: r });
  }
  _parse(n) {
    if (this._getType(n) !== ue.object) {
      const m = this._getOrReturnCtx(n);
      return (
        ae(m, {
          code: W.invalid_type,
          expected: ue.object,
          received: m.parsedType,
        }),
        Ae
      );
    }
    const { status: i, ctx: o } = this._processInputParams(n),
      { shape: u, keys: f } = this._getCached(),
      h = [];
    if (
      !(this._def.catchall instanceof La && this._def.unknownKeys === "strip")
    )
      for (const m in o.data) f.includes(m) || h.push(m);
    const g = [];
    for (const m of f) {
      const _ = u[m],
        v = o.data[m];
      g.push({
        key: { status: "valid", value: m },
        value: _._parse(new aa(o, v, o.path, m)),
        alwaysSet: m in o.data,
      });
    }
    if (this._def.catchall instanceof La) {
      const m = this._def.unknownKeys;
      if (m === "passthrough")
        for (const _ of h)
          g.push({
            key: { status: "valid", value: _ },
            value: { status: "valid", value: o.data[_] },
          });
      else if (m === "strict")
        h.length > 0 &&
          (ae(o, { code: W.unrecognized_keys, keys: h }), i.dirty());
      else if (m !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const m = this._def.catchall;
      for (const _ of h) {
        const v = o.data[_];
        g.push({
          key: { status: "valid", value: _ },
          value: m._parse(new aa(o, v, o.path, _)),
          alwaysSet: _ in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const m = [];
            for (const _ of g) {
              const v = await _.key,
                C = await _.value;
              m.push({ key: v, value: C, alwaysSet: _.alwaysSet });
            }
            return m;
          })
          .then((m) => It.mergeObjectSync(i, m))
      : It.mergeObjectSync(i, g);
  }
  get shape() {
    return this._def.shape();
  }
  strict(n) {
    return (
      pe.errToObj,
      new it({
        ...this._def,
        unknownKeys: "strict",
        ...(n !== void 0
          ? {
              errorMap: (r, i) => {
                var o, u, f, h;
                const g =
                  (f =
                    (u = (o = this._def).errorMap) === null || u === void 0
                      ? void 0
                      : u.call(o, r, i).message) !== null && f !== void 0
                    ? f
                    : i.defaultError;
                return r.code === "unrecognized_keys"
                  ? {
                      message:
                        (h = pe.errToObj(n).message) !== null && h !== void 0
                          ? h
                          : g,
                    }
                  : { message: g };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new it({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new it({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(n) {
    return new it({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...n }),
    });
  }
  merge(n) {
    return new it({
      unknownKeys: n._def.unknownKeys,
      catchall: n._def.catchall,
      shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
      typeName: we.ZodObject,
    });
  }
  setKey(n, r) {
    return this.augment({ [n]: r });
  }
  catchall(n) {
    return new it({ ...this._def, catchall: n });
  }
  pick(n) {
    const r = {};
    return (
      Ve.objectKeys(n).forEach((i) => {
        n[i] && this.shape[i] && (r[i] = this.shape[i]);
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  omit(n) {
    const r = {};
    return (
      Ve.objectKeys(this.shape).forEach((i) => {
        n[i] || (r[i] = this.shape[i]);
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  deepPartial() {
    return Ls(this);
  }
  partial(n) {
    const r = {};
    return (
      Ve.objectKeys(this.shape).forEach((i) => {
        const o = this.shape[i];
        n && !n[i] ? (r[i] = o) : (r[i] = o.optional());
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  required(n) {
    const r = {};
    return (
      Ve.objectKeys(this.shape).forEach((i) => {
        if (n && !n[i]) r[i] = this.shape[i];
        else {
          let u = this.shape[i];
          for (; u instanceof ta; ) u = u._def.innerType;
          r[i] = u;
        }
      }),
      new it({ ...this._def, shape: () => r })
    );
  }
  keyof() {
    return Ug(Ve.objectKeys(this.shape));
  }
}
it.create = (a, n) =>
  new it({
    shape: () => a,
    unknownKeys: "strip",
    catchall: La.create(),
    typeName: we.ZodObject,
    ...De(n),
  });
it.strictCreate = (a, n) =>
  new it({
    shape: () => a,
    unknownKeys: "strict",
    catchall: La.create(),
    typeName: we.ZodObject,
    ...De(n),
  });
it.lazycreate = (a, n) =>
  new it({
    shape: a,
    unknownKeys: "strip",
    catchall: La.create(),
    typeName: we.ZodObject,
    ...De(n),
  });
class vl extends Le {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = this._def.options;
    function o(u) {
      for (const h of u) if (h.result.status === "valid") return h.result;
      for (const h of u)
        if (h.result.status === "dirty")
          return r.common.issues.push(...h.ctx.common.issues), h.result;
      const f = u.map((h) => new cn(h.ctx.common.issues));
      return ae(r, { code: W.invalid_union, unionErrors: f }), Ae;
    }
    if (r.common.async)
      return Promise.all(
        i.map(async (u) => {
          const f = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await u._parseAsync({
              data: r.data,
              path: r.path,
              parent: f,
            }),
            ctx: f,
          };
        }),
      ).then(o);
    {
      let u;
      const f = [];
      for (const g of i) {
        const m = { ...r, common: { ...r.common, issues: [] }, parent: null },
          _ = g._parseSync({ data: r.data, path: r.path, parent: m });
        if (_.status === "valid") return _;
        _.status === "dirty" && !u && (u = { result: _, ctx: m }),
          m.common.issues.length && f.push(m.common.issues);
      }
      if (u) return r.common.issues.push(...u.ctx.common.issues), u.result;
      const h = f.map((g) => new cn(g));
      return ae(r, { code: W.invalid_union, unionErrors: h }), Ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
vl.create = (a, n) => new vl({ options: a, typeName: we.ZodUnion, ...De(n) });
const Ea = (a) =>
  a instanceof xl
    ? Ea(a.schema)
    : a instanceof Un
      ? Ea(a.innerType())
      : a instanceof Cl
        ? [a.value]
        : a instanceof pr
          ? a.options
          : a instanceof wl
            ? Ve.objectValues(a.enum)
            : a instanceof Sl
              ? Ea(a._def.innerType)
              : a instanceof gl
                ? [void 0]
                : a instanceof yl
                  ? [null]
                  : a instanceof ta
                    ? [void 0, ...Ea(a.unwrap())]
                    : a instanceof gr
                      ? [null, ...Ea(a.unwrap())]
                      : a instanceof lh || a instanceof Tl
                        ? Ea(a.unwrap())
                        : a instanceof El
                          ? Ea(a._def.innerType)
                          : [];
class Uc extends Le {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    if (r.parsedType !== ue.object)
      return (
        ae(r, {
          code: W.invalid_type,
          expected: ue.object,
          received: r.parsedType,
        }),
        Ae
      );
    const i = this.discriminator,
      o = r.data[i],
      u = this.optionsMap.get(o);
    return u
      ? r.common.async
        ? u._parseAsync({ data: r.data, path: r.path, parent: r })
        : u._parseSync({ data: r.data, path: r.path, parent: r })
      : (ae(r, {
          code: W.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [i],
        }),
        Ae);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(n, r, i) {
    const o = new Map();
    for (const u of r) {
      const f = Ea(u.shape[n]);
      if (!f.length)
        throw new Error(
          `A discriminator value for key \`${n}\` could not be extracted from all schema options`,
        );
      for (const h of f) {
        if (o.has(h))
          throw new Error(
            `Discriminator property ${String(n)} has duplicate value ${String(h)}`,
          );
        o.set(h, u);
      }
    }
    return new Uc({
      typeName: we.ZodDiscriminatedUnion,
      discriminator: n,
      options: r,
      optionsMap: o,
      ...De(i),
    });
  }
}
function kf(a, n) {
  const r = Ta(a),
    i = Ta(n);
  if (a === n) return { valid: !0, data: a };
  if (r === ue.object && i === ue.object) {
    const o = Ve.objectKeys(n),
      u = Ve.objectKeys(a).filter((h) => o.indexOf(h) !== -1),
      f = { ...a, ...n };
    for (const h of u) {
      const g = kf(a[h], n[h]);
      if (!g.valid) return { valid: !1 };
      f[h] = g.data;
    }
    return { valid: !0, data: f };
  } else if (r === ue.array && i === ue.array) {
    if (a.length !== n.length) return { valid: !1 };
    const o = [];
    for (let u = 0; u < a.length; u++) {
      const f = a[u],
        h = n[u],
        g = kf(f, h);
      if (!g.valid) return { valid: !1 };
      o.push(g.data);
    }
    return { valid: !0, data: o };
  } else
    return r === ue.date && i === ue.date && +a == +n
      ? { valid: !0, data: a }
      : { valid: !1 };
}
class bl extends Le {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n),
      o = (u, f) => {
        if (Af(u) || Af(f)) return Ae;
        const h = kf(u.value, f.value);
        return h.valid
          ? ((Nf(u) || Nf(f)) && r.dirty(), { status: r.value, value: h.data })
          : (ae(i, { code: W.invalid_intersection_types }), Ae);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([u, f]) => o(u, f))
      : o(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i }),
        );
  }
}
bl.create = (a, n, r) =>
  new bl({ left: a, right: n, typeName: we.ZodIntersection, ...De(r) });
class ra extends Le {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== ue.array)
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.array,
          received: i.parsedType,
        }),
        Ae
      );
    if (i.data.length < this._def.items.length)
      return (
        ae(i, {
          code: W.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Ae
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ae(i, {
        code: W.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const u = [...i.data]
      .map((f, h) => {
        const g = this._def.items[h] || this._def.rest;
        return g ? g._parse(new aa(i, f, i.path, h)) : null;
      })
      .filter((f) => !!f);
    return i.common.async
      ? Promise.all(u).then((f) => It.mergeArray(r, f))
      : It.mergeArray(r, u);
  }
  get items() {
    return this._def.items;
  }
  rest(n) {
    return new ra({ ...this._def, rest: n });
  }
}
ra.create = (a, n) => {
  if (!Array.isArray(a))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ra({ items: a, typeName: we.ZodTuple, rest: null, ...De(n) });
};
class _l extends Le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== ue.object)
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.object,
          received: i.parsedType,
        }),
        Ae
      );
    const o = [],
      u = this._def.keyType,
      f = this._def.valueType;
    for (const h in i.data)
      o.push({
        key: u._parse(new aa(i, h, i.path, h)),
        value: f._parse(new aa(i, i.data[h], i.path, h)),
        alwaysSet: h in i.data,
      });
    return i.common.async
      ? It.mergeObjectAsync(r, o)
      : It.mergeObjectSync(r, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(n, r, i) {
    return r instanceof Le
      ? new _l({ keyType: n, valueType: r, typeName: we.ZodRecord, ...De(i) })
      : new _l({
          keyType: Dn.create(),
          valueType: n,
          typeName: we.ZodRecord,
          ...De(r),
        });
  }
}
class Tc extends Le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== ue.map)
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.map,
          received: i.parsedType,
        }),
        Ae
      );
    const o = this._def.keyType,
      u = this._def.valueType,
      f = [...i.data.entries()].map(([h, g], m) => ({
        key: o._parse(new aa(i, h, i.path, [m, "key"])),
        value: u._parse(new aa(i, g, i.path, [m, "value"])),
      }));
    if (i.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const g of f) {
          const m = await g.key,
            _ = await g.value;
          if (m.status === "aborted" || _.status === "aborted") return Ae;
          (m.status === "dirty" || _.status === "dirty") && r.dirty(),
            h.set(m.value, _.value);
        }
        return { status: r.value, value: h };
      });
    } else {
      const h = new Map();
      for (const g of f) {
        const m = g.key,
          _ = g.value;
        if (m.status === "aborted" || _.status === "aborted") return Ae;
        (m.status === "dirty" || _.status === "dirty") && r.dirty(),
          h.set(m.value, _.value);
      }
      return { status: r.value, value: h };
    }
  }
}
Tc.create = (a, n, r) =>
  new Tc({ valueType: n, keyType: a, typeName: we.ZodMap, ...De(r) });
class Yr extends Le {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== ue.set)
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.set,
          received: i.parsedType,
        }),
        Ae
      );
    const o = this._def;
    o.minSize !== null &&
      i.data.size < o.minSize.value &&
      (ae(i, {
        code: W.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      r.dirty()),
      o.maxSize !== null &&
        i.data.size > o.maxSize.value &&
        (ae(i, {
          code: W.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        r.dirty());
    const u = this._def.valueType;
    function f(g) {
      const m = new Set();
      for (const _ of g) {
        if (_.status === "aborted") return Ae;
        _.status === "dirty" && r.dirty(), m.add(_.value);
      }
      return { status: r.value, value: m };
    }
    const h = [...i.data.values()].map((g, m) =>
      u._parse(new aa(i, g, i.path, m)),
    );
    return i.common.async ? Promise.all(h).then((g) => f(g)) : f(h);
  }
  min(n, r) {
    return new Yr({
      ...this._def,
      minSize: { value: n, message: pe.toString(r) },
    });
  }
  max(n, r) {
    return new Yr({
      ...this._def,
      maxSize: { value: n, message: pe.toString(r) },
    });
  }
  size(n, r) {
    return this.min(n, r).max(n, r);
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Yr.create = (a, n) =>
  new Yr({
    valueType: a,
    minSize: null,
    maxSize: null,
    typeName: we.ZodSet,
    ...De(n),
  });
class Vs extends Le {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    if (r.parsedType !== ue.function)
      return (
        ae(r, {
          code: W.invalid_type,
          expected: ue.function,
          received: r.parsedType,
        }),
        Ae
      );
    function i(h, g) {
      return Cc({
        data: h,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xc(),
          Gs,
        ].filter((m) => !!m),
        issueData: { code: W.invalid_arguments, argumentsError: g },
      });
    }
    function o(h, g) {
      return Cc({
        data: h,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          xc(),
          Gs,
        ].filter((m) => !!m),
        issueData: { code: W.invalid_return_type, returnTypeError: g },
      });
    }
    const u = { errorMap: r.common.contextualErrorMap },
      f = r.data;
    if (this._def.returns instanceof $s) {
      const h = this;
      return Gt(async function (...g) {
        const m = new cn([]),
          _ = await h._def.args.parseAsync(g, u).catch((R) => {
            throw (m.addIssue(i(g, R)), m);
          }),
          v = await Reflect.apply(f, this, _);
        return await h._def.returns._def.type.parseAsync(v, u).catch((R) => {
          throw (m.addIssue(o(v, R)), m);
        });
      });
    } else {
      const h = this;
      return Gt(function (...g) {
        const m = h._def.args.safeParse(g, u);
        if (!m.success) throw new cn([i(g, m.error)]);
        const _ = Reflect.apply(f, this, m.data),
          v = h._def.returns.safeParse(_, u);
        if (!v.success) throw new cn([o(_, v.error)]);
        return v.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...n) {
    return new Vs({ ...this._def, args: ra.create(n).rest(Zr.create()) });
  }
  returns(n) {
    return new Vs({ ...this._def, returns: n });
  }
  implement(n) {
    return this.parse(n);
  }
  strictImplement(n) {
    return this.parse(n);
  }
  static create(n, r, i) {
    return new Vs({
      args: n || ra.create([]).rest(Zr.create()),
      returns: r || Zr.create(),
      typeName: we.ZodFunction,
      ...De(i),
    });
  }
}
class xl extends Le {
  get schema() {
    return this._def.getter();
  }
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
xl.create = (a, n) => new xl({ getter: a, typeName: we.ZodLazy, ...De(n) });
class Cl extends Le {
  _parse(n) {
    if (n.data !== this._def.value) {
      const r = this._getOrReturnCtx(n);
      return (
        ae(r, {
          received: r.data,
          code: W.invalid_literal,
          expected: this._def.value,
        }),
        Ae
      );
    }
    return { status: "valid", value: n.data };
  }
  get value() {
    return this._def.value;
  }
}
Cl.create = (a, n) => new Cl({ value: a, typeName: we.ZodLiteral, ...De(n) });
function Ug(a, n) {
  return new pr({ values: a, typeName: we.ZodEnum, ...De(n) });
}
class pr extends Le {
  constructor() {
    super(...arguments), al.set(this, void 0);
  }
  _parse(n) {
    if (typeof n.data != "string") {
      const r = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        ae(r, {
          expected: Ve.joinValues(i),
          received: r.parsedType,
          code: W.invalid_type,
        }),
        Ae
      );
    }
    if (
      (wc(this, al) || Dg(this, al, new Set(this._def.values)),
      !wc(this, al).has(n.data))
    ) {
      const r = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        ae(r, { received: r.data, code: W.invalid_enum_value, options: i }), Ae
      );
    }
    return Gt(n.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  get Values() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  get Enum() {
    const n = {};
    for (const r of this._def.values) n[r] = r;
    return n;
  }
  extract(n, r = this._def) {
    return pr.create(n, { ...this._def, ...r });
  }
  exclude(n, r = this._def) {
    return pr.create(
      this.options.filter((i) => !n.includes(i)),
      { ...this._def, ...r },
    );
  }
}
al = new WeakMap();
pr.create = Ug;
class wl extends Le {
  constructor() {
    super(...arguments), rl.set(this, void 0);
  }
  _parse(n) {
    const r = Ve.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(n);
    if (i.parsedType !== ue.string && i.parsedType !== ue.number) {
      const o = Ve.objectValues(r);
      return (
        ae(i, {
          expected: Ve.joinValues(o),
          received: i.parsedType,
          code: W.invalid_type,
        }),
        Ae
      );
    }
    if (
      (wc(this, rl) ||
        Dg(this, rl, new Set(Ve.getValidEnumValues(this._def.values))),
      !wc(this, rl).has(n.data))
    ) {
      const o = Ve.objectValues(r);
      return (
        ae(i, { received: i.data, code: W.invalid_enum_value, options: o }), Ae
      );
    }
    return Gt(n.data);
  }
  get enum() {
    return this._def.values;
  }
}
rl = new WeakMap();
wl.create = (a, n) =>
  new wl({ values: a, typeName: we.ZodNativeEnum, ...De(n) });
class $s extends Le {
  unwrap() {
    return this._def.type;
  }
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    if (r.parsedType !== ue.promise && r.common.async === !1)
      return (
        ae(r, {
          code: W.invalid_type,
          expected: ue.promise,
          received: r.parsedType,
        }),
        Ae
      );
    const i = r.parsedType === ue.promise ? r.data : Promise.resolve(r.data);
    return Gt(
      i.then((o) =>
        this._def.type.parseAsync(o, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        }),
      ),
    );
  }
}
$s.create = (a, n) => new $s({ type: a, typeName: we.ZodPromise, ...De(n) });
class Un extends Le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === we.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n),
      o = this._def.effect || null,
      u = {
        addIssue: (f) => {
          ae(i, f), f.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((u.addIssue = u.addIssue.bind(u)), o.type === "preprocess")) {
      const f = o.transform(i.data, u);
      if (i.common.async)
        return Promise.resolve(f).then(async (h) => {
          if (r.value === "aborted") return Ae;
          const g = await this._def.schema._parseAsync({
            data: h,
            path: i.path,
            parent: i,
          });
          return g.status === "aborted"
            ? Ae
            : g.status === "dirty" || r.value === "dirty"
              ? Us(g.value)
              : g;
        });
      {
        if (r.value === "aborted") return Ae;
        const h = this._def.schema._parseSync({
          data: f,
          path: i.path,
          parent: i,
        });
        return h.status === "aborted"
          ? Ae
          : h.status === "dirty" || r.value === "dirty"
            ? Us(h.value)
            : h;
      }
    }
    if (o.type === "refinement") {
      const f = (h) => {
        const g = o.refinement(h, u);
        if (i.common.async) return Promise.resolve(g);
        if (g instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return h;
      };
      if (i.common.async === !1) {
        const h = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return h.status === "aborted"
          ? Ae
          : (h.status === "dirty" && r.dirty(),
            f(h.value),
            { status: r.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((h) =>
            h.status === "aborted"
              ? Ae
              : (h.status === "dirty" && r.dirty(),
                f(h.value).then(() => ({ status: r.value, value: h.value }))),
          );
    }
    if (o.type === "transform")
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!Pr(f)) return f;
        const h = o.transform(f.value, u);
        if (h instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: r.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            Pr(f)
              ? Promise.resolve(o.transform(f.value, u)).then((h) => ({
                  status: r.value,
                  value: h,
                }))
              : f,
          );
    Ve.assertNever(o);
  }
}
Un.create = (a, n, r) =>
  new Un({ schema: a, typeName: we.ZodEffects, effect: n, ...De(r) });
Un.createWithPreprocess = (a, n, r) =>
  new Un({
    schema: n,
    effect: { type: "preprocess", transform: a },
    typeName: we.ZodEffects,
    ...De(r),
  });
class ta extends Le {
  _parse(n) {
    return this._getType(n) === ue.undefined
      ? Gt(void 0)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ta.create = (a, n) =>
  new ta({ innerType: a, typeName: we.ZodOptional, ...De(n) });
class gr extends Le {
  _parse(n) {
    return this._getType(n) === ue.null
      ? Gt(null)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gr.create = (a, n) =>
  new gr({ innerType: a, typeName: we.ZodNullable, ...De(n) });
class Sl extends Le {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n);
    let i = r.data;
    return (
      r.parsedType === ue.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Sl.create = (a, n) =>
  new Sl({
    innerType: a,
    typeName: we.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...De(n),
  });
class El extends Le {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = { ...r, common: { ...r.common, issues: [] } },
      o = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return ml(o)
      ? o.then((u) => ({
          status: "valid",
          value:
            u.status === "valid"
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new cn(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new cn(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
El.create = (a, n) =>
  new El({
    innerType: a,
    typeName: we.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...De(n),
  });
class Ac extends Le {
  _parse(n) {
    if (this._getType(n) !== ue.nan) {
      const i = this._getOrReturnCtx(n);
      return (
        ae(i, {
          code: W.invalid_type,
          expected: ue.nan,
          received: i.parsedType,
        }),
        Ae
      );
    }
    return { status: "valid", value: n.data };
  }
}
Ac.create = (a) => new Ac({ typeName: we.ZodNaN, ...De(a) });
const L7 = Symbol("zod_brand");
class lh extends Le {
  _parse(n) {
    const { ctx: r } = this._processInputParams(n),
      i = r.data;
    return this._def.type._parse({ data: i, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class Bl extends Le {
  _parse(n) {
    const { status: r, ctx: i } = this._processInputParams(n);
    if (i.common.async)
      return (async () => {
        const u = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return u.status === "aborted"
          ? Ae
          : u.status === "dirty"
            ? (r.dirty(), Us(u.value))
            : this._def.out._parseAsync({
                data: u.value,
                path: i.path,
                parent: i,
              });
      })();
    {
      const o = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return o.status === "aborted"
        ? Ae
        : o.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: o.value })
          : this._def.out._parseSync({
              data: o.value,
              path: i.path,
              parent: i,
            });
    }
  }
  static create(n, r) {
    return new Bl({ in: n, out: r, typeName: we.ZodPipeline });
  }
}
class Tl extends Le {
  _parse(n) {
    const r = this._def.innerType._parse(n),
      i = (o) => (Pr(o) && (o.value = Object.freeze(o.value)), o);
    return ml(r) ? r.then((o) => i(o)) : i(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Tl.create = (a, n) =>
  new Tl({ innerType: a, typeName: we.ZodReadonly, ...De(n) });
function tp(a, n) {
  const r =
    typeof a == "function" ? a(n) : typeof a == "string" ? { message: a } : a;
  return typeof r == "string" ? { message: r } : r;
}
function Bg(a, n = {}, r) {
  return a
    ? Ys.create().superRefine((i, o) => {
        var u, f;
        const h = a(i);
        if (h instanceof Promise)
          return h.then((g) => {
            var m, _;
            if (!g) {
              const v = tp(n, i),
                C =
                  (_ = (m = v.fatal) !== null && m !== void 0 ? m : r) !==
                    null && _ !== void 0
                    ? _
                    : !0;
              o.addIssue({ code: "custom", ...v, fatal: C });
            }
          });
        if (!h) {
          const g = tp(n, i),
            m =
              (f = (u = g.fatal) !== null && u !== void 0 ? u : r) !== null &&
              f !== void 0
                ? f
                : !0;
          o.addIssue({ code: "custom", ...g, fatal: m });
        }
      })
    : Ys.create();
}
const U7 = { object: it.lazycreate };
var we;
(function (a) {
  (a.ZodString = "ZodString"),
    (a.ZodNumber = "ZodNumber"),
    (a.ZodNaN = "ZodNaN"),
    (a.ZodBigInt = "ZodBigInt"),
    (a.ZodBoolean = "ZodBoolean"),
    (a.ZodDate = "ZodDate"),
    (a.ZodSymbol = "ZodSymbol"),
    (a.ZodUndefined = "ZodUndefined"),
    (a.ZodNull = "ZodNull"),
    (a.ZodAny = "ZodAny"),
    (a.ZodUnknown = "ZodUnknown"),
    (a.ZodNever = "ZodNever"),
    (a.ZodVoid = "ZodVoid"),
    (a.ZodArray = "ZodArray"),
    (a.ZodObject = "ZodObject"),
    (a.ZodUnion = "ZodUnion"),
    (a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (a.ZodIntersection = "ZodIntersection"),
    (a.ZodTuple = "ZodTuple"),
    (a.ZodRecord = "ZodRecord"),
    (a.ZodMap = "ZodMap"),
    (a.ZodSet = "ZodSet"),
    (a.ZodFunction = "ZodFunction"),
    (a.ZodLazy = "ZodLazy"),
    (a.ZodLiteral = "ZodLiteral"),
    (a.ZodEnum = "ZodEnum"),
    (a.ZodEffects = "ZodEffects"),
    (a.ZodNativeEnum = "ZodNativeEnum"),
    (a.ZodOptional = "ZodOptional"),
    (a.ZodNullable = "ZodNullable"),
    (a.ZodDefault = "ZodDefault"),
    (a.ZodCatch = "ZodCatch"),
    (a.ZodPromise = "ZodPromise"),
    (a.ZodBranded = "ZodBranded"),
    (a.ZodPipeline = "ZodPipeline"),
    (a.ZodReadonly = "ZodReadonly");
})(we || (we = {}));
const B7 = (a, n = { message: `Input not instance of ${a.name}` }) =>
    Bg((r) => r instanceof a, n),
  zg = Dn.create,
  Ig = hr.create,
  z7 = Ac.create,
  I7 = mr.create,
  Hg = pl.create,
  H7 = Gr.create,
  V7 = Sc.create,
  Z7 = gl.create,
  q7 = yl.create,
  P7 = Ys.create,
  G7 = Zr.create,
  Y7 = La.create,
  $7 = Ec.create,
  F7 = Ln.create,
  X7 = it.create,
  Q7 = it.strictCreate,
  K7 = vl.create,
  J7 = Uc.create,
  W7 = bl.create,
  e9 = ra.create,
  t9 = _l.create,
  n9 = Tc.create,
  a9 = Yr.create,
  r9 = Vs.create,
  s9 = xl.create,
  i9 = Cl.create,
  l9 = pr.create,
  o9 = wl.create,
  c9 = $s.create,
  np = Un.create,
  u9 = ta.create,
  d9 = gr.create,
  f9 = Un.createWithPreprocess,
  h9 = Bl.create,
  m9 = () => zg().optional(),
  p9 = () => Ig().optional(),
  g9 = () => Hg().optional(),
  y9 = {
    string: (a) => Dn.create({ ...a, coerce: !0 }),
    number: (a) => hr.create({ ...a, coerce: !0 }),
    boolean: (a) => pl.create({ ...a, coerce: !0 }),
    bigint: (a) => mr.create({ ...a, coerce: !0 }),
    date: (a) => Gr.create({ ...a, coerce: !0 }),
  },
  v9 = Ae;
var on = Object.freeze({
  __proto__: null,
  defaultErrorMap: Gs,
  setErrorMap: f7,
  getErrorMap: xc,
  makeIssue: Cc,
  EMPTY_PATH: h7,
  addIssueToContext: ae,
  ParseStatus: It,
  INVALID: Ae,
  DIRTY: Us,
  OK: Gt,
  isAborted: Af,
  isDirty: Nf,
  isValid: Pr,
  isAsync: ml,
  get util() {
    return Ve;
  },
  get objectUtil() {
    return Tf;
  },
  ZodParsedType: ue,
  getParsedType: Ta,
  ZodType: Le,
  datetimeRegex: Lg,
  ZodString: Dn,
  ZodNumber: hr,
  ZodBigInt: mr,
  ZodBoolean: pl,
  ZodDate: Gr,
  ZodSymbol: Sc,
  ZodUndefined: gl,
  ZodNull: yl,
  ZodAny: Ys,
  ZodUnknown: Zr,
  ZodNever: La,
  ZodVoid: Ec,
  ZodArray: Ln,
  ZodObject: it,
  ZodUnion: vl,
  ZodDiscriminatedUnion: Uc,
  ZodIntersection: bl,
  ZodTuple: ra,
  ZodRecord: _l,
  ZodMap: Tc,
  ZodSet: Yr,
  ZodFunction: Vs,
  ZodLazy: xl,
  ZodLiteral: Cl,
  ZodEnum: pr,
  ZodNativeEnum: wl,
  ZodPromise: $s,
  ZodEffects: Un,
  ZodTransformer: Un,
  ZodOptional: ta,
  ZodNullable: gr,
  ZodDefault: Sl,
  ZodCatch: El,
  ZodNaN: Ac,
  BRAND: L7,
  ZodBranded: lh,
  ZodPipeline: Bl,
  ZodReadonly: Tl,
  custom: Bg,
  Schema: Le,
  ZodSchema: Le,
  late: U7,
  get ZodFirstPartyTypeKind() {
    return we;
  },
  coerce: y9,
  any: P7,
  array: F7,
  bigint: I7,
  boolean: Hg,
  date: H7,
  discriminatedUnion: J7,
  effect: np,
  enum: l9,
  function: r9,
  instanceof: B7,
  intersection: W7,
  lazy: s9,
  literal: i9,
  map: n9,
  nan: z7,
  nativeEnum: o9,
  never: Y7,
  null: q7,
  nullable: d9,
  number: Ig,
  object: X7,
  oboolean: g9,
  onumber: p9,
  optional: u9,
  ostring: m9,
  pipeline: h9,
  preprocess: f9,
  promise: c9,
  record: t9,
  set: a9,
  strictObject: Q7,
  string: zg,
  symbol: V7,
  transformer: np,
  tuple: e9,
  undefined: Z7,
  union: K7,
  unknown: G7,
  void: $7,
  NEVER: v9,
  ZodIssueCode: W,
  quotelessJson: d7,
  ZodError: cn,
});
const Vg = [
    "Node",
    "React",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Fullstack PHP",
    "Data Science",
    "BBDD",
    "SQL",
  ],
  oc = ["Video", "Cursos", "Blog"],
  b9 = on.object({
    id: on.number(),
    name: on.string(),
    created_at: on.string(),
    updated_at: on.string(),
  }),
  _9 = on.object({
    title: on
      .string()
      .min(10, { message: "El título debe tener al menos 10 caracteres" })
      .max(65, { message: "El título debe tener menos de 65 caracteres" }),
    description: on
      .string()
      .max(120, {
        message: "La descripción debe tener menos de 120 caracteres",
      })
      .optional()
      .or(on.literal("")),
    url: on
      .string()
      .url({ message: "Debe ser una URL válida. Indica el protocolo" })
      .max(300, { message: "La URL debe tener menos de 300 caracteres" }),
    category: on.enum(Vg, {
      message: "Por favor, selecciona una categoría válida.",
    }),
    tags: on
      .array(b9)
      .max(10, { message: "No puedes agregar más de 10 tags." })
      .optional(),
    type: on.enum(oc, {
      message: "Debes seleccionar al menos un tipo de recurso.",
    }),
  });
function uf({
  id: a,
  placeholder: n,
  register: r,
  errors: i,
  className: o,
  maxLength: u,
  onChange: f,
}) {
  return p.jsxs("div", {
    children: [
      p.jsx("input", {
        type: "text",
        id: a,
        placeholder: n,
        maxLength: u,
        className: `w-full px-6 py-4 mb-1 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879] ${o}`,
        ...(r(a),
        {
          onChange: (h) => {
            f == null || f(h);
          },
        }),
      }),
      p.jsx("div", {
        className: "h-6",
        children:
          i && p.jsx("p", { className: "text-red-500 text-xs", children: i }),
      }),
    ],
  });
}
const Wt = "https://ita-wiki-backend-production.up.railway.app/api/",
  zn = {
    resources: { lists: "resources/", post: "v2/resources/" },
    bookmarks: { get: "bookmarks", post: "bookmarks", delete: "bookmarks" },
    roles: {
      lists: "users/user-signedin-as?github_id=",
      post: "roles/",
      put: "roles/",
    },
    likes: { get: "likes", post: "likes", delete: "likes" },
    tags: {
      get: "tags/",
      categoryFrequency: "tags/category-frequency",
      byCategory: "tags/by-category",
    },
    devTools: { roleChange: "feature-flags/role-self-assignment" },
    technicaltests: { create: "/technicaltests/", get: "technicaltests/" },
  },
  x9 = [
    {
      id: 25,
      github_id: 123456,
      title: "Context en 20 minutos",
      description: "holaaaaaa",
      url: "http://localhost/recurso/1",
      created_at: "2 agosto de 2022",
      updated_at: "5 agosto de 2022",
      category: "React",
      theme: "Componentes",
      type: "Video",
      votes: 120,
    },
    {
      id: 26,
      github_id: 123457,
      title: "Redux para principiantes",
      description: "holaaaaaa",
      url: "http://localhost/recurso/1",
      created_at: "1 agosto de 2023",
      updated_at: "3 agosto de 2023",
      category: "React",
      theme: "UseState & UseEffect",
      type: "Cursos",
      votes: 12,
    },
    {
      id: 27,
      github_id: 123458,
      title: "Redux para principiantes",
      description: "holaaaaaa",
      url: "http://localhost/recurso/1",
      created_at: "5 febrero de 2024",
      updated_at: "2 enero de 2024",
      category: "React",
      theme: "UseState & UseEffect",
      type: "Blog",
      votes: 11,
    },
    {
      id: 28,
      github_id: 123459,
      title: "El tio la vara",
      description: "holaaaaaa",
      url: "http://localhost/recurso/1",
      created_at: "25 agosto de 2024",
      updated_at: "10 agosto de 2024",
      category: "React",
      theme: "Renderizado condicional",
      type: "Video",
      votes: 1,
    },
    {
      id: 29,
      github_id: 123460,
      title: "Y volo, y me hiso volar y yo vole de el! jajja",
      description: "holaaaaaa",
      url: "http://localhost/recurso/1",
      created_at: "16 agosto de 2022",
      updated_at: "1 agosto de 2022",
      category: "React",
      theme: "React Router",
      type: "Cursos",
      votes: 23,
    },
    {
      id: 30,
      github_id: 123461,
      title: "Introducción a Node.js",
      description:
        "Aprende a usar Node.js para construir aplicaciones del lado del servidor",
      url: "http://localhost/recurso/2",
      created_at: "10 marzo de 2025",
      updated_at: "15 marzo de 2025",
      category: "Node",
      theme: "Conceptos básicos",
      type: "Cursos",
      votes: 22,
    },
    {
      id: 31,
      github_id: 123462,
      title: "Estructura de Aplicaciones en React",
      description:
        "Cómo estructurar tu proyecto React para aplicaciones escalables",
      url: "http://localhost/recurso/3",
      created_at: "18 marzo de 2022",
      updated_at: "20 marzo de 2022",
      category: "React",
      theme: "Patrones de diseño",
      type: "Blog",
      votes: 21,
    },
    {
      id: 32,
      github_id: 123463,
      title: "Angular: Guía para principiantes",
      description:
        "Una guía completa para comenzar con Angular y sus conceptos fundamentales",
      url: "http://localhost/recurso/4",
      created_at: "12 febrero de 2023",
      updated_at: "14 febrero de 2023",
      category: "Angular",
      theme: "Fundamentos",
      type: "Video",
      votes: 10,
    },
    {
      id: 33,
      github_id: 123464,
      title: "Componentes Avanzados en Angular",
      description: "Aprende sobre directivas, pipes y servicios en Angular",
      url: "http://localhost/recurso/5",
      created_at: "22 marzo de 2024",
      updated_at: "25 marzo de 2024",
      category: "Angular",
      theme: "Componentes",
      type: "Cursos",
      votes: 121,
    },
    {
      id: 34,
      github_id: 123465,
      title: "Manejo de estados en JavaScript",
      description:
        "Cómo gestionar el estado de una aplicación JavaScript usando patrones modernos",
      url: "http://localhost/recurso/6",
      created_at: "3 marzo de 2022",
      updated_at: "5 marzo de 2022",
      category: "JavaScript",
      theme: "State Management",
      type: "Blog",
      votes: 15,
    },
    {
      id: 35,
      github_id: 123466,
      title: "JavaScript para backend con Node.js",
      description:
        "Introducción al uso de JavaScript para construir servidores con Node.js",
      url: "http://localhost/recurso/7",
      created_at: "5 abril de 2022",
      updated_at: "6 abril de 2022",
      category: "JavaScript",
      theme: "Backend",
      type: "Cursos",
      votes: 16,
    },
    {
      id: 36,
      github_id: 123467,
      title: "Spring Boot para Java",
      description: "Aprende a crear aplicaciones Java con Spring Boot",
      url: "http://localhost/recurso/8",
      created_at: "8 mayo de 2022",
      updated_at: "10 mayo de 2022",
      category: "Java",
      theme: "Frameworks",
      type: "Video",
      votes: 17,
    },
    {
      id: 37,
      github_id: 123468,
      title: "Patrones de diseño en Java",
      description: "Explora los patrones de diseño más comunes en Java",
      url: "http://localhost/recurso/9",
      created_at: "25 mayo de 2022",
      updated_at: "30 mayo de 2022",
      category: "Java",
      theme: "Patrones de diseño",
      type: "Blog",
      votes: 18,
    },
    {
      id: 38,
      github_id: 123469,
      title: "Desarrollo Fullstack con PHP y React",
      description: "Desarrolla una aplicación Fullstack utilizando PHP y React",
      url: "http://localhost/recurso/10",
      created_at: "1 junio de 2023",
      updated_at: "5 junio de 2023",
      category: "Fullstack PHP",
      theme: "FullStack",
      type: "Cursos",
      votes: 19,
    },
    {
      id: 39,
      github_id: 123470,
      title: "Conexión de bases de datos en PHP",
      description: "Aprende a conectar bases de datos MySQL con PHP",
      url: "http://localhost/recurso/11",
      created_at: "10 junio de 2022",
      updated_at: "12 junio de 2022",
      category: "Fullstack PHP",
      theme: "Base de datos",
      type: "Blog",
      votes: 19,
    },
    {
      id: 40,
      github_id: 123471,
      title: "Introducción a Data Science",
      description: "Un curso completo sobre las bases de la Ciencia de Datos",
      url: "http://localhost/recurso/12",
      created_at: "15 junio de 2024",
      updated_at: "18 junio de 2024",
      category: "Data Science",
      theme: "Fundamentos",
      type: "Cursos",
      votes: 29,
    },
    {
      id: 41,
      github_id: 123472,
      title: "Manejo de grandes volúmenes de datos",
      description:
        "Estrategias y herramientas para trabajar con grandes volúmenes de datos",
      url: "http://localhost/recurso/13",
      created_at: "25 junio de 2022",
      updated_at: "28 junio de 2022",
      category: "Data Science",
      theme: "Big Data",
      type: "Video",
      votes: 30,
    },
    {
      id: 42,
      github_id: 123473,
      title: "Introducción a bases de datos relacionales",
      description:
        "Aprende los conceptos básicos de las bases de datos relacionales",
      url: "http://localhost/recurso/14",
      created_at: "10 febrero de 2025",
      updated_at: "12 febrero de 2025",
      category: "BBDD",
      theme: "Relacionales",
      type: "Blog",
      votes: 33,
    },
    {
      id: 6,
      github_id: 6729608,
      title: "Optimización de consultas SQL",
      description:
        "Aprende a optimizar consultas SQL para bases de datos grandes",
      url: "http://localhost/recurso/15",
      created_at: "15 julio de 2022",
      updated_at: "18 julio de 2022",
      category: "BBDD",
      theme: "Consultas",
      type: "Cursos",
    },
    {
      id: 4,
      github_id: 6729608,
      title: "Optimización de consultas SQL",
      description:
        "Aprende a optimizar consultas SQL para bases de datos grandes",
      url: "http://localhost/recurso/15",
      created_at: "15 julio de 2022",
      updated_at: "18 julio de 2022",
      category: "BBDD",
      theme: "Consultas",
      type: "Cursos",
    },
    {
      id: 9,
      github_id: 6729608,
      title: "Optimización de consultas SQL",
      description:
        "Aprende a optimizar consultas SQL para bases de datos grandes",
      url: "http://localhost/recurso/15",
      created_at: "15 julio de 2022",
      updated_at: "18 julio de 2022",
      category: "BBDD",
      theme: "Consultas",
      type: "Cursos",
      votes: 34,
    },
  ],
  Zg = { resources: x9 },
  df = Zg.resources.map((a) => ({
    ...a,
    created_at: "2025-02-25 00:00:00",
    updated_at: "2025-02-25 00:00:00",
  })),
  ap = async () => {
    const n = new AbortController().signal;
    try {
      const r = `${Wt}${zn.resources.lists}`,
        i = await fetch(r, { signal: n });
      if (!i.ok) return console.warn(`Error ${i.status}: ${i.statusText}`), df;
      const o = await i.json();
      return Array.isArray(o) && o.length ? o : df;
    } catch (r) {
      if (r instanceof DOMException && r.name === "AbortError")
        return console.warn("Petición cancelada."), df;
      throw (
        (console.error("Error en getResources:", r),
        new Error("Error al obtener los recursos"))
      );
    }
  },
  C9 = async (a) => {
    try {
      const n = await fetch(`${Wt}${zn.resources.post}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a),
      });
      if (!n.ok) {
        const r = await n.json();
        throw new Error(r.message || `Error ${n.status}: ${n.statusText}`);
      }
      return await n.json();
    } catch (n) {
      throw (console.error("Error al crear recurso:", n), n);
    }
  };
var w9 = hp();
const S9 = Df(w9);
function E9(a) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = a)
      : r.appendChild(document.createTextNode(a));
}
const T9 = (a) => {
    switch (a) {
      case "success":
        return k9;
      case "info":
        return O9;
      case "warning":
        return R9;
      case "error":
        return D9;
      default:
        return null;
    }
  },
  A9 = Array(12).fill(0),
  N9 = ({ visible: a, className: n }) =>
    J.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
        "data-visible": a,
      },
      J.createElement(
        "div",
        { className: "sonner-spinner" },
        A9.map((r, i) =>
          J.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`,
          }),
        ),
      ),
    ),
  k9 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  R9 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  O9 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  D9 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  M9 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    J.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    J.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  j9 = () => {
    const [a, n] = J.useState(document.hidden);
    return (
      J.useEffect(() => {
        const r = () => {
          n(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      a
    );
  };
let Rf = 1;
class L9 {
  constructor() {
    (this.subscribe = (n) => (
      this.subscribers.push(n),
      () => {
        const r = this.subscribers.indexOf(n);
        this.subscribers.splice(r, 1);
      }
    )),
      (this.publish = (n) => {
        this.subscribers.forEach((r) => r(n));
      }),
      (this.addToast = (n) => {
        this.publish(n), (this.toasts = [...this.toasts, n]);
      }),
      (this.create = (n) => {
        var r;
        const { message: i, ...o } = n,
          u =
            typeof (n == null ? void 0 : n.id) == "number" ||
            ((r = n.id) == null ? void 0 : r.length) > 0
              ? n.id
              : Rf++,
          f = this.toasts.find((g) => g.id === u),
          h = n.dismissible === void 0 ? !0 : n.dismissible;
        return (
          this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
          f
            ? (this.toasts = this.toasts.map((g) =>
                g.id === u
                  ? (this.publish({ ...g, ...n, id: u, title: i }),
                    { ...g, ...n, id: u, dismissible: h, title: i })
                  : g,
              ))
            : this.addToast({ title: i, ...o, dismissible: h, id: u }),
          u
        );
      }),
      (this.dismiss = (n) => (
        n
          ? (this.dismissedToasts.add(n),
            requestAnimationFrame(() =>
              this.subscribers.forEach((r) => r({ id: n, dismiss: !0 })),
            ))
          : this.toasts.forEach((r) => {
              this.subscribers.forEach((i) => i({ id: r.id, dismiss: !0 }));
            }),
        n
      )),
      (this.message = (n, r) => this.create({ ...r, message: n })),
      (this.error = (n, r) => this.create({ ...r, message: n, type: "error" })),
      (this.success = (n, r) =>
        this.create({ ...r, type: "success", message: n })),
      (this.info = (n, r) => this.create({ ...r, type: "info", message: n })),
      (this.warning = (n, r) =>
        this.create({ ...r, type: "warning", message: n })),
      (this.loading = (n, r) =>
        this.create({ ...r, type: "loading", message: n })),
      (this.promise = (n, r) => {
        if (!r) return;
        let i;
        r.loading !== void 0 &&
          (i = this.create({
            ...r,
            promise: n,
            type: "loading",
            message: r.loading,
            description:
              typeof r.description != "function" ? r.description : void 0,
          }));
        const o = Promise.resolve(n instanceof Function ? n() : n);
        let u = i !== void 0,
          f;
        const h = o
            .then(async (m) => {
              if (((f = ["resolve", m]), J.isValidElement(m)))
                (u = !1), this.create({ id: i, type: "default", message: m });
              else if (B9(m) && !m.ok) {
                u = !1;
                const v =
                    typeof r.error == "function"
                      ? await r.error(`HTTP error! status: ${m.status}`)
                      : r.error,
                  C =
                    typeof r.description == "function"
                      ? await r.description(`HTTP error! status: ${m.status}`)
                      : r.description,
                  A =
                    typeof v == "object" && !J.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: i, type: "error", description: C, ...A });
              } else if (m instanceof Error) {
                u = !1;
                const v =
                    typeof r.error == "function" ? await r.error(m) : r.error,
                  C =
                    typeof r.description == "function"
                      ? await r.description(m)
                      : r.description,
                  A =
                    typeof v == "object" && !J.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: i, type: "error", description: C, ...A });
              } else if (r.success !== void 0) {
                u = !1;
                const v =
                    typeof r.success == "function"
                      ? await r.success(m)
                      : r.success,
                  C =
                    typeof r.description == "function"
                      ? await r.description(m)
                      : r.description,
                  A =
                    typeof v == "object" && !J.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: i, type: "success", description: C, ...A });
              }
            })
            .catch(async (m) => {
              if (((f = ["reject", m]), r.error !== void 0)) {
                u = !1;
                const _ =
                    typeof r.error == "function" ? await r.error(m) : r.error,
                  v =
                    typeof r.description == "function"
                      ? await r.description(m)
                      : r.description,
                  R =
                    typeof _ == "object" && !J.isValidElement(_)
                      ? _
                      : { message: _ };
                this.create({ id: i, type: "error", description: v, ...R });
              }
            })
            .finally(() => {
              u && (this.dismiss(i), (i = void 0)),
                r.finally == null || r.finally.call(r);
            }),
          g = () =>
            new Promise((m, _) =>
              h.then(() => (f[0] === "reject" ? _(f[1]) : m(f[1]))).catch(_),
            );
        return typeof i != "string" && typeof i != "number"
          ? { unwrap: g }
          : Object.assign(i, { unwrap: g });
      }),
      (this.custom = (n, r) => {
        const i = (r == null ? void 0 : r.id) || Rf++;
        return this.create({ jsx: n(i), id: i, ...r }), i;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const Kt = new L9(),
  U9 = (a, n) => {
    const r = (n == null ? void 0 : n.id) || Rf++;
    return Kt.addToast({ title: a, ...n, id: r }), r;
  },
  B9 = (a) =>
    a &&
    typeof a == "object" &&
    "ok" in a &&
    typeof a.ok == "boolean" &&
    "status" in a &&
    typeof a.status == "number",
  z9 = U9,
  I9 = () => Kt.toasts,
  H9 = () => Kt.getActiveToasts(),
  Fs = Object.assign(
    z9,
    {
      success: Kt.success,
      info: Kt.info,
      warning: Kt.warning,
      error: Kt.error,
      custom: Kt.custom,
      message: Kt.message,
      promise: Kt.promise,
      dismiss: Kt.dismiss,
      loading: Kt.loading,
    },
    { getHistory: I9, getToasts: H9 },
  );
E9(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Wo(a) {
  return a.label !== void 0;
}
const V9 = 3,
  Z9 = "24px",
  q9 = "16px",
  rp = 4e3,
  P9 = 356,
  G9 = 14,
  Y9 = 45,
  $9 = 200;
function Xn(...a) {
  return a.filter(Boolean).join(" ");
}
function F9(a) {
  const [n, r] = a.split("-"),
    i = [];
  return n && i.push(n), r && i.push(r), i;
}
const X9 = (a) => {
  var n, r, i, o, u, f, h, g, m;
  const {
      invert: _,
      toast: v,
      unstyled: C,
      interacting: R,
      setHeights: A,
      visibleToasts: G,
      heights: H,
      index: B,
      toasts: I,
      expanded: V,
      removeToast: te,
      defaultRichColors: U,
      closeButton: ne,
      style: $,
      cancelButtonStyle: me,
      actionButtonStyle: ve,
      className: Re = "",
      descriptionClassName: oe = "",
      duration: re,
      position: ge,
      gap: Ce,
      expandByDefault: Se,
      classNames: k,
      icons: Q,
      closeButtonAriaLabel: ce = "Close toast",
    } = a,
    [Ee, E] = J.useState(null),
    [z, K] = J.useState(null),
    [F, de] = J.useState(!1),
    [ke, le] = J.useState(!1),
    [nt, je] = J.useState(!1),
    [lt, Ht] = J.useState(!1),
    [dn, Sn] = J.useState(!1),
    [We, ot] = J.useState(0),
    [In, sa] = J.useState(0),
    Ct = J.useRef(v.duration || re || rp),
    Fr = J.useRef(null),
    Yt = J.useRef(null),
    ti = B === 0,
    ia = B + 1 <= G,
    S = v.type,
    M = v.dismissible !== !1,
    Z = v.className || "",
    ie = v.descriptionClassName || "",
    ee = J.useMemo(
      () => H.findIndex((Oe) => Oe.toastId === v.id) || 0,
      [H, v.id],
    ),
    X = J.useMemo(() => {
      var Oe;
      return (Oe = v.closeButton) != null ? Oe : ne;
    }, [v.closeButton, ne]),
    se = J.useMemo(() => v.duration || re || rp, [v.duration, re]),
    _e = J.useRef(0),
    Pe = J.useRef(0),
    dt = J.useRef(0),
    Hn = J.useRef(null),
    [Vn, Zn] = ge.split("-"),
    fn = J.useMemo(
      () => H.reduce((Oe, ft, vt) => (vt >= ee ? Oe : Oe + ft.height), 0),
      [H, ee],
    ),
    qn = j9(),
    la = v.invert || _,
    Ba = S === "loading";
  (Pe.current = J.useMemo(() => ee * Ce + fn, [ee, fn])),
    J.useEffect(() => {
      Ct.current = se;
    }, [se]),
    J.useEffect(() => {
      de(!0);
    }, []),
    J.useEffect(() => {
      const Oe = Yt.current;
      if (Oe) {
        const ft = Oe.getBoundingClientRect().height;
        return (
          sa(ft),
          A((vt) => [
            { toastId: v.id, height: ft, position: v.position },
            ...vt,
          ]),
          () => A((vt) => vt.filter((Dt) => Dt.toastId !== v.id))
        );
      }
    }, [A, v.id]),
    J.useLayoutEffect(() => {
      if (!F) return;
      const Oe = Yt.current,
        ft = Oe.style.height;
      Oe.style.height = "auto";
      const vt = Oe.getBoundingClientRect().height;
      (Oe.style.height = ft),
        sa(vt),
        A((Dt) =>
          Dt.find((wt) => wt.toastId === v.id)
            ? Dt.map((wt) => (wt.toastId === v.id ? { ...wt, height: vt } : wt))
            : [{ toastId: v.id, height: vt, position: v.position }, ...Dt],
        );
    }, [F, v.title, v.description, A, v.id]);
  const En = J.useCallback(() => {
    le(!0),
      ot(Pe.current),
      A((Oe) => Oe.filter((ft) => ft.toastId !== v.id)),
      setTimeout(() => {
        te(v);
      }, $9);
  }, [v, te, A, Pe]);
  J.useEffect(() => {
    if (
      (v.promise && S === "loading") ||
      v.duration === 1 / 0 ||
      v.type === "loading"
    )
      return;
    let Oe;
    return (
      V || R || qn
        ? (() => {
            if (dt.current < _e.current) {
              const Dt = new Date().getTime() - _e.current;
              Ct.current = Ct.current - Dt;
            }
            dt.current = new Date().getTime();
          })()
        : (() => {
            Ct.current !== 1 / 0 &&
              ((_e.current = new Date().getTime()),
              (Oe = setTimeout(() => {
                v.onAutoClose == null || v.onAutoClose.call(v, v), En();
              }, Ct.current)));
          })(),
      () => clearTimeout(Oe)
    );
  }, [V, R, v, S, qn, En]),
    J.useEffect(() => {
      v.delete && En();
    }, [En, v.delete]);
  function zl() {
    var Oe;
    if (Q != null && Q.loading) {
      var ft;
      return J.createElement(
        "div",
        {
          className: Xn(
            k == null ? void 0 : k.loader,
            v == null || (ft = v.classNames) == null ? void 0 : ft.loader,
            "sonner-loader",
          ),
          "data-visible": S === "loading",
        },
        Q.loading,
      );
    }
    return J.createElement(N9, {
      className: Xn(
        k == null ? void 0 : k.loader,
        v == null || (Oe = v.classNames) == null ? void 0 : Oe.loader,
      ),
      visible: S === "loading",
    });
  }
  const ni = v.icon || (Q == null ? void 0 : Q[S]) || T9(S);
  var za, Il;
  return J.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Yt,
      className: Xn(
        Re,
        Z,
        k == null ? void 0 : k.toast,
        v == null || (n = v.classNames) == null ? void 0 : n.toast,
        k == null ? void 0 : k.default,
        k == null ? void 0 : k[S],
        v == null || (r = v.classNames) == null ? void 0 : r[S],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (za = v.richColors) != null ? za : U,
      "data-styled": !(v.jsx || v.unstyled || C),
      "data-mounted": F,
      "data-promise": !!v.promise,
      "data-swiped": dn,
      "data-removed": ke,
      "data-visible": ia,
      "data-y-position": Vn,
      "data-x-position": Zn,
      "data-index": B,
      "data-front": ti,
      "data-swiping": nt,
      "data-dismissible": M,
      "data-type": S,
      "data-invert": la,
      "data-swipe-out": lt,
      "data-swipe-direction": z,
      "data-expanded": !!(V || (Se && F)),
      style: {
        "--index": B,
        "--toasts-before": B,
        "--z-index": I.length - B,
        "--offset": `${ke ? We : Pe.current}px`,
        "--initial-height": Se ? "auto" : `${In}px`,
        ...$,
        ...v.style,
      },
      onDragEnd: () => {
        je(!1), E(null), (Hn.current = null);
      },
      onPointerDown: (Oe) => {
        Ba ||
          !M ||
          ((Fr.current = new Date()),
          ot(Pe.current),
          Oe.target.setPointerCapture(Oe.pointerId),
          Oe.target.tagName !== "BUTTON" &&
            (je(!0), (Hn.current = { x: Oe.clientX, y: Oe.clientY })));
      },
      onPointerUp: () => {
        var Oe, ft, vt;
        if (lt || !M) return;
        Hn.current = null;
        const Dt = Number(
            ((Oe = Yt.current) == null
              ? void 0
              : Oe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          br = Number(
            ((ft = Yt.current) == null
              ? void 0
              : ft.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          wt =
            new Date().getTime() -
            ((vt = Fr.current) == null ? void 0 : vt.getTime()),
          ht = Ee === "x" ? Dt : br,
          mt = Math.abs(ht) / wt;
        if (Math.abs(ht) >= Y9 || mt > 0.11) {
          ot(Pe.current),
            v.onDismiss == null || v.onDismiss.call(v, v),
            K(
              Ee === "x" ? (Dt > 0 ? "right" : "left") : br > 0 ? "down" : "up",
            ),
            En(),
            Ht(!0);
          return;
        } else {
          var et, At;
          (et = Yt.current) == null ||
            et.style.setProperty("--swipe-amount-x", "0px"),
            (At = Yt.current) == null ||
              At.style.setProperty("--swipe-amount-y", "0px");
        }
        Sn(!1), je(!1), E(null);
      },
      onPointerMove: (Oe) => {
        var ft, vt, Dt;
        if (
          !Hn.current ||
          !M ||
          ((ft = window.getSelection()) == null
            ? void 0
            : ft.toString().length) > 0
        )
          return;
        const wt = Oe.clientY - Hn.current.y,
          ht = Oe.clientX - Hn.current.x;
        var mt;
        const et = (mt = a.swipeDirections) != null ? mt : F9(ge);
        !Ee &&
          (Math.abs(ht) > 1 || Math.abs(wt) > 1) &&
          E(Math.abs(ht) > Math.abs(wt) ? "x" : "y");
        let At = { x: 0, y: 0 };
        const Xr = (oa) => 1 / (1.5 + Math.abs(oa) / 20);
        if (Ee === "y") {
          if (et.includes("top") || et.includes("bottom"))
            if (
              (et.includes("top") && wt < 0) ||
              (et.includes("bottom") && wt > 0)
            )
              At.y = wt;
            else {
              const oa = wt * Xr(wt);
              At.y = Math.abs(oa) < Math.abs(wt) ? oa : wt;
            }
        } else if (Ee === "x" && (et.includes("left") || et.includes("right")))
          if (
            (et.includes("left") && ht < 0) ||
            (et.includes("right") && ht > 0)
          )
            At.x = ht;
          else {
            const oa = ht * Xr(ht);
            At.x = Math.abs(oa) < Math.abs(ht) ? oa : ht;
          }
        (Math.abs(At.x) > 0 || Math.abs(At.y) > 0) && Sn(!0),
          (vt = Yt.current) == null ||
            vt.style.setProperty("--swipe-amount-x", `${At.x}px`),
          (Dt = Yt.current) == null ||
            Dt.style.setProperty("--swipe-amount-y", `${At.y}px`);
      },
    },
    X && !v.jsx && S !== "loading"
      ? J.createElement(
          "button",
          {
            "aria-label": ce,
            "data-disabled": Ba,
            "data-close-button": !0,
            onClick:
              Ba || !M
                ? () => {}
                : () => {
                    En(), v.onDismiss == null || v.onDismiss.call(v, v);
                  },
            className: Xn(
              k == null ? void 0 : k.closeButton,
              v == null || (i = v.classNames) == null ? void 0 : i.closeButton,
            ),
          },
          (Il = Q == null ? void 0 : Q.close) != null ? Il : M9,
        )
      : null,
    (S || v.icon || v.promise) &&
      v.icon !== null &&
      ((Q == null ? void 0 : Q[S]) !== null || v.icon)
      ? J.createElement(
          "div",
          {
            "data-icon": "",
            className: Xn(
              k == null ? void 0 : k.icon,
              v == null || (o = v.classNames) == null ? void 0 : o.icon,
            ),
          },
          v.promise || (v.type === "loading" && !v.icon)
            ? v.icon || zl()
            : null,
          v.type !== "loading" ? ni : null,
        )
      : null,
    J.createElement(
      "div",
      {
        "data-content": "",
        className: Xn(
          k == null ? void 0 : k.content,
          v == null || (u = v.classNames) == null ? void 0 : u.content,
        ),
      },
      J.createElement(
        "div",
        {
          "data-title": "",
          className: Xn(
            k == null ? void 0 : k.title,
            v == null || (f = v.classNames) == null ? void 0 : f.title,
          ),
        },
        v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title,
      ),
      v.description
        ? J.createElement(
            "div",
            {
              "data-description": "",
              className: Xn(
                oe,
                ie,
                k == null ? void 0 : k.description,
                v == null || (h = v.classNames) == null
                  ? void 0
                  : h.description,
              ),
            },
            typeof v.description == "function"
              ? v.description()
              : v.description,
          )
        : null,
    ),
    J.isValidElement(v.cancel)
      ? v.cancel
      : v.cancel && Wo(v.cancel)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: v.cancelButtonStyle || me,
              onClick: (Oe) => {
                Wo(v.cancel) &&
                  M &&
                  (v.cancel.onClick == null ||
                    v.cancel.onClick.call(v.cancel, Oe),
                  En());
              },
              className: Xn(
                k == null ? void 0 : k.cancelButton,
                v == null || (g = v.classNames) == null
                  ? void 0
                  : g.cancelButton,
              ),
            },
            v.cancel.label,
          )
        : null,
    J.isValidElement(v.action)
      ? v.action
      : v.action && Wo(v.action)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: v.actionButtonStyle || ve,
              onClick: (Oe) => {
                Wo(v.action) &&
                  (v.action.onClick == null ||
                    v.action.onClick.call(v.action, Oe),
                  !Oe.defaultPrevented && En());
              },
              className: Xn(
                k == null ? void 0 : k.actionButton,
                v == null || (m = v.classNames) == null
                  ? void 0
                  : m.actionButton,
              ),
            },
            v.action.label,
          )
        : null,
  );
};
function sp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const a = document.documentElement.getAttribute("dir");
  return a === "auto" || !a
    ? window.getComputedStyle(document.documentElement).direction
    : a;
}
function Q9(a, n) {
  const r = {};
  return (
    [a, n].forEach((i, o) => {
      const u = o === 1,
        f = u ? "--mobile-offset" : "--offset",
        h = u ? q9 : Z9;
      function g(m) {
        ["top", "right", "bottom", "left"].forEach((_) => {
          r[`${f}-${_}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof i == "number" || typeof i == "string"
        ? g(i)
        : typeof i == "object"
          ? ["top", "right", "bottom", "left"].forEach((m) => {
              i[m] === void 0
                ? (r[`${f}-${m}`] = h)
                : (r[`${f}-${m}`] =
                    typeof i[m] == "number" ? `${i[m]}px` : i[m]);
            })
          : g(h);
    }),
    r
  );
}
const ip = J.forwardRef(function (n, r) {
    const {
        invert: i,
        position: o = "bottom-right",
        hotkey: u = ["altKey", "KeyT"],
        expand: f,
        closeButton: h,
        className: g,
        offset: m,
        mobileOffset: _,
        theme: v = "light",
        richColors: C,
        duration: R,
        style: A,
        visibleToasts: G = V9,
        toastOptions: H,
        dir: B = sp(),
        gap: I = G9,
        icons: V,
        containerAriaLabel: te = "Notifications",
      } = n,
      [U, ne] = J.useState([]),
      $ = J.useMemo(
        () =>
          Array.from(
            new Set(
              [o].concat(U.filter((z) => z.position).map((z) => z.position)),
            ),
          ),
        [U, o],
      ),
      [me, ve] = J.useState([]),
      [Re, oe] = J.useState(!1),
      [re, ge] = J.useState(!1),
      [Ce, Se] = J.useState(
        v !== "system"
          ? v
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      k = J.useRef(null),
      Q = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      ce = J.useRef(null),
      Ee = J.useRef(!1),
      E = J.useCallback((z) => {
        ne((K) => {
          var F;
          return (
            ((F = K.find((de) => de.id === z.id)) != null && F.delete) ||
              Kt.dismiss(z.id),
            K.filter(({ id: de }) => de !== z.id)
          );
        });
      }, []);
    return (
      J.useEffect(
        () =>
          Kt.subscribe((z) => {
            if (z.dismiss) {
              requestAnimationFrame(() => {
                ne((K) =>
                  K.map((F) => (F.id === z.id ? { ...F, delete: !0 } : F)),
                );
              });
              return;
            }
            setTimeout(() => {
              S9.flushSync(() => {
                ne((K) => {
                  const F = K.findIndex((de) => de.id === z.id);
                  return F !== -1
                    ? [...K.slice(0, F), { ...K[F], ...z }, ...K.slice(F + 1)]
                    : [z, ...K];
                });
              });
            });
          }),
        [U],
      ),
      J.useEffect(() => {
        if (v !== "system") {
          Se(v);
          return;
        }
        if (
          (v === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? Se("dark")
              : Se("light")),
          typeof window > "u")
        )
          return;
        const z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          z.addEventListener("change", ({ matches: K }) => {
            Se(K ? "dark" : "light");
          });
        } catch {
          z.addListener(({ matches: F }) => {
            try {
              Se(F ? "dark" : "light");
            } catch (de) {
              console.error(de);
            }
          });
        }
      }, [v]),
      J.useEffect(() => {
        U.length <= 1 && oe(!1);
      }, [U]),
      J.useEffect(() => {
        const z = (K) => {
          var F;
          if (u.every((le) => K[le] || K.code === le)) {
            var ke;
            oe(!0), (ke = k.current) == null || ke.focus();
          }
          K.code === "Escape" &&
            (document.activeElement === k.current ||
              ((F = k.current) != null &&
                F.contains(document.activeElement))) &&
            oe(!1);
        };
        return (
          document.addEventListener("keydown", z),
          () => document.removeEventListener("keydown", z)
        );
      }, [u]),
      J.useEffect(() => {
        if (k.current)
          return () => {
            ce.current &&
              (ce.current.focus({ preventScroll: !0 }),
              (ce.current = null),
              (Ee.current = !1));
          };
      }, [k.current]),
      J.createElement(
        "section",
        {
          ref: r,
          "aria-label": `${te} ${Q}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        $.map((z, K) => {
          var F;
          const [de, ke] = z.split("-");
          return U.length
            ? J.createElement(
                "ol",
                {
                  key: z,
                  dir: B === "auto" ? sp() : B,
                  tabIndex: -1,
                  ref: k,
                  className: g,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": Ce,
                  "data-y-position": de,
                  "data-lifted": Re && U.length > 1 && !f,
                  "data-x-position": ke,
                  style: {
                    "--front-toast-height": `${((F = me[0]) == null ? void 0 : F.height) || 0}px`,
                    "--width": `${P9}px`,
                    "--gap": `${I}px`,
                    ...A,
                    ...Q9(m, _),
                  },
                  onBlur: (le) => {
                    Ee.current &&
                      !le.currentTarget.contains(le.relatedTarget) &&
                      ((Ee.current = !1),
                      ce.current &&
                        (ce.current.focus({ preventScroll: !0 }),
                        (ce.current = null)));
                  },
                  onFocus: (le) => {
                    (le.target instanceof HTMLElement &&
                      le.target.dataset.dismissible === "false") ||
                      Ee.current ||
                      ((Ee.current = !0), (ce.current = le.relatedTarget));
                  },
                  onMouseEnter: () => oe(!0),
                  onMouseMove: () => oe(!0),
                  onMouseLeave: () => {
                    re || oe(!1);
                  },
                  onDragEnd: () => oe(!1),
                  onPointerDown: (le) => {
                    (le.target instanceof HTMLElement &&
                      le.target.dataset.dismissible === "false") ||
                      ge(!0);
                  },
                  onPointerUp: () => ge(!1),
                },
                U.filter(
                  (le) => (!le.position && K === 0) || le.position === z,
                ).map((le, nt) => {
                  var je, lt;
                  return J.createElement(X9, {
                    key: le.id,
                    icons: V,
                    index: nt,
                    toast: le,
                    defaultRichColors: C,
                    duration:
                      (je = H == null ? void 0 : H.duration) != null ? je : R,
                    className: H == null ? void 0 : H.className,
                    descriptionClassName:
                      H == null ? void 0 : H.descriptionClassName,
                    invert: i,
                    visibleToasts: G,
                    closeButton:
                      (lt = H == null ? void 0 : H.closeButton) != null
                        ? lt
                        : h,
                    interacting: re,
                    position: z,
                    style: H == null ? void 0 : H.style,
                    unstyled: H == null ? void 0 : H.unstyled,
                    classNames: H == null ? void 0 : H.classNames,
                    cancelButtonStyle: H == null ? void 0 : H.cancelButtonStyle,
                    actionButtonStyle: H == null ? void 0 : H.actionButtonStyle,
                    closeButtonAriaLabel:
                      H == null ? void 0 : H.closeButtonAriaLabel,
                    removeToast: E,
                    toasts: U.filter((Ht) => Ht.position == le.position),
                    heights: me.filter((Ht) => Ht.position == le.position),
                    setHeights: ve,
                    expandByDefault: f,
                    gap: I,
                    expanded: Re,
                    swipeDirections: n.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  K9 = () => {
    const { user: a, setUser: n } = Jt(),
      [r, i] = x.useState(null),
      o = async () => {
        try {
          const m = await vg();
          n(m), await h();
        } catch (m) {
          m instanceof Error ? i(m.message) : i("An unknown error occurred.");
        }
      },
      u = () => {
        n(null), i(null);
      },
      f = (m) => {
        n(m);
      },
      h = async () => {
        if (a)
          try {
            const m = await ei(a.id),
              _ = { ...a, role: m };
            n(_);
          } catch (m) {
            throw new Error(m);
          }
      };
    return {
      user: a,
      isAuthenticated: !!a,
      saveUser: f,
      signIn: o,
      signOut: u,
      error: r,
      setError: i,
      handleSetRole: h,
    };
  },
  lp = (a) =>
    a
      .replace(/-/g, " ")
      .split(" ")
      .map((r) => r.charAt(0).toUpperCase() + r.slice(1))
      .join(" "),
  J9 = async () => {
    const n = new AbortController().signal,
      r = `${Wt}${zn.tags.get}`;
    try {
      const i = await fetch(r, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        signal: n,
      });
      return i.ok ? await i.json() : [];
    } catch (i) {
      return console.error("Error fetching tags:", i), [];
    }
  },
  W9 = async () => {
    const a = `${Wt}${zn.tags.byCategory}`,
      n = await fetch(a);
    if (!n.ok) throw new Error("Failed to fetch tags by category");
    return await n.json();
  },
  qg = x.createContext({
    tags: [],
    tagsByCategory: {},
    getTagsByCategory: () => [],
    refreshTags: async () => {},
    getTagNameById: () => {},
  }),
  Pg = () => x.useContext(qg),
  e_ = ({ children: a }) => {
    const [n, r] = x.useState([]),
      [i, o] = x.useState({}),
      u = async () => {
        try {
          const [m, _] = await Promise.all([J9(), W9()]),
            v = m.sort((C, R) =>
              C.name.localeCompare(R.name, "es", { sensitivity: "base" }),
            );
          r(v), o(_);
        } catch (m) {
          console.error("Error fetching tags:", m);
        }
      };
    x.useEffect(() => {
      u();
    }, []);
    const f = x.useMemo(() => {
        const m = new Map();
        return n.forEach((_) => m.set(_.id, _.name)), m;
      }, [n]),
      h = (m) => f.get(m),
      g = (m) => (!m || !i[m] ? [] : n.filter((_) => i[m].includes(_.id)));
    return p.jsx(qg.Provider, {
      value: {
        tags: n,
        tagsByCategory: i,
        getTagsByCategory: g,
        refreshTags: u,
        getTagNameById: h,
      },
      children: a,
    });
  },
  t_ = ({ selectedTags: a, setselectedTags: n, selectedCategory: r }) => {
    const [i, o] = x.useState(""),
      [u, f] = x.useState([]),
      h = x.useRef(null),
      [g, m] = x.useState(!1),
      [_, v] = x.useState(!1),
      { tags: C, getTagsByCategory: R } = Pg();
    x.useEffect(() => {
      const U = R(r);
      n([]), o(""), f(U);
    }, [r]);
    const A = r ? R(r) : C;
    x.useEffect(() => {
      const U = (ne) => {
        h.current && !h.current.contains(ne.target) && v(!1);
      };
      return (
        document.addEventListener("mousedown", U),
        () => {
          document.removeEventListener("mousedown", U);
        }
      );
    }, []);
    const G = (A == null ? void 0 : A.map((U) => U.name)) || [],
      H = (U) => {
        const ne = U.target.value;
        o(ne);
        const $ = ne.toLowerCase(),
          me = A.filter((ve) => !a.some((Re) => Re.id === ve.id));
        if ($) {
          const ve = me.filter((Re) => Re.name.toLowerCase().includes($));
          f(ve);
        } else f(me);
        v(!0);
      },
      B = () => {
        const U = A.filter((ne) => !a.some(($) => $.id === ne.id));
        f(U), v(!0);
      },
      I = (U) => {
        a.includes(U) || n([...a, U]), o(""), f([]);
      },
      V = (U) => {
        if (U.key === "Enter" && i.trim() !== "") {
          const ne = i.trim();
          if (G.includes(ne)) {
            const $ = A == null ? void 0 : A.find((me) => me.name === ne);
            $ && !a.includes($) && (n([...a, $]), o(""), f([]));
          } else console.error("El valor ingresado no es válido.");
        }
      },
      te = (U) => {
        a.includes(U) && n(a.filter((ne) => ne.id !== U.id));
      };
    return p.jsxs("div", {
      ref: h,
      className: "w-full max-w-[482px]",
      children: [
        p.jsx("p", {
          className: "font-medium mb-2 text-sm text-gray-800",
          children: "Tags",
        }),
        p.jsxs("div", {
          className: `p-2 border rounded-md flex flex-wrap gap-2 ${g ? "border-[#B91879]" : "border-gray-200"}`,
          children: [
            a &&
              a.length > 0 &&
              a.map((U) =>
                p.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center bg-[#F6F6F6] font-medium px-3 py-2 rounded-md mb-2 text-sm border border-[#828282]",
                    children: [
                      p.jsx("span", { children: lp(U.name) }),
                      p.jsx("button", {
                        onClick: () => te(U),
                        className: "ml-2 text-black hover:text-gray-700 ",
                        children: "✕",
                      }),
                    ],
                  },
                  U.id,
                ),
              ),
            p.jsx("input", {
              type: "text",
              id: "tags",
              value: i,
              onChange: H,
              onKeyDown: V,
              onFocus: () => {
                m(!0), B();
              },
              onBlur: () => {
                m(!1);
              },
              placeholder: "Escribe un tag...",
              className:
                "w-full border-none outline-none bg-transparent px-2 py-1",
            }),
          ],
        }),
        _ &&
          p.jsx("ul", {
            className:
              "bg-white border border-[#DEDEDE] rounded-md shadow-md max-h-48 overflow-y-auto",
            children: u.map((U) =>
              p.jsx(
                "li",
                {
                  className:
                    "cursor-pointer p-2 hover:bg-[#B91879] hover:text-white",
                  onClick: () => I(U),
                  children: lp(U.name),
                },
                U.id,
              ),
            ),
          }),
      ],
    });
  },
  n_ =
    "data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.76724%201.5431C7.06719%201.25744%207.07877%200.782706%206.7931%200.482759C6.50744%200.182811%206.03271%200.171232%205.73276%200.456897L6.76724%201.5431ZM0.482759%205.4569C0.182811%205.74256%200.171232%206.21729%200.456897%206.51724C0.742561%206.81719%201.21729%206.82877%201.51724%206.5431L0.482759%205.4569ZM1.51724%205.4569C1.21729%205.17123%200.742561%205.18281%200.456897%205.48276C0.171232%205.78271%200.182811%206.25744%200.482759%206.5431L1.51724%205.4569ZM5.73276%2011.5431C6.03271%2011.8288%206.50744%2011.8172%206.7931%2011.5172C7.07877%2011.2173%207.06719%2010.7426%206.76724%2010.4569L5.73276%2011.5431ZM1%205.25C0.585786%205.25%200.25%205.58579%200.25%206C0.25%206.41421%200.585786%206.75%201%206.75V5.25ZM15%206.75C15.4142%206.75%2015.75%206.41421%2015.75%206C15.75%205.58579%2015.4142%205.25%2015%205.25V6.75ZM6.25%201L5.73276%200.456897L0.482759%205.4569L1%206L1.51724%206.5431L6.76724%201.5431L6.25%201ZM1%206L0.482759%206.5431L5.73276%2011.5431L6.25%2011L6.76724%2010.4569L1.51724%205.4569L1%206ZM1%206V6.75H15V6V5.25H1V6Z'%20fill='%23BA007C'/%3e%3c/svg%3e",
  a_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 37,
        height: 36,
        viewBox: "0 0 37 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        d: "M30.3422 9.12363L19.4397 2.58481C19.0481 2.36155 18.6051 2.24414 18.1543 2.24414C17.7036 2.24414 17.2606 2.36155 16.869 2.58481L5.96577 9.12293C5.57285 9.36371 5.24867 9.70176 5.02455 10.1044C4.80043 10.5071 4.68394 10.9607 4.68634 11.4215V24.4803C4.68399 24.9414 4.80047 25.3953 5.02457 25.7983C5.24867 26.2013 5.57282 26.5397 5.96577 26.781L8.82484 28.4883L8.84097 28.4974C10.2845 29.236 10.8373 29.236 11.4777 29.236C13.7321 29.236 15.1329 27.777 15.1329 25.4279V12.7662C15.1342 12.6081 15.0728 12.456 14.962 12.3432C14.8513 12.2303 14.7003 12.166 14.5423 12.1644H12.9725C12.8144 12.166 12.6634 12.2303 12.5527 12.3432C12.442 12.456 12.3805 12.6081 12.3818 12.7662V25.4279C12.3876 25.6092 12.3463 25.7888 12.2621 25.9495C12.1779 26.1101 12.0537 26.2462 11.9014 26.3447C11.4875 26.5972 10.8864 26.5439 10.2081 26.1939L7.46825 24.5448C7.45777 24.5376 7.4492 24.528 7.44333 24.5167C7.43746 24.5055 7.43445 24.493 7.43459 24.4803V11.606C7.43504 11.5912 7.43903 11.5768 7.44623 11.5638C7.45343 11.5509 7.46363 11.5399 7.47597 11.5317L18.1266 5.00828C18.1346 5.00433 18.1434 5.00227 18.1522 5.00227C18.1611 5.00227 18.1699 5.00433 18.1778 5.00828L28.8348 11.5317C28.8469 11.5405 28.8568 11.5521 28.8635 11.5656C28.8702 11.579 28.8736 11.5938 28.8734 11.6088V24.4803C28.8737 24.4936 28.871 24.5068 28.8655 24.5189C28.8601 24.531 28.852 24.5418 28.8418 24.5504L18.1757 30.909C18.1576 30.9153 18.1378 30.9153 18.1196 30.909L15.3959 29.2914C15.3151 29.2386 15.2217 29.2081 15.1252 29.203C15.0287 29.198 14.9326 29.2186 14.8467 29.2627L14.8229 29.2767C14.0709 29.7221 13.8689 29.8379 13.1717 30.0918C13.058 30.1332 12.7908 30.2321 12.7676 30.4965C12.7445 30.761 12.9984 30.9489 13.2243 31.0801L16.8647 33.3156C17.2526 33.548 17.6962 33.6709 18.1484 33.6712H18.1891C18.6299 33.6643 19.0612 33.5417 19.4397 33.3156L30.3422 26.7831C30.735 26.5411 31.0589 26.2022 31.2829 25.7989C31.507 25.3957 31.6236 24.9416 31.6216 24.4803V11.4215C31.6239 10.9609 31.5073 10.5074 31.2832 10.1049C31.0591 9.70235 30.735 9.3644 30.3422 9.12363Z",
        fill: "currentColor",
      }),
      x.createElement("path", {
        d: "M21.7931 22.3092C19.1774 22.3092 18.6198 21.5783 18.4542 20.3985C18.4356 20.258 18.3671 20.1289 18.2613 20.0347C18.1555 19.9405 18.0193 19.8874 17.8776 19.8851H16.4888C16.3322 19.8884 16.1834 19.9536 16.0748 20.0664C15.9662 20.1791 15.9068 20.3304 15.9094 20.4869C15.9094 21.5096 16.2685 24.8478 21.7959 24.8478C23.506 24.8478 24.9285 24.4479 25.9084 23.6911C26.8883 22.9342 27.413 21.833 27.413 20.5206C27.413 17.8867 25.6945 17.1656 22.31 16.6942C18.8695 16.2158 18.8695 15.9724 18.8695 15.4393C18.8695 15.0556 18.8695 14.1571 21.3568 14.1571C23.1265 14.1571 24.0741 14.3809 24.3772 15.56C24.404 15.6907 24.4747 15.8084 24.5775 15.8934C24.6803 15.9785 24.8091 16.0259 24.9425 16.0278H26.3363C26.4184 16.027 26.4995 16.0087 26.574 15.9741C26.6485 15.9395 26.7147 15.8895 26.7684 15.8272C26.8755 15.7021 26.929 15.5398 26.9171 15.3755C26.7368 12.8819 24.9138 11.6172 21.3589 11.6172C18.128 11.6172 16.1998 13.0727 16.1998 15.5102C16.1998 18.1827 18.1982 18.9381 21.2003 19.251C24.7075 19.6136 24.7075 20.1425 24.7075 20.6097C24.7097 21.3377 24.4073 22.3092 21.7931 22.3092Z",
        fill: "currentColor",
      }),
    ),
  r_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 37,
        height: 33,
        viewBox: "0 0 37 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        d: "M18.1623 13.1496C18.779 13.1497 19.3819 13.3321 19.895 13.6741C20.4082 14.016 20.8088 14.5021 21.0462 15.0712C21.2837 15.6403 21.3475 16.2669 21.2296 16.8722C21.1117 17.4775 20.8174 18.0344 20.3837 18.4727C19.95 18.9111 19.3963 19.2113 18.7923 19.3357C18.1883 19.46 17.561 19.4029 16.9894 19.1714C16.4178 18.94 15.9275 18.5447 15.5801 18.0352C15.2327 17.5257 15.0438 16.9248 15.0372 16.3082C15.035 15.8956 15.1141 15.4866 15.27 15.1046C15.4258 14.7225 15.6554 14.3749 15.9456 14.0816C16.2358 13.7883 16.5809 13.5551 16.9613 13.3952C17.3416 13.2352 17.7498 13.1518 18.1623 13.1496ZM10.4248 29.6776C11.4776 30.3127 13.7671 29.3434 16.441 26.8366C15.5473 25.821 14.7051 24.7613 13.9175 23.6614C12.5696 23.5104 11.2307 23.2873 9.9067 22.9929C9.0544 26.5692 9.37192 29.0259 10.4248 29.6776ZM11.6113 20.085L11.1267 19.2327C10.9377 19.7021 10.7759 20.182 10.642 20.6699C11.0932 20.7702 11.5946 20.8538 12.1127 20.9373L11.6113 20.085ZM22.5408 18.8149L23.8945 16.3082L22.5408 13.8014C22.0395 12.9157 21.5047 12.1302 21.0201 11.3447C20.1176 11.2946 19.1651 11.2946 18.1623 11.2946C17.1596 11.2946 16.2071 11.2946 15.3046 11.2946C14.82 12.0801 14.2852 12.8655 13.7838 13.7512L12.4302 16.3082L13.7838 18.8149C14.2852 19.7007 14.82 20.4861 15.3046 21.2716C16.2071 21.2716 17.1596 21.2716 18.1623 21.2716C19.1651 21.2716 20.1176 21.2716 21.0201 21.2716C21.5047 20.4861 22.0395 19.7007 22.5408 18.8149ZM18.1623 7.58458C17.8448 7.95224 17.5106 8.33661 17.1764 8.78783H19.1483C18.8141 8.33661 18.4799 7.95224 18.1623 7.58458ZM18.1623 25.0317C18.4799 24.6641 18.8141 24.2797 19.1483 23.8285H17.1764C17.5106 24.2797 17.8448 24.6641 18.1623 25.0317ZM25.8832 2.93869C24.8471 2.30364 22.5408 3.27292 19.8837 5.7797C20.7774 6.79528 21.6196 7.85503 22.4072 8.95495C23.7539 9.08383 25.0927 9.28466 26.418 9.55657C27.2703 5.98024 26.9528 3.5236 25.8832 2.87184M24.7134 12.4644L25.198 13.3167C25.387 12.8473 25.5488 12.3675 25.6827 11.8795C25.2315 11.7793 24.7301 11.6957 24.212 11.6121L24.7134 12.4644ZM27.1366 0.766148C29.5932 2.16994 29.8606 5.86326 28.8078 10.1749C33.0526 11.4283 36.1109 13.5173 36.1109 16.3249C36.1109 19.1325 33.0526 21.2214 28.8078 22.4748C29.8439 26.7865 29.5765 30.4798 27.1366 31.8836C24.6967 33.2874 21.371 31.683 18.1623 28.6248C14.9537 31.683 11.628 33.2874 9.17138 31.8836C6.71474 30.4798 6.46406 26.87 7.5002 22.4748C3.25539 21.2214 0.197124 19.1325 0.197124 16.3249C0.197124 13.5173 3.25539 11.4116 7.5002 10.1582C6.46406 5.84655 6.73145 2.15323 9.17138 0.749437C11.6113 -0.654358 14.9537 0.949978 18.1623 4.00824C21.371 0.949978 24.6967 -0.654358 27.1366 0.749437M26.652 16.3082C27.2324 17.5384 27.7456 18.7992 28.1895 20.085C31.6989 19.0322 33.6709 17.5281 33.6709 16.3082C33.6709 15.0882 31.6488 13.5841 28.1895 12.5313C27.7456 13.8171 27.2324 15.0779 26.652 16.3082ZM9.67274 16.3082C9.09233 15.0779 8.57908 13.8171 8.13525 12.5313C4.62576 13.5841 2.65376 15.0882 2.65376 16.3082C2.65376 17.5281 4.6759 19.0322 8.13525 20.085C8.57908 18.7992 9.09233 17.5384 9.67274 16.3082ZM24.7134 20.085L24.212 20.9373C24.7301 20.9373 25.2315 20.7702 25.6827 20.6699C25.5488 20.182 25.387 19.7021 25.198 19.2327L24.7134 20.085ZM19.8335 26.8366C22.4907 29.3434 24.8471 30.3127 25.8331 29.6776C26.8191 29.0426 27.2202 26.6361 26.3679 22.9929C25.0426 23.2648 23.7037 23.4656 22.357 23.5945C21.5713 24.7172 20.729 25.7993 19.8335 26.8366ZM11.6113 12.5313L12.1127 11.679C11.5946 11.679 11.0932 11.8461 10.642 11.9464C10.7759 12.4343 10.9377 12.9142 11.1267 13.3836L11.6113 12.5313ZM16.4912 5.7797C13.7838 3.27292 11.4776 2.30364 10.4248 2.93869C9.37192 3.57374 9.0544 5.98024 9.9067 9.62342C11.232 9.35151 12.5708 9.15068 13.9175 9.0218C14.7196 7.89791 15.5786 6.8158 16.4912 5.7797Z",
        fill: "currentColor",
      }),
    ),
  s_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 28,
        height: 29,
        viewBox: "0 0 28 29",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        d: "M14.154 0.424805L27.3822 5.13848L25.377 22.6464L14.154 28.8565L2.93095 22.6464L0.925766 5.13848L14.154 0.424805ZM14.154 3.41762L3.67915 7.15863L5.29527 20.9555L14.154 25.8637L23.0127 20.9555L24.6288 7.15863L14.154 3.41762ZM14.154 5.24323L21.0075 20.6263H18.4487L17.057 17.2145H11.1612L9.84434 20.6263H7.28549L14.154 5.24323ZM16.1592 15.0896L14.154 10.2562L12.1488 15.0896H16.1592Z",
        fill: "currentColor",
      }),
    ),
  i_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 27,
        height: 27,
        viewBox: "0 0 27 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        d: "M21.7049 14.5343V14.2493C21.7049 12.99 20.6839 11.9691 19.4247 11.9691H17.4294C16.0127 11.9691 14.8642 13.1176 14.8642 14.5343C14.8642 15.9511 16.0127 17.0996 17.4294 17.0996H19.1396C20.5563 17.0996 21.7049 18.2482 21.7049 19.6649C21.7049 21.0816 20.5563 22.2301 19.1396 22.2301H17.4294C16.0127 22.2301 14.8642 21.0816 14.8642 19.6649M11.4438 11.114V19.6649C11.4438 21.0816 10.2953 22.2301 8.87855 22.2301C7.46179 22.2301 6.31328 21.0816 6.31328 19.6649M1.18275 1.70801H25.1252V25.6505H1.18275V1.70801Z",
        stroke: "currentColor",
        strokeWidth: 2,
      }),
    ),
  l_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 30,
        height: 30,
        viewBox: "0 0 36 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement(
        "g",
        { clipPath: "url(#clip0_2058_1585)" },
        x.createElement(
          "mask",
          {
            id: "path-1-outside-1_2058_1585",
            maskUnits: "userSpaceOnUse",
            x: 3.71898,
            y: 0.0078125,
            width: 28,
            height: 38,
            fill: "currentColor",
          },
          x.createElement("rect", {
            fill: "white",
            x: 3.71898,
            y: 0.0078125,
            width: 28,
            height: 38,
          }),
          x.createElement("path", {
            d: "M13.6022 15.5886C13.2705 14.8552 13.1218 13.9997 13.3752 13.2226C13.6286 12.428 14.1961 11.7907 14.7636 11.1969C16.3436 9.61652 18.2908 8.45535 19.8362 6.84899C20.6917 5.96706 21.3988 4.91063 21.6432 3.69692C21.8441 2.80645 21.7482 1.88973 21.5649 1.00781C22.3856 1.94206 22.6562 3.27788 22.4204 4.48282C22.1673 5.83604 21.4162 7.03213 20.5345 8.06234C19.8274 8.89193 19.0153 9.62529 18.1685 10.3065C17.1819 11.101 16.2129 11.9565 15.5931 13.0741C15.069 13.982 14.9467 15.0996 15.3048 16.0863C15.8899 17.7799 17.2517 19.0373 17.994 20.635C17.1731 19.9102 16.37 19.1594 15.6189 18.365C14.8334 17.5268 14.0912 16.6364 13.6022 15.5886ZM18.0549 14.2614C17.9066 15.6497 18.631 16.9593 19.4956 17.9896C19.9145 18.4523 20.2725 19.0198 20.2899 19.666C20.3075 20.53 19.8188 21.3336 19.1897 21.9008C19.3384 21.8836 19.4431 21.7525 19.5653 21.6827C20.5083 21.0802 21.4161 20.3206 21.8788 19.2819C22.1844 18.5746 22.1147 17.7363 21.7132 17.0814C21.2415 16.3131 20.6218 15.6321 20.2551 14.794C20.054 14.3226 19.9842 13.7726 20.1502 13.2749C20.3686 12.6027 20.84 12.0525 21.3377 11.5723C22.7084 10.2716 24.3672 9.34576 25.9563 8.33316C23.9481 8.90933 21.9663 9.70392 20.2725 10.9526C19.1986 11.7558 18.2034 12.8732 18.0549 14.2614ZM27.598 20.8271C28.5497 20.8796 29.4836 21.578 29.6584 22.5385C29.8243 23.3679 29.4228 24.1885 28.9075 24.8171C28.0605 25.8298 26.9166 26.5546 25.7645 27.1745C25.6508 27.2441 25.5548 27.3315 25.4675 27.4276C26.9867 27.0434 28.5057 26.4674 29.7369 25.4807C30.4177 24.9132 31.0201 24.1621 31.1512 23.2628C31.2735 22.4859 30.9506 21.6826 30.3743 21.1676C29.6756 20.5299 28.6893 20.2944 27.7636 20.4167C27.231 20.4865 26.6462 20.6 26.2795 21.0453C26.7162 20.9582 27.1437 20.7834 27.598 20.8271ZM8.64315 23.3239C9.7867 23.6295 10.9655 23.7169 12.1354 23.7956C13.1831 23.8654 14.231 23.883 15.2875 23.8741C18.0114 23.8307 20.7528 23.6471 23.4244 23.0535C23.6775 22.9925 23.957 22.9488 24.1843 22.7917C24.6295 22.5034 25.1181 22.2763 25.5985 22.0493C23.4244 22.3986 21.2416 22.6957 19.0416 22.8353C16.8152 22.975 14.5712 23.0623 12.3363 22.9139C11.699 22.8529 11.044 22.8178 10.4504 22.5732C10.3105 22.5121 10.1184 22.3902 10.1882 22.2065C10.3193 21.9708 10.5812 21.8574 10.8082 21.7352C11.7688 21.2811 12.8164 21.028 13.8379 20.7312C12.0829 20.7048 10.3366 21.15 8.73048 21.8399C8.37239 22.0146 7.97082 22.1542 7.6828 22.4511C7.56903 22.5731 7.56903 22.783 7.70013 22.8876C7.96212 23.1233 8.31115 23.228 8.64315 23.3239ZM22.7873 25.7252C21.2592 25.9958 19.7224 26.2493 18.177 26.3276C16.4832 26.4411 14.7894 26.345 13.1132 26.1704C12.7903 26.1267 12.4671 26.0745 12.1791 25.9261C12.0307 25.8387 11.8823 25.6991 11.8911 25.5155C11.9084 25.2275 12.1527 25.0268 12.3275 24.8171C11.7864 25.0093 11.2449 25.2099 10.791 25.5683C10.5986 25.7167 10.4067 25.9522 10.459 26.2141C10.5379 26.5197 10.8347 26.703 11.0966 26.8426C11.7425 27.1746 12.4672 27.3228 13.1746 27.4539C14.964 27.7422 16.7889 27.7509 18.5874 27.6284C20.4912 27.48 22.3855 27.1659 24.2277 26.6244C23.7039 26.3889 23.2062 26.1179 22.7873 25.7252ZM13.1918 28.7463C12.7029 28.8859 12.2052 29.052 11.8037 29.3746C11.6025 29.5318 11.4456 29.8028 11.5418 30.0559C11.664 30.3789 11.9697 30.5713 12.2575 30.7367C13.0086 31.1473 13.8553 31.3391 14.6847 31.4878C16.5621 31.7844 18.4914 31.7409 20.3599 31.4092C21.4686 31.1996 22.5775 30.9027 23.6077 30.4402C22.9354 30.1607 22.2808 29.8463 21.6522 29.4797C20.5608 29.6717 19.4605 29.8727 18.3429 29.9425C16.8677 30.056 15.3745 29.9337 13.899 29.7504C13.5496 29.6718 13.1132 29.637 12.8775 29.3313C12.7555 29.0778 13.0347 28.8945 13.1918 28.7463ZM25.1358 34.36C26.3579 34.1072 27.5892 33.8186 28.7066 33.2513C29.0557 33.0502 29.4836 32.8319 29.5973 32.4131C29.6584 32.0115 29.2393 31.8019 28.9424 31.6359C29.1257 31.8459 29.2479 32.1513 29.0645 32.3956C28.7588 32.8061 28.2353 32.9631 27.7724 33.1203C26.3232 33.5307 24.8213 33.6966 23.3284 33.8626C19.3734 34.2204 15.3919 34.3078 11.4371 33.9761C10.1099 33.8362 8.75636 33.6878 7.49047 33.2165C7.28986 33.1291 6.98424 33.0417 6.98424 32.7709C7.06259 32.5357 7.28986 32.4043 7.49047 32.2908C8.39848 31.8282 9.41129 31.5748 10.424 31.5138C10.1275 31.3391 9.77815 31.3217 9.43767 31.3305C8.59061 31.3567 7.76123 31.5748 6.95815 31.8459C6.26835 32.0987 5.56116 32.3783 5.01095 32.8848C4.79273 33.0766 4.59212 33.4432 4.81882 33.7054C5.16814 34.0809 5.70958 34.1767 6.18944 34.2902C8.87862 34.7531 11.6025 35.0147 14.3269 35.1109C17.9415 35.2159 21.5822 35.0587 25.1358 34.36ZM28.7154 34.8317C27.0739 35.3555 25.3715 35.6435 23.6775 35.8794C20.7528 36.246 17.8016 36.3595 14.8593 36.2724C13.0696 36.2026 11.2799 36.0803 9.51602 35.7832C9.92636 36.0626 10.4329 36.1498 10.9044 36.2809C12.8865 36.7001 14.9205 36.7787 16.9375 36.8397C19.8969 36.8922 22.8568 36.7787 25.773 36.3159C27.1527 36.0718 28.5408 35.7747 29.7803 35.1285C30.4267 34.788 31.0817 34.2639 31.1947 33.5046C30.5401 34.2028 29.5973 34.5261 28.7154 34.8317Z",
          }),
        ),
        x.createElement("path", {
          d: "M13.6022 15.5886C13.2705 14.8552 13.1218 13.9997 13.3752 13.2226C13.6286 12.428 14.1961 11.7907 14.7636 11.1969C16.3436 9.61652 18.2908 8.45535 19.8362 6.84899C20.6917 5.96706 21.3988 4.91063 21.6432 3.69692C21.8441 2.80645 21.7482 1.88973 21.5649 1.00781C22.3856 1.94206 22.6562 3.27788 22.4204 4.48282C22.1673 5.83604 21.4162 7.03213 20.5345 8.06234C19.8274 8.89193 19.0153 9.62529 18.1685 10.3065C17.1819 11.101 16.2129 11.9565 15.5931 13.0741C15.069 13.982 14.9467 15.0996 15.3048 16.0863C15.8899 17.7799 17.2517 19.0373 17.994 20.635C17.1731 19.9102 16.37 19.1594 15.6189 18.365C14.8334 17.5268 14.0912 16.6364 13.6022 15.5886ZM18.0549 14.2614C17.9066 15.6497 18.631 16.9593 19.4956 17.9896C19.9145 18.4523 20.2725 19.0198 20.2899 19.666C20.3075 20.53 19.8188 21.3336 19.1897 21.9008C19.3384 21.8836 19.4431 21.7525 19.5653 21.6827C20.5083 21.0802 21.4161 20.3206 21.8788 19.2819C22.1844 18.5746 22.1147 17.7363 21.7132 17.0814C21.2415 16.3131 20.6218 15.6321 20.2551 14.794C20.054 14.3226 19.9842 13.7726 20.1502 13.2749C20.3686 12.6027 20.84 12.0525 21.3377 11.5723C22.7084 10.2716 24.3672 9.34576 25.9563 8.33316C23.9481 8.90933 21.9663 9.70392 20.2725 10.9526C19.1986 11.7558 18.2034 12.8732 18.0549 14.2614ZM27.598 20.8271C28.5497 20.8796 29.4836 21.578 29.6584 22.5385C29.8243 23.3679 29.4228 24.1885 28.9075 24.8171C28.0605 25.8298 26.9166 26.5546 25.7645 27.1745C25.6508 27.2441 25.5548 27.3315 25.4675 27.4276C26.9867 27.0434 28.5057 26.4674 29.7369 25.4807C30.4177 24.9132 31.0201 24.1621 31.1512 23.2628C31.2735 22.4859 30.9506 21.6826 30.3743 21.1676C29.6756 20.5299 28.6893 20.2944 27.7636 20.4167C27.231 20.4865 26.6462 20.6 26.2795 21.0453C26.7162 20.9582 27.1437 20.7834 27.598 20.8271ZM8.64315 23.3239C9.7867 23.6295 10.9655 23.7169 12.1354 23.7956C13.1831 23.8654 14.231 23.883 15.2875 23.8741C18.0114 23.8307 20.7528 23.6471 23.4244 23.0535C23.6775 22.9925 23.957 22.9488 24.1843 22.7917C24.6295 22.5034 25.1181 22.2763 25.5985 22.0493C23.4244 22.3986 21.2416 22.6957 19.0416 22.8353C16.8152 22.975 14.5712 23.0623 12.3363 22.9139C11.699 22.8529 11.044 22.8178 10.4504 22.5732C10.3105 22.5121 10.1184 22.3902 10.1882 22.2065C10.3193 21.9708 10.5812 21.8574 10.8082 21.7352C11.7688 21.2811 12.8164 21.028 13.8379 20.7312C12.0829 20.7048 10.3366 21.15 8.73048 21.8399C8.37239 22.0146 7.97082 22.1542 7.6828 22.4511C7.56903 22.5731 7.56903 22.783 7.70013 22.8876C7.96212 23.1233 8.31115 23.228 8.64315 23.3239ZM22.7873 25.7252C21.2592 25.9958 19.7224 26.2493 18.177 26.3276C16.4832 26.4411 14.7894 26.345 13.1132 26.1704C12.7903 26.1267 12.4671 26.0745 12.1791 25.9261C12.0307 25.8387 11.8823 25.6991 11.8911 25.5155C11.9084 25.2275 12.1527 25.0268 12.3275 24.8171C11.7864 25.0093 11.2449 25.2099 10.791 25.5683C10.5986 25.7167 10.4067 25.9522 10.459 26.2141C10.5379 26.5197 10.8347 26.703 11.0966 26.8426C11.7425 27.1746 12.4672 27.3228 13.1746 27.4539C14.964 27.7422 16.7889 27.7509 18.5874 27.6284C20.4912 27.48 22.3855 27.1659 24.2277 26.6244C23.7039 26.3889 23.2062 26.1179 22.7873 25.7252ZM13.1918 28.7463C12.7029 28.8859 12.2052 29.052 11.8037 29.3746C11.6025 29.5318 11.4456 29.8028 11.5418 30.0559C11.664 30.3789 11.9697 30.5713 12.2575 30.7367C13.0086 31.1473 13.8553 31.3391 14.6847 31.4878C16.5621 31.7844 18.4914 31.7409 20.3599 31.4092C21.4686 31.1996 22.5775 30.9027 23.6077 30.4402C22.9354 30.1607 22.2808 29.8463 21.6522 29.4797C20.5608 29.6717 19.4605 29.8727 18.3429 29.9425C16.8677 30.056 15.3745 29.9337 13.899 29.7504C13.5496 29.6718 13.1132 29.637 12.8775 29.3313C12.7555 29.0778 13.0347 28.8945 13.1918 28.7463ZM25.1358 34.36C26.3579 34.1072 27.5892 33.8186 28.7066 33.2513C29.0557 33.0502 29.4836 32.8319 29.5973 32.4131C29.6584 32.0115 29.2393 31.8019 28.9424 31.6359C29.1257 31.8459 29.2479 32.1513 29.0645 32.3956C28.7588 32.8061 28.2353 32.9631 27.7724 33.1203C26.3232 33.5307 24.8213 33.6966 23.3284 33.8626C19.3734 34.2204 15.3919 34.3078 11.4371 33.9761C10.1099 33.8362 8.75636 33.6878 7.49047 33.2165C7.28986 33.1291 6.98424 33.0417 6.98424 32.7709C7.06259 32.5357 7.28986 32.4043 7.49047 32.2908C8.39848 31.8282 9.41129 31.5748 10.424 31.5138C10.1275 31.3391 9.77815 31.3217 9.43767 31.3305C8.59061 31.3567 7.76123 31.5748 6.95815 31.8459C6.26835 32.0987 5.56116 32.3783 5.01095 32.8848C4.79273 33.0766 4.59212 33.4432 4.81882 33.7054C5.16814 34.0809 5.70958 34.1767 6.18944 34.2902C8.87862 34.7531 11.6025 35.0147 14.3269 35.1109C17.9415 35.2159 21.5822 35.0587 25.1358 34.36ZM28.7154 34.8317C27.0739 35.3555 25.3715 35.6435 23.6775 35.8794C20.7528 36.246 17.8016 36.3595 14.8593 36.2724C13.0696 36.2026 11.2799 36.0803 9.51602 35.7832C9.92636 36.0626 10.4329 36.1498 10.9044 36.2809C12.8865 36.7001 14.9205 36.7787 16.9375 36.8397C19.8969 36.8922 22.8568 36.7787 25.773 36.3159C27.1527 36.0718 28.5408 35.7747 29.7803 35.1285C30.4267 34.788 31.0817 34.2639 31.1947 33.5046C30.5401 34.2028 29.5973 34.5261 28.7154 34.8317Z",
          fill: "currentColor",
        }),
        x.createElement("path", {
          d: "M13.6022 15.5886C13.2705 14.8552 13.1218 13.9997 13.3752 13.2226C13.6286 12.428 14.1961 11.7907 14.7636 11.1969C16.3436 9.61652 18.2908 8.45535 19.8362 6.84899C20.6917 5.96706 21.3988 4.91063 21.6432 3.69692C21.8441 2.80645 21.7482 1.88973 21.5649 1.00781C22.3856 1.94206 22.6562 3.27788 22.4204 4.48282C22.1673 5.83604 21.4162 7.03213 20.5345 8.06234C19.8274 8.89193 19.0153 9.62529 18.1685 10.3065C17.1819 11.101 16.2129 11.9565 15.5931 13.0741C15.069 13.982 14.9467 15.0996 15.3048 16.0863C15.8899 17.7799 17.2517 19.0373 17.994 20.635C17.1731 19.9102 16.37 19.1594 15.6189 18.365C14.8334 17.5268 14.0912 16.6364 13.6022 15.5886ZM18.0549 14.2614C17.9066 15.6497 18.631 16.9593 19.4956 17.9896C19.9145 18.4523 20.2725 19.0198 20.2899 19.666C20.3075 20.53 19.8188 21.3336 19.1897 21.9008C19.3384 21.8836 19.4431 21.7525 19.5653 21.6827C20.5083 21.0802 21.4161 20.3206 21.8788 19.2819C22.1844 18.5746 22.1147 17.7363 21.7132 17.0814C21.2415 16.3131 20.6218 15.6321 20.2551 14.794C20.054 14.3226 19.9842 13.7726 20.1502 13.2749C20.3686 12.6027 20.84 12.0525 21.3377 11.5723C22.7084 10.2716 24.3672 9.34576 25.9563 8.33316C23.9481 8.90933 21.9663 9.70392 20.2725 10.9526C19.1986 11.7558 18.2034 12.8732 18.0549 14.2614ZM27.598 20.8271C28.5497 20.8796 29.4836 21.578 29.6584 22.5385C29.8243 23.3679 29.4228 24.1885 28.9075 24.8171C28.0605 25.8298 26.9166 26.5546 25.7645 27.1745C25.6508 27.2441 25.5548 27.3315 25.4675 27.4276C26.9867 27.0434 28.5057 26.4674 29.7369 25.4807C30.4177 24.9132 31.0201 24.1621 31.1512 23.2628C31.2735 22.4859 30.9506 21.6826 30.3743 21.1676C29.6756 20.5299 28.6893 20.2944 27.7636 20.4167C27.231 20.4865 26.6462 20.6 26.2795 21.0453C26.7162 20.9582 27.1437 20.7834 27.598 20.8271ZM8.64315 23.3239C9.7867 23.6295 10.9655 23.7169 12.1354 23.7956C13.1831 23.8654 14.231 23.883 15.2875 23.8741C18.0114 23.8307 20.7528 23.6471 23.4244 23.0535C23.6775 22.9925 23.957 22.9488 24.1843 22.7917C24.6295 22.5034 25.1181 22.2763 25.5985 22.0493C23.4244 22.3986 21.2416 22.6957 19.0416 22.8353C16.8152 22.975 14.5712 23.0623 12.3363 22.9139C11.699 22.8529 11.044 22.8178 10.4504 22.5732C10.3105 22.5121 10.1184 22.3902 10.1882 22.2065C10.3193 21.9708 10.5812 21.8574 10.8082 21.7352C11.7688 21.2811 12.8164 21.028 13.8379 20.7312C12.0829 20.7048 10.3366 21.15 8.73048 21.8399C8.37239 22.0146 7.97082 22.1542 7.6828 22.4511C7.56903 22.5731 7.56903 22.783 7.70013 22.8876C7.96212 23.1233 8.31115 23.228 8.64315 23.3239ZM22.7873 25.7252C21.2592 25.9958 19.7224 26.2493 18.177 26.3276C16.4832 26.4411 14.7894 26.345 13.1132 26.1704C12.7903 26.1267 12.4671 26.0745 12.1791 25.9261C12.0307 25.8387 11.8823 25.6991 11.8911 25.5155C11.9084 25.2275 12.1527 25.0268 12.3275 24.8171C11.7864 25.0093 11.2449 25.2099 10.791 25.5683C10.5986 25.7167 10.4067 25.9522 10.459 26.2141C10.5379 26.5197 10.8347 26.703 11.0966 26.8426C11.7425 27.1746 12.4672 27.3228 13.1746 27.4539C14.964 27.7422 16.7889 27.7509 18.5874 27.6284C20.4912 27.48 22.3855 27.1659 24.2277 26.6244C23.7039 26.3889 23.2062 26.1179 22.7873 25.7252ZM13.1918 28.7463C12.7029 28.8859 12.2052 29.052 11.8037 29.3746C11.6025 29.5318 11.4456 29.8028 11.5418 30.0559C11.664 30.3789 11.9697 30.5713 12.2575 30.7367C13.0086 31.1473 13.8553 31.3391 14.6847 31.4878C16.5621 31.7844 18.4914 31.7409 20.3599 31.4092C21.4686 31.1996 22.5775 30.9027 23.6077 30.4402C22.9354 30.1607 22.2808 29.8463 21.6522 29.4797C20.5608 29.6717 19.4605 29.8727 18.3429 29.9425C16.8677 30.056 15.3745 29.9337 13.899 29.7504C13.5496 29.6718 13.1132 29.637 12.8775 29.3313C12.7555 29.0778 13.0347 28.8945 13.1918 28.7463ZM25.1358 34.36C26.3579 34.1072 27.5892 33.8186 28.7066 33.2513C29.0557 33.0502 29.4836 32.8319 29.5973 32.4131C29.6584 32.0115 29.2393 31.8019 28.9424 31.6359C29.1257 31.8459 29.2479 32.1513 29.0645 32.3956C28.7588 32.8061 28.2353 32.9631 27.7724 33.1203C26.3232 33.5307 24.8213 33.6966 23.3284 33.8626C19.3734 34.2204 15.3919 34.3078 11.4371 33.9761C10.1099 33.8362 8.75636 33.6878 7.49047 33.2165C7.28986 33.1291 6.98424 33.0417 6.98424 32.7709C7.06259 32.5357 7.28986 32.4043 7.49047 32.2908C8.39848 31.8282 9.41129 31.5748 10.424 31.5138C10.1275 31.3391 9.77815 31.3217 9.43767 31.3305C8.59061 31.3567 7.76123 31.5748 6.95815 31.8459C6.26835 32.0987 5.56116 32.3783 5.01095 32.8848C4.79273 33.0766 4.59212 33.4432 4.81882 33.7054C5.16814 34.0809 5.70958 34.1767 6.18944 34.2902C8.87862 34.7531 11.6025 35.0147 14.3269 35.1109C17.9415 35.2159 21.5822 35.0587 25.1358 34.36ZM28.7154 34.8317C27.0739 35.3555 25.3715 35.6435 23.6775 35.8794C20.7528 36.246 17.8016 36.3595 14.8593 36.2724C13.0696 36.2026 11.2799 36.0803 9.51602 35.7832C9.92636 36.0626 10.4329 36.1498 10.9044 36.2809C12.8865 36.7001 14.9205 36.7787 16.9375 36.8397C19.8969 36.8922 22.8568 36.7787 25.773 36.3159C27.1527 36.0718 28.5408 35.7747 29.7803 35.1285C30.4267 34.788 31.0817 34.2639 31.1947 33.5046C30.5401 34.2028 29.5973 34.5261 28.7154 34.8317Z",
          stroke: "currentColor",
          strokeWidth: 0.4,
          mask: "url(#path-1-outside-1_2058_1585)",
        }),
      ),
      x.createElement(
        "defs",
        null,
        x.createElement(
          "clipPath",
          { id: "clip0_2058_1585" },
          x.createElement("rect", {
            width: 35.9137,
            height: 35.9137,
            fill: "white",
            transform: "translate(0 0.972656)",
          }),
        ),
      ),
    ),
  o_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 35,
        height: 34,
        viewBox: "0 0 35 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement(
        "g",
        { clipPath: "url(#clip0_2058_1588)" },
        x.createElement("path", {
          d: "M8.41208 11.8553C9.87113 11.8676 10.9284 12.2883 11.5839 13.1167C12.2394 13.9451 12.4557 15.0765 12.2331 16.5111C12.1467 17.1666 11.9549 17.8095 11.6581 18.4402C11.3736 19.0708 10.9781 19.6395 10.471 20.1467C9.85259 20.7896 9.19113 21.1977 8.48627 21.3709C7.78141 21.5441 7.05171 21.6306 6.29751 21.6306H4.07164L3.36679 25.1549H0.788498L3.44098 11.8553H8.41208ZM30.4023 11.8553C31.8613 11.8676 32.9186 12.2883 33.5741 13.1167C34.2296 13.9451 34.4459 15.0765 34.2233 16.5111C34.1369 17.1666 33.9451 17.8095 33.6483 18.4402C33.3638 19.0708 32.9683 19.6395 32.4612 20.1467C31.8428 20.7896 31.1813 21.1977 30.4765 21.3709C29.7716 21.5441 29.0419 21.6306 28.2877 21.6306H26.0618L25.357 25.1549H22.7787L25.4312 11.8553H30.4023ZM17.7299 8.3125L17.0065 11.8553H19.3065C20.5679 11.8802 21.5076 12.1399 22.126 12.6344C22.7566 13.1289 22.9421 14.0689 22.6824 15.4538L21.4397 21.6306H18.8428L20.03 15.732C20.1535 15.1136 20.1164 14.6748 19.9187 14.4151C19.7209 14.1554 19.2943 14.0255 18.6388 14.0255L16.5799 14.007L15.0589 21.6306H12.4991L15.1702 8.3125H17.7299ZM6.4088 13.9699C6.26041 13.9821 6.11832 13.9884 5.98218 13.9884L5.60745 13.9884L4.49827 19.5346C4.57246 19.5468 4.64666 19.5531 4.72085 19.5531H4.98054C6.16766 19.5654 7.15705 19.4481 7.94835 19.2007C8.73966 18.941 9.27162 18.0384 9.54356 16.4925C9.76614 15.1941 9.54356 14.4459 8.8758 14.2481C8.22029 14.0504 7.39819 13.9577 6.4088 13.9699ZM28.399 13.9699C28.2506 13.9821 28.1085 13.9884 27.9724 13.9884L27.5976 13.9884L26.4885 19.5346C26.5627 19.5468 26.6368 19.5531 26.711 19.5531H26.9707C28.1579 19.5654 29.1472 19.4481 29.9385 19.2007C30.7298 18.941 31.2618 18.0384 31.5337 16.4925C31.7563 15.1941 31.5337 14.4459 30.866 14.2481C30.2105 14.0504 29.3884 13.9577 28.399 13.9699Z",
          fill: "currentColor",
        }),
      ),
      x.createElement(
        "defs",
        null,
        x.createElement(
          "clipPath",
          { id: "clip0_2058_1588" },
          x.createElement("rect", {
            width: 33.5195,
            height: 33.5195,
            fill: "currentColor",
            transform: "translate(0.788498 -0.00195312)",
          }),
        ),
      ),
    ),
  c_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 31,
        height: 31,
        viewBox: "0 0 31 31",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        d: "M1.37987 15.3949C1.37987 8.90506 1.37987 5.66017 3.396 3.64406C5.41211 1.62793 8.657 1.62793 15.1468 1.62793C21.6365 1.62793 24.8815 1.62793 26.8976 3.64406C28.9137 5.66017 28.9137 8.90506 28.9137 15.3949C28.9137 21.8846 28.9137 25.1296 26.8976 27.1456C24.8815 29.1618 21.6365 29.1618 15.1468 29.1618C8.657 29.1618 5.41211 29.1618 3.396 27.1456C1.37987 25.1296 1.37987 21.8846 1.37987 15.3949Z",
        stroke: "currentColor",
        strokeWidth: 2.2,
      }),
      x.createElement("path", {
        d: "M8.56262 18.388L10.9288 15.1613C11.8665 13.8827 12.3353 13.2433 12.952 13.2433C13.5688 13.2433 14.0376 13.8827 14.9754 15.1613L15.3183 15.629C16.256 16.9076 16.7248 17.547 17.3416 17.547C17.9583 17.547 18.4272 16.9076 19.3648 15.629L21.731 12.4023",
        stroke: "currentColor",
        strokeWidth: 2.2,
        strokeLinecap: "round",
      }),
    ),
  u_ = (a) =>
    x.createElement(
      "svg",
      {
        width: 37,
        height: 37,
        viewBox: "0 0 37 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
      },
      x.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.65182 9.85695C5.65182 7.54996 7.49283 5.76349 9.77852 4.62065C12.1313 3.44425 15.3031 2.74902 18.7454 2.74902C22.1876 2.74902 25.3595 3.44425 27.7123 4.62065C29.9979 5.76349 31.8389 7.54996 31.8389 9.85695V27.8138C31.8389 30.1208 29.9979 31.9072 27.7123 33.05C25.3595 34.2265 22.1876 34.9217 18.7454 34.9217C15.3031 34.9217 12.1313 34.2265 9.77852 33.05C7.49283 31.9072 5.65182 30.1208 5.65182 27.8138V9.85695ZM7.89643 9.85695C7.89643 8.85818 8.73527 7.65183 10.7823 6.62829C12.7623 5.63833 15.5761 4.99363 18.7454 4.99363C21.9148 4.99363 24.7284 5.63833 26.7083 6.62829C28.7554 7.65183 29.5943 8.85818 29.5943 9.85695C29.5943 10.8557 28.7554 12.0621 26.7083 13.0856C24.7284 14.0756 21.9148 14.7203 18.7454 14.7203C15.5761 14.7203 12.7623 14.0756 10.7823 13.0856C8.73527 12.0621 7.89643 10.8557 7.89643 9.85695ZM7.89643 27.8138C7.89643 28.8125 8.73527 30.0189 10.7823 31.0425C12.7623 32.0325 15.5761 32.6771 18.7454 32.6771C21.9148 32.6771 24.7284 32.0325 26.7083 31.0425C28.7554 30.0189 29.5943 28.8125 29.5943 27.8138V22.8865C29.0306 23.3361 28.3911 23.7322 27.7123 24.0716C25.3595 25.2481 22.1876 25.9433 18.7454 25.9433C15.3031 25.9433 12.1313 25.2481 9.77852 24.0716C9.09975 23.7322 8.4602 23.3361 7.89643 22.8865V27.8138ZM29.5943 13.9081V18.8354C29.5943 19.8341 28.7554 21.0405 26.7083 22.064C24.7284 23.0541 21.9148 23.6987 18.7454 23.6987C15.5761 23.6987 12.7623 23.0541 10.7823 22.064C8.73527 21.0405 7.89643 19.8341 7.89643 18.8354V13.9081C8.4602 14.3577 9.09975 14.7539 9.77852 15.0933C12.1313 16.2696 15.3031 16.9649 18.7454 16.9649C22.1876 16.9649 25.3595 16.2696 27.7123 15.0933C28.3911 14.7539 29.0306 14.3577 29.5943 13.9081Z",
        fill: "currentColor",
      }),
    ),
  Nc = [
    { icon: a_, label: "Node" },
    { icon: r_, label: "React" },
    { icon: s_, label: "Angular" },
    { icon: i_, label: "JavaScript" },
    { icon: l_, label: "Java" },
    { icon: o_, label: "Fullstack PHP" },
    { icon: c_, label: "Data Science" },
    { icon: u_, label: "BBDD" },
  ];
function d_() {
  var te, U, ne;
  const { user: a } = K9(),
    n = Ua(),
    {
      register: r,
      handleSubmit: i,
      setValue: o,
      reset: u,
      control: f,
      formState: { errors: h },
    } = i7({ resolver: u7(_9) }),
    g = H0({ control: f, name: "title", defaultValue: "" }),
    m = H0({ control: f, name: "description", defaultValue: "" }),
    [_, v] = x.useState(null),
    [C, R] = x.useState([]),
    A = x.useCallback(
      ($) => {
        R($), o("tags", $);
      },
      [o],
    ),
    G = ($) => {
      v($), o("category", $);
    },
    H = async ($) => {
      let me;
      $.tags &&
        $.tags.length &&
        ((me = []),
        $.tags.forEach((Re) => {
          me.push(Re.id);
        }));
      const ve = {
        title: $.title,
        description: $.description,
        url: $.url,
        category: $.category,
        tags: me,
        type: $.type,
        github_id: a == null ? void 0 : a.id,
      };
      try {
        await C9(ve),
          Fs.success("¡Recurso creado con éxito!"),
          setTimeout(() => {
            n(`/resources/${$ == null ? void 0 : $.category}`);
          }, 1e3),
          u();
      } catch (Re) {
        console.error("Error al crear el recurso:", Re),
          Fs.error("Hubo un error al crear el recurso");
      }
    },
    B = 65,
    I = 120,
    V = () => {
      window.history.length > 2 ? n(-1) : n("/resources/node");
    };
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(Ll, { title: "Create Resource" }),
      p.jsxs(yc, {
        children: [
          p.jsxs("div", {
            className: "md:flex justify-between items-center",
            children: [
              p.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  p.jsxs("button", {
                    onClick: V,
                    className:
                      "text-md font-medium text-primary flex items-center gap-2 cursor-pointer hover:opacity-80",
                    children: [
                      p.jsx("img", {
                        className: "w-4 h-4",
                        src: n_,
                        alt: "Arrow Left",
                      }),
                      p.jsx("span", { children: "Volver a recursos" }),
                    ],
                  }),
                  p.jsx("h1", {
                    className: "text-[26px] font-black ",
                    children: "Nuevo recurso",
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex  ",
                children: [
                  p.jsx(jn, {
                    variant: "secondary",
                    onClick: () => window.history.back(),
                    className: "min-w-[8rem] max-h-[2.75rem] mr-4",
                    children: "Cancelar",
                  }),
                  p.jsx(jn, {
                    type: "button",
                    variant: "primary",
                    className: "min-w-[8rem] max-h-[2.75rem] ",
                    onClick: i(H),
                    children: "Publicar",
                  }),
                ],
              }),
            ],
          }),
          p.jsx("hr", { className: "w-full border-t border-gray-300 mt-3" }),
          p.jsx("div", {
            className: "flex mt-6 overflow-y-scroll",
            children: p.jsxs("form", {
              onSubmit: i(H),
              className: "w-full ",
              children: [
                p.jsx("h2", {
                  className: "text-sm text-black font-medium mb-3",
                  children: "Título",
                }),
                p.jsx(uf, {
                  id: "title",
                  placeholder: "",
                  register: r,
                  errors: (te = h.title) == null ? void 0 : te.message,
                  className:
                    "max-w-[482px] max-h-[2.6rem] border-[0.06rem]  border-gray-300 focus:border-2 focus:border-[#B91879] outline-none ",
                  maxLength: B,
                  onChange: ($) => {
                    o("title", $.target.value);
                  },
                }),
                p.jsx("div", {
                  className: "w-1/2",
                  children: p.jsxs("p", {
                    className: "text-sm text-slate-600 -mt-5 text-center ml-75",
                    children: [g == null ? void 0 : g.length, "/", B],
                  }),
                }),
                p.jsx("h2", {
                  className: "text-sm text-black font-medium mb-2 ",
                  children: "URL",
                }),
                p.jsx(uf, {
                  id: "url",
                  placeholder: "",
                  register: r,
                  errors: (U = h.url) == null ? void 0 : U.message,
                  className:
                    "max-w-[482px] max-h-[2.6rem] border-[0.06rem] border-gray-300 focus:border-2 focus:border-[#B91879] outline-none ",
                  onChange: ($) => {
                    o("url", $.target.value);
                  },
                }),
                p.jsx("h2", {
                  className: "text-sm text-black font-medium mb-2",
                  children: "Lenguaje",
                }),
                p.jsx("div", {
                  className: "flex flex-wrap gap-3",
                  children: Nc.map(($) => {
                    const me = $.icon;
                    return p.jsx(
                      jn,
                      {
                        type: "button",
                        variant: "secondary",
                        onClick: () => G($.label),
                        className: `!w-fit text-black  ${_ === $.label ? "border-2 focus:border-[#B91879]" : ""}`,
                        children: p.jsxs("div", {
                          className:
                            "flex justify-center items-center gap-1 h-fit",
                          children: [
                            p.jsx(me, { className: "w-7" }),
                            p.jsx("h1", {
                              className: "text-sm font-medium",
                              children: $.label,
                            }),
                          ],
                        }),
                      },
                      $.label,
                    );
                  }),
                }),
                p.jsx("div", {
                  className: "h-6",
                  children:
                    h.category &&
                    p.jsx("p", {
                      className: "text-red-500 text-xs mt-2",
                      children: h.category.message,
                    }),
                }),
                p.jsx("h2", {
                  className: "text-sm text-black font-medium mb-4",
                  children: "Tipo de recurso",
                }),
                p.jsxs("div", {
                  className: "flex justify-start gap-x-10 mb-1",
                  children: [
                    p.jsxs("div", {
                      className: "ml-1 flex gap-2 md:text-xl",
                      children: [
                        p.jsx("input", {
                          type: "radio",
                          id: "video",
                          value: "Video",
                          className: " scale-150 accent-[#B91879] ",
                          ...r("type", { required: !0 }),
                        }),
                        p.jsx("label", {
                          htmlFor: "video",
                          className: "text-sm",
                          children: "Vídeo",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "flex gap-2 md:text-xl",
                      children: [
                        p.jsx("input", {
                          type: "radio",
                          id: "curso",
                          value: "Cursos",
                          className: "scale-150 accent-[#B91879]",
                          ...r("type", { required: !0 }),
                        }),
                        p.jsx("label", {
                          htmlFor: "curso",
                          className: "text-sm",
                          children: "Curso",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "flex gap-2 md:text-xl",
                      children: [
                        p.jsx("input", {
                          type: "radio",
                          id: "blog",
                          value: "Blog",
                          className: "scale-150 accent-[#B91879]",
                          ...r("type", { required: !0 }),
                        }),
                        p.jsx("label", {
                          htmlFor: "blog",
                          className: "text-sm",
                          children: "Blog",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsx("div", {
                  className: "h-6",
                  children:
                    h.type &&
                    p.jsx("p", {
                      className: "text-red-500 text-xs",
                      children: h.type.message,
                    }),
                }),
                p.jsx(t_, {
                  selectedTags: C,
                  setselectedTags: A,
                  selectedCategory: _,
                }),
                p.jsx("div", {
                  className: "h-6",
                  children:
                    h.tags &&
                    p.jsx("p", {
                      className: "text-red-500 text-xs",
                      children: h.tags.message,
                    }),
                }),
                p.jsxs("div", {
                  children: [
                    p.jsx("hr", {
                      className: "w-full border-t border-gray-300 mt-3",
                    }),
                    p.jsx("h2", {
                      className: "text-base font-semibold mt-6 mb-6",
                      children: "Información adicional",
                    }),
                    p.jsx("h2", {
                      className: "text-sm text-black font-medium mt-2 mb-2",
                      children: "Descripción",
                    }),
                    p.jsx(uf, {
                      id: "description",
                      placeholder: "",
                      register: r,
                      errors:
                        (ne = h.description) == null ? void 0 : ne.message,
                      className:
                        "max-w-[482px] max-h-[4.5rem] border-[0.06rem] border-gray-300 focus:border-[#B91879] outline-none",
                      maxLength: I,
                      onChange: ($) => {
                        o("description", $.target.value);
                      },
                    }),
                    p.jsx("div", {
                      className: "w-1/2",
                      children: p.jsxs("p", {
                        className:
                          "text-sm text-slate-600 -mt-5 text-center ml-75",
                        children: [m == null ? void 0 : m.length, "/", I],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const f_ = "/assets/LogoItAcademy-BgUjCJ28.svg",
  h_ =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.73578%200C8.04654%200%207.48789%200.558648%207.48789%201.24789V7.48789H1.24789C0.558648%207.48789%200%208.04654%200%208.73578C0%209.42502%200.558648%209.98367%201.24789%209.98367H7.48789V16.2237C7.48789%2016.9129%208.04654%2017.4716%208.73578%2017.4716C9.42502%2017.4716%209.98367%2016.9129%209.98367%2016.2237V9.98367H16.2237C16.9129%209.98367%2017.4716%209.42502%2017.4716%208.73578C17.4716%208.04654%2016.9129%207.48789%2016.2237%207.48789H9.98367V1.24789C9.98367%200.558648%209.42502%200%208.73578%200Z'%20fill='%23808080'/%3e%3c/svg%3e",
  m_ =
    "data:image/svg+xml,%3csvg%20width='15'%20height='19'%20viewBox='0%200%2015%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.2866%2011.75H4.7133C3.07298%2011.8314%201.61974%2012.8334%200.960302%2014.3375C0.164927%2015.899%201.7523%2017.375%203.59843%2017.375H11.4014C13.2487%2017.375%2014.8361%2015.899%2014.0396%2014.3375C13.3801%2012.8334%2011.9269%2011.8314%2010.2866%2011.75Z'%20stroke='%237E7E7E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.8749%205C10.8749%206.86396%209.3639%208.375%207.49994%208.375C5.63598%208.375%204.12494%206.86396%204.12494%205C4.12494%203.13604%205.63598%201.625%207.49994%201.625C8.39504%201.625%209.25349%201.98058%209.88642%202.61351C10.5194%203.24645%2010.8749%204.10489%2010.8749%205Z'%20stroke='%237E7E7E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  ff =
    "data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L6.26316%206L11%201'%20stroke='%237E7E7E'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",
  p_ =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23808080'%20height='800px'%20width='800px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20471.2%20471.2'%20xml:space='preserve'%20stroke='%23808080'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cpath%20d='M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5%20s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5%20S235.019,444.2,227.619,444.2z'/%3e%3cpath%20d='M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5%20s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8%20C455.319,239.9,455.319,231.3,450.019,226.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  ec = ({ title: a, onClick: n, icon: r, disabled: i = !1 }) =>
    p.jsxs("button", {
      title: a || "Usuario",
      onClick: n,
      className: `flex items-center justify-start gap-3 px-3 py-1 mx-3 text-[0.85rem] whitespace-nowrap transition rounded-md ${i ? "cursor-default" : "cursor-pointer hover:bg-[#fcecec]"}`,
      disabled: i,
      children: [
        p.jsx("span", {
          children: a ? a.charAt(0).toUpperCase() + a.slice(1) : "Usuario",
        }),
        r && p.jsx("img", { src: r, alt: `${a} icon`, className: "w-4 h-4" }),
      ],
    }),
  Gg = async (a) => {
    try {
      const n = await fetch(`${Wt}${zn.roles.post}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a),
      });
      if (!n.ok) {
        const r = await n.json();
        throw new Error(r.message || `Error ${n.status}: ${n.statusText}`);
      }
      return await n.json();
    } catch (n) {
      throw (console.error("Error al crear rol:", n), n);
    }
  },
  g_ = async (a, n) => {
    const r = new AbortController(),
      i = r.signal,
      o = setTimeout(() => r.abort(), 1e4);
    try {
      const u = `${Wt}${zn.devTools.roleChange}`,
        f = await fetch(u, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(a),
          signal: i,
        });
      if ((clearTimeout(o), n)) {
        const g = await ei(n);
        if (
          (g === null || g === "anonymous") &&
          ["student", "mentor"].includes(a.role)
        ) {
          const m = { github_id: n, role: a.role, authorized_github_id: 1 };
          return await Gg(m);
        }
      }
      if (!f.ok) {
        const g = await f.json();
        throw new Error(g.message || `Error ${f.status}: ${f.statusText}`);
      }
      const h = await f.json();
      if (h && typeof h == "object") {
        if (
          h.message &&
          h.role &&
          typeof h == "object" &&
          "github_id" in h.role &&
          "role" in h.role
        )
          return h;
        if (h.error) throw new Error(`API Error: ${h.error}`);
      }
      throw new Error("Unexpected response from API.");
    } catch (u) {
      throw (
        (u instanceof DOMException &&
          u.name === "AbortError" &&
          console.warn("Petition cancelled."),
        console.error("changeRole error:", u),
        u)
      );
    }
  };
function y_() {
  const { user: a, saveUser: n } = Jt(),
    [r, i] = x.useState(!1);
  return {
    updateUserRole: async (u) => {
      if (!a || !a.id) return !1;
      i(!0);
      try {
        const f = { github_id: a.id, role: u },
          h = await g_(f, a.id);
        return h && h.role
          ? (n({ ...a, role: u }), Fs.success(`Rol cambiado a ${u}`), !0)
          : !1;
      } catch (f) {
        return (
          console.error("Error changing role:", f),
          Fs.error("No se pudo cambiar el rol"),
          !1
        );
      } finally {
        i(!1);
      }
    },
    isChanging: r,
  };
}
const Yg = ({ onClick: a, isLoading: n }) =>
    p.jsx("button", {
      onClick: a,
      className:
        "bg-black text-white text-sm font-bold inline-flex items-center justify-center p-2 m-2 rounded-md border-2  gap-4 min-w-[220px] min-h-[50px] cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out",
      disabled: n,
      children: n
        ? p.jsx("div", {
            className:
              "bg-black animate-spin w-6 h-6 border-4  border-solid border-t-transparent border-opacity-30 rounded-full",
          })
        : p.jsxs(p.Fragment, {
            children: [
              p.jsx("i", {
                children: p.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "2rem",
                  height: "2rem",
                  children: p.jsx("path", {
                    fill: "currentColor",
                    d: "M12 1A10.89 10.89 0 0 0 1 11.77A10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11a2.37 2.37 0 0 0 3.2.89a2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91a3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.7 10.7 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77A10.89 10.89 0 0 0 12 1",
                  }),
                }),
              }),
              "Sign in with GitHub",
            ],
          }),
    }),
  v_ =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='19'%20y1='2.12132'%20x2='2.12132'%20y2='19'%20stroke='%23282828'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cline%20x1='1.5'%20y1='-1.5'%20x2='25.3701'%20y2='-1.5'%20transform='matrix(0.707107%200.707107%200.707107%20-0.707107%202%200)'%20stroke='%23282828'%20stroke-width='3'%20stroke-linecap='round'/%3e%3c/svg%3e",
  op = ({ closeModal: a, title: n, children: r }) => {
    const { signIn: i } = Jt(),
      o = (u) => {
        u.target === u.currentTarget && a();
      };
    return p.jsx(p.Fragment, {
      children: p.jsx("div", {
        className:
          "fixed inset-0 bg-black/30 flex justify-center items-center z-50",
        onClick: o,
        children: p.jsxs("div", {
          className: "bg-white p-6 rounded-2xl w-[35%] min-h-[35%] relative",
          children: [
            p.jsx("button", {
              className: "absolute top-6 right-6 ",
              onClick: a,
              children: p.jsx("img", {
                src: v_,
                alt: "Cerrar modal",
                className: "w-[21px] h-[19px] ",
              }),
            }),
            p.jsxs("div", {
              className:
                "flex flex-col justify-center items-center w-full mt-10",
              children: [
                n &&
                  p.jsx("h2", {
                    className: "text-[1.7rem] text-black font-extrabold mb-10",
                    children: n,
                  }),
                r || p.jsx(Yg, { onClick: i }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  b_ = {
    superadmin: ["admin", "mentor", "student"],
    admin: ["mentor", "student"],
    mentor: ["student"],
  },
  __ = ({ onClose: a, userRole: n, userID: r }) => {
    const [i, o] = x.useState(""),
      [u, f] = x.useState(""),
      h = n ? b_[n] || [] : [],
      g = (m) => {
        m.preventDefault();
        const _ = {
          authorized_github_id: Number(r),
          github_id: Number(i),
          role: u,
        };
        Gg(_)
          .then(() => {
            Fs.success("¡Rol asignado con éxito!"), a();
          })
          .catch((v) => {
            Fs.error("No se pudo asignar el rol..."),
              console.error("Failed to create role:", v);
          }),
          a();
      };
    return p.jsx("div", {
      className:
        "fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 overflow-visible",
      children: p.jsxs("div", {
        className: "bg-white rounded-xl p-8 w-full max-w-md shadow-xl",
        children: [
          p.jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              p.jsx("h2", {
                className: "text-xl font-bold",
                children: "Add Users",
              }),
              p.jsx("button", {
                onClick: a,
                className: "text-gray-500 hover:text-gray-700",
                children: "✕",
              }),
            ],
          }),
          p.jsxs("form", {
            onSubmit: g,
            children: [
              p.jsxs("div", {
                className: "mb-4",
                children: [
                  p.jsx("label", {
                    htmlFor: "username",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Github ID",
                  }),
                  p.jsx("input", {
                    type: "text",
                    id: "username",
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md",
                    placeholder: "Ingresa su ID",
                    value: i,
                    onChange: (m) => o(m.target.value),
                    required: !0,
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "mb-4",
                children: [
                  p.jsx("label", {
                    htmlFor: "role",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "Rol",
                  }),
                  p.jsxs("select", {
                    id: "role",
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md",
                    value: u,
                    onChange: (m) => f(m.target.value),
                    required: !0,
                    children: [
                      p.jsx("option", {
                        value: "",
                        children: "Selecciona su rol",
                      }),
                      h.map((m) =>
                        p.jsx("option", { value: m, children: m }, m),
                      ),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex justify-end gap-2",
                children: [
                  p.jsx(jn, {
                    type: "button",
                    variant: "secondary",
                    onClick: a,
                    children: "Cancelar",
                  }),
                  p.jsx(jn, {
                    type: "submit",
                    variant: "primary",
                    children: "Añadir",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  x_ = () =>
    p.jsxs("section", {
      className: "text-gray-800",
      children: [
        p.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: "Términos y Condiciones de Uso",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "1. Aceptación de las condiciones",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "1. El acceso y/o uso de la Wiki atribuye la condición de “Usuario” y supone la aceptación plena de estos términos.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "2. Naturaleza de los contenidos",
        }),
        p.jsx("p", {
          className: "mb-2",
          children:
            "Los Usuarios comparten únicamente enlaces externos; no se permite la carga directa de contenidos protegidos por derechos de autor.",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "La Academia no edita ni modera previamente los enlaces publicados.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "3. Registro y acceso",
        }),
        p.jsx("p", {
          className: "mb-2",
          children:
            "El alta está limitada a estudiantes y personal docente de la Academia.",
        }),
        p.jsx("p", {
          className: "mb-4",
          children: "Las credenciales son personales e intransferibles.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "4. Prohibiciones específicas",
        }),
        p.jsxs("ul", {
          className: "list-disc list-inside mb-4",
          children: [
            p.jsx("li", {
              children:
                "Publicar enlaces a contenidos ilícitos, difamatorios, violentos, discriminatorios o que infrinjan derechos de terceros.",
            }),
            p.jsx("li", {
              children:
                "Realizar spam o cualquier uso que dificulte el normal funcionamiento de la Wiki.",
            }),
          ],
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "5. Co-responsabilidad",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "El Usuario se compromete a comprobar la legitimidad y licitud de los enlaces que comparta, actuando co-responsablemente con la Academia para mantener un entorno seguro y respetuoso.",
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Política de Privacidad (RGPD / LOPDGDD)",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Datos recogidos:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Nombre, apellidos, dirección de correo institucional y registros de actividad (logs).",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Finalidad:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Gestión de cuentas de usuario y trazabilidad de las contribuciones.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Base jurídica:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Relación contractual (art. 6.1.b RGPD) y obligación legal (art. 6.1.c RGPD).",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Cesiones / Encargados:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Proveedores de alojamiento y servicios tecnológicos, con los contratos de encargo correspondientes.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Conservación:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Mientras la cuenta esté activa y, tras la baja, el plazo necesario para atender posibles responsabilidades (máx. 5 años).",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Derechos:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Acceder, rectificar, suprimir, limitar u oponerse al tratamiento y portabilidad; reclamación ante la AEPD.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Medidas de seguridad:",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Cifrado de contraseñas, control de accesos y auditorías periódicas.",
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Política de Cookies",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "La Wiki utiliza únicamente cookies técnicas imprescindibles para la autenticación y el mantenimiento de sesión. No se emplean cookies analíticas ni publicitarias. Al acceder y continuar navegando, el Usuario consiente su uso.",
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Política de Enlaces y Exención de Responsabilidad",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Responsabilidad limitada",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "La Academia no controla los contenidos enlazados y, por tanto, no asume responsabilidad por la disponibilidad, legalidad o veracidad de dichos destinos externos.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Notificación de infracciones",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Cualquier persona que detecte un enlace ilícito o lesivo puede comunicarlo a través de [correo de abuso], indicando: URL, motivo de la denuncia y datos de contacto.",
        }),
        p.jsx("h3", {
          className: "font-semibold mt-6 mb-2",
          children: "Retirada expeditiva",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Previa verificación, la Academia procederá a la despublicación del enlace en un plazo razonable.",
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Normas de Participación (“Código de Conducta”)",
        }),
        p.jsxs("ul", {
          className: "list-disc list-inside mb-4",
          children: [
            p.jsx("li", {
              children:
                "Respeto y cortesía en los comentarios y resúmenes de enlace.",
            }),
            p.jsx("li", {
              children:
                "Uso de títulos descriptivos y aportación de contexto educativo.",
            }),
            p.jsx("li", {
              children:
                "No duplicar recursos existentes; buscar antes de publicar.",
            }),
            p.jsx("li", {
              children:
                "Etiquetar los enlaces con la categoría/herramienta/curso correspondiente.",
            }),
            p.jsx("li", {
              children:
                "Abstenerse de compartir material que requiera licencias no autorizadas.",
            }),
          ],
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Propiedad Intelectual",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Los textos propios de la Wiki (documentación, guías internas, etc.) se publican, salvo indicación en contrario, bajo licencia Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional (CC BY-SA 4.0).",
        }),
        p.jsx("p", {
          className: "mb-4",
          children:
            "Los enlaces no transfieren derechos sobre las obras enlazadas; los titulares conservan todas sus facultades.",
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children:
            "Procedimiento de “Notificación y Retirada” (Notice & Takedown)",
        }),
        p.jsxs("ul", {
          className: "list-disc list-inside mb-4",
          children: [
            p.jsx("li", {
              children:
                "Comunicación escrita con los datos del reclamante, identificación del enlace controvertido y fundamento jurídico de la infracción alegada.",
            }),
            p.jsx("li", {
              children:
                "Evaluación preliminar en un máximo de 72 horas hábiles.",
            }),
            p.jsx("li", {
              children: "Retirada o mantenimiento motivado del enlace.",
            }),
            p.jsx("li", {
              children: "Derecho de réplica del usuario que lo publicó.",
            }),
          ],
        }),
        p.jsx("h2", {
          className: "text-2xl font-bold mt-8 mb-4",
          children: "Limitación de Responsabilidad",
        }),
        p.jsxs("ul", {
          className: "list-disc list-inside mb-4",
          children: [
            p.jsx("li", {
              children:
                "Falta de disponibilidad de la plataforma por causas técnicas o de mantenimiento.",
            }),
            p.jsx("li", {
              children: "Uso indebido por parte de los Usuarios.",
            }),
            p.jsx("li", {
              children:
                "Contenidos de terceros accesibles a través de enlaces.",
            }),
          ],
        }),
      ],
    }),
  C_ = ({ closeModal: a }) =>
    p.jsxs("div", {
      className: "flex flex-col gap-8",
      children: [
        p.jsx("div", {
          className: "text-sm max-h-[60vh] overflow-y-auto space-y-4 pe-4",
          children: p.jsx(x_, {}),
        }),
        p.jsx("div", {
          className: "w-[25vh] self-center my-2",
          children: p.jsx(jn, {
            type: "button",
            variant: "primary",
            onClick: a,
            title: "Entendido",
            children: "Entendido",
          }),
        }),
      ],
    }),
  w_ = ({ closeModal: a, title: n }) => {
    const r = (i) => {
      i.target === i.currentTarget && a();
    };
    return p.jsx(p.Fragment, {
      children: p.jsx("div", {
        className:
          "fixed inset-0 bg-black/30 flex justify-center items-center z-50",
        onClick: r,
        children: p.jsx("div", {
          className:
            "bg-white px-28 py-6 rounded-2xl w-[70%] min-h-[35%] relative",
          children: p.jsxs("div", {
            className: "flex flex-col justify-center items-start mt-10",
            children: [
              n &&
                p.jsx("h2", {
                  className: "text-[1.7rem] text-black font-extrabold mb-10",
                  children: n,
                }),
              p.jsx(C_, { closeModal: a }),
            ],
          }),
        }),
      }),
    });
  },
  S_ = ({ userRole: a, isChanging: n, onRoleChange: r }) => {
    const i = ["student", "mentor", "admin", "superadmin"];
    return p.jsxs("div", {
      className:
        "absolute mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1",
      children: [
        p.jsx("p", {
          className: "text-xs text-gray-500 px-3 py-1 italic",
          children: "Cambiar a:",
        }),
        i.map((o) =>
          p.jsx(
            "button",
            {
              disabled: n,
              onClick: () => r(o),
              className: `w-full text-left px-4 py-2 text-sm ${a === o ? "bg-gray-100 font-bold" : "hover:bg-gray-100"} cursor-pointer transition-colors`,
              children: o,
            },
            o,
          ),
        ),
      ],
    });
  },
  E_ = () => {
    const { user: a, signIn: n, signOut: r } = Jt(),
      { isChanging: i, updateUserRole: o } = y_(),
      u = Ua(),
      f = un(),
      [h, g] = x.useState(""),
      [m, _] = x.useState(!1),
      [v, C] = x.useState(!1),
      [R, A] = x.useState(!1),
      [G, H] = x.useState(!1),
      [B, I] = x.useState(!1),
      [V, te] = x.useState(!1),
      [U, ne] = x.useState(!1),
      [$, me] = x.useState(!1),
      [ve, Re] = x.useState("ES"),
      [oe, re] = x.useState(!1),
      ge = x.useRef(null),
      Ce = x.useRef(null),
      Se = x.useRef(null),
      [k, Q] = x.useState(!1),
      [ce, Ee] = x.useState(!1);
    x.useEffect(() => {
      var ot;
      const We =
        ((ot = f.pathname.split("/resources/")[1]) == null
          ? void 0
          : ot.split("?")[0]) || "";
      We !== h && g(We);
    }, [f.pathname, h]);
    const E = [
      { ref: ge, setter: I },
      { ref: Ce, setter: re },
      { ref: Se, setter: te },
    ];
    x.useEffect(() => {
      const We = (ot) => {
        E.forEach(({ ref: In, setter: sa }) => {
          In.current && !In.current.contains(ot.target) && sa(!1);
        });
      };
      return (
        document.addEventListener("mousedown", We),
        () => document.removeEventListener("mousedown", We)
      );
    }, []),
      x.useEffect(() => {
        const We = (ot) => {
          (ot.ctrlKey || ot.metaKey) &&
            ot.shiftKey &&
            ot.key.toLowerCase() === "r" &&
            (ot.preventDefault(), ne((In) => !In)),
            V && te(!1);
        };
        return (
          window.addEventListener("keydown", We),
          () => {
            window.removeEventListener("keydown", We);
          }
        );
      }, [V, U]);
    const z = async (We) => {
        (await o(We)) && te(!1);
      },
      K = () => _(!0),
      F = () => _(!1),
      de = () => Q(!0),
      ke = () => Q(!1),
      le = () => Ee(!0),
      nt = () => Ee(!1),
      [je, lt] = x.useState(null);
    x.useEffect(() => {
      a && a.id
        ? ei(a.id)
            .then((We) => {
              lt(We || null);
            })
            .catch((We) => {
              console.error("Error fetching role:", We), lt(null);
            })
        : lt(null);
    }, [a]);
    const Ht = je ? ["superadmin", "admin", "mentor"].includes(je) : !1,
      dn = async () => {
        if (!v) {
          A(!0);
          return;
        }
        H(!0);
        try {
          await n(), _(!1);
        } catch {
          A(!0);
        }
        H(!1);
      },
      Sn = () => {
        C(!v), A(!1);
      };
    return p.jsxs("header", {
      className: "hidden lg:flex py-4 px-6 items-center justify-between",
      children: [
        p.jsx(ul, {
          to: "/",
          children: p.jsx("img", { src: f_, alt: "logo", width: "116px" }),
        }),
        p.jsxs("div", {
          className: "flex items-center gap-[6px]",
          children: [
            Ht &&
              p.jsx(jn, {
                onClick: de,
                icon: h_,
                variant: "icon",
                text: "Añadir Usuario",
              }),
            p.jsxs("div", {
              className: "relative",
              ref: Ce,
              children: [
                p.jsxs(jn, {
                  variant: "custom",
                  className:
                    "inline-flex items-center justify-center h-[41px] px-4 text-[#808080] border-2 rounded-[10px] border-white bg-white hover:bg-[#dcdcdc] hover:border-[#808080] hover:scale-95 transition cursor-pointer",
                  onClick: () => re((We) => !We),
                  title: "Idioma",
                  children: [
                    p.jsx("span", { className: "mr-2", children: ve }),
                    p.jsx("img", {
                      src: ff,
                      alt: "arrow",
                      className: `w-4 h-4 transition-transform ${oe ? "rotate-180" : ""}`,
                    }),
                  ],
                }),
                oe &&
                  p.jsxs("div", {
                    className:
                      "absolute right-0 mt-2 w-[76px] bg-white border rounded-md shadow-lg z-50 py-1 text-center",
                    children: [
                      p.jsx("button", {
                        onClick: () => {
                          Re("ES"), re(!1);
                        },
                        className:
                          "py-1 text-sm text-[#4a4a4a] hover:bg-[#fcecec] transition w-full cursor-pointer",
                        children: "ES",
                      }),
                      p.jsx("button", {
                        onClick: () => {
                          Re("EN"), re(!1);
                        },
                        className:
                          "py-1 text-sm text-[#4a4a4a] hover:bg-[#fcecec] transition w-full cursor-pointer",
                        children: "EN",
                      }),
                    ],
                  }),
              ],
            }),
            a
              ? p.jsxs("div", {
                  className: "relative",
                  ref: ge,
                  children: [
                    p.jsxs("button", {
                      onClick: () => I((We) => !We),
                      title: a.displayName || "",
                      className:
                        "h-[41px] px-4 flex items-center gap-1 rounded-lg hover:bg-white border border-transparent hover:border-gray-300 transition cursor-pointer",
                      children: [
                        p.jsx("img", {
                          src: a.photoURL,
                          alt: "avatar",
                          className: "w-8 h-8 rounded-full",
                        }),
                        p.jsx("img", {
                          src: ff,
                          alt: "toggle dropdown",
                          className: `w-4 h-4 transition-transform ${B ? "rotate-180" : ""}`,
                        }),
                      ],
                    }),
                    B &&
                      p.jsxs("div", {
                        className:
                          "absolute right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-50 px-2 py-2 flex flex-col gap-2",
                        children: [
                          p.jsx(ec, { title: a.displayName, disabled: !0 }),
                          p.jsx("hr", {
                            className: "h-px -mx-2 bg-gray-300 border-0",
                          }),
                          U
                            ? p.jsxs("div", {
                                className: "relative",
                                ref: Se,
                                children: [
                                  p.jsx(ec, {
                                    title: je,
                                    onClick: () => te(!V),
                                    disabled: !1,
                                    icon: ff,
                                  }),
                                  V &&
                                    p.jsx(S_, {
                                      userRole: je,
                                      isChanging: i,
                                      onRoleChange: z,
                                    }),
                                ],
                              })
                            : p.jsx(ec, { title: je, disabled: !0 }),
                          p.jsx("hr", {
                            className: "h-px -mx-2 bg-gray-300 border-0",
                          }),
                          p.jsx(ec, {
                            title: "Cerrar sesión",
                            onClick: () => {
                              me(!0), I(!1);
                            },
                            icon: p_,
                          }),
                        ],
                      }),
                  ],
                })
              : p.jsx("div", {
                  children: p.jsx(jn, {
                    icon: m_,
                    variant: "icon",
                    text: "Iniciar sesión",
                    onClick: K,
                  }),
                }),
            m &&
              p.jsxs(op, {
                closeModal: F,
                title: "Inicio de sesión",
                children: [
                  p.jsx(Yg, { onClick: dn, isLoading: G }),
                  p.jsxs("section", {
                    className: "flex items-center gap-2 mt-8 font-medium",
                    children: [
                      p.jsxs("label", {
                        htmlFor: "terms",
                        children: [
                          p.jsx("input", {
                            name: "terms",
                            id: "terms",
                            type: "checkbox",
                            onChange: Sn,
                            checked: v,
                            className: "hidden",
                          }),
                          p.jsx("div", {
                            className: `w-5 h-5 flex items-center justify-center rounded border ${v ? "bg-[#B91879] border-[#B91879]" : "border-gray-400"}`,
                            children:
                              v &&
                              p.jsx("svg", {
                                className: "w-4 h-4 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: p.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M5 13l4 4L19 7",
                                }),
                              }),
                          }),
                        ],
                      }),
                      p.jsxs("p", {
                        children: [
                          "Acepto",
                          " ",
                          p.jsx("span", {
                            className: "underline cursor-pointer",
                            onClick: () => le(),
                            children: "términos legales",
                          }),
                        ],
                      }),
                    ],
                  }),
                  R &&
                    p.jsxs("div", {
                      className:
                        "text-red-500 text-[1rem] mt-8 text-center font-medium",
                      children: [
                        "Lo sentimos, no se ha podido iniciar sesión,",
                        p.jsx("br", {}),
                        " contacte con el administrador",
                      ],
                    }),
                ],
              }),
            $ &&
              p.jsxs(op, {
                closeModal: () => me(!1),
                title: "Confirmar salida",
                children: [
                  p.jsx("p", {
                    className: "text-center my-4",
                    children: "¿Estás segur@ que quieres cerrar sesión?",
                  }),
                  p.jsxs("div", {
                    className: "flex justify-center gap-4 mt-6",
                    children: [
                      p.jsx("button", {
                        onClick: () => {
                          r(), me(!1), u("/");
                        },
                        className:
                          "px-4 py-2 bg-[#b91879] text-white rounded-md hover:bg-[#98537c] cursor-pointer",
                        children: "Sí, salir",
                      }),
                      p.jsx("button", {
                        onClick: () => me(!1),
                        className:
                          "px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 cursor-pointer",
                        children: "Cancelar",
                      }),
                    ],
                  }),
                ],
              }),
            ce && p.jsx(w_, { closeModal: nt, title: "Términos Legales" }),
            k &&
              Ht &&
              p.jsx(__, {
                onClose: ke,
                userRole: je,
                userID: (a == null ? void 0 : a.id) ?? "",
              }),
          ],
        }),
        U &&
          p.jsx("div", {
            className:
              "fixed bottom-2 right-2 bg-yellow-200 text-xs rounded px-2 py-1 opacity-70 z-50",
            children: "Modo dev activo",
          }),
      ],
    });
  };
var hf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var cp;
function T_() {
  return (
    cp ||
      ((cp = 1),
      (function (a) {
        (function () {
          var n = {}.hasOwnProperty;
          function r() {
            for (var u = "", f = 0; f < arguments.length; f++) {
              var h = arguments[f];
              h && (u = o(u, i(h)));
            }
            return u;
          }
          function i(u) {
            if (typeof u == "string" || typeof u == "number") return u;
            if (typeof u != "object") return "";
            if (Array.isArray(u)) return r.apply(null, u);
            if (
              u.toString !== Object.prototype.toString &&
              !u.toString.toString().includes("[native code]")
            )
              return u.toString();
            var f = "";
            for (var h in u) n.call(u, h) && u[h] && (f = o(f, h));
            return f;
          }
          function o(u, f) {
            return f ? (u ? u + " " + f : u + f) : u;
          }
          a.exports
            ? ((r.default = r), (a.exports = r))
            : (window.classNames = r);
        })();
      })(hf)),
    hf.exports
  );
}
var A_ = T_();
const zr = Df(A_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N_ = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  k_ = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, i) =>
      i ? i.toUpperCase() : r.toLowerCase(),
    ),
  up = (a) => {
    const n = k_(a);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  $g = (...a) =>
    a
      .filter((n, r, i) => !!n && n.trim() !== "" && i.indexOf(n) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var R_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O_ = x.forwardRef(
  (
    {
      color: a = "currentColor",
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: u,
      iconNode: f,
      ...h
    },
    g,
  ) =>
    x.createElement(
      "svg",
      {
        ref: g,
        ...R_,
        width: n,
        height: n,
        stroke: a,
        strokeWidth: i ? (Number(r) * 24) / Number(n) : r,
        className: $g("lucide", o),
        ...h,
      },
      [
        ...f.map(([m, _]) => x.createElement(m, _)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vr = (a, n) => {
  const r = x.forwardRef(({ className: i, ...o }, u) =>
    x.createElement(O_, {
      ref: u,
      iconNode: n,
      className: $g(`lucide-${N_(up(a))}`, `lucide-${a}`, i),
      ...o,
    }),
  );
  return (r.displayName = up(a)), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D_ = [
    [
      "path",
      {
        d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
        key: "1fy3hk",
      },
    ],
  ],
  oh = vr("bookmark", D_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M_ = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  j_ = vr("calendar", M_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L_ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Of = vr("chevron-down", L_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U_ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  B_ = vr("chevron-up", U_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z_ = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }],
  ],
  I_ = vr("circle-play", z_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H_ = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  V_ = vr("message-circle", H_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z_ = [
    [
      "path",
      {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g",
      },
    ],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2",
      },
    ],
  ],
  Fg = vr("square-pen", Z_);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q_ = [
    [
      "path",
      {
        d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "14u9p9",
      },
    ],
  ],
  P_ = vr("triangle", q_),
  G_ =
    "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.7557%2015.6163L12.4577%2011.3503C13.4738%2010.1129%2014.0267%208.57939%2014.0267%206.96179C14.0267%205.10225%2013.2972%203.35396%2011.9726%202.03914C10.6477%200.724129%208.88634%200%207.01312%200C5.13994%200%203.37833%200.724129%202.054%202.03889C0.729285%203.35364%200%205.10183%200%206.96153C0%208.82081%200.729285%2010.569%202.05413%2011.8842C3.37833%2013.1992%205.13997%2013.9232%207.01325%2013.9232C8.64305%2013.9232%2010.1879%2013.3743%2011.4346%2012.3657L15.7328%2016.6321C15.8738%2016.772%2016.0593%2016.8421%2016.2443%2016.8421C16.4292%2016.8421%2016.6148%2016.7722%2016.7558%2016.6321C17.0386%2016.3514%2017.0386%2015.8968%2016.756%2015.6164L16.7557%2015.6163ZM3.07696%2010.8684C2.02541%209.82467%201.44652%208.4373%201.44652%206.96146C1.44652%205.48567%202.02554%204.09826%203.07696%203.05451C4.12851%202.01077%205.52626%201.43617%207.01312%201.43617C8.49995%201.43617%209.89773%202.0109%2010.9493%203.05451C12.0008%204.098%2012.5796%205.48551%2012.5796%206.96114C12.5796%208.43678%2012.001%209.82409%2010.9493%2010.8681C9.8976%2011.912%208.49999%2012.4867%207.01312%2012.4867C5.52626%2012.4867%204.12851%2011.9117%203.07696%2010.8682V10.8684Z'%20fill='%23808080'/%3e%3c/svg%3e",
  Y_ = ({ onSearch: a, disabled: n, resetTrigger: r }) => {
    const [i, o] = x.useState(""),
      u = (f) => {
        const h = f.target.value;
        o(h), a(h);
      };
    return (
      x.useEffect(() => {
        n && o("");
      }, [n]),
      x.useEffect(() => {
        o("");
      }, [r]),
      p.jsxs("div", {
        className: "relative mr-4",
        children: [
          p.jsx("input", {
            type: "text",
            placeholder: "Buscar recurso",
            className: `max-w-[200px] bg-white pl-10 pr-4 py-2 border border-gray-300 font-semibold text-base rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`,
            value: i,
            onChange: u,
            disabled: n,
          }),
          p.jsx("div", {
            className: "absolute left-3 top-1/2 transform -translate-y-1/2",
            children: p.jsx("img", {
              src: G_,
              alt: "Buscar",
              className: "h-5 w-5 text-gray-500",
            }),
          }),
        ],
      })
    );
  },
  $_ = () => {
    const a = un(),
      n = a.pathname,
      [r] = Zf(),
      i = Ua(),
      [o] = x.useState(""),
      u = a.pathname === "/",
      { user: f } = Jt(),
      h = (_) => {
        const v = new URLSearchParams(r);
        v.set("search", _), i(`?${v.toString()}`);
      },
      g = () => {
        i("/resources/add");
      },
      m = (_) => n === _;
    return p.jsxs("aside", {
      className: "flex flex-col px-6 lg:w-56",
      children: [
        p.jsx(Y_, { onSearch: h, disabled: u, resetTrigger: o }),
        f &&
          p.jsxs(p.Fragment, {
            children: [
              p.jsxs("section", {
                className: "py-6",
                children: [
                  p.jsx("p", {
                    className: "pb-3 font-bold text-lg",
                    children: "Mis recursos",
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-3 py-1",
                    children: [
                      p.jsx(oh, { size: 25 }),
                      p.jsx(ul, {
                        to: "/resources/bookmarks",
                        className: zr("transition-colors", {
                          "!text-[var(--color-primary)] !font-bold": m(
                            "/resources/bookmarks",
                          ),
                          "text-gray-700": !m("/resources/bookmarks"),
                        }),
                        children: "Guardados",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-3 py-1",
                    children: [
                      p.jsx(Fg, { size: 25 }),
                      p.jsx(ul, {
                        to: "/resources/my-resources",
                        className: zr("transition-colors", {
                          "!text-[var(--color-primary)] !font-bold": m(
                            "/resources/my-resources",
                          ),
                          "text-gray-700": !m("/resources/my-resources"),
                        }),
                        children: "Creados",
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("section", {
                children: p.jsx(jn, {
                  type: "button",
                  variant: "primary",
                  onClick: g,
                  children: "Crear recurso",
                }),
              }),
            ],
          }),
      ],
    });
  },
  F_ = ({ resources: a, resourceTypes: n }) => {
    var R, A;
    const { category: r } = Bf(),
      [i, o] = Zf(),
      u = ((R = i.get("resourceTypes")) == null ? void 0 : R.split(",")) || [
        n[0],
      ],
      f = i.get("search") || "",
      h = ((A = i.get("tags")) == null ? void 0 : A.split(",")) || [],
      [g, m] = x.useState(u),
      [_, v] = x.useState(h);
    return (
      x.useEffect(() => {
        r && m([...n]);
      }, [r, n]),
      x.useEffect(() => {
        const G = new URLSearchParams();
        g.length > 0 &&
          g.some((H) => H.trim() !== "") &&
          G.set("resourceTypes", g.join(",")),
          !G.has("search") && f && G.set("search", f),
          _.length > 0 && G.set("tags", _.join(",")),
          o(G, { replace: !0 });
      }, [g, f, _, o]),
      {
        filteredResources: x.useMemo(
          () =>
            !a || !r
              ? []
              : a.filter((G) => {
                  const H = !r || G.category === r,
                    B = g.length === 0 || g.some((te) => G.type === te),
                    I = !f || G.title.toLowerCase().includes(f.toLowerCase()),
                    V =
                      _.length === 0 ||
                      _.some((te) => {
                        var U;
                        return (U = G.tags) == null
                          ? void 0
                          : U.some(
                              (ne) =>
                                (typeof ne == "string" ? ne : ne.name) === te,
                            );
                      });
                  return H && B && I && V;
                }),
          [a, r, g, f, _],
        ),
        selectedResourceTypes: g,
        setSelectedResourceTypes: m,
        selectedTags: _,
        setSelectedTags: v,
      }
    );
  },
  X_ = ({ resources: a }) => {
    const [n, r] = x.useState("recent"),
      [i, o] = x.useState(null),
      [u, f] = x.useState([]),
      [h, g] = x.useState([]);
    return (
      x.useEffect(() => {
        if (!a || a.length === 0) {
          f([]), g([]);
          return;
        }
        const m = (R) => {
            if (!R) return { timestamp: 0, year: 0 };
            if (R instanceof Date)
              return { timestamp: R.getTime(), year: R.getFullYear() };
            const A = String(R).trim();
            if (!isNaN(Date.parse(A))) {
              const ne = new Date(A);
              return { timestamp: ne.getTime(), year: ne.getFullYear() };
            }
            const G = {
                enero: 0,
                febrero: 1,
                marzo: 2,
                abril: 3,
                mayo: 4,
                junio: 5,
                julio: 6,
                agosto: 7,
                septiembre: 8,
                octubre: 9,
                noviembre: 10,
                diciembre: 11,
              },
              H = /(\d{1,2}) (\w+) de (\d{4})/,
              B = A.match(H);
            if (!B) return { timestamp: 0, year: 0 };
            const [, I, V, te] = B,
              U = G[V.toLowerCase()] ?? 0;
            return {
              timestamp: new Date(Number(te), U, Number(I)).getTime(),
              year: Number(te),
            };
          },
          _ = a.map((R) => ({
            ...R,
            parsedDate: m(R.created_at).timestamp,
            parsedYear: m(R.created_at).year,
          })),
          v = new Set(_.map((R) => R.parsedYear));
        g([...v].sort((R, A) => A - R));
        let C = [..._];
        n === "recent" && C.sort((R, A) => A.parsedDate - R.parsedDate),
          n === "oldest" && C.sort((R, A) => R.parsedDate - A.parsedDate),
          n === "likes" &&
            C.sort((R, A) => (A.like_count || 0) - (R.like_count || 0)),
          i !== null && (C = C.filter((R) => R.parsedYear === i)),
          f([...C]);
      }, [a, n, i]),
      {
        sortedResources: u,
        sortOption: n,
        setSortOption: r,
        selectedYear: i,
        setSelectedYear: o,
        availableYears: h,
      }
    );
  },
  dp = async (a) => {
    const r = new AbortController().signal,
      i = `${Wt}${zn.bookmarks.get}/${a}`;
    try {
      const o = await fetch(i, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        signal: r,
      });
      return o.ok ? await o.json() : [];
    } catch {
      return [];
    }
  },
  Q_ = async (a, n) => {
    const i = new AbortController().signal,
      o = `${Wt}${zn.bookmarks.post}`;
    try {
      const u = await fetch(o, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github_id: a, resource_id: n }),
        signal: i,
      });
      if (!u.ok) {
        const h = await u.json().catch(() => null);
        throw (
          (console.error("Error data:", h),
          new Error(`Failed to create bookmark: ${JSON.stringify(h)}`))
        );
      }
      return await u.json();
    } catch (u) {
      throw (console.error("Error creating bookmark:", u), u);
    }
  },
  K_ = async (a, n) => {
    const i = new AbortController().signal,
      o = `${Wt}${zn.bookmarks.delete}`;
    try {
      if (
        !(
          await fetch(o, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ github_id: a, resource_id: n }),
            signal: i,
          })
        ).ok
      )
        throw new Error("Failed to delete bookmark");
      return !0;
    } catch (u) {
      throw (console.error("Error deleting bookmark:", u), u);
    }
  },
  fp = { SUPERADMIN: "superadmin", STUDENT: "student" },
  J_ = [fp.SUPERADMIN, fp.STUDENT],
  kc = (a) => a != null && J_.includes(a);
function W_() {
  const { user: a } = Jt();
  return {
    toggleBookmark: async (r, i, o) => {
      if (!a || !kc(a.role)) return;
      const u = i.some((f) => f.id === r.id);
      try {
        o((f) => {
          if (u) return f.filter((h) => h.id !== r.id);
          {
            const h = {
              id: r.id,
              github_id: a.id,
              title: r.title,
              description: r.description,
              url: r.url,
              created_at: new Date().toISOString(),
            };
            return [...f, h].sort(
              (m, _) =>
                new Date(_.created_at).getTime() -
                new Date(m.created_at).getTime(),
            );
          }
        }),
          u ? await K_(a.id, r.id) : await Q_(a.id, r.id);
      } catch (f) {
        throw (console.error("Error toggling bookmark:", f), f);
      }
    },
  };
}
const Xg = x.createContext({
    resources: [],
    isLoading: !0,
    bookmarkedResources: [],
    loadingBookmarks: !0,
    isBookmarked: () => !1,
    toggleBookmark: () => {},
    getBookmarkCount: () => 0,
    refreshResources: () => {},
    updateResourceLikeCount: () => {},
  }),
  $r = () => x.useContext(Xg),
  ex = ({ children: a }) => {
    const { user: n } = Jt(),
      [r, i] = x.useState([]),
      [o, u] = x.useState(!0),
      [f, h] = x.useState([]),
      [g, m] = x.useState(!0),
      [_, v] = x.useState({});
    x.useEffect(() => {
      (async () => {
        try {
          const V = await ap();
          i(V);
          const te = {};
          V.forEach((U) => {
            U.id &&
              U.bookmark_count !== void 0 &&
              (te[U.id] = U.bookmark_count);
          }),
            v(te);
        } catch (V) {
          console.error("Error loading resources, using mock.", V);
          const te = Zg.resources;
          i(te);
          const U = {};
          te.forEach((ne) => {
            ne.id &&
              ne.bookmark_count !== void 0 &&
              (U[ne.id] = ne.bookmark_count);
          }),
            v(U);
        } finally {
          u(!1);
        }
      })();
    }, []);
    const C = async () => {
        try {
          const I = await ap();
          i(I);
        } catch (I) {
          console.error("Error refreshing resources:", I);
        }
      },
      R = (I, V) => {
        i((te) => te.map((U) => (U.id === I ? { ...U, like_count: V } : U)));
      };
    x.useEffect(() => {
      if (!n || r.length === 0) {
        h([]), m(!1);
        return;
      }
      (async () => {
        try {
          m(!0);
          const V = await dp(n.id.toString()),
            U = r
              .filter((ne) => V.some(($) => $.resource_id === ne.id))
              .map((ne) => {
                const $ = V.find((me) => me.resource_id === ne.id);
                return {
                  id: ne.id,
                  github_id: ($ == null ? void 0 : $.github_id) || n.id,
                  title: ne.title,
                  description: ne.description,
                  url: ne.url,
                  created_at:
                    ($ == null ? void 0 : $.created_at) ||
                    new Date().toISOString(),
                };
              })
              .sort(
                (ne, $) =>
                  new Date($.created_at).getTime() -
                  new Date(ne.created_at).getTime(),
              );
          h(U);
        } catch (V) {
          console.error("Error fetching bookmarks:", V), h([]);
        } finally {
          m(!1);
        }
      })();
    }, [n]);
    const { toggleBookmark: A } = W_(),
      G = async (I) => {
        if (!n || !kc(n.role)) return;
        const V = H(I);
        try {
          v((te) => {
            const U = I.id,
              ne = te[U] || 0;
            return { ...te, [U]: V ? ne - 1 : ne + 1 };
          }),
            await A(I, f, h);
        } catch (te) {
          if (
            (console.error("Error in toggleBookmark:", te),
            v((U) => {
              const ne = I.id,
                $ = U[ne] || 0;
              return { ...U, [ne]: V ? $ + 1 : $ - 1 };
            }),
            n && r.length > 0)
          )
            try {
              const U = await dp(n.id.toString()),
                ne = r
                  .filter(($) => U.some((me) => me.resource_id === $.id))
                  .map(($) => {
                    const me = U.find((ve) => ve.resource_id === $.id);
                    return {
                      id: $.id,
                      github_id: (me == null ? void 0 : me.github_id) || n.id,
                      title: $.title,
                      description: $.description,
                      url: $.url,
                      created_at:
                        (me == null ? void 0 : me.created_at) ||
                        new Date().toISOString(),
                    };
                  });
              h(ne);
            } catch (U) {
              console.error("Error recovering bookmark state:", U);
            }
        }
      },
      H = (I) => f.some((V) => V.id === I.id),
      B = (I) => _[I] || 0;
    return p.jsx(Xg.Provider, {
      value: {
        resources: r,
        isLoading: o,
        bookmarkedResources: f,
        loadingBookmarks: g,
        isBookmarked: H,
        toggleBookmark: G,
        getBookmarkCount: B,
        refreshResources: C,
        updateResourceLikeCount: R,
      },
      children: a,
    });
  },
  tx = ({
    resourceTypes: a,
    selectedTags: n,
    setSelectedTags: r,
    selectedResourceTypes: i,
    setSelectedResourceTypes: o,
  }) => {
    const { category: u } = Bf(),
      [f, h] = x.useState(null),
      { getTagsByCategory: g } = Pg();
    x.useEffect(() => {
      u !== f && (o([...a]), r([]), h(u ?? null)),
        i.length === 0 && a.length > 0 && o([...a]);
    }, [u, f, a, i, o, r]);
    const _ = g(u || null).map((R) => R.name),
      v = ["Todos", ..._],
      C = (R) => {
        r(
          R === "Todos"
            ? []
            : n.includes(R)
              ? n.filter((A) => A !== R)
              : [...n.filter((A) => A !== "Todos"), R],
        );
      };
    return p.jsx("div", {
      className: "mt-6",
      children: p.jsxs("div", {
        className: "mb-6",
        children: [
          p.jsx("h3", {
            className: "text-lg font-bold mb-3",
            children: "Temas",
          }),
          v.map((R) => {
            const A = (R === "Todos" && n.length === 0) || n.includes(R);
            return p.jsxs(
              "label",
              {
                className: "flex items-center gap-2 mb-2 cursor-pointer",
                children: [
                  p.jsx("input", {
                    type: "checkbox",
                    checked: A,
                    onChange: () => C(R),
                    className: "hidden",
                  }),
                  p.jsx("div", {
                    className: `w-5 h-5 flex items-center justify-center rounded border ${A ? "bg-[#B91879] border-[#B91879]" : "border-gray-400"}`,
                    children:
                      A &&
                      p.jsx("svg", {
                        className: "w-4 h-4 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: p.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M5 13l4 4L19 7",
                        }),
                      }),
                  }),
                  p.jsx("span", {
                    className:
                      "text-gray-800 max-w-[120px] truncate inline-block",
                    title: R,
                    children: R,
                  }),
                ],
              },
              R,
            );
          }),
          _.length === 0 &&
            p.jsx("p", {
              className: "text-sm text-gray-500",
              children: "No hay temas disponibles.",
            }),
        ],
      }),
    });
  },
  nx = ({ setSortOption: a, sortOption: n }) =>
    p.jsxs("div", {
      className: "flex gap-4",
      children: [
        p.jsxs("button", {
          onClick: () => a("likes"),
          className: `flex items-center gap-1 transition-colors duration-200 ${n === "likes" ? "font-bold text-black" : "text-gray-500"}`,
          children: ["Votos", n === "likes" && p.jsx(Of, { size: 16 })],
        }),
        p.jsxs("button", {
          onClick: () => a("recent"),
          className: `flex items-center gap-1 transition-colors duration-200 ${n === "recent" ? "font-bold text-black" : "text-gray-500"}`,
          children: ["Fecha", n === "recent" && p.jsx(Of, { size: 16 })],
        }),
      ],
    });
function Qg(a) {
  var n,
    r,
    i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var o = a.length;
      for (n = 0; n < o; n++)
        a[n] && (r = Qg(a[n])) && (i && (i += " "), (i += r));
    } else for (r in a) a[r] && (i && (i += " "), (i += r));
  return i;
}
function ax() {
  for (var a, n, r = 0, i = "", o = arguments.length; r < o; r++)
    (a = arguments[r]) && (n = Qg(a)) && (i && (i += " "), (i += n));
  return i;
}
const rx =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none rounded-md",
  sx = {
    primary: "bg-[#B91879] text-white hover:bg-[#a1156a]",
    secondary:
      "border border-gray-300 text-gray-800 bg-white hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
    icon: "p-2 rounded-full hover: bg-gray-200",
  },
  ix = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  },
  lx = ({
    children: a,
    variant: n = "primary",
    size: r = "md",
    className: i = "",
    disabled: o = !1,
    onClick: u,
    type: f = "button",
    icon: h,
  }) =>
    p.jsxs("button", {
      className: ax(rx, sx[n], ix[r], i, o && "opacity-60 cursor-not-allowed"),
      onClick: u,
      type: f,
      disabled: o,
      children: [h && p.jsx("span", { className: "mr-2", children: h }), a],
    }),
  ox = ({ setShowFilters: a, showFilters: n }) =>
    p.jsxs(lx, {
      onClick: () => a(!n),
      variant: "primary",
      size: "md",
      className: "sm:hidden flex items-center gap-2",
      children: [
        p.jsx("span", { children: "Filtrar" }),
        n
          ? p.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-5 h-5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: p.jsx("polyline", { points: "18 15 12 9 6 15" }),
            })
          : p.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-5 h-5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: p.jsx("polyline", { points: "6 9 12 15 18 9" }),
            }),
      ],
    }),
  cx = ({ marked: a = !1 }) =>
    p.jsx("div", {
      id: "bookmarkIcon",
      "data-testid": "bookmarkIcon",
      className: "flex items-center justify-start gap-2 max-h-12",
      children: p.jsx(oh, {
        size: 16,
        fill: a ? "black" : "none",
        color: a ? "black" : "#808080",
        "aria-label": a
          ? "Guardado en la lista de lectura"
          : "No guardado en la lista de lectura",
      }),
    }),
  ux = ({ active: a = !1 }) =>
    p.jsx(P_, {
      size: 16,
      className: `${a ? "text-green-custom fill-green-custom" : "text-black"}`,
      "aria-label": a ? "Me gusta" : "",
    }),
  dx = async (a) => {
    const n = `${Wt}likes/${a}`;
    try {
      const r = await fetch(n);
      return r.ok ? await r.json() : [];
    } catch (r) {
      return console.error("Error fetching likes:", r), [];
    }
  },
  fx = async (a, n) => {
    const r = `${Wt}likes`;
    try {
      const i = await fetch(r, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github_id: a, resource_id: n }),
      });
      return i.ok ? await i.json() : null;
    } catch (i) {
      return console.error("Error creating like:", i), null;
    }
  },
  hx = async (a, n) => {
    const r = `${Wt}likes`;
    try {
      return (
        await fetch(r, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ github_id: a, resource_id: n }),
        })
      ).ok;
    } catch (i) {
      return console.error("Error deleting like:", i), !1;
    }
  },
  Kg = x.createContext({
    likedResourceIds: [],
    refreshLikes: () => {},
    setLikedResourceIds: () => {},
  }),
  mx = ({ children: a }) => {
    const [n, r] = x.useState([]),
      { user: i } = Jt(),
      o = async () => {
        if (!(i != null && i.id)) return;
        const h = (await dx(i.id)).map((g) => g.resource_id);
        r(h);
      };
    x.useEffect(() => {
      o();
    }, [i == null ? void 0 : i.id]);
    const u = { likedResourceIds: n, refreshLikes: o, setLikedResourceIds: r };
    return p.jsx(Kg.Provider, { value: u, children: a });
  },
  px = () => {
    const { user: a } = Jt();
    return {
      toggleLike: x.useCallback(
        async (r, i) => {
          if (!a || a.role !== "student" || typeof a.id != "number")
            return console.warn("User not allowed to vote."), { success: !1 };
          const o = a.id;
          try {
            return i
              ? { success: await hx(o, r), action: "deleted" }
              : { success: !!(await fx(o, r)), action: "created" };
          } catch (u) {
            return console.error("Toggle error:", u), { success: !1 };
          }
        },
        [a],
      ),
    };
  };
function gx(a) {
  const { likedResourceIds: n, setLikedResourceIds: r } = x.useContext(Kg),
    { toggleLike: i } = px(),
    { user: o } = Jt(),
    { updateResourceLikeCount: u } = $r(),
    f = (o == null ? void 0 : o.role) == "student",
    h = Number(a.id),
    [g, m] = x.useState(a.like_count ?? 0),
    [_, v] = x.useState(!1);
  x.useEffect(() => {
    _ || m(a.like_count ?? 0);
  }, [n, h, _, a.like_count]);
  const C = (A) => {
    m((G) => G + (A ? -1 : 1)), r(n);
  };
  return {
    voteCount: g,
    handleLike: async () => {
      if (!f || _) return;
      const A = n.includes(h),
        G = g + (A ? -1 : 1);
      m(G), v(!0);
      const H = A ? n.filter((B) => B !== h) : [...n, h];
      r(H);
      try {
        const B = await i(h, A);
        B != null && B.success ? await u(h, G) : C(A);
      } catch (B) {
        console.error("Error toggling like:", B), C(A);
      } finally {
        v(!1);
      }
    },
    disabled: !f,
    isLikedByUser: n.includes(h),
  };
}
const ch = ({ resource: a, isBookmarked: n, toggleBookmark: r }) => {
    const {
        title: i,
        description: o,
        type: u,
        created_at: f,
        comment_count: h,
      } = a,
      { user: g } = Jt(),
      { voteCount: m, handleLike: _, disabled: v, isLikedByUser: C } = gx(a),
      { getBookmarkCount: R } = $r(),
      A = a.id ? R(a.id) : 0,
      G = g && kc(g.role),
      H = () => {
        !g || !kc(g.role) || (r && r(a));
      },
      B =
        typeof f == "string" && isNaN(Date.parse(f))
          ? f
          : f
            ? new Date(f).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "Fecha desconocida";
    return p.jsxs("div", {
      className: `bg-white rounded-2xl shadow-sm border border-gray-400 p-6 flex justify-between items-center gap-2 w-full h-[109px] hover:bg-gray-100
`,
      children: [
        p.jsxs("div", {
          className: "flex flex-col space-y-2 overflow-hidden",
          children: [
            p.jsxs("a", {
              href: a.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "block space-y-2",
              children: [
                p.jsx("h3", {
                  className: "text-lg font-bold text-black line-clamp-1",
                  children: i,
                }),
                p.jsx("p", {
                  className: "text-gray-500 text-sm line-clamp-1",
                  children: o,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "flex items-center gap-4 text-gray-500 text-sm",
              children: [
                p.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [p.jsx(I_, { size: 16 }), u],
                }),
                p.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [
                    p.jsx("div", {
                      onClick: H,
                      className: `${G ? "cursor-pointer" : "cursor-not-allowed opacity-70"}`,
                      title: g
                        ? G
                          ? void 0
                          : "No tienes permiso para guardar recursos. Contacta con un admin."
                        : "Inicia sesión para guardar recursos",
                      children: p.jsx(cx, { marked: n }),
                    }),
                    A,
                  ],
                }),
                p.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [p.jsx(j_, { size: 16 }), B],
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: "flex items-center gap-4 shrink-0",
          children: [
            p.jsxs("div", {
              className: `flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg px-4 py-1 hover:border-2 hover:border-[#c20087]
`,
              children: [
                p.jsx(V_, { size: 16, className: "text-black mb-1" }),
                p.jsx("span", {
                  className: "text-sm font-medium leading-none",
                  children: h ?? 0,
                }),
              ],
            }),
            p.jsxs("div", {
              onClick: () => !v && _(),
              className: `flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg px-4 py-1 hover:border-2 hover:border-[#c20087] ${v ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`,
              children: [
                p.jsx(ux, { active: C }),
                p.jsx("span", {
                  className: `text-sm font-medium ${C ? "text-green-custom" : "text-black"}`,
                  children: m,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  yx = ({ resources: a, category: n }) => {
    const [r, i] = x.useState(!1),
      [o, u] = x.useState(new Set()),
      f = un(),
      h = Ua(),
      [g] = Zf(),
      m = f.pathname,
      _ = g.get("search") || "",
      v = x.useMemo(() => {
        const oe = m.split("/");
        return oe[1] === "resources" && oe[2]
          ? decodeURIComponent(oe[2])
          : n
            ? String(n)
            : void 0;
      }, [m, n]);
    x.useEffect(() => {
      v && u(new Set([v]));
    }, [v]);
    const C = x.useMemo(
        () =>
          a != null && a.length
            ? v
              ? a.filter((oe) => oe.category === v)
              : a
            : [],
        [a, v],
      ),
      {
        filteredResources: R,
        selectedResourceTypes: A,
        setSelectedResourceTypes: G,
        selectedTags: H,
        setSelectedTags: B,
      } = F_({ resources: C, resourceTypes: oc }),
      {
        sortedResources: I,
        setSortOption: V,
        sortOption: te,
      } = X_({ resources: R }),
      { isBookmarked: U, toggleBookmark: ne } = $r(),
      $ = x.useMemo(() => {
        if (!_) return I;
        const oe = _.toLowerCase();
        return I.filter((re) => re.title.toLowerCase().includes(oe));
      }, [I, _]),
      me = x.useCallback((oe) => m === oe, [m]),
      ve = x.useCallback(
        (oe) => {
          const re = `/resources/${encodeURIComponent(oe)}`,
            ge = v === oe,
            Ce = o.has(oe);
          ge ? u(Ce ? new Set() : new Set([oe])) : h(re, { replace: !1 });
        },
        [v, o, h],
      ),
      Re = x.useCallback(
        (oe, re) => {
          const ge = `/resources/${encodeURIComponent(oe.label)}`,
            Ce = me(ge),
            Se = o.has(oe.label),
            k = oe.icon;
          return p.jsx(
            "div",
            {
              className: "mb-2",
              children: p.jsxs("div", {
                className: "overflow-hidden",
                children: [
                  p.jsxs("div", {
                    className: zr(
                      "flex items-center justify-between p-1 cursor-pointer transition-colors select-none",
                      { "text-[var(--color-primary)]": Ce, "": !Ce },
                    ),
                    onClick: () => ve(oe.label),
                    children: [
                      p.jsxs("div", {
                        className: "flex items-center space-x-3 flex-1",
                        children: [
                          p.jsx(k, {
                            className: zr("w-5 h-5", {
                              "text-[var(--color-primary)]": Ce,
                              "text-gray-500": !Ce,
                            }),
                          }),
                          p.jsx("span", {
                            className: zr("transition-colors font-medium", {
                              "text-[var(--color-primary)]": Ce,
                              "text-gray-700": !Ce,
                            }),
                            children: oe.label,
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        className: "p-1 hover:bg-black/10 rounded",
                        children: Se
                          ? p.jsx(B_, {
                              className: zr("w-4 h-4", {
                                "text-[var(--color-primary)]": Ce,
                                "text-gray-400": !Ce,
                              }),
                            })
                          : p.jsx(Of, {
                              className: zr("w-4 h-4", {
                                "text-[var(--color-primary)]": Ce,
                                "text-gray-400": !Ce,
                              }),
                            }),
                      }),
                    ],
                  }),
                  Se &&
                    p.jsx("div", {
                      className: "px-3 pb-3",
                      children: p.jsx("div", {
                        className: "pt-1",
                        children: p.jsx(tx, {
                          resourceTypes: oc,
                          selectedResourceTypes: A,
                          setSelectedResourceTypes: G,
                          selectedTags: H,
                          setSelectedTags: B,
                        }),
                      }),
                    }),
                ],
              }),
            },
            re,
          );
        },
        [me, o, ve, A, G, H, B],
      );
    return a != null && a.length
      ? p.jsx(yc, {
          children: p.jsxs("div", {
            className:
              "flex flex-col gap-6 py-3 lg:gap-12 xl:gap-20 lg:flex-row",
            children: [
              p.jsxs("div", {
                className: "hidden sm:block",
                children: [
                  p.jsx("h2", {
                    className: "text-[26px] font-bold mb-2",
                    children: "Filtros",
                  }),
                  p.jsxs("div", {
                    className: "mb-6",
                    children: [
                      p.jsx("h3", {
                        className: "text-lg font-bold mb-3",
                        children: "Categorías",
                      }),
                      p.jsx("div", {
                        className: "space-y-2",
                        children: Nc.map((oe, re) => Re(oe, re)),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "mb-6",
                    children: [
                      p.jsx("h3", {
                        className: "text-lg font-bold mb-3",
                        children: "Tipos de recursos",
                      }),
                      p.jsx("div", {
                        className: "space-y-2",
                        children: oc.map((oe) => {
                          const re = A.includes(oe);
                          return p.jsxs(
                            "label",
                            {
                              className:
                                "flex items-center gap-2 cursor-pointer",
                              children: [
                                p.jsx("input", {
                                  type: "checkbox",
                                  checked: re,
                                  onChange: () => {
                                    G(
                                      re
                                        ? A.filter((ge) => ge !== oe)
                                        : [...A, oe],
                                    );
                                  },
                                  className: "hidden",
                                }),
                                p.jsx("div", {
                                  className: `w-5 h-5 flex items-center justify-center rounded ${re ? "bg-[#B91879] border-[#B91879]" : "border-gray-400"}`,
                                  children:
                                    re &&
                                    p.jsx("svg", {
                                      className: "w-4 h-4 text-white",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: p.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M5 13l4 4L19 7",
                                      }),
                                    }),
                                }),
                                p.jsx("span", {
                                  className: "text-sm text-gray-800",
                                  children: oe,
                                }),
                              ],
                            },
                            oe,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "lg:flex-1",
                children: [
                  p.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      p.jsxs("h2", {
                        className: "text-[26px] font-bold",
                        children: ["Recursos ", v || ""],
                      }),
                      p.jsx(nx, { setSortOption: V, sortOption: te }),
                      p.jsx(ox, { setShowFilters: i, showFilters: r }),
                    ],
                  }),
                  r &&
                    p.jsxs("div", {
                      className: "sm:hidden mt-4 p-4 bg-gray-100 rounded-lg",
                      children: [
                        p.jsx("h2", {
                          className: "text-2xl font-bold",
                          children: "Filtros",
                        }),
                        p.jsxs("div", {
                          className: "mb-6",
                          children: [
                            p.jsx("h3", {
                              className: "text-lg font-bold mb-3",
                              children: "Categorías",
                            }),
                            p.jsx("div", {
                              className: "space-y-2",
                              children: Nc.map((oe, re) => Re(oe, re)),
                            }),
                          ],
                        }),
                      ],
                    }),
                  $.length === 0
                    ? p.jsx("div", {
                        className: "flex flex-col gap-2 py-8",
                        children: p.jsx("div", {
                          className: "text-center py-8 text-gray-500",
                          children:
                            C.length === 0
                              ? "No hay recursos disponibles para esta categoría."
                              : "No se encontraron recursos que coincidan con tu búsqueda.",
                        }),
                      })
                    : p.jsx("ul", {
                        className: "flex flex-col gap-2 py-8",
                        children: $.map((oe) =>
                          p.jsx(
                            ch,
                            {
                              resource: oe,
                              isBookmarked: U(oe),
                              toggleBookmark: ne,
                            },
                            oe.id,
                          ),
                        ),
                      }),
                ],
              }),
            ],
          }),
        })
      : p.jsx(yc, {
          children: p.jsx("div", {
            className: "text-center py-8 text-gray-500",
            children: "No hay recursos disponibles.",
          }),
        });
  },
  vx = () => {
    const { resources: a, isLoading: n } = $r(),
      { category: r } = Bf(),
      i = Ua();
    return (
      x.useEffect(() => {
        r || i(`/resources/${Vg[0]}`);
      }, [r, i]),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(Ll, { title: `${r}` }),
          n
            ? p.jsx("div", { children: "Obteniendo los recursos..." })
            : p.jsx(yx, { resources: a, category: r }),
        ],
      })
    );
  },
  bx = ({ bookmarkedResources: a, toggleBookmark: n }) =>
    p.jsx("ul", {
      className: "flex flex-col gap-2 py-8",
      children: a.map((r) =>
        p.jsx(
          ch,
          { resource: r, isBookmarked: !0, toggleBookmark: () => n(r) },
          r.id,
        ),
      ),
    }),
  _x = () => {
    const {
        resources: a,
        isLoading: n,
        isBookmarked: r,
        toggleBookmark: i,
      } = $r(),
      o = a.filter((u) => r(u));
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(Ll, { title: "Recursos guardados en tu lista de lectura" }),
        n
          ? p.jsx("div", {
              className:
                "w-full max-w-screen-xl px-4 mx-auto py-10 text-center",
              children: "Obteniendo los recursos...",
            })
          : p.jsx("div", {
              className:
                "w-full max-w-screen-xl px-4 mx-auto grow lg:flex-1 gap-x-6 sm:bg-white lg:bg-transparent",
              children: p.jsx("div", {
                className:
                  "flex flex-col lg:flex-row lg:flex-grow lg:overflow-y-auto bg-white lg:rounded-xl px-4 lg:px-8 py-4 sm:py-6",
                children: p.jsx("div", {
                  className:
                    "lg:flex-1 overflow-y-auto h-[calc(100vh-90px)] px-4 py-6 lg:pl-8 xl:pl-6",
                  children: p.jsxs("div", {
                    className: "flex flex-col justify-between items-center",
                    children: [
                      p.jsx("h2", {
                        className: "text-[26px] font-bold text-center",
                        children: "Tu lista de lectura",
                      }),
                      o.length > 0
                        ? p.jsx(bx, {
                            bookmarkedResources: o,
                            toggleBookmark: (u) => i(u),
                          })
                        : p.jsx("div", {
                            className:
                              "w-full bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-6",
                            children: p.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                p.jsx(oh, {
                                  className: "h-5 w-5 text-yellow-500 mr-3",
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx("h3", {
                                      className:
                                        "text-lg font-medium text-yellow-800",
                                      children:
                                        "No has agregado ningún recurso a tu lista de lectura",
                                    }),
                                    p.jsx("p", {
                                      className: "text-yellow-700 mt-1",
                                      children:
                                        "Agrega recursos a tu lista de lectura para verlos aquí",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                    ],
                  }),
                }),
              }),
            }),
      ],
    });
  },
  xx = ({ myResources: a }) => {
    const { isBookmarked: n, toggleBookmark: r } = $r();
    return p.jsx("ul", {
      className: "flex flex-col gap-2 py-8",
      children: a.map((i) =>
        p.jsx(ch, { resource: i, isBookmarked: n(i), toggleBookmark: r }, i.id),
      ),
    });
  },
  Cx = () => {
    const { resources: a, isLoading: n } = $r(),
      { user: r } = Jt(),
      i = a.filter((o) => o.github_id === (r == null ? void 0 : r.id));
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx(Ll, { title: "Recursos que has creado" }),
        n
          ? p.jsx("div", {
              className:
                "w-full max-w-screen-xl px-4 mx-auto py-10 text-center",
              children: "Obteniendo los recursos...",
            })
          : p.jsx("div", {
              className:
                "w-full max-w-screen-xl px-4 mx-auto grow lg:flex-1 gap-x-6 sm:bg-white lg:bg-transparent",
              children: p.jsx("div", {
                className:
                  "flex flex-col lg:flex-row lg:flex-grow lg:overflow-y-auto bg-white lg:rounded-xl px-4 lg:px-8 py-4 sm:py-6",
                children: p.jsx("div", {
                  className:
                    "lg:flex-1 overflow-y-auto h-[calc(100vh-90px)] px-4 py-6 lg:pl-8 xl:pl-6",
                  children: p.jsxs("div", {
                    className: "flex flex-col justify-between items-center",
                    children: [
                      p.jsx("h2", {
                        className: "text-[26px] font-bold text-center",
                        children: "Recursos que has creado",
                      }),
                      i.length > 0
                        ? p.jsx(xx, { myResources: i })
                        : p.jsx("div", {
                            className:
                              "w-full bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-6",
                            children: p.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                p.jsx(Fg, {
                                  className: "h-5 w-5 text-yellow-500 mr-3",
                                }),
                                p.jsxs("div", {
                                  children: [
                                    p.jsx("h3", {
                                      className:
                                        "text-lg font-medium text-yellow-800",
                                      children: "No has creado ningún recurso",
                                    }),
                                    p.jsx("p", {
                                      className: "text-yellow-700 mt-1",
                                      children:
                                        "Crea recursos para verlos aquí",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                    ],
                  }),
                }),
              }),
            }),
      ],
    });
  },
  wx = async (a) => {
    const r = new AbortController().signal,
      i = `${Wt}${zn.technicaltests.create}`;
    try {
      const o = await fetch(i, { method: "POST", body: a, signal: r });
      if (!o.ok) {
        const u = await o.json();
        throw new Error(u.message || `Error ${o.status}: ${o.statusText}`);
      }
      return await o.json();
    } catch (o) {
      throw (
        (o instanceof DOMException && o.name === "AbortError"
          ? console.warn("Petición cancelada.")
          : console.error("Error al crear prueba técnica:", o),
        o)
      );
    }
  },
  Sx = () => {
    const [a, n] = x.useState(""),
      [r, i] = x.useState(""),
      [o, u] = x.useState("text"),
      [f, h] = x.useState(""),
      [g, m] = x.useState(null),
      _ = async () => {
        const v = new FormData();
        v.append("title", a),
          v.append("language", r),
          v.append("contentType", o),
          o === "text" ? v.append("content", f) : g && v.append("file", g);
        const C = `${Wt}${zn.technicaltests.create}`;
        console.log("Enviando a:", C);
        try {
          const R = await wx(v);
          console.log("Guardado:", R);
        } catch (R) {
          console.error("Error:", R);
        }
      };
    return p.jsxs("div", {
      className: "max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md",
      children: [
        p.jsx("h2", {
          className: "text-2xl font-semibold mb-4",
          children: "Nueva prueba técnica",
        }),
        p.jsx("label", {
          className: "block mb-2 font-medium",
          children: "Título *",
        }),
        p.jsx("input", {
          type: "text",
          value: a,
          onChange: (v) => n(v.target.value),
          className: "w-full p-2 border border-[#B91879] rounded mb-4",
          maxLength: 65,
        }),
        p.jsx("label", {
          className: "block mb-2 font-medium",
          children: "Lenguaje *",
        }),
        p.jsx("div", {
          className: "flex flex-wrap gap-3 mb-4",
          children: Nc.map((v) => {
            const C = v.icon;
            return p.jsxs(
              "button",
              {
                onClick: () => i(v.label),
                className: `flex items-center gap-2 px-4 py-2 rounded border ${r === v.label ? "border-2 border-[#B91879] bg-[#B91879] text-white" : "border-gray-300 bg-white text-black"}`,
                children: [
                  p.jsx(C, { className: "w-5 h-5" }),
                  p.jsx("span", {
                    className: "text-sm font-medium",
                    children: v.label,
                  }),
                ],
              },
              v.label,
            );
          }),
        }),
        p.jsx("label", {
          className: "block mb-2 font-medium",
          children: "Contenido de la prueba",
        }),
        p.jsxs("div", {
          className: "flex gap-2 mb-4",
          children: [
            p.jsx("button", {
              className: `px-4 py-2 rounded-full ${o === "text" ? "bg-[#B91879] text-white" : "bg-gray-200"}`,
              onClick: () => u("text"),
              children: "Texto",
            }),
            p.jsx("button", {
              className: `px-4 py-2 rounded-full ${o === "file" ? "bg-[#B91879] text-white" : "bg-gray-200"}`,
              onClick: () => u("file"),
              children: "Archivo",
            }),
          ],
        }),
        o === "text"
          ? p.jsx("textarea", {
              value: f,
              onChange: (v) => h(v.target.value),
              maxLength: 1e3,
              className:
                "w-full min-h-[200px] p-2 border border-[#B91879] rounded mb-4",
              placeholder: "Escribe la descripción de la prueba...",
            })
          : p.jsx("input", {
              type: "file",
              onChange: (v) => {
                var C;
                return m(
                  ((C = v.target.files) == null ? void 0 : C[0]) || null,
                );
              },
              className: "mb-4",
            }),
        p.jsxs("div", {
          className: "flex justify-end gap-4",
          children: [
            p.jsx("button", {
              className: "px-4 py-2 border border-gray-400 rounded",
              children: "Cancelar",
            }),
            p.jsx("button", {
              onClick: _,
              className: "px-4 py-2 bg-[#B91879] text-white rounded",
              children: "Publicar",
            }),
          ],
        }),
      ],
    });
  };
function Ex() {
  return p.jsx(Sx, {});
}
function Tx() {
  const a = un(),
    [n, r] = x.useState([]),
    i = async () => {
      try {
        const o = await fetch("/technical-tests-mock.json");
        if (!o) throw new Error("could not fetch tech-tests mock data");
        const u = await o.json();
        return console.log(u), u;
      } catch (o) {
        console.error("Error:", o);
      }
    };
  return (
    x.useEffect(() => {
      i().then((o) => {
        r((u) => [...u, ...o.data]);
      });
    }, [a.key]),
    p.jsx("div", {
      className: `
        flex
        flex-col
        m-4 p-4
        w-fit bg-gray-50
        rounded shadow-xl
        `,
      children: p.jsx("ul", {
        className: "",
        children: n.map((o) =>
          p.jsxs("li", { children: ["- ", o.title] }, o.id),
        ),
      }),
    })
  );
}
const Ax = () => {
    const { user: a } = Jt();
    return a ? p.jsx(s4, {}) : p.jsx(wp, { to: "/", replace: !0 });
  },
  Nx = () =>
    p.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        p.jsx(E_, {}),
        p.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:flex-grow",
          children: [
            p.jsx($_, {}),
            p.jsx("div", {
              className: "flex-grow",
              children: p.jsxs(l4, {
                children: [
                  p.jsx(Qn, { path: "/", element: p.jsx(Bb, {}) }),
                  p.jsx(Qn, {
                    path: "/resources/:category",
                    element: p.jsx(vx, {}),
                  }),
                  p.jsxs(Qn, {
                    element: p.jsx(Ax, {}),
                    children: [
                      p.jsx(Qn, {
                        path: "/resources/bookmarks",
                        element: p.jsx(_x, {}),
                      }),
                      p.jsx(Qn, {
                        path: "/resources/my-resources",
                        element: p.jsx(Cx, {}),
                      }),
                      p.jsx(Qn, {
                        path: "/resources/add",
                        element: p.jsx(d_, {}),
                      }),
                    ],
                  }),
                  p.jsx(Qn, {
                    path: "*",
                    element: p.jsx(wp, { to: "/", replace: !0 }),
                  }),
                  p.jsx(Qn, {
                    path: "/resources/technical-test/create",
                    element: p.jsx(Ex, {}),
                  }),
                  p.jsx(Qn, {
                    path: "/resources/technical-test/my-tech-tests",
                    element: p.jsx(Tx, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
mv.createRoot(document.getElementById("root")).render(
  p.jsx(jb, {
    children: p.jsx(x.StrictMode, {
      children: p.jsx(D4, {
        children: p.jsx(ex, {
          children: p.jsx(mx, {
            children: p.jsxs(e_, {
              children: [
                p.jsx(ip, {
                  richColors: !0,
                  toastOptions: {
                    style: { padding: "2rem", fontSize: "1rem" },
                  },
                }),
                p.jsx(Nx, {}),
                p.jsx(ip, {
                  richColors: !0,
                  toastOptions: {
                    style: { padding: "2rem", fontSize: "1rem" },
                  },
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  }),
);
