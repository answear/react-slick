"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _innerSliderUtils = require("./utils/innerSliderUtils");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(o) {
            return typeof o;
          }
        : function(o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function(t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function(r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var _spec$classes, _spec$classes2;
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;
  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (
      index > spec.currentSlide - centerOffset - 1 &&
      index <= spec.currentSlide + centerOffset
    ) {
      slickActive = true;
    }
  } else {
    slickActive =
      spec.currentSlide <= index &&
      index < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index === focusedSlide;
  return _defineProperty(
    _defineProperty(
      {
        "slick-slide": true,
        "slick-active": slickActive,
        "slick-center": slickCenter,
        "slick-cloned": slickCloned
      },
      "slick-cloned ".concat(
        (_spec$classes = spec.classes) === null || _spec$classes === void 0
          ? void 0
          : _spec$classes.cloned
      ),
      slickCloned &&
        ((_spec$classes2 = spec.classes) === null || _spec$classes2 === void 0
          ? void 0
          : _spec$classes2.cloned)
    ),
    "slick-current",
    slickCurrent
  );
};
var getSlideStyle = function getSlideStyle(spec) {
  var style = {};
  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    if (spec.useCSS) {
      style.transition =
        "opacity " +
        spec.speed +
        "ms " +
        spec.cssEase +
        ", " +
        "visibility " +
        spec.speed +
        "ms " +
        spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};
var shouldOmitLazy = function shouldOmitLazy() {
  var omitLazyForSlides =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = arguments.length > 1 ? arguments[1] : undefined;
  return omitLazyForSlides.includes(index);
};
var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react["default"].Children.count(spec.children);
  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
  _react["default"].Children.forEach(spec.children, function(elem, index) {
    var _spec$classes3;
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };

    // in case of lazyLoad, whether or not we want to fetch the slide
    if (
      !spec.lazyLoad ||
      (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) ||
      shouldOmitLazy(spec.omitLazyForSlides, index)
    ) {
      child = elem;
    } else {
      child = /*#__PURE__*/ _react["default"].createElement("div", null);
    }
    var childStyle = getSlideStyle(
      _objectSpread(
        _objectSpread({}, spec),
        {},
        {
          index: index
        }
      )
    );
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(
      _objectSpread(
        _objectSpread({}, spec),
        {},
        {
          index: index
        }
      )
    );
    // push a cloned element of the desired slide
    slides.push(
      /*#__PURE__*/ _react["default"].cloneElement(child, {
        key: "original" + getKey(child, index),
        "data-index": index,
        className: (0, _classnames["default"])(
          slideClasses,
          slideClass,
          (_spec$classes3 = spec.classes) === null || _spec$classes3 === void 0
            ? void 0
            : _spec$classes3.slide
        ),
        tabIndex: "-1",
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread(
          _objectSpread(
            {
              outline: "none"
            },
            child.props.style || {}
          ),
          childStyle
        ),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      })
    );

    // if slide needs to be precloned or postcloned
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;
      if (
        preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) &&
        childrenCount !== spec.slidesToShow
      ) {
        var _spec$classes4;
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              index: key
            }
          )
        );
        preCloneSlides.push(
          /*#__PURE__*/ _react["default"].cloneElement(child, {
            key: "precloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(
              slideClasses,
              slideClass,
              (_spec$classes4 = spec.classes) === null ||
                _spec$classes4 === void 0
                ? void 0
                : _spec$classes4.slide
            ),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread(
              _objectSpread({}, child.props.style || {}),
              childStyle
            ),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
      if (childrenCount !== spec.slidesToShow) {
        var _spec$classes5;
        key = childrenCount + index;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              index: key
            }
          )
        );
        postCloneSlides.push(
          /*#__PURE__*/ _react["default"].cloneElement(child, {
            key: "postcloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(
              slideClasses,
              slideClass,
              (_spec$classes5 = spec.classes) === null ||
                _spec$classes5 === void 0
                ? void 0
                : _spec$classes5.slide
            ),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread(
              _objectSpread({}, child.props.style || {}),
              childStyle
            ),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = (exports.Track = /*#__PURE__*/ (function(_React$PureComponent) {
  function Track() {
    var _this;
    _classCallCheck(this, Track);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Track, [].concat(args));
    _defineProperty(_this, "node", null);
    _defineProperty(_this, "handleRef", function(ref) {
      _this.node = ref;
    });
    return _this;
  }
  _inherits(Track, _React$PureComponent);
  return _createClass(Track, [
    {
      key: "render",
      value: function render() {
        var _this$props$classes;
        var slides = renderSlides(this.props);
        var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
        var mouseEvents = {
          onMouseEnter: onMouseEnter,
          onMouseOver: onMouseOver,
          onMouseLeave: onMouseLeave
        };
        return /*#__PURE__*/ _react["default"].createElement(
          "div",
          _extends(
            {
              ref: this.handleRef,
              className: (0, _classnames["default"])(
                "slick-track",
                (_this$props$classes = this.props.classes) === null ||
                  _this$props$classes === void 0
                  ? void 0
                  : _this$props$classes.track
              ),
              style: this.props.trackStyle
            },
            mouseEvents
          ),
          slides
        );
      }
    }
  ]);
})(_react["default"].PureComponent));
