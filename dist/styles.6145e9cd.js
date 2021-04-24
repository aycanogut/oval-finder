// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/fonts/oval-job-finder.eot":[["oval-job-finder.2982ca8a.eot","assets/fonts/oval-job-finder.eot"],"assets/fonts/oval-job-finder.eot"],"./../assets/fonts/oval-job-finder.ttf":[["oval-job-finder.8e0667fe.ttf","assets/fonts/oval-job-finder.ttf"],"assets/fonts/oval-job-finder.ttf"],"./../assets/fonts/oval-job-finder.woff":[["oval-job-finder.19dfdbda.woff","assets/fonts/oval-job-finder.woff"],"assets/fonts/oval-job-finder.woff"],"./../assets/fonts/oval-job-finder.svg":[["oval-job-finder.a488a766.svg","assets/fonts/oval-job-finder.svg"],"assets/fonts/oval-job-finder.svg"],"./../assets/fonts/Aileron-Regular.woff2":[["Aileron-Regular.3902f3d7.woff2","assets/fonts/Aileron-Regular.woff2"],"assets/fonts/Aileron-Regular.woff2"],"./../assets/fonts/Aileron-Regular.woff":[["Aileron-Regular.bd75dea3.woff","assets/fonts/Aileron-Regular.woff"],"assets/fonts/Aileron-Regular.woff"],"./../assets/fonts/Aileron-Regular.otf":[["Aileron-Regular.2a467417.otf","assets/fonts/Aileron-Regular.otf"],"assets/fonts/Aileron-Regular.otf"],"./../assets/fonts/Inter-Regular.woff2":[["Inter-Regular.3668a550.woff2","assets/fonts/Inter-Regular.woff2"],"assets/fonts/Inter-Regular.woff2"],"./../assets/fonts/Inter-Regular.woff":[["Inter-Regular.d8fe5e4c.woff","assets/fonts/Inter-Regular.woff"],"assets/fonts/Inter-Regular.woff"],"./../assets/fonts/Inter-Regular.ttf":[["Inter-Regular.96e98044.ttf","assets/fonts/Inter-Regular.ttf"],"assets/fonts/Inter-Regular.ttf"],"./../assets/fonts/Inter-Medium.woff2":[["Inter-Medium.c0c7baf9.woff2","assets/fonts/Inter-Medium.woff2"],"assets/fonts/Inter-Medium.woff2"],"./../assets/fonts/Inter-Medium.woff":[["Inter-Medium.dd65d129.woff","assets/fonts/Inter-Medium.woff"],"assets/fonts/Inter-Medium.woff"],"./../assets/fonts/Inter-Medium.ttf":[["Inter-Medium.3f5d2339.ttf","assets/fonts/Inter-Medium.ttf"],"assets/fonts/Inter-Medium.ttf"],"./../assets/fonts/Inter-SemiBold.woff2":[["Inter-SemiBold.54b7d124.woff2","assets/fonts/Inter-SemiBold.woff2"],"assets/fonts/Inter-SemiBold.woff2"],"./../assets/fonts/Inter-SemiBold.woff":[["Inter-SemiBold.1d76efef.woff","assets/fonts/Inter-SemiBold.woff"],"assets/fonts/Inter-SemiBold.woff"],"./../assets/fonts/Inter-SemiBold.ttf":[["Inter-SemiBold.730ab76c.ttf","assets/fonts/Inter-SemiBold.ttf"],"assets/fonts/Inter-SemiBold.ttf"],"./../assets/fonts/Inter-Bold.woff2":[["Inter-Bold.2d483d39.woff2","assets/fonts/Inter-Bold.woff2"],"assets/fonts/Inter-Bold.woff2"],"./../assets/fonts/Inter-Bold.woff":[["Inter-Bold.b055a674.woff","assets/fonts/Inter-Bold.woff"],"assets/fonts/Inter-Bold.woff"],"./../assets/fonts/Inter-Bold.ttf":[["Inter-Bold.1917c23d.ttf","assets/fonts/Inter-Bold.ttf"],"assets/fonts/Inter-Bold.ttf"],"./../assets/fonts/Manrope-ExtraLight.woff2":[["Manrope-ExtraLight.0b99de4f.woff2","assets/fonts/Manrope-ExtraLight.woff2"],"assets/fonts/Manrope-ExtraLight.woff2"],"./../assets/fonts/Manrope-ExtraLight.woff":[["Manrope-ExtraLight.55599c43.woff","assets/fonts/Manrope-ExtraLight.woff"],"assets/fonts/Manrope-ExtraLight.woff"],"./../assets/fonts/Manrope-ExtraLight.ttf":[["Manrope-ExtraLight.f4b75e45.ttf","assets/fonts/Manrope-ExtraLight.ttf"],"assets/fonts/Manrope-ExtraLight.ttf"],"./../assets/fonts/Manrope-Light.woff2":[["Manrope-Light.72d754e7.woff2","assets/fonts/Manrope-Light.woff2"],"assets/fonts/Manrope-Light.woff2"],"./../assets/fonts/Manrope-Light.woff":[["Manrope-Light.73bb3800.woff","assets/fonts/Manrope-Light.woff"],"assets/fonts/Manrope-Light.woff"],"./../assets/fonts/Manrope-Light.ttf":[["Manrope-Light.4ef9da94.ttf","assets/fonts/Manrope-Light.ttf"],"assets/fonts/Manrope-Light.ttf"],"./../assets/fonts/Manrope-SemiBold.woff2":[["Manrope-SemiBold.619aa002.woff2","assets/fonts/Manrope-SemiBold.woff2"],"assets/fonts/Manrope-SemiBold.woff2"],"./../assets/fonts/Manrope-SemiBold.woff":[["Manrope-SemiBold.d23ead3f.woff","assets/fonts/Manrope-SemiBold.woff"],"assets/fonts/Manrope-SemiBold.woff"],"./../assets/fonts/Manrope-SemiBold.ttf":[["Manrope-SemiBold.62290002.ttf","assets/fonts/Manrope-SemiBold.ttf"],"assets/fonts/Manrope-SemiBold.ttf"],"./../assets/fonts/Manrope-Bold.woff2":[["Manrope-Bold.d30e24b6.woff2","assets/fonts/Manrope-Bold.woff2"],"assets/fonts/Manrope-Bold.woff2"],"./../assets/fonts/Manrope-Bold.woff":[["Manrope-Bold.58529ec3.woff","assets/fonts/Manrope-Bold.woff"],"assets/fonts/Manrope-Bold.woff"],"./../assets/fonts/Manrope-Bold.ttf":[["Manrope-Bold.f6c645e6.ttf","assets/fonts/Manrope-Bold.ttf"],"assets/fonts/Manrope-Bold.ttf"],"./../assets/fonts/Manrope-ExtraBold.woff2":[["Manrope-ExtraBold.39ef0929.woff2","assets/fonts/Manrope-ExtraBold.woff2"],"assets/fonts/Manrope-ExtraBold.woff2"],"./../assets/fonts/Manrope-ExtraBold.woff":[["Manrope-ExtraBold.bfd3aca0.woff","assets/fonts/Manrope-ExtraBold.woff"],"assets/fonts/Manrope-ExtraBold.woff"],"./../assets/fonts/Manrope-ExtraBold.ttf":[["Manrope-ExtraBold.8ffc748c.ttf","assets/fonts/Manrope-ExtraBold.ttf"],"assets/fonts/Manrope-ExtraBold.ttf"],"./../assets/fonts/Poppins-SemiBold.woff2":[["Poppins-SemiBold.9a68dc7e.woff2","assets/fonts/Poppins-SemiBold.woff2"],"assets/fonts/Poppins-SemiBold.woff2"],"./../assets/fonts/Poppins-SemiBold.woff":[["Poppins-SemiBold.cb048442.woff","assets/fonts/Poppins-SemiBold.woff"],"assets/fonts/Poppins-SemiBold.woff"],"./../assets/fonts/Poppins-SemiBold.ttf":[["Poppins-SemiBold.264af2ff.ttf","assets/fonts/Poppins-SemiBold.ttf"],"assets/fonts/Poppins-SemiBold.ttf"],"./../assets/fonts/Roboto-Regular.woff2":[["Roboto-Regular.ad57799c.woff2","assets/fonts/Roboto-Regular.woff2"],"assets/fonts/Roboto-Regular.woff2"],"./../assets/fonts/Roboto-Regular.woff":[["Roboto-Regular.dc66e318.woff","assets/fonts/Roboto-Regular.woff"],"assets/fonts/Roboto-Regular.woff"],"./../assets/fonts/Roboto-Regular.ttf":[["Roboto-Regular.586fc6e6.ttf","assets/fonts/Roboto-Regular.ttf"],"assets/fonts/Roboto-Regular.ttf"],"./../assets/img/bg-homepage.svg":[["bg-homepage.0c46e15f.svg","assets/img/bg-homepage.svg"],"assets/img/bg-homepage.svg"],"./../assets/img/bg-testimonial.svg":[["bg-testimonial.63a1261f.svg","assets/img/bg-testimonial.svg"],"assets/img/bg-testimonial.svg"],"./../assets/img/testimonial-dummy.png":[["testimonial-dummy.c14f893e.png","assets/img/testimonial-dummy.png"],"assets/img/testimonial-dummy.png"],"./../assets/img/clients-bg.jpg":[["clients-bg.b97e3a98.jpg","assets/img/clients-bg.jpg"],"assets/img/clients-bg.jpg"],"./../assets/img/bg-searchone.svg":[["bg-searchone.66e4a3d2.svg","assets/img/bg-searchone.svg"],"assets/img/bg-searchone.svg"],"./../assets/img/bg-employee.svg":[["bg-employee.80c292a9.svg","assets/img/bg-employee.svg"],"assets/img/bg-employee.svg"],"./../assets/img/search-jobs-two-dummy-md.png":[["search-jobs-two-dummy-md.9fd0cb46.png","assets/img/search-jobs-two-dummy-md.png"],"assets/img/search-jobs-two-dummy-md.png"],"./../assets/img/search-jobs-two-dummy-lg.png":[["search-jobs-two-dummy-lg.8e430d92.png","assets/img/search-jobs-two-dummy-lg.png"],"assets/img/search-jobs-two-dummy-lg.png"],"./../assets/img/company-dummy.png":[["company-dummy.bafe71e1.png","assets/img/company-dummy.png"],"assets/img/company-dummy.png"],"./../assets/img/company-dummy-sm.png":[["company-dummy-sm.c8cfd2bd.png","assets/img/company-dummy-sm.png"],"assets/img/company-dummy-sm.png"],"./../assets/img/company-dummy-md.png":[["company-dummy-md.d523c371.png","assets/img/company-dummy-md.png"],"assets/img/company-dummy-md.png"],"./../assets/img/company-dummy-lg.png":[["company-dummy-lg.2a587e51.png","assets/img/company-dummy-lg.png"],"assets/img/company-dummy-lg.png"],"/Users/aycanogut/Desktop/coding/www/projects/oval-finder/assets/img/pricing-dummy.jpg":[["pricing-dummy.5307f503.jpg","assets/img/pricing-dummy.jpg"],"assets/img/pricing-dummy.jpg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50838" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.6145e9cd.js.map