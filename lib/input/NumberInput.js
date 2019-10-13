'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./NumberInput.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_Component) {
    _inherits(NumberInput, _Component);

    function NumberInput(props) {
        _classCallCheck(this, NumberInput);

        var _this = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this.changeHandler = function () {
            var _this$state = _this.state,
                tip = _this$state.tip,
                className = _this$state.className;

            var inputValue = _this.inputValue.value;
            var _this$props = _this.props,
                minValue = _this$props.minValue,
                maxValue = _this$props.maxValue;

            console.log(inputValue);
            var reg = /^\d*?$/;
            var result = reg.test(inputValue);
            console.log(result);
            if (!result) {
                inputValue = inputValue.replace(/[^0-9]/ig, '');
                tip = '只能输入数字';
                className = 'errorValue';
            } else {
                tip = '';
                className = 'rightValue';
                if (inputValue * 1 < minValue) {
                    // *1 表示将字符串转换成数字
                    inputValue = minValue;
                    tip = '\u8F93\u5165\u8303\u56F4\uFF1A[' + minValue + ', ' + maxValue + ']';
                    className = 'errorValue';
                } else if (inputValue * 1 > maxValue) {
                    inputValue = maxValue;
                    tip = '\u8F93\u5165\u8303\u56F4\uFF1A[' + minValue + ', ' + maxValue + ']';
                    className = 'errorValue';
                } else {
                    tip = '';
                    className = 'rightValue';
                }
            }
            console.log(inputValue);
            _this.inputValue.value = inputValue;
            _this.setState({
                tip: tip,
                className: className
            });
        };

        _this.state = {
            tip: '',
            className: ''
        };
        return _this;
    }

    _createClass(NumberInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { className: this.state.className, placeholder: this.props.placeholder,
                    onChange: this.changeHandler, ref: function ref(input) {
                        return _this2.inputValue = input;
                    } }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.tip
                )
            );
        }
    }]);

    return NumberInput;
}(_react.Component);

exports.default = NumberInput;