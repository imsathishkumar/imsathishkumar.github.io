(() => {
  "use strict";
  var e = {
      771: (e, t, r) => {
        r.r(t);
      },
      233: (e, t, r) => {
        r(771);
        var n = "theme-light",
          o = "theme-dark",
          a = document.querySelector("html");
        function m(e, t, r) {
          var n = new Date();
          n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3);
          var o = "expires=" + n.toUTCString();
          document.cookie = e + "=" + t + ";" + o + ";path=/";
        }
        function i(e) {
          for (
            var t = e + "=",
              r = decodeURIComponent(document.cookie).split(";"),
              n = 0;
            n < r.length;
            n++
          ) {
            for (var o = r[n]; " " == o.charAt(0); ) o = o.substring(1);
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return "";
        }
        function h() {
          0 === i("theme").localeCompare("") ||
          0 === i("theme").localeCompare("theme-light")
            ? (m("theme", "theme-light", 7), (a.dataset.theme = n))
            : (m("theme", "theme-dark", 7), (a.dataset.theme = o));
        }
        document.addEventListener("DOMContentLoaded", function () {
          h(),
            setInterval(h, 1e3),
            document
              .getElementById("theme-switch")
              .addEventListener("click", function () {
                0 === a.dataset.theme.localeCompare("theme-light")
                  ? (m("theme", "theme-dark", 7), (a.dataset.theme = o))
                  : (m("theme", "theme-light", 7), (a.dataset.theme = n));
              });
        });
      },
    },
    t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.r = (e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    r(233);
})();
