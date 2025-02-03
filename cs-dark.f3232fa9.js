var e, t;
"function" == typeof(e = globalThis.define) && (t = e, e = null),
function(t, n, o, r, i) {
    var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        d = "function" == typeof u[r] && u[r],
        f = d.cache || {},
        c = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

    function l(e, n) {
        if (!f[e]) {
            if (!t[e]) {
                var o = "function" == typeof u[r] && u[r];
                if (!n && o) return o(e, !0);
                if (d) return d(e, !0);
                if (c && "string" == typeof e) return c(e);
                var i = Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            s.resolve = function(n) {
                var o = t[e][1][n];
                return null != o ? o : n
            }, s.cache = {};
            var a = f[e] = new l.Module(e);
            t[e][0].call(a.exports, s, a, a.exports, this)
        }
        return f[e].exports;

        function s(e) {
            var t = s.resolve(e);
            return !1 === t ? {} : l(t)
        }
    }
    l.isParcelRequire = !0, l.Module = function(e) {
        this.id = e, this.bundle = l, this.exports = {}
    }, l.modules = t, l.cache = f, l.parent = d, l.register = function(e, n) {
        t[e] = [function(e, t) {
            t.exports = n
        }, {}]
    }, Object.defineProperty(l, "root", {
        get: function() {
            return u[r]
        }
    }), u[r] = l;
    for (var a = 0; a < n.length; a++) l(n[a]);
    if (o) {
        var s = l(o);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = s : "function" == typeof e && e.amd ? e(function() {
            return s
        }) : i && (this[i] = s)
    }
}({
    MQ7ai: [function(e, t, n) {
        let o = document.createElement("style");
        o.setAttribute("type", "text/css");
        let r = new MutationObserver(e => {
            e.forEach(e => {
                e.addedNodes && e.addedNodes.forEach(e => {
                    if ("HEAD" === e.nodeName) {
                        e.appendChild(o);
                        r.disconnect();
                    }
                });
            });
        });
        r.observe(document.documentElement, {
            childList: !0,
            subtree: !0
        });
        let i = e => {
            let t = new URL(e);
            return t.hostname;
        };
        let u = e => {
            if (o.textContent !== e) {
                o.textContent = e;
            }
        };
        let d = () => {
            if (o.textContent !== "") {
                o.textContent = "";
            }
        };
        let f = async () => {
            try {
                let e = await chrome.runtime.sendMessage({
                    action: "shouldApplyCSS",
                    hostname: i(window.location.href)
                });
                if (e) {
                    u(e.css);
                } else {
                    d();
                }
            } catch (e) {
                console.error(e);
            }
        };
        let c = async () => {
            let e = () => {
                f().catch(function() {});
            };
            setInterval(e, 500);
            e();
        };
        c().catch(function() {});
    }, {}]
}, ["MQ7ai"], "MQ7ai", "parcelRequirea816"), globalThis.define = t;