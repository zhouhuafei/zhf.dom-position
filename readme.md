# dom是否有非static类型的定位？获取定位方式，给dom添加定位。
```
const DomPosition = require('zhf.dom-position');
const domPosition = new DomPosition('body');
console.log(domPosition.hasPosition()); // false => 是否有非static类型的定位
console.log(domPosition.hasPosition('static')); // true =>  是否有static类型的定位
console.log(domPosition.hasPosition('absolute')); // false =>  是否有absolute类型的定位
console.log(domPosition.hasPosition('relative')); // false =>  是否有relative类型的定位
console.log(domPosition.hasPosition('fixed')); // false =>  是否有fixed类型的定位
document.body.style.position = 'relative';
console.log(domPosition.hasPosition('relative')); // true =>  是否有relative类型的定位
domPosition.setPosition('absolute'); // dom没有定位或者定位为static的时候，设置dom的定位为absolute
console.log(domPosition.hasPosition('relative')); // true =>  是否有relative类型的定位
domPosition.setPosition('absolute', true); // 不管dom有没有定位，都把dom的定位设置成absolute
console.log(domPosition.hasPosition('absolute')); // true =>  是否有absolute类型的定位
console.log(domPosition.getPosition()); // 'absolute' => 获取dom的定位方式
```
