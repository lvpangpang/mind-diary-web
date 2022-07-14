"use strict";
(self.webpackChunkmind_diary_web = self.webpackChunkmind_diary_web || []).push([
  [693],
  {
    4352: (e, n, r) => {
      r.r(n), r.d(n, { default: () => u });
      r(2262);
      var t = r(5400),
        o = r(5893);
      const u = function () {
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("div", { className: "name", children: "首页" }),
            (0, o.jsx)(t.Z, { type: "primary", children: "搜索" }),
          ],
        });
      };
    },
    5531: (e, n, r) => {
      var t = r(4836);
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.composeRef = c),
        (n.fillRef = f),
        (n.supportRef = function (e) {
          var n,
            r,
            t = (0, u.isMemo)(e) ? e.type.type : e.type;
          if (
            "function" == typeof t &&
            !(null === (n = t.prototype) || void 0 === n ? void 0 : n.render)
          )
            return !1;
          if (
            "function" == typeof e &&
            !(null === (r = e.prototype) || void 0 === r ? void 0 : r.render)
          )
            return !1;
          return !0;
        }),
        (n.useComposeRef = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (0, i.default)(
            function () {
              return c.apply(void 0, n);
            },
            n,
            function (e, n) {
              return (
                e.length === n.length &&
                e.every(function (e, r) {
                  return e === n[r];
                })
              );
            }
          );
        });
      var o = t(r(8698)),
        u = r(9864),
        i = t(r(7265));
      function f(e, n) {
        "function" == typeof e
          ? e(n)
          : "object" === (0, o.default)(e) &&
            e &&
            "current" in e &&
            (e.current = n);
      }
      function c() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        var t = n.filter(function (e) {
          return e;
        });
        return t.length <= 1
          ? t[0]
          : function (e) {
              n.forEach(function (n) {
                f(n, e);
              });
            };
      }
    },
  },
]);
