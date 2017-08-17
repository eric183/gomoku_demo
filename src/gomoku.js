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
        var coordinates = {};
        window.coordinates = coordinates;
        window.array = _array;
        var child = document.createElement('div');
        child.className = 'floatDiv';
        root.appendChild(child);


        var _div = query('.floatDiv');
        var _box = query('ul li')[0];

        toArray(query('.heng li')).forEach((data, index, _array) => {

            coordinates[index] = data.offsetTop;

        });
        var box_height = _box.offsetTop;
        var circleHeight = box_height;
        console.log('格子高宽' + box_height);

        //异步样式表
        var stylesheet = document.createElement('style');
        stylesheet.appendChild(
            document.createTextNode(
                `.floatDiv{width: ${circleHeight}px;height: ${circleHeight}px}`
            ));
        document.head.appendChild(stylesheet);

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


            if (clickX < box_height && clickY < box_height) {
                obj["x"] = 0;
                obj["y"] = 0;
                // return obj;
            } else {
                if (clickX < box_height) {
                    obj["x"] = 0;
                } else if (clickX > box_height * 14) {
                    obj["x"] = box_height * 14 + 12 * 1;
                } else if (clickX > box_height * 13) {
                    obj["x"] = box_height * 13 + 12 * 1;
                }
                if (clickY < box_height) {
                    obj["y"] = 0;
                } else if (clickY > box_height * 14) {
                    obj["y"] = box_height * 14 + 12 * 1;
                } else if (clickY > box_height * 13) {
                    obj["y"] = box_height * 13 + 12 * 1;
                }
                //取最靠近点击区域的纵横坐标
                for (let l in coordinates) {
                    // if (clickX > coordinates[l]) {
                    //     obj["x"] = coordinates[l] + box_height;
                    // }
                    // if (clickY > coordinates[l]) {
                    //     obj["y"] = coordinates[l] + box_height;
                    // }

                    if (!obj["x"] && Math.abs(clickX - coordinates[l]) <= box_height / 2) {
                        obj["x"] = coordinates[l];
                    }
                    if (!obj["y"] && Math.abs(clickY - coordinates[l]) <= box_height / 2) {
                        obj["y"] = coordinates[l];
                    }
                }
            }



            return obj;

            // return obj;
        }





        var chazhi = _div.clientWidth / 2;
        // var chazhi = 0;
        root.addEventListener('click', function(e) {
            // if (fiY(e.clientY) == _array[])
            var confirmPoint = checkPoint(fiX(e.clientX), fiY(e.clientY), coordinates, null);
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
        for (let i = 0; i < 13; i++) {
            _template = _template + `<li></li>`;
        };
        return _template;
    }

    config = _extends({ template: insertChildren() }, config);


}


var m = new Gomoku({ el: "#root" }).initStage();