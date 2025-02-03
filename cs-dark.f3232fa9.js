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
        // Create a <style> element to inject CSS into the page
        const styleElement = document.createElement("style");
        styleElement.setAttribute("type", "text/css");

        // Observe the DOM for changes to ensure the style is injected into the <head>
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeName === "HEAD") {
                            node.appendChild(styleElement);
                            observer.disconnect(); // Stop observing once the style is injected
                        }
                    });
                }
            });
        });

        // Start observing the document for changes
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });

        // Extract the hostname from a URL
        const getHostname = (url) => {
            const urlObj = new URL(url);
            return urlObj.hostname;
        };

        // Update the injected CSS
        const updateCSS = (css) => {
            if (styleElement.textContent !== css) {
                styleElement.textContent = css;
            }
        };

        // Clear the injected CSS
        const clearCSS = () => {
            if (styleElement.textContent !== "") {
                styleElement.textContent = "";
            }
        };

        // Check if the dark theme should be applied
        const checkAndApplyCSS = async () => {
            try {
                const response = await chrome.runtime.sendMessage({
                    action: "shouldApplyCSS",
                    hostname: getHostname(window.location.href),
                });

                if (response) {
                    updateCSS(response.css);
                } else {
                    clearCSS();
                }
            } catch (error) {
                console.error("Error applying CSS:", error);
            }
        };

        // Continuously check and apply the dark theme
        const startThemeChecker = async () => {
            const checkTheme = () => {
                checkAndApplyCSS().catch(() => {});
            };

            setInterval(checkTheme, 500); // Check every 500ms
            checkTheme(); // Initial check
        };

        // Start the theme checker
        startThemeChecker().catch(() => {});
    }, {}]
}, ["MQ7ai"], "MQ7ai", "parcelRequirea816"), globalThis.define = t;