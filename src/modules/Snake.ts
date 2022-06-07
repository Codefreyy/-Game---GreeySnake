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
        if (this.getX() === value) {
            return;
        }
        //x的合法范围在0-290之间
        if (value < 0 || value > 290) {
            //进入判断，说明蛇撞墙了。
            throw new Error('蛇撞墙了！');
        }
        //修改x时，是在修改水平坐标，蛇在左右移动，蛇向左移动的时候，不能向右，向上的时候不能向下
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //如果用户向让蛇掉头，那我们就人为地再把方向设反
            if (value > this.getX()) {
                //如果新值大于旧值X，说明蛇在向右走，此时让蛇向左走
                value = this.getX() - 10;
            } else {
                value = this.getX() + 10;
            }

        }
        //这里 === value，意思是当蛇往回走的时候，蛇头的新value会跟第二节身体的Offset重合


        this.moveBody()
        this.head.style.left = value + 'px';
        this.checkHeadBody()
    }

    setY(value: number) {
        if (this.getY() === value) {
            return
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //如果用户向让蛇掉头，那我们就人为地再把方向设反
            if (value > this.getY()) {
                value = this.getY() - 10;
            } else {
                value = this.getY() + 10;
            }

        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    //蛇吃了食物后增加身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    moveBody() {
        //将后面的一节身体，设置为前面身体的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //从后往前取元素，i不等于0是因为，蛇头的位置在sexX setY那边已经改过了

            //当前i的前一个（i-1)小节的位置（X,Y)
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将前一个的坐标设置到当前小节上面
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    //检查头和身体有没有相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.getX() === bd.offsetLeft && this.getY() === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}