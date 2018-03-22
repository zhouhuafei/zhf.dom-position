'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getDomArray = require('zhf.get-dom-array');

var DomPosition = function () {
    function DomPosition(element) {
        _classCallCheck(this, DomPosition);

        var dom = getDomArray(element)[0];
        if (!dom) {
            console.log('no find dom');
            return;
        }
        this.dom = dom;
        this.init();
    }

    _createClass(DomPosition, [{
        key: 'init',
        value: function init() {
            this.domHasPosition = false;
            this.domPositionType = 'static';
            var dom = this.dom;
            /*
            // 这段注释不删是为了纪念自己的煞笔行为，明明一个getComputedStyle方法就可以得到的结果，我非要绕一大圈，还留下important的bug，明明几个月前写的是对的，怎么改来改去就改错了
            const stylePosition = dom.style.position;
            // 先判断优先级高的
            if (stylePosition === '') {
                // 当没给dom定位的时候 getComputedStyle(dom).position 浏览器获取到的是'static' jest获取到的值是''
                const cssPosition = getComputedStyle(dom).position;
                if (cssPosition !== 'static' && cssPosition !== '') {
                    this.domHasPosition = true;
                    this.domPositionType = cssPosition;
                }
            } else if (stylePosition !== 'static') {
                this.domHasPosition = true;
                this.domPositionType = stylePosition;
            }
            */
            // 当没给dom定位的时候 getComputedStyle(dom).position 浏览器获取到的是'static' jest获取到的值是''
            var cssPosition = getComputedStyle(dom).position;
            if (cssPosition !== 'static' && cssPosition !== '') {
                this.domHasPosition = true;
                this.domPositionType = cssPosition;
            }
        }
    }, {
        key: 'hasPosition',
        value: function hasPosition(type) {
            this.init();
            if (type === undefined) {
                return this.domHasPosition;
            } else {
                return this.domPositionType === type;
            }
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            this.init();
            return this.domPositionType;
        }
    }, {
        key: 'setPosition',
        value: function setPosition() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'relative';
            var isCover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var dom = this.dom;
            if (isCover) {
                dom.style.position = type;
            } else {
                if (!this.hasPosition()) {
                    dom.style.position = type;
                }
            }
        }
    }]);

    return DomPosition;
}();

module.exports = DomPosition;