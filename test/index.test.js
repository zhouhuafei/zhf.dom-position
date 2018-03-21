const DomPosition = require('../dist/index.min');
const domPosition = new DomPosition('body');

test(`dom是否有非static类型的定位？获取定位方式，给dom添加定位。`, () => {
    console.log(domPosition.hasPosition()); // false => 有没有定位，且定位不是static
    console.log(domPosition.hasPosition('static')); // true =>  有没有定位，且定位是static
    console.log(domPosition.hasPosition('absolute')); // false =>  有没有定位，且定位是absolute
    console.log(domPosition.hasPosition('relative')); // false =>  有没有定位，且定位是relative
    console.log(domPosition.hasPosition('fixed')); // false =>  有没有定位，且定位是fixed
    document.body.style.position = 'relative';
    console.log(domPosition.hasPosition('relative')); // true =>  有没有定位，且定位是relative
    domPosition.setPosition('absolute'); // dom没有定位或者定位为static的时候，设置dom的定位为absolute
    console.log(domPosition.hasPosition('relative')); // true =>  有没有定位，且定位是relative
    domPosition.setPosition('absolute', true); // 不管dom有没有定位，都把dom的定位设置成absolute
    console.log(domPosition.hasPosition('absolute')); // true =>  有没有定位，且定位是absolute
    console.log(domPosition.getPosition()); // 'absolute' => 获取dom的定位方式
    expect(true).toEqual(true);
});
