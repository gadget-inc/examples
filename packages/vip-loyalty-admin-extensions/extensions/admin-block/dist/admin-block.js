(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty2.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var ReactVersion = "17.0.2";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          exports.StrictMode = 60108;
          exports.Profiler = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          exports.Suspense = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            exports.StrictMode = symbolFor("react.strict_mode");
            exports.Profiler = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            exports.Suspense = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: 0
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            // Used by renderers to avoid bundling object-assign twice in UMD bundles:
            assign: _assign
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case exports.Profiler:
                return "Profiler";
              case exports.StrictMode:
                return "StrictMode";
              case exports.Suspense:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty2.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty2.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement2(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement2(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                  }
                }
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement2(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext3(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
              thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    }
                  }
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              }, function(error2) {
                if (payload._status === Pending) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
            }
            if (payload._status === Resolved) {
              return payload._result;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: -1,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render2) {
            {
              if (render2 != null && render2.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render2 !== "function") {
                error("forwardRef requires a render function but was given %s.", render2 === null ? "null" : typeof render2);
              } else {
                if (render2.length !== 0 && render2.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render2.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render2 != null) {
                if (render2.defaultProps != null || render2.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render: render2
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (render2.displayName == null) {
                    render2.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function memo2(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (type.displayName == null) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext3(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState2(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef2(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case exports.Suspense:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has2(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              /* @__PURE__ */ new Map([[frozenObject, null]]);
              /* @__PURE__ */ new Set([frozenObject]);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children2 = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children2;
          exports.Component = Component;
          exports.PureComponent = PureComponent;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext3;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement2;
          exports.lazy = lazy;
          exports.memo = memo2;
          exports.useCallback = useCallback;
          exports.useContext = useContext3;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect2;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo2;
          exports.useReducer = useReducer;
          exports.useRef = useRef2;
          exports.useState = useState2;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/cjs/scheduler.development.js
  var require_scheduler_development = __commonJS({
    "node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/cjs/scheduler.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var enableSchedulerDebugging = false;
          var enableProfiling = false;
          var requestHostCallback;
          var requestHostTimeout;
          var cancelHostTimeout;
          var requestPaint;
          var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
          if (hasPerformanceNow) {
            var localPerformance = performance;
            exports.unstable_now = function() {
              return localPerformance.now();
            };
          } else {
            var localDate = Date;
            var initialTime = localDate.now();
            exports.unstable_now = function() {
              return localDate.now() - initialTime;
            };
          }
          if (
            // If Scheduler runs in a non-DOM environment, it falls back to a naive
            // implementation using setTimeout.
            typeof window === "undefined" || // Check if MessageChannel is supported, too.
            typeof MessageChannel !== "function"
          ) {
            var _callback = null;
            var _timeoutID = null;
            var _flushCallback = function() {
              if (_callback !== null) {
                try {
                  var currentTime = exports.unstable_now();
                  var hasRemainingTime = true;
                  _callback(hasRemainingTime, currentTime);
                  _callback = null;
                } catch (e) {
                  setTimeout(_flushCallback, 0);
                  throw e;
                }
              }
            };
            requestHostCallback = function(cb) {
              if (_callback !== null) {
                setTimeout(requestHostCallback, 0, cb);
              } else {
                _callback = cb;
                setTimeout(_flushCallback, 0);
              }
            };
            requestHostTimeout = function(cb, ms) {
              _timeoutID = setTimeout(cb, ms);
            };
            cancelHostTimeout = function() {
              clearTimeout(_timeoutID);
            };
            exports.unstable_shouldYield = function() {
              return false;
            };
            requestPaint = exports.unstable_forceFrameRate = function() {
            };
          } else {
            var _setTimeout = window.setTimeout;
            var _clearTimeout = window.clearTimeout;
            if (typeof console !== "undefined") {
              var requestAnimationFrame = window.requestAnimationFrame;
              var cancelAnimationFrame = window.cancelAnimationFrame;
              if (typeof requestAnimationFrame !== "function") {
                console["error"]("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
              }
              if (typeof cancelAnimationFrame !== "function") {
                console["error"]("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
              }
            }
            var isMessageLoopRunning = false;
            var scheduledHostCallback = null;
            var taskTimeoutID = -1;
            var yieldInterval = 5;
            var deadline = 0;
            {
              exports.unstable_shouldYield = function() {
                return exports.unstable_now() >= deadline;
              };
              requestPaint = function() {
              };
            }
            exports.unstable_forceFrameRate = function(fps) {
              if (fps < 0 || fps > 125) {
                console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
                return;
              }
              if (fps > 0) {
                yieldInterval = Math.floor(1e3 / fps);
              } else {
                yieldInterval = 5;
              }
            };
            var performWorkUntilDeadline = function() {
              if (scheduledHostCallback !== null) {
                var currentTime = exports.unstable_now();
                deadline = currentTime + yieldInterval;
                var hasTimeRemaining = true;
                try {
                  var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                  if (!hasMoreWork) {
                    isMessageLoopRunning = false;
                    scheduledHostCallback = null;
                  } else {
                    port.postMessage(null);
                  }
                } catch (error) {
                  port.postMessage(null);
                  throw error;
                }
              } else {
                isMessageLoopRunning = false;
              }
            };
            var channel = new MessageChannel();
            var port = channel.port2;
            channel.port1.onmessage = performWorkUntilDeadline;
            requestHostCallback = function(callback) {
              scheduledHostCallback = callback;
              if (!isMessageLoopRunning) {
                isMessageLoopRunning = true;
                port.postMessage(null);
              }
            };
            requestHostTimeout = function(callback, ms) {
              taskTimeoutID = _setTimeout(function() {
                callback(exports.unstable_now());
              }, ms);
            };
            cancelHostTimeout = function() {
              _clearTimeout(taskTimeoutID);
              taskTimeoutID = -1;
            };
          }
          function push(heap, node) {
            var index = heap.length;
            heap.push(node);
            siftUp(heap, node, index);
          }
          function peek(heap) {
            var first = heap[0];
            return first === void 0 ? null : first;
          }
          function pop(heap) {
            var first = heap[0];
            if (first !== void 0) {
              var last = heap.pop();
              if (last !== first) {
                heap[0] = last;
                siftDown(heap, last, 0);
              }
              return first;
            } else {
              return null;
            }
          }
          function siftUp(heap, node, i) {
            var index = i;
            while (true) {
              var parentIndex = index - 1 >>> 1;
              var parent = heap[parentIndex];
              if (parent !== void 0 && compare(parent, node) > 0) {
                heap[parentIndex] = node;
                heap[index] = parent;
                index = parentIndex;
              } else {
                return;
              }
            }
          }
          function siftDown(heap, node, i) {
            var index = i;
            var length = heap.length;
            while (index < length) {
              var leftIndex = (index + 1) * 2 - 1;
              var left = heap[leftIndex];
              var rightIndex = leftIndex + 1;
              var right = heap[rightIndex];
              if (left !== void 0 && compare(left, node) < 0) {
                if (right !== void 0 && compare(right, left) < 0) {
                  heap[index] = right;
                  heap[rightIndex] = node;
                  index = rightIndex;
                } else {
                  heap[index] = left;
                  heap[leftIndex] = node;
                  index = leftIndex;
                }
              } else if (right !== void 0 && compare(right, node) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
              } else {
                return;
              }
            }
          }
          function compare(a, b) {
            var diff = a.sortIndex - b.sortIndex;
            return diff !== 0 ? diff : a.id - b.id;
          }
          var ImmediatePriority = 1;
          var UserBlockingPriority = 2;
          var NormalPriority = 3;
          var LowPriority = 4;
          var IdlePriority = 5;
          function markTaskErrored(task, ms) {
          }
          var maxSigned31BitInt = 1073741823;
          var IMMEDIATE_PRIORITY_TIMEOUT = -1;
          var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
          var NORMAL_PRIORITY_TIMEOUT = 5e3;
          var LOW_PRIORITY_TIMEOUT = 1e4;
          var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
          var taskQueue = [];
          var timerQueue = [];
          var taskIdCounter = 1;
          var currentTask = null;
          var currentPriorityLevel = NormalPriority;
          var isPerformingWork = false;
          var isHostCallbackScheduled = false;
          var isHostTimeoutScheduled = false;
          function advanceTimers(currentTime) {
            var timer = peek(timerQueue);
            while (timer !== null) {
              if (timer.callback === null) {
                pop(timerQueue);
              } else if (timer.startTime <= currentTime) {
                pop(timerQueue);
                timer.sortIndex = timer.expirationTime;
                push(taskQueue, timer);
              } else {
                return;
              }
              timer = peek(timerQueue);
            }
          }
          function handleTimeout(currentTime) {
            isHostTimeoutScheduled = false;
            advanceTimers(currentTime);
            if (!isHostCallbackScheduled) {
              if (peek(taskQueue) !== null) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
              } else {
                var firstTimer = peek(timerQueue);
                if (firstTimer !== null) {
                  requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                }
              }
            }
          }
          function flushWork(hasTimeRemaining, initialTime2) {
            isHostCallbackScheduled = false;
            if (isHostTimeoutScheduled) {
              isHostTimeoutScheduled = false;
              cancelHostTimeout();
            }
            isPerformingWork = true;
            var previousPriorityLevel = currentPriorityLevel;
            try {
              if (enableProfiling) {
                try {
                  return workLoop(hasTimeRemaining, initialTime2);
                } catch (error) {
                  if (currentTask !== null) {
                    var currentTime = exports.unstable_now();
                    markTaskErrored(currentTask, currentTime);
                    currentTask.isQueued = false;
                  }
                  throw error;
                }
              } else {
                return workLoop(hasTimeRemaining, initialTime2);
              }
            } finally {
              currentTask = null;
              currentPriorityLevel = previousPriorityLevel;
              isPerformingWork = false;
            }
          }
          function workLoop(hasTimeRemaining, initialTime2) {
            var currentTime = initialTime2;
            advanceTimers(currentTime);
            currentTask = peek(taskQueue);
            while (currentTask !== null && !enableSchedulerDebugging) {
              if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
                break;
              }
              var callback = currentTask.callback;
              if (typeof callback === "function") {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
                var continuationCallback = callback(didUserCallbackTimeout);
                currentTime = exports.unstable_now();
                if (typeof continuationCallback === "function") {
                  currentTask.callback = continuationCallback;
                } else {
                  if (currentTask === peek(taskQueue)) {
                    pop(taskQueue);
                  }
                }
                advanceTimers(currentTime);
              } else {
                pop(taskQueue);
              }
              currentTask = peek(taskQueue);
            }
            if (currentTask !== null) {
              return true;
            } else {
              var firstTimer = peek(timerQueue);
              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
              return false;
            }
          }
          function unstable_runWithPriority(priorityLevel, eventHandler) {
            switch (priorityLevel) {
              case ImmediatePriority:
              case UserBlockingPriority:
              case NormalPriority:
              case LowPriority:
              case IdlePriority:
                break;
              default:
                priorityLevel = NormalPriority;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
              return eventHandler();
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          }
          function unstable_next(eventHandler) {
            var priorityLevel;
            switch (currentPriorityLevel) {
              case ImmediatePriority:
              case UserBlockingPriority:
              case NormalPriority:
                priorityLevel = NormalPriority;
                break;
              default:
                priorityLevel = currentPriorityLevel;
                break;
            }
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = priorityLevel;
            try {
              return eventHandler();
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          }
          function unstable_wrapCallback(callback) {
            var parentPriorityLevel = currentPriorityLevel;
            return function() {
              var previousPriorityLevel = currentPriorityLevel;
              currentPriorityLevel = parentPriorityLevel;
              try {
                return callback.apply(this, arguments);
              } finally {
                currentPriorityLevel = previousPriorityLevel;
              }
            };
          }
          function unstable_scheduleCallback(priorityLevel, callback, options) {
            var currentTime = exports.unstable_now();
            var startTime;
            if (typeof options === "object" && options !== null) {
              var delay = options.delay;
              if (typeof delay === "number" && delay > 0) {
                startTime = currentTime + delay;
              } else {
                startTime = currentTime;
              }
            } else {
              startTime = currentTime;
            }
            var timeout;
            switch (priorityLevel) {
              case ImmediatePriority:
                timeout = IMMEDIATE_PRIORITY_TIMEOUT;
                break;
              case UserBlockingPriority:
                timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
                break;
              case IdlePriority:
                timeout = IDLE_PRIORITY_TIMEOUT;
                break;
              case LowPriority:
                timeout = LOW_PRIORITY_TIMEOUT;
                break;
              case NormalPriority:
              default:
                timeout = NORMAL_PRIORITY_TIMEOUT;
                break;
            }
            var expirationTime = startTime + timeout;
            var newTask = {
              id: taskIdCounter++,
              callback,
              priorityLevel,
              startTime,
              expirationTime,
              sortIndex: -1
            };
            if (startTime > currentTime) {
              newTask.sortIndex = startTime;
              push(timerQueue, newTask);
              if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
                if (isHostTimeoutScheduled) {
                  cancelHostTimeout();
                } else {
                  isHostTimeoutScheduled = true;
                }
                requestHostTimeout(handleTimeout, startTime - currentTime);
              }
            } else {
              newTask.sortIndex = expirationTime;
              push(taskQueue, newTask);
              if (!isHostCallbackScheduled && !isPerformingWork) {
                isHostCallbackScheduled = true;
                requestHostCallback(flushWork);
              }
            }
            return newTask;
          }
          function unstable_pauseExecution() {
          }
          function unstable_continueExecution() {
            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }
          function unstable_getFirstCallbackNode() {
            return peek(taskQueue);
          }
          function unstable_cancelCallback(task) {
            task.callback = null;
          }
          function unstable_getCurrentPriorityLevel() {
            return currentPriorityLevel;
          }
          var unstable_requestPaint = requestPaint;
          var unstable_Profiling = null;
          exports.unstable_IdlePriority = IdlePriority;
          exports.unstable_ImmediatePriority = ImmediatePriority;
          exports.unstable_LowPriority = LowPriority;
          exports.unstable_NormalPriority = NormalPriority;
          exports.unstable_Profiling = unstable_Profiling;
          exports.unstable_UserBlockingPriority = UserBlockingPriority;
          exports.unstable_cancelCallback = unstable_cancelCallback;
          exports.unstable_continueExecution = unstable_continueExecution;
          exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
          exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
          exports.unstable_next = unstable_next;
          exports.unstable_pauseExecution = unstable_pauseExecution;
          exports.unstable_requestPaint = unstable_requestPaint;
          exports.unstable_runWithPriority = unstable_runWithPriority;
          exports.unstable_scheduleCallback = unstable_scheduleCallback;
          exports.unstable_wrapCallback = unstable_wrapCallback;
        })();
      }
    }
  });

  // node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_scheduler_development();
      }
    }
  });

  // node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/cjs/scheduler-tracing.development.js
  var require_scheduler_tracing_development = __commonJS({
    "node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/cjs/scheduler-tracing.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var DEFAULT_THREAD_ID = 0;
          var interactionIDCounter = 0;
          var threadIDCounter = 0;
          exports.__interactionsRef = null;
          exports.__subscriberRef = null;
          {
            exports.__interactionsRef = {
              current: /* @__PURE__ */ new Set()
            };
            exports.__subscriberRef = {
              current: null
            };
          }
          function unstable_clear(callback) {
            var prevInteractions = exports.__interactionsRef.current;
            exports.__interactionsRef.current = /* @__PURE__ */ new Set();
            try {
              return callback();
            } finally {
              exports.__interactionsRef.current = prevInteractions;
            }
          }
          function unstable_getCurrent() {
            {
              return exports.__interactionsRef.current;
            }
          }
          function unstable_getThreadID() {
            return ++threadIDCounter;
          }
          function unstable_trace(name, timestamp, callback) {
            var threadID = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_THREAD_ID;
            var interaction = {
              __count: 1,
              id: interactionIDCounter++,
              name,
              timestamp
            };
            var prevInteractions = exports.__interactionsRef.current;
            var interactions = new Set(prevInteractions);
            interactions.add(interaction);
            exports.__interactionsRef.current = interactions;
            var subscriber = exports.__subscriberRef.current;
            var returnValue;
            try {
              if (subscriber !== null) {
                subscriber.onInteractionTraced(interaction);
              }
            } finally {
              try {
                if (subscriber !== null) {
                  subscriber.onWorkStarted(interactions, threadID);
                }
              } finally {
                try {
                  returnValue = callback();
                } finally {
                  exports.__interactionsRef.current = prevInteractions;
                  try {
                    if (subscriber !== null) {
                      subscriber.onWorkStopped(interactions, threadID);
                    }
                  } finally {
                    interaction.__count--;
                    if (subscriber !== null && interaction.__count === 0) {
                      subscriber.onInteractionScheduledWorkCompleted(interaction);
                    }
                  }
                }
              }
            }
            return returnValue;
          }
          function unstable_wrap(callback) {
            var threadID = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_THREAD_ID;
            var wrappedInteractions = exports.__interactionsRef.current;
            var subscriber = exports.__subscriberRef.current;
            if (subscriber !== null) {
              subscriber.onWorkScheduled(wrappedInteractions, threadID);
            }
            wrappedInteractions.forEach(function(interaction) {
              interaction.__count++;
            });
            var hasRun = false;
            function wrapped() {
              var prevInteractions = exports.__interactionsRef.current;
              exports.__interactionsRef.current = wrappedInteractions;
              subscriber = exports.__subscriberRef.current;
              try {
                var returnValue;
                try {
                  if (subscriber !== null) {
                    subscriber.onWorkStarted(wrappedInteractions, threadID);
                  }
                } finally {
                  try {
                    returnValue = callback.apply(void 0, arguments);
                  } finally {
                    exports.__interactionsRef.current = prevInteractions;
                    if (subscriber !== null) {
                      subscriber.onWorkStopped(wrappedInteractions, threadID);
                    }
                  }
                }
                return returnValue;
              } finally {
                if (!hasRun) {
                  hasRun = true;
                  wrappedInteractions.forEach(function(interaction) {
                    interaction.__count--;
                    if (subscriber !== null && interaction.__count === 0) {
                      subscriber.onInteractionScheduledWorkCompleted(interaction);
                    }
                  });
                }
              }
            }
            wrapped.cancel = function cancel() {
              subscriber = exports.__subscriberRef.current;
              try {
                if (subscriber !== null) {
                  subscriber.onWorkCanceled(wrappedInteractions, threadID);
                }
              } finally {
                wrappedInteractions.forEach(function(interaction) {
                  interaction.__count--;
                  if (subscriber && interaction.__count === 0) {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  }
                });
              }
            };
            return wrapped;
          }
          var subscribers = null;
          {
            subscribers = /* @__PURE__ */ new Set();
          }
          function unstable_subscribe(subscriber) {
            {
              subscribers.add(subscriber);
              if (subscribers.size === 1) {
                exports.__subscriberRef.current = {
                  onInteractionScheduledWorkCompleted,
                  onInteractionTraced,
                  onWorkCanceled,
                  onWorkScheduled,
                  onWorkStarted,
                  onWorkStopped
                };
              }
            }
          }
          function unstable_unsubscribe(subscriber) {
            {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                exports.__subscriberRef.current = null;
              }
            }
          }
          function onInteractionTraced(interaction) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onInteractionTraced(interaction);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          function onInteractionScheduledWorkCompleted(interaction) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          function onWorkScheduled(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onWorkScheduled(interactions, threadID);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          function onWorkStarted(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onWorkStarted(interactions, threadID);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          function onWorkStopped(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onWorkStopped(interactions, threadID);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          function onWorkCanceled(interactions, threadID) {
            var didCatchError = false;
            var caughtError = null;
            subscribers.forEach(function(subscriber) {
              try {
                subscriber.onWorkCanceled(interactions, threadID);
              } catch (error) {
                if (!didCatchError) {
                  didCatchError = true;
                  caughtError = error;
                }
              }
            });
            if (didCatchError) {
              throw caughtError;
            }
          }
          exports.unstable_clear = unstable_clear;
          exports.unstable_getCurrent = unstable_getCurrent;
          exports.unstable_getThreadID = unstable_getThreadID;
          exports.unstable_subscribe = unstable_subscribe;
          exports.unstable_trace = unstable_trace;
          exports.unstable_unsubscribe = unstable_unsubscribe;
          exports.unstable_wrap = unstable_wrap;
        })();
      }
    }
  });

  // node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/tracing.js
  var require_tracing = __commonJS({
    "node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/tracing.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_scheduler_tracing_development();
      }
    }
  });

  // node_modules/.pnpm/react-reconciler@0.26.2_react@17.0.2/node_modules/react-reconciler/cjs/react-reconciler.development.js
  var require_react_reconciler_development = __commonJS({
    "node_modules/.pnpm/react-reconciler@0.26.2_react@17.0.2/node_modules/react-reconciler/cjs/react-reconciler.development.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = function $$$reconciler($$$hostConfig) {
          var exports2 = {};
          "use strict";
          var React = require_react();
          var _assign = require_object_assign();
          var Scheduler = require_scheduler();
          var tracing = require_tracing();
          var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var FunctionComponent = 0;
          var ClassComponent = 1;
          var IndeterminateComponent = 2;
          var HostRoot = 3;
          var HostPortal = 4;
          var HostComponent = 5;
          var HostText = 6;
          var Fragment = 7;
          var Mode = 8;
          var ContextConsumer = 9;
          var ContextProvider = 10;
          var ForwardRef = 11;
          var Profiler = 12;
          var SuspenseComponent = 13;
          var MemoComponent = 14;
          var SimpleMemoComponent = 15;
          var LazyComponent = 16;
          var IncompleteClassComponent = 17;
          var DehydratedFragment = 18;
          var SuspenseListComponent = 19;
          var FundamentalComponent = 20;
          var ScopeComponent = 21;
          var Block = 22;
          var OffscreenComponent = 23;
          var LegacyHiddenComponent = 24;
          function get(key) {
            return key._reactInternals;
          }
          function set(key, value) {
            key._reactInternals = value;
          }
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          var REACT_FRAGMENT_TYPE = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var NoFlags = (
            /*                      */
            0
          );
          var PerformedWork = (
            /*                */
            1
          );
          var Placement = (
            /*                    */
            2
          );
          var Update = (
            /*                       */
            4
          );
          var PlacementAndUpdate = (
            /*           */
            6
          );
          var Deletion = (
            /*                     */
            8
          );
          var ContentReset = (
            /*                 */
            16
          );
          var Callback = (
            /*                     */
            32
          );
          var DidCapture = (
            /*                   */
            64
          );
          var Ref = (
            /*                          */
            128
          );
          var Snapshot = (
            /*                     */
            256
          );
          var Passive = (
            /*                      */
            512
          );
          var PassiveUnmountPendingDev = (
            /*     */
            8192
          );
          var Hydrating = (
            /*                    */
            1024
          );
          var HydratingAndUpdate = (
            /*           */
            1028
          );
          var LifecycleEffectMask = (
            /*          */
            932
          );
          var HostEffectMask = (
            /*               */
            2047
          );
          var Incomplete = (
            /*                   */
            2048
          );
          var ShouldCapture = (
            /*                */
            4096
          );
          var ForceUpdateForLegacySuspense = (
            /* */
            16384
          );
          var enableProfilerTimer = true;
          var enableFundamentalAPI = false;
          var enableNewReconciler = false;
          var warnAboutStringRefs = false;
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          function getNearestMountedFiber(fiber) {
            var node = fiber;
            var nearestMounted = fiber;
            if (!fiber.alternate) {
              var nextNode = node;
              do {
                node = nextNode;
                if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
                  nearestMounted = node.return;
                }
                nextNode = node.return;
              } while (nextNode);
            } else {
              while (node.return) {
                node = node.return;
              }
            }
            if (node.tag === HostRoot) {
              return nearestMounted;
            }
            return null;
          }
          function isFiberMounted(fiber) {
            return getNearestMountedFiber(fiber) === fiber;
          }
          function isMounted(component) {
            {
              var owner = ReactCurrentOwner.current;
              if (owner !== null && owner.tag === ClassComponent) {
                var ownerFiber = owner;
                var instance = ownerFiber.stateNode;
                if (!instance._warnedAboutRefsInRender) {
                  error("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentName(ownerFiber.type) || "A component");
                }
                instance._warnedAboutRefsInRender = true;
              }
            }
            var fiber = get(component);
            if (!fiber) {
              return false;
            }
            return getNearestMountedFiber(fiber) === fiber;
          }
          function assertIsMounted(fiber) {
            if (!(getNearestMountedFiber(fiber) === fiber)) {
              {
                throw Error("Unable to find node on an unmounted component.");
              }
            }
          }
          function findCurrentFiberUsingSlowPath(fiber) {
            var alternate = fiber.alternate;
            if (!alternate) {
              var nearestMounted = getNearestMountedFiber(fiber);
              if (!(nearestMounted !== null)) {
                {
                  throw Error("Unable to find node on an unmounted component.");
                }
              }
              if (nearestMounted !== fiber) {
                return null;
              }
              return fiber;
            }
            var a = fiber;
            var b = alternate;
            while (true) {
              var parentA = a.return;
              if (parentA === null) {
                break;
              }
              var parentB = parentA.alternate;
              if (parentB === null) {
                var nextParent = parentA.return;
                if (nextParent !== null) {
                  a = b = nextParent;
                  continue;
                }
                break;
              }
              if (parentA.child === parentB.child) {
                var child = parentA.child;
                while (child) {
                  if (child === a) {
                    assertIsMounted(parentA);
                    return fiber;
                  }
                  if (child === b) {
                    assertIsMounted(parentA);
                    return alternate;
                  }
                  child = child.sibling;
                }
                {
                  {
                    throw Error("Unable to find node on an unmounted component.");
                  }
                }
              }
              if (a.return !== b.return) {
                a = parentA;
                b = parentB;
              } else {
                var didFindChild = false;
                var _child = parentA.child;
                while (_child) {
                  if (_child === a) {
                    didFindChild = true;
                    a = parentA;
                    b = parentB;
                    break;
                  }
                  if (_child === b) {
                    didFindChild = true;
                    b = parentA;
                    a = parentB;
                    break;
                  }
                  _child = _child.sibling;
                }
                if (!didFindChild) {
                  _child = parentB.child;
                  while (_child) {
                    if (_child === a) {
                      didFindChild = true;
                      a = parentB;
                      b = parentA;
                      break;
                    }
                    if (_child === b) {
                      didFindChild = true;
                      b = parentB;
                      a = parentA;
                      break;
                    }
                    _child = _child.sibling;
                  }
                  if (!didFindChild) {
                    {
                      throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
                    }
                  }
                }
              }
              if (!(a.alternate === b)) {
                {
                  throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            if (!(a.tag === HostRoot)) {
              {
                throw Error("Unable to find node on an unmounted component.");
              }
            }
            if (a.stateNode.current === a) {
              return fiber;
            }
            return alternate;
          }
          function findCurrentHostFiber(parent) {
            var currentParent = findCurrentFiberUsingSlowPath(parent);
            if (!currentParent) {
              return null;
            }
            var node = currentParent;
            while (true) {
              if (node.tag === HostComponent || node.tag === HostText) {
                return node;
              } else if (node.child) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === currentParent) {
                return null;
              }
              while (!node.sibling) {
                if (!node.return || node.return === currentParent) {
                  return null;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
            return null;
          }
          function findCurrentHostFiberWithNoPortals(parent) {
            var currentParent = findCurrentFiberUsingSlowPath(parent);
            if (!currentParent) {
              return null;
            }
            var node = currentParent;
            while (true) {
              if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) {
                return node;
              } else if (node.child && node.tag !== HostPortal) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === currentParent) {
                return null;
              }
              while (!node.sibling) {
                if (!node.return || node.return === currentParent) {
                  return null;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
            return null;
          }
          function doesFiberContain(parentFiber, childFiber) {
            var node = childFiber;
            var parentFiberAlternate = parentFiber.alternate;
            while (node !== null) {
              if (node === parentFiber || node === parentFiberAlternate) {
                return true;
              }
              node = node.return;
            }
            return false;
          }
          var getPublicInstance = $$$hostConfig.getPublicInstance;
          var getRootHostContext = $$$hostConfig.getRootHostContext;
          var getChildHostContext = $$$hostConfig.getChildHostContext;
          var prepareForCommit = $$$hostConfig.prepareForCommit;
          var resetAfterCommit = $$$hostConfig.resetAfterCommit;
          var createInstance = $$$hostConfig.createInstance;
          var appendInitialChild = $$$hostConfig.appendInitialChild;
          var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
          var prepareUpdate = $$$hostConfig.prepareUpdate;
          var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
          var createTextInstance = $$$hostConfig.createTextInstance;
          var scheduleTimeout = $$$hostConfig.scheduleTimeout;
          var cancelTimeout = $$$hostConfig.cancelTimeout;
          var noTimeout = $$$hostConfig.noTimeout;
          var now = $$$hostConfig.now;
          var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
          var warnsIfNotActing = $$$hostConfig.warnsIfNotActing;
          var supportsMutation = $$$hostConfig.supportsMutation;
          var supportsPersistence = $$$hostConfig.supportsPersistence;
          var supportsHydration = $$$hostConfig.supportsHydration;
          var getFundamentalComponentInstance = $$$hostConfig.getFundamentalComponentInstance;
          var mountFundamentalComponent = $$$hostConfig.mountFundamentalComponent;
          var shouldUpdateFundamentalComponent = $$$hostConfig.shouldUpdateFundamentalComponent;
          var getInstanceFromNode = $$$hostConfig.getInstanceFromNode;
          var isOpaqueHydratingObject = $$$hostConfig.isOpaqueHydratingObject;
          var makeOpaqueHydratingObject = $$$hostConfig.makeOpaqueHydratingObject;
          var makeClientId = $$$hostConfig.makeClientId;
          var makeClientIdInDEV = $$$hostConfig.makeClientIdInDEV;
          var beforeActiveInstanceBlur = $$$hostConfig.beforeActiveInstanceBlur;
          var afterActiveInstanceBlur = $$$hostConfig.afterActiveInstanceBlur;
          var preparePortalMount = $$$hostConfig.preparePortalMount;
          var prepareScopeUpdate = $$$hostConfig.preparePortalMount;
          var getInstanceFromScope = $$$hostConfig.getInstanceFromScope;
          var supportsTestSelectors = $$$hostConfig.supportsTestSelectors;
          var findFiberRoot = $$$hostConfig.findFiberRoot;
          var getBoundingRect = $$$hostConfig.getBoundingRect;
          var getTextContent = $$$hostConfig.getTextContent;
          var isHiddenSubtree = $$$hostConfig.isHiddenSubtree;
          var matchAccessibilityRole = $$$hostConfig.matchAccessibilityRole;
          var setFocusIfFocusable = $$$hostConfig.setFocusIfFocusable;
          var setupIntersectionObserver = $$$hostConfig.setupIntersectionObserver;
          var appendChild2 = $$$hostConfig.appendChild;
          var appendChildToContainer = $$$hostConfig.appendChildToContainer;
          var commitTextUpdate = $$$hostConfig.commitTextUpdate;
          var commitMount = $$$hostConfig.commitMount;
          var commitUpdate = $$$hostConfig.commitUpdate;
          var insertBefore = $$$hostConfig.insertBefore;
          var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
          var removeChild2 = $$$hostConfig.removeChild;
          var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
          var resetTextContent = $$$hostConfig.resetTextContent;
          var hideInstance = $$$hostConfig.hideInstance;
          var hideTextInstance = $$$hostConfig.hideTextInstance;
          var unhideInstance = $$$hostConfig.unhideInstance;
          var unhideTextInstance = $$$hostConfig.unhideTextInstance;
          var updateFundamentalComponent = $$$hostConfig.updateFundamentalComponent;
          var unmountFundamentalComponent = $$$hostConfig.unmountFundamentalComponent;
          var clearContainer = $$$hostConfig.clearContainer;
          var cloneInstance = $$$hostConfig.cloneInstance;
          var createContainerChildSet = $$$hostConfig.createContainerChildSet;
          var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
          var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
          var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;
          var cloneHiddenInstance = $$$hostConfig.cloneHiddenInstance;
          var cloneHiddenTextInstance = $$$hostConfig.cloneHiddenTextInstance;
          var cloneFundamentalInstance = $$$hostConfig.cloneInstance;
          var canHydrateInstance = $$$hostConfig.canHydrateInstance;
          var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
          var canHydrateSuspenseInstance = $$$hostConfig.canHydrateSuspenseInstance;
          var isSuspenseInstancePending = $$$hostConfig.isSuspenseInstancePending;
          var isSuspenseInstanceFallback = $$$hostConfig.isSuspenseInstanceFallback;
          var registerSuspenseInstanceRetry = $$$hostConfig.registerSuspenseInstanceRetry;
          var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
          var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
          var hydrateInstance = $$$hostConfig.hydrateInstance;
          var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
          var hydrateSuspenseInstance = $$$hostConfig.hydrateSuspenseInstance;
          var getNextHydratableInstanceAfterSuspenseInstance = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;
          var commitHydratedContainer = $$$hostConfig.commitHydratedContainer;
          var commitHydratedSuspenseInstance = $$$hostConfig.commitHydratedSuspenseInstance;
          var clearSuspenseBoundary = $$$hostConfig.clearSuspenseBoundary;
          var clearSuspenseBoundaryFromContainer = $$$hostConfig.clearSuspenseBoundaryFromContainer;
          var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
          var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
          var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
          var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
          var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
          var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
          var didNotFindHydratableContainerSuspenseInstance = $$$hostConfig.didNotFindHydratableContainerSuspenseInstance;
          var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
          var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;
          var didNotFindHydratableSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstance;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeClassComponentFrame(ctor, source, ownerFn) {
            {
              return describeNativeComponentFrame(ctor, true);
            }
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has2(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var valueStack = [];
          var fiberStack;
          {
            fiberStack = [];
          }
          var index = -1;
          function createCursor(defaultValue) {
            return {
              current: defaultValue
            };
          }
          function pop(cursor, fiber) {
            if (index < 0) {
              {
                error("Unexpected pop.");
              }
              return;
            }
            {
              if (fiber !== fiberStack[index]) {
                error("Unexpected Fiber popped.");
              }
            }
            cursor.current = valueStack[index];
            valueStack[index] = null;
            {
              fiberStack[index] = null;
            }
            index--;
          }
          function push(cursor, value, fiber) {
            index++;
            valueStack[index] = cursor.current;
            {
              fiberStack[index] = fiber;
            }
            cursor.current = value;
          }
          var warnedAboutMissingGetChildContext;
          {
            warnedAboutMissingGetChildContext = {};
          }
          var emptyContextObject = {};
          {
            Object.freeze(emptyContextObject);
          }
          var contextStackCursor = createCursor(emptyContextObject);
          var didPerformWorkStackCursor = createCursor(false);
          var previousContext = emptyContextObject;
          function getUnmaskedContext(workInProgress2, Component, didPushOwnContextIfProvider) {
            {
              if (didPushOwnContextIfProvider && isContextProvider(Component)) {
                return previousContext;
              }
              return contextStackCursor.current;
            }
          }
          function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
            {
              var instance = workInProgress2.stateNode;
              instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
              instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
            }
          }
          function getMaskedContext(workInProgress2, unmaskedContext) {
            {
              var type = workInProgress2.type;
              var contextTypes = type.contextTypes;
              if (!contextTypes) {
                return emptyContextObject;
              }
              var instance = workInProgress2.stateNode;
              if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
                return instance.__reactInternalMemoizedMaskedChildContext;
              }
              var context = {};
              for (var key in contextTypes) {
                context[key] = unmaskedContext[key];
              }
              {
                var name = getComponentName(type) || "Unknown";
                checkPropTypes(contextTypes, context, "context", name);
              }
              if (instance) {
                cacheContext(workInProgress2, unmaskedContext, context);
              }
              return context;
            }
          }
          function hasContextChanged() {
            {
              return didPerformWorkStackCursor.current;
            }
          }
          function isContextProvider(type) {
            {
              var childContextTypes = type.childContextTypes;
              return childContextTypes !== null && childContextTypes !== void 0;
            }
          }
          function popContext(fiber) {
            {
              pop(didPerformWorkStackCursor, fiber);
              pop(contextStackCursor, fiber);
            }
          }
          function popTopLevelContextObject(fiber) {
            {
              pop(didPerformWorkStackCursor, fiber);
              pop(contextStackCursor, fiber);
            }
          }
          function pushTopLevelContextObject(fiber, context, didChange) {
            {
              if (!(contextStackCursor.current === emptyContextObject)) {
                {
                  throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              push(contextStackCursor, context, fiber);
              push(didPerformWorkStackCursor, didChange, fiber);
            }
          }
          function processChildContext(fiber, type, parentContext) {
            {
              var instance = fiber.stateNode;
              var childContextTypes = type.childContextTypes;
              if (typeof instance.getChildContext !== "function") {
                {
                  var componentName = getComponentName(type) || "Unknown";
                  if (!warnedAboutMissingGetChildContext[componentName]) {
                    warnedAboutMissingGetChildContext[componentName] = true;
                    error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                  }
                }
                return parentContext;
              }
              var childContext = instance.getChildContext();
              for (var contextKey in childContext) {
                if (!(contextKey in childContextTypes)) {
                  {
                    throw Error((getComponentName(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
                  }
                }
              }
              {
                var name = getComponentName(type) || "Unknown";
                checkPropTypes(childContextTypes, childContext, "child context", name);
              }
              return _assign({}, parentContext, childContext);
            }
          }
          function pushContextProvider(workInProgress2) {
            {
              var instance = workInProgress2.stateNode;
              var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
              previousContext = contextStackCursor.current;
              push(contextStackCursor, memoizedMergedChildContext, workInProgress2);
              push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2);
              return true;
            }
          }
          function invalidateContextProvider(workInProgress2, type, didChange) {
            {
              var instance = workInProgress2.stateNode;
              if (!instance) {
                {
                  throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              if (didChange) {
                var mergedContext = processChildContext(workInProgress2, type, previousContext);
                instance.__reactInternalMemoizedMergedChildContext = mergedContext;
                pop(didPerformWorkStackCursor, workInProgress2);
                pop(contextStackCursor, workInProgress2);
                push(contextStackCursor, mergedContext, workInProgress2);
                push(didPerformWorkStackCursor, didChange, workInProgress2);
              } else {
                pop(didPerformWorkStackCursor, workInProgress2);
                push(didPerformWorkStackCursor, didChange, workInProgress2);
              }
            }
          }
          function findCurrentUnmaskedContext(fiber) {
            {
              if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
                {
                  throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              var node = fiber;
              do {
                switch (node.tag) {
                  case HostRoot:
                    return node.stateNode.context;
                  case ClassComponent: {
                    var Component = node.type;
                    if (isContextProvider(Component)) {
                      return node.stateNode.__reactInternalMemoizedMergedChildContext;
                    }
                    break;
                  }
                }
                node = node.return;
              } while (node !== null);
              {
                {
                  throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
          }
          var LegacyRoot = 0;
          var BlockingRoot = 1;
          var ConcurrentRoot = 2;
          var rendererID = null;
          var injectedHook = null;
          var hasLoggedError = false;
          var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
          function injectInternals(internals) {
            if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
              return false;
            }
            var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook.isDisabled) {
              return true;
            }
            if (!hook.supportsFiber) {
              {
                error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools");
              }
              return true;
            }
            try {
              rendererID = hook.inject(internals);
              injectedHook = hook;
            } catch (err) {
              {
                error("React instrumentation encountered an error: %s.", err);
              }
            }
            return true;
          }
          function onScheduleRoot(root, children) {
            {
              if (injectedHook && typeof injectedHook.onScheduleFiberRoot === "function") {
                try {
                  injectedHook.onScheduleFiberRoot(rendererID, root, children);
                } catch (err) {
                  if (!hasLoggedError) {
                    hasLoggedError = true;
                    error("React instrumentation encountered an error: %s", err);
                  }
                }
              }
            }
          }
          function onCommitRoot(root, priorityLevel) {
            if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function") {
              try {
                var didError = (root.current.flags & DidCapture) === DidCapture;
                if (enableProfilerTimer) {
                  injectedHook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
                } else {
                  injectedHook.onCommitFiberRoot(rendererID, root, void 0, didError);
                }
              } catch (err) {
                {
                  if (!hasLoggedError) {
                    hasLoggedError = true;
                    error("React instrumentation encountered an error: %s", err);
                  }
                }
              }
            }
          }
          function onCommitUnmount(fiber) {
            if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function") {
              try {
                injectedHook.onCommitFiberUnmount(rendererID, fiber);
              } catch (err) {
                {
                  if (!hasLoggedError) {
                    hasLoggedError = true;
                    error("React instrumentation encountered an error: %s", err);
                  }
                }
              }
            }
          }
          var Scheduler_now = Scheduler.unstable_now;
          {
            if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
              {
                throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
              }
            }
          }
          var ImmediatePriority = 99;
          var UserBlockingPriority = 98;
          var NormalPriority = 97;
          var LowPriority = 96;
          var IdlePriority = 95;
          var NoPriority = 90;
          var initialTimeMs = Scheduler_now();
          var SyncLanePriority = 15;
          var SyncBatchedLanePriority = 14;
          var InputDiscreteHydrationLanePriority = 13;
          var InputDiscreteLanePriority = 12;
          var InputContinuousHydrationLanePriority = 11;
          var InputContinuousLanePriority = 10;
          var DefaultHydrationLanePriority = 9;
          var DefaultLanePriority = 8;
          var TransitionHydrationPriority = 7;
          var TransitionPriority = 6;
          var RetryLanePriority = 5;
          var SelectiveHydrationLanePriority = 4;
          var IdleHydrationLanePriority = 3;
          var IdleLanePriority = 2;
          var OffscreenLanePriority = 1;
          var NoLanePriority = 0;
          var TotalLanes = 31;
          var NoLanes = (
            /*                        */
            0
          );
          var NoLane = (
            /*                          */
            0
          );
          var SyncLane = (
            /*                        */
            1
          );
          var SyncBatchedLane = (
            /*                 */
            2
          );
          var InputDiscreteHydrationLane = (
            /*      */
            4
          );
          var InputDiscreteLanes = (
            /*                    */
            24
          );
          var InputContinuousHydrationLane = (
            /*           */
            32
          );
          var InputContinuousLanes = (
            /*                  */
            192
          );
          var DefaultHydrationLane = (
            /*            */
            256
          );
          var DefaultLanes = (
            /*                   */
            3584
          );
          var TransitionHydrationLane = (
            /*                */
            4096
          );
          var TransitionLanes = (
            /*                       */
            4186112
          );
          var RetryLanes = (
            /*                            */
            62914560
          );
          var SomeRetryLane = (
            /*                  */
            33554432
          );
          var SelectiveHydrationLane = (
            /*          */
            67108864
          );
          var NonIdleLanes = (
            /*                                 */
            134217727
          );
          var IdleHydrationLane = (
            /*               */
            134217728
          );
          var IdleLanes = (
            /*                             */
            805306368
          );
          var OffscreenLane = (
            /*                   */
            1073741824
          );
          var NoTimestamp = -1;
          var currentUpdateLanePriority = NoLanePriority;
          function getCurrentUpdateLanePriority() {
            return currentUpdateLanePriority;
          }
          function setCurrentUpdateLanePriority(newLanePriority) {
            currentUpdateLanePriority = newLanePriority;
          }
          var return_highestLanePriority = DefaultLanePriority;
          function getHighestPriorityLanes(lanes) {
            if ((SyncLane & lanes) !== NoLanes) {
              return_highestLanePriority = SyncLanePriority;
              return SyncLane;
            }
            if ((SyncBatchedLane & lanes) !== NoLanes) {
              return_highestLanePriority = SyncBatchedLanePriority;
              return SyncBatchedLane;
            }
            if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
              return_highestLanePriority = InputDiscreteHydrationLanePriority;
              return InputDiscreteHydrationLane;
            }
            var inputDiscreteLanes = InputDiscreteLanes & lanes;
            if (inputDiscreteLanes !== NoLanes) {
              return_highestLanePriority = InputDiscreteLanePriority;
              return inputDiscreteLanes;
            }
            if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
              return_highestLanePriority = InputContinuousHydrationLanePriority;
              return InputContinuousHydrationLane;
            }
            var inputContinuousLanes = InputContinuousLanes & lanes;
            if (inputContinuousLanes !== NoLanes) {
              return_highestLanePriority = InputContinuousLanePriority;
              return inputContinuousLanes;
            }
            if ((lanes & DefaultHydrationLane) !== NoLanes) {
              return_highestLanePriority = DefaultHydrationLanePriority;
              return DefaultHydrationLane;
            }
            var defaultLanes = DefaultLanes & lanes;
            if (defaultLanes !== NoLanes) {
              return_highestLanePriority = DefaultLanePriority;
              return defaultLanes;
            }
            if ((lanes & TransitionHydrationLane) !== NoLanes) {
              return_highestLanePriority = TransitionHydrationPriority;
              return TransitionHydrationLane;
            }
            var transitionLanes = TransitionLanes & lanes;
            if (transitionLanes !== NoLanes) {
              return_highestLanePriority = TransitionPriority;
              return transitionLanes;
            }
            var retryLanes = RetryLanes & lanes;
            if (retryLanes !== NoLanes) {
              return_highestLanePriority = RetryLanePriority;
              return retryLanes;
            }
            if (lanes & SelectiveHydrationLane) {
              return_highestLanePriority = SelectiveHydrationLanePriority;
              return SelectiveHydrationLane;
            }
            if ((lanes & IdleHydrationLane) !== NoLanes) {
              return_highestLanePriority = IdleHydrationLanePriority;
              return IdleHydrationLane;
            }
            var idleLanes = IdleLanes & lanes;
            if (idleLanes !== NoLanes) {
              return_highestLanePriority = IdleLanePriority;
              return idleLanes;
            }
            if ((OffscreenLane & lanes) !== NoLanes) {
              return_highestLanePriority = OffscreenLanePriority;
              return OffscreenLane;
            }
            {
              error("Should have found matching lanes. This is a bug in React.");
            }
            return_highestLanePriority = DefaultLanePriority;
            return lanes;
          }
          function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
            switch (schedulerPriorityLevel) {
              case ImmediatePriority:
                return SyncLanePriority;
              case UserBlockingPriority:
                return InputContinuousLanePriority;
              case NormalPriority:
              case LowPriority:
                return DefaultLanePriority;
              case IdlePriority:
                return IdleLanePriority;
              default:
                return NoLanePriority;
            }
          }
          function lanePriorityToSchedulerPriority(lanePriority) {
            switch (lanePriority) {
              case SyncLanePriority:
              case SyncBatchedLanePriority:
                return ImmediatePriority;
              case InputDiscreteHydrationLanePriority:
              case InputDiscreteLanePriority:
              case InputContinuousHydrationLanePriority:
              case InputContinuousLanePriority:
                return UserBlockingPriority;
              case DefaultHydrationLanePriority:
              case DefaultLanePriority:
              case TransitionHydrationPriority:
              case TransitionPriority:
              case SelectiveHydrationLanePriority:
              case RetryLanePriority:
                return NormalPriority;
              case IdleHydrationLanePriority:
              case IdleLanePriority:
              case OffscreenLanePriority:
                return IdlePriority;
              case NoLanePriority:
                return NoPriority;
              default: {
                {
                  throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
                }
              }
            }
          }
          function getNextLanes(root, wipLanes) {
            var pendingLanes = root.pendingLanes;
            if (pendingLanes === NoLanes) {
              return_highestLanePriority = NoLanePriority;
              return NoLanes;
            }
            var nextLanes = NoLanes;
            var nextLanePriority = NoLanePriority;
            var expiredLanes = root.expiredLanes;
            var suspendedLanes = root.suspendedLanes;
            var pingedLanes = root.pingedLanes;
            if (expiredLanes !== NoLanes) {
              nextLanes = expiredLanes;
              nextLanePriority = return_highestLanePriority = SyncLanePriority;
            } else {
              var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
              if (nonIdlePendingLanes !== NoLanes) {
                var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
                if (nonIdleUnblockedLanes !== NoLanes) {
                  nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
                  nextLanePriority = return_highestLanePriority;
                } else {
                  var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
                  if (nonIdlePingedLanes !== NoLanes) {
                    nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
                    nextLanePriority = return_highestLanePriority;
                  }
                }
              } else {
                var unblockedLanes = pendingLanes & ~suspendedLanes;
                if (unblockedLanes !== NoLanes) {
                  nextLanes = getHighestPriorityLanes(unblockedLanes);
                  nextLanePriority = return_highestLanePriority;
                } else {
                  if (pingedLanes !== NoLanes) {
                    nextLanes = getHighestPriorityLanes(pingedLanes);
                    nextLanePriority = return_highestLanePriority;
                  }
                }
              }
            }
            if (nextLanes === NoLanes) {
              return NoLanes;
            }
            nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes);
            if (wipLanes !== NoLanes && wipLanes !== nextLanes && // If we already suspended with a delay, then interrupting is fine. Don't
            // bother waiting until the root is complete.
            (wipLanes & suspendedLanes) === NoLanes) {
              getHighestPriorityLanes(wipLanes);
              var wipLanePriority = return_highestLanePriority;
              if (nextLanePriority <= wipLanePriority) {
                return wipLanes;
              } else {
                return_highestLanePriority = nextLanePriority;
              }
            }
            var entangledLanes = root.entangledLanes;
            if (entangledLanes !== NoLanes) {
              var entanglements = root.entanglements;
              var lanes = nextLanes & entangledLanes;
              while (lanes > 0) {
                var index2 = pickArbitraryLaneIndex(lanes);
                var lane = 1 << index2;
                nextLanes |= entanglements[index2];
                lanes &= ~lane;
              }
            }
            return nextLanes;
          }
          function getMostRecentEventTime(root, lanes) {
            var eventTimes = root.eventTimes;
            var mostRecentEventTime = NoTimestamp;
            while (lanes > 0) {
              var index2 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index2;
              var eventTime = eventTimes[index2];
              if (eventTime > mostRecentEventTime) {
                mostRecentEventTime = eventTime;
              }
              lanes &= ~lane;
            }
            return mostRecentEventTime;
          }
          function computeExpirationTime(lane, currentTime) {
            getHighestPriorityLanes(lane);
            var priority = return_highestLanePriority;
            if (priority >= InputContinuousLanePriority) {
              return currentTime + 250;
            } else if (priority >= TransitionPriority) {
              return currentTime + 5e3;
            } else {
              return NoTimestamp;
            }
          }
          function markStarvedLanesAsExpired(root, currentTime) {
            var pendingLanes = root.pendingLanes;
            var suspendedLanes = root.suspendedLanes;
            var pingedLanes = root.pingedLanes;
            var expirationTimes = root.expirationTimes;
            var lanes = pendingLanes;
            while (lanes > 0) {
              var index2 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index2;
              var expirationTime = expirationTimes[index2];
              if (expirationTime === NoTimestamp) {
                if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
                  expirationTimes[index2] = computeExpirationTime(lane, currentTime);
                }
              } else if (expirationTime <= currentTime) {
                root.expiredLanes |= lane;
              }
              lanes &= ~lane;
            }
          }
          function getHighestPriorityPendingLanes(root) {
            return getHighestPriorityLanes(root.pendingLanes);
          }
          function getLanesToRetrySynchronouslyOnError(root) {
            var everythingButOffscreen = root.pendingLanes & ~OffscreenLane;
            if (everythingButOffscreen !== NoLanes) {
              return everythingButOffscreen;
            }
            if (everythingButOffscreen & OffscreenLane) {
              return OffscreenLane;
            }
            return NoLanes;
          }
          function returnNextLanesPriority() {
            return return_highestLanePriority;
          }
          function includesNonIdleWork(lanes) {
            return (lanes & NonIdleLanes) !== NoLanes;
          }
          function includesOnlyRetries(lanes) {
            return (lanes & RetryLanes) === lanes;
          }
          function includesOnlyTransitions(lanes) {
            return (lanes & TransitionLanes) === lanes;
          }
          function findUpdateLane(lanePriority, wipLanes) {
            switch (lanePriority) {
              case NoLanePriority:
                break;
              case SyncLanePriority:
                return SyncLane;
              case SyncBatchedLanePriority:
                return SyncBatchedLane;
              case InputDiscreteLanePriority: {
                var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);
                if (_lane === NoLane) {
                  return findUpdateLane(InputContinuousLanePriority, wipLanes);
                }
                return _lane;
              }
              case InputContinuousLanePriority: {
                var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);
                if (_lane2 === NoLane) {
                  return findUpdateLane(DefaultLanePriority, wipLanes);
                }
                return _lane2;
              }
              case DefaultLanePriority: {
                var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);
                if (_lane3 === NoLane) {
                  _lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);
                  if (_lane3 === NoLane) {
                    _lane3 = pickArbitraryLane(DefaultLanes);
                  }
                }
                return _lane3;
              }
              case TransitionPriority:
              case RetryLanePriority:
                break;
              case IdleLanePriority:
                var lane = pickArbitraryLane(IdleLanes & ~wipLanes);
                if (lane === NoLane) {
                  lane = pickArbitraryLane(IdleLanes);
                }
                return lane;
            }
            {
              {
                throw Error("Invalid update priority: " + lanePriority + ". This is a bug in React.");
              }
            }
          }
          function findTransitionLane(wipLanes, pendingLanes) {
            var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);
            if (lane === NoLane) {
              lane = pickArbitraryLane(TransitionLanes & ~wipLanes);
              if (lane === NoLane) {
                lane = pickArbitraryLane(TransitionLanes);
              }
            }
            return lane;
          }
          function findRetryLane(wipLanes) {
            var lane = pickArbitraryLane(RetryLanes & ~wipLanes);
            if (lane === NoLane) {
              lane = pickArbitraryLane(RetryLanes);
            }
            return lane;
          }
          function getHighestPriorityLane(lanes) {
            return lanes & -lanes;
          }
          function getLowestPriorityLane(lanes) {
            var index2 = 31 - clz32(lanes);
            return index2 < 0 ? NoLanes : 1 << index2;
          }
          function getEqualOrHigherPriorityLanes(lanes) {
            return (getLowestPriorityLane(lanes) << 1) - 1;
          }
          function pickArbitraryLane(lanes) {
            return getHighestPriorityLane(lanes);
          }
          function pickArbitraryLaneIndex(lanes) {
            return 31 - clz32(lanes);
          }
          function laneToIndex(lane) {
            return pickArbitraryLaneIndex(lane);
          }
          function includesSomeLane(a, b) {
            return (a & b) !== NoLanes;
          }
          function isSubsetOfLanes(set2, subset) {
            return (set2 & subset) === subset;
          }
          function mergeLanes(a, b) {
            return a | b;
          }
          function removeLanes(set2, subset) {
            return set2 & ~subset;
          }
          function laneToLanes(lane) {
            return lane;
          }
          function higherPriorityLane(a, b) {
            return a !== NoLane && a < b ? a : b;
          }
          function createLaneMap(initial) {
            var laneMap = [];
            for (var i = 0; i < TotalLanes; i++) {
              laneMap.push(initial);
            }
            return laneMap;
          }
          function markRootUpdated(root, updateLane, eventTime) {
            root.pendingLanes |= updateLane;
            var higherPriorityLanes = updateLane - 1;
            root.suspendedLanes &= higherPriorityLanes;
            root.pingedLanes &= higherPriorityLanes;
            var eventTimes = root.eventTimes;
            var index2 = laneToIndex(updateLane);
            eventTimes[index2] = eventTime;
          }
          function markRootSuspended(root, suspendedLanes) {
            root.suspendedLanes |= suspendedLanes;
            root.pingedLanes &= ~suspendedLanes;
            var expirationTimes = root.expirationTimes;
            var lanes = suspendedLanes;
            while (lanes > 0) {
              var index2 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index2;
              expirationTimes[index2] = NoTimestamp;
              lanes &= ~lane;
            }
          }
          function markRootPinged(root, pingedLanes, eventTime) {
            root.pingedLanes |= root.suspendedLanes & pingedLanes;
          }
          function markRootExpired(root, expiredLanes) {
            root.expiredLanes |= expiredLanes & root.pendingLanes;
          }
          function markDiscreteUpdatesExpired(root) {
            root.expiredLanes |= InputDiscreteLanes & root.pendingLanes;
          }
          function hasDiscreteLanes(lanes) {
            return (lanes & InputDiscreteLanes) !== NoLanes;
          }
          function markRootMutableRead(root, updateLane) {
            root.mutableReadLanes |= updateLane & root.pendingLanes;
          }
          function markRootFinished(root, remainingLanes) {
            var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
            root.pendingLanes = remainingLanes;
            root.suspendedLanes = 0;
            root.pingedLanes = 0;
            root.expiredLanes &= remainingLanes;
            root.mutableReadLanes &= remainingLanes;
            root.entangledLanes &= remainingLanes;
            var entanglements = root.entanglements;
            var eventTimes = root.eventTimes;
            var expirationTimes = root.expirationTimes;
            var lanes = noLongerPendingLanes;
            while (lanes > 0) {
              var index2 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index2;
              entanglements[index2] = NoLanes;
              eventTimes[index2] = NoTimestamp;
              expirationTimes[index2] = NoTimestamp;
              lanes &= ~lane;
            }
          }
          function markRootEntangled(root, entangledLanes) {
            root.entangledLanes |= entangledLanes;
            var entanglements = root.entanglements;
            var lanes = entangledLanes;
            while (lanes > 0) {
              var index2 = pickArbitraryLaneIndex(lanes);
              var lane = 1 << index2;
              entanglements[index2] |= entangledLanes;
              lanes &= ~lane;
            }
          }
          var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
          var log = Math.log;
          var LN2 = Math.LN2;
          function clz32Fallback(lanes) {
            if (lanes === 0) {
              return 32;
            }
            return 31 - (log(lanes) / LN2 | 0) | 0;
          }
          var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority, Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback, Scheduler_cancelCallback = Scheduler.unstable_cancelCallback, Scheduler_shouldYield = Scheduler.unstable_shouldYield, Scheduler_requestPaint = Scheduler.unstable_requestPaint, Scheduler_now$1 = Scheduler.unstable_now, Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority, Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, Scheduler_NormalPriority = Scheduler.unstable_NormalPriority, Scheduler_LowPriority = Scheduler.unstable_LowPriority, Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
          {
            if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
              {
                throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
              }
            }
          }
          var fakeCallbackNode = {};
          var ImmediatePriority$1 = 99;
          var UserBlockingPriority$1 = 98;
          var NormalPriority$1 = 97;
          var LowPriority$1 = 96;
          var IdlePriority$1 = 95;
          var NoPriority$1 = 90;
          var shouldYield = Scheduler_shouldYield;
          var requestPaint = (
            // Fall back gracefully if we're running an older version of Scheduler.
            Scheduler_requestPaint !== void 0 ? Scheduler_requestPaint : function() {
            }
          );
          var syncQueue = null;
          var immediateQueueCallbackNode = null;
          var isFlushingSyncQueue = false;
          var initialTimeMs$1 = Scheduler_now$1();
          var now$1 = initialTimeMs$1 < 1e4 ? Scheduler_now$1 : function() {
            return Scheduler_now$1() - initialTimeMs$1;
          };
          function getCurrentPriorityLevel() {
            switch (Scheduler_getCurrentPriorityLevel()) {
              case Scheduler_ImmediatePriority:
                return ImmediatePriority$1;
              case Scheduler_UserBlockingPriority:
                return UserBlockingPriority$1;
              case Scheduler_NormalPriority:
                return NormalPriority$1;
              case Scheduler_LowPriority:
                return LowPriority$1;
              case Scheduler_IdlePriority:
                return IdlePriority$1;
              default: {
                {
                  throw Error("Unknown priority level.");
                }
              }
            }
          }
          function reactPriorityToSchedulerPriority(reactPriorityLevel) {
            switch (reactPriorityLevel) {
              case ImmediatePriority$1:
                return Scheduler_ImmediatePriority;
              case UserBlockingPriority$1:
                return Scheduler_UserBlockingPriority;
              case NormalPriority$1:
                return Scheduler_NormalPriority;
              case LowPriority$1:
                return Scheduler_LowPriority;
              case IdlePriority$1:
                return Scheduler_IdlePriority;
              default: {
                {
                  throw Error("Unknown priority level.");
                }
              }
            }
          }
          function runWithPriority(reactPriorityLevel, fn) {
            var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
            return Scheduler_runWithPriority(priorityLevel, fn);
          }
          function scheduleCallback(reactPriorityLevel, callback, options) {
            var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
            return Scheduler_scheduleCallback(priorityLevel, callback, options);
          }
          function scheduleSyncCallback(callback) {
            if (syncQueue === null) {
              syncQueue = [callback];
              immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
            } else {
              syncQueue.push(callback);
            }
            return fakeCallbackNode;
          }
          function cancelCallback(callbackNode) {
            if (callbackNode !== fakeCallbackNode) {
              Scheduler_cancelCallback(callbackNode);
            }
          }
          function flushSyncCallbackQueue() {
            if (immediateQueueCallbackNode !== null) {
              var node = immediateQueueCallbackNode;
              immediateQueueCallbackNode = null;
              Scheduler_cancelCallback(node);
            }
            flushSyncCallbackQueueImpl();
          }
          function flushSyncCallbackQueueImpl() {
            if (!isFlushingSyncQueue && syncQueue !== null) {
              isFlushingSyncQueue = true;
              var i = 0;
              {
                try {
                  var _isSync2 = true;
                  var _queue = syncQueue;
                  runWithPriority(ImmediatePriority$1, function() {
                    for (; i < _queue.length; i++) {
                      var callback = _queue[i];
                      do {
                        callback = callback(_isSync2);
                      } while (callback !== null);
                    }
                  });
                  syncQueue = null;
                } catch (error2) {
                  if (syncQueue !== null) {
                    syncQueue = syncQueue.slice(i + 1);
                  }
                  Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
                  throw error2;
                } finally {
                  isFlushingSyncQueue = false;
                }
              }
            }
          }
          var NoMode = 0;
          var StrictMode = 1;
          var BlockingMode = 2;
          var ConcurrentMode = 4;
          var ProfileMode = 8;
          var DebugTracingMode = 16;
          var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
          var NoTransition = 0;
          function requestCurrentTransition() {
            return ReactCurrentBatchConfig.transition;
          }
          function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
          }
          var objectIs = typeof Object.is === "function" ? Object.is : is;
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          function shallowEqual(objA, objB) {
            if (objectIs(objA, objB)) {
              return true;
            }
            if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
              return false;
            }
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) {
              return false;
            }
            for (var i = 0; i < keysA.length; i++) {
              if (!hasOwnProperty2.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
                return false;
              }
            }
            return true;
          }
          function describeFiber(fiber) {
            var owner = fiber._debugOwner ? fiber._debugOwner.type : null;
            var source = fiber._debugSource;
            switch (fiber.tag) {
              case HostComponent:
                return describeBuiltInComponentFrame(fiber.type);
              case LazyComponent:
                return describeBuiltInComponentFrame("Lazy");
              case SuspenseComponent:
                return describeBuiltInComponentFrame("Suspense");
              case SuspenseListComponent:
                return describeBuiltInComponentFrame("SuspenseList");
              case FunctionComponent:
              case IndeterminateComponent:
              case SimpleMemoComponent:
                return describeFunctionComponentFrame(fiber.type);
              case ForwardRef:
                return describeFunctionComponentFrame(fiber.type.render);
              case Block:
                return describeFunctionComponentFrame(fiber.type._render);
              case ClassComponent:
                return describeClassComponentFrame(fiber.type);
              default:
                return "";
            }
          }
          function getStackByFiberInDevAndProd(workInProgress2) {
            try {
              var info = "";
              var node = workInProgress2;
              do {
                info += describeFiber(node);
                node = node.return;
              } while (node);
              return info;
            } catch (x) {
              return "\nError generating stack: " + x.message + "\n" + x.stack;
            }
          }
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          var current = null;
          var isRendering = false;
          function getCurrentFiberOwnerNameInDevOrNull() {
            {
              if (current === null) {
                return null;
              }
              var owner = current._debugOwner;
              if (owner !== null && typeof owner !== "undefined") {
                return getComponentName(owner.type);
              }
            }
            return null;
          }
          function getCurrentFiberStackInDev() {
            {
              if (current === null) {
                return "";
              }
              return getStackByFiberInDevAndProd(current);
            }
          }
          function resetCurrentFiber() {
            {
              ReactDebugCurrentFrame$1.getCurrentStack = null;
              current = null;
              isRendering = false;
            }
          }
          function setCurrentFiber(fiber) {
            {
              ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackInDev;
              current = fiber;
              isRendering = false;
            }
          }
          function setIsRendering(rendering) {
            {
              isRendering = rendering;
            }
          }
          function getIsRendering() {
            {
              return isRendering;
            }
          }
          var ReactStrictModeWarnings = {
            recordUnsafeLifecycleWarnings: function(fiber, instance) {
            },
            flushPendingUnsafeLifecycleWarnings: function() {
            },
            recordLegacyContextWarning: function(fiber, instance) {
            },
            flushLegacyContextWarning: function() {
            },
            discardPendingWarnings: function() {
            }
          };
          {
            var findStrictRoot = function(fiber) {
              var maybeStrictRoot = null;
              var node = fiber;
              while (node !== null) {
                if (node.mode & StrictMode) {
                  maybeStrictRoot = node;
                }
                node = node.return;
              }
              return maybeStrictRoot;
            };
            var setToSortedString = function(set2) {
              var array = [];
              set2.forEach(function(value) {
                array.push(value);
              });
              return array.sort().join(", ");
            };
            var pendingComponentWillMountWarnings = [];
            var pendingUNSAFE_ComponentWillMountWarnings = [];
            var pendingComponentWillReceivePropsWarnings = [];
            var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
            var pendingComponentWillUpdateWarnings = [];
            var pendingUNSAFE_ComponentWillUpdateWarnings = [];
            var didWarnAboutUnsafeLifecycles = /* @__PURE__ */ new Set();
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
              if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
                return;
              }
              if (typeof instance.componentWillMount === "function" && // Don't warn about react-lifecycles-compat polyfilled components.
              instance.componentWillMount.__suppressDeprecationWarning !== true) {
                pendingComponentWillMountWarnings.push(fiber);
              }
              if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === "function") {
                pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                pendingComponentWillReceivePropsWarnings.push(fiber);
              }
              if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                pendingComponentWillUpdateWarnings.push(fiber);
              }
              if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === "function") {
                pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
              }
            };
            ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
              var componentWillMountUniqueNames = /* @__PURE__ */ new Set();
              if (pendingComponentWillMountWarnings.length > 0) {
                pendingComponentWillMountWarnings.forEach(function(fiber) {
                  componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillMountWarnings = [];
              }
              var UNSAFE_componentWillMountUniqueNames = /* @__PURE__ */ new Set();
              if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
                pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
                  UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillMountWarnings = [];
              }
              var componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
              if (pendingComponentWillReceivePropsWarnings.length > 0) {
                pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
                  componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillReceivePropsWarnings = [];
              }
              var UNSAFE_componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
              if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
                pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
                  UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
              }
              var componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
              if (pendingComponentWillUpdateWarnings.length > 0) {
                pendingComponentWillUpdateWarnings.forEach(function(fiber) {
                  componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingComponentWillUpdateWarnings = [];
              }
              var UNSAFE_componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
              if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
                pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
                  UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutUnsafeLifecycles.add(fiber.type);
                });
                pendingUNSAFE_ComponentWillUpdateWarnings = [];
              }
              if (UNSAFE_componentWillMountUniqueNames.size > 0) {
                var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
                error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", sortedNames);
              }
              if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
                var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
                error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s", _sortedNames);
              }
              if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
                var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
                error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", _sortedNames2);
              }
              if (componentWillMountUniqueNames.size > 0) {
                var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
                warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames3);
              }
              if (componentWillReceivePropsUniqueNames.size > 0) {
                var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
                warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames4);
              }
              if (componentWillUpdateUniqueNames.size > 0) {
                var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
                warn("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames5);
              }
            };
            var pendingLegacyContextWarning = /* @__PURE__ */ new Map();
            var didWarnAboutLegacyContext = /* @__PURE__ */ new Set();
            ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
              var strictRoot = findStrictRoot(fiber);
              if (strictRoot === null) {
                error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
                return;
              }
              if (didWarnAboutLegacyContext.has(fiber.type)) {
                return;
              }
              var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
              if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
                if (warningsForRoot === void 0) {
                  warningsForRoot = [];
                  pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
                }
                warningsForRoot.push(fiber);
              }
            };
            ReactStrictModeWarnings.flushLegacyContextWarning = function() {
              pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
                if (fiberArray.length === 0) {
                  return;
                }
                var firstFiber = fiberArray[0];
                var uniqueNames = /* @__PURE__ */ new Set();
                fiberArray.forEach(function(fiber) {
                  uniqueNames.add(getComponentName(fiber.type) || "Component");
                  didWarnAboutLegacyContext.add(fiber.type);
                });
                var sortedNames = setToSortedString(uniqueNames);
                try {
                  setCurrentFiber(firstFiber);
                  error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", sortedNames);
                } finally {
                  resetCurrentFiber();
                }
              });
            };
            ReactStrictModeWarnings.discardPendingWarnings = function() {
              pendingComponentWillMountWarnings = [];
              pendingUNSAFE_ComponentWillMountWarnings = [];
              pendingComponentWillReceivePropsWarnings = [];
              pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
              pendingComponentWillUpdateWarnings = [];
              pendingUNSAFE_ComponentWillUpdateWarnings = [];
              pendingLegacyContextWarning = /* @__PURE__ */ new Map();
            };
          }
          function resolveDefaultProps(Component, baseProps) {
            if (Component && Component.defaultProps) {
              var props = _assign({}, baseProps);
              var defaultProps = Component.defaultProps;
              for (var propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
              return props;
            }
            return baseProps;
          }
          var MAX_SIGNED_31_BIT_INT = 1073741823;
          var valueCursor = createCursor(null);
          var rendererSigil;
          {
            rendererSigil = {};
          }
          var currentlyRenderingFiber = null;
          var lastContextDependency = null;
          var lastContextWithAllBitsObserved = null;
          var isDisallowedContextReadInDEV = false;
          function resetContextDependencies() {
            currentlyRenderingFiber = null;
            lastContextDependency = null;
            lastContextWithAllBitsObserved = null;
            {
              isDisallowedContextReadInDEV = false;
            }
          }
          function enterDisallowedContextReadInDEV() {
            {
              isDisallowedContextReadInDEV = true;
            }
          }
          function exitDisallowedContextReadInDEV() {
            {
              isDisallowedContextReadInDEV = false;
            }
          }
          function pushProvider(providerFiber, nextValue) {
            var context = providerFiber.type._context;
            if (isPrimaryRenderer) {
              push(valueCursor, context._currentValue, providerFiber);
              context._currentValue = nextValue;
              {
                if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                  error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                }
                context._currentRenderer = rendererSigil;
              }
            } else {
              push(valueCursor, context._currentValue2, providerFiber);
              context._currentValue2 = nextValue;
              {
                if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                  error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                }
                context._currentRenderer2 = rendererSigil;
              }
            }
          }
          function popProvider(providerFiber) {
            var currentValue = valueCursor.current;
            pop(valueCursor, providerFiber);
            var context = providerFiber.type._context;
            if (isPrimaryRenderer) {
              context._currentValue = currentValue;
            } else {
              context._currentValue2 = currentValue;
            }
          }
          function calculateChangedBits(context, newValue, oldValue) {
            if (objectIs(oldValue, newValue)) {
              return 0;
            } else {
              var changedBits = typeof context._calculateChangedBits === "function" ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
              {
                if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
                  error("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", changedBits);
                }
              }
              return changedBits | 0;
            }
          }
          function scheduleWorkOnParentPath(parent, renderLanes2) {
            var node = parent;
            while (node !== null) {
              var alternate = node.alternate;
              if (!isSubsetOfLanes(node.childLanes, renderLanes2)) {
                node.childLanes = mergeLanes(node.childLanes, renderLanes2);
                if (alternate !== null) {
                  alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
                }
              } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes2)) {
                alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
              } else {
                break;
              }
              node = node.return;
            }
          }
          function propagateContextChange(workInProgress2, context, changedBits, renderLanes2) {
            var fiber = workInProgress2.child;
            if (fiber !== null) {
              fiber.return = workInProgress2;
            }
            while (fiber !== null) {
              var nextFiber = void 0;
              var list = fiber.dependencies;
              if (list !== null) {
                nextFiber = fiber.child;
                var dependency = list.firstContext;
                while (dependency !== null) {
                  if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
                    if (fiber.tag === ClassComponent) {
                      var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes2));
                      update.tag = ForceUpdate;
                      enqueueUpdate(fiber, update);
                    }
                    fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
                    var alternate = fiber.alternate;
                    if (alternate !== null) {
                      alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
                    }
                    scheduleWorkOnParentPath(fiber.return, renderLanes2);
                    list.lanes = mergeLanes(list.lanes, renderLanes2);
                    break;
                  }
                  dependency = dependency.next;
                }
              } else if (fiber.tag === ContextProvider) {
                nextFiber = fiber.type === workInProgress2.type ? null : fiber.child;
              } else {
                nextFiber = fiber.child;
              }
              if (nextFiber !== null) {
                nextFiber.return = fiber;
              } else {
                nextFiber = fiber;
                while (nextFiber !== null) {
                  if (nextFiber === workInProgress2) {
                    nextFiber = null;
                    break;
                  }
                  var sibling = nextFiber.sibling;
                  if (sibling !== null) {
                    sibling.return = nextFiber.return;
                    nextFiber = sibling;
                    break;
                  }
                  nextFiber = nextFiber.return;
                }
              }
              fiber = nextFiber;
            }
          }
          function prepareToReadContext(workInProgress2, renderLanes2) {
            currentlyRenderingFiber = workInProgress2;
            lastContextDependency = null;
            lastContextWithAllBitsObserved = null;
            var dependencies = workInProgress2.dependencies;
            if (dependencies !== null) {
              var firstContext = dependencies.firstContext;
              if (firstContext !== null) {
                if (includesSomeLane(dependencies.lanes, renderLanes2)) {
                  markWorkInProgressReceivedUpdate();
                }
                dependencies.firstContext = null;
              }
            }
          }
          function readContext(context, observedBits) {
            {
              if (isDisallowedContextReadInDEV) {
                error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
              }
            }
            if (lastContextWithAllBitsObserved === context)
              ;
            else if (observedBits === false || observedBits === 0)
              ;
            else {
              var resolvedObservedBits;
              if (typeof observedBits !== "number" || observedBits === MAX_SIGNED_31_BIT_INT) {
                lastContextWithAllBitsObserved = context;
                resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
              } else {
                resolvedObservedBits = observedBits;
              }
              var contextItem = {
                context,
                observedBits: resolvedObservedBits,
                next: null
              };
              if (lastContextDependency === null) {
                if (!(currentlyRenderingFiber !== null)) {
                  {
                    throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
                  }
                }
                lastContextDependency = contextItem;
                currentlyRenderingFiber.dependencies = {
                  lanes: NoLanes,
                  firstContext: contextItem,
                  responders: null
                };
              } else {
                lastContextDependency = lastContextDependency.next = contextItem;
              }
            }
            return isPrimaryRenderer ? context._currentValue : context._currentValue2;
          }
          var UpdateState = 0;
          var ReplaceState = 1;
          var ForceUpdate = 2;
          var CaptureUpdate = 3;
          var hasForceUpdate = false;
          var didWarnUpdateInsideUpdate;
          var currentlyProcessingQueue;
          {
            didWarnUpdateInsideUpdate = false;
            currentlyProcessingQueue = null;
          }
          function initializeUpdateQueue(fiber) {
            var queue = {
              baseState: fiber.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: {
                pending: null
              },
              effects: null
            };
            fiber.updateQueue = queue;
          }
          function cloneUpdateQueue(current2, workInProgress2) {
            var queue = workInProgress2.updateQueue;
            var currentQueue = current2.updateQueue;
            if (queue === currentQueue) {
              var clone = {
                baseState: currentQueue.baseState,
                firstBaseUpdate: currentQueue.firstBaseUpdate,
                lastBaseUpdate: currentQueue.lastBaseUpdate,
                shared: currentQueue.shared,
                effects: currentQueue.effects
              };
              workInProgress2.updateQueue = clone;
            }
          }
          function createUpdate(eventTime, lane) {
            var update = {
              eventTime,
              lane,
              tag: UpdateState,
              payload: null,
              callback: null,
              next: null
            };
            return update;
          }
          function enqueueUpdate(fiber, update) {
            var updateQueue = fiber.updateQueue;
            if (updateQueue === null) {
              return;
            }
            var sharedQueue = updateQueue.shared;
            var pending = sharedQueue.pending;
            if (pending === null) {
              update.next = update;
            } else {
              update.next = pending.next;
              pending.next = update;
            }
            sharedQueue.pending = update;
            {
              if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
                error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.");
                didWarnUpdateInsideUpdate = true;
              }
            }
          }
          function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
            var queue = workInProgress2.updateQueue;
            var current2 = workInProgress2.alternate;
            if (current2 !== null) {
              var currentQueue = current2.updateQueue;
              if (queue === currentQueue) {
                var newFirst = null;
                var newLast = null;
                var firstBaseUpdate = queue.firstBaseUpdate;
                if (firstBaseUpdate !== null) {
                  var update = firstBaseUpdate;
                  do {
                    var clone = {
                      eventTime: update.eventTime,
                      lane: update.lane,
                      tag: update.tag,
                      payload: update.payload,
                      callback: update.callback,
                      next: null
                    };
                    if (newLast === null) {
                      newFirst = newLast = clone;
                    } else {
                      newLast.next = clone;
                      newLast = clone;
                    }
                    update = update.next;
                  } while (update !== null);
                  if (newLast === null) {
                    newFirst = newLast = capturedUpdate;
                  } else {
                    newLast.next = capturedUpdate;
                    newLast = capturedUpdate;
                  }
                } else {
                  newFirst = newLast = capturedUpdate;
                }
                queue = {
                  baseState: currentQueue.baseState,
                  firstBaseUpdate: newFirst,
                  lastBaseUpdate: newLast,
                  shared: currentQueue.shared,
                  effects: currentQueue.effects
                };
                workInProgress2.updateQueue = queue;
                return;
              }
            }
            var lastBaseUpdate = queue.lastBaseUpdate;
            if (lastBaseUpdate === null) {
              queue.firstBaseUpdate = capturedUpdate;
            } else {
              lastBaseUpdate.next = capturedUpdate;
            }
            queue.lastBaseUpdate = capturedUpdate;
          }
          function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
            switch (update.tag) {
              case ReplaceState: {
                var payload = update.payload;
                if (typeof payload === "function") {
                  {
                    enterDisallowedContextReadInDEV();
                  }
                  var nextState = payload.call(instance, prevState, nextProps);
                  {
                    if (workInProgress2.mode & StrictMode) {
                      disableLogs();
                      try {
                        payload.call(instance, prevState, nextProps);
                      } finally {
                        reenableLogs();
                      }
                    }
                    exitDisallowedContextReadInDEV();
                  }
                  return nextState;
                }
                return payload;
              }
              case CaptureUpdate: {
                workInProgress2.flags = workInProgress2.flags & ~ShouldCapture | DidCapture;
              }
              case UpdateState: {
                var _payload = update.payload;
                var partialState;
                if (typeof _payload === "function") {
                  {
                    enterDisallowedContextReadInDEV();
                  }
                  partialState = _payload.call(instance, prevState, nextProps);
                  {
                    if (workInProgress2.mode & StrictMode) {
                      disableLogs();
                      try {
                        _payload.call(instance, prevState, nextProps);
                      } finally {
                        reenableLogs();
                      }
                    }
                    exitDisallowedContextReadInDEV();
                  }
                } else {
                  partialState = _payload;
                }
                if (partialState === null || partialState === void 0) {
                  return prevState;
                }
                return _assign({}, prevState, partialState);
              }
              case ForceUpdate: {
                hasForceUpdate = true;
                return prevState;
              }
            }
            return prevState;
          }
          function processUpdateQueue(workInProgress2, props, instance, renderLanes2) {
            var queue = workInProgress2.updateQueue;
            hasForceUpdate = false;
            {
              currentlyProcessingQueue = queue.shared;
            }
            var firstBaseUpdate = queue.firstBaseUpdate;
            var lastBaseUpdate = queue.lastBaseUpdate;
            var pendingQueue = queue.shared.pending;
            if (pendingQueue !== null) {
              queue.shared.pending = null;
              var lastPendingUpdate = pendingQueue;
              var firstPendingUpdate = lastPendingUpdate.next;
              lastPendingUpdate.next = null;
              if (lastBaseUpdate === null) {
                firstBaseUpdate = firstPendingUpdate;
              } else {
                lastBaseUpdate.next = firstPendingUpdate;
              }
              lastBaseUpdate = lastPendingUpdate;
              var current2 = workInProgress2.alternate;
              if (current2 !== null) {
                var currentQueue = current2.updateQueue;
                var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
                if (currentLastBaseUpdate !== lastBaseUpdate) {
                  if (currentLastBaseUpdate === null) {
                    currentQueue.firstBaseUpdate = firstPendingUpdate;
                  } else {
                    currentLastBaseUpdate.next = firstPendingUpdate;
                  }
                  currentQueue.lastBaseUpdate = lastPendingUpdate;
                }
              }
            }
            if (firstBaseUpdate !== null) {
              var newState = queue.baseState;
              var newLanes = NoLanes;
              var newBaseState = null;
              var newFirstBaseUpdate = null;
              var newLastBaseUpdate = null;
              var update = firstBaseUpdate;
              do {
                var updateLane = update.lane;
                var updateEventTime = update.eventTime;
                if (!isSubsetOfLanes(renderLanes2, updateLane)) {
                  var clone = {
                    eventTime: updateEventTime,
                    lane: updateLane,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null
                  };
                  if (newLastBaseUpdate === null) {
                    newFirstBaseUpdate = newLastBaseUpdate = clone;
                    newBaseState = newState;
                  } else {
                    newLastBaseUpdate = newLastBaseUpdate.next = clone;
                  }
                  newLanes = mergeLanes(newLanes, updateLane);
                } else {
                  if (newLastBaseUpdate !== null) {
                    var _clone = {
                      eventTime: updateEventTime,
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: NoLane,
                      tag: update.tag,
                      payload: update.payload,
                      callback: update.callback,
                      next: null
                    };
                    newLastBaseUpdate = newLastBaseUpdate.next = _clone;
                  }
                  newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance);
                  var callback = update.callback;
                  if (callback !== null) {
                    workInProgress2.flags |= Callback;
                    var effects = queue.effects;
                    if (effects === null) {
                      queue.effects = [update];
                    } else {
                      effects.push(update);
                    }
                  }
                }
                update = update.next;
                if (update === null) {
                  pendingQueue = queue.shared.pending;
                  if (pendingQueue === null) {
                    break;
                  } else {
                    var _lastPendingUpdate = pendingQueue;
                    var _firstPendingUpdate = _lastPendingUpdate.next;
                    _lastPendingUpdate.next = null;
                    update = _firstPendingUpdate;
                    queue.lastBaseUpdate = _lastPendingUpdate;
                    queue.shared.pending = null;
                  }
                }
              } while (true);
              if (newLastBaseUpdate === null) {
                newBaseState = newState;
              }
              queue.baseState = newBaseState;
              queue.firstBaseUpdate = newFirstBaseUpdate;
              queue.lastBaseUpdate = newLastBaseUpdate;
              markSkippedUpdateLanes(newLanes);
              workInProgress2.lanes = newLanes;
              workInProgress2.memoizedState = newState;
            }
            {
              currentlyProcessingQueue = null;
            }
          }
          function callCallback(callback, context) {
            if (!(typeof callback === "function")) {
              {
                throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + callback);
              }
            }
            callback.call(context);
          }
          function resetHasForceUpdateBeforeProcessing() {
            hasForceUpdate = false;
          }
          function checkHasForceUpdateAfterProcessing() {
            return hasForceUpdate;
          }
          function commitUpdateQueue(finishedWork, finishedQueue, instance) {
            var effects = finishedQueue.effects;
            finishedQueue.effects = null;
            if (effects !== null) {
              for (var i = 0; i < effects.length; i++) {
                var effect = effects[i];
                var callback = effect.callback;
                if (callback !== null) {
                  effect.callback = null;
                  callCallback(callback, instance);
                }
              }
            }
          }
          var fakeInternalInstance = {};
          var isArray = Array.isArray;
          var emptyRefsObject = new React.Component().refs;
          var didWarnAboutStateAssignmentForComponent;
          var didWarnAboutUninitializedState;
          var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
          var didWarnAboutLegacyLifecyclesAndDerivedState;
          var didWarnAboutUndefinedDerivedState;
          var warnOnUndefinedDerivedState;
          var warnOnInvalidCallback;
          var didWarnAboutDirectlyAssigningPropsToState;
          var didWarnAboutContextTypeAndContextTypes;
          var didWarnAboutInvalidateContextType;
          {
            didWarnAboutStateAssignmentForComponent = /* @__PURE__ */ new Set();
            didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
            didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
            didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
            didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
            didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
            didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
            var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
            warnOnInvalidCallback = function(callback, callerName) {
              if (callback === null || typeof callback === "function") {
                return;
              }
              var key = callerName + "_" + callback;
              if (!didWarnOnInvalidCallback.has(key)) {
                didWarnOnInvalidCallback.add(key);
                error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
              }
            };
            warnOnUndefinedDerivedState = function(type, partialState) {
              if (partialState === void 0) {
                var componentName = getComponentName(type) || "Component";
                if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                  didWarnAboutUndefinedDerivedState.add(componentName);
                  error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
                }
              }
            };
            Object.defineProperty(fakeInternalInstance, "_processChildContext", {
              enumerable: false,
              value: function() {
                {
                  {
                    throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
                  }
                }
              }
            });
            Object.freeze(fakeInternalInstance);
          }
          function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
            var prevState = workInProgress2.memoizedState;
            {
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  getDerivedStateFromProps(nextProps, prevState);
                } finally {
                  reenableLogs();
                }
              }
            }
            var partialState = getDerivedStateFromProps(nextProps, prevState);
            {
              warnOnUndefinedDerivedState(ctor, partialState);
            }
            var memoizedState = partialState === null || partialState === void 0 ? prevState : _assign({}, prevState, partialState);
            workInProgress2.memoizedState = memoizedState;
            if (workInProgress2.lanes === NoLanes) {
              var updateQueue = workInProgress2.updateQueue;
              updateQueue.baseState = memoizedState;
            }
          }
          var classComponentUpdater = {
            isMounted,
            enqueueSetState: function(inst, payload, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.payload = payload;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "setState");
                }
                update.callback = callback;
              }
              enqueueUpdate(fiber, update);
              scheduleUpdateOnFiber(fiber, lane, eventTime);
            },
            enqueueReplaceState: function(inst, payload, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.tag = ReplaceState;
              update.payload = payload;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "replaceState");
                }
                update.callback = callback;
              }
              enqueueUpdate(fiber, update);
              scheduleUpdateOnFiber(fiber, lane, eventTime);
            },
            enqueueForceUpdate: function(inst, callback) {
              var fiber = get(inst);
              var eventTime = requestEventTime();
              var lane = requestUpdateLane(fiber);
              var update = createUpdate(eventTime, lane);
              update.tag = ForceUpdate;
              if (callback !== void 0 && callback !== null) {
                {
                  warnOnInvalidCallback(callback, "forceUpdate");
                }
                update.callback = callback;
              }
              enqueueUpdate(fiber, update);
              scheduleUpdateOnFiber(fiber, lane, eventTime);
            }
          };
          function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
            var instance = workInProgress2.stateNode;
            if (typeof instance.shouldComponentUpdate === "function") {
              {
                if (workInProgress2.mode & StrictMode) {
                  disableLogs();
                  try {
                    instance.shouldComponentUpdate(newProps, newState, nextContext);
                  } finally {
                    reenableLogs();
                  }
                }
              }
              var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
              {
                if (shouldUpdate === void 0) {
                  error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentName(ctor) || "Component");
                }
              }
              return shouldUpdate;
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent) {
              return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
            }
            return true;
          }
          function checkClassInstance(workInProgress2, ctor, newProps) {
            var instance = workInProgress2.stateNode;
            {
              var name = getComponentName(ctor) || "Component";
              var renderPresent = instance.render;
              if (!renderPresent) {
                if (ctor.prototype && typeof ctor.prototype.render === "function") {
                  error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
                } else {
                  error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
                }
              }
              if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
                error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
              }
              if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
              }
              if (instance.propTypes) {
                error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
              }
              if (instance.contextType) {
                error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
              }
              {
                if (instance.contextTypes) {
                  error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
                }
                if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                  didWarnAboutContextTypeAndContextTypes.add(ctor);
                  error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
                }
              }
              if (typeof instance.componentShouldUpdate === "function") {
                error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
              }
              if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
                error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentName(ctor) || "A pure component");
              }
              if (typeof instance.componentDidUnmount === "function") {
                error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
              }
              if (typeof instance.componentDidReceiveProps === "function") {
                error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
              }
              if (typeof instance.componentWillRecieveProps === "function") {
                error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
              }
              if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
                error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
              }
              var hasMutatedProps = instance.props !== newProps;
              if (instance.props !== void 0 && hasMutatedProps) {
                error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
              }
              if (instance.defaultProps) {
                error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
                didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
                error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentName(ctor));
              }
              if (typeof instance.getDerivedStateFromProps === "function") {
                error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
              }
              if (typeof instance.getDerivedStateFromError === "function") {
                error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
              }
              if (typeof ctor.getSnapshotBeforeUpdate === "function") {
                error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
              }
              var _state = instance.state;
              if (_state && (typeof _state !== "object" || isArray(_state))) {
                error("%s.state: must be set to an object or null", name);
              }
              if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
                error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
              }
            }
          }
          function adoptClassInstance(workInProgress2, instance) {
            instance.updater = classComponentUpdater;
            workInProgress2.stateNode = instance;
            set(instance, workInProgress2);
            {
              instance._reactInternalInstance = fakeInternalInstance;
            }
          }
          function constructClassInstance(workInProgress2, ctor, props) {
            var isLegacyContextConsumer = false;
            var unmaskedContext = emptyContextObject;
            var context = emptyContextObject;
            var contextType = ctor.contextType;
            {
              if ("contextType" in ctor) {
                var isValid = (
                  // Allow null for conditional declaration
                  contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
                );
                if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                  didWarnAboutInvalidateContextType.add(ctor);
                  var addendum = "";
                  if (contextType === void 0) {
                    addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                  } else if (typeof contextType !== "object") {
                    addendum = " However, it is set to a " + typeof contextType + ".";
                  } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                    addendum = " Did you accidentally pass the Context.Provider instead?";
                  } else if (contextType._context !== void 0) {
                    addendum = " Did you accidentally pass the Context.Consumer instead?";
                  } else {
                    addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                  }
                  error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(ctor) || "Component", addendum);
                }
              }
            }
            if (typeof contextType === "object" && contextType !== null) {
              context = readContext(contextType);
            } else {
              unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              var contextTypes = ctor.contextTypes;
              isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
              context = isLegacyContextConsumer ? getMaskedContext(workInProgress2, unmaskedContext) : emptyContextObject;
            }
            {
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  new ctor(props, context);
                } finally {
                  reenableLogs();
                }
              }
            }
            var instance = new ctor(props, context);
            var state = workInProgress2.memoizedState = instance.state !== null && instance.state !== void 0 ? instance.state : null;
            adoptClassInstance(workInProgress2, instance);
            {
              if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
                var componentName = getComponentName(ctor) || "Component";
                if (!didWarnAboutUninitializedState.has(componentName)) {
                  didWarnAboutUninitializedState.add(componentName);
                  error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
                }
              }
              if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
                var foundWillMountName = null;
                var foundWillReceivePropsName = null;
                var foundWillUpdateName = null;
                if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                  foundWillMountName = "componentWillMount";
                } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                  foundWillMountName = "UNSAFE_componentWillMount";
                }
                if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                  foundWillReceivePropsName = "componentWillReceiveProps";
                } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                  foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
                }
                if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                  foundWillUpdateName = "componentWillUpdate";
                } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                  foundWillUpdateName = "UNSAFE_componentWillUpdate";
                }
                if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                  var _componentName = getComponentName(ctor) || "Component";
                  var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                  if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                    didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                    error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                  }
                }
              }
            }
            if (isLegacyContextConsumer) {
              cacheContext(workInProgress2, unmaskedContext, context);
            }
            return instance;
          }
          function callComponentWillMount(workInProgress2, instance) {
            var oldState = instance.state;
            if (typeof instance.componentWillMount === "function") {
              instance.componentWillMount();
            }
            if (typeof instance.UNSAFE_componentWillMount === "function") {
              instance.UNSAFE_componentWillMount();
            }
            if (oldState !== instance.state) {
              {
                error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentName(workInProgress2.type) || "Component");
              }
              classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
          }
          function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
            var oldState = instance.state;
            if (typeof instance.componentWillReceiveProps === "function") {
              instance.componentWillReceiveProps(newProps, nextContext);
            }
            if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
            }
            if (instance.state !== oldState) {
              {
                var componentName = getComponentName(workInProgress2.type) || "Component";
                if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
                  didWarnAboutStateAssignmentForComponent.add(componentName);
                  error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
                }
              }
              classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
          }
          function mountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
            {
              checkClassInstance(workInProgress2, ctor, newProps);
            }
            var instance = workInProgress2.stateNode;
            instance.props = newProps;
            instance.state = workInProgress2.memoizedState;
            instance.refs = emptyRefsObject;
            initializeUpdateQueue(workInProgress2);
            var contextType = ctor.contextType;
            if (typeof contextType === "object" && contextType !== null) {
              instance.context = readContext(contextType);
            } else {
              var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              instance.context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            {
              if (instance.state === newProps) {
                var componentName = getComponentName(ctor) || "Component";
                if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                  didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                  error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
                }
              }
              if (workInProgress2.mode & StrictMode) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
              }
              {
                ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
              }
            }
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            instance.state = workInProgress2.memoizedState;
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              instance.state = workInProgress2.memoizedState;
            }
            if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
              callComponentWillMount(workInProgress2, instance);
              processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
              instance.state = workInProgress2.memoizedState;
            }
            if (typeof instance.componentDidMount === "function") {
              workInProgress2.flags |= Update;
            }
          }
          function resumeMountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
            var instance = workInProgress2.stateNode;
            var oldProps = workInProgress2.memoizedProps;
            instance.props = oldProps;
            var oldContext = instance.context;
            var contextType = ctor.contextType;
            var nextContext = emptyContextObject;
            if (typeof contextType === "object" && contextType !== null) {
              nextContext = readContext(contextType);
            } else {
              var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
              if (oldProps !== newProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
              }
            }
            resetHasForceUpdateBeforeProcessing();
            var oldState = workInProgress2.memoizedState;
            var newState = instance.state = oldState;
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            newState = workInProgress2.memoizedState;
            if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
              if (typeof instance.componentDidMount === "function") {
                workInProgress2.flags |= Update;
              }
              return false;
            }
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              newState = workInProgress2.memoizedState;
            }
            var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
            if (shouldUpdate) {
              if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
                if (typeof instance.componentWillMount === "function") {
                  instance.componentWillMount();
                }
                if (typeof instance.UNSAFE_componentWillMount === "function") {
                  instance.UNSAFE_componentWillMount();
                }
              }
              if (typeof instance.componentDidMount === "function") {
                workInProgress2.flags |= Update;
              }
            } else {
              if (typeof instance.componentDidMount === "function") {
                workInProgress2.flags |= Update;
              }
              workInProgress2.memoizedProps = newProps;
              workInProgress2.memoizedState = newState;
            }
            instance.props = newProps;
            instance.state = newState;
            instance.context = nextContext;
            return shouldUpdate;
          }
          function updateClassInstance(current2, workInProgress2, ctor, newProps, renderLanes2) {
            var instance = workInProgress2.stateNode;
            cloneUpdateQueue(current2, workInProgress2);
            var unresolvedOldProps = workInProgress2.memoizedProps;
            var oldProps = workInProgress2.type === workInProgress2.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress2.type, unresolvedOldProps);
            instance.props = oldProps;
            var unresolvedNewProps = workInProgress2.pendingProps;
            var oldContext = instance.context;
            var contextType = ctor.contextType;
            var nextContext = emptyContextObject;
            if (typeof contextType === "object" && contextType !== null) {
              nextContext = readContext(contextType);
            } else {
              var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
              nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
            if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
              if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
                callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
              }
            }
            resetHasForceUpdateBeforeProcessing();
            var oldState = workInProgress2.memoizedState;
            var newState = instance.state = oldState;
            processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
            newState = workInProgress2.memoizedState;
            if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
              if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Update;
                }
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Snapshot;
                }
              }
              return false;
            }
            if (typeof getDerivedStateFromProps === "function") {
              applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
              newState = workInProgress2.memoizedState;
            }
            var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
            if (shouldUpdate) {
              if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
                if (typeof instance.componentWillUpdate === "function") {
                  instance.componentWillUpdate(newProps, newState, nextContext);
                }
                if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                  instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
                }
              }
              if (typeof instance.componentDidUpdate === "function") {
                workInProgress2.flags |= Update;
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                workInProgress2.flags |= Snapshot;
              }
            } else {
              if (typeof instance.componentDidUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Update;
                }
              }
              if (typeof instance.getSnapshotBeforeUpdate === "function") {
                if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
                  workInProgress2.flags |= Snapshot;
                }
              }
              workInProgress2.memoizedProps = newProps;
              workInProgress2.memoizedState = newState;
            }
            instance.props = newProps;
            instance.state = newState;
            instance.context = nextContext;
            return shouldUpdate;
          }
          var didWarnAboutMaps;
          var didWarnAboutGenerators;
          var didWarnAboutStringRefs;
          var ownerHasKeyUseWarning;
          var ownerHasFunctionTypeWarning;
          var warnForMissingKey = function(child, returnFiber) {
          };
          {
            didWarnAboutMaps = false;
            didWarnAboutGenerators = false;
            didWarnAboutStringRefs = {};
            ownerHasKeyUseWarning = {};
            ownerHasFunctionTypeWarning = {};
            warnForMissingKey = function(child, returnFiber) {
              if (child === null || typeof child !== "object") {
                return;
              }
              if (!child._store || child._store.validated || child.key != null) {
                return;
              }
              if (!(typeof child._store === "object")) {
                {
                  throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              child._store.validated = true;
              var componentName = getComponentName(returnFiber.type) || "Component";
              if (ownerHasKeyUseWarning[componentName]) {
                return;
              }
              ownerHasKeyUseWarning[componentName] = true;
              error('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.');
            };
          }
          var isArray$1 = Array.isArray;
          function coerceRef(returnFiber, current2, element) {
            var mixedRef = element.ref;
            if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
              {
                if ((returnFiber.mode & StrictMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
                // because these cannot be automatically converted to an arrow function
                // using a codemod. Therefore, we don't have to warn about string refs again.
                !(element._owner && element._self && element._owner.stateNode !== element._self)) {
                  var componentName = getComponentName(returnFiber.type) || "Component";
                  if (!didWarnAboutStringRefs[componentName]) {
                    {
                      error('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', mixedRef);
                    }
                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
              if (element._owner) {
                var owner = element._owner;
                var inst;
                if (owner) {
                  var ownerFiber = owner;
                  if (!(ownerFiber.tag === ClassComponent)) {
                    {
                      throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                    }
                  }
                  inst = ownerFiber.stateNode;
                }
                if (!inst) {
                  {
                    throw Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue.");
                  }
                }
                var stringRef = "" + mixedRef;
                if (current2 !== null && current2.ref !== null && typeof current2.ref === "function" && current2.ref._stringRef === stringRef) {
                  return current2.ref;
                }
                var ref = function(value) {
                  var refs = inst.refs;
                  if (refs === emptyRefsObject) {
                    refs = inst.refs = {};
                  }
                  if (value === null) {
                    delete refs[stringRef];
                  } else {
                    refs[stringRef] = value;
                  }
                };
                ref._stringRef = stringRef;
                return ref;
              } else {
                if (!(typeof mixedRef === "string")) {
                  {
                    throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                  }
                }
                if (!element._owner) {
                  {
                    throw Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");
                  }
                }
              }
            }
            return mixedRef;
          }
          function throwOnInvalidObjectType(returnFiber, newChild) {
            if (returnFiber.type !== "textarea") {
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : newChild) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          function warnOnFunctionType(returnFiber) {
            {
              var componentName = getComponentName(returnFiber.type) || "Component";
              if (ownerHasFunctionTypeWarning[componentName]) {
                return;
              }
              ownerHasFunctionTypeWarning[componentName] = true;
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
          function ChildReconciler(shouldTrackSideEffects) {
            function deleteChild(returnFiber, childToDelete) {
              if (!shouldTrackSideEffects) {
                return;
              }
              var last = returnFiber.lastEffect;
              if (last !== null) {
                last.nextEffect = childToDelete;
                returnFiber.lastEffect = childToDelete;
              } else {
                returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
              }
              childToDelete.nextEffect = null;
              childToDelete.flags = Deletion;
            }
            function deleteRemainingChildren(returnFiber, currentFirstChild) {
              if (!shouldTrackSideEffects) {
                return null;
              }
              var childToDelete = currentFirstChild;
              while (childToDelete !== null) {
                deleteChild(returnFiber, childToDelete);
                childToDelete = childToDelete.sibling;
              }
              return null;
            }
            function mapRemainingChildren(returnFiber, currentFirstChild) {
              var existingChildren = /* @__PURE__ */ new Map();
              var existingChild = currentFirstChild;
              while (existingChild !== null) {
                if (existingChild.key !== null) {
                  existingChildren.set(existingChild.key, existingChild);
                } else {
                  existingChildren.set(existingChild.index, existingChild);
                }
                existingChild = existingChild.sibling;
              }
              return existingChildren;
            }
            function useFiber(fiber, pendingProps) {
              var clone = createWorkInProgress(fiber, pendingProps);
              clone.index = 0;
              clone.sibling = null;
              return clone;
            }
            function placeChild(newFiber, lastPlacedIndex, newIndex) {
              newFiber.index = newIndex;
              if (!shouldTrackSideEffects) {
                return lastPlacedIndex;
              }
              var current2 = newFiber.alternate;
              if (current2 !== null) {
                var oldIndex = current2.index;
                if (oldIndex < lastPlacedIndex) {
                  newFiber.flags = Placement;
                  return lastPlacedIndex;
                } else {
                  return oldIndex;
                }
              } else {
                newFiber.flags = Placement;
                return lastPlacedIndex;
              }
            }
            function placeSingleChild(newFiber) {
              if (shouldTrackSideEffects && newFiber.alternate === null) {
                newFiber.flags = Placement;
              }
              return newFiber;
            }
            function updateTextNode(returnFiber, current2, textContent, lanes) {
              if (current2 === null || current2.tag !== HostText) {
                var created = createFiberFromText(textContent, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, textContent);
                existing.return = returnFiber;
                return existing;
              }
            }
            function updateElement(returnFiber, current2, element, lanes) {
              if (current2 !== null) {
                if (current2.elementType === element.type || // Keep this check inline so it only runs on the false path:
                isCompatibleFamilyForHotReloading(current2, element)) {
                  var existing = useFiber(current2, element.props);
                  existing.ref = coerceRef(returnFiber, current2, element);
                  existing.return = returnFiber;
                  {
                    existing._debugSource = element._source;
                    existing._debugOwner = element._owner;
                  }
                  return existing;
                }
              }
              var created = createFiberFromElement(element, returnFiber.mode, lanes);
              created.ref = coerceRef(returnFiber, current2, element);
              created.return = returnFiber;
              return created;
            }
            function updatePortal(returnFiber, current2, portal, lanes) {
              if (current2 === null || current2.tag !== HostPortal || current2.stateNode.containerInfo !== portal.containerInfo || current2.stateNode.implementation !== portal.implementation) {
                var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, portal.children || []);
                existing.return = returnFiber;
                return existing;
              }
            }
            function updateFragment2(returnFiber, current2, fragment, lanes, key) {
              if (current2 === null || current2.tag !== Fragment) {
                var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
                created.return = returnFiber;
                return created;
              } else {
                var existing = useFiber(current2, fragment);
                existing.return = returnFiber;
                return existing;
              }
            }
            function createChild(returnFiber, newChild, lanes) {
              if (typeof newChild === "string" || typeof newChild === "number") {
                var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
                created.return = returnFiber;
                return created;
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
                    _created.ref = coerceRef(returnFiber, null, newChild);
                    _created.return = returnFiber;
                    return _created;
                  }
                  case REACT_PORTAL_TYPE: {
                    var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                    _created2.return = returnFiber;
                    return _created2;
                  }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                  var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
                  _created3.return = returnFiber;
                  return _created3;
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function updateSlot(returnFiber, oldFiber, newChild, lanes) {
              var key = oldFiber !== null ? oldFiber.key : null;
              if (typeof newChild === "string" || typeof newChild === "number") {
                if (key !== null) {
                  return null;
                }
                return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    if (newChild.key === key) {
                      if (newChild.type === REACT_FRAGMENT_TYPE) {
                        return updateFragment2(returnFiber, oldFiber, newChild.props.children, lanes, key);
                      }
                      return updateElement(returnFiber, oldFiber, newChild, lanes);
                    } else {
                      return null;
                    }
                  }
                  case REACT_PORTAL_TYPE: {
                    if (newChild.key === key) {
                      return updatePortal(returnFiber, oldFiber, newChild, lanes);
                    } else {
                      return null;
                    }
                  }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                  if (key !== null) {
                    return null;
                  }
                  return updateFragment2(returnFiber, oldFiber, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
              if (typeof newChild === "string" || typeof newChild === "number") {
                var matchedFiber = existingChildren.get(newIdx) || null;
                return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
              }
              if (typeof newChild === "object" && newChild !== null) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE: {
                    var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    if (newChild.type === REACT_FRAGMENT_TYPE) {
                      return updateFragment2(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
                    }
                    return updateElement(returnFiber, _matchedFiber, newChild, lanes);
                  }
                  case REACT_PORTAL_TYPE: {
                    var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
                    return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
                  }
                }
                if (isArray$1(newChild) || getIteratorFn(newChild)) {
                  var _matchedFiber3 = existingChildren.get(newIdx) || null;
                  return updateFragment2(returnFiber, _matchedFiber3, newChild, lanes, null);
                }
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              return null;
            }
            function warnOnInvalidKey(child, knownKeys, returnFiber) {
              {
                if (typeof child !== "object" || child === null) {
                  return knownKeys;
                }
                switch (child.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    warnForMissingKey(child, returnFiber);
                    var key = child.key;
                    if (typeof key !== "string") {
                      break;
                    }
                    if (knownKeys === null) {
                      knownKeys = /* @__PURE__ */ new Set();
                      knownKeys.add(key);
                      break;
                    }
                    if (!knownKeys.has(key)) {
                      knownKeys.add(key);
                      break;
                    }
                    error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", key);
                    break;
                }
              }
              return knownKeys;
            }
            function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
              {
                var knownKeys = null;
                for (var i = 0; i < newChildren.length; i++) {
                  var child = newChildren[i];
                  knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                }
              }
              var resultingFirstChild = null;
              var previousNewFiber = null;
              var oldFiber = currentFirstChild;
              var lastPlacedIndex = 0;
              var newIdx = 0;
              var nextOldFiber = null;
              for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
                if (oldFiber.index > newIdx) {
                  nextOldFiber = oldFiber;
                  oldFiber = null;
                } else {
                  nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
                if (newFiber === null) {
                  if (oldFiber === null) {
                    oldFiber = nextOldFiber;
                  }
                  break;
                }
                if (shouldTrackSideEffects) {
                  if (oldFiber && newFiber.alternate === null) {
                    deleteChild(returnFiber, oldFiber);
                  }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = newFiber;
                } else {
                  previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
              }
              if (newIdx === newChildren.length) {
                deleteRemainingChildren(returnFiber, oldFiber);
                return resultingFirstChild;
              }
              if (oldFiber === null) {
                for (; newIdx < newChildren.length; newIdx++) {
                  var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
                  if (_newFiber === null) {
                    continue;
                  }
                  lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber;
                  } else {
                    previousNewFiber.sibling = _newFiber;
                  }
                  previousNewFiber = _newFiber;
                }
                return resultingFirstChild;
              }
              var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
              for (; newIdx < newChildren.length; newIdx++) {
                var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
                if (_newFiber2 !== null) {
                  if (shouldTrackSideEffects) {
                    if (_newFiber2.alternate !== null) {
                      existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                    }
                  }
                  lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber2;
                  } else {
                    previousNewFiber.sibling = _newFiber2;
                  }
                  previousNewFiber = _newFiber2;
                }
              }
              if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child2) {
                  return deleteChild(returnFiber, child2);
                });
              }
              return resultingFirstChild;
            }
            function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
              var iteratorFn = getIteratorFn(newChildrenIterable);
              if (!(typeof iteratorFn === "function")) {
                {
                  throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
              {
                if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
                newChildrenIterable[Symbol.toStringTag] === "Generator") {
                  if (!didWarnAboutGenerators) {
                    error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
                  }
                  didWarnAboutGenerators = true;
                }
                if (newChildrenIterable.entries === iteratorFn) {
                  if (!didWarnAboutMaps) {
                    error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
                var _newChildren = iteratorFn.call(newChildrenIterable);
                if (_newChildren) {
                  var knownKeys = null;
                  var _step = _newChildren.next();
                  for (; !_step.done; _step = _newChildren.next()) {
                    var child = _step.value;
                    knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
                  }
                }
              }
              var newChildren = iteratorFn.call(newChildrenIterable);
              if (!(newChildren != null)) {
                {
                  throw Error("An iterable object provided no iterator.");
                }
              }
              var resultingFirstChild = null;
              var previousNewFiber = null;
              var oldFiber = currentFirstChild;
              var lastPlacedIndex = 0;
              var newIdx = 0;
              var nextOldFiber = null;
              var step = newChildren.next();
              for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
                if (oldFiber.index > newIdx) {
                  nextOldFiber = oldFiber;
                  oldFiber = null;
                } else {
                  nextOldFiber = oldFiber.sibling;
                }
                var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
                if (newFiber === null) {
                  if (oldFiber === null) {
                    oldFiber = nextOldFiber;
                  }
                  break;
                }
                if (shouldTrackSideEffects) {
                  if (oldFiber && newFiber.alternate === null) {
                    deleteChild(returnFiber, oldFiber);
                  }
                }
                lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
                if (previousNewFiber === null) {
                  resultingFirstChild = newFiber;
                } else {
                  previousNewFiber.sibling = newFiber;
                }
                previousNewFiber = newFiber;
                oldFiber = nextOldFiber;
              }
              if (step.done) {
                deleteRemainingChildren(returnFiber, oldFiber);
                return resultingFirstChild;
              }
              if (oldFiber === null) {
                for (; !step.done; newIdx++, step = newChildren.next()) {
                  var _newFiber3 = createChild(returnFiber, step.value, lanes);
                  if (_newFiber3 === null) {
                    continue;
                  }
                  lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber3;
                  } else {
                    previousNewFiber.sibling = _newFiber3;
                  }
                  previousNewFiber = _newFiber3;
                }
                return resultingFirstChild;
              }
              var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
              for (; !step.done; newIdx++, step = newChildren.next()) {
                var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
                if (_newFiber4 !== null) {
                  if (shouldTrackSideEffects) {
                    if (_newFiber4.alternate !== null) {
                      existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                    }
                  }
                  lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
                  if (previousNewFiber === null) {
                    resultingFirstChild = _newFiber4;
                  } else {
                    previousNewFiber.sibling = _newFiber4;
                  }
                  previousNewFiber = _newFiber4;
                }
              }
              if (shouldTrackSideEffects) {
                existingChildren.forEach(function(child2) {
                  return deleteChild(returnFiber, child2);
                });
              }
              return resultingFirstChild;
            }
            function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
              if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
                deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
                var existing = useFiber(currentFirstChild, textContent);
                existing.return = returnFiber;
                return existing;
              }
              deleteRemainingChildren(returnFiber, currentFirstChild);
              var created = createFiberFromText(textContent, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            }
            function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
              var key = element.key;
              var child = currentFirstChild;
              while (child !== null) {
                if (child.key === key) {
                  switch (child.tag) {
                    case Fragment: {
                      if (element.type === REACT_FRAGMENT_TYPE) {
                        deleteRemainingChildren(returnFiber, child.sibling);
                        var existing = useFiber(child, element.props.children);
                        existing.return = returnFiber;
                        {
                          existing._debugSource = element._source;
                          existing._debugOwner = element._owner;
                        }
                        return existing;
                      }
                      break;
                    }
                    case Block:
                    default: {
                      if (child.elementType === element.type || // Keep this check inline so it only runs on the false path:
                      isCompatibleFamilyForHotReloading(child, element)) {
                        deleteRemainingChildren(returnFiber, child.sibling);
                        var _existing3 = useFiber(child, element.props);
                        _existing3.ref = coerceRef(returnFiber, child, element);
                        _existing3.return = returnFiber;
                        {
                          _existing3._debugSource = element._source;
                          _existing3._debugOwner = element._owner;
                        }
                        return _existing3;
                      }
                      break;
                    }
                  }
                  deleteRemainingChildren(returnFiber, child);
                  break;
                } else {
                  deleteChild(returnFiber, child);
                }
                child = child.sibling;
              }
              if (element.type === REACT_FRAGMENT_TYPE) {
                var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
                created.return = returnFiber;
                return created;
              } else {
                var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
                _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
                _created4.return = returnFiber;
                return _created4;
              }
            }
            function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
              var key = portal.key;
              var child = currentFirstChild;
              while (child !== null) {
                if (child.key === key) {
                  if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    var existing = useFiber(child, portal.children || []);
                    existing.return = returnFiber;
                    return existing;
                  } else {
                    deleteRemainingChildren(returnFiber, child);
                    break;
                  }
                } else {
                  deleteChild(returnFiber, child);
                }
                child = child.sibling;
              }
              var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
              created.return = returnFiber;
              return created;
            }
            function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, lanes) {
              var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
              if (isUnkeyedTopLevelFragment) {
                newChild = newChild.props.children;
              }
              var isObject = typeof newChild === "object" && newChild !== null;
              if (isObject) {
                switch (newChild.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                    return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
                  case REACT_PORTAL_TYPE:
                    return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
                }
              }
              if (typeof newChild === "string" || typeof newChild === "number") {
                return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
              }
              if (isArray$1(newChild)) {
                return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
              }
              if (getIteratorFn(newChild)) {
                return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
              }
              if (isObject) {
                throwOnInvalidObjectType(returnFiber, newChild);
              }
              {
                if (typeof newChild === "function") {
                  warnOnFunctionType(returnFiber);
                }
              }
              if (typeof newChild === "undefined" && !isUnkeyedTopLevelFragment) {
                switch (returnFiber.tag) {
                  case ClassComponent: {
                    {
                      var instance = returnFiber.stateNode;
                      if (instance.render._isMockFunction) {
                        break;
                      }
                    }
                  }
                  case Block:
                  case FunctionComponent:
                  case ForwardRef:
                  case SimpleMemoComponent: {
                    {
                      {
                        throw Error((getComponentName(returnFiber.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
                      }
                    }
                  }
                }
              }
              return deleteRemainingChildren(returnFiber, currentFirstChild);
            }
            return reconcileChildFibers2;
          }
          var reconcileChildFibers = ChildReconciler(true);
          var mountChildFibers = ChildReconciler(false);
          function cloneChildFibers(current2, workInProgress2) {
            if (!(current2 === null || workInProgress2.child === current2.child)) {
              {
                throw Error("Resuming work not yet implemented.");
              }
            }
            if (workInProgress2.child === null) {
              return;
            }
            var currentChild = workInProgress2.child;
            var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
            workInProgress2.child = newChild;
            newChild.return = workInProgress2;
            while (currentChild.sibling !== null) {
              currentChild = currentChild.sibling;
              newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
              newChild.return = workInProgress2;
            }
            newChild.sibling = null;
          }
          function resetChildFibers(workInProgress2, lanes) {
            var child = workInProgress2.child;
            while (child !== null) {
              resetWorkInProgress(child, lanes);
              child = child.sibling;
            }
          }
          var NO_CONTEXT = {};
          var contextStackCursor$1 = createCursor(NO_CONTEXT);
          var contextFiberStackCursor = createCursor(NO_CONTEXT);
          var rootInstanceStackCursor = createCursor(NO_CONTEXT);
          function requiredContext(c) {
            if (!(c !== NO_CONTEXT)) {
              {
                throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            return c;
          }
          function getRootHostContainer() {
            var rootInstance = requiredContext(rootInstanceStackCursor.current);
            return rootInstance;
          }
          function pushHostContainer(fiber, nextRootInstance) {
            push(rootInstanceStackCursor, nextRootInstance, fiber);
            push(contextFiberStackCursor, fiber, fiber);
            push(contextStackCursor$1, NO_CONTEXT, fiber);
            var nextRootContext = getRootHostContext(nextRootInstance);
            pop(contextStackCursor$1, fiber);
            push(contextStackCursor$1, nextRootContext, fiber);
          }
          function popHostContainer(fiber) {
            pop(contextStackCursor$1, fiber);
            pop(contextFiberStackCursor, fiber);
            pop(rootInstanceStackCursor, fiber);
          }
          function getHostContext() {
            var context = requiredContext(contextStackCursor$1.current);
            return context;
          }
          function pushHostContext(fiber) {
            var rootInstance = requiredContext(rootInstanceStackCursor.current);
            var context = requiredContext(contextStackCursor$1.current);
            var nextContext = getChildHostContext(context, fiber.type, rootInstance);
            if (context === nextContext) {
              return;
            }
            push(contextFiberStackCursor, fiber, fiber);
            push(contextStackCursor$1, nextContext, fiber);
          }
          function popHostContext(fiber) {
            if (contextFiberStackCursor.current !== fiber) {
              return;
            }
            pop(contextStackCursor$1, fiber);
            pop(contextFiberStackCursor, fiber);
          }
          var DefaultSuspenseContext = 0;
          var SubtreeSuspenseContextMask = 1;
          var InvisibleParentSuspenseContext = 1;
          var ForceSuspenseFallback = 2;
          var suspenseStackCursor = createCursor(DefaultSuspenseContext);
          function hasSuspenseContext(parentContext, flag) {
            return (parentContext & flag) !== 0;
          }
          function setDefaultShallowSuspenseContext(parentContext) {
            return parentContext & SubtreeSuspenseContextMask;
          }
          function setShallowSuspenseContext(parentContext, shallowContext) {
            return parentContext & SubtreeSuspenseContextMask | shallowContext;
          }
          function addSubtreeSuspenseContext(parentContext, subtreeContext) {
            return parentContext | subtreeContext;
          }
          function pushSuspenseContext(fiber, newContext) {
            push(suspenseStackCursor, newContext, fiber);
          }
          function popSuspenseContext(fiber) {
            pop(suspenseStackCursor, fiber);
          }
          function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
            var nextState = workInProgress2.memoizedState;
            if (nextState !== null) {
              if (nextState.dehydrated !== null) {
                return true;
              }
              return false;
            }
            var props = workInProgress2.memoizedProps;
            if (props.fallback === void 0) {
              return false;
            }
            if (props.unstable_avoidThisFallback !== true) {
              return true;
            }
            if (hasInvisibleParent) {
              return false;
            }
            return true;
          }
          function findFirstSuspended(row) {
            var node = row;
            while (node !== null) {
              if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                  var dehydrated = state.dehydrated;
                  if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
                    return node;
                  }
                }
              } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
              // keep track of whether it suspended or not.
              node.memoizedProps.revealOrder !== void 0) {
                var didSuspend = (node.flags & DidCapture) !== NoFlags;
                if (didSuspend) {
                  return node;
                }
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === row) {
                return null;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === row) {
                  return null;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
            return null;
          }
          var NoFlags$1 = (
            /*  */
            0
          );
          var HasEffect = (
            /* */
            1
          );
          var Layout = (
            /*    */
            2
          );
          var Passive$1 = (
            /*   */
            4
          );
          var hydrationParentFiber = null;
          var nextHydratableInstance = null;
          var isHydrating = false;
          function enterHydrationState(fiber) {
            if (!supportsHydration) {
              return false;
            }
            var parentInstance = fiber.stateNode.containerInfo;
            nextHydratableInstance = getFirstHydratableChild(parentInstance);
            hydrationParentFiber = fiber;
            isHydrating = true;
            return true;
          }
          function deleteHydratableInstance(returnFiber, instance) {
            {
              switch (returnFiber.tag) {
                case HostRoot:
                  didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
                  break;
                case HostComponent:
                  didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
                  break;
              }
            }
            var childToDelete = createFiberFromHostInstanceForDeletion();
            childToDelete.stateNode = instance;
            childToDelete.return = returnFiber;
            childToDelete.flags = Deletion;
            if (returnFiber.lastEffect !== null) {
              returnFiber.lastEffect.nextEffect = childToDelete;
              returnFiber.lastEffect = childToDelete;
            } else {
              returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
            }
          }
          function insertNonHydratedInstance(returnFiber, fiber) {
            fiber.flags = fiber.flags & ~Hydrating | Placement;
            {
              switch (returnFiber.tag) {
                case HostRoot: {
                  var parentContainer = returnFiber.stateNode.containerInfo;
                  switch (fiber.tag) {
                    case HostComponent:
                      var type = fiber.type;
                      var props = fiber.pendingProps;
                      didNotFindHydratableContainerInstance(parentContainer, type, props);
                      break;
                    case HostText:
                      var text = fiber.pendingProps;
                      didNotFindHydratableContainerTextInstance(parentContainer, text);
                      break;
                    case SuspenseComponent:
                      didNotFindHydratableContainerSuspenseInstance(parentContainer);
                      break;
                  }
                  break;
                }
                case HostComponent: {
                  var parentType = returnFiber.type;
                  var parentProps = returnFiber.memoizedProps;
                  var parentInstance = returnFiber.stateNode;
                  switch (fiber.tag) {
                    case HostComponent:
                      var _type = fiber.type;
                      var _props = fiber.pendingProps;
                      didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                      break;
                    case HostText:
                      var _text = fiber.pendingProps;
                      didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                      break;
                    case SuspenseComponent:
                      didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                      break;
                  }
                  break;
                }
                default:
                  return;
              }
            }
          }
          function tryHydrate(fiber, nextInstance) {
            switch (fiber.tag) {
              case HostComponent: {
                var type = fiber.type;
                var props = fiber.pendingProps;
                var instance = canHydrateInstance(nextInstance, type, props);
                if (instance !== null) {
                  fiber.stateNode = instance;
                  return true;
                }
                return false;
              }
              case HostText: {
                var text = fiber.pendingProps;
                var textInstance = canHydrateTextInstance(nextInstance, text);
                if (textInstance !== null) {
                  fiber.stateNode = textInstance;
                  return true;
                }
                return false;
              }
              case SuspenseComponent: {
                return false;
              }
              default:
                return false;
            }
          }
          function tryToClaimNextHydratableInstance(fiber) {
            if (!isHydrating) {
              return;
            }
            var nextInstance = nextHydratableInstance;
            if (!nextInstance) {
              insertNonHydratedInstance(hydrationParentFiber, fiber);
              isHydrating = false;
              hydrationParentFiber = fiber;
              return;
            }
            var firstAttemptedInstance = nextInstance;
            if (!tryHydrate(fiber, nextInstance)) {
              nextInstance = getNextHydratableSibling(firstAttemptedInstance);
              if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
                insertNonHydratedInstance(hydrationParentFiber, fiber);
                isHydrating = false;
                hydrationParentFiber = fiber;
                return;
              }
              deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
            }
            hydrationParentFiber = fiber;
            nextHydratableInstance = getFirstHydratableChild(nextInstance);
          }
          function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
            if (!supportsHydration) {
              {
                {
                  throw Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            var instance = fiber.stateNode;
            var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
            fiber.updateQueue = updatePayload;
            if (updatePayload !== null) {
              return true;
            }
            return false;
          }
          function prepareToHydrateHostTextInstance(fiber) {
            if (!supportsHydration) {
              {
                {
                  throw Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            var textInstance = fiber.stateNode;
            var textContent = fiber.memoizedProps;
            var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
            {
              if (shouldUpdate) {
                var returnFiber = hydrationParentFiber;
                if (returnFiber !== null) {
                  switch (returnFiber.tag) {
                    case HostRoot: {
                      var parentContainer = returnFiber.stateNode.containerInfo;
                      didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                      break;
                    }
                    case HostComponent: {
                      var parentType = returnFiber.type;
                      var parentProps = returnFiber.memoizedProps;
                      var parentInstance = returnFiber.stateNode;
                      didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                      break;
                    }
                  }
                }
              }
            }
            return shouldUpdate;
          }
          function skipPastDehydratedSuspenseInstance(fiber) {
            if (!supportsHydration) {
              {
                {
                  throw Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            var suspenseState = fiber.memoizedState;
            var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
            if (!suspenseInstance) {
              {
                throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
          }
          function popToNextHostParent(fiber) {
            var parent = fiber.return;
            while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
              parent = parent.return;
            }
            hydrationParentFiber = parent;
          }
          function popHydrationState(fiber) {
            if (!supportsHydration) {
              return false;
            }
            if (fiber !== hydrationParentFiber) {
              return false;
            }
            if (!isHydrating) {
              popToNextHostParent(fiber);
              isHydrating = true;
              return false;
            }
            var type = fiber.type;
            if (fiber.tag !== HostComponent || type !== "head" && type !== "body" && !shouldSetTextContent(type, fiber.memoizedProps)) {
              var nextInstance = nextHydratableInstance;
              while (nextInstance) {
                deleteHydratableInstance(fiber, nextInstance);
                nextInstance = getNextHydratableSibling(nextInstance);
              }
            }
            popToNextHostParent(fiber);
            if (fiber.tag === SuspenseComponent) {
              nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
            } else {
              nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
            }
            return true;
          }
          function resetHydrationState() {
            if (!supportsHydration) {
              return;
            }
            hydrationParentFiber = null;
            nextHydratableInstance = null;
            isHydrating = false;
          }
          function getIsHydrating() {
            return isHydrating;
          }
          var workInProgressSources = [];
          var rendererSigil$1;
          {
            rendererSigil$1 = {};
          }
          function markSourceAsDirty(mutableSource) {
            workInProgressSources.push(mutableSource);
          }
          function resetWorkInProgressVersions() {
            for (var i = 0; i < workInProgressSources.length; i++) {
              var mutableSource = workInProgressSources[i];
              if (isPrimaryRenderer) {
                mutableSource._workInProgressVersionPrimary = null;
              } else {
                mutableSource._workInProgressVersionSecondary = null;
              }
            }
            workInProgressSources.length = 0;
          }
          function getWorkInProgressVersion(mutableSource) {
            if (isPrimaryRenderer) {
              return mutableSource._workInProgressVersionPrimary;
            } else {
              return mutableSource._workInProgressVersionSecondary;
            }
          }
          function setWorkInProgressVersion(mutableSource, version) {
            if (isPrimaryRenderer) {
              mutableSource._workInProgressVersionPrimary = version;
            } else {
              mutableSource._workInProgressVersionSecondary = version;
            }
            workInProgressSources.push(mutableSource);
          }
          function warnAboutMultipleRenderersDEV(mutableSource) {
            {
              if (isPrimaryRenderer) {
                if (mutableSource._currentPrimaryRenderer == null) {
                  mutableSource._currentPrimaryRenderer = rendererSigil$1;
                } else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
                  error("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
                }
              } else {
                if (mutableSource._currentSecondaryRenderer == null) {
                  mutableSource._currentSecondaryRenderer = rendererSigil$1;
                } else if (mutableSource._currentSecondaryRenderer !== rendererSigil$1) {
                  error("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
                }
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
          var didWarnAboutMismatchedHooksForComponent;
          var didWarnAboutUseOpaqueIdentifier;
          {
            didWarnAboutUseOpaqueIdentifier = {};
            didWarnAboutMismatchedHooksForComponent = /* @__PURE__ */ new Set();
          }
          var renderLanes = NoLanes;
          var currentlyRenderingFiber$1 = null;
          var currentHook = null;
          var workInProgressHook = null;
          var didScheduleRenderPhaseUpdate = false;
          var didScheduleRenderPhaseUpdateDuringThisPass = false;
          var RE_RENDER_LIMIT = 25;
          var currentHookNameInDev = null;
          var hookTypesDev = null;
          var hookTypesUpdateIndexDev = -1;
          var ignorePreviousDependencies = false;
          function mountHookTypesDev() {
            {
              var hookName = currentHookNameInDev;
              if (hookTypesDev === null) {
                hookTypesDev = [hookName];
              } else {
                hookTypesDev.push(hookName);
              }
            }
          }
          function updateHookTypesDev() {
            {
              var hookName = currentHookNameInDev;
              if (hookTypesDev !== null) {
                hookTypesUpdateIndexDev++;
                if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
                  warnOnHookMismatchInDev(hookName);
                }
              }
            }
          }
          function checkDepsAreArrayDev(deps) {
            {
              if (deps !== void 0 && deps !== null && !Array.isArray(deps)) {
                error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
              }
            }
          }
          function warnOnHookMismatchInDev(currentHookName) {
            {
              var componentName = getComponentName(currentlyRenderingFiber$1.type);
              if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
                didWarnAboutMismatchedHooksForComponent.add(componentName);
                if (hookTypesDev !== null) {
                  var table = "";
                  var secondColumnStart = 30;
                  for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
                    var oldHookName = hookTypesDev[i];
                    var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                    var row = i + 1 + ". " + oldHookName;
                    while (row.length < secondColumnStart) {
                      row += " ";
                    }
                    row += newHookName + "\n";
                    table += row;
                  }
                  error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
                }
              }
            }
          }
          function throwInvalidHookError() {
            {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
          }
          function areHookInputsEqual(nextDeps, prevDeps) {
            {
              if (ignorePreviousDependencies) {
                return false;
              }
            }
            if (prevDeps === null) {
              {
                error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
              }
              return false;
            }
            {
              if (nextDeps.length !== prevDeps.length) {
                error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
              }
            }
            for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
              if (objectIs(nextDeps[i], prevDeps[i])) {
                continue;
              }
              return false;
            }
            return true;
          }
          function renderWithHooks(current2, workInProgress2, Component, props, secondArg, nextRenderLanes) {
            renderLanes = nextRenderLanes;
            currentlyRenderingFiber$1 = workInProgress2;
            {
              hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
              hookTypesUpdateIndexDev = -1;
              ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
            }
            workInProgress2.memoizedState = null;
            workInProgress2.updateQueue = null;
            workInProgress2.lanes = NoLanes;
            {
              if (current2 !== null && current2.memoizedState !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
              } else if (hookTypesDev !== null) {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
              } else {
                ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
              }
            }
            var children = Component(props, secondArg);
            if (didScheduleRenderPhaseUpdateDuringThisPass) {
              var numberOfReRenders = 0;
              do {
                didScheduleRenderPhaseUpdateDuringThisPass = false;
                if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
                  {
                    throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
                  }
                }
                numberOfReRenders += 1;
                {
                  ignorePreviousDependencies = false;
                }
                currentHook = null;
                workInProgressHook = null;
                workInProgress2.updateQueue = null;
                {
                  hookTypesUpdateIndexDev = -1;
                }
                ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
                children = Component(props, secondArg);
              } while (didScheduleRenderPhaseUpdateDuringThisPass);
            }
            ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
            {
              workInProgress2._debugHookTypes = hookTypesDev;
            }
            var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
            renderLanes = NoLanes;
            currentlyRenderingFiber$1 = null;
            currentHook = null;
            workInProgressHook = null;
            {
              currentHookNameInDev = null;
              hookTypesDev = null;
              hookTypesUpdateIndexDev = -1;
            }
            didScheduleRenderPhaseUpdate = false;
            if (!!didRenderTooFewHooks) {
              {
                throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
              }
            }
            return children;
          }
          function bailoutHooks(current2, workInProgress2, lanes) {
            workInProgress2.updateQueue = current2.updateQueue;
            workInProgress2.flags &= ~(Passive | Update);
            current2.lanes = removeLanes(current2.lanes, lanes);
          }
          function resetHooksAfterThrow() {
            ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
            if (didScheduleRenderPhaseUpdate) {
              var hook = currentlyRenderingFiber$1.memoizedState;
              while (hook !== null) {
                var queue = hook.queue;
                if (queue !== null) {
                  queue.pending = null;
                }
                hook = hook.next;
              }
              didScheduleRenderPhaseUpdate = false;
            }
            renderLanes = NoLanes;
            currentlyRenderingFiber$1 = null;
            currentHook = null;
            workInProgressHook = null;
            {
              hookTypesDev = null;
              hookTypesUpdateIndexDev = -1;
              currentHookNameInDev = null;
              isUpdatingOpaqueValueInRenderPhase = false;
            }
            didScheduleRenderPhaseUpdateDuringThisPass = false;
          }
          function mountWorkInProgressHook() {
            var hook = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null
            };
            if (workInProgressHook === null) {
              currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
            } else {
              workInProgressHook = workInProgressHook.next = hook;
            }
            return workInProgressHook;
          }
          function updateWorkInProgressHook() {
            var nextCurrentHook;
            if (currentHook === null) {
              var current2 = currentlyRenderingFiber$1.alternate;
              if (current2 !== null) {
                nextCurrentHook = current2.memoizedState;
              } else {
                nextCurrentHook = null;
              }
            } else {
              nextCurrentHook = currentHook.next;
            }
            var nextWorkInProgressHook;
            if (workInProgressHook === null) {
              nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
            } else {
              nextWorkInProgressHook = workInProgressHook.next;
            }
            if (nextWorkInProgressHook !== null) {
              workInProgressHook = nextWorkInProgressHook;
              nextWorkInProgressHook = workInProgressHook.next;
              currentHook = nextCurrentHook;
            } else {
              if (!(nextCurrentHook !== null)) {
                {
                  throw Error("Rendered more hooks than during the previous render.");
                }
              }
              currentHook = nextCurrentHook;
              var newHook = {
                memoizedState: currentHook.memoizedState,
                baseState: currentHook.baseState,
                baseQueue: currentHook.baseQueue,
                queue: currentHook.queue,
                next: null
              };
              if (workInProgressHook === null) {
                currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
              } else {
                workInProgressHook = workInProgressHook.next = newHook;
              }
            }
            return workInProgressHook;
          }
          function createFunctionComponentUpdateQueue() {
            return {
              lastEffect: null
            };
          }
          function basicStateReducer(state, action) {
            return typeof action === "function" ? action(state) : action;
          }
          function mountReducer(reducer, initialArg, init) {
            var hook = mountWorkInProgressHook();
            var initialState;
            if (init !== void 0) {
              initialState = init(initialArg);
            } else {
              initialState = initialArg;
            }
            hook.memoizedState = hook.baseState = initialState;
            var queue = hook.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: reducer,
              lastRenderedState: initialState
            };
            var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
            return [hook.memoizedState, dispatch];
          }
          function updateReducer(reducer, initialArg, init) {
            var hook = updateWorkInProgressHook();
            var queue = hook.queue;
            if (!(queue !== null)) {
              {
                throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
              }
            }
            queue.lastRenderedReducer = reducer;
            var current2 = currentHook;
            var baseQueue = current2.baseQueue;
            var pendingQueue = queue.pending;
            if (pendingQueue !== null) {
              if (baseQueue !== null) {
                var baseFirst = baseQueue.next;
                var pendingFirst = pendingQueue.next;
                baseQueue.next = pendingFirst;
                pendingQueue.next = baseFirst;
              }
              {
                if (current2.baseQueue !== baseQueue) {
                  error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
                }
              }
              current2.baseQueue = baseQueue = pendingQueue;
              queue.pending = null;
            }
            if (baseQueue !== null) {
              var first = baseQueue.next;
              var newState = current2.baseState;
              var newBaseState = null;
              var newBaseQueueFirst = null;
              var newBaseQueueLast = null;
              var update = first;
              do {
                var updateLane = update.lane;
                if (!isSubsetOfLanes(renderLanes, updateLane)) {
                  var clone = {
                    lane: updateLane,
                    action: update.action,
                    eagerReducer: update.eagerReducer,
                    eagerState: update.eagerState,
                    next: null
                  };
                  if (newBaseQueueLast === null) {
                    newBaseQueueFirst = newBaseQueueLast = clone;
                    newBaseState = newState;
                  } else {
                    newBaseQueueLast = newBaseQueueLast.next = clone;
                  }
                  currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
                  markSkippedUpdateLanes(updateLane);
                } else {
                  if (newBaseQueueLast !== null) {
                    var _clone = {
                      // This update is going to be committed so we never want uncommit
                      // it. Using NoLane works because 0 is a subset of all bitmasks, so
                      // this will never be skipped by the check above.
                      lane: NoLane,
                      action: update.action,
                      eagerReducer: update.eagerReducer,
                      eagerState: update.eagerState,
                      next: null
                    };
                    newBaseQueueLast = newBaseQueueLast.next = _clone;
                  }
                  if (update.eagerReducer === reducer) {
                    newState = update.eagerState;
                  } else {
                    var action = update.action;
                    newState = reducer(newState, action);
                  }
                }
                update = update.next;
              } while (update !== null && update !== first);
              if (newBaseQueueLast === null) {
                newBaseState = newState;
              } else {
                newBaseQueueLast.next = newBaseQueueFirst;
              }
              if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = newState;
              hook.baseState = newBaseState;
              hook.baseQueue = newBaseQueueLast;
              queue.lastRenderedState = newState;
            }
            var dispatch = queue.dispatch;
            return [hook.memoizedState, dispatch];
          }
          function rerenderReducer(reducer, initialArg, init) {
            var hook = updateWorkInProgressHook();
            var queue = hook.queue;
            if (!(queue !== null)) {
              {
                throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
              }
            }
            queue.lastRenderedReducer = reducer;
            var dispatch = queue.dispatch;
            var lastRenderPhaseUpdate = queue.pending;
            var newState = hook.memoizedState;
            if (lastRenderPhaseUpdate !== null) {
              queue.pending = null;
              var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              var update = firstRenderPhaseUpdate;
              do {
                var action = update.action;
                newState = reducer(newState, action);
                update = update.next;
              } while (update !== firstRenderPhaseUpdate);
              if (!objectIs(newState, hook.memoizedState)) {
                markWorkInProgressReceivedUpdate();
              }
              hook.memoizedState = newState;
              if (hook.baseQueue === null) {
                hook.baseState = newState;
              }
              queue.lastRenderedState = newState;
            }
            return [newState, dispatch];
          }
          function readFromUnsubcribedMutableSource(root, source, getSnapshot) {
            {
              warnAboutMultipleRenderersDEV(source);
            }
            var getVersion = source._getVersion;
            var version = getVersion(source._source);
            var isSafeToReadFromSource = false;
            var currentRenderVersion = getWorkInProgressVersion(source);
            if (currentRenderVersion !== null) {
              isSafeToReadFromSource = currentRenderVersion === version;
            } else {
              isSafeToReadFromSource = isSubsetOfLanes(renderLanes, root.mutableReadLanes);
              if (isSafeToReadFromSource) {
                setWorkInProgressVersion(source, version);
              }
            }
            if (isSafeToReadFromSource) {
              var snapshot = getSnapshot(source._source);
              {
                if (typeof snapshot === "function") {
                  error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.");
                }
              }
              return snapshot;
            } else {
              markSourceAsDirty(source);
              {
                {
                  throw Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
                }
              }
            }
          }
          function useMutableSource(hook, source, getSnapshot, subscribe) {
            var root = getWorkInProgressRoot();
            if (!(root !== null)) {
              {
                throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
              }
            }
            var getVersion = source._getVersion;
            var version = getVersion(source._source);
            var dispatcher = ReactCurrentDispatcher$1.current;
            var _dispatcher$useState = dispatcher.useState(function() {
              return readFromUnsubcribedMutableSource(root, source, getSnapshot);
            }), currentSnapshot = _dispatcher$useState[0], setSnapshot = _dispatcher$useState[1];
            var snapshot = currentSnapshot;
            var stateHook = workInProgressHook;
            var memoizedState = hook.memoizedState;
            var refs = memoizedState.refs;
            var prevGetSnapshot = refs.getSnapshot;
            var prevSource = memoizedState.source;
            var prevSubscribe = memoizedState.subscribe;
            var fiber = currentlyRenderingFiber$1;
            hook.memoizedState = {
              refs,
              source,
              subscribe
            };
            dispatcher.useEffect(function() {
              refs.getSnapshot = getSnapshot;
              refs.setSnapshot = setSnapshot;
              var maybeNewVersion = getVersion(source._source);
              if (!objectIs(version, maybeNewVersion)) {
                var maybeNewSnapshot = getSnapshot(source._source);
                {
                  if (typeof maybeNewSnapshot === "function") {
                    error("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing.");
                  }
                }
                if (!objectIs(snapshot, maybeNewSnapshot)) {
                  setSnapshot(maybeNewSnapshot);
                  var lane = requestUpdateLane(fiber);
                  markRootMutableRead(root, lane);
                }
                markRootEntangled(root, root.mutableReadLanes);
              }
            }, [getSnapshot, source, subscribe]);
            dispatcher.useEffect(function() {
              var handleChange = function() {
                var latestGetSnapshot = refs.getSnapshot;
                var latestSetSnapshot = refs.setSnapshot;
                try {
                  latestSetSnapshot(latestGetSnapshot(source._source));
                  var lane = requestUpdateLane(fiber);
                  markRootMutableRead(root, lane);
                } catch (error2) {
                  latestSetSnapshot(function() {
                    throw error2;
                  });
                }
              };
              var unsubscribe = subscribe(source._source, handleChange);
              {
                if (typeof unsubscribe !== "function") {
                  error("Mutable source subscribe function must return an unsubscribe function.");
                }
              }
              return unsubscribe;
            }, [source, subscribe]);
            if (!objectIs(prevGetSnapshot, getSnapshot) || !objectIs(prevSource, source) || !objectIs(prevSubscribe, subscribe)) {
              var newQueue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: basicStateReducer,
                lastRenderedState: snapshot
              };
              newQueue.dispatch = setSnapshot = dispatchAction.bind(null, currentlyRenderingFiber$1, newQueue);
              stateHook.queue = newQueue;
              stateHook.baseQueue = null;
              snapshot = readFromUnsubcribedMutableSource(root, source, getSnapshot);
              stateHook.memoizedState = stateHook.baseState = snapshot;
            }
            return snapshot;
          }
          function mountMutableSource(source, getSnapshot, subscribe) {
            var hook = mountWorkInProgressHook();
            hook.memoizedState = {
              refs: {
                getSnapshot,
                setSnapshot: null
              },
              source,
              subscribe
            };
            return useMutableSource(hook, source, getSnapshot, subscribe);
          }
          function updateMutableSource(source, getSnapshot, subscribe) {
            var hook = updateWorkInProgressHook();
            return useMutableSource(hook, source, getSnapshot, subscribe);
          }
          function mountState(initialState) {
            var hook = mountWorkInProgressHook();
            if (typeof initialState === "function") {
              initialState = initialState();
            }
            hook.memoizedState = hook.baseState = initialState;
            var queue = hook.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: basicStateReducer,
              lastRenderedState: initialState
            };
            var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
            return [hook.memoizedState, dispatch];
          }
          function updateState(initialState) {
            return updateReducer(basicStateReducer);
          }
          function rerenderState(initialState) {
            return rerenderReducer(basicStateReducer);
          }
          function pushEffect(tag, create, destroy, deps) {
            var effect = {
              tag,
              create,
              destroy,
              deps,
              // Circular
              next: null
            };
            var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
            if (componentUpdateQueue === null) {
              componentUpdateQueue = createFunctionComponentUpdateQueue();
              currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
              componentUpdateQueue.lastEffect = effect.next = effect;
            } else {
              var lastEffect = componentUpdateQueue.lastEffect;
              if (lastEffect === null) {
                componentUpdateQueue.lastEffect = effect.next = effect;
              } else {
                var firstEffect = lastEffect.next;
                lastEffect.next = effect;
                effect.next = firstEffect;
                componentUpdateQueue.lastEffect = effect;
              }
            }
            return effect;
          }
          function mountRef(initialValue) {
            var hook = mountWorkInProgressHook();
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            hook.memoizedState = ref;
            return ref;
          }
          function updateRef(initialValue) {
            var hook = updateWorkInProgressHook();
            return hook.memoizedState;
          }
          function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            currentlyRenderingFiber$1.flags |= fiberFlags;
            hook.memoizedState = pushEffect(HasEffect | hookFlags, create, void 0, nextDeps);
          }
          function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var destroy = void 0;
            if (currentHook !== null) {
              var prevEffect = currentHook.memoizedState;
              destroy = prevEffect.destroy;
              if (nextDeps !== null) {
                var prevDeps = prevEffect.deps;
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  pushEffect(hookFlags, create, destroy, nextDeps);
                  return;
                }
              }
            }
            currentlyRenderingFiber$1.flags |= fiberFlags;
            hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
          }
          function mountEffect(create, deps) {
            {
              if ("undefined" !== typeof jest) {
                warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
              }
            }
            return mountEffectImpl(Update | Passive, Passive$1, create, deps);
          }
          function updateEffect(create, deps) {
            {
              if ("undefined" !== typeof jest) {
                warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
              }
            }
            return updateEffectImpl(Update | Passive, Passive$1, create, deps);
          }
          function mountLayoutEffect(create, deps) {
            return mountEffectImpl(Update, Layout, create, deps);
          }
          function updateLayoutEffect(create, deps) {
            return updateEffectImpl(Update, Layout, create, deps);
          }
          function imperativeHandleEffect(create, ref) {
            if (typeof ref === "function") {
              var refCallback = ref;
              var _inst = create();
              refCallback(_inst);
              return function() {
                refCallback(null);
              };
            } else if (ref !== null && ref !== void 0) {
              var refObject = ref;
              {
                if (!refObject.hasOwnProperty("current")) {
                  error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
                }
              }
              var _inst2 = create();
              refObject.current = _inst2;
              return function() {
                refObject.current = null;
              };
            }
          }
          function mountImperativeHandle(ref, create, deps) {
            {
              if (typeof create !== "function") {
                error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
              }
            }
            var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
            return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
          }
          function updateImperativeHandle(ref, create, deps) {
            {
              if (typeof create !== "function") {
                error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
              }
            }
            var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
            return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
          }
          function mountDebugValue(value, formatterFn) {
          }
          var updateDebugValue = mountDebugValue;
          function mountCallback(callback, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            hook.memoizedState = [callback, nextDeps];
            return callback;
          }
          function updateCallback(callback, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var prevState = hook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
            hook.memoizedState = [callback, nextDeps];
            return callback;
          }
          function mountMemo(nextCreate, deps) {
            var hook = mountWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var nextValue = nextCreate();
            hook.memoizedState = [nextValue, nextDeps];
            return nextValue;
          }
          function updateMemo(nextCreate, deps) {
            var hook = updateWorkInProgressHook();
            var nextDeps = deps === void 0 ? null : deps;
            var prevState = hook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
            var nextValue = nextCreate();
            hook.memoizedState = [nextValue, nextDeps];
            return nextValue;
          }
          function mountDeferredValue(value) {
            var _mountState = mountState(value), prevValue = _mountState[0], setValue = _mountState[1];
            mountEffect(function() {
              var prevTransition = ReactCurrentBatchConfig$1.transition;
              ReactCurrentBatchConfig$1.transition = 1;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.transition = prevTransition;
              }
            }, [value]);
            return prevValue;
          }
          function updateDeferredValue(value) {
            var _updateState = updateState(), prevValue = _updateState[0], setValue = _updateState[1];
            updateEffect(function() {
              var prevTransition = ReactCurrentBatchConfig$1.transition;
              ReactCurrentBatchConfig$1.transition = 1;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.transition = prevTransition;
              }
            }, [value]);
            return prevValue;
          }
          function rerenderDeferredValue(value) {
            var _rerenderState = rerenderState(), prevValue = _rerenderState[0], setValue = _rerenderState[1];
            updateEffect(function() {
              var prevTransition = ReactCurrentBatchConfig$1.transition;
              ReactCurrentBatchConfig$1.transition = 1;
              try {
                setValue(value);
              } finally {
                ReactCurrentBatchConfig$1.transition = prevTransition;
              }
            }, [value]);
            return prevValue;
          }
          function startTransition(setPending, callback) {
            var priorityLevel = getCurrentPriorityLevel();
            {
              runWithPriority(priorityLevel < UserBlockingPriority$1 ? UserBlockingPriority$1 : priorityLevel, function() {
                setPending(true);
              });
              runWithPriority(priorityLevel > NormalPriority$1 ? NormalPriority$1 : priorityLevel, function() {
                var prevTransition = ReactCurrentBatchConfig$1.transition;
                ReactCurrentBatchConfig$1.transition = 1;
                try {
                  setPending(false);
                  callback();
                } finally {
                  ReactCurrentBatchConfig$1.transition = prevTransition;
                }
              });
            }
          }
          function mountTransition() {
            var _mountState2 = mountState(false), isPending = _mountState2[0], setPending = _mountState2[1];
            var start = startTransition.bind(null, setPending);
            mountRef(start);
            return [start, isPending];
          }
          function updateTransition() {
            var _updateState2 = updateState(), isPending = _updateState2[0];
            var startRef = updateRef();
            var start = startRef.current;
            return [start, isPending];
          }
          function rerenderTransition() {
            var _rerenderState2 = rerenderState(), isPending = _rerenderState2[0];
            var startRef = updateRef();
            var start = startRef.current;
            return [start, isPending];
          }
          var isUpdatingOpaqueValueInRenderPhase = false;
          function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
            {
              return isUpdatingOpaqueValueInRenderPhase;
            }
          }
          function warnOnOpaqueIdentifierAccessInDEV(fiber) {
            {
              var name = getComponentName(fiber.type) || "Unknown";
              if (getIsRendering() && !didWarnAboutUseOpaqueIdentifier[name]) {
                error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
                didWarnAboutUseOpaqueIdentifier[name] = true;
              }
            }
          }
          function mountOpaqueIdentifier() {
            var makeId = makeClientIdInDEV.bind(null, warnOnOpaqueIdentifierAccessInDEV.bind(null, currentlyRenderingFiber$1));
            if (getIsHydrating()) {
              var didUpgrade = false;
              var fiber = currentlyRenderingFiber$1;
              var readValue = function() {
                if (!didUpgrade) {
                  didUpgrade = true;
                  {
                    isUpdatingOpaqueValueInRenderPhase = true;
                    setId(makeId());
                    isUpdatingOpaqueValueInRenderPhase = false;
                    warnOnOpaqueIdentifierAccessInDEV(fiber);
                  }
                }
                {
                  {
                    throw Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
                  }
                }
              };
              var id = makeOpaqueHydratingObject(readValue);
              var setId = mountState(id)[1];
              if ((currentlyRenderingFiber$1.mode & BlockingMode) === NoMode) {
                currentlyRenderingFiber$1.flags |= Update | Passive;
                pushEffect(HasEffect | Passive$1, function() {
                  setId(makeId());
                }, void 0, null);
              }
              return id;
            } else {
              var _id = makeId();
              mountState(_id);
              return _id;
            }
          }
          function updateOpaqueIdentifier() {
            var id = updateState()[0];
            return id;
          }
          function rerenderOpaqueIdentifier() {
            var id = rerenderState()[0];
            return id;
          }
          function dispatchAction(fiber, queue, action) {
            {
              if (typeof arguments[3] === "function") {
                error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
              }
            }
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            var update = {
              lane,
              action,
              eagerReducer: null,
              eagerState: null,
              next: null
            };
            var pending = queue.pending;
            if (pending === null) {
              update.next = update;
            } else {
              update.next = pending.next;
              pending.next = update;
            }
            queue.pending = update;
            var alternate = fiber.alternate;
            if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
              didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
            } else {
              if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
                var lastRenderedReducer = queue.lastRenderedReducer;
                if (lastRenderedReducer !== null) {
                  var prevDispatcher;
                  {
                    prevDispatcher = ReactCurrentDispatcher$1.current;
                    ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                  }
                  try {
                    var currentState = queue.lastRenderedState;
                    var eagerState = lastRenderedReducer(currentState, action);
                    update.eagerReducer = lastRenderedReducer;
                    update.eagerState = eagerState;
                    if (objectIs(eagerState, currentState)) {
                      return;
                    }
                  } catch (error2) {
                  } finally {
                    {
                      ReactCurrentDispatcher$1.current = prevDispatcher;
                    }
                  }
                }
              }
              {
                if ("undefined" !== typeof jest) {
                  warnIfNotScopedWithMatchingAct(fiber);
                  warnIfNotCurrentlyActingUpdatesInDev(fiber);
                }
              }
              scheduleUpdateOnFiber(fiber, lane, eventTime);
            }
          }
          var ContextOnlyDispatcher = {
            readContext,
            useCallback: throwInvalidHookError,
            useContext: throwInvalidHookError,
            useEffect: throwInvalidHookError,
            useImperativeHandle: throwInvalidHookError,
            useLayoutEffect: throwInvalidHookError,
            useMemo: throwInvalidHookError,
            useReducer: throwInvalidHookError,
            useRef: throwInvalidHookError,
            useState: throwInvalidHookError,
            useDebugValue: throwInvalidHookError,
            useDeferredValue: throwInvalidHookError,
            useTransition: throwInvalidHookError,
            useMutableSource: throwInvalidHookError,
            useOpaqueIdentifier: throwInvalidHookError,
            unstable_isNewReconciler: enableNewReconciler
          };
          var HooksDispatcherOnMountInDEV = null;
          var HooksDispatcherOnMountWithHookTypesInDEV = null;
          var HooksDispatcherOnUpdateInDEV = null;
          var HooksDispatcherOnRerenderInDEV = null;
          var InvalidNestedHooksDispatcherOnMountInDEV = null;
          var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
          var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
          {
            var warnInvalidContextAccess = function() {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            };
            var warnInvalidHookAccess = function() {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            };
            HooksDispatcherOnMountInDEV = {
              readContext: function(context, observedBits) {
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                mountHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                mountHookTypesDev();
                checkDepsAreArrayDev(deps);
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                mountHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                mountHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                mountHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                mountHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                mountHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                mountHookTypesDev();
                return mountOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnMountWithHookTypesInDEV = {
              readContext: function(context, observedBits) {
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return mountCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return mountOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnUpdateInDEV = {
              readContext: function(context, observedBits) {
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return updateDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return updateTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return updateOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            HooksDispatcherOnRerenderInDEV = {
              readContext: function(context, observedBits) {
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                updateHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return rerenderReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
                try {
                  return rerenderState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                updateHookTypesDev();
                return rerenderDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                updateHookTypesDev();
                return rerenderTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                updateHookTypesDev();
                return rerenderOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnMountInDEV = {
              readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountRef(initialValue);
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                mountHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
                try {
                  return mountState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                mountHookTypesDev();
                return mountOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnUpdateInDEV = {
              readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
            InvalidNestedHooksDispatcherOnRerenderInDEV = {
              readContext: function(context, observedBits) {
                warnInvalidContextAccess();
                return readContext(context, observedBits);
              },
              useCallback: function(callback, deps) {
                currentHookNameInDev = "useCallback";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateCallback(callback, deps);
              },
              useContext: function(context, observedBits) {
                currentHookNameInDev = "useContext";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return readContext(context, observedBits);
              },
              useEffect: function(create, deps) {
                currentHookNameInDev = "useEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateEffect(create, deps);
              },
              useImperativeHandle: function(ref, create, deps) {
                currentHookNameInDev = "useImperativeHandle";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateImperativeHandle(ref, create, deps);
              },
              useLayoutEffect: function(create, deps) {
                currentHookNameInDev = "useLayoutEffect";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateLayoutEffect(create, deps);
              },
              useMemo: function(create, deps) {
                currentHookNameInDev = "useMemo";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return updateMemo(create, deps);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useReducer: function(reducer, initialArg, init) {
                currentHookNameInDev = "useReducer";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return rerenderReducer(reducer, initialArg, init);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useRef: function(initialValue) {
                currentHookNameInDev = "useRef";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateRef();
              },
              useState: function(initialState) {
                currentHookNameInDev = "useState";
                warnInvalidHookAccess();
                updateHookTypesDev();
                var prevDispatcher = ReactCurrentDispatcher$1.current;
                ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
                try {
                  return rerenderState(initialState);
                } finally {
                  ReactCurrentDispatcher$1.current = prevDispatcher;
                }
              },
              useDebugValue: function(value, formatterFn) {
                currentHookNameInDev = "useDebugValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateDebugValue();
              },
              useDeferredValue: function(value) {
                currentHookNameInDev = "useDeferredValue";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderDeferredValue(value);
              },
              useTransition: function() {
                currentHookNameInDev = "useTransition";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderTransition();
              },
              useMutableSource: function(source, getSnapshot, subscribe) {
                currentHookNameInDev = "useMutableSource";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return updateMutableSource(source, getSnapshot, subscribe);
              },
              useOpaqueIdentifier: function() {
                currentHookNameInDev = "useOpaqueIdentifier";
                warnInvalidHookAccess();
                updateHookTypesDev();
                return rerenderOpaqueIdentifier();
              },
              unstable_isNewReconciler: enableNewReconciler
            };
          }
          var now$2 = Scheduler.unstable_now;
          var commitTime = 0;
          var profilerStartTime = -1;
          function getCommitTime() {
            return commitTime;
          }
          function recordCommitTime() {
            commitTime = now$2();
          }
          function startProfilerTimer(fiber) {
            profilerStartTime = now$2();
            if (fiber.actualStartTime < 0) {
              fiber.actualStartTime = now$2();
            }
          }
          function stopProfilerTimerIfRunning(fiber) {
            profilerStartTime = -1;
          }
          function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
            if (profilerStartTime >= 0) {
              var elapsedTime = now$2() - profilerStartTime;
              fiber.actualDuration += elapsedTime;
              if (overrideBaseTime) {
                fiber.selfBaseDuration = elapsedTime;
              }
              profilerStartTime = -1;
            }
          }
          function transferActualDuration(fiber) {
            var child = fiber.child;
            while (child) {
              fiber.actualDuration += child.actualDuration;
              child = child.sibling;
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var didReceiveUpdate = false;
          var didWarnAboutBadClass;
          var didWarnAboutModulePatternComponent;
          var didWarnAboutContextTypeOnFunctionComponent;
          var didWarnAboutGetDerivedStateOnFunctionComponent;
          var didWarnAboutFunctionRefs;
          var didWarnAboutReassigningProps;
          var didWarnAboutRevealOrder;
          var didWarnAboutTailOptions;
          {
            didWarnAboutBadClass = {};
            didWarnAboutModulePatternComponent = {};
            didWarnAboutContextTypeOnFunctionComponent = {};
            didWarnAboutGetDerivedStateOnFunctionComponent = {};
            didWarnAboutFunctionRefs = {};
            didWarnAboutReassigningProps = false;
            didWarnAboutRevealOrder = {};
            didWarnAboutTailOptions = {};
          }
          function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
            if (current2 === null) {
              workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
            } else {
              workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, nextChildren, renderLanes2);
            }
          }
          function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2) {
            workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
            workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
          }
          function updateForwardRef(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentName(Component)
                  );
                }
              }
            }
            var render2 = Component.render;
            var ref = workInProgress2.ref;
            var nextChildren;
            prepareToReadContext(workInProgress2, renderLanes2);
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
                } finally {
                  reenableLogs();
                }
              }
              setIsRendering(false);
            }
            if (current2 !== null && !didReceiveUpdate) {
              bailoutHooks(current2, workInProgress2, renderLanes2);
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateMemoComponent(current2, workInProgress2, Component, nextProps, updateLanes, renderLanes2) {
            if (current2 === null) {
              var type = Component.type;
              if (isSimpleFunctionComponent(type) && Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
              Component.defaultProps === void 0) {
                var resolvedType = type;
                {
                  resolvedType = resolveFunctionForHotReloading(type);
                }
                workInProgress2.tag = SimpleMemoComponent;
                workInProgress2.type = resolvedType;
                {
                  validateFunctionComponentInDev(workInProgress2, type);
                }
                return updateSimpleMemoComponent(current2, workInProgress2, resolvedType, nextProps, updateLanes, renderLanes2);
              }
              {
                var innerPropTypes = type.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentName(type)
                  );
                }
              }
              var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress2, workInProgress2.mode, renderLanes2);
              child.ref = workInProgress2.ref;
              child.return = workInProgress2;
              workInProgress2.child = child;
              return child;
            }
            {
              var _type = Component.type;
              var _innerPropTypes = _type.propTypes;
              if (_innerPropTypes) {
                checkPropTypes(
                  _innerPropTypes,
                  nextProps,
                  // Resolved props
                  "prop",
                  getComponentName(_type)
                );
              }
            }
            var currentChild = current2.child;
            if (!includesSomeLane(updateLanes, renderLanes2)) {
              var prevProps = currentChild.memoizedProps;
              var compare = Component.compare;
              compare = compare !== null ? compare : shallowEqual;
              if (compare(prevProps, nextProps) && current2.ref === workInProgress2.ref) {
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              }
            }
            workInProgress2.flags |= PerformedWork;
            var newChild = createWorkInProgress(currentChild, nextProps);
            newChild.ref = workInProgress2.ref;
            newChild.return = workInProgress2;
            workInProgress2.child = newChild;
            return newChild;
          }
          function updateSimpleMemoComponent(current2, workInProgress2, Component, nextProps, updateLanes, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var outerMemoType = workInProgress2.elementType;
                if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
                  var lazyComponent = outerMemoType;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    outerMemoType = init(payload);
                  } catch (x) {
                    outerMemoType = null;
                  }
                  var outerPropTypes = outerMemoType && outerMemoType.propTypes;
                  if (outerPropTypes) {
                    checkPropTypes(
                      outerPropTypes,
                      nextProps,
                      // Resolved (SimpleMemoComponent has no defaultProps)
                      "prop",
                      getComponentName(outerMemoType)
                    );
                  }
                }
              }
            }
            if (current2 !== null) {
              var prevProps = current2.memoizedProps;
              if (shallowEqual(prevProps, nextProps) && current2.ref === workInProgress2.ref && // Prevent bailout if the implementation changed due to hot reload.
              workInProgress2.type === current2.type) {
                didReceiveUpdate = false;
                if (!includesSomeLane(renderLanes2, updateLanes)) {
                  workInProgress2.lanes = current2.lanes;
                  return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                } else if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                  didReceiveUpdate = true;
                }
              }
            }
            return updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2);
          }
          function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            var nextChildren = nextProps.children;
            var prevState = current2 !== null ? current2.memoizedState : null;
            if (nextProps.mode === "hidden" || nextProps.mode === "unstable-defer-without-hiding") {
              if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
                var nextState = {
                  baseLanes: NoLanes
                };
                workInProgress2.memoizedState = nextState;
                pushRenderLanes(workInProgress2, renderLanes2);
              } else if (!includesSomeLane(renderLanes2, OffscreenLane)) {
                var nextBaseLanes;
                if (prevState !== null) {
                  var prevBaseLanes = prevState.baseLanes;
                  nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes2);
                } else {
                  nextBaseLanes = renderLanes2;
                }
                {
                  markSpawnedWork(OffscreenLane);
                }
                workInProgress2.lanes = workInProgress2.childLanes = laneToLanes(OffscreenLane);
                var _nextState = {
                  baseLanes: nextBaseLanes
                };
                workInProgress2.memoizedState = _nextState;
                pushRenderLanes(workInProgress2, nextBaseLanes);
                return null;
              } else {
                var _nextState2 = {
                  baseLanes: NoLanes
                };
                workInProgress2.memoizedState = _nextState2;
                var subtreeRenderLanes2 = prevState !== null ? prevState.baseLanes : renderLanes2;
                pushRenderLanes(workInProgress2, subtreeRenderLanes2);
              }
            } else {
              var _subtreeRenderLanes;
              if (prevState !== null) {
                _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes2);
                workInProgress2.memoizedState = null;
              } else {
                _subtreeRenderLanes = renderLanes2;
              }
              pushRenderLanes(workInProgress2, _subtreeRenderLanes);
            }
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          var updateLegacyHiddenComponent = updateOffscreenComponent;
          function updateFragment(current2, workInProgress2, renderLanes2) {
            var nextChildren = workInProgress2.pendingProps;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateMode(current2, workInProgress2, renderLanes2) {
            var nextChildren = workInProgress2.pendingProps.children;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateProfiler(current2, workInProgress2, renderLanes2) {
            {
              workInProgress2.flags |= Update;
              var stateNode = workInProgress2.stateNode;
              stateNode.effectDuration = 0;
              stateNode.passiveEffectDuration = 0;
            }
            var nextProps = workInProgress2.pendingProps;
            var nextChildren = nextProps.children;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function markRef(current2, workInProgress2) {
            var ref = workInProgress2.ref;
            if (current2 === null && ref !== null || current2 !== null && current2.ref !== ref) {
              workInProgress2.flags |= Ref;
            }
          }
          function updateFunctionComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentName(Component)
                  );
                }
              }
            }
            var context;
            {
              var unmaskedContext = getUnmaskedContext(workInProgress2, Component, true);
              context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            var nextChildren;
            prepareToReadContext(workInProgress2, renderLanes2);
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
              if (workInProgress2.mode & StrictMode) {
                disableLogs();
                try {
                  nextChildren = renderWithHooks(current2, workInProgress2, Component, nextProps, context, renderLanes2);
                } finally {
                  reenableLogs();
                }
              }
              setIsRendering(false);
            }
            if (current2 !== null && !didReceiveUpdate) {
              bailoutHooks(current2, workInProgress2, renderLanes2);
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateClassComponent(current2, workInProgress2, Component, nextProps, renderLanes2) {
            {
              if (workInProgress2.type !== workInProgress2.elementType) {
                var innerPropTypes = Component.propTypes;
                if (innerPropTypes) {
                  checkPropTypes(
                    innerPropTypes,
                    nextProps,
                    // Resolved props
                    "prop",
                    getComponentName(Component)
                  );
                }
              }
            }
            var hasContext;
            if (isContextProvider(Component)) {
              hasContext = true;
              pushContextProvider(workInProgress2);
            } else {
              hasContext = false;
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var instance = workInProgress2.stateNode;
            var shouldUpdate;
            if (instance === null) {
              if (current2 !== null) {
                current2.alternate = null;
                workInProgress2.alternate = null;
                workInProgress2.flags |= Placement;
              }
              constructClassInstance(workInProgress2, Component, nextProps);
              mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
              shouldUpdate = true;
            } else if (current2 === null) {
              shouldUpdate = resumeMountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
            } else {
              shouldUpdate = updateClassInstance(current2, workInProgress2, Component, nextProps, renderLanes2);
            }
            var nextUnitOfWork = finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2);
            {
              var inst = workInProgress2.stateNode;
              if (shouldUpdate && inst.props !== nextProps) {
                if (!didWarnAboutReassigningProps) {
                  error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentName(workInProgress2.type) || "a component");
                }
                didWarnAboutReassigningProps = true;
              }
            }
            return nextUnitOfWork;
          }
          function finishClassComponent(current2, workInProgress2, Component, shouldUpdate, hasContext, renderLanes2) {
            markRef(current2, workInProgress2);
            var didCaptureError = (workInProgress2.flags & DidCapture) !== NoFlags;
            if (!shouldUpdate && !didCaptureError) {
              if (hasContext) {
                invalidateContextProvider(workInProgress2, Component, false);
              }
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            var instance = workInProgress2.stateNode;
            ReactCurrentOwner$1.current = workInProgress2;
            var nextChildren;
            if (didCaptureError && typeof Component.getDerivedStateFromError !== "function") {
              nextChildren = null;
              {
                stopProfilerTimerIfRunning();
              }
            } else {
              {
                setIsRendering(true);
                nextChildren = instance.render();
                if (workInProgress2.mode & StrictMode) {
                  disableLogs();
                  try {
                    instance.render();
                  } finally {
                    reenableLogs();
                  }
                }
                setIsRendering(false);
              }
            }
            workInProgress2.flags |= PerformedWork;
            if (current2 !== null && didCaptureError) {
              forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2);
            } else {
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            }
            workInProgress2.memoizedState = instance.state;
            if (hasContext) {
              invalidateContextProvider(workInProgress2, Component, true);
            }
            return workInProgress2.child;
          }
          function pushHostRootContext(workInProgress2) {
            var root = workInProgress2.stateNode;
            if (root.pendingContext) {
              pushTopLevelContextObject(workInProgress2, root.pendingContext, root.pendingContext !== root.context);
            } else if (root.context) {
              pushTopLevelContextObject(workInProgress2, root.context, false);
            }
            pushHostContainer(workInProgress2, root.containerInfo);
          }
          function updateHostRoot(current2, workInProgress2, renderLanes2) {
            pushHostRootContext(workInProgress2);
            var updateQueue = workInProgress2.updateQueue;
            if (!(current2 !== null && updateQueue !== null)) {
              {
                throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            var nextProps = workInProgress2.pendingProps;
            var prevState = workInProgress2.memoizedState;
            var prevChildren = prevState !== null ? prevState.element : null;
            cloneUpdateQueue(current2, workInProgress2);
            processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            var nextChildren = nextState.element;
            if (nextChildren === prevChildren) {
              resetHydrationState();
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
            var root = workInProgress2.stateNode;
            if (root.hydrate && enterHydrationState(workInProgress2)) {
              if (supportsHydration) {
                var mutableSourceEagerHydrationData = root.mutableSourceEagerHydrationData;
                if (mutableSourceEagerHydrationData != null) {
                  for (var i = 0; i < mutableSourceEagerHydrationData.length; i += 2) {
                    var mutableSource = mutableSourceEagerHydrationData[i];
                    var version = mutableSourceEagerHydrationData[i + 1];
                    setWorkInProgressVersion(mutableSource, version);
                  }
                }
              }
              var child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
              workInProgress2.child = child;
              var node = child;
              while (node) {
                node.flags = node.flags & ~Placement | Hydrating;
                node = node.sibling;
              }
            } else {
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
              resetHydrationState();
            }
            return workInProgress2.child;
          }
          function updateHostComponent(current2, workInProgress2, renderLanes2) {
            pushHostContext(workInProgress2);
            if (current2 === null) {
              tryToClaimNextHydratableInstance(workInProgress2);
            }
            var type = workInProgress2.type;
            var nextProps = workInProgress2.pendingProps;
            var prevProps = current2 !== null ? current2.memoizedProps : null;
            var nextChildren = nextProps.children;
            var isDirectTextChild = shouldSetTextContent(type, nextProps);
            if (isDirectTextChild) {
              nextChildren = null;
            } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
              workInProgress2.flags |= ContentReset;
            }
            markRef(current2, workInProgress2);
            reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            return workInProgress2.child;
          }
          function updateHostText(current2, workInProgress2) {
            if (current2 === null) {
              tryToClaimNextHydratableInstance(workInProgress2);
            }
            return null;
          }
          function mountLazyComponent(_current, workInProgress2, elementType, updateLanes, renderLanes2) {
            if (_current !== null) {
              _current.alternate = null;
              workInProgress2.alternate = null;
              workInProgress2.flags |= Placement;
            }
            var props = workInProgress2.pendingProps;
            var lazyComponent = elementType;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            var Component = init(payload);
            workInProgress2.type = Component;
            var resolvedTag = workInProgress2.tag = resolveLazyComponentTag(Component);
            var resolvedProps = resolveDefaultProps(Component, props);
            var child;
            switch (resolvedTag) {
              case FunctionComponent: {
                {
                  validateFunctionComponentInDev(workInProgress2, Component);
                  workInProgress2.type = Component = resolveFunctionForHotReloading(Component);
                }
                child = updateFunctionComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case ClassComponent: {
                {
                  workInProgress2.type = Component = resolveClassForHotReloading(Component);
                }
                child = updateClassComponent(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case ForwardRef: {
                {
                  workInProgress2.type = Component = resolveForwardRefForHotReloading(Component);
                }
                child = updateForwardRef(null, workInProgress2, Component, resolvedProps, renderLanes2);
                return child;
              }
              case MemoComponent: {
                {
                  if (workInProgress2.type !== workInProgress2.elementType) {
                    var outerPropTypes = Component.propTypes;
                    if (outerPropTypes) {
                      checkPropTypes(
                        outerPropTypes,
                        resolvedProps,
                        // Resolved for outer only
                        "prop",
                        getComponentName(Component)
                      );
                    }
                  }
                }
                child = updateMemoComponent(
                  null,
                  workInProgress2,
                  Component,
                  resolveDefaultProps(Component.type, resolvedProps),
                  // The inner type can have defaults too
                  updateLanes,
                  renderLanes2
                );
                return child;
              }
            }
            var hint = "";
            {
              if (Component !== null && typeof Component === "object" && Component.$$typeof === REACT_LAZY_TYPE) {
                hint = " Did you wrap a component in React.lazy() more than once?";
              }
            }
            {
              {
                throw Error("Element type is invalid. Received a promise that resolves to: " + Component + ". Lazy element type must resolve to a class or function." + hint);
              }
            }
          }
          function mountIncompleteClassComponent(_current, workInProgress2, Component, nextProps, renderLanes2) {
            if (_current !== null) {
              _current.alternate = null;
              workInProgress2.alternate = null;
              workInProgress2.flags |= Placement;
            }
            workInProgress2.tag = ClassComponent;
            var hasContext;
            if (isContextProvider(Component)) {
              hasContext = true;
              pushContextProvider(workInProgress2);
            } else {
              hasContext = false;
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            constructClassInstance(workInProgress2, Component, nextProps);
            mountClassInstance(workInProgress2, Component, nextProps, renderLanes2);
            return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
          }
          function mountIndeterminateComponent(_current, workInProgress2, Component, renderLanes2) {
            if (_current !== null) {
              _current.alternate = null;
              workInProgress2.alternate = null;
              workInProgress2.flags |= Placement;
            }
            var props = workInProgress2.pendingProps;
            var context;
            {
              var unmaskedContext = getUnmaskedContext(workInProgress2, Component, false);
              context = getMaskedContext(workInProgress2, unmaskedContext);
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var value;
            {
              if (Component.prototype && typeof Component.prototype.render === "function") {
                var componentName = getComponentName(Component) || "Unknown";
                if (!didWarnAboutBadClass[componentName]) {
                  error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                  didWarnAboutBadClass[componentName] = true;
                }
              }
              if (workInProgress2.mode & StrictMode) {
                ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
              }
              setIsRendering(true);
              ReactCurrentOwner$1.current = workInProgress2;
              value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
              setIsRendering(false);
            }
            workInProgress2.flags |= PerformedWork;
            {
              if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
                var _componentName = getComponentName(Component) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName]) {
                  error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                  didWarnAboutModulePatternComponent[_componentName] = true;
                }
              }
            }
            if (
              // Run these checks in production only if the flag is off.
              // Eventually we'll delete this branch altogether.
              typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
            ) {
              {
                var _componentName2 = getComponentName(Component) || "Unknown";
                if (!didWarnAboutModulePatternComponent[_componentName2]) {
                  error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                  didWarnAboutModulePatternComponent[_componentName2] = true;
                }
              }
              workInProgress2.tag = ClassComponent;
              workInProgress2.memoizedState = null;
              workInProgress2.updateQueue = null;
              var hasContext = false;
              if (isContextProvider(Component)) {
                hasContext = true;
                pushContextProvider(workInProgress2);
              } else {
                hasContext = false;
              }
              workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
              initializeUpdateQueue(workInProgress2);
              var getDerivedStateFromProps = Component.getDerivedStateFromProps;
              if (typeof getDerivedStateFromProps === "function") {
                applyDerivedStateFromProps(workInProgress2, Component, getDerivedStateFromProps, props);
              }
              adoptClassInstance(workInProgress2, value);
              mountClassInstance(workInProgress2, Component, props, renderLanes2);
              return finishClassComponent(null, workInProgress2, Component, true, hasContext, renderLanes2);
            } else {
              workInProgress2.tag = FunctionComponent;
              {
                if (workInProgress2.mode & StrictMode) {
                  disableLogs();
                  try {
                    value = renderWithHooks(null, workInProgress2, Component, props, context, renderLanes2);
                  } finally {
                    reenableLogs();
                  }
                }
              }
              reconcileChildren(null, workInProgress2, value, renderLanes2);
              {
                validateFunctionComponentInDev(workInProgress2, Component);
              }
              return workInProgress2.child;
            }
          }
          function validateFunctionComponentInDev(workInProgress2, Component) {
            {
              if (Component) {
                if (Component.childContextTypes) {
                  error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
                }
              }
              if (workInProgress2.ref !== null) {
                var info = "";
                var ownerName = getCurrentFiberOwnerNameInDevOrNull();
                if (ownerName) {
                  info += "\n\nCheck the render method of `" + ownerName + "`.";
                }
                var warningKey = ownerName || workInProgress2._debugID || "";
                var debugSource = workInProgress2._debugSource;
                if (debugSource) {
                  warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
                }
                if (!didWarnAboutFunctionRefs[warningKey]) {
                  didWarnAboutFunctionRefs[warningKey] = true;
                  error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
                }
              }
              if (typeof Component.getDerivedStateFromProps === "function") {
                var _componentName3 = getComponentName(Component) || "Unknown";
                if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                  error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                  didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
                }
              }
              if (typeof Component.contextType === "object" && Component.contextType !== null) {
                var _componentName4 = getComponentName(Component) || "Unknown";
                if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                  error("%s: Function components do not support contextType.", _componentName4);
                  didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
                }
              }
            }
          }
          var SUSPENDED_MARKER = {
            dehydrated: null,
            retryLane: NoLane
          };
          function mountSuspenseOffscreenState(renderLanes2) {
            return {
              baseLanes: renderLanes2
            };
          }
          function updateSuspenseOffscreenState(prevOffscreenState, renderLanes2) {
            return {
              baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes2)
            };
          }
          function shouldRemainOnFallback(suspenseContext, current2, workInProgress2, renderLanes2) {
            if (current2 !== null) {
              var suspenseState = current2.memoizedState;
              if (suspenseState === null) {
                return false;
              }
            }
            return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
          }
          function getRemainingWorkInPrimaryTree(current2, renderLanes2) {
            return removeLanes(current2.childLanes, renderLanes2);
          }
          function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            {
              if (shouldSuspend(workInProgress2)) {
                workInProgress2.flags |= DidCapture;
              }
            }
            var suspenseContext = suspenseStackCursor.current;
            var showFallback = false;
            var didSuspend = (workInProgress2.flags & DidCapture) !== NoFlags;
            if (didSuspend || shouldRemainOnFallback(suspenseContext, current2)) {
              showFallback = true;
              workInProgress2.flags &= ~DidCapture;
            } else {
              if (current2 === null || current2.memoizedState !== null) {
                if (nextProps.fallback !== void 0 && nextProps.unstable_avoidThisFallback !== true) {
                  suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
                }
              }
            }
            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            pushSuspenseContext(workInProgress2, suspenseContext);
            if (current2 === null) {
              if (nextProps.fallback !== void 0) {
                tryToClaimNextHydratableInstance(workInProgress2);
              }
              var nextPrimaryChildren = nextProps.children;
              var nextFallbackChildren = nextProps.fallback;
              if (showFallback) {
                var fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
                var primaryChildFragment = workInProgress2.child;
                primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return fallbackFragment;
              } else if (typeof nextProps.unstable_expectedLoadTime === "number") {
                var _fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
                var _primaryChildFragment = workInProgress2.child;
                _primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                workInProgress2.lanes = SomeRetryLane;
                {
                  markSpawnedWork(SomeRetryLane);
                }
                return _fallbackFragment;
              } else {
                return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren, renderLanes2);
              }
            } else {
              var prevState = current2.memoizedState;
              if (prevState !== null) {
                if (showFallback) {
                  var _nextFallbackChildren2 = nextProps.fallback;
                  var _nextPrimaryChildren2 = nextProps.children;
                  var _fallbackChildFragment = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes2);
                  var _primaryChildFragment3 = workInProgress2.child;
                  var prevOffscreenState = current2.child.memoizedState;
                  _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes2);
                  _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
                  workInProgress2.memoizedState = SUSPENDED_MARKER;
                  return _fallbackChildFragment;
                } else {
                  var _nextPrimaryChildren3 = nextProps.children;
                  var _primaryChildFragment4 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren3, renderLanes2);
                  workInProgress2.memoizedState = null;
                  return _primaryChildFragment4;
                }
              } else {
                if (showFallback) {
                  var _nextFallbackChildren3 = nextProps.fallback;
                  var _nextPrimaryChildren4 = nextProps.children;
                  var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes2);
                  var _primaryChildFragment5 = workInProgress2.child;
                  var _prevOffscreenState = current2.child.memoizedState;
                  _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes2);
                  _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
                  workInProgress2.memoizedState = SUSPENDED_MARKER;
                  return _fallbackChildFragment2;
                } else {
                  var _nextPrimaryChildren5 = nextProps.children;
                  var _primaryChildFragment6 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren5, renderLanes2);
                  workInProgress2.memoizedState = null;
                  return _primaryChildFragment6;
                }
              }
            }
          }
          function mountSuspensePrimaryChildren(workInProgress2, primaryChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var primaryChildProps = {
              mode: "visible",
              children: primaryChildren
            };
            var primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, renderLanes2, null);
            primaryChildFragment.return = workInProgress2;
            workInProgress2.child = primaryChildFragment;
            return primaryChildFragment;
          }
          function mountSuspenseFallbackChildren(workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var progressedPrimaryFragment = workInProgress2.child;
            var primaryChildProps = {
              mode: "hidden",
              children: primaryChildren
            };
            var primaryChildFragment;
            var fallbackChildFragment;
            if ((mode & BlockingMode) === NoMode && progressedPrimaryFragment !== null) {
              primaryChildFragment = progressedPrimaryFragment;
              primaryChildFragment.childLanes = NoLanes;
              primaryChildFragment.pendingProps = primaryChildProps;
              if (workInProgress2.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = 0;
                primaryChildFragment.treeBaseDuration = 0;
              }
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
            } else {
              primaryChildFragment = createFiberFromOffscreen(primaryChildProps, mode, NoLanes, null);
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
            }
            primaryChildFragment.return = workInProgress2;
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.child = primaryChildFragment;
            return fallbackChildFragment;
          }
          function createWorkInProgressOffscreenFiber(current2, offscreenProps) {
            return createWorkInProgress(current2, offscreenProps);
          }
          function updateSuspensePrimaryChildren(current2, workInProgress2, primaryChildren, renderLanes2) {
            var currentPrimaryChildFragment = current2.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            var primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
              mode: "visible",
              children: primaryChildren
            });
            if ((workInProgress2.mode & BlockingMode) === NoMode) {
              primaryChildFragment.lanes = renderLanes2;
            }
            primaryChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = null;
            if (currentFallbackChildFragment !== null) {
              currentFallbackChildFragment.nextEffect = null;
              currentFallbackChildFragment.flags = Deletion;
              workInProgress2.firstEffect = workInProgress2.lastEffect = currentFallbackChildFragment;
            }
            workInProgress2.child = primaryChildFragment;
            return primaryChildFragment;
          }
          function updateSuspenseFallbackChildren(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
            var mode = workInProgress2.mode;
            var currentPrimaryChildFragment = current2.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
            var primaryChildProps = {
              mode: "hidden",
              children: primaryChildren
            };
            var primaryChildFragment;
            if (
              // In legacy mode, we commit the primary tree as if it successfully
              // completed, even though it's in an inconsistent state.
              (mode & BlockingMode) === NoMode && // Make sure we're on the second pass, i.e. the primary child fragment was
              // already cloned. In legacy mode, the only case where this isn't true is
              // when DevTools forces us to display a fallback; we skip the first render
              // pass entirely and go straight to rendering the fallback. (In Concurrent
              // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
              // only codepath.)
              workInProgress2.child !== currentPrimaryChildFragment
            ) {
              var progressedPrimaryFragment = workInProgress2.child;
              primaryChildFragment = progressedPrimaryFragment;
              primaryChildFragment.childLanes = NoLanes;
              primaryChildFragment.pendingProps = primaryChildProps;
              if (workInProgress2.mode & ProfileMode) {
                primaryChildFragment.actualDuration = 0;
                primaryChildFragment.actualStartTime = -1;
                primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
                primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
              }
              var progressedLastEffect = primaryChildFragment.lastEffect;
              if (progressedLastEffect !== null) {
                workInProgress2.firstEffect = primaryChildFragment.firstEffect;
                workInProgress2.lastEffect = progressedLastEffect;
                progressedLastEffect.nextEffect = null;
              } else {
                workInProgress2.firstEffect = workInProgress2.lastEffect = null;
              }
            } else {
              primaryChildFragment = createWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
            }
            var fallbackChildFragment;
            if (currentFallbackChildFragment !== null) {
              fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
            } else {
              fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
              fallbackChildFragment.flags |= Placement;
            }
            fallbackChildFragment.return = workInProgress2;
            primaryChildFragment.return = workInProgress2;
            primaryChildFragment.sibling = fallbackChildFragment;
            workInProgress2.child = primaryChildFragment;
            return fallbackChildFragment;
          }
          function scheduleWorkOnFiber(fiber, renderLanes2) {
            fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
            var alternate = fiber.alternate;
            if (alternate !== null) {
              alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
            }
            scheduleWorkOnParentPath(fiber.return, renderLanes2);
          }
          function propagateSuspenseContextChange(workInProgress2, firstChild, renderLanes2) {
            var node = firstChild;
            while (node !== null) {
              if (node.tag === SuspenseComponent) {
                var state = node.memoizedState;
                if (state !== null) {
                  scheduleWorkOnFiber(node, renderLanes2);
                }
              } else if (node.tag === SuspenseListComponent) {
                scheduleWorkOnFiber(node, renderLanes2);
              } else if (node.child !== null) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === workInProgress2) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === workInProgress2) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
          function findLastContentRow(firstChild) {
            var row = firstChild;
            var lastContentRow = null;
            while (row !== null) {
              var currentRow = row.alternate;
              if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                lastContentRow = row;
              }
              row = row.sibling;
            }
            return lastContentRow;
          }
          function validateRevealOrder(revealOrder) {
            {
              if (revealOrder !== void 0 && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
                didWarnAboutRevealOrder[revealOrder] = true;
                if (typeof revealOrder === "string") {
                  switch (revealOrder.toLowerCase()) {
                    case "together":
                    case "forwards":
                    case "backwards": {
                      error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                      break;
                    }
                    case "forward":
                    case "backward": {
                      error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                      break;
                    }
                    default:
                      error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                      break;
                  }
                } else {
                  error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                }
              }
            }
          }
          function validateTailOptions(tailMode, revealOrder) {
            {
              if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
                if (tailMode !== "collapsed" && tailMode !== "hidden") {
                  didWarnAboutTailOptions[tailMode] = true;
                  error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode);
                } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
                  didWarnAboutTailOptions[tailMode] = true;
                  error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode);
                }
              }
            }
          }
          function validateSuspenseListNestedChild(childSlot, index2) {
            {
              var isArray2 = Array.isArray(childSlot);
              var isIterable = !isArray2 && typeof getIteratorFn(childSlot) === "function";
              if (isArray2 || isIterable) {
                var type = isArray2 ? "array" : "iterable";
                error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index2, type);
                return false;
              }
            }
            return true;
          }
          function validateSuspenseListChildren(children, revealOrder) {
            {
              if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== void 0 && children !== null && children !== false) {
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    if (!validateSuspenseListNestedChild(children[i], i)) {
                      return;
                    }
                  }
                } else {
                  var iteratorFn = getIteratorFn(children);
                  if (typeof iteratorFn === "function") {
                    var childrenIterator = iteratorFn.call(children);
                    if (childrenIterator) {
                      var step = childrenIterator.next();
                      var _i = 0;
                      for (; !step.done; step = childrenIterator.next()) {
                        if (!validateSuspenseListNestedChild(step.value, _i)) {
                          return;
                        }
                        _i++;
                      }
                    }
                  } else {
                    error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
                  }
                }
              }
            }
          }
          function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, lastEffectBeforeRendering) {
            var renderState = workInProgress2.memoizedState;
            if (renderState === null) {
              workInProgress2.memoizedState = {
                isBackwards,
                rendering: null,
                renderingStartTime: 0,
                last: lastContentRow,
                tail,
                tailMode,
                lastEffect: lastEffectBeforeRendering
              };
            } else {
              renderState.isBackwards = isBackwards;
              renderState.rendering = null;
              renderState.renderingStartTime = 0;
              renderState.last = lastContentRow;
              renderState.tail = tail;
              renderState.tailMode = tailMode;
              renderState.lastEffect = lastEffectBeforeRendering;
            }
          }
          function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
            var nextProps = workInProgress2.pendingProps;
            var revealOrder = nextProps.revealOrder;
            var tailMode = nextProps.tail;
            var newChildren = nextProps.children;
            validateRevealOrder(revealOrder);
            validateTailOptions(tailMode, revealOrder);
            validateSuspenseListChildren(newChildren, revealOrder);
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            var suspenseContext = suspenseStackCursor.current;
            var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
            if (shouldForceFallback) {
              suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
              workInProgress2.flags |= DidCapture;
            } else {
              var didSuspendBefore = current2 !== null && (current2.flags & DidCapture) !== NoFlags;
              if (didSuspendBefore) {
                propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderLanes2);
              }
              suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            }
            pushSuspenseContext(workInProgress2, suspenseContext);
            if ((workInProgress2.mode & BlockingMode) === NoMode) {
              workInProgress2.memoizedState = null;
            } else {
              switch (revealOrder) {
                case "forwards": {
                  var lastContentRow = findLastContentRow(workInProgress2.child);
                  var tail;
                  if (lastContentRow === null) {
                    tail = workInProgress2.child;
                    workInProgress2.child = null;
                  } else {
                    tail = lastContentRow.sibling;
                    lastContentRow.sibling = null;
                  }
                  initSuspenseListRenderState(
                    workInProgress2,
                    false,
                    // isBackwards
                    tail,
                    lastContentRow,
                    tailMode,
                    workInProgress2.lastEffect
                  );
                  break;
                }
                case "backwards": {
                  var _tail = null;
                  var row = workInProgress2.child;
                  workInProgress2.child = null;
                  while (row !== null) {
                    var currentRow = row.alternate;
                    if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                      workInProgress2.child = row;
                      break;
                    }
                    var nextRow = row.sibling;
                    row.sibling = _tail;
                    _tail = row;
                    row = nextRow;
                  }
                  initSuspenseListRenderState(
                    workInProgress2,
                    true,
                    // isBackwards
                    _tail,
                    null,
                    // last
                    tailMode,
                    workInProgress2.lastEffect
                  );
                  break;
                }
                case "together": {
                  initSuspenseListRenderState(
                    workInProgress2,
                    false,
                    // isBackwards
                    null,
                    // tail
                    null,
                    // last
                    void 0,
                    workInProgress2.lastEffect
                  );
                  break;
                }
                default: {
                  workInProgress2.memoizedState = null;
                }
              }
            }
            return workInProgress2.child;
          }
          function updatePortalComponent(current2, workInProgress2, renderLanes2) {
            pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
            var nextChildren = workInProgress2.pendingProps;
            if (current2 === null) {
              workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
            } else {
              reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
            }
            return workInProgress2.child;
          }
          var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
          function updateContextProvider(current2, workInProgress2, renderLanes2) {
            var providerType = workInProgress2.type;
            var context = providerType._context;
            var newProps = workInProgress2.pendingProps;
            var oldProps = workInProgress2.memoizedProps;
            var newValue = newProps.value;
            {
              if (!("value" in newProps)) {
                if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
                  hasWarnedAboutUsingNoValuePropOnContextProvider = true;
                  error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
                }
              }
              var providerPropTypes = workInProgress2.type.propTypes;
              if (providerPropTypes) {
                checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
              }
            }
            pushProvider(workInProgress2, newValue);
            if (oldProps !== null) {
              var oldValue = oldProps.value;
              var changedBits = calculateChangedBits(context, newValue, oldValue);
              if (changedBits === 0) {
                if (oldProps.children === newProps.children && !hasContextChanged()) {
                  return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                }
              } else {
                propagateContextChange(workInProgress2, context, changedBits, renderLanes2);
              }
            }
            var newChildren = newProps.children;
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            return workInProgress2.child;
          }
          var hasWarnedAboutUsingContextAsConsumer = false;
          function updateContextConsumer(current2, workInProgress2, renderLanes2) {
            var context = workInProgress2.type;
            {
              if (context._context === void 0) {
                if (context !== context.Consumer) {
                  if (!hasWarnedAboutUsingContextAsConsumer) {
                    hasWarnedAboutUsingContextAsConsumer = true;
                    error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                }
              } else {
                context = context._context;
              }
            }
            var newProps = workInProgress2.pendingProps;
            var render2 = newProps.children;
            {
              if (typeof render2 !== "function") {
                error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
              }
            }
            prepareToReadContext(workInProgress2, renderLanes2);
            var newValue = readContext(context, newProps.unstable_observedBits);
            var newChildren;
            {
              ReactCurrentOwner$1.current = workInProgress2;
              setIsRendering(true);
              newChildren = render2(newValue);
              setIsRendering(false);
            }
            workInProgress2.flags |= PerformedWork;
            reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
            return workInProgress2.child;
          }
          function markWorkInProgressReceivedUpdate() {
            didReceiveUpdate = true;
          }
          function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
            if (current2 !== null) {
              workInProgress2.dependencies = current2.dependencies;
            }
            {
              stopProfilerTimerIfRunning();
            }
            markSkippedUpdateLanes(workInProgress2.lanes);
            if (!includesSomeLane(renderLanes2, workInProgress2.childLanes)) {
              return null;
            } else {
              cloneChildFibers(current2, workInProgress2);
              return workInProgress2.child;
            }
          }
          function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
            {
              var returnFiber = oldWorkInProgress.return;
              if (returnFiber === null) {
                throw new Error("Cannot swap the root fiber.");
              }
              current2.alternate = null;
              oldWorkInProgress.alternate = null;
              newWorkInProgress.index = oldWorkInProgress.index;
              newWorkInProgress.sibling = oldWorkInProgress.sibling;
              newWorkInProgress.return = oldWorkInProgress.return;
              newWorkInProgress.ref = oldWorkInProgress.ref;
              if (oldWorkInProgress === returnFiber.child) {
                returnFiber.child = newWorkInProgress;
              } else {
                var prevSibling = returnFiber.child;
                if (prevSibling === null) {
                  throw new Error("Expected parent to have a child.");
                }
                while (prevSibling.sibling !== oldWorkInProgress) {
                  prevSibling = prevSibling.sibling;
                  if (prevSibling === null) {
                    throw new Error("Expected to find the previous sibling.");
                  }
                }
                prevSibling.sibling = newWorkInProgress;
              }
              var last = returnFiber.lastEffect;
              if (last !== null) {
                last.nextEffect = current2;
                returnFiber.lastEffect = current2;
              } else {
                returnFiber.firstEffect = returnFiber.lastEffect = current2;
              }
              current2.nextEffect = null;
              current2.flags = Deletion;
              newWorkInProgress.flags |= Placement;
              return newWorkInProgress;
            }
          }
          function beginWork(current2, workInProgress2, renderLanes2) {
            var updateLanes = workInProgress2.lanes;
            {
              if (workInProgress2._debugNeedsRemount && current2 !== null) {
                return remountFiber(current2, workInProgress2, createFiberFromTypeAndProps(workInProgress2.type, workInProgress2.key, workInProgress2.pendingProps, workInProgress2._debugOwner || null, workInProgress2.mode, workInProgress2.lanes));
              }
            }
            if (current2 !== null) {
              var oldProps = current2.memoizedProps;
              var newProps = workInProgress2.pendingProps;
              if (oldProps !== newProps || hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
              workInProgress2.type !== current2.type) {
                didReceiveUpdate = true;
              } else if (!includesSomeLane(renderLanes2, updateLanes)) {
                didReceiveUpdate = false;
                switch (workInProgress2.tag) {
                  case HostRoot:
                    pushHostRootContext(workInProgress2);
                    resetHydrationState();
                    break;
                  case HostComponent:
                    pushHostContext(workInProgress2);
                    break;
                  case ClassComponent: {
                    var Component = workInProgress2.type;
                    if (isContextProvider(Component)) {
                      pushContextProvider(workInProgress2);
                    }
                    break;
                  }
                  case HostPortal:
                    pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
                    break;
                  case ContextProvider: {
                    var newValue = workInProgress2.memoizedProps.value;
                    pushProvider(workInProgress2, newValue);
                    break;
                  }
                  case Profiler:
                    {
                      var hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                      if (hasChildWork) {
                        workInProgress2.flags |= Update;
                      }
                      var stateNode = workInProgress2.stateNode;
                      stateNode.effectDuration = 0;
                      stateNode.passiveEffectDuration = 0;
                    }
                    break;
                  case SuspenseComponent: {
                    var state = workInProgress2.memoizedState;
                    if (state !== null) {
                      var primaryChildFragment = workInProgress2.child;
                      var primaryChildLanes = primaryChildFragment.childLanes;
                      if (includesSomeLane(renderLanes2, primaryChildLanes)) {
                        return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
                      } else {
                        pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                        var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
                        if (child !== null) {
                          return child.sibling;
                        } else {
                          return null;
                        }
                      }
                    } else {
                      pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                    }
                    break;
                  }
                  case SuspenseListComponent: {
                    var didSuspendBefore = (current2.flags & DidCapture) !== NoFlags;
                    var _hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
                    if (didSuspendBefore) {
                      if (_hasChildWork) {
                        return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
                      }
                      workInProgress2.flags |= DidCapture;
                    }
                    var renderState = workInProgress2.memoizedState;
                    if (renderState !== null) {
                      renderState.rendering = null;
                      renderState.tail = null;
                      renderState.lastEffect = null;
                    }
                    pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
                    if (_hasChildWork) {
                      break;
                    } else {
                      return null;
                    }
                  }
                  case OffscreenComponent:
                  case LegacyHiddenComponent: {
                    workInProgress2.lanes = NoLanes;
                    return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
                  }
                }
                return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              } else {
                if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
                  didReceiveUpdate = true;
                } else {
                  didReceiveUpdate = false;
                }
              }
            } else {
              didReceiveUpdate = false;
            }
            workInProgress2.lanes = NoLanes;
            switch (workInProgress2.tag) {
              case IndeterminateComponent: {
                return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderLanes2);
              }
              case LazyComponent: {
                var elementType = workInProgress2.elementType;
                return mountLazyComponent(current2, workInProgress2, elementType, updateLanes, renderLanes2);
              }
              case FunctionComponent: {
                var _Component = workInProgress2.type;
                var unresolvedProps = workInProgress2.pendingProps;
                var resolvedProps = workInProgress2.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
                return updateFunctionComponent(current2, workInProgress2, _Component, resolvedProps, renderLanes2);
              }
              case ClassComponent: {
                var _Component2 = workInProgress2.type;
                var _unresolvedProps = workInProgress2.pendingProps;
                var _resolvedProps = workInProgress2.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);
                return updateClassComponent(current2, workInProgress2, _Component2, _resolvedProps, renderLanes2);
              }
              case HostRoot:
                return updateHostRoot(current2, workInProgress2, renderLanes2);
              case HostComponent:
                return updateHostComponent(current2, workInProgress2, renderLanes2);
              case HostText:
                return updateHostText(current2, workInProgress2);
              case SuspenseComponent:
                return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
              case HostPortal:
                return updatePortalComponent(current2, workInProgress2, renderLanes2);
              case ForwardRef: {
                var type = workInProgress2.type;
                var _unresolvedProps2 = workInProgress2.pendingProps;
                var _resolvedProps2 = workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
                return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderLanes2);
              }
              case Fragment:
                return updateFragment(current2, workInProgress2, renderLanes2);
              case Mode:
                return updateMode(current2, workInProgress2, renderLanes2);
              case Profiler:
                return updateProfiler(current2, workInProgress2, renderLanes2);
              case ContextProvider:
                return updateContextProvider(current2, workInProgress2, renderLanes2);
              case ContextConsumer:
                return updateContextConsumer(current2, workInProgress2, renderLanes2);
              case MemoComponent: {
                var _type2 = workInProgress2.type;
                var _unresolvedProps3 = workInProgress2.pendingProps;
                var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
                {
                  if (workInProgress2.type !== workInProgress2.elementType) {
                    var outerPropTypes = _type2.propTypes;
                    if (outerPropTypes) {
                      checkPropTypes(
                        outerPropTypes,
                        _resolvedProps3,
                        // Resolved for outer only
                        "prop",
                        getComponentName(_type2)
                      );
                    }
                  }
                }
                _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
                return updateMemoComponent(current2, workInProgress2, _type2, _resolvedProps3, updateLanes, renderLanes2);
              }
              case SimpleMemoComponent: {
                return updateSimpleMemoComponent(current2, workInProgress2, workInProgress2.type, workInProgress2.pendingProps, updateLanes, renderLanes2);
              }
              case IncompleteClassComponent: {
                var _Component3 = workInProgress2.type;
                var _unresolvedProps4 = workInProgress2.pendingProps;
                var _resolvedProps4 = workInProgress2.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);
                return mountIncompleteClassComponent(current2, workInProgress2, _Component3, _resolvedProps4, renderLanes2);
              }
              case SuspenseListComponent: {
                return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
              }
              case FundamentalComponent: {
                break;
              }
              case ScopeComponent: {
                break;
              }
              case Block: {
                break;
              }
              case OffscreenComponent: {
                return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
              }
              case LegacyHiddenComponent: {
                return updateLegacyHiddenComponent(current2, workInProgress2, renderLanes2);
              }
            }
            {
              {
                throw Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function markUpdate(workInProgress2) {
            workInProgress2.flags |= Update;
          }
          function markRef$1(workInProgress2) {
            workInProgress2.flags |= Ref;
          }
          var appendAllChildren;
          var updateHostContainer;
          var updateHostComponent$1;
          var updateHostText$1;
          if (supportsMutation) {
            appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent || node.tag === HostText) {
                  appendInitialChild(parent, node.stateNode);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            updateHostContainer = function(workInProgress2) {
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
              var oldProps = current2.memoizedProps;
              if (oldProps === newProps) {
                return;
              }
              var instance = workInProgress2.stateNode;
              var currentHostContext = getHostContext();
              var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
              workInProgress2.updateQueue = updatePayload;
              if (updatePayload) {
                markUpdate(workInProgress2);
              }
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
              if (oldText !== newText) {
                markUpdate(workInProgress2);
              }
            };
          } else if (supportsPersistence) {
            appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent) {
                  var instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var props = node.memoizedProps;
                    var type = node.type;
                    instance = cloneHiddenInstance(instance, type, props, node);
                  }
                  appendInitialChild(parent, instance);
                } else if (node.tag === HostText) {
                  var _instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var text = node.memoizedProps;
                    _instance = cloneHiddenTextInstance(_instance, text, node);
                  }
                  appendInitialChild(parent, _instance);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.tag === SuspenseComponent) {
                  if ((node.flags & Update) !== NoFlags) {
                    var newIsHidden = node.memoizedState !== null;
                    if (newIsHidden) {
                      var primaryChildParent = node.child;
                      if (primaryChildParent !== null) {
                        if (primaryChildParent.child !== null) {
                          primaryChildParent.child.return = primaryChildParent;
                          appendAllChildren(parent, primaryChildParent, true, newIsHidden);
                        }
                        var fallbackChildParent = primaryChildParent.sibling;
                        if (fallbackChildParent !== null) {
                          fallbackChildParent.return = node;
                          node = fallbackChildParent;
                          continue;
                        }
                      }
                    }
                  }
                  if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                  }
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                node = node;
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            var appendAllChildrenToContainer = function(containerChildSet, workInProgress2, needsVisibilityToggle, isHidden) {
              var node = workInProgress2.child;
              while (node !== null) {
                if (node.tag === HostComponent) {
                  var instance = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var props = node.memoizedProps;
                    var type = node.type;
                    instance = cloneHiddenInstance(instance, type, props, node);
                  }
                  appendChildToContainerChildSet(containerChildSet, instance);
                } else if (node.tag === HostText) {
                  var _instance3 = node.stateNode;
                  if (needsVisibilityToggle && isHidden) {
                    var text = node.memoizedProps;
                    _instance3 = cloneHiddenTextInstance(_instance3, text, node);
                  }
                  appendChildToContainerChildSet(containerChildSet, _instance3);
                } else if (node.tag === HostPortal)
                  ;
                else if (node.tag === SuspenseComponent) {
                  if ((node.flags & Update) !== NoFlags) {
                    var newIsHidden = node.memoizedState !== null;
                    if (newIsHidden) {
                      var primaryChildParent = node.child;
                      if (primaryChildParent !== null) {
                        if (primaryChildParent.child !== null) {
                          primaryChildParent.child.return = primaryChildParent;
                          appendAllChildrenToContainer(containerChildSet, primaryChildParent, true, newIsHidden);
                        }
                        var fallbackChildParent = primaryChildParent.sibling;
                        if (fallbackChildParent !== null) {
                          fallbackChildParent.return = node;
                          node = fallbackChildParent;
                          continue;
                        }
                      }
                    }
                  }
                  if (node.child !== null) {
                    node.child.return = node;
                    node = node.child;
                    continue;
                  }
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                node = node;
                if (node === workInProgress2) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === workInProgress2) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            };
            updateHostContainer = function(workInProgress2) {
              var portalOrRoot = workInProgress2.stateNode;
              var childrenUnchanged = workInProgress2.firstEffect === null;
              if (childrenUnchanged)
                ;
              else {
                var container = portalOrRoot.containerInfo;
                var newChildSet = createContainerChildSet(container);
                appendAllChildrenToContainer(newChildSet, workInProgress2, false, false);
                portalOrRoot.pendingChildren = newChildSet;
                markUpdate(workInProgress2);
                finalizeContainerChildren(container, newChildSet);
              }
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
              var currentInstance = current2.stateNode;
              var oldProps = current2.memoizedProps;
              var childrenUnchanged = workInProgress2.firstEffect === null;
              if (childrenUnchanged && oldProps === newProps) {
                workInProgress2.stateNode = currentInstance;
                return;
              }
              var recyclableInstance = workInProgress2.stateNode;
              var currentHostContext = getHostContext();
              var updatePayload = null;
              if (oldProps !== newProps) {
                updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
              }
              if (childrenUnchanged && updatePayload === null) {
                workInProgress2.stateNode = currentInstance;
                return;
              }
              var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress2, childrenUnchanged, recyclableInstance);
              if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress2);
              }
              workInProgress2.stateNode = newInstance;
              if (childrenUnchanged) {
                markUpdate(workInProgress2);
              } else {
                appendAllChildren(newInstance, workInProgress2, false, false);
              }
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
              if (oldText !== newText) {
                var rootContainerInstance = getRootHostContainer();
                var currentHostContext = getHostContext();
                workInProgress2.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress2);
                markUpdate(workInProgress2);
              } else {
                workInProgress2.stateNode = current2.stateNode;
              }
            };
          } else {
            updateHostContainer = function(workInProgress2) {
            };
            updateHostComponent$1 = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
            };
            updateHostText$1 = function(current2, workInProgress2, oldText, newText) {
            };
          }
          function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
            if (getIsHydrating()) {
              return;
            }
            switch (renderState.tailMode) {
              case "hidden": {
                var tailNode = renderState.tail;
                var lastTailNode = null;
                while (tailNode !== null) {
                  if (tailNode.alternate !== null) {
                    lastTailNode = tailNode;
                  }
                  tailNode = tailNode.sibling;
                }
                if (lastTailNode === null) {
                  renderState.tail = null;
                } else {
                  lastTailNode.sibling = null;
                }
                break;
              }
              case "collapsed": {
                var _tailNode = renderState.tail;
                var _lastTailNode = null;
                while (_tailNode !== null) {
                  if (_tailNode.alternate !== null) {
                    _lastTailNode = _tailNode;
                  }
                  _tailNode = _tailNode.sibling;
                }
                if (_lastTailNode === null) {
                  if (!hasRenderedATailFallback && renderState.tail !== null) {
                    renderState.tail.sibling = null;
                  } else {
                    renderState.tail = null;
                  }
                } else {
                  _lastTailNode.sibling = null;
                }
                break;
              }
            }
          }
          function completeWork(current2, workInProgress2, renderLanes2) {
            var newProps = workInProgress2.pendingProps;
            switch (workInProgress2.tag) {
              case IndeterminateComponent:
              case LazyComponent:
              case SimpleMemoComponent:
              case FunctionComponent:
              case ForwardRef:
              case Fragment:
              case Mode:
              case Profiler:
              case ContextConsumer:
              case MemoComponent:
                return null;
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  popContext(workInProgress2);
                }
                return null;
              }
              case HostRoot: {
                popHostContainer(workInProgress2);
                popTopLevelContextObject(workInProgress2);
                resetWorkInProgressVersions();
                var fiberRoot = workInProgress2.stateNode;
                if (fiberRoot.pendingContext) {
                  fiberRoot.context = fiberRoot.pendingContext;
                  fiberRoot.pendingContext = null;
                }
                if (current2 === null || current2.child === null) {
                  var wasHydrated = popHydrationState(workInProgress2);
                  if (wasHydrated) {
                    markUpdate(workInProgress2);
                  } else if (!fiberRoot.hydrate) {
                    workInProgress2.flags |= Snapshot;
                  }
                }
                updateHostContainer(workInProgress2);
                return null;
              }
              case HostComponent: {
                popHostContext(workInProgress2);
                var rootContainerInstance = getRootHostContainer();
                var type = workInProgress2.type;
                if (current2 !== null && workInProgress2.stateNode != null) {
                  updateHostComponent$1(current2, workInProgress2, type, newProps, rootContainerInstance);
                  if (current2.ref !== workInProgress2.ref) {
                    markRef$1(workInProgress2);
                  }
                } else {
                  if (!newProps) {
                    if (!(workInProgress2.stateNode !== null)) {
                      {
                        throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                      }
                    }
                    return null;
                  }
                  var currentHostContext = getHostContext();
                  var _wasHydrated = popHydrationState(workInProgress2);
                  if (_wasHydrated) {
                    if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
                      markUpdate(workInProgress2);
                    }
                  } else {
                    var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress2);
                    appendAllChildren(instance, workInProgress2, false, false);
                    workInProgress2.stateNode = instance;
                    if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                      markUpdate(workInProgress2);
                    }
                  }
                  if (workInProgress2.ref !== null) {
                    markRef$1(workInProgress2);
                  }
                }
                return null;
              }
              case HostText: {
                var newText = newProps;
                if (current2 && workInProgress2.stateNode != null) {
                  var oldText = current2.memoizedProps;
                  updateHostText$1(current2, workInProgress2, oldText, newText);
                } else {
                  if (typeof newText !== "string") {
                    if (!(workInProgress2.stateNode !== null)) {
                      {
                        throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                      }
                    }
                  }
                  var _rootContainerInstance = getRootHostContainer();
                  var _currentHostContext = getHostContext();
                  var _wasHydrated2 = popHydrationState(workInProgress2);
                  if (_wasHydrated2) {
                    if (prepareToHydrateHostTextInstance(workInProgress2)) {
                      markUpdate(workInProgress2);
                    }
                  } else {
                    workInProgress2.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress2);
                  }
                }
                return null;
              }
              case SuspenseComponent: {
                popSuspenseContext(workInProgress2);
                var nextState = workInProgress2.memoizedState;
                if ((workInProgress2.flags & DidCapture) !== NoFlags) {
                  workInProgress2.lanes = renderLanes2;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                var nextDidTimeout = nextState !== null;
                var prevDidTimeout = false;
                if (current2 === null) {
                  if (workInProgress2.memoizedProps.fallback !== void 0) {
                    popHydrationState(workInProgress2);
                  }
                } else {
                  var prevState = current2.memoizedState;
                  prevDidTimeout = prevState !== null;
                }
                if (nextDidTimeout && !prevDidTimeout) {
                  if ((workInProgress2.mode & BlockingMode) !== NoMode) {
                    var hasInvisibleChildContext = current2 === null && workInProgress2.memoizedProps.unstable_avoidThisFallback !== true;
                    if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                      renderDidSuspend();
                    } else {
                      renderDidSuspendDelayIfPossible();
                    }
                  }
                }
                if (supportsPersistence) {
                  if (nextDidTimeout) {
                    workInProgress2.flags |= Update;
                  }
                }
                if (supportsMutation) {
                  if (nextDidTimeout || prevDidTimeout) {
                    workInProgress2.flags |= Update;
                  }
                }
                return null;
              }
              case HostPortal:
                popHostContainer(workInProgress2);
                updateHostContainer(workInProgress2);
                if (current2 === null) {
                  preparePortalMount(workInProgress2.stateNode.containerInfo);
                }
                return null;
              case ContextProvider:
                popProvider(workInProgress2);
                return null;
              case IncompleteClassComponent: {
                var _Component = workInProgress2.type;
                if (isContextProvider(_Component)) {
                  popContext(workInProgress2);
                }
                return null;
              }
              case SuspenseListComponent: {
                popSuspenseContext(workInProgress2);
                var renderState = workInProgress2.memoizedState;
                if (renderState === null) {
                  return null;
                }
                var didSuspendAlready = (workInProgress2.flags & DidCapture) !== NoFlags;
                var renderedTail = renderState.rendering;
                if (renderedTail === null) {
                  if (!didSuspendAlready) {
                    var cannotBeSuspended = renderHasNotSuspendedYet() && (current2 === null || (current2.flags & DidCapture) === NoFlags);
                    if (!cannotBeSuspended) {
                      var row = workInProgress2.child;
                      while (row !== null) {
                        var suspended = findFirstSuspended(row);
                        if (suspended !== null) {
                          didSuspendAlready = true;
                          workInProgress2.flags |= DidCapture;
                          cutOffTailIfNeeded(renderState, false);
                          var newThennables = suspended.updateQueue;
                          if (newThennables !== null) {
                            workInProgress2.updateQueue = newThennables;
                            workInProgress2.flags |= Update;
                          }
                          if (renderState.lastEffect === null) {
                            workInProgress2.firstEffect = null;
                          }
                          workInProgress2.lastEffect = renderState.lastEffect;
                          resetChildFibers(workInProgress2, renderLanes2);
                          pushSuspenseContext(workInProgress2, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                          return workInProgress2.child;
                        }
                        row = row.sibling;
                      }
                    }
                    if (renderState.tail !== null && now$1() > getRenderTargetTime()) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      cutOffTailIfNeeded(renderState, false);
                      workInProgress2.lanes = SomeRetryLane;
                      {
                        markSpawnedWork(SomeRetryLane);
                      }
                    }
                  } else {
                    cutOffTailIfNeeded(renderState, false);
                  }
                } else {
                  if (!didSuspendAlready) {
                    var _suspended = findFirstSuspended(renderedTail);
                    if (_suspended !== null) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      var _newThennables = _suspended.updateQueue;
                      if (_newThennables !== null) {
                        workInProgress2.updateQueue = _newThennables;
                        workInProgress2.flags |= Update;
                      }
                      cutOffTailIfNeeded(renderState, true);
                      if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
                        var lastEffect = workInProgress2.lastEffect = renderState.lastEffect;
                        if (lastEffect !== null) {
                          lastEffect.nextEffect = null;
                        }
                        return null;
                      }
                    } else if (
                      // The time it took to render last row is greater than the remaining
                      // time we have to render. So rendering one more row would likely
                      // exceed it.
                      now$1() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes2 !== OffscreenLane
                    ) {
                      workInProgress2.flags |= DidCapture;
                      didSuspendAlready = true;
                      cutOffTailIfNeeded(renderState, false);
                      workInProgress2.lanes = SomeRetryLane;
                      {
                        markSpawnedWork(SomeRetryLane);
                      }
                    }
                  }
                  if (renderState.isBackwards) {
                    renderedTail.sibling = workInProgress2.child;
                    workInProgress2.child = renderedTail;
                  } else {
                    var previousSibling = renderState.last;
                    if (previousSibling !== null) {
                      previousSibling.sibling = renderedTail;
                    } else {
                      workInProgress2.child = renderedTail;
                    }
                    renderState.last = renderedTail;
                  }
                }
                if (renderState.tail !== null) {
                  var next = renderState.tail;
                  renderState.rendering = next;
                  renderState.tail = next.sibling;
                  renderState.lastEffect = workInProgress2.lastEffect;
                  renderState.renderingStartTime = now$1();
                  next.sibling = null;
                  var suspenseContext = suspenseStackCursor.current;
                  if (didSuspendAlready) {
                    suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
                  } else {
                    suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
                  }
                  pushSuspenseContext(workInProgress2, suspenseContext);
                  return next;
                }
                return null;
              }
              case FundamentalComponent: {
                break;
              }
              case ScopeComponent: {
                break;
              }
              case Block:
                break;
              case OffscreenComponent:
              case LegacyHiddenComponent: {
                popRenderLanes(workInProgress2);
                if (current2 !== null) {
                  var _nextState = workInProgress2.memoizedState;
                  var _prevState = current2.memoizedState;
                  var prevIsHidden = _prevState !== null;
                  var nextIsHidden = _nextState !== null;
                  if (prevIsHidden !== nextIsHidden && newProps.mode !== "unstable-defer-without-hiding") {
                    workInProgress2.flags |= Update;
                  }
                }
                return null;
              }
            }
            {
              {
                throw Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function unwindWork(workInProgress2, renderLanes2) {
            switch (workInProgress2.tag) {
              case ClassComponent: {
                var Component = workInProgress2.type;
                if (isContextProvider(Component)) {
                  popContext(workInProgress2);
                }
                var flags = workInProgress2.flags;
                if (flags & ShouldCapture) {
                  workInProgress2.flags = flags & ~ShouldCapture | DidCapture;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                return null;
              }
              case HostRoot: {
                popHostContainer(workInProgress2);
                popTopLevelContextObject(workInProgress2);
                resetWorkInProgressVersions();
                var _flags = workInProgress2.flags;
                if (!((_flags & DidCapture) === NoFlags)) {
                  {
                    throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
                  }
                }
                workInProgress2.flags = _flags & ~ShouldCapture | DidCapture;
                return workInProgress2;
              }
              case HostComponent: {
                popHostContext(workInProgress2);
                return null;
              }
              case SuspenseComponent: {
                popSuspenseContext(workInProgress2);
                var _flags2 = workInProgress2.flags;
                if (_flags2 & ShouldCapture) {
                  workInProgress2.flags = _flags2 & ~ShouldCapture | DidCapture;
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    transferActualDuration(workInProgress2);
                  }
                  return workInProgress2;
                }
                return null;
              }
              case SuspenseListComponent: {
                popSuspenseContext(workInProgress2);
                return null;
              }
              case HostPortal:
                popHostContainer(workInProgress2);
                return null;
              case ContextProvider:
                popProvider(workInProgress2);
                return null;
              case OffscreenComponent:
              case LegacyHiddenComponent:
                popRenderLanes(workInProgress2);
                return null;
              default:
                return null;
            }
          }
          function unwindInterruptedWork(interruptedWork) {
            switch (interruptedWork.tag) {
              case ClassComponent: {
                var childContextTypes = interruptedWork.type.childContextTypes;
                if (childContextTypes !== null && childContextTypes !== void 0) {
                  popContext(interruptedWork);
                }
                break;
              }
              case HostRoot: {
                popHostContainer(interruptedWork);
                popTopLevelContextObject(interruptedWork);
                resetWorkInProgressVersions();
                break;
              }
              case HostComponent: {
                popHostContext(interruptedWork);
                break;
              }
              case HostPortal:
                popHostContainer(interruptedWork);
                break;
              case SuspenseComponent:
                popSuspenseContext(interruptedWork);
                break;
              case SuspenseListComponent:
                popSuspenseContext(interruptedWork);
                break;
              case ContextProvider:
                popProvider(interruptedWork);
                break;
              case OffscreenComponent:
              case LegacyHiddenComponent:
                popRenderLanes(interruptedWork);
                break;
            }
          }
          function createCapturedValue(value, source) {
            return {
              value,
              source,
              stack: getStackByFiberInDevAndProd(source)
            };
          }
          function showErrorDialog(boundary, errorInfo) {
            return true;
          }
          function logCapturedError(boundary, errorInfo) {
            try {
              var logError = showErrorDialog(boundary, errorInfo);
              if (logError === false) {
                return;
              }
              var error2 = errorInfo.value;
              if (true) {
                var source = errorInfo.source;
                var stack = errorInfo.stack;
                var componentStack = stack !== null ? stack : "";
                if (error2 != null && error2._suppressLogging) {
                  if (boundary.tag === ClassComponent) {
                    return;
                  }
                  console["error"](error2);
                }
                var componentName = source ? getComponentName(source.type) : null;
                var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
                var errorBoundaryMessage;
                var errorBoundaryName = getComponentName(boundary.type);
                if (errorBoundaryName) {
                  errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
                } else {
                  errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
                }
                var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
                console["error"](combinedMessage);
              } else {
                console["error"](error2);
              }
            } catch (e) {
              setTimeout(function() {
                throw e;
              });
            }
          }
          var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
          function createRootErrorUpdate(fiber, errorInfo, lane) {
            var update = createUpdate(NoTimestamp, lane);
            update.tag = CaptureUpdate;
            update.payload = {
              element: null
            };
            var error2 = errorInfo.value;
            update.callback = function() {
              onUncaughtError(error2);
              logCapturedError(fiber, errorInfo);
            };
            return update;
          }
          function createClassErrorUpdate(fiber, errorInfo, lane) {
            var update = createUpdate(NoTimestamp, lane);
            update.tag = CaptureUpdate;
            var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
            if (typeof getDerivedStateFromError === "function") {
              var error$1 = errorInfo.value;
              update.payload = function() {
                logCapturedError(fiber, errorInfo);
                return getDerivedStateFromError(error$1);
              };
            }
            var inst = fiber.stateNode;
            if (inst !== null && typeof inst.componentDidCatch === "function") {
              update.callback = function callback() {
                {
                  markFailedErrorBoundaryForHotReloading(fiber);
                }
                if (typeof getDerivedStateFromError !== "function") {
                  markLegacyErrorBoundaryAsFailed(this);
                  logCapturedError(fiber, errorInfo);
                }
                var error$12 = errorInfo.value;
                var stack = errorInfo.stack;
                this.componentDidCatch(error$12, {
                  componentStack: stack !== null ? stack : ""
                });
                {
                  if (typeof getDerivedStateFromError !== "function") {
                    if (!includesSomeLane(fiber.lanes, SyncLane)) {
                      error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentName(fiber.type) || "Unknown");
                    }
                  }
                }
              };
            } else {
              update.callback = function() {
                markFailedErrorBoundaryForHotReloading(fiber);
              };
            }
            return update;
          }
          function attachPingListener(root, wakeable, lanes) {
            var pingCache = root.pingCache;
            var threadIDs;
            if (pingCache === null) {
              pingCache = root.pingCache = new PossiblyWeakMap$1();
              threadIDs = /* @__PURE__ */ new Set();
              pingCache.set(wakeable, threadIDs);
            } else {
              threadIDs = pingCache.get(wakeable);
              if (threadIDs === void 0) {
                threadIDs = /* @__PURE__ */ new Set();
                pingCache.set(wakeable, threadIDs);
              }
            }
            if (!threadIDs.has(lanes)) {
              threadIDs.add(lanes);
              var ping = pingSuspendedRoot.bind(null, root, wakeable, lanes);
              wakeable.then(ping, ping);
            }
          }
          function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
            sourceFiber.flags |= Incomplete;
            sourceFiber.firstEffect = sourceFiber.lastEffect = null;
            if (value !== null && typeof value === "object" && typeof value.then === "function") {
              var wakeable = value;
              if ((sourceFiber.mode & BlockingMode) === NoMode) {
                var currentSource = sourceFiber.alternate;
                if (currentSource) {
                  sourceFiber.updateQueue = currentSource.updateQueue;
                  sourceFiber.memoizedState = currentSource.memoizedState;
                  sourceFiber.lanes = currentSource.lanes;
                } else {
                  sourceFiber.updateQueue = null;
                  sourceFiber.memoizedState = null;
                }
              }
              var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext);
              var _workInProgress = returnFiber;
              do {
                if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
                  var wakeables = _workInProgress.updateQueue;
                  if (wakeables === null) {
                    var updateQueue = /* @__PURE__ */ new Set();
                    updateQueue.add(wakeable);
                    _workInProgress.updateQueue = updateQueue;
                  } else {
                    wakeables.add(wakeable);
                  }
                  if ((_workInProgress.mode & BlockingMode) === NoMode) {
                    _workInProgress.flags |= DidCapture;
                    sourceFiber.flags |= ForceUpdateForLegacySuspense;
                    sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
                    if (sourceFiber.tag === ClassComponent) {
                      var currentSourceFiber = sourceFiber.alternate;
                      if (currentSourceFiber === null) {
                        sourceFiber.tag = IncompleteClassComponent;
                      } else {
                        var update = createUpdate(NoTimestamp, SyncLane);
                        update.tag = ForceUpdate;
                        enqueueUpdate(sourceFiber, update);
                      }
                    }
                    sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
                    return;
                  }
                  attachPingListener(root, wakeable, rootRenderLanes);
                  _workInProgress.flags |= ShouldCapture;
                  _workInProgress.lanes = rootRenderLanes;
                  return;
                }
                _workInProgress = _workInProgress.return;
              } while (_workInProgress !== null);
              value = new Error((getComponentName(sourceFiber.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }
            renderDidError();
            value = createCapturedValue(value, sourceFiber);
            var workInProgress2 = returnFiber;
            do {
              switch (workInProgress2.tag) {
                case HostRoot: {
                  var _errorInfo = value;
                  workInProgress2.flags |= ShouldCapture;
                  var lane = pickArbitraryLane(rootRenderLanes);
                  workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
                  var _update = createRootErrorUpdate(workInProgress2, _errorInfo, lane);
                  enqueueCapturedUpdate(workInProgress2, _update);
                  return;
                }
                case ClassComponent:
                  var errorInfo = value;
                  var ctor = workInProgress2.type;
                  var instance = workInProgress2.stateNode;
                  if ((workInProgress2.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
                    workInProgress2.flags |= ShouldCapture;
                    var _lane = pickArbitraryLane(rootRenderLanes);
                    workInProgress2.lanes = mergeLanes(workInProgress2.lanes, _lane);
                    var _update2 = createClassErrorUpdate(workInProgress2, errorInfo, _lane);
                    enqueueCapturedUpdate(workInProgress2, _update2);
                    return;
                  }
                  break;
              }
              workInProgress2 = workInProgress2.return;
            } while (workInProgress2 !== null);
          }
          function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
            var funcArgs = Array.prototype.slice.call(arguments, 3);
            try {
              func.apply(context, funcArgs);
            } catch (error2) {
              this.onError(error2);
            }
          }
          var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
          {
            if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
              var fakeNode = document.createElement("react");
              invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
                if (!(typeof document !== "undefined")) {
                  {
                    throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
                  }
                }
                var evt = document.createEvent("Event");
                var didCall = false;
                var didError = true;
                var windowEvent = window.event;
                var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
                function restoreAfterDispatch() {
                  fakeNode.removeEventListener(evtType, callCallback2, false);
                  if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
                    window.event = windowEvent;
                  }
                }
                var funcArgs = Array.prototype.slice.call(arguments, 3);
                function callCallback2() {
                  didCall = true;
                  restoreAfterDispatch();
                  func.apply(context, funcArgs);
                  didError = false;
                }
                var error2;
                var didSetError = false;
                var isCrossOriginError = false;
                function handleWindowError(event) {
                  error2 = event.error;
                  didSetError = true;
                  if (error2 === null && event.colno === 0 && event.lineno === 0) {
                    isCrossOriginError = true;
                  }
                  if (event.defaultPrevented) {
                    if (error2 != null && typeof error2 === "object") {
                      try {
                        error2._suppressLogging = true;
                      } catch (inner) {
                      }
                    }
                  }
                }
                var evtType = "react-" + (name ? name : "invokeguardedcallback");
                window.addEventListener("error", handleWindowError);
                fakeNode.addEventListener(evtType, callCallback2, false);
                evt.initEvent(evtType, false, false);
                fakeNode.dispatchEvent(evt);
                if (windowEventDescriptor) {
                  Object.defineProperty(window, "event", windowEventDescriptor);
                }
                if (didCall && didError) {
                  if (!didSetError) {
                    error2 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
                  } else if (isCrossOriginError) {
                    error2 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
                  }
                  this.onError(error2);
                }
                window.removeEventListener("error", handleWindowError);
                if (!didCall) {
                  restoreAfterDispatch();
                  return invokeGuardedCallbackProd.apply(this, arguments);
                }
              };
            }
          }
          var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
          var hasError = false;
          var caughtError = null;
          var reporter = {
            onError: function(error2) {
              hasError = true;
              caughtError = error2;
            }
          };
          function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
            hasError = false;
            caughtError = null;
            invokeGuardedCallbackImpl$1.apply(reporter, arguments);
          }
          function hasCaughtError() {
            return hasError;
          }
          function clearCaughtError() {
            if (hasError) {
              var error2 = caughtError;
              hasError = false;
              caughtError = null;
              return error2;
            } else {
              {
                {
                  throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
          }
          var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
          {
            didWarnAboutUndefinedSnapshotBeforeUpdate = /* @__PURE__ */ new Set();
          }
          var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
          var callComponentWillUnmountWithTimer = function(current2, instance) {
            instance.props = current2.memoizedProps;
            instance.state = current2.memoizedState;
            {
              instance.componentWillUnmount();
            }
          };
          function safelyCallComponentWillUnmount(current2, instance) {
            {
              invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current2, instance);
              if (hasCaughtError()) {
                var unmountError = clearCaughtError();
                captureCommitPhaseError(current2, unmountError);
              }
            }
          }
          function safelyDetachRef(current2) {
            var ref = current2.ref;
            if (ref !== null) {
              if (typeof ref === "function") {
                {
                  invokeGuardedCallback(null, ref, null, null);
                  if (hasCaughtError()) {
                    var refError = clearCaughtError();
                    captureCommitPhaseError(current2, refError);
                  }
                }
              } else {
                ref.current = null;
              }
            }
          }
          function safelyCallDestroy(current2, destroy) {
            {
              invokeGuardedCallback(null, destroy, null);
              if (hasCaughtError()) {
                var error2 = clearCaughtError();
                captureCommitPhaseError(current2, error2);
              }
            }
          }
          function commitBeforeMutationLifeCycles(current2, finishedWork) {
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent:
              case Block: {
                return;
              }
              case ClassComponent: {
                if (finishedWork.flags & Snapshot) {
                  if (current2 !== null) {
                    var prevProps = current2.memoizedProps;
                    var prevState = current2.memoizedState;
                    var instance = finishedWork.stateNode;
                    {
                      if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                        if (instance.props !== finishedWork.memoizedProps) {
                          error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                        if (instance.state !== finishedWork.memoizedState) {
                          error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                      }
                    }
                    var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                    {
                      var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                      if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
                        didWarnSet.add(finishedWork.type);
                        error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentName(finishedWork.type));
                      }
                    }
                    instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                  }
                }
                return;
              }
              case HostRoot: {
                if (supportsMutation) {
                  if (finishedWork.flags & Snapshot) {
                    var root = finishedWork.stateNode;
                    clearContainer(root.containerInfo);
                  }
                }
                return;
              }
              case HostComponent:
              case HostText:
              case HostPortal:
              case IncompleteClassComponent:
                return;
            }
            {
              {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function commitHookEffectListUnmount(tag, finishedWork) {
            var updateQueue = finishedWork.updateQueue;
            var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                if ((effect.tag & tag) === tag) {
                  var destroy = effect.destroy;
                  effect.destroy = void 0;
                  if (destroy !== void 0) {
                    destroy();
                  }
                }
                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }
          function commitHookEffectListMount(tag, finishedWork) {
            var updateQueue = finishedWork.updateQueue;
            var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                if ((effect.tag & tag) === tag) {
                  var create = effect.create;
                  effect.destroy = create();
                  {
                    var destroy = effect.destroy;
                    if (destroy !== void 0 && typeof destroy !== "function") {
                      var addendum = void 0;
                      if (destroy === null) {
                        addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                      } else if (typeof destroy.then === "function") {
                        addendum = "\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                      } else {
                        addendum = " You returned: " + destroy;
                      }
                      error("An effect function must not return anything besides a function, which is used for clean-up.%s", addendum);
                    }
                  }
                }
                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }
          function schedulePassiveEffects(finishedWork) {
            var updateQueue = finishedWork.updateQueue;
            var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                var _effect = effect, next = _effect.next, tag = _effect.tag;
                if ((tag & Passive$1) !== NoFlags$1 && (tag & HasEffect) !== NoFlags$1) {
                  enqueuePendingPassiveHookEffectUnmount(finishedWork, effect);
                  enqueuePendingPassiveHookEffectMount(finishedWork, effect);
                }
                effect = next;
              } while (effect !== firstEffect);
            }
          }
          function commitLifeCycles(finishedRoot, current2, finishedWork, committedLanes) {
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent:
              case Block: {
                {
                  commitHookEffectListMount(Layout | HasEffect, finishedWork);
                }
                schedulePassiveEffects(finishedWork);
                return;
              }
              case ClassComponent: {
                var instance = finishedWork.stateNode;
                if (finishedWork.flags & Update) {
                  if (current2 === null) {
                    {
                      if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                        if (instance.props !== finishedWork.memoizedProps) {
                          error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                        if (instance.state !== finishedWork.memoizedState) {
                          error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                      }
                    }
                    {
                      instance.componentDidMount();
                    }
                  } else {
                    var prevProps = finishedWork.elementType === finishedWork.type ? current2.memoizedProps : resolveDefaultProps(finishedWork.type, current2.memoizedProps);
                    var prevState = current2.memoizedState;
                    {
                      if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                        if (instance.props !== finishedWork.memoizedProps) {
                          error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                        if (instance.state !== finishedWork.memoizedState) {
                          error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                        }
                      }
                    }
                    {
                      instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                    }
                  }
                }
                var updateQueue = finishedWork.updateQueue;
                if (updateQueue !== null) {
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentName(finishedWork.type) || "instance");
                      }
                    }
                  }
                  commitUpdateQueue(finishedWork, updateQueue, instance);
                }
                return;
              }
              case HostRoot: {
                var _updateQueue = finishedWork.updateQueue;
                if (_updateQueue !== null) {
                  var _instance = null;
                  if (finishedWork.child !== null) {
                    switch (finishedWork.child.tag) {
                      case HostComponent:
                        _instance = getPublicInstance(finishedWork.child.stateNode);
                        break;
                      case ClassComponent:
                        _instance = finishedWork.child.stateNode;
                        break;
                    }
                  }
                  commitUpdateQueue(finishedWork, _updateQueue, _instance);
                }
                return;
              }
              case HostComponent: {
                var _instance2 = finishedWork.stateNode;
                if (current2 === null && finishedWork.flags & Update) {
                  var type = finishedWork.type;
                  var props = finishedWork.memoizedProps;
                  commitMount(_instance2, type, props, finishedWork);
                }
                return;
              }
              case HostText: {
                return;
              }
              case HostPortal: {
                return;
              }
              case Profiler: {
                {
                  var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
                  var effectDuration = finishedWork.stateNode.effectDuration;
                  var commitTime2 = getCommitTime();
                  if (typeof onRender === "function") {
                    {
                      onRender(finishedWork.memoizedProps.id, current2 === null ? "mount" : "update", finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime2, finishedRoot.memoizedInteractions);
                    }
                  }
                }
                return;
              }
              case SuspenseComponent: {
                commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
                return;
              }
              case SuspenseListComponent:
              case IncompleteClassComponent:
              case FundamentalComponent:
              case ScopeComponent:
              case OffscreenComponent:
              case LegacyHiddenComponent:
                return;
            }
            {
              {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function hideOrUnhideAllChildren(finishedWork, isHidden) {
            if (supportsMutation) {
              var node = finishedWork;
              while (true) {
                if (node.tag === HostComponent) {
                  var instance = node.stateNode;
                  if (isHidden) {
                    hideInstance(instance);
                  } else {
                    unhideInstance(node.stateNode, node.memoizedProps);
                  }
                } else if (node.tag === HostText) {
                  var _instance3 = node.stateNode;
                  if (isHidden) {
                    hideTextInstance(_instance3);
                  } else {
                    unhideTextInstance(_instance3, node.memoizedProps);
                  }
                } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork)
                  ;
                else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === finishedWork) {
                  return;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === finishedWork) {
                    return;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            }
          }
          function commitAttachRef(finishedWork) {
            var ref = finishedWork.ref;
            if (ref !== null) {
              var instance = finishedWork.stateNode;
              var instanceToUse;
              switch (finishedWork.tag) {
                case HostComponent:
                  instanceToUse = getPublicInstance(instance);
                  break;
                default:
                  instanceToUse = instance;
              }
              if (typeof ref === "function") {
                ref(instanceToUse);
              } else {
                {
                  if (!ref.hasOwnProperty("current")) {
                    error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentName(finishedWork.type));
                  }
                }
                ref.current = instanceToUse;
              }
            }
          }
          function commitDetachRef(current2) {
            var currentRef = current2.ref;
            if (currentRef !== null) {
              if (typeof currentRef === "function") {
                currentRef(null);
              } else {
                currentRef.current = null;
              }
            }
          }
          function commitUnmount(finishedRoot, current2, renderPriorityLevel) {
            onCommitUnmount(current2);
            switch (current2.tag) {
              case FunctionComponent:
              case ForwardRef:
              case MemoComponent:
              case SimpleMemoComponent:
              case Block: {
                var updateQueue = current2.updateQueue;
                if (updateQueue !== null) {
                  var lastEffect = updateQueue.lastEffect;
                  if (lastEffect !== null) {
                    var firstEffect = lastEffect.next;
                    var effect = firstEffect;
                    do {
                      var _effect2 = effect, destroy = _effect2.destroy, tag = _effect2.tag;
                      if (destroy !== void 0) {
                        if ((tag & Passive$1) !== NoFlags$1) {
                          enqueuePendingPassiveHookEffectUnmount(current2, effect);
                        } else {
                          {
                            safelyCallDestroy(current2, destroy);
                          }
                        }
                      }
                      effect = effect.next;
                    } while (effect !== firstEffect);
                  }
                }
                return;
              }
              case ClassComponent: {
                safelyDetachRef(current2);
                var instance = current2.stateNode;
                if (typeof instance.componentWillUnmount === "function") {
                  safelyCallComponentWillUnmount(current2, instance);
                }
                return;
              }
              case HostComponent: {
                safelyDetachRef(current2);
                return;
              }
              case HostPortal: {
                if (supportsMutation) {
                  unmountHostComponents(finishedRoot, current2);
                } else if (supportsPersistence) {
                  emptyPortalContainer(current2);
                }
                return;
              }
              case FundamentalComponent: {
                return;
              }
              case DehydratedFragment: {
                return;
              }
              case ScopeComponent: {
                return;
              }
            }
          }
          function commitNestedUnmounts(finishedRoot, root, renderPriorityLevel) {
            var node = root;
            while (true) {
              commitUnmount(finishedRoot, node);
              if (node.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
              // If we don't use mutation we drill down into portals here instead.
              (!supportsMutation || node.tag !== HostPortal)) {
                node.child.return = node;
                node = node.child;
                continue;
              }
              if (node === root) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === root) {
                  return;
                }
                node = node.return;
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
          function detachFiberMutation(fiber) {
            fiber.alternate = null;
            fiber.child = null;
            fiber.dependencies = null;
            fiber.firstEffect = null;
            fiber.lastEffect = null;
            fiber.memoizedProps = null;
            fiber.memoizedState = null;
            fiber.pendingProps = null;
            fiber.return = null;
            fiber.updateQueue = null;
            {
              fiber._debugOwner = null;
            }
          }
          function emptyPortalContainer(current2) {
            if (!supportsPersistence) {
              return;
            }
            var portal = current2.stateNode;
            var containerInfo = portal.containerInfo;
            var emptyChildSet = createContainerChildSet(containerInfo);
            replaceContainerChildren(containerInfo, emptyChildSet);
          }
          function commitContainer(finishedWork) {
            if (!supportsPersistence) {
              return;
            }
            switch (finishedWork.tag) {
              case ClassComponent:
              case HostComponent:
              case HostText:
              case FundamentalComponent: {
                return;
              }
              case HostRoot:
              case HostPortal: {
                var portalOrRoot = finishedWork.stateNode;
                var containerInfo = portalOrRoot.containerInfo, pendingChildren = portalOrRoot.pendingChildren;
                replaceContainerChildren(containerInfo, pendingChildren);
                return;
              }
            }
            {
              {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function getHostParentFiber(fiber) {
            var parent = fiber.return;
            while (parent !== null) {
              if (isHostParent(parent)) {
                return parent;
              }
              parent = parent.return;
            }
            {
              {
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function isHostParent(fiber) {
            return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
          }
          function getHostSibling(fiber) {
            var node = fiber;
            siblings:
              while (true) {
                while (node.sibling === null) {
                  if (node.return === null || isHostParent(node.return)) {
                    return null;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
                while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
                  if (node.flags & Placement) {
                    continue siblings;
                  }
                  if (node.child === null || node.tag === HostPortal) {
                    continue siblings;
                  } else {
                    node.child.return = node;
                    node = node.child;
                  }
                }
                if (!(node.flags & Placement)) {
                  return node.stateNode;
                }
              }
          }
          function commitPlacement(finishedWork) {
            if (!supportsMutation) {
              return;
            }
            var parentFiber = getHostParentFiber(finishedWork);
            var parent;
            var isContainer;
            var parentStateNode = parentFiber.stateNode;
            switch (parentFiber.tag) {
              case HostComponent:
                parent = parentStateNode;
                isContainer = false;
                break;
              case HostRoot:
                parent = parentStateNode.containerInfo;
                isContainer = true;
                break;
              case HostPortal:
                parent = parentStateNode.containerInfo;
                isContainer = true;
                break;
              case FundamentalComponent:
              default: {
                {
                  throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            if (parentFiber.flags & ContentReset) {
              resetTextContent(parent);
              parentFiber.flags &= ~ContentReset;
            }
            var before = getHostSibling(finishedWork);
            if (isContainer) {
              insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
            } else {
              insertOrAppendPlacementNode(finishedWork, before, parent);
            }
          }
          function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
            var tag = node.tag;
            var isHost = tag === HostComponent || tag === HostText;
            if (isHost || enableFundamentalAPI) {
              var stateNode = isHost ? node.stateNode : node.stateNode.instance;
              if (before) {
                insertInContainerBefore(parent, stateNode, before);
              } else {
                appendChildToContainer(parent, stateNode);
              }
            } else if (tag === HostPortal)
              ;
            else {
              var child = node.child;
              if (child !== null) {
                insertOrAppendPlacementNodeIntoContainer(child, before, parent);
                var sibling = child.sibling;
                while (sibling !== null) {
                  insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
                  sibling = sibling.sibling;
                }
              }
            }
          }
          function insertOrAppendPlacementNode(node, before, parent) {
            var tag = node.tag;
            var isHost = tag === HostComponent || tag === HostText;
            if (isHost || enableFundamentalAPI) {
              var stateNode = isHost ? node.stateNode : node.stateNode.instance;
              if (before) {
                insertBefore(parent, stateNode, before);
              } else {
                appendChild2(parent, stateNode);
              }
            } else if (tag === HostPortal)
              ;
            else {
              var child = node.child;
              if (child !== null) {
                insertOrAppendPlacementNode(child, before, parent);
                var sibling = child.sibling;
                while (sibling !== null) {
                  insertOrAppendPlacementNode(sibling, before, parent);
                  sibling = sibling.sibling;
                }
              }
            }
          }
          function unmountHostComponents(finishedRoot, current2, renderPriorityLevel) {
            var node = current2;
            var currentParentIsValid = false;
            var currentParent;
            var currentParentIsContainer;
            while (true) {
              if (!currentParentIsValid) {
                var parent = node.return;
                findParent:
                  while (true) {
                    if (!(parent !== null)) {
                      {
                        throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
                      }
                    }
                    var parentStateNode = parent.stateNode;
                    switch (parent.tag) {
                      case HostComponent:
                        currentParent = parentStateNode;
                        currentParentIsContainer = false;
                        break findParent;
                      case HostRoot:
                        currentParent = parentStateNode.containerInfo;
                        currentParentIsContainer = true;
                        break findParent;
                      case HostPortal:
                        currentParent = parentStateNode.containerInfo;
                        currentParentIsContainer = true;
                        break findParent;
                    }
                    parent = parent.return;
                  }
                currentParentIsValid = true;
              }
              if (node.tag === HostComponent || node.tag === HostText) {
                commitNestedUnmounts(finishedRoot, node);
                if (currentParentIsContainer) {
                  removeChildFromContainer(currentParent, node.stateNode);
                } else {
                  removeChild2(currentParent, node.stateNode);
                }
              } else if (node.tag === HostPortal) {
                if (node.child !== null) {
                  currentParent = node.stateNode.containerInfo;
                  currentParentIsContainer = true;
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
              } else {
                commitUnmount(finishedRoot, node);
                if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
              }
              if (node === current2) {
                return;
              }
              while (node.sibling === null) {
                if (node.return === null || node.return === current2) {
                  return;
                }
                node = node.return;
                if (node.tag === HostPortal) {
                  currentParentIsValid = false;
                }
              }
              node.sibling.return = node.return;
              node = node.sibling;
            }
          }
          function commitDeletion(finishedRoot, current2, renderPriorityLevel) {
            if (supportsMutation) {
              unmountHostComponents(finishedRoot, current2);
            } else {
              commitNestedUnmounts(finishedRoot, current2);
            }
            var alternate = current2.alternate;
            detachFiberMutation(current2);
            if (alternate !== null) {
              detachFiberMutation(alternate);
            }
          }
          function commitWork(current2, finishedWork) {
            if (!supportsMutation) {
              switch (finishedWork.tag) {
                case FunctionComponent:
                case ForwardRef:
                case MemoComponent:
                case SimpleMemoComponent:
                case Block: {
                  {
                    commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
                  }
                  return;
                }
                case Profiler: {
                  return;
                }
                case SuspenseComponent: {
                  commitSuspenseComponent(finishedWork);
                  attachSuspenseRetryListeners(finishedWork);
                  return;
                }
                case SuspenseListComponent: {
                  attachSuspenseRetryListeners(finishedWork);
                  return;
                }
                case HostRoot: {
                  if (supportsHydration) {
                    var root = finishedWork.stateNode;
                    if (root.hydrate) {
                      root.hydrate = false;
                      commitHydratedContainer(root.containerInfo);
                    }
                  }
                  break;
                }
                case OffscreenComponent:
                case LegacyHiddenComponent: {
                  return;
                }
              }
              commitContainer(finishedWork);
              return;
            }
            switch (finishedWork.tag) {
              case FunctionComponent:
              case ForwardRef:
              case MemoComponent:
              case SimpleMemoComponent:
              case Block: {
                {
                  commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
                }
                return;
              }
              case ClassComponent: {
                return;
              }
              case HostComponent: {
                var instance = finishedWork.stateNode;
                if (instance != null) {
                  var newProps = finishedWork.memoizedProps;
                  var oldProps = current2 !== null ? current2.memoizedProps : newProps;
                  var type = finishedWork.type;
                  var updatePayload = finishedWork.updateQueue;
                  finishedWork.updateQueue = null;
                  if (updatePayload !== null) {
                    commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
                  }
                }
                return;
              }
              case HostText: {
                if (!(finishedWork.stateNode !== null)) {
                  {
                    throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                  }
                }
                var textInstance = finishedWork.stateNode;
                var newText = finishedWork.memoizedProps;
                var oldText = current2 !== null ? current2.memoizedProps : newText;
                commitTextUpdate(textInstance, oldText, newText);
                return;
              }
              case HostRoot: {
                if (supportsHydration) {
                  var _root = finishedWork.stateNode;
                  if (_root.hydrate) {
                    _root.hydrate = false;
                    commitHydratedContainer(_root.containerInfo);
                  }
                }
                return;
              }
              case Profiler: {
                return;
              }
              case SuspenseComponent: {
                commitSuspenseComponent(finishedWork);
                attachSuspenseRetryListeners(finishedWork);
                return;
              }
              case SuspenseListComponent: {
                attachSuspenseRetryListeners(finishedWork);
                return;
              }
              case IncompleteClassComponent: {
                return;
              }
              case FundamentalComponent: {
                break;
              }
              case ScopeComponent: {
                break;
              }
              case OffscreenComponent:
              case LegacyHiddenComponent: {
                var newState = finishedWork.memoizedState;
                var isHidden = newState !== null;
                hideOrUnhideAllChildren(finishedWork, isHidden);
                return;
              }
            }
            {
              {
                throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
          }
          function commitSuspenseComponent(finishedWork) {
            var newState = finishedWork.memoizedState;
            if (newState !== null) {
              markCommitTimeOfFallback();
              if (supportsMutation) {
                var primaryChildParent = finishedWork.child;
                hideOrUnhideAllChildren(primaryChildParent, true);
              }
            }
          }
          function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
            if (!supportsHydration) {
              return;
            }
            var newState = finishedWork.memoizedState;
            if (newState === null) {
              var current2 = finishedWork.alternate;
              if (current2 !== null) {
                var prevState = current2.memoizedState;
                if (prevState !== null) {
                  var suspenseInstance = prevState.dehydrated;
                  if (suspenseInstance !== null) {
                    commitHydratedSuspenseInstance(suspenseInstance);
                  }
                }
              }
            }
          }
          function attachSuspenseRetryListeners(finishedWork) {
            var wakeables = finishedWork.updateQueue;
            if (wakeables !== null) {
              finishedWork.updateQueue = null;
              var retryCache = finishedWork.stateNode;
              if (retryCache === null) {
                retryCache = finishedWork.stateNode = new PossiblyWeakSet();
              }
              wakeables.forEach(function(wakeable) {
                var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
                if (!retryCache.has(wakeable)) {
                  {
                    if (wakeable.__reactDoNotTraceInteractions !== true) {
                      retry = tracing.unstable_wrap(retry);
                    }
                  }
                  retryCache.add(wakeable);
                  wakeable.then(retry, retry);
                }
              });
            }
          }
          function isSuspenseBoundaryBeingHidden(current2, finishedWork) {
            if (current2 !== null) {
              var oldState = current2.memoizedState;
              if (oldState === null || oldState.dehydrated !== null) {
                var newState = finishedWork.memoizedState;
                return newState !== null && newState.dehydrated === null;
              }
            }
            return false;
          }
          function commitResetTextContent(current2) {
            if (!supportsMutation) {
              return;
            }
            resetTextContent(current2.stateNode);
          }
          var COMPONENT_TYPE = 0;
          var HAS_PSEUDO_CLASS_TYPE = 1;
          var ROLE_TYPE = 2;
          var TEST_NAME_TYPE = 3;
          var TEXT_TYPE = 4;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor$1 = Symbol.for;
            COMPONENT_TYPE = symbolFor$1("selector.component");
            HAS_PSEUDO_CLASS_TYPE = symbolFor$1("selector.has_pseudo_class");
            ROLE_TYPE = symbolFor$1("selector.role");
            TEST_NAME_TYPE = symbolFor$1("selector.test_id");
            TEXT_TYPE = symbolFor$1("selector.text");
          }
          function createComponentSelector(component) {
            return {
              $$typeof: COMPONENT_TYPE,
              value: component
            };
          }
          function createHasPsuedoClassSelector(selectors) {
            return {
              $$typeof: HAS_PSEUDO_CLASS_TYPE,
              value: selectors
            };
          }
          function createRoleSelector(role) {
            return {
              $$typeof: ROLE_TYPE,
              value: role
            };
          }
          function createTextSelector(text) {
            return {
              $$typeof: TEXT_TYPE,
              value: text
            };
          }
          function createTestNameSelector(id) {
            return {
              $$typeof: TEST_NAME_TYPE,
              value: id
            };
          }
          function findFiberRootForHostRoot(hostRoot) {
            var maybeFiber = getInstanceFromNode(hostRoot);
            if (maybeFiber != null) {
              if (!(typeof maybeFiber.memoizedProps["data-testname"] === "string")) {
                {
                  throw Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
                }
              }
              return maybeFiber;
            } else {
              var fiberRoot = findFiberRoot(hostRoot);
              if (!(fiberRoot !== null)) {
                {
                  throw Error("Could not find React container within specified host subtree.");
                }
              }
              return fiberRoot.stateNode.current;
            }
          }
          function matchSelector(fiber, selector) {
            switch (selector.$$typeof) {
              case COMPONENT_TYPE:
                if (fiber.type === selector.value) {
                  return true;
                }
                break;
              case HAS_PSEUDO_CLASS_TYPE:
                return hasMatchingPaths(fiber, selector.value);
              case ROLE_TYPE:
                if (fiber.tag === HostComponent) {
                  var node = fiber.stateNode;
                  if (matchAccessibilityRole(node, selector.value)) {
                    return true;
                  }
                }
                break;
              case TEXT_TYPE:
                if (fiber.tag === HostComponent || fiber.tag === HostText) {
                  var textContent = getTextContent(fiber);
                  if (textContent !== null && textContent.indexOf(selector.value) >= 0) {
                    return true;
                  }
                }
                break;
              case TEST_NAME_TYPE:
                if (fiber.tag === HostComponent) {
                  var dataTestID = fiber.memoizedProps["data-testname"];
                  if (typeof dataTestID === "string" && dataTestID.toLowerCase() === selector.value.toLowerCase()) {
                    return true;
                  }
                }
                break;
              default: {
                {
                  throw Error("Invalid selector type " + selector + " specified.");
                }
              }
            }
            return false;
          }
          function selectorToString(selector) {
            switch (selector.$$typeof) {
              case COMPONENT_TYPE:
                var displayName = getComponentName(selector.value) || "Unknown";
                return "<" + displayName + ">";
              case HAS_PSEUDO_CLASS_TYPE:
                return ":has(" + (selectorToString(selector) || "") + ")";
              case ROLE_TYPE:
                return '[role="' + selector.value + '"]';
              case TEXT_TYPE:
                return '"' + selector.value + '"';
              case TEST_NAME_TYPE:
                return '[data-testname="' + selector.value + '"]';
              default: {
                {
                  throw Error("Invalid selector type " + selector + " specified.");
                }
              }
            }
          }
          function findPaths(root, selectors) {
            var matchingFibers = [];
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else {
                while (selector != null && matchSelector(fiber, selector)) {
                  selectorIndex++;
                  selector = selectors[selectorIndex];
                }
              }
              if (selectorIndex === selectors.length) {
                matchingFibers.push(fiber);
              } else {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            return matchingFibers;
          }
          function hasMatchingPaths(root, selectors) {
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else {
                while (selector != null && matchSelector(fiber, selector)) {
                  selectorIndex++;
                  selector = selectors[selectorIndex];
                }
              }
              if (selectorIndex === selectors.length) {
                return true;
              } else {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            return false;
          }
          function findAllNodes(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              {
                {
                  throw Error("Test selector API is not supported by this renderer.");
                }
              }
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var matchingFibers = findPaths(root, selectors);
            var instanceRoots = [];
            var stack = Array.from(matchingFibers);
            var index2 = 0;
            while (index2 < stack.length) {
              var node = stack[index2++];
              if (node.tag === HostComponent) {
                if (isHiddenSubtree(node)) {
                  continue;
                }
                instanceRoots.push(node.stateNode);
              } else {
                var child = node.child;
                while (child !== null) {
                  stack.push(child);
                  child = child.sibling;
                }
              }
            }
            return instanceRoots;
          }
          function getFindAllNodesFailureDescription(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              {
                {
                  throw Error("Test selector API is not supported by this renderer.");
                }
              }
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var maxSelectorIndex = 0;
            var matchedNames = [];
            var stack = [root, 0];
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              var selectorIndex = stack[index2++];
              var selector = selectors[selectorIndex];
              if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
                continue;
              } else if (matchSelector(fiber, selector)) {
                matchedNames.push(selectorToString(selector));
                selectorIndex++;
                if (selectorIndex > maxSelectorIndex) {
                  maxSelectorIndex = selectorIndex;
                }
              }
              if (selectorIndex < selectors.length) {
                var child = fiber.child;
                while (child !== null) {
                  stack.push(child, selectorIndex);
                  child = child.sibling;
                }
              }
            }
            if (maxSelectorIndex < selectors.length) {
              var unmatchedNames = [];
              for (var i = maxSelectorIndex; i < selectors.length; i++) {
                unmatchedNames.push(selectorToString(selectors[i]));
              }
              return "findAllNodes was able to match part of the selector:\n" + ("  " + matchedNames.join(" > ") + "\n\n") + "No matching component was found for:\n" + ("  " + unmatchedNames.join(" > "));
            }
            return null;
          }
          function findBoundingRects(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              {
                {
                  throw Error("Test selector API is not supported by this renderer.");
                }
              }
            }
            var instanceRoots = findAllNodes(hostRoot, selectors);
            var boundingRects = [];
            for (var i = 0; i < instanceRoots.length; i++) {
              boundingRects.push(getBoundingRect(instanceRoots[i]));
            }
            for (var _i = boundingRects.length - 1; _i > 0; _i--) {
              var targetRect = boundingRects[_i];
              var targetLeft = targetRect.x;
              var targetRight = targetLeft + targetRect.width;
              var targetTop = targetRect.y;
              var targetBottom = targetTop + targetRect.height;
              for (var j = _i - 1; j >= 0; j--) {
                if (_i !== j) {
                  var otherRect = boundingRects[j];
                  var otherLeft = otherRect.x;
                  var otherRight = otherLeft + otherRect.width;
                  var otherTop = otherRect.y;
                  var otherBottom = otherTop + otherRect.height;
                  if (targetLeft >= otherLeft && targetTop >= otherTop && targetRight <= otherRight && targetBottom <= otherBottom) {
                    boundingRects.splice(_i, 1);
                    break;
                  } else if (targetLeft === otherLeft && targetRect.width === otherRect.width && !(otherBottom < targetTop) && !(otherTop > targetBottom)) {
                    if (otherTop > targetTop) {
                      otherRect.height += otherTop - targetTop;
                      otherRect.y = targetTop;
                    }
                    if (otherBottom < targetBottom) {
                      otherRect.height = targetBottom - otherTop;
                    }
                    boundingRects.splice(_i, 1);
                    break;
                  } else if (targetTop === otherTop && targetRect.height === otherRect.height && !(otherRight < targetLeft) && !(otherLeft > targetRight)) {
                    if (otherLeft > targetLeft) {
                      otherRect.width += otherLeft - targetLeft;
                      otherRect.x = targetLeft;
                    }
                    if (otherRight < targetRight) {
                      otherRect.width = targetRight - otherLeft;
                    }
                    boundingRects.splice(_i, 1);
                    break;
                  }
                }
              }
            }
            return boundingRects;
          }
          function focusWithin(hostRoot, selectors) {
            if (!supportsTestSelectors) {
              {
                {
                  throw Error("Test selector API is not supported by this renderer.");
                }
              }
            }
            var root = findFiberRootForHostRoot(hostRoot);
            var matchingFibers = findPaths(root, selectors);
            var stack = Array.from(matchingFibers);
            var index2 = 0;
            while (index2 < stack.length) {
              var fiber = stack[index2++];
              if (isHiddenSubtree(fiber)) {
                continue;
              }
              if (fiber.tag === HostComponent) {
                var node = fiber.stateNode;
                if (setFocusIfFocusable(node)) {
                  return true;
                }
              }
              var child = fiber.child;
              while (child !== null) {
                stack.push(child);
                child = child.sibling;
              }
            }
            return false;
          }
          var commitHooks = [];
          function onCommitRoot$1() {
            if (supportsTestSelectors) {
              commitHooks.forEach(function(commitHook) {
                return commitHook();
              });
            }
          }
          function observeVisibleRects(hostRoot, selectors, callback, options) {
            if (!supportsTestSelectors) {
              {
                {
                  throw Error("Test selector API is not supported by this renderer.");
                }
              }
            }
            var instanceRoots = findAllNodes(hostRoot, selectors);
            var _setupIntersectionObs = setupIntersectionObserver(instanceRoots, callback, options), disconnect = _setupIntersectionObs.disconnect, observe = _setupIntersectionObs.observe, unobserve = _setupIntersectionObs.unobserve;
            var commitHook = function() {
              var nextInstanceRoots = findAllNodes(hostRoot, selectors);
              instanceRoots.forEach(function(target) {
                if (nextInstanceRoots.indexOf(target) < 0) {
                  unobserve(target);
                }
              });
              nextInstanceRoots.forEach(function(target) {
                if (instanceRoots.indexOf(target) < 0) {
                  observe(target);
                }
              });
            };
            commitHooks.push(commitHook);
            return {
              disconnect: function() {
                var index2 = commitHooks.indexOf(commitHook);
                if (index2 >= 0) {
                  commitHooks.splice(index2, 1);
                }
                disconnect();
              }
            };
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var ceil = Math.ceil;
          var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
          var NoContext = (
            /*             */
            0
          );
          var BatchedContext = (
            /*               */
            1
          );
          var EventContext = (
            /*                 */
            2
          );
          var DiscreteEventContext = (
            /*         */
            4
          );
          var LegacyUnbatchedContext = (
            /*       */
            8
          );
          var RenderContext2 = (
            /*                */
            16
          );
          var CommitContext = (
            /*                */
            32
          );
          var RetryAfterError = (
            /*       */
            64
          );
          var RootIncomplete = 0;
          var RootFatalErrored = 1;
          var RootErrored = 2;
          var RootSuspended = 3;
          var RootSuspendedWithDelay = 4;
          var RootCompleted = 5;
          var executionContext = NoContext;
          var workInProgressRoot = null;
          var workInProgress = null;
          var workInProgressRootRenderLanes = NoLanes;
          var subtreeRenderLanes = NoLanes;
          var subtreeRenderLanesCursor = createCursor(NoLanes);
          var workInProgressRootExitStatus = RootIncomplete;
          var workInProgressRootFatalError = null;
          var workInProgressRootIncludedLanes = NoLanes;
          var workInProgressRootSkippedLanes = NoLanes;
          var workInProgressRootUpdatedLanes = NoLanes;
          var workInProgressRootPingedLanes = NoLanes;
          var mostRecentlyUpdatedRoot = null;
          var globalMostRecentFallbackTime = 0;
          var FALLBACK_THROTTLE_MS = 500;
          var workInProgressRootRenderTargetTime = Infinity;
          var RENDER_TIMEOUT_MS = 500;
          function resetRenderTimer() {
            workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS;
          }
          function getRenderTargetTime() {
            return workInProgressRootRenderTargetTime;
          }
          var nextEffect = null;
          var hasUncaughtError = false;
          var firstUncaughtError = null;
          var legacyErrorBoundariesThatAlreadyFailed = null;
          var rootDoesHavePassiveEffects = false;
          var rootWithPendingPassiveEffects = null;
          var pendingPassiveEffectsRenderPriority = NoPriority$1;
          var pendingPassiveEffectsLanes = NoLanes;
          var pendingPassiveHookEffectsMount = [];
          var pendingPassiveHookEffectsUnmount = [];
          var rootsWithPendingDiscreteUpdates = null;
          var NESTED_UPDATE_LIMIT = 50;
          var nestedUpdateCount = 0;
          var rootWithNestedUpdates = null;
          var NESTED_PASSIVE_UPDATE_LIMIT = 50;
          var nestedPassiveUpdateCount = 0;
          var spawnedWorkDuringRender = null;
          var currentEventTime = NoTimestamp;
          var currentEventWipLanes = NoLanes;
          var currentEventPendingLanes = NoLanes;
          var isFlushingPassiveEffects = false;
          var focusedInstanceHandle = null;
          var shouldFireAfterActiveInstanceBlur = false;
          function getWorkInProgressRoot() {
            return workInProgressRoot;
          }
          function requestEventTime() {
            if ((executionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              return now$1();
            }
            if (currentEventTime !== NoTimestamp) {
              return currentEventTime;
            }
            currentEventTime = now$1();
            return currentEventTime;
          }
          function requestUpdateLane(fiber) {
            var mode = fiber.mode;
            if ((mode & BlockingMode) === NoMode) {
              return SyncLane;
            } else if ((mode & ConcurrentMode) === NoMode) {
              return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
            }
            if (currentEventWipLanes === NoLanes) {
              currentEventWipLanes = workInProgressRootIncludedLanes;
            }
            var isTransition = requestCurrentTransition() !== NoTransition;
            if (isTransition) {
              if (currentEventPendingLanes !== NoLanes) {
                currentEventPendingLanes = mostRecentlyUpdatedRoot !== null ? mostRecentlyUpdatedRoot.pendingLanes : NoLanes;
              }
              return findTransitionLane(currentEventWipLanes, currentEventPendingLanes);
            }
            var schedulerPriority = getCurrentPriorityLevel();
            var lane;
            if (
              // TODO: Temporary. We're removing the concept of discrete updates.
              (executionContext & DiscreteEventContext) !== NoContext && schedulerPriority === UserBlockingPriority$1
            ) {
              lane = findUpdateLane(InputDiscreteLanePriority, currentEventWipLanes);
            } else {
              var schedulerLanePriority = schedulerPriorityToLanePriority(schedulerPriority);
              lane = findUpdateLane(schedulerLanePriority, currentEventWipLanes);
            }
            return lane;
          }
          function requestRetryLane(fiber) {
            var mode = fiber.mode;
            if ((mode & BlockingMode) === NoMode) {
              return SyncLane;
            } else if ((mode & ConcurrentMode) === NoMode) {
              return getCurrentPriorityLevel() === ImmediatePriority$1 ? SyncLane : SyncBatchedLane;
            }
            if (currentEventWipLanes === NoLanes) {
              currentEventWipLanes = workInProgressRootIncludedLanes;
            }
            return findRetryLane(currentEventWipLanes);
          }
          function scheduleUpdateOnFiber(fiber, lane, eventTime) {
            checkForNestedUpdates();
            warnAboutRenderPhaseUpdatesInDEV(fiber);
            var root = markUpdateLaneFromFiberToRoot(fiber, lane);
            if (root === null) {
              warnAboutUpdateOnUnmountedFiberInDEV(fiber);
              return null;
            }
            markRootUpdated(root, lane, eventTime);
            if (root === workInProgressRoot) {
              {
                workInProgressRootUpdatedLanes = mergeLanes(workInProgressRootUpdatedLanes, lane);
              }
              if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
                markRootSuspended$1(root, workInProgressRootRenderLanes);
              }
            }
            var priorityLevel = getCurrentPriorityLevel();
            if (lane === SyncLane) {
              if (
                // Check if we're inside unbatchedUpdates
                (executionContext & LegacyUnbatchedContext) !== NoContext && // Check if we're not already rendering
                (executionContext & (RenderContext2 | CommitContext)) === NoContext
              ) {
                schedulePendingInteractions(root, lane);
                performSyncWorkOnRoot(root);
              } else {
                ensureRootIsScheduled(root, eventTime);
                schedulePendingInteractions(root, lane);
                if (executionContext === NoContext) {
                  resetRenderTimer();
                  flushSyncCallbackQueue();
                }
              }
            } else {
              if ((executionContext & DiscreteEventContext) !== NoContext && // Only updates at user-blocking priority or greater are considered
              // discrete, even inside a discrete event.
              (priorityLevel === UserBlockingPriority$1 || priorityLevel === ImmediatePriority$1)) {
                if (rootsWithPendingDiscreteUpdates === null) {
                  rootsWithPendingDiscreteUpdates = /* @__PURE__ */ new Set([root]);
                } else {
                  rootsWithPendingDiscreteUpdates.add(root);
                }
              }
              ensureRootIsScheduled(root, eventTime);
              schedulePendingInteractions(root, lane);
            }
            mostRecentlyUpdatedRoot = root;
          }
          function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
            sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
            var alternate = sourceFiber.alternate;
            if (alternate !== null) {
              alternate.lanes = mergeLanes(alternate.lanes, lane);
            }
            {
              if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
                warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
              }
            }
            var node = sourceFiber;
            var parent = sourceFiber.return;
            while (parent !== null) {
              parent.childLanes = mergeLanes(parent.childLanes, lane);
              alternate = parent.alternate;
              if (alternate !== null) {
                alternate.childLanes = mergeLanes(alternate.childLanes, lane);
              } else {
                {
                  if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
                    warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
                  }
                }
              }
              node = parent;
              parent = parent.return;
            }
            if (node.tag === HostRoot) {
              var root = node.stateNode;
              return root;
            } else {
              return null;
            }
          }
          function ensureRootIsScheduled(root, currentTime) {
            var existingCallbackNode = root.callbackNode;
            markStarvedLanesAsExpired(root, currentTime);
            var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
            var newCallbackPriority = returnNextLanesPriority();
            if (nextLanes === NoLanes) {
              if (existingCallbackNode !== null) {
                cancelCallback(existingCallbackNode);
                root.callbackNode = null;
                root.callbackPriority = NoLanePriority;
              }
              return;
            }
            if (existingCallbackNode !== null) {
              var existingCallbackPriority = root.callbackPriority;
              if (existingCallbackPriority === newCallbackPriority) {
                return;
              }
              cancelCallback(existingCallbackNode);
            }
            var newCallbackNode;
            if (newCallbackPriority === SyncLanePriority) {
              newCallbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
            } else if (newCallbackPriority === SyncBatchedLanePriority) {
              newCallbackNode = scheduleCallback(ImmediatePriority$1, performSyncWorkOnRoot.bind(null, root));
            } else {
              var schedulerPriorityLevel = lanePriorityToSchedulerPriority(newCallbackPriority);
              newCallbackNode = scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
            }
            root.callbackPriority = newCallbackPriority;
            root.callbackNode = newCallbackNode;
          }
          function performConcurrentWorkOnRoot(root) {
            currentEventTime = NoTimestamp;
            currentEventWipLanes = NoLanes;
            currentEventPendingLanes = NoLanes;
            if (!((executionContext & (RenderContext2 | CommitContext)) === NoContext)) {
              {
                throw Error("Should not already be working.");
              }
            }
            var originalCallbackNode = root.callbackNode;
            var didFlushPassiveEffects = flushPassiveEffects();
            if (didFlushPassiveEffects) {
              if (root.callbackNode !== originalCallbackNode) {
                return null;
              }
            }
            var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
            if (lanes === NoLanes) {
              return null;
            }
            var exitStatus = renderRootConcurrent(root, lanes);
            if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
              prepareFreshStack(root, NoLanes);
            } else if (exitStatus !== RootIncomplete) {
              if (exitStatus === RootErrored) {
                executionContext |= RetryAfterError;
                if (root.hydrate) {
                  root.hydrate = false;
                  clearContainer(root.containerInfo);
                }
                lanes = getLanesToRetrySynchronouslyOnError(root);
                if (lanes !== NoLanes) {
                  exitStatus = renderRootSync(root, lanes);
                }
              }
              if (exitStatus === RootFatalErrored) {
                var fatalError = workInProgressRootFatalError;
                prepareFreshStack(root, NoLanes);
                markRootSuspended$1(root, lanes);
                ensureRootIsScheduled(root, now$1());
                throw fatalError;
              }
              var finishedWork = root.current.alternate;
              root.finishedWork = finishedWork;
              root.finishedLanes = lanes;
              finishConcurrentRender(root, exitStatus, lanes);
            }
            ensureRootIsScheduled(root, now$1());
            if (root.callbackNode === originalCallbackNode) {
              return performConcurrentWorkOnRoot.bind(null, root);
            }
            return null;
          }
          function finishConcurrentRender(root, exitStatus, lanes) {
            switch (exitStatus) {
              case RootIncomplete:
              case RootFatalErrored: {
                {
                  {
                    throw Error("Root did not complete. This is a bug in React.");
                  }
                }
              }
              case RootErrored: {
                commitRoot(root);
                break;
              }
              case RootSuspended: {
                markRootSuspended$1(root, lanes);
                if (includesOnlyRetries(lanes) && // do not delay if we're inside an act() scope
                !shouldForceFlushFallbacksInDEV()) {
                  var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1();
                  if (msUntilTimeout > 10) {
                    var nextLanes = getNextLanes(root, NoLanes);
                    if (nextLanes !== NoLanes) {
                      break;
                    }
                    var suspendedLanes = root.suspendedLanes;
                    if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                      var eventTime = requestEventTime();
                      markRootPinged(root, suspendedLanes);
                      break;
                    }
                    root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), msUntilTimeout);
                    break;
                  }
                }
                commitRoot(root);
                break;
              }
              case RootSuspendedWithDelay: {
                markRootSuspended$1(root, lanes);
                if (includesOnlyTransitions(lanes)) {
                  break;
                }
                if (!shouldForceFlushFallbacksInDEV()) {
                  var mostRecentEventTime = getMostRecentEventTime(root, lanes);
                  var eventTimeMs = mostRecentEventTime;
                  var timeElapsedMs = now$1() - eventTimeMs;
                  var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
                  if (_msUntilTimeout > 10) {
                    root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout);
                    break;
                  }
                }
                commitRoot(root);
                break;
              }
              case RootCompleted: {
                commitRoot(root);
                break;
              }
              default: {
                {
                  {
                    throw Error("Unknown root exit status.");
                  }
                }
              }
            }
          }
          function markRootSuspended$1(root, suspendedLanes) {
            suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
            suspendedLanes = removeLanes(suspendedLanes, workInProgressRootUpdatedLanes);
            markRootSuspended(root, suspendedLanes);
          }
          function performSyncWorkOnRoot(root) {
            if (!((executionContext & (RenderContext2 | CommitContext)) === NoContext)) {
              {
                throw Error("Should not already be working.");
              }
            }
            flushPassiveEffects();
            var lanes;
            var exitStatus;
            if (root === workInProgressRoot && includesSomeLane(root.expiredLanes, workInProgressRootRenderLanes)) {
              lanes = workInProgressRootRenderLanes;
              exitStatus = renderRootSync(root, lanes);
              if (includesSomeLane(workInProgressRootIncludedLanes, workInProgressRootUpdatedLanes)) {
                lanes = getNextLanes(root, lanes);
                exitStatus = renderRootSync(root, lanes);
              }
            } else {
              lanes = getNextLanes(root, NoLanes);
              exitStatus = renderRootSync(root, lanes);
            }
            if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
              executionContext |= RetryAfterError;
              if (root.hydrate) {
                root.hydrate = false;
                clearContainer(root.containerInfo);
              }
              lanes = getLanesToRetrySynchronouslyOnError(root);
              if (lanes !== NoLanes) {
                exitStatus = renderRootSync(root, lanes);
              }
            }
            if (exitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              prepareFreshStack(root, NoLanes);
              markRootSuspended$1(root, lanes);
              ensureRootIsScheduled(root, now$1());
              throw fatalError;
            }
            var finishedWork = root.current.alternate;
            root.finishedWork = finishedWork;
            root.finishedLanes = lanes;
            commitRoot(root);
            ensureRootIsScheduled(root, now$1());
            return null;
          }
          function flushRoot(root, lanes) {
            markRootExpired(root, lanes);
            ensureRootIsScheduled(root, now$1());
            if ((executionContext & (RenderContext2 | CommitContext)) === NoContext) {
              resetRenderTimer();
              flushSyncCallbackQueue();
            }
          }
          function flushDiscreteUpdates() {
            if ((executionContext & (BatchedContext | RenderContext2 | CommitContext)) !== NoContext) {
              {
                if ((executionContext & RenderContext2) !== NoContext) {
                  error("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
                }
              }
              return;
            }
            flushPendingDiscreteUpdates();
            flushPassiveEffects();
          }
          function deferredUpdates(fn) {
            {
              return runWithPriority(NormalPriority$1, fn);
            }
          }
          function flushPendingDiscreteUpdates() {
            if (rootsWithPendingDiscreteUpdates !== null) {
              var roots = rootsWithPendingDiscreteUpdates;
              rootsWithPendingDiscreteUpdates = null;
              roots.forEach(function(root) {
                markDiscreteUpdatesExpired(root);
                ensureRootIsScheduled(root, now$1());
              });
            }
            flushSyncCallbackQueue();
          }
          function batchedUpdates(fn, a) {
            var prevExecutionContext = executionContext;
            executionContext |= BatchedContext;
            try {
              return fn(a);
            } finally {
              executionContext = prevExecutionContext;
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
              }
            }
          }
          function batchedEventUpdates(fn, a) {
            var prevExecutionContext = executionContext;
            executionContext |= EventContext;
            try {
              return fn(a);
            } finally {
              executionContext = prevExecutionContext;
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
              }
            }
          }
          function discreteUpdates(fn, a, b, c, d) {
            var prevExecutionContext = executionContext;
            executionContext |= DiscreteEventContext;
            {
              try {
                return runWithPriority(UserBlockingPriority$1, fn.bind(null, a, b, c, d));
              } finally {
                executionContext = prevExecutionContext;
                if (executionContext === NoContext) {
                  resetRenderTimer();
                  flushSyncCallbackQueue();
                }
              }
            }
          }
          function unbatchedUpdates(fn, a) {
            var prevExecutionContext = executionContext;
            executionContext &= ~BatchedContext;
            executionContext |= LegacyUnbatchedContext;
            try {
              return fn(a);
            } finally {
              executionContext = prevExecutionContext;
              if (executionContext === NoContext) {
                resetRenderTimer();
                flushSyncCallbackQueue();
              }
            }
          }
          function flushSync(fn, a) {
            var prevExecutionContext = executionContext;
            if ((prevExecutionContext & (RenderContext2 | CommitContext)) !== NoContext) {
              {
                error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
              }
              return fn(a);
            }
            executionContext |= BatchedContext;
            {
              try {
                if (fn) {
                  return runWithPriority(ImmediatePriority$1, fn.bind(null, a));
                } else {
                  return void 0;
                }
              } finally {
                executionContext = prevExecutionContext;
                flushSyncCallbackQueue();
              }
            }
          }
          function flushControlled(fn) {
            var prevExecutionContext = executionContext;
            executionContext |= BatchedContext;
            {
              try {
                runWithPriority(ImmediatePriority$1, fn);
              } finally {
                executionContext = prevExecutionContext;
                if (executionContext === NoContext) {
                  resetRenderTimer();
                  flushSyncCallbackQueue();
                }
              }
            }
          }
          function pushRenderLanes(fiber, lanes) {
            push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
            subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
            workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
          }
          function popRenderLanes(fiber) {
            subtreeRenderLanes = subtreeRenderLanesCursor.current;
            pop(subtreeRenderLanesCursor, fiber);
          }
          function prepareFreshStack(root, lanes) {
            root.finishedWork = null;
            root.finishedLanes = NoLanes;
            var timeoutHandle = root.timeoutHandle;
            if (timeoutHandle !== noTimeout) {
              root.timeoutHandle = noTimeout;
              cancelTimeout(timeoutHandle);
            }
            if (workInProgress !== null) {
              var interruptedWork = workInProgress.return;
              while (interruptedWork !== null) {
                unwindInterruptedWork(interruptedWork);
                interruptedWork = interruptedWork.return;
              }
            }
            workInProgressRoot = root;
            workInProgress = createWorkInProgress(root.current, null);
            workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
            workInProgressRootExitStatus = RootIncomplete;
            workInProgressRootFatalError = null;
            workInProgressRootSkippedLanes = NoLanes;
            workInProgressRootUpdatedLanes = NoLanes;
            workInProgressRootPingedLanes = NoLanes;
            {
              spawnedWorkDuringRender = null;
            }
            {
              ReactStrictModeWarnings.discardPendingWarnings();
            }
          }
          function handleError(root, thrownValue) {
            do {
              var erroredWork = workInProgress;
              try {
                resetContextDependencies();
                resetHooksAfterThrow();
                resetCurrentFiber();
                ReactCurrentOwner$2.current = null;
                if (erroredWork === null || erroredWork.return === null) {
                  workInProgressRootExitStatus = RootFatalErrored;
                  workInProgressRootFatalError = thrownValue;
                  workInProgress = null;
                  return;
                }
                if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
                  stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
                }
                throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
                completeUnitOfWork(erroredWork);
              } catch (yetAnotherThrownValue) {
                thrownValue = yetAnotherThrownValue;
                if (workInProgress === erroredWork && erroredWork !== null) {
                  erroredWork = erroredWork.return;
                  workInProgress = erroredWork;
                } else {
                  erroredWork = workInProgress;
                }
                continue;
              }
              return;
            } while (true);
          }
          function pushDispatcher() {
            var prevDispatcher = ReactCurrentDispatcher$2.current;
            ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
            if (prevDispatcher === null) {
              return ContextOnlyDispatcher;
            } else {
              return prevDispatcher;
            }
          }
          function popDispatcher(prevDispatcher) {
            ReactCurrentDispatcher$2.current = prevDispatcher;
          }
          function pushInteractions(root) {
            {
              var prevInteractions = tracing.__interactionsRef.current;
              tracing.__interactionsRef.current = root.memoizedInteractions;
              return prevInteractions;
            }
          }
          function popInteractions(prevInteractions) {
            {
              tracing.__interactionsRef.current = prevInteractions;
            }
          }
          function markCommitTimeOfFallback() {
            globalMostRecentFallbackTime = now$1();
          }
          function markSkippedUpdateLanes(lane) {
            workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
          }
          function renderDidSuspend() {
            if (workInProgressRootExitStatus === RootIncomplete) {
              workInProgressRootExitStatus = RootSuspended;
            }
          }
          function renderDidSuspendDelayIfPossible() {
            if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
              workInProgressRootExitStatus = RootSuspendedWithDelay;
            }
            if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootUpdatedLanes))) {
              markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
            }
          }
          function renderDidError() {
            if (workInProgressRootExitStatus !== RootCompleted) {
              workInProgressRootExitStatus = RootErrored;
            }
          }
          function renderHasNotSuspendedYet() {
            return workInProgressRootExitStatus === RootIncomplete;
          }
          function renderRootSync(root, lanes) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext2;
            var prevDispatcher = pushDispatcher();
            if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
              prepareFreshStack(root, lanes);
              startWorkOnPendingInteractions(root, lanes);
            }
            var prevInteractions = pushInteractions(root);
            do {
              try {
                workLoopSync();
                break;
              } catch (thrownValue) {
                handleError(root, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            {
              popInteractions(prevInteractions);
            }
            executionContext = prevExecutionContext;
            popDispatcher(prevDispatcher);
            if (workInProgress !== null) {
              {
                {
                  throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            workInProgressRoot = null;
            workInProgressRootRenderLanes = NoLanes;
            return workInProgressRootExitStatus;
          }
          function workLoopSync() {
            while (workInProgress !== null) {
              performUnitOfWork(workInProgress);
            }
          }
          function renderRootConcurrent(root, lanes) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext2;
            var prevDispatcher = pushDispatcher();
            if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
              resetRenderTimer();
              prepareFreshStack(root, lanes);
              startWorkOnPendingInteractions(root, lanes);
            }
            var prevInteractions = pushInteractions(root);
            do {
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root, thrownValue);
              }
            } while (true);
            resetContextDependencies();
            {
              popInteractions(prevInteractions);
            }
            popDispatcher(prevDispatcher);
            executionContext = prevExecutionContext;
            if (workInProgress !== null) {
              return RootIncomplete;
            } else {
              workInProgressRoot = null;
              workInProgressRootRenderLanes = NoLanes;
              return workInProgressRootExitStatus;
            }
          }
          function workLoopConcurrent() {
            while (workInProgress !== null && !shouldYield()) {
              performUnitOfWork(workInProgress);
            }
          }
          function performUnitOfWork(unitOfWork) {
            var current2 = unitOfWork.alternate;
            setCurrentFiber(unitOfWork);
            var next;
            if ((unitOfWork.mode & ProfileMode) !== NoMode) {
              startProfilerTimer(unitOfWork);
              next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
              stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
            } else {
              next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
            }
            resetCurrentFiber();
            unitOfWork.memoizedProps = unitOfWork.pendingProps;
            if (next === null) {
              completeUnitOfWork(unitOfWork);
            } else {
              workInProgress = next;
            }
            ReactCurrentOwner$2.current = null;
          }
          function completeUnitOfWork(unitOfWork) {
            var completedWork = unitOfWork;
            do {
              var current2 = completedWork.alternate;
              var returnFiber = completedWork.return;
              if ((completedWork.flags & Incomplete) === NoFlags) {
                setCurrentFiber(completedWork);
                var next = void 0;
                if ((completedWork.mode & ProfileMode) === NoMode) {
                  next = completeWork(current2, completedWork, subtreeRenderLanes);
                } else {
                  startProfilerTimer(completedWork);
                  next = completeWork(current2, completedWork, subtreeRenderLanes);
                  stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                }
                resetCurrentFiber();
                if (next !== null) {
                  workInProgress = next;
                  return;
                }
                resetChildLanes(completedWork);
                if (returnFiber !== null && // Do not append effects to parents if a sibling failed to complete
                (returnFiber.flags & Incomplete) === NoFlags) {
                  if (returnFiber.firstEffect === null) {
                    returnFiber.firstEffect = completedWork.firstEffect;
                  }
                  if (completedWork.lastEffect !== null) {
                    if (returnFiber.lastEffect !== null) {
                      returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
                    }
                    returnFiber.lastEffect = completedWork.lastEffect;
                  }
                  var flags = completedWork.flags;
                  if (flags > PerformedWork) {
                    if (returnFiber.lastEffect !== null) {
                      returnFiber.lastEffect.nextEffect = completedWork;
                    } else {
                      returnFiber.firstEffect = completedWork;
                    }
                    returnFiber.lastEffect = completedWork;
                  }
                }
              } else {
                var _next = unwindWork(completedWork);
                if (_next !== null) {
                  _next.flags &= HostEffectMask;
                  workInProgress = _next;
                  return;
                }
                if ((completedWork.mode & ProfileMode) !== NoMode) {
                  stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
                  var actualDuration = completedWork.actualDuration;
                  var child = completedWork.child;
                  while (child !== null) {
                    actualDuration += child.actualDuration;
                    child = child.sibling;
                  }
                  completedWork.actualDuration = actualDuration;
                }
                if (returnFiber !== null) {
                  returnFiber.firstEffect = returnFiber.lastEffect = null;
                  returnFiber.flags |= Incomplete;
                }
              }
              var siblingFiber = completedWork.sibling;
              if (siblingFiber !== null) {
                workInProgress = siblingFiber;
                return;
              }
              completedWork = returnFiber;
              workInProgress = completedWork;
            } while (completedWork !== null);
            if (workInProgressRootExitStatus === RootIncomplete) {
              workInProgressRootExitStatus = RootCompleted;
            }
          }
          function resetChildLanes(completedWork) {
            if (
              // TODO: Move this check out of the hot path by moving `resetChildLanes`
              // to switch statement in `completeWork`.
              (completedWork.tag === LegacyHiddenComponent || completedWork.tag === OffscreenComponent) && completedWork.memoizedState !== null && !includesSomeLane(subtreeRenderLanes, OffscreenLane) && (completedWork.mode & ConcurrentMode) !== NoLanes
            ) {
              return;
            }
            var newChildLanes = NoLanes;
            if ((completedWork.mode & ProfileMode) !== NoMode) {
              var actualDuration = completedWork.actualDuration;
              var treeBaseDuration = completedWork.selfBaseDuration;
              var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
              var child = completedWork.child;
              while (child !== null) {
                newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
                if (shouldBubbleActualDurations) {
                  actualDuration += child.actualDuration;
                }
                treeBaseDuration += child.treeBaseDuration;
                child = child.sibling;
              }
              var isTimedOutSuspense = completedWork.tag === SuspenseComponent && completedWork.memoizedState !== null;
              if (isTimedOutSuspense) {
                var primaryChildFragment = completedWork.child;
                if (primaryChildFragment !== null) {
                  treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                }
              }
              completedWork.actualDuration = actualDuration;
              completedWork.treeBaseDuration = treeBaseDuration;
            } else {
              var _child = completedWork.child;
              while (_child !== null) {
                newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
                _child = _child.sibling;
              }
            }
            completedWork.childLanes = newChildLanes;
          }
          function commitRoot(root) {
            var renderPriorityLevel = getCurrentPriorityLevel();
            runWithPriority(ImmediatePriority$1, commitRootImpl.bind(null, root, renderPriorityLevel));
            return null;
          }
          function commitRootImpl(root, renderPriorityLevel) {
            do {
              flushPassiveEffects();
            } while (rootWithPendingPassiveEffects !== null);
            flushRenderPhaseStrictModeWarningsInDEV();
            if (!((executionContext & (RenderContext2 | CommitContext)) === NoContext)) {
              {
                throw Error("Should not already be working.");
              }
            }
            var finishedWork = root.finishedWork;
            var lanes = root.finishedLanes;
            if (finishedWork === null) {
              return null;
            }
            root.finishedWork = null;
            root.finishedLanes = NoLanes;
            if (!(finishedWork !== root.current)) {
              {
                throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            root.callbackNode = null;
            var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
            markRootFinished(root, remainingLanes);
            if (rootsWithPendingDiscreteUpdates !== null) {
              if (!hasDiscreteLanes(remainingLanes) && rootsWithPendingDiscreteUpdates.has(root)) {
                rootsWithPendingDiscreteUpdates.delete(root);
              }
            }
            if (root === workInProgressRoot) {
              workInProgressRoot = null;
              workInProgress = null;
              workInProgressRootRenderLanes = NoLanes;
            }
            var firstEffect;
            if (finishedWork.flags > PerformedWork) {
              if (finishedWork.lastEffect !== null) {
                finishedWork.lastEffect.nextEffect = finishedWork;
                firstEffect = finishedWork.firstEffect;
              } else {
                firstEffect = finishedWork;
              }
            } else {
              firstEffect = finishedWork.firstEffect;
            }
            if (firstEffect !== null) {
              var prevExecutionContext = executionContext;
              executionContext |= CommitContext;
              var prevInteractions = pushInteractions(root);
              ReactCurrentOwner$2.current = null;
              focusedInstanceHandle = prepareForCommit(root.containerInfo);
              shouldFireAfterActiveInstanceBlur = false;
              nextEffect = firstEffect;
              do {
                {
                  invokeGuardedCallback(null, commitBeforeMutationEffects, null);
                  if (hasCaughtError()) {
                    if (!(nextEffect !== null)) {
                      {
                        throw Error("Should be working on an effect.");
                      }
                    }
                    var error2 = clearCaughtError();
                    captureCommitPhaseError(nextEffect, error2);
                    nextEffect = nextEffect.nextEffect;
                  }
                }
              } while (nextEffect !== null);
              focusedInstanceHandle = null;
              {
                recordCommitTime();
              }
              nextEffect = firstEffect;
              do {
                {
                  invokeGuardedCallback(null, commitMutationEffects, null, root, renderPriorityLevel);
                  if (hasCaughtError()) {
                    if (!(nextEffect !== null)) {
                      {
                        throw Error("Should be working on an effect.");
                      }
                    }
                    var _error = clearCaughtError();
                    captureCommitPhaseError(nextEffect, _error);
                    nextEffect = nextEffect.nextEffect;
                  }
                }
              } while (nextEffect !== null);
              if (shouldFireAfterActiveInstanceBlur) {
                afterActiveInstanceBlur();
              }
              resetAfterCommit(root.containerInfo);
              root.current = finishedWork;
              nextEffect = firstEffect;
              do {
                {
                  invokeGuardedCallback(null, commitLayoutEffects, null, root, lanes);
                  if (hasCaughtError()) {
                    if (!(nextEffect !== null)) {
                      {
                        throw Error("Should be working on an effect.");
                      }
                    }
                    var _error2 = clearCaughtError();
                    captureCommitPhaseError(nextEffect, _error2);
                    nextEffect = nextEffect.nextEffect;
                  }
                }
              } while (nextEffect !== null);
              nextEffect = null;
              requestPaint();
              {
                popInteractions(prevInteractions);
              }
              executionContext = prevExecutionContext;
            } else {
              root.current = finishedWork;
              {
                recordCommitTime();
              }
            }
            var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
            if (rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = false;
              rootWithPendingPassiveEffects = root;
              pendingPassiveEffectsLanes = lanes;
              pendingPassiveEffectsRenderPriority = renderPriorityLevel;
            } else {
              nextEffect = firstEffect;
              while (nextEffect !== null) {
                var nextNextEffect = nextEffect.nextEffect;
                nextEffect.nextEffect = null;
                if (nextEffect.flags & Deletion) {
                  detachFiberAfterEffects(nextEffect);
                }
                nextEffect = nextNextEffect;
              }
            }
            remainingLanes = root.pendingLanes;
            if (remainingLanes !== NoLanes) {
              {
                if (spawnedWorkDuringRender !== null) {
                  var expirationTimes = spawnedWorkDuringRender;
                  spawnedWorkDuringRender = null;
                  for (var i = 0; i < expirationTimes.length; i++) {
                    scheduleInteractions(root, expirationTimes[i], root.memoizedInteractions);
                  }
                }
                schedulePendingInteractions(root, remainingLanes);
              }
            } else {
              legacyErrorBoundariesThatAlreadyFailed = null;
            }
            {
              if (!rootDidHavePassiveEffects) {
                finishPendingInteractions(root, lanes);
              }
            }
            if (remainingLanes === SyncLane) {
              if (root === rootWithNestedUpdates) {
                nestedUpdateCount++;
              } else {
                nestedUpdateCount = 0;
                rootWithNestedUpdates = root;
              }
            } else {
              nestedUpdateCount = 0;
            }
            onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
            {
              onCommitRoot$1();
            }
            ensureRootIsScheduled(root, now$1());
            if (hasUncaughtError) {
              hasUncaughtError = false;
              var _error3 = firstUncaughtError;
              firstUncaughtError = null;
              throw _error3;
            }
            if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
              return null;
            }
            flushSyncCallbackQueue();
            return null;
          }
          function commitBeforeMutationEffects() {
            while (nextEffect !== null) {
              var current2 = nextEffect.alternate;
              if (!shouldFireAfterActiveInstanceBlur && focusedInstanceHandle !== null) {
                if ((nextEffect.flags & Deletion) !== NoFlags) {
                  if (doesFiberContain(nextEffect, focusedInstanceHandle)) {
                    shouldFireAfterActiveInstanceBlur = true;
                    beforeActiveInstanceBlur();
                  }
                } else {
                  if (nextEffect.tag === SuspenseComponent && isSuspenseBoundaryBeingHidden(current2, nextEffect) && doesFiberContain(nextEffect, focusedInstanceHandle)) {
                    shouldFireAfterActiveInstanceBlur = true;
                    beforeActiveInstanceBlur();
                  }
                }
              }
              var flags = nextEffect.flags;
              if ((flags & Snapshot) !== NoFlags) {
                setCurrentFiber(nextEffect);
                commitBeforeMutationLifeCycles(current2, nextEffect);
                resetCurrentFiber();
              }
              if ((flags & Passive) !== NoFlags) {
                if (!rootDoesHavePassiveEffects) {
                  rootDoesHavePassiveEffects = true;
                  scheduleCallback(NormalPriority$1, function() {
                    flushPassiveEffects();
                    return null;
                  });
                }
              }
              nextEffect = nextEffect.nextEffect;
            }
          }
          function commitMutationEffects(root, renderPriorityLevel) {
            while (nextEffect !== null) {
              setCurrentFiber(nextEffect);
              var flags = nextEffect.flags;
              if (flags & ContentReset) {
                commitResetTextContent(nextEffect);
              }
              if (flags & Ref) {
                var current2 = nextEffect.alternate;
                if (current2 !== null) {
                  commitDetachRef(current2);
                }
              }
              var primaryFlags = flags & (Placement | Update | Deletion | Hydrating);
              switch (primaryFlags) {
                case Placement: {
                  commitPlacement(nextEffect);
                  nextEffect.flags &= ~Placement;
                  break;
                }
                case PlacementAndUpdate: {
                  commitPlacement(nextEffect);
                  nextEffect.flags &= ~Placement;
                  var _current = nextEffect.alternate;
                  commitWork(_current, nextEffect);
                  break;
                }
                case Hydrating: {
                  nextEffect.flags &= ~Hydrating;
                  break;
                }
                case HydratingAndUpdate: {
                  nextEffect.flags &= ~Hydrating;
                  var _current2 = nextEffect.alternate;
                  commitWork(_current2, nextEffect);
                  break;
                }
                case Update: {
                  var _current3 = nextEffect.alternate;
                  commitWork(_current3, nextEffect);
                  break;
                }
                case Deletion: {
                  commitDeletion(root, nextEffect);
                  break;
                }
              }
              resetCurrentFiber();
              nextEffect = nextEffect.nextEffect;
            }
          }
          function commitLayoutEffects(root, committedLanes) {
            while (nextEffect !== null) {
              setCurrentFiber(nextEffect);
              var flags = nextEffect.flags;
              if (flags & (Update | Callback)) {
                var current2 = nextEffect.alternate;
                commitLifeCycles(root, current2, nextEffect);
              }
              {
                if (flags & Ref) {
                  commitAttachRef(nextEffect);
                }
              }
              resetCurrentFiber();
              nextEffect = nextEffect.nextEffect;
            }
          }
          function flushPassiveEffects() {
            if (pendingPassiveEffectsRenderPriority !== NoPriority$1) {
              var priorityLevel = pendingPassiveEffectsRenderPriority > NormalPriority$1 ? NormalPriority$1 : pendingPassiveEffectsRenderPriority;
              pendingPassiveEffectsRenderPriority = NoPriority$1;
              {
                return runWithPriority(priorityLevel, flushPassiveEffectsImpl);
              }
            }
            return false;
          }
          function enqueuePendingPassiveHookEffectMount(fiber, effect) {
            pendingPassiveHookEffectsMount.push(effect, fiber);
            if (!rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = true;
              scheduleCallback(NormalPriority$1, function() {
                flushPassiveEffects();
                return null;
              });
            }
          }
          function enqueuePendingPassiveHookEffectUnmount(fiber, effect) {
            pendingPassiveHookEffectsUnmount.push(effect, fiber);
            {
              fiber.flags |= PassiveUnmountPendingDev;
              var alternate = fiber.alternate;
              if (alternate !== null) {
                alternate.flags |= PassiveUnmountPendingDev;
              }
            }
            if (!rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = true;
              scheduleCallback(NormalPriority$1, function() {
                flushPassiveEffects();
                return null;
              });
            }
          }
          function invokePassiveEffectCreate(effect) {
            var create = effect.create;
            effect.destroy = create();
          }
          function flushPassiveEffectsImpl() {
            if (rootWithPendingPassiveEffects === null) {
              return false;
            }
            var root = rootWithPendingPassiveEffects;
            var lanes = pendingPassiveEffectsLanes;
            rootWithPendingPassiveEffects = null;
            pendingPassiveEffectsLanes = NoLanes;
            if (!((executionContext & (RenderContext2 | CommitContext)) === NoContext)) {
              {
                throw Error("Cannot flush passive effects while already rendering.");
              }
            }
            {
              isFlushingPassiveEffects = true;
            }
            var prevExecutionContext = executionContext;
            executionContext |= CommitContext;
            var prevInteractions = pushInteractions(root);
            var unmountEffects = pendingPassiveHookEffectsUnmount;
            pendingPassiveHookEffectsUnmount = [];
            for (var i = 0; i < unmountEffects.length; i += 2) {
              var _effect = unmountEffects[i];
              var fiber = unmountEffects[i + 1];
              var destroy = _effect.destroy;
              _effect.destroy = void 0;
              {
                fiber.flags &= ~PassiveUnmountPendingDev;
                var alternate = fiber.alternate;
                if (alternate !== null) {
                  alternate.flags &= ~PassiveUnmountPendingDev;
                }
              }
              if (typeof destroy === "function") {
                {
                  setCurrentFiber(fiber);
                  {
                    invokeGuardedCallback(null, destroy, null);
                  }
                  if (hasCaughtError()) {
                    if (!(fiber !== null)) {
                      {
                        throw Error("Should be working on an effect.");
                      }
                    }
                    var error2 = clearCaughtError();
                    captureCommitPhaseError(fiber, error2);
                  }
                  resetCurrentFiber();
                }
              }
            }
            var mountEffects = pendingPassiveHookEffectsMount;
            pendingPassiveHookEffectsMount = [];
            for (var _i = 0; _i < mountEffects.length; _i += 2) {
              var _effect2 = mountEffects[_i];
              var _fiber = mountEffects[_i + 1];
              {
                setCurrentFiber(_fiber);
                {
                  invokeGuardedCallback(null, invokePassiveEffectCreate, null, _effect2);
                }
                if (hasCaughtError()) {
                  if (!(_fiber !== null)) {
                    {
                      throw Error("Should be working on an effect.");
                    }
                  }
                  var _error4 = clearCaughtError();
                  captureCommitPhaseError(_fiber, _error4);
                }
                resetCurrentFiber();
              }
            }
            var effect = root.current.firstEffect;
            while (effect !== null) {
              var nextNextEffect = effect.nextEffect;
              effect.nextEffect = null;
              if (effect.flags & Deletion) {
                detachFiberAfterEffects(effect);
              }
              effect = nextNextEffect;
            }
            {
              popInteractions(prevInteractions);
              finishPendingInteractions(root, lanes);
            }
            {
              isFlushingPassiveEffects = false;
            }
            executionContext = prevExecutionContext;
            flushSyncCallbackQueue();
            nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
            return true;
          }
          function isAlreadyFailedLegacyErrorBoundary(instance) {
            return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
          }
          function markLegacyErrorBoundaryAsFailed(instance) {
            if (legacyErrorBoundariesThatAlreadyFailed === null) {
              legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([instance]);
            } else {
              legacyErrorBoundariesThatAlreadyFailed.add(instance);
            }
          }
          function prepareToThrowUncaughtError(error2) {
            if (!hasUncaughtError) {
              hasUncaughtError = true;
              firstUncaughtError = error2;
            }
          }
          var onUncaughtError = prepareToThrowUncaughtError;
          function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
            var errorInfo = createCapturedValue(error2, sourceFiber);
            var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
            enqueueUpdate(rootFiber, update);
            var eventTime = requestEventTime();
            var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);
            if (root !== null) {
              markRootUpdated(root, SyncLane, eventTime);
              ensureRootIsScheduled(root, eventTime);
              schedulePendingInteractions(root, SyncLane);
            }
          }
          function captureCommitPhaseError(sourceFiber, error2) {
            if (sourceFiber.tag === HostRoot) {
              captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error2);
              return;
            }
            var fiber = sourceFiber.return;
            while (fiber !== null) {
              if (fiber.tag === HostRoot) {
                captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error2);
                return;
              } else if (fiber.tag === ClassComponent) {
                var ctor = fiber.type;
                var instance = fiber.stateNode;
                if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                  var errorInfo = createCapturedValue(error2, sourceFiber);
                  var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
                  enqueueUpdate(fiber, update);
                  var eventTime = requestEventTime();
                  var root = markUpdateLaneFromFiberToRoot(fiber, SyncLane);
                  if (root !== null) {
                    markRootUpdated(root, SyncLane, eventTime);
                    ensureRootIsScheduled(root, eventTime);
                    schedulePendingInteractions(root, SyncLane);
                  } else {
                    if (typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
                      try {
                        instance.componentDidCatch(error2, errorInfo);
                      } catch (errorToIgnore) {
                      }
                    }
                  }
                  return;
                }
              }
              fiber = fiber.return;
            }
          }
          function pingSuspendedRoot(root, wakeable, pingedLanes) {
            var pingCache = root.pingCache;
            if (pingCache !== null) {
              pingCache.delete(wakeable);
            }
            var eventTime = requestEventTime();
            markRootPinged(root, pingedLanes);
            if (workInProgressRoot === root && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
              if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
                prepareFreshStack(root, NoLanes);
              } else {
                workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
              }
            }
            ensureRootIsScheduled(root, eventTime);
            schedulePendingInteractions(root, pingedLanes);
          }
          function retryTimedOutBoundary(boundaryFiber, retryLane) {
            if (retryLane === NoLane) {
              retryLane = requestRetryLane(boundaryFiber);
            }
            var eventTime = requestEventTime();
            var root = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
            if (root !== null) {
              markRootUpdated(root, retryLane, eventTime);
              ensureRootIsScheduled(root, eventTime);
              schedulePendingInteractions(root, retryLane);
            }
          }
          function resolveRetryWakeable(boundaryFiber, wakeable) {
            var retryLane = NoLane;
            var retryCache;
            {
              retryCache = boundaryFiber.stateNode;
            }
            if (retryCache !== null) {
              retryCache.delete(wakeable);
            }
            retryTimedOutBoundary(boundaryFiber, retryLane);
          }
          function jnd(timeElapsed) {
            return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
          }
          function checkForNestedUpdates() {
            if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
              nestedUpdateCount = 0;
              rootWithNestedUpdates = null;
              {
                {
                  throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
                }
              }
            }
            {
              if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
                nestedPassiveUpdateCount = 0;
                error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
              }
            }
          }
          function flushRenderPhaseStrictModeWarningsInDEV() {
            {
              ReactStrictModeWarnings.flushLegacyContextWarning();
              {
                ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
              }
            }
          }
          var didWarnStateUpdateForNotYetMountedComponent = null;
          function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
            {
              if ((executionContext & RenderContext2) !== NoContext) {
                return;
              }
              if (!(fiber.mode & (BlockingMode | ConcurrentMode))) {
                return;
              }
              var tag = fiber.tag;
              if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
                return;
              }
              var componentName = getComponentName(fiber.type) || "ReactComponent";
              if (didWarnStateUpdateForNotYetMountedComponent !== null) {
                if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
                  return;
                }
                didWarnStateUpdateForNotYetMountedComponent.add(componentName);
              } else {
                didWarnStateUpdateForNotYetMountedComponent = /* @__PURE__ */ new Set([componentName]);
              }
              var previousFiber = current;
              try {
                setCurrentFiber(fiber);
                error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
              } finally {
                if (previousFiber) {
                  setCurrentFiber(fiber);
                } else {
                  resetCurrentFiber();
                }
              }
            }
          }
          var didWarnStateUpdateForUnmountedComponent = null;
          function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
            {
              var tag = fiber.tag;
              if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent && tag !== Block) {
                return;
              }
              if ((fiber.flags & PassiveUnmountPendingDev) !== NoFlags) {
                return;
              }
              var componentName = getComponentName(fiber.type) || "ReactComponent";
              if (didWarnStateUpdateForUnmountedComponent !== null) {
                if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
                  return;
                }
                didWarnStateUpdateForUnmountedComponent.add(componentName);
              } else {
                didWarnStateUpdateForUnmountedComponent = /* @__PURE__ */ new Set([componentName]);
              }
              if (isFlushingPassiveEffects)
                ;
              else {
                var previousFiber = current;
                try {
                  setCurrentFiber(fiber);
                  error("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", tag === ClassComponent ? "the componentWillUnmount method" : "a useEffect cleanup function");
                } finally {
                  if (previousFiber) {
                    setCurrentFiber(fiber);
                  } else {
                    resetCurrentFiber();
                  }
                }
              }
            }
          }
          var beginWork$1;
          {
            var dummyFiber = null;
            beginWork$1 = function(current2, unitOfWork, lanes) {
              var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
              try {
                return beginWork(current2, unitOfWork, lanes);
              } catch (originalError) {
                if (originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
                  throw originalError;
                }
                resetContextDependencies();
                resetHooksAfterThrow();
                unwindInterruptedWork(unitOfWork);
                assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
                if (unitOfWork.mode & ProfileMode) {
                  startProfilerTimer(unitOfWork);
                }
                invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, lanes);
                if (hasCaughtError()) {
                  var replayError = clearCaughtError();
                  throw replayError;
                } else {
                  throw originalError;
                }
              }
            };
          }
          var didWarnAboutUpdateInRender = false;
          var didWarnAboutUpdateInRenderForAnotherComponent;
          {
            didWarnAboutUpdateInRenderForAnotherComponent = /* @__PURE__ */ new Set();
          }
          function warnAboutRenderPhaseUpdatesInDEV(fiber) {
            {
              if (isRendering && (executionContext & RenderContext2) !== NoContext && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
                switch (fiber.tag) {
                  case FunctionComponent:
                  case ForwardRef:
                  case SimpleMemoComponent: {
                    var renderingComponentName = workInProgress && getComponentName(workInProgress.type) || "Unknown";
                    var dedupeKey = renderingComponentName;
                    if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                      didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                      var setStateComponentName = getComponentName(fiber.type) || "Unknown";
                      error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
                    }
                    break;
                  }
                  case ClassComponent: {
                    if (!didWarnAboutUpdateInRender) {
                      error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
                      didWarnAboutUpdateInRender = true;
                    }
                    break;
                  }
                }
              }
            }
          }
          var IsThisRendererActing = {
            current: false
          };
          function warnIfNotScopedWithMatchingAct(fiber) {
            {
              if (warnsIfNotActing === true && IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
                var previousFiber = current;
                try {
                  setCurrentFiber(fiber);
                  error("It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);");
                } finally {
                  if (previousFiber) {
                    setCurrentFiber(fiber);
                  } else {
                    resetCurrentFiber();
                  }
                }
              }
            }
          }
          function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
            {
              if (warnsIfNotActing === true && (fiber.mode & StrictMode) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
                error("An update to %s ran an effect, but was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
              }
            }
          }
          function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
            {
              if (warnsIfNotActing === true && executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
                var previousFiber = current;
                try {
                  setCurrentFiber(fiber);
                  error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentName(fiber.type));
                } finally {
                  if (previousFiber) {
                    setCurrentFiber(fiber);
                  } else {
                    resetCurrentFiber();
                  }
                }
              }
            }
          }
          var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV;
          var didWarnAboutUnmockedScheduler = false;
          function warnIfUnmockedScheduler(fiber) {
            {
              if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === void 0) {
                if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
                  didWarnAboutUnmockedScheduler = true;
                  error(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`);
                }
              }
            }
          }
          function computeThreadID(root, lane) {
            return lane * 1e3 + root.interactionThreadID;
          }
          function markSpawnedWork(lane) {
            if (spawnedWorkDuringRender === null) {
              spawnedWorkDuringRender = [lane];
            } else {
              spawnedWorkDuringRender.push(lane);
            }
          }
          function scheduleInteractions(root, lane, interactions) {
            if (interactions.size > 0) {
              var pendingInteractionMap = root.pendingInteractionMap;
              var pendingInteractions = pendingInteractionMap.get(lane);
              if (pendingInteractions != null) {
                interactions.forEach(function(interaction) {
                  if (!pendingInteractions.has(interaction)) {
                    interaction.__count++;
                  }
                  pendingInteractions.add(interaction);
                });
              } else {
                pendingInteractionMap.set(lane, new Set(interactions));
                interactions.forEach(function(interaction) {
                  interaction.__count++;
                });
              }
              var subscriber = tracing.__subscriberRef.current;
              if (subscriber !== null) {
                var threadID = computeThreadID(root, lane);
                subscriber.onWorkScheduled(interactions, threadID);
              }
            }
          }
          function schedulePendingInteractions(root, lane) {
            scheduleInteractions(root, lane, tracing.__interactionsRef.current);
          }
          function startWorkOnPendingInteractions(root, lanes) {
            var interactions = /* @__PURE__ */ new Set();
            root.pendingInteractionMap.forEach(function(scheduledInteractions, scheduledLane) {
              if (includesSomeLane(lanes, scheduledLane)) {
                scheduledInteractions.forEach(function(interaction) {
                  return interactions.add(interaction);
                });
              }
            });
            root.memoizedInteractions = interactions;
            if (interactions.size > 0) {
              var subscriber = tracing.__subscriberRef.current;
              if (subscriber !== null) {
                var threadID = computeThreadID(root, lanes);
                try {
                  subscriber.onWorkStarted(interactions, threadID);
                } catch (error2) {
                  scheduleCallback(ImmediatePriority$1, function() {
                    throw error2;
                  });
                }
              }
            }
          }
          function finishPendingInteractions(root, committedLanes) {
            var remainingLanesAfterCommit = root.pendingLanes;
            var subscriber;
            try {
              subscriber = tracing.__subscriberRef.current;
              if (subscriber !== null && root.memoizedInteractions.size > 0) {
                var threadID = computeThreadID(root, committedLanes);
                subscriber.onWorkStopped(root.memoizedInteractions, threadID);
              }
            } catch (error2) {
              scheduleCallback(ImmediatePriority$1, function() {
                throw error2;
              });
            } finally {
              var pendingInteractionMap = root.pendingInteractionMap;
              pendingInteractionMap.forEach(function(scheduledInteractions, lane) {
                if (!includesSomeLane(remainingLanesAfterCommit, lane)) {
                  pendingInteractionMap.delete(lane);
                  scheduledInteractions.forEach(function(interaction) {
                    interaction.__count--;
                    if (subscriber !== null && interaction.__count === 0) {
                      try {
                        subscriber.onInteractionScheduledWorkCompleted(interaction);
                      } catch (error2) {
                        scheduleCallback(ImmediatePriority$1, function() {
                          throw error2;
                        });
                      }
                    }
                  });
                }
              });
            }
          }
          function shouldForceFlushFallbacksInDEV() {
            return actingUpdatesScopeDepth > 0;
          }
          var flushMockScheduler = Scheduler.unstable_flushAllWithoutAsserting;
          var isSchedulerMocked = typeof flushMockScheduler === "function";
          function flushActWork() {
            if (flushMockScheduler !== void 0) {
              try {
                return flushMockScheduler();
              } finally {
              }
            } else {
              try {
                var didFlushWork = false;
                while (flushPassiveEffects()) {
                  didFlushWork = true;
                }
                return didFlushWork;
              } finally {
              }
            }
          }
          function flushWorkAndMicroTasks(onDone) {
            try {
              flushActWork();
              enqueueTask(function() {
                if (flushActWork()) {
                  flushWorkAndMicroTasks(onDone);
                } else {
                  onDone();
                }
              });
            } catch (err) {
              onDone(err);
            }
          }
          var actingUpdatesScopeDepth = 0;
          function act(callback) {
            var previousActingUpdatesScopeDepth = actingUpdatesScopeDepth;
            actingUpdatesScopeDepth++;
            var previousIsSomeRendererActing = IsSomeRendererActing.current;
            var previousIsThisRendererActing = IsThisRendererActing.current;
            IsSomeRendererActing.current = true;
            IsThisRendererActing.current = true;
            function onDone() {
              actingUpdatesScopeDepth--;
              IsSomeRendererActing.current = previousIsSomeRendererActing;
              IsThisRendererActing.current = previousIsThisRendererActing;
              {
                if (actingUpdatesScopeDepth > previousActingUpdatesScopeDepth) {
                  error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                }
              }
            }
            var result;
            try {
              result = batchedUpdates(callback);
            } catch (error2) {
              onDone();
              throw error2;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var called = false;
              {
                if (typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (called === false) {
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return {
                then: function(resolve, reject) {
                  called = true;
                  result.then(function() {
                    if (actingUpdatesScopeDepth > 1 || isSchedulerMocked === true && previousIsSomeRendererActing === true) {
                      onDone();
                      resolve();
                      return;
                    }
                    flushWorkAndMicroTasks(function(err) {
                      onDone();
                      if (err) {
                        reject(err);
                      } else {
                        resolve();
                      }
                    });
                  }, function(err) {
                    onDone();
                    reject(err);
                  });
                }
              };
            } else {
              {
                if (result !== void 0) {
                  error("The callback passed to act(...) function must return undefined, or a Promise. You returned %s", result);
                }
              }
              try {
                if (actingUpdatesScopeDepth === 1 && (isSchedulerMocked === false || previousIsSomeRendererActing === false)) {
                  flushActWork();
                }
                onDone();
              } catch (err) {
                onDone();
                throw err;
              }
              return {
                then: function(resolve) {
                  {
                    error("Do not await the result of calling act(...) with sync logic, it is not a Promise.");
                  }
                  resolve();
                }
              };
            }
          }
          function detachFiberAfterEffects(fiber) {
            fiber.sibling = null;
            fiber.stateNode = null;
          }
          var resolveFamily = null;
          var failedBoundaries = null;
          var setRefreshHandler = function(handler) {
            {
              resolveFamily = handler;
            }
          };
          function resolveFunctionForHotReloading(type) {
            {
              if (resolveFamily === null) {
                return type;
              }
              var family = resolveFamily(type);
              if (family === void 0) {
                return type;
              }
              return family.current;
            }
          }
          function resolveClassForHotReloading(type) {
            return resolveFunctionForHotReloading(type);
          }
          function resolveForwardRefForHotReloading(type) {
            {
              if (resolveFamily === null) {
                return type;
              }
              var family = resolveFamily(type);
              if (family === void 0) {
                if (type !== null && type !== void 0 && typeof type.render === "function") {
                  var currentRender = resolveFunctionForHotReloading(type.render);
                  if (type.render !== currentRender) {
                    var syntheticType = {
                      $$typeof: REACT_FORWARD_REF_TYPE,
                      render: currentRender
                    };
                    if (type.displayName !== void 0) {
                      syntheticType.displayName = type.displayName;
                    }
                    return syntheticType;
                  }
                }
                return type;
              }
              return family.current;
            }
          }
          function isCompatibleFamilyForHotReloading(fiber, element) {
            {
              if (resolveFamily === null) {
                return false;
              }
              var prevType = fiber.elementType;
              var nextType = element.type;
              var needsCompareFamilies = false;
              var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
              switch (fiber.tag) {
                case ClassComponent: {
                  if (typeof nextType === "function") {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case FunctionComponent: {
                  if (typeof nextType === "function") {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case ForwardRef: {
                  if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                case MemoComponent:
                case SimpleMemoComponent: {
                  if ($$typeofNextType === REACT_MEMO_TYPE) {
                    needsCompareFamilies = true;
                  } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                    needsCompareFamilies = true;
                  }
                  break;
                }
                default:
                  return false;
              }
              if (needsCompareFamilies) {
                var prevFamily = resolveFamily(prevType);
                if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
                  return true;
                }
              }
              return false;
            }
          }
          function markFailedErrorBoundaryForHotReloading(fiber) {
            {
              if (resolveFamily === null) {
                return;
              }
              if (typeof WeakSet !== "function") {
                return;
              }
              if (failedBoundaries === null) {
                failedBoundaries = /* @__PURE__ */ new WeakSet();
              }
              failedBoundaries.add(fiber);
            }
          }
          var scheduleRefresh = function(root, update) {
            {
              if (resolveFamily === null) {
                return;
              }
              var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
              flushPassiveEffects();
              flushSync(function() {
                scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
              });
            }
          };
          var scheduleRoot = function(root, element) {
            {
              if (root.context !== emptyContextObject) {
                return;
              }
              flushPassiveEffects();
              flushSync(function() {
                updateContainer(element, root, null, null);
              });
            }
          };
          function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
            {
              var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
              var candidateType = null;
              switch (tag) {
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                  candidateType = type;
                  break;
                case ForwardRef:
                  candidateType = type.render;
                  break;
              }
              if (resolveFamily === null) {
                throw new Error("Expected resolveFamily to be set during hot reload.");
              }
              var needsRender = false;
              var needsRemount = false;
              if (candidateType !== null) {
                var family = resolveFamily(candidateType);
                if (family !== void 0) {
                  if (staleFamilies.has(family)) {
                    needsRemount = true;
                  } else if (updatedFamilies.has(family)) {
                    if (tag === ClassComponent) {
                      needsRemount = true;
                    } else {
                      needsRender = true;
                    }
                  }
                }
              }
              if (failedBoundaries !== null) {
                if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
                  needsRemount = true;
                }
              }
              if (needsRemount) {
                fiber._debugNeedsRemount = true;
              }
              if (needsRemount || needsRender) {
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
              }
              if (child !== null && !needsRemount) {
                scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
              }
              if (sibling !== null) {
                scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
              }
            }
          }
          var findHostInstancesForRefresh = function(root, families) {
            {
              var hostInstances = /* @__PURE__ */ new Set();
              var types = new Set(families.map(function(family) {
                return family.current;
              }));
              findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
              return hostInstances;
            }
          };
          function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
            {
              var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
              var candidateType = null;
              switch (tag) {
                case FunctionComponent:
                case SimpleMemoComponent:
                case ClassComponent:
                  candidateType = type;
                  break;
                case ForwardRef:
                  candidateType = type.render;
                  break;
              }
              var didMatch = false;
              if (candidateType !== null) {
                if (types.has(candidateType)) {
                  didMatch = true;
                }
              }
              if (didMatch) {
                findHostInstancesForFiberShallowly(fiber, hostInstances);
              } else {
                if (child !== null) {
                  findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
                }
              }
              if (sibling !== null) {
                findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
              }
            }
          }
          function findHostInstancesForFiberShallowly(fiber, hostInstances) {
            {
              var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
              if (foundHostInstances) {
                return;
              }
              var node = fiber;
              while (true) {
                switch (node.tag) {
                  case HostComponent:
                    hostInstances.add(node.stateNode);
                    return;
                  case HostPortal:
                    hostInstances.add(node.stateNode.containerInfo);
                    return;
                  case HostRoot:
                    hostInstances.add(node.stateNode.containerInfo);
                    return;
                }
                if (node.return === null) {
                  throw new Error("Expected to reach root first.");
                }
                node = node.return;
              }
            }
          }
          function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
            {
              var node = fiber;
              var foundHostInstances = false;
              while (true) {
                if (node.tag === HostComponent) {
                  foundHostInstances = true;
                  hostInstances.add(node.stateNode);
                } else if (node.child !== null) {
                  node.child.return = node;
                  node = node.child;
                  continue;
                }
                if (node === fiber) {
                  return foundHostInstances;
                }
                while (node.sibling === null) {
                  if (node.return === null || node.return === fiber) {
                    return foundHostInstances;
                  }
                  node = node.return;
                }
                node.sibling.return = node.return;
                node = node.sibling;
              }
            }
            return false;
          }
          var hasBadMapPolyfill;
          {
            hasBadMapPolyfill = false;
            try {
              var nonExtensibleObject = Object.preventExtensions({});
              /* @__PURE__ */ new Map([[nonExtensibleObject, null]]);
              /* @__PURE__ */ new Set([nonExtensibleObject]);
            } catch (e) {
              hasBadMapPolyfill = true;
            }
          }
          var debugCounter = 1;
          function FiberNode(tag, pendingProps, key, mode) {
            this.tag = tag;
            this.key = key;
            this.elementType = null;
            this.type = null;
            this.stateNode = null;
            this.return = null;
            this.child = null;
            this.sibling = null;
            this.index = 0;
            this.ref = null;
            this.pendingProps = pendingProps;
            this.memoizedProps = null;
            this.updateQueue = null;
            this.memoizedState = null;
            this.dependencies = null;
            this.mode = mode;
            this.flags = NoFlags;
            this.nextEffect = null;
            this.firstEffect = null;
            this.lastEffect = null;
            this.lanes = NoLanes;
            this.childLanes = NoLanes;
            this.alternate = null;
            {
              this.actualDuration = Number.NaN;
              this.actualStartTime = Number.NaN;
              this.selfBaseDuration = Number.NaN;
              this.treeBaseDuration = Number.NaN;
              this.actualDuration = 0;
              this.actualStartTime = -1;
              this.selfBaseDuration = 0;
              this.treeBaseDuration = 0;
            }
            {
              this._debugID = debugCounter++;
              this._debugSource = null;
              this._debugOwner = null;
              this._debugNeedsRemount = false;
              this._debugHookTypes = null;
              if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
                Object.preventExtensions(this);
              }
            }
          }
          var createFiber = function(tag, pendingProps, key, mode) {
            return new FiberNode(tag, pendingProps, key, mode);
          };
          function shouldConstruct$1(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function isSimpleFunctionComponent(type) {
            return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === void 0;
          }
          function resolveLazyComponentTag(Component) {
            if (typeof Component === "function") {
              return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent;
            } else if (Component !== void 0 && Component !== null) {
              var $$typeof = Component.$$typeof;
              if ($$typeof === REACT_FORWARD_REF_TYPE) {
                return ForwardRef;
              }
              if ($$typeof === REACT_MEMO_TYPE) {
                return MemoComponent;
              }
            }
            return IndeterminateComponent;
          }
          function createWorkInProgress(current2, pendingProps) {
            var workInProgress2 = current2.alternate;
            if (workInProgress2 === null) {
              workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
              workInProgress2.elementType = current2.elementType;
              workInProgress2.type = current2.type;
              workInProgress2.stateNode = current2.stateNode;
              {
                workInProgress2._debugID = current2._debugID;
                workInProgress2._debugSource = current2._debugSource;
                workInProgress2._debugOwner = current2._debugOwner;
                workInProgress2._debugHookTypes = current2._debugHookTypes;
              }
              workInProgress2.alternate = current2;
              current2.alternate = workInProgress2;
            } else {
              workInProgress2.pendingProps = pendingProps;
              workInProgress2.type = current2.type;
              workInProgress2.flags = NoFlags;
              workInProgress2.nextEffect = null;
              workInProgress2.firstEffect = null;
              workInProgress2.lastEffect = null;
              {
                workInProgress2.actualDuration = 0;
                workInProgress2.actualStartTime = -1;
              }
            }
            workInProgress2.childLanes = current2.childLanes;
            workInProgress2.lanes = current2.lanes;
            workInProgress2.child = current2.child;
            workInProgress2.memoizedProps = current2.memoizedProps;
            workInProgress2.memoizedState = current2.memoizedState;
            workInProgress2.updateQueue = current2.updateQueue;
            var currentDependencies = current2.dependencies;
            workInProgress2.dependencies = currentDependencies === null ? null : {
              lanes: currentDependencies.lanes,
              firstContext: currentDependencies.firstContext
            };
            workInProgress2.sibling = current2.sibling;
            workInProgress2.index = current2.index;
            workInProgress2.ref = current2.ref;
            {
              workInProgress2.selfBaseDuration = current2.selfBaseDuration;
              workInProgress2.treeBaseDuration = current2.treeBaseDuration;
            }
            {
              workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
              switch (workInProgress2.tag) {
                case IndeterminateComponent:
                case FunctionComponent:
                case SimpleMemoComponent:
                  workInProgress2.type = resolveFunctionForHotReloading(current2.type);
                  break;
                case ClassComponent:
                  workInProgress2.type = resolveClassForHotReloading(current2.type);
                  break;
                case ForwardRef:
                  workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
                  break;
              }
            }
            return workInProgress2;
          }
          function resetWorkInProgress(workInProgress2, renderLanes2) {
            workInProgress2.flags &= Placement;
            workInProgress2.nextEffect = null;
            workInProgress2.firstEffect = null;
            workInProgress2.lastEffect = null;
            var current2 = workInProgress2.alternate;
            if (current2 === null) {
              workInProgress2.childLanes = NoLanes;
              workInProgress2.lanes = renderLanes2;
              workInProgress2.child = null;
              workInProgress2.memoizedProps = null;
              workInProgress2.memoizedState = null;
              workInProgress2.updateQueue = null;
              workInProgress2.dependencies = null;
              workInProgress2.stateNode = null;
              {
                workInProgress2.selfBaseDuration = 0;
                workInProgress2.treeBaseDuration = 0;
              }
            } else {
              workInProgress2.childLanes = current2.childLanes;
              workInProgress2.lanes = current2.lanes;
              workInProgress2.child = current2.child;
              workInProgress2.memoizedProps = current2.memoizedProps;
              workInProgress2.memoizedState = current2.memoizedState;
              workInProgress2.updateQueue = current2.updateQueue;
              workInProgress2.type = current2.type;
              var currentDependencies = current2.dependencies;
              workInProgress2.dependencies = currentDependencies === null ? null : {
                lanes: currentDependencies.lanes,
                firstContext: currentDependencies.firstContext
              };
              {
                workInProgress2.selfBaseDuration = current2.selfBaseDuration;
                workInProgress2.treeBaseDuration = current2.treeBaseDuration;
              }
            }
            return workInProgress2;
          }
          function createHostRootFiber(tag) {
            var mode;
            if (tag === ConcurrentRoot) {
              mode = ConcurrentMode | BlockingMode | StrictMode;
            } else if (tag === BlockingRoot) {
              mode = BlockingMode | StrictMode;
            } else {
              mode = NoMode;
            }
            if (isDevToolsPresent) {
              mode |= ProfileMode;
            }
            return createFiber(HostRoot, null, null, mode);
          }
          function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
            var fiberTag = IndeterminateComponent;
            var resolvedType = type;
            if (typeof type === "function") {
              if (shouldConstruct$1(type)) {
                fiberTag = ClassComponent;
                {
                  resolvedType = resolveClassForHotReloading(resolvedType);
                }
              } else {
                {
                  resolvedType = resolveFunctionForHotReloading(resolvedType);
                }
              }
            } else if (typeof type === "string") {
              fiberTag = HostComponent;
            } else {
              getTag:
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                    return createFiberFromFragment(pendingProps.children, mode, lanes, key);
                  case REACT_DEBUG_TRACING_MODE_TYPE:
                    fiberTag = Mode;
                    mode |= DebugTracingMode;
                    break;
                  case REACT_STRICT_MODE_TYPE:
                    fiberTag = Mode;
                    mode |= StrictMode;
                    break;
                  case REACT_PROFILER_TYPE:
                    return createFiberFromProfiler(pendingProps, mode, lanes, key);
                  case REACT_SUSPENSE_TYPE:
                    return createFiberFromSuspense(pendingProps, mode, lanes, key);
                  case REACT_SUSPENSE_LIST_TYPE:
                    return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
                  case REACT_OFFSCREEN_TYPE:
                    return createFiberFromOffscreen(pendingProps, mode, lanes, key);
                  case REACT_LEGACY_HIDDEN_TYPE:
                    return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);
                  case REACT_SCOPE_TYPE:
                  default: {
                    if (typeof type === "object" && type !== null) {
                      switch (type.$$typeof) {
                        case REACT_PROVIDER_TYPE:
                          fiberTag = ContextProvider;
                          break getTag;
                        case REACT_CONTEXT_TYPE:
                          fiberTag = ContextConsumer;
                          break getTag;
                        case REACT_FORWARD_REF_TYPE:
                          fiberTag = ForwardRef;
                          {
                            resolvedType = resolveForwardRefForHotReloading(resolvedType);
                          }
                          break getTag;
                        case REACT_MEMO_TYPE:
                          fiberTag = MemoComponent;
                          break getTag;
                        case REACT_LAZY_TYPE:
                          fiberTag = LazyComponent;
                          resolvedType = null;
                          break getTag;
                        case REACT_BLOCK_TYPE:
                          fiberTag = Block;
                          break getTag;
                      }
                    }
                    var info = "";
                    {
                      if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                        info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                      }
                      var ownerName = owner ? getComponentName(owner.type) : null;
                      if (ownerName) {
                        info += "\n\nCheck the render method of `" + ownerName + "`.";
                      }
                    }
                    {
                      {
                        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (type == null ? type : typeof type) + "." + info);
                      }
                    }
                  }
                }
            }
            var fiber = createFiber(fiberTag, pendingProps, key, mode);
            fiber.elementType = type;
            fiber.type = resolvedType;
            fiber.lanes = lanes;
            {
              fiber._debugOwner = owner;
            }
            return fiber;
          }
          function createFiberFromElement(element, mode, lanes) {
            var owner = null;
            {
              owner = element._owner;
            }
            var type = element.type;
            var key = element.key;
            var pendingProps = element.props;
            var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
            {
              fiber._debugSource = element._source;
              fiber._debugOwner = element._owner;
            }
            return fiber;
          }
          function createFiberFromFragment(elements, mode, lanes, key) {
            var fiber = createFiber(Fragment, elements, key, mode);
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromProfiler(pendingProps, mode, lanes, key) {
            {
              if (typeof pendingProps.id !== "string") {
                error('Profiler must specify an "id" as a prop');
              }
            }
            var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
            fiber.elementType = REACT_PROFILER_TYPE;
            fiber.type = REACT_PROFILER_TYPE;
            fiber.lanes = lanes;
            {
              fiber.stateNode = {
                effectDuration: 0,
                passiveEffectDuration: 0
              };
            }
            return fiber;
          }
          function createFiberFromSuspense(pendingProps, mode, lanes, key) {
            var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
            fiber.type = REACT_SUSPENSE_TYPE;
            fiber.elementType = REACT_SUSPENSE_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
            var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
            {
              fiber.type = REACT_SUSPENSE_LIST_TYPE;
            }
            fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
            var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
            {
              fiber.type = REACT_OFFSCREEN_TYPE;
            }
            fiber.elementType = REACT_OFFSCREEN_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
            var fiber = createFiber(LegacyHiddenComponent, pendingProps, key, mode);
            {
              fiber.type = REACT_LEGACY_HIDDEN_TYPE;
            }
            fiber.elementType = REACT_LEGACY_HIDDEN_TYPE;
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromText(content, mode, lanes) {
            var fiber = createFiber(HostText, content, null, mode);
            fiber.lanes = lanes;
            return fiber;
          }
          function createFiberFromHostInstanceForDeletion() {
            var fiber = createFiber(HostComponent, null, null, NoMode);
            fiber.elementType = "DELETED";
            fiber.type = "DELETED";
            return fiber;
          }
          function createFiberFromPortal(portal, mode, lanes) {
            var pendingProps = portal.children !== null ? portal.children : [];
            var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
            fiber.lanes = lanes;
            fiber.stateNode = {
              containerInfo: portal.containerInfo,
              pendingChildren: null,
              // Used by persistent updates
              implementation: portal.implementation
            };
            return fiber;
          }
          function assignFiberPropertiesInDEV(target, source) {
            if (target === null) {
              target = createFiber(IndeterminateComponent, null, null, NoMode);
            }
            target.tag = source.tag;
            target.key = source.key;
            target.elementType = source.elementType;
            target.type = source.type;
            target.stateNode = source.stateNode;
            target.return = source.return;
            target.child = source.child;
            target.sibling = source.sibling;
            target.index = source.index;
            target.ref = source.ref;
            target.pendingProps = source.pendingProps;
            target.memoizedProps = source.memoizedProps;
            target.updateQueue = source.updateQueue;
            target.memoizedState = source.memoizedState;
            target.dependencies = source.dependencies;
            target.mode = source.mode;
            target.flags = source.flags;
            target.nextEffect = source.nextEffect;
            target.firstEffect = source.firstEffect;
            target.lastEffect = source.lastEffect;
            target.lanes = source.lanes;
            target.childLanes = source.childLanes;
            target.alternate = source.alternate;
            {
              target.actualDuration = source.actualDuration;
              target.actualStartTime = source.actualStartTime;
              target.selfBaseDuration = source.selfBaseDuration;
              target.treeBaseDuration = source.treeBaseDuration;
            }
            target._debugID = source._debugID;
            target._debugSource = source._debugSource;
            target._debugOwner = source._debugOwner;
            target._debugNeedsRemount = source._debugNeedsRemount;
            target._debugHookTypes = source._debugHookTypes;
            return target;
          }
          function FiberRootNode(containerInfo, tag, hydrate) {
            this.tag = tag;
            this.containerInfo = containerInfo;
            this.pendingChildren = null;
            this.current = null;
            this.pingCache = null;
            this.finishedWork = null;
            this.timeoutHandle = noTimeout;
            this.context = null;
            this.pendingContext = null;
            this.hydrate = hydrate;
            this.callbackNode = null;
            this.callbackPriority = NoLanePriority;
            this.eventTimes = createLaneMap(NoLanes);
            this.expirationTimes = createLaneMap(NoTimestamp);
            this.pendingLanes = NoLanes;
            this.suspendedLanes = NoLanes;
            this.pingedLanes = NoLanes;
            this.expiredLanes = NoLanes;
            this.mutableReadLanes = NoLanes;
            this.finishedLanes = NoLanes;
            this.entangledLanes = NoLanes;
            this.entanglements = createLaneMap(NoLanes);
            if (supportsHydration) {
              this.mutableSourceEagerHydrationData = null;
            }
            {
              this.interactionThreadID = tracing.unstable_getThreadID();
              this.memoizedInteractions = /* @__PURE__ */ new Set();
              this.pendingInteractionMap = /* @__PURE__ */ new Map();
            }
            {
              switch (tag) {
                case BlockingRoot:
                  this._debugRootType = "createBlockingRoot()";
                  break;
                case ConcurrentRoot:
                  this._debugRootType = "createRoot()";
                  break;
                case LegacyRoot:
                  this._debugRootType = "createLegacyRoot()";
                  break;
              }
            }
          }
          function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
            var root = new FiberRootNode(containerInfo, tag, hydrate);
            var uninitializedFiber = createHostRootFiber(tag);
            root.current = uninitializedFiber;
            uninitializedFiber.stateNode = root;
            initializeUpdateQueue(uninitializedFiber);
            return root;
          }
          function registerMutableSourceForHydration(root, mutableSource) {
            var getVersion = mutableSource._getVersion;
            var version = getVersion(mutableSource._source);
            if (root.mutableSourceEagerHydrationData == null) {
              root.mutableSourceEagerHydrationData = [mutableSource, version];
            } else {
              root.mutableSourceEagerHydrationData.push(mutableSource, version);
            }
          }
          function createPortal(children, containerInfo, implementation) {
            var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            return {
              // This tag allow us to uniquely identify this as a React Portal
              $$typeof: REACT_PORTAL_TYPE,
              key: key == null ? null : "" + key,
              children,
              containerInfo,
              implementation
            };
          }
          var didWarnAboutNestedUpdates;
          var didWarnAboutFindNodeInStrictMode;
          {
            didWarnAboutNestedUpdates = false;
            didWarnAboutFindNodeInStrictMode = {};
          }
          function getContextForSubtree(parentComponent) {
            if (!parentComponent) {
              return emptyContextObject;
            }
            var fiber = get(parentComponent);
            var parentContext = findCurrentUnmaskedContext(fiber);
            if (fiber.tag === ClassComponent) {
              var Component = fiber.type;
              if (isContextProvider(Component)) {
                return processChildContext(fiber, Component, parentContext);
              }
            }
            return parentContext;
          }
          function findHostInstance(component) {
            var fiber = get(component);
            if (fiber === void 0) {
              if (typeof component.render === "function") {
                {
                  {
                    throw Error("Unable to find node on an unmounted component.");
                  }
                }
              } else {
                {
                  {
                    throw Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component));
                  }
                }
              }
            }
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          }
          function findHostInstanceWithWarning(component, methodName) {
            {
              var fiber = get(component);
              if (fiber === void 0) {
                if (typeof component.render === "function") {
                  {
                    {
                      throw Error("Unable to find node on an unmounted component.");
                    }
                  }
                } else {
                  {
                    {
                      throw Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(component));
                    }
                  }
                }
              }
              var hostFiber = findCurrentHostFiber(fiber);
              if (hostFiber === null) {
                return null;
              }
              if (hostFiber.mode & StrictMode) {
                var componentName = getComponentName(fiber.type) || "Component";
                if (!didWarnAboutFindNodeInStrictMode[componentName]) {
                  didWarnAboutFindNodeInStrictMode[componentName] = true;
                  var previousFiber = current;
                  try {
                    setCurrentFiber(hostFiber);
                    if (fiber.mode & StrictMode) {
                      error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                    } else {
                      error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
                    }
                  } finally {
                    if (previousFiber) {
                      setCurrentFiber(previousFiber);
                    } else {
                      resetCurrentFiber();
                    }
                  }
                }
              }
              return hostFiber.stateNode;
            }
          }
          function createContainer(containerInfo, tag, hydrate, hydrationCallbacks) {
            return createFiberRoot(containerInfo, tag, hydrate);
          }
          function updateContainer(element, container, parentComponent, callback) {
            {
              onScheduleRoot(container, element);
            }
            var current$1 = container.current;
            var eventTime = requestEventTime();
            {
              if ("undefined" !== typeof jest) {
                warnIfUnmockedScheduler(current$1);
                warnIfNotScopedWithMatchingAct(current$1);
              }
            }
            var lane = requestUpdateLane(current$1);
            var context = getContextForSubtree(parentComponent);
            if (container.context === null) {
              container.context = context;
            } else {
              container.pendingContext = context;
            }
            {
              if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
                didWarnAboutNestedUpdates = true;
                error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentName(current.type) || "Unknown");
              }
            }
            var update = createUpdate(eventTime, lane);
            update.payload = {
              element
            };
            callback = callback === void 0 ? null : callback;
            if (callback !== null) {
              {
                if (typeof callback !== "function") {
                  error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback);
                }
              }
              update.callback = callback;
            }
            enqueueUpdate(current$1, update);
            scheduleUpdateOnFiber(current$1, lane, eventTime);
            return lane;
          }
          function getPublicRootInstance(container) {
            var containerFiber = container.current;
            if (!containerFiber.child) {
              return null;
            }
            switch (containerFiber.child.tag) {
              case HostComponent:
                return getPublicInstance(containerFiber.child.stateNode);
              default:
                return containerFiber.child.stateNode;
            }
          }
          function attemptSynchronousHydration(fiber) {
            switch (fiber.tag) {
              case HostRoot:
                var root = fiber.stateNode;
                if (root.hydrate) {
                  var lanes = getHighestPriorityPendingLanes(root);
                  flushRoot(root, lanes);
                }
                break;
              case SuspenseComponent:
                var eventTime = requestEventTime();
                flushSync(function() {
                  return scheduleUpdateOnFiber(fiber, SyncLane, eventTime);
                });
                var retryLane = InputDiscreteHydrationLane;
                markRetryLaneIfNotHydrated(fiber, retryLane);
                break;
            }
          }
          function markRetryLaneImpl(fiber, retryLane) {
            var suspenseState = fiber.memoizedState;
            if (suspenseState !== null && suspenseState.dehydrated !== null) {
              suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
            }
          }
          function markRetryLaneIfNotHydrated(fiber, retryLane) {
            markRetryLaneImpl(fiber, retryLane);
            var alternate = fiber.alternate;
            if (alternate) {
              markRetryLaneImpl(alternate, retryLane);
            }
          }
          function attemptUserBlockingHydration(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var eventTime = requestEventTime();
            var lane = InputDiscreteHydrationLane;
            scheduleUpdateOnFiber(fiber, lane, eventTime);
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function attemptContinuousHydration(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var eventTime = requestEventTime();
            var lane = SelectiveHydrationLane;
            scheduleUpdateOnFiber(fiber, lane, eventTime);
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function attemptHydrationAtCurrentPriority(fiber) {
            if (fiber.tag !== SuspenseComponent) {
              return;
            }
            var eventTime = requestEventTime();
            var lane = requestUpdateLane(fiber);
            scheduleUpdateOnFiber(fiber, lane, eventTime);
            markRetryLaneIfNotHydrated(fiber, lane);
          }
          function runWithPriority$1(priority, fn) {
            var previousPriority = getCurrentUpdateLanePriority();
            try {
              setCurrentUpdateLanePriority(priority);
              return fn();
            } finally {
              setCurrentUpdateLanePriority(previousPriority);
            }
          }
          function findHostInstanceWithNoPortals(fiber) {
            var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
            if (hostFiber === null) {
              return null;
            }
            if (hostFiber.tag === FundamentalComponent) {
              return hostFiber.stateNode.instance;
            }
            return hostFiber.stateNode;
          }
          var shouldSuspendImpl = function(fiber) {
            return false;
          };
          function shouldSuspend(fiber) {
            return shouldSuspendImpl(fiber);
          }
          var overrideHookState = null;
          var overrideHookStateDeletePath = null;
          var overrideHookStateRenamePath = null;
          var overrideProps = null;
          var overridePropsDeletePath = null;
          var overridePropsRenamePath = null;
          var scheduleUpdate = null;
          var setSuspenseHandler = null;
          {
            var copyWithDeleteImpl = function(obj, path, index2) {
              var key = path[index2];
              var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
              if (index2 + 1 === path.length) {
                if (Array.isArray(updated)) {
                  updated.splice(key, 1);
                } else {
                  delete updated[key];
                }
                return updated;
              }
              updated[key] = copyWithDeleteImpl(obj[key], path, index2 + 1);
              return updated;
            };
            var copyWithDelete = function(obj, path) {
              return copyWithDeleteImpl(obj, path, 0);
            };
            var copyWithRenameImpl = function(obj, oldPath, newPath, index2) {
              var oldKey = oldPath[index2];
              var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
              if (index2 + 1 === oldPath.length) {
                var newKey = newPath[index2];
                updated[newKey] = updated[oldKey];
                if (Array.isArray(updated)) {
                  updated.splice(oldKey, 1);
                } else {
                  delete updated[oldKey];
                }
              } else {
                updated[oldKey] = copyWithRenameImpl(
                  // $FlowFixMe number or string is fine here
                  obj[oldKey],
                  oldPath,
                  newPath,
                  index2 + 1
                );
              }
              return updated;
            };
            var copyWithRename = function(obj, oldPath, newPath) {
              if (oldPath.length !== newPath.length) {
                warn("copyWithRename() expects paths of the same length");
                return;
              } else {
                for (var i = 0; i < newPath.length - 1; i++) {
                  if (oldPath[i] !== newPath[i]) {
                    warn("copyWithRename() expects paths to be the same except for the deepest key");
                    return;
                  }
                }
              }
              return copyWithRenameImpl(obj, oldPath, newPath, 0);
            };
            var copyWithSetImpl = function(obj, path, index2, value) {
              if (index2 >= path.length) {
                return value;
              }
              var key = path[index2];
              var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
              updated[key] = copyWithSetImpl(obj[key], path, index2 + 1, value);
              return updated;
            };
            var copyWithSet = function(obj, path, value) {
              return copyWithSetImpl(obj, path, 0, value);
            };
            var findHook = function(fiber, id) {
              var currentHook2 = fiber.memoizedState;
              while (currentHook2 !== null && id > 0) {
                currentHook2 = currentHook2.next;
                id--;
              }
              return currentHook2;
            };
            overrideHookState = function(fiber, id, path, value) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithSet(hook.memoizedState, path, value);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
              }
            };
            overrideHookStateDeletePath = function(fiber, id, path) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithDelete(hook.memoizedState, path);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
              }
            };
            overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
              var hook = findHook(fiber, id);
              if (hook !== null) {
                var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
                hook.memoizedState = newState;
                hook.baseState = newState;
                fiber.memoizedProps = _assign({}, fiber.memoizedProps);
                scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
              }
            };
            overrideProps = function(fiber, path, value) {
              fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            };
            overridePropsDeletePath = function(fiber, path) {
              fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            };
            overridePropsRenamePath = function(fiber, oldPath, newPath) {
              fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
              if (fiber.alternate) {
                fiber.alternate.pendingProps = fiber.pendingProps;
              }
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            };
            scheduleUpdate = function(fiber) {
              scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
            };
            setSuspenseHandler = function(newShouldSuspendImpl) {
              shouldSuspendImpl = newShouldSuspendImpl;
            };
          }
          function findHostInstanceByFiber(fiber) {
            var hostFiber = findCurrentHostFiber(fiber);
            if (hostFiber === null) {
              return null;
            }
            return hostFiber.stateNode;
          }
          function emptyFindFiberByHostInstance(instance) {
            return null;
          }
          function getCurrentFiberForDevTools() {
            return current;
          }
          function injectIntoDevTools(devToolsConfig) {
            var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
            var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
            return injectInternals({
              bundleType: devToolsConfig.bundleType,
              version: devToolsConfig.version,
              rendererPackageName: devToolsConfig.rendererPackageName,
              rendererConfig: devToolsConfig.rendererConfig,
              overrideHookState,
              overrideHookStateDeletePath,
              overrideHookStateRenamePath,
              overrideProps,
              overridePropsDeletePath,
              overridePropsRenamePath,
              setSuspenseHandler,
              scheduleUpdate,
              currentDispatcherRef: ReactCurrentDispatcher2,
              findHostInstanceByFiber,
              findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
              // React Refresh
              findHostInstancesForRefresh,
              scheduleRefresh,
              scheduleRoot,
              setRefreshHandler,
              // Enables DevTools to append owner stacks to error messages in DEV mode.
              getCurrentFiber: getCurrentFiberForDevTools
            });
          }
          exports2.IsThisRendererActing = IsThisRendererActing;
          exports2.act = act;
          exports2.attemptContinuousHydration = attemptContinuousHydration;
          exports2.attemptHydrationAtCurrentPriority = attemptHydrationAtCurrentPriority;
          exports2.attemptSynchronousHydration = attemptSynchronousHydration;
          exports2.attemptUserBlockingHydration = attemptUserBlockingHydration;
          exports2.batchedEventUpdates = batchedEventUpdates;
          exports2.batchedUpdates = batchedUpdates;
          exports2.createComponentSelector = createComponentSelector;
          exports2.createContainer = createContainer;
          exports2.createHasPsuedoClassSelector = createHasPsuedoClassSelector;
          exports2.createPortal = createPortal;
          exports2.createRoleSelector = createRoleSelector;
          exports2.createTestNameSelector = createTestNameSelector;
          exports2.createTextSelector = createTextSelector;
          exports2.deferredUpdates = deferredUpdates;
          exports2.discreteUpdates = discreteUpdates;
          exports2.findAllNodes = findAllNodes;
          exports2.findBoundingRects = findBoundingRects;
          exports2.findHostInstance = findHostInstance;
          exports2.findHostInstanceWithNoPortals = findHostInstanceWithNoPortals;
          exports2.findHostInstanceWithWarning = findHostInstanceWithWarning;
          exports2.flushControlled = flushControlled;
          exports2.flushDiscreteUpdates = flushDiscreteUpdates;
          exports2.flushPassiveEffects = flushPassiveEffects;
          exports2.flushSync = flushSync;
          exports2.focusWithin = focusWithin;
          exports2.getCurrentUpdateLanePriority = getCurrentUpdateLanePriority;
          exports2.getFindAllNodesFailureDescription = getFindAllNodesFailureDescription;
          exports2.getPublicRootInstance = getPublicRootInstance;
          exports2.injectIntoDevTools = injectIntoDevTools;
          exports2.observeVisibleRects = observeVisibleRects;
          exports2.registerMutableSourceForHydration = registerMutableSourceForHydration;
          exports2.runWithPriority = runWithPriority$1;
          exports2.shouldSuspend = shouldSuspend;
          exports2.unbatchedUpdates = unbatchedUpdates;
          exports2.updateContainer = updateContainer;
          return exports2;
        };
      }
    }
  });

  // node_modules/.pnpm/react-reconciler@0.26.2_react@17.0.2/node_modules/react-reconciler/index.js
  var require_react_reconciler = __commonJS({
    "node_modules/.pnpm/react-reconciler@0.26.2_react@17.0.2/node_modules/react-reconciler/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_reconciler_development();
      }
    }
  });

  // node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React = require_react();
          var _assign = require_object_assign();
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has2 = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has2(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty2.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty2.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self);
              }
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement2(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentName(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (Array.isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement2(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement2(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement2(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (Array.isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (Array.isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              if (type === exports.Fragment) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx5 = jsxWithValidationDynamic;
          var jsxs2 = jsxWithValidationStatic;
          exports.jsx = jsx5;
          exports.jsxs = jsxs2;
        })();
      }
    }
  });

  // node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // node_modules/.pnpm/@remote-ui+core@2.1.17/node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }

  // node_modules/.pnpm/@remote-ui+core@2.1.17/node_modules/@remote-ui/core/build/esm/types.mjs
  var ACTION_MOUNT = 0;
  var ACTION_INSERT_CHILD = 1;
  var ACTION_REMOVE_CHILD = 2;
  var ACTION_UPDATE_TEXT = 3;
  var ACTION_UPDATE_PROPS = 4;
  var KIND_ROOT = 0;
  var KIND_COMPONENT = 1;
  var KIND_TEXT = 2;
  var KIND_FRAGMENT = 3;

  // node_modules/.pnpm/@remote-ui+core@2.1.17/node_modules/@remote-ui/core/build/esm/utilities.mjs
  function isRemoteFragment(object) {
    return object != null && object.kind === KIND_FRAGMENT;
  }

  // node_modules/.pnpm/@remote-ui+core@2.1.17/node_modules/@remote-ui/core/build/esm/root.mjs
  var FUNCTION_CURRENT_IMPLEMENTATION_KEY = "__current";
  var EMPTY_OBJECT = {};
  var EMPTY_ARRAY = [];
  function createRemoteRoot(channel, {
    strict = true,
    components
  } = {}) {
    let currentId = 0;
    const rootInternals = {
      strict,
      mounted: false,
      channel,
      children: EMPTY_ARRAY,
      nodes: /* @__PURE__ */ new WeakSet(),
      parents: /* @__PURE__ */ new WeakMap(),
      tops: /* @__PURE__ */ new WeakMap(),
      components: /* @__PURE__ */ new WeakMap(),
      fragments: /* @__PURE__ */ new WeakMap()
    };
    if (strict)
      Object.freeze(components);
    const remoteRoot = {
      kind: KIND_ROOT,
      options: strict ? Object.freeze({
        strict,
        components
      }) : {
        strict,
        components
      },
      get children() {
        return rootInternals.children;
      },
      createComponent(type, ...rest) {
        if (components && components.indexOf(type) < 0) {
          throw new Error(`Unsupported component: ${type}`);
        }
        const [initialProps, initialChildren, ...moreChildren] = rest;
        const normalizedInitialProps = initialProps !== null && initialProps !== void 0 ? initialProps : {};
        const normalizedInitialChildren = [];
        const normalizedInternalProps = {};
        if (initialProps) {
          for (const key of Object.keys(initialProps)) {
            if (key === "children")
              continue;
            normalizedInternalProps[key] = makeValueHotSwappable(serializeProp(initialProps[key]));
          }
        }
        if (initialChildren) {
          if (Array.isArray(initialChildren)) {
            for (const child of initialChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          } else {
            normalizedInitialChildren.push(normalizeChild(initialChildren, remoteRoot));
            for (const child of moreChildren) {
              normalizedInitialChildren.push(normalizeChild(child, remoteRoot));
            }
          }
        }
        const id = `${currentId++}`;
        const internals = {
          externalProps: strict ? Object.freeze(normalizedInitialProps) : normalizedInitialProps,
          internalProps: normalizedInternalProps,
          children: strict ? Object.freeze(normalizedInitialChildren) : normalizedInitialChildren
        };
        const component = __spreadValues({
          kind: KIND_COMPONENT,
          get children() {
            return internals.children;
          },
          get props() {
            return internals.externalProps;
          },
          get remoteProps() {
            return internals.internalProps;
          },
          updateProps: (newProps) => updateProps(component, newProps, internals, rootInternals),
          appendChild: (child) => appendChild(component, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(component, child, internals, rootInternals),
          insertChildBefore: (child, before) => insertChildBefore(component, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.components.set(component, internals);
        Object.defineProperty(component, "type", {
          value: type,
          configurable: false,
          writable: false,
          enumerable: true
        });
        makePartOfTree(component, rootInternals);
        makeRemote(component, id, remoteRoot);
        for (const child of internals.children) {
          moveNodeToContainer(component, child, rootInternals);
        }
        return component;
      },
      createText(content = "") {
        const id = `${currentId++}`;
        const internals = {
          text: content
        };
        const text = __spreadValues({
          kind: KIND_TEXT,
          get text() {
            return internals.text;
          },
          updateText: (newText) => updateText(text, newText, internals, rootInternals)
        }, EMPTY_OBJECT);
        makePartOfTree(text, rootInternals);
        makeRemote(text, id, remoteRoot);
        return text;
      },
      createFragment() {
        const id = `${currentId++}`;
        const internals = {
          children: strict ? Object.freeze([]) : []
        };
        const fragment = __spreadValues({
          kind: KIND_FRAGMENT,
          get children() {
            return internals.children;
          },
          appendChild: (child) => appendChild(fragment, normalizeChild(child, remoteRoot), internals, rootInternals),
          removeChild: (child) => removeChild(fragment, child, internals, rootInternals),
          insertChildBefore: (child, before) => insertChildBefore(fragment, normalizeChild(child, remoteRoot), before, internals, rootInternals)
        }, EMPTY_OBJECT);
        rootInternals.fragments.set(fragment, internals);
        makePartOfTree(fragment, rootInternals);
        makeRemote(fragment, id, remoteRoot);
        return fragment;
      },
      appendChild: (child) => appendChild(remoteRoot, normalizeChild(child, remoteRoot), rootInternals, rootInternals),
      removeChild: (child) => removeChild(remoteRoot, child, rootInternals, rootInternals),
      insertChildBefore: (child, before) => insertChildBefore(remoteRoot, normalizeChild(child, remoteRoot), before, rootInternals, rootInternals),
      mount() {
        if (rootInternals.mounted)
          return Promise.resolve();
        rootInternals.mounted = true;
        return Promise.resolve(channel(ACTION_MOUNT, rootInternals.children.map(serializeChild)));
      }
    };
    return remoteRoot;
  }
  function connected(element, {
    tops
  }) {
    var _tops$get;
    return ((_tops$get = tops.get(element)) === null || _tops$get === void 0 ? void 0 : _tops$get.kind) === KIND_ROOT;
  }
  function allDescendants(element, withEach) {
    const recurse = (element2) => {
      if ("children" in element2) {
        for (const child of element2.children) {
          withEach(child);
          recurse(child);
        }
      }
    };
    recurse(element);
  }
  function perform(element, rootInternals, {
    remote,
    local
  }) {
    const {
      mounted,
      channel
    } = rootInternals;
    if (mounted && (element.kind === KIND_ROOT || connected(element, rootInternals))) {
      remote(channel);
    }
    local();
  }
  function updateText(text, newText, internals, rootInternals) {
    return perform(text, rootInternals, {
      remote: (channel) => channel(ACTION_UPDATE_TEXT, text.id, newText),
      local: () => {
        internals.text = newText;
      }
    });
  }
  var IGNORE = Symbol("ignore");
  function updateProps(component, newProps, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    const {
      internalProps: currentProps,
      externalProps: currentExternalProps
    } = internals;
    const normalizedNewProps = {};
    const hotSwapFunctions = [];
    let hasRemoteChange = false;
    for (const key of Object.keys(newProps)) {
      if (key === "children")
        continue;
      const currentExternalValue = currentExternalProps[key];
      const newExternalValue = newProps[key];
      const currentValue = currentProps[key];
      const newValue = serializeProp(newExternalValue);
      if (currentValue === newValue && (newValue == null || typeof newValue !== "object")) {
        continue;
      }
      const [value, hotSwaps] = tryHotSwappingValues(currentValue, newValue);
      if (hotSwaps) {
        hotSwapFunctions.push(...hotSwaps);
      }
      if (value === IGNORE)
        continue;
      hasRemoteChange = true;
      normalizedNewProps[key] = value;
      if (isRemoteFragment(currentExternalValue)) {
        removeNodeFromContainer(currentExternalValue, rootInternals);
      }
      if (isRemoteFragment(newExternalValue)) {
        moveNodeToContainer(component, newExternalValue, rootInternals);
      }
    }
    return perform(component, rootInternals, {
      remote: (channel) => {
        if (hasRemoteChange) {
          channel(ACTION_UPDATE_PROPS, component.id, normalizedNewProps);
        }
      },
      local: () => {
        const mergedExternalProps = __spreadValues(__spreadValues({}, currentExternalProps), newProps);
        internals.externalProps = strict ? Object.freeze(mergedExternalProps) : mergedExternalProps;
        internals.internalProps = __spreadValues(__spreadValues({}, internals.internalProps), normalizedNewProps);
        for (const [hotSwappable, newValue] of hotSwapFunctions) {
          hotSwappable[FUNCTION_CURRENT_IMPLEMENTATION_KEY] = newValue;
        }
      }
    });
  }
  function tryHotSwappingValues(currentValue, newValue) {
    if (typeof currentValue === "function" && FUNCTION_CURRENT_IMPLEMENTATION_KEY in currentValue) {
      return [typeof newValue === "function" ? IGNORE : makeValueHotSwappable(newValue), [[currentValue, newValue]]];
    }
    if (Array.isArray(currentValue)) {
      return tryHotSwappingArrayValues(currentValue, newValue);
    }
    if (typeof currentValue === "object" && currentValue != null && !isRemoteFragment(currentValue)) {
      return tryHotSwappingObjectValues(currentValue, newValue);
    }
    return [currentValue === newValue ? IGNORE : newValue];
  }
  function makeValueHotSwappable(value) {
    if (isRemoteFragment(value)) {
      return value;
    }
    if (typeof value === "function") {
      const wrappedFunction = (...args) => {
        return wrappedFunction[FUNCTION_CURRENT_IMPLEMENTATION_KEY](...args);
      };
      Object.defineProperty(wrappedFunction, FUNCTION_CURRENT_IMPLEMENTATION_KEY, {
        enumerable: false,
        configurable: false,
        writable: true,
        value
      });
      return wrappedFunction;
    } else if (Array.isArray(value)) {
      return value.map(makeValueHotSwappable);
    } else if (typeof value === "object" && value != null) {
      return Object.keys(value).reduce((newValue, key) => {
        newValue[key] = makeValueHotSwappable(value[key]);
        return newValue;
      }, {});
    }
    return value;
  }
  function collectNestedHotSwappableValues(value) {
    if (typeof value === "function") {
      if (FUNCTION_CURRENT_IMPLEMENTATION_KEY in value)
        return [value];
    } else if (Array.isArray(value)) {
      return value.reduce((all, element) => {
        const nested = collectNestedHotSwappableValues(element);
        return nested ? [...all, ...nested] : all;
      }, []);
    } else if (typeof value === "object" && value != null) {
      return Object.keys(value).reduce((all, key) => {
        const nested = collectNestedHotSwappableValues(value[key]);
        return nested ? [...all, ...nested] : all;
      }, []);
    }
  }
  function appendChild(container, child, internals, rootInternals) {
    var _currentParent$childr;
    const {
      nodes,
      strict
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot append a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr !== void 0 ? _currentParent$childr : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        channel(ACTION_INSERT_CHILD, container.id, existingIndex < 0 ? container.children.length : container.children.length - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        newChildren.push(child);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function removeChild(container, child, internals, rootInternals) {
    const {
      strict
    } = rootInternals;
    return perform(container, rootInternals, {
      remote: (channel) => channel(ACTION_REMOVE_CHILD, container.id, container.children.indexOf(child)),
      local: () => {
        removeNodeFromContainer(child, rootInternals);
        const newChildren = [...internals.children];
        newChildren.splice(newChildren.indexOf(child), 1);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function insertChildBefore(container, child, before, internals, rootInternals) {
    var _currentParent$childr2;
    const {
      strict,
      nodes
    } = rootInternals;
    if (!nodes.has(child)) {
      throw new Error(`Cannot insert a node that was not created by this remote root`);
    }
    const currentParent = child.parent;
    const existingIndex = (_currentParent$childr2 = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children.indexOf(child)) !== null && _currentParent$childr2 !== void 0 ? _currentParent$childr2 : -1;
    return perform(container, rootInternals, {
      remote: (channel) => {
        const beforeIndex = container.children.indexOf(before);
        channel(ACTION_INSERT_CHILD, container.id, beforeIndex < existingIndex || existingIndex < 0 ? beforeIndex : beforeIndex - 1, serializeChild(child), currentParent ? currentParent.id : false);
      },
      local: () => {
        moveNodeToContainer(container, child, rootInternals);
        let newChildren;
        if (currentParent) {
          const currentInternals = getCurrentInternals(currentParent, rootInternals);
          const currentChildren = [...currentInternals.children];
          currentChildren.splice(existingIndex, 1);
          if (currentParent === container) {
            newChildren = currentChildren;
          } else {
            currentInternals.children = strict ? Object.freeze(currentChildren) : currentChildren;
            newChildren = [...internals.children];
          }
        } else {
          newChildren = [...internals.children];
        }
        newChildren.splice(newChildren.indexOf(before), 0, child);
        internals.children = strict ? Object.freeze(newChildren) : newChildren;
      }
    });
  }
  function normalizeChild(child, root) {
    return typeof child === "string" ? root.createText(child) : child;
  }
  function moveNodeToContainer(container, node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    const newTop = container.kind === KIND_ROOT ? container : tops.get(container);
    tops.set(node, newTop);
    parents.set(node, container);
    moveFragmentToContainer(node, rootInternals);
    allDescendants(node, (descendant) => {
      tops.set(descendant, newTop);
      moveFragmentToContainer(descendant, rootInternals);
    });
  }
  function moveFragmentToContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.props;
    if (!props)
      return;
    Object.values(props).forEach((prop) => {
      if (!isRemoteFragment(prop))
        return;
      moveNodeToContainer(node, prop, rootInternals);
    });
  }
  function removeNodeFromContainer(node, rootInternals) {
    const {
      tops,
      parents
    } = rootInternals;
    tops.delete(node);
    parents.delete(node);
    allDescendants(node, (descendant) => {
      tops.delete(descendant);
      removeFragmentFromContainer(descendant, rootInternals);
    });
    removeFragmentFromContainer(node, rootInternals);
  }
  function removeFragmentFromContainer(node, rootInternals) {
    if (node.kind !== KIND_COMPONENT)
      return;
    const props = node.remoteProps;
    for (const key of Object.keys(props !== null && props !== void 0 ? props : {})) {
      const prop = props[key];
      if (!isRemoteFragment(prop))
        continue;
      removeNodeFromContainer(prop, rootInternals);
    }
  }
  function makePartOfTree(node, {
    parents,
    tops,
    nodes
  }) {
    nodes.add(node);
    Object.defineProperty(node, "parent", {
      get() {
        return parents.get(node);
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(node, "top", {
      get() {
        return tops.get(node);
      },
      configurable: true,
      enumerable: true
    });
  }
  function serializeChild(value) {
    return value.kind === KIND_TEXT ? {
      id: value.id,
      kind: value.kind,
      text: value.text
    } : {
      id: value.id,
      kind: value.kind,
      type: value.type,
      props: value.remoteProps,
      children: value.children.map((child) => serializeChild(child))
    };
  }
  function serializeProp(prop) {
    if (isRemoteFragment(prop)) {
      return serializeFragment(prop);
    }
    return prop;
  }
  function serializeFragment(value) {
    return {
      id: value.id,
      kind: value.kind,
      get children() {
        return value.children.map((child) => serializeChild(child));
      }
    };
  }
  function getCurrentInternals(currentParent, rootInternals) {
    if (currentParent.kind === KIND_ROOT) {
      return rootInternals;
    }
    if (currentParent.kind === KIND_FRAGMENT) {
      return rootInternals.fragments.get(currentParent);
    }
    return rootInternals.components.get(currentParent);
  }
  function makeRemote(value, id, root) {
    Object.defineProperty(value, "id", {
      value: id,
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(value, "root", {
      value: root,
      configurable: true,
      writable: false,
      enumerable: false
    });
  }
  function tryHotSwappingObjectValues(currentValue, newValue) {
    if (typeof newValue !== "object" || newValue == null) {
      var _collectNestedHotSwap;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap === void 0 ? void 0 : _collectNestedHotSwap.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const normalizedNewValue = {};
    for (const key in currentValue) {
      const currentObjectValue = currentValue[key];
      if (!(key in newValue)) {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentObjectValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
      const newObjectValue = newValue[key];
      const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentObjectValue, newObjectValue);
      if (elementHotSwaps)
        hotSwaps.push(...elementHotSwaps);
      if (updatedValue !== IGNORE) {
        hasChanged = true;
        normalizedNewValue[key] = updatedValue;
      }
    }
    for (const key in newValue) {
      if (key in normalizedNewValue)
        continue;
      hasChanged = true;
      normalizedNewValue[key] = makeValueHotSwappable(newValue[key]);
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }
  function tryHotSwappingArrayValues(currentValue, newValue) {
    if (!Array.isArray(newValue)) {
      var _collectNestedHotSwap2;
      return [makeValueHotSwappable(newValue), (_collectNestedHotSwap2 = collectNestedHotSwappableValues(currentValue)) === null || _collectNestedHotSwap2 === void 0 ? void 0 : _collectNestedHotSwap2.map((hotSwappable) => [hotSwappable, void 0])];
    }
    let hasChanged = false;
    const hotSwaps = [];
    const newLength = newValue.length;
    const currentLength = currentValue.length;
    const maxLength = Math.max(currentLength, newLength);
    const normalizedNewValue = [];
    for (let i = 0; i < maxLength; i++) {
      const currentArrayValue = currentValue[i];
      const newArrayValue = newValue[i];
      if (i < newLength) {
        if (i >= currentLength) {
          hasChanged = true;
          normalizedNewValue[i] = makeValueHotSwappable(newArrayValue);
          continue;
        }
        const [updatedValue, elementHotSwaps] = tryHotSwappingValues(currentArrayValue, newArrayValue);
        if (elementHotSwaps)
          hotSwaps.push(...elementHotSwaps);
        if (updatedValue === IGNORE) {
          normalizedNewValue[i] = currentArrayValue;
          continue;
        }
        hasChanged = true;
        normalizedNewValue[i] = updatedValue;
      } else {
        hasChanged = true;
        const nestedHotSwappables = collectNestedHotSwappableValues(currentArrayValue);
        if (nestedHotSwappables) {
          hotSwaps.push(...nestedHotSwappables.map((hotSwappable) => [hotSwappable, void 0]));
        }
      }
    }
    return [hasChanged ? normalizedNewValue : IGNORE, hotSwaps];
  }

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/utilities/registration.mjs
  function createExtensionRegistrationFunction() {
    const extensionWrapper = (target, implementation) => {
      var _shopify;
      function extension2(...args) {
        return __async(this, null, function* () {
          if (args.length === 1) {
            return implementation(...args);
          }
          const [{
            channel,
            components
          }, api] = args;
          const root = createRemoteRoot(channel, {
            components,
            strict: true
          });
          let renderResult = implementation(root, api);
          if (typeof renderResult === "object" && renderResult != null && "then" in renderResult) {
            renderResult = yield renderResult;
          }
          root.mount();
          return renderResult;
        });
      }
      (_shopify = globalThis.shopify) === null || _shopify === void 0 ? void 0 : _shopify.extend(target, extension2);
      return extension2;
    };
    return extensionWrapper;
  }

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/extension.mjs
  var extension = createExtensionRegistrationFunction();

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/AdminBlock/AdminBlock.mjs
  var AdminBlock = createRemoteComponent("AdminBlock");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/BlockStack/BlockStack.mjs
  var BlockStack = createRemoteComponent("BlockStack");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Box/Box.mjs
  var Box = createRemoteComponent("Box");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Button/Button.mjs
  var Button = createRemoteComponent("Button");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Icon/Icon.mjs
  var Icon = createRemoteComponent("Icon");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/InlineStack/InlineStack.mjs
  var InlineStack = createRemoteComponent("InlineStack");

  // node_modules/.pnpm/@shopify+ui-extensions@2023.7.2/node_modules/@shopify/ui-extensions/build/esm/surfaces/admin/components/Text/Text.mjs
  var Text = createRemoteComponent("Text");

  // node_modules/.pnpm/@remote-ui+core@2.2.3/node_modules/@remote-ui/core/build/esm/types.mjs
  var KIND_FRAGMENT2 = 3;

  // node_modules/.pnpm/@remote-ui+core@2.2.3/node_modules/@remote-ui/core/build/esm/utilities.mjs
  function isRemoteFragment2(object) {
    return object != null && object.kind === KIND_FRAGMENT2;
  }

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/reconciler.mjs
  var import_react_reconciler = __toESM(require_react_reconciler(), 1);
  var createReconciler = (options) => {
    var _options$primary;
    return (0, import_react_reconciler.default)({
      now: Date.now,
      // Timeout
      scheduleTimeout: setTimeout,
      cancelTimeout: clearTimeout,
      noTimeout: false,
      // @see https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L408
      queueMicrotask: (callback) => Promise.resolve(null).then(callback).catch(handleErrorInNextTick),
      isPrimaryRenderer: (_options$primary = options === null || options === void 0 ? void 0 : options.primary) !== null && _options$primary !== void 0 ? _options$primary : true,
      supportsMutation: true,
      supportsHydration: false,
      supportsPersistence: false,
      // Context
      getRootHostContext() {
        return {};
      },
      getChildHostContext(context) {
        return context;
      },
      // Instances
      createTextInstance(text, root) {
        return root.createText(text);
      },
      createInstance(type, allProps, root) {
        const _a = allProps, {
          children: _children
        } = _a, props = __objRest(_a, [
          "children"
        ]);
        return root.createComponent(type, props);
      },
      // Updates
      commitTextUpdate(text, _oldText, newText) {
        text.updateText(newText);
      },
      prepareUpdate(_instance, _type, oldProps, newProps) {
        const updateProps2 = {};
        let needsUpdate = false;
        for (const key in oldProps) {
          if (!has(oldProps, key) || key === "children") {
            continue;
          }
          if (!(key in newProps)) {
            needsUpdate = true;
            updateProps2[key] = void 0;
          } else if (oldProps[key] !== newProps[key]) {
            needsUpdate = true;
            updateProps2[key] = newProps[key];
          }
        }
        for (const key in newProps) {
          if (!has(newProps, key) || key === "children") {
            continue;
          }
          if (!(key in oldProps)) {
            needsUpdate = true;
            updateProps2[key] = newProps[key];
          }
        }
        return needsUpdate ? updateProps2 : null;
      },
      commitUpdate(instance, payload) {
        instance.updateProps(payload);
      },
      // Update root
      appendChildToContainer(remoteRoot, child) {
        remoteRoot.appendChild(child);
      },
      insertInContainerBefore(remoteRoot, child, beforeChild) {
        remoteRoot.insertChildBefore(child, beforeChild);
      },
      removeChildFromContainer(remoteRoot, child) {
        remoteRoot.removeChild(child);
      },
      clearContainer(remoteRoot) {
        for (const child of remoteRoot.children) {
          remoteRoot.removeChild(child);
        }
      },
      // Update children
      appendInitialChild(parent, child) {
        parent.appendChild(child);
      },
      appendChild(parent, child) {
        parent.appendChild(child);
      },
      insertBefore(parent, newChild, beforeChild) {
        parent.insertChildBefore(newChild, beforeChild);
      },
      removeChild(parent, child) {
        parent.removeChild(child);
      },
      // Unknown
      finalizeInitialChildren() {
        return false;
      },
      shouldSetTextContent() {
        return false;
      },
      getPublicInstance() {
      },
      prepareForCommit() {
        return null;
      },
      resetAfterCommit() {
      },
      commitMount() {
      },
      preparePortalMount() {
      }
    });
  };
  function handleErrorInNextTick(error) {
    setTimeout(() => {
      throw error;
    });
  }
  var {
    hasOwnProperty
  } = {};
  function has(object, property) {
    return hasOwnProperty.call(object, property);
  }

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/context.mjs
  var import_react = __toESM(require_react(), 1);
  var RenderContext = /* @__PURE__ */ (0, import_react.createContext)(null);

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/render.mjs
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var cache = /* @__PURE__ */ new WeakMap();
  var LEGACY_ROOT = 0;
  var defaultReconciler = createReconciler();
  function render(element, root, callback, reconciler = defaultReconciler) {
    let cached = cache.get(root);
    if (!cached) {
      const value = {
        container: reconciler.createContainer(root, LEGACY_ROOT, false, null),
        // We also cache the render context to avoid re-creating it on subsequent render calls
        renderContext: {
          root,
          reconciler
        }
      };
      cache.set(root, value);
      cached = value;
    }
    const {
      container,
      renderContext
    } = cached;
    reconciler.updateContainer(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderContext.Provider, {
      value: renderContext,
      children: element
    }), container, null, callback);
  }

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/components.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/hooks/render.mjs
  var import_react2 = __toESM(require_react(), 1);
  function useRender() {
    const render2 = (0, import_react2.useContext)(RenderContext);
    if (render2 == null) {
      throw new Error("No remote-ui Render instance found in context");
    }
    return render2;
  }

  // node_modules/.pnpm/@remote-ui+react@4.5.14_react@17.0.2/node_modules/@remote-ui/react/build/esm/components.mjs
  function createRemoteReactComponent(componentType, {
    fragmentProps
  } = {}) {
    if (!fragmentProps || !fragmentProps.length) {
      return componentType;
    }
    const wrapper = createComponentWrapper(componentType, fragmentProps);
    wrapper.displayName = componentType;
    return wrapper;
  }
  function createComponentWrapper(componentType, fragmentProps) {
    const Component = componentType;
    return /* @__PURE__ */ (0, import_react3.memo)(function ComponentWrapper(_a) {
      var _b = _a, {
        children: externalChildren = []
      } = _b, externalProps = __objRest(_b, [
        "children"
      ]);
      const fragments = (0, import_react3.useRef)({});
      const {
        root,
        reconciler
      } = useRender();
      const {
        props,
        children
      } = (0, import_react3.useMemo)(() => {
        const portals = [];
        const props2 = {};
        for (const key of Object.keys(externalProps)) {
          const element = externalProps[key];
          if (fragmentProps.includes(key) && /* @__PURE__ */ (0, import_react3.isValidElement)(element)) {
            const currentFragment = fragments.current[key];
            const fragment = isRemoteFragment2(currentFragment) ? currentFragment : root.createFragment();
            fragments.current[key] = fragment;
            Object.assign(fragment, {
              createText(...args) {
                return root.createText(...args);
              },
              createComponent(type, ...args) {
                return root.createComponent(type, ...args);
              }
            });
            const portal = reconciler.createPortal(element, fragment, null, null);
            portals.push(portal);
            props2[key] = fragment;
          } else {
            props2[key] = element;
            delete fragments.current[key];
          }
        }
        return {
          props: props2,
          children: [...import_react3.Children.toArray(externalChildren), ...portals]
        };
      }, [externalChildren, externalProps, root, reconciler, fragments]);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, __spreadProps(__spreadValues({}, props), {
        children
      }));
    });
  }

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/context.mjs
  var import_react4 = __toESM(require_react(), 1);
  var ExtensionApiContext = /* @__PURE__ */ (0, import_react4.createContext)(null);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/render.mjs
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function reactExtension(target, render$1) {
    return extension(target, (root, api) => {
      return new Promise((resolve, reject) => {
        try {
          render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ExtensionApiContext.Provider, {
            value: api,
            children: render$1(api)
          }), root, () => {
            resolve();
          });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    });
  }

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/AdminBlock/AdminBlock.mjs
  var AdminBlock2 = createRemoteReactComponent(AdminBlock);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/BlockStack/BlockStack.mjs
  var BlockStack2 = createRemoteReactComponent(BlockStack);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Box/Box.mjs
  var Box2 = createRemoteReactComponent(Box);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Button/Button.mjs
  var Button2 = createRemoteReactComponent(Button);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Icon/Icon.mjs
  var Icon2 = createRemoteReactComponent(Icon);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/InlineStack/InlineStack.mjs
  var InlineStack2 = createRemoteReactComponent(InlineStack);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/components/Text/Text.mjs
  var Text2 = createRemoteReactComponent(Text);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/hooks/api.mjs
  var import_react13 = __toESM(require_react(), 1);

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/errors.mjs
  var AdminUIExtensionError = class extends Error {
    constructor(...args) {
      super(...args);
      this.name = "AdminUIExtensionError";
    }
  };

  // node_modules/.pnpm/@shopify+ui-extensions-react@2023.7.2_xtaiqup5pn3t3z44n5l3nxt6oy/node_modules/@shopify/ui-extensions-react/build/esm/surfaces/admin/hooks/api.mjs
  function useApi(_target) {
    const api = (0, import_react13.useContext)(ExtensionApiContext);
    if (api == null) {
      throw new AdminUIExtensionError("No extension api found.");
    }
    return api;
  }

  // extensions/admin-block/src/utils.js
  function getCustomerVipProgram(customerId) {
    return __async(this, null, function* () {
      return yield makeGraphQLQuery(
        `query Customer($id: ID!) {
      customer(id: $id) {
        metafield(namespace: "vip-program", key:"customer-program") {
          value
        }
      }
    }
  `,
        { id: customerId }
      );
    });
  }
  function removeVipProgram(id) {
    return __async(this, null, function* () {
      return yield makeGraphQLQuery(
        `mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
    metafieldDefinitionCreate(
      definition: {namespace: $namespace, key: $key, name: "Vip Program", ownerType: CUSTOMER, type: $type, access: {admin: MERCHANT_READ_WRITE}}
    ) {
      createdDefinition {
        id
      }
    }
    metafieldsSet(metafields: [{ownerId:$ownerId, namespace:$namespace, key:$key, type:$type, value:$value}]) {
      userErrors {
        field
        message
        code
      }
    }
  }
  `,
        {
          ownerId: id,
          namespace: "vip-program",
          key: "customer-program",
          type: "string",
          value: "null"
        }
      );
    });
  }
  function makeGraphQLQuery(query, variables) {
    return __async(this, null, function* () {
      const graphQLQuery = {
        query,
        variables
      };
      const res = yield fetch("shopify:admin/api/graphql.json", {
        method: "POST",
        body: JSON.stringify(graphQLQuery)
      });
      if (!res.ok) {
        console.error("Network error");
      }
      return yield res.json();
    });
  }

  // extensions/admin-block/src/BlockExtension.jsx
  var import_react14 = __toESM(require_react());
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  var TARGET = "admin.customer-details.block.render";
  var BlockExtension_default = reactExtension(TARGET, () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(App, {}));
  function App() {
    const [vipProgram, setVipProgram] = (0, import_react14.useState)(null);
    const {
      extension: { target },
      i18n,
      data
    } = useApi(TARGET);
    const customerId = data.selected[0].id;
    (0, import_react14.useEffect)(() => {
      (function getTheVipProgram() {
        return __async(this, null, function* () {
          var _a, _b, _c;
          const customerVipProgram = yield getCustomerVipProgram(customerId);
          if (((_c = (_b = (_a = customerVipProgram == null ? void 0 : customerVipProgram.data) == null ? void 0 : _a.customer) == null ? void 0 : _b.metafield) == null ? void 0 : _c.value) != "null") {
            setVipProgram(customerVipProgram.data.customer.metafield.value);
          }
        });
      })();
    }, []);
    const handleDelete = () => __async(this, null, function* () {
      yield removeVipProgram(customerId);
      setVipProgram(null);
    });
    return (
      // The AdminBlock component provides an API for setting the title and summary of the Block extension wrapper.
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AdminBlock2, { summary: vipProgram, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BlockStack2, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box2, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(InlineStack2, { inlineSize: "100%", inlineGap: "large", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text2, { fontWeight: "bold", children: vipProgram ? `This customer is part of the ${vipProgram} VIP program.` : "Not a VIP customer" }),
        vipProgram && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button2, { onPress: () => handleDelete(), variant: "tertiary", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon2, { name: "DeleteMinor" }) })
      ] }) }) }) })
    );
  }
})();
