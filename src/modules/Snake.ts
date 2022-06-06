export default class Snake {
    // 蛇头的元素
    head: HTMLElement;
    //表示蛇的身体的元素（包括蛇头）
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')
        this.head = document.querySelector('#snake>div') as HTMLElement;

        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇头的坐标
    getX() {
        return this.head.offsetLeft;
    }

    getY() {
        return this.head.offsetTop;
    }
    setX(value: number) {
        this.head.style.left = value + 'px';
    }

    setY(value: number) {
        this.head.style.top = value + 'px'
    }

    //蛇吃了食物后增加身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

}