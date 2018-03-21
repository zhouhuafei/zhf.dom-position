const getDomArray = require('zhf.get-dom-array');

class DomPosition {
    constructor(element) {
        const dom = getDomArray(element)[0];
        if (!dom) {
            console.log('no find dom');
            return;
        }
        this.dom = dom;
        this.init();
    }

    init() {
        this.domHasPosition = false;
        this.domPositionType = 'static';
        const dom = this.dom;
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
    }

    hasPosition(type) {
        this.init();
        if (type === undefined) {
            return this.domHasPosition;
        } else {
            return this.domPositionType === type;
        }
    }

    getPosition() {
        this.init();
        return this.domPositionType;
    }

    setPosition(type = 'relative', isCover = false) {
        const dom = this.dom;
        if (isCover) {
            dom.style.position = type;
        } else {
            if (!this.hasPosition()) {
                dom.style.position = type;
            }
        }
    }
}

module.exports = DomPosition;
