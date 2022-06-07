export default class Food {
    //定义一个属性表示食物对应的元素
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }

    // 如果蛇的上左偏移量 = 食物的上左偏移量，那蛇就吃到食物
    getX() {
        return this.element.offsetLeft;
    }

    getY() {
        return this.element.offsetTop;
    }

    change(): void {
        //食物的位置不能破壁 最小 0 最大290，食物的坐标一定是10的倍数，因为蛇移动一次是一格，一格是10px

        // 食物的位置，最小是0，最大是宽度或者高度减去盒子的宽度和高度(否则会贴在边缘上面)
        let top = Math.round(Math.random() * 29) * 10

        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
