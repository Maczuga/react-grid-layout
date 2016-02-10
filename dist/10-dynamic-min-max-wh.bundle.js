webpackJsonp([11],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(5);
	var PureRenderMixin = __webpack_require__(10);
	var _ = __webpack_require__(15);
	var WidthProvider = __webpack_require__(4).WidthProvider;
	var ReactGridLayout = __webpack_require__(4);
	ReactGridLayout = WidthProvider(ReactGridLayout);

	/**
	 * This layout demonstrates how to use the `onResize` handler to enforce a min/max width and height.
	 *
	 * In this grid, all elements are allowed a max width of 2 if the height < 3,
	 * and a min width of 2 if the height >= 3.
	 */
	var DynamicMinMaxLayout = React.createClass({
	  displayName: 'DynamicMinMaxLayout',

	  mixins: [PureRenderMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isDraggable: true,
	      isResizable: true,
	      items: 20,
	      rowHeight: 30,
	      cols: 12
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {};
	  },
	  generateDOM: function generateDOM() {
	    // Generate items with properties from the layout, rather than pass the layout directly
	    var layout = this.generateLayout();
	    return _.map(layout, function (l) {
	      return React.createElement(
	        'div',
	        { key: l.i, _grid: l },
	        React.createElement(
	          'span',
	          { className: 'text' },
	          l.i
	        )
	      );
	    });
	  },
	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var w = _.random(1, 2);
	      var h = _.random(1, 3);
	      return {
	        x: i * 2 % 12, y: Math.floor(i / 6), w: w, h: h, i: i.toString()
	      };
	    });
	  },


	  onLayoutChange: function onLayoutChange(layout) {
	    this.props.onLayoutChange(layout);
	  },

	  onResize: function onResize(layout, oldLayoutItem, layoutItem, placeholder, e) {
	    // `oldLayoutItem` contains the state of the item before the resize.
	    // You can modify `layoutItem` to enforce constraints.

	    if (layoutItem.h < 3 && layoutItem.w > 2) {
	      layoutItem.w = 2;
	      placeholder.w = 2;
	    }

	    if (layoutItem.h >= 3 && layoutItem.w < 2) {
	      layoutItem.w = 2;
	      placeholder.w = 2;
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      _extends({ onLayoutChange: this.onLayoutChange, onResize: this.onResize
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});

	module.exports = DynamicMinMaxLayout;

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(9)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }
]);