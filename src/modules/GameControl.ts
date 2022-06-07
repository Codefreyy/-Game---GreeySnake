//游戏控制器，控制其他所有类
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake';

export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = ''
    // 创建一个属性用来记录游戏是否结束
    isLive = true;


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 10);
        this.init();
    }
    //初始化游戏，调用后游戏开始
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        //bind创建一个新函数，把this，绑定给当前的this
        this.run();

    }

    //键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        //检查方向是否合法
        console.log(this.direction);
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run = () => {
        let X = this.snake.getX();
        let Y = this.snake.getY();
        // 根据按键方向修改X Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上移动
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                //向下移动
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.setX(X);
            this.snake.setY(Y);
        } catch (e) {
            alert(e.message);
            //将isLive设置为false
            this.isLive = false;
        }


        this.isLive && setTimeout(this.run, 300 - (this.scorePanel.level) * 30);
    }

    //定义一个方法，用来检测蛇是否吃到食物。
    checkEat(X: number, Y: number) {
        if (this.food.getX() && Y === this.food.getY()) {
            //食物的位置要重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore()
            //蛇增加一节
            this.snake.addBody()
        }

        //当x和y坐标都重合的时候，才会return true
    }

}