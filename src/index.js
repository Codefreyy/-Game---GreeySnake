"use strict";
exports.__esModule = true;
//引入样式
require("./style/index.less");
// 定义食物类
var Food = /** @class */ (function () {
    function Food() {
        this.element = document.getElementById('food');
    }
    Object.defineProperty(Food.prototype, "X", {
        // 如果蛇的上左偏移量 = 食物的上左偏移量，那蛇就吃到食物
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "Y", {
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    return Food;
}());
var food = new Food();
console.log(food.X, food.Y);
