function query(dom) {
    return document.querySelector(dom);
}

function querys(doms) {
    return document.querySelectorAll(doms);
}

function toArray(array_like) {
    return Array.prototype.slice.call(array_like);
}

function _extends(_from, _target) {
    for (let i in _from) {
        _target[i] = _from[i];
    }
    return _target;
}


function Gomoku() {}



console.log(query('#root'));
var _template = "";
var _t = [];

var li_count = [1, 2, 3, 4, 5];


function insertChildren() {
    for (let i = 0; i < li_count.length; i++) {
        _template = _template + `<li>${li_count[i]}</li>`;
    };
    return _template;
}

// insertChildren();
console.log(`<ul>${insertChildren()}</ul>`);
// console.log(_template);