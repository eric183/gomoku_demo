var config = {};

function query(dom) {
    dom = document.querySelectorAll(dom);
    return dom.length == 1 ? dom[0] : dom;
}

/**
 * 类数组转换为数 
 * @param {any} array_like 
 * @returns 
 */

function toArray(array_like) {
    return Array.prototype.slice.call(array_like);
}

function _extends(_from, _target) {
    for (let i in _from) {
        _target[i] = _from[i];
    }
    return _target;
}

function Gomoku(object) {
    // Gomoku.fn = 2323;
    object.el = query(object.el);
    // object.el = query("root");
    fakeConstructor(object);
}

/**
 * constructor不可靠，这里做一个fakeConstructor来替代
 * @param {Object} configObj 
 */

function fakeConstructor(configObj) {
    _extends(configObj, config);
}

// Gomoku.prototype.constructor = {

// }
var _template = '';
Gomoku.prototype.initStage = function() {
    // console.log(this.name);
    config.el.style.height = `${config.el.clientWidth}px`;

    toArray(query('ul')).forEach((i) => {
        i.insertAdjacentHTML('beforeend', config.template);
    })

    return this;
}

{
    function insertChildren() {
        for (let i = 0; i < 15; i++) {
            _template = _template + `<li></li>`;
        };
        return _template;
    }


    config = _extends({ template: insertChildren() }, config);

}


var m = new Gomoku({ el: "#root" }).initStage();
// insertChildren();
// console.log();
// console.log(_template);

root.addEventListener('click', function(e) {
    console.log(e);
}, false)