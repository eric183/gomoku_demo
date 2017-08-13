var config = {};

function query(dom) {
    dom = document.querySelectorAll(dom);
    return dom.length == 1 ? dom[0] : dom;
}

function eBind(target, event_name, callback, boolean) {
    target.addEventListener(event_name, callback, boolean);
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
    // Gomoku.fn = 2121;
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
Gomoku.prototype.initStage = function(reset) {
    // console.log(this.name);
    config.el.style.height = `${config.el.clientWidth}px`;

    toArray(query('ul')).forEach((i) => {
        i.insertAdjacentHTML('beforeend', config.template);
    })

    if (!reset) {
        gameMap();
    }
    return this;
}




{
    function gameMap() {
        //p1黑子
        var p1 = 1;
        var p2 = 2;

        var _array = new Array();

        window.array = _array;
        var child = document.createElement('div');
        child.className = 'floatDiv';
        root.appendChild(child);


        var _div = query('.floatDiv');
        var box_height = query('ul li')[1].offsetTop;
        var circleHeight = box_height - 1;
        var fix_box_height = box_height;
        console.log('格子高宽' + box_height);

        //异步样式表
        var stylesheet = document.createElement('style');
        stylesheet.appendChild(
            document.createTextNode(
                `.floatDiv{width: ${circleHeight}px;height: ${circleHeight}px}`
            ));
        document.head.appendChild(stylesheet);
        var flag = 1;
        var flagY = 1;
        for (let y = 0; y < 15; y++) {

            // _array.push({ x: x * box_height });
            for (let x = 0; x < 15; x++) {
                _array.push({ x: x * circleHeight + flag, y: y * circleHeight + flagY })
                flag = flag + 1;
                if (x >= 14) {
                    flag = 1;
                }

            }
            flagY = flagY + 1;
            if (y >= 14) {
                flagY = 1;
            }
            // for (let x = 0; x < 15; x++) { 

            // }

            // _array[x].x = x * box_height;
            // _array[x].y = x


        }

        //Y轴修正值
        var fiY = function(_y) {
            return _y - 40;
        }

        //Y轴修正值
        var fiX = function(_x) {
            return _x - root.offsetLeft;
        }

        //坐标检测
        function checkPoint(clickX, clickY, coordinates, chosen) {
            var obj = {};
            var click_coordinatxes = 0;

            //取最靠近点击区域的纵横坐标
            for (let l = 0; l < coordinates.length; l++) {
                if (Math.abs(clickX - coordinates[l].x) <= box_height / 2 &&
                    Math.abs(clickY - coordinates[l].y) <= box_height / 2) {
                    obj = coordinates[l];
                    return obj;
                }

            }

            // return obj;
        }




        // var chazhiX = config.el.offsetLeft + _div.clientWidth / 2;
        // var chazhiY = config.el.offsetTop + _div.clientWidth / 2;
        var chazhi = _div.clientWidth / 2;
        root.addEventListener('click', function(e) {
            // if (fiY(e.clientY) == _array[])
            var confirmPoint = checkPoint(fiX(e.clientX), fiY(e.clientY), _array, null);
            // if (confirmPoint.boolean) {
            _div.style.left = confirmPoint.x - chazhi + 'px';
            _div.style.top = confirmPoint.y - chazhi + 'px';
            // }

            // console.log(z);
            // console.log(e.clientX - root.offsetLeft);
            // console.log(e.clientY);

            // console.log(this.offsetLeft);
            console.log(`x轴实际坐标: ${confirmPoint.x}`)
            console.log(`x轴点击坐标： ${fiX(e.clientX)}`);
            console.log(`y轴点击坐标： ${fiY(e.clientY)}`);
        }, false);
    }

    function insertChildren() {
        for (let i = 0; i < 15; i++) {
            _template = _template + `<li></li>`;
        };
        return _template;
    }

    config = _extends({ template: insertChildren() }, config);


}



// insertChildren();
// console.log();
// console.log(_template);


var m = new Gomoku({ el: "#root" }).initStage();