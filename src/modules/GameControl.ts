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
    isLive: Boolean = true;


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
                Y -= this.scorePanel.upScore;
                break;
            case "Up":
                //向上移动
                Y -= this.scorePanel.upScore;
                break;
            case "ArrowDown":
                Y += this.scorePanel.upScore;
                break;
            case "Down":
                //向下移动
                Y += this.scorePanel.upScore;
                break;
            case "ArrowLeft":
                X -= this.scorePanel.upScore;
                break;
            case "Left":
                X -= this.scorePanel.upScore;
                break;
            case "ArrowRight":
                X += this.scorePanel.upScore;
                break;
            case "Right":
                X += this.scorePanel.upScore;
                break;
            default:
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


        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    //定义一个方法，用来检测蛇是否吃到食物。
    checkEat(X: number, Y: number): void {
        if (X === this.food.getX() && Y === this.food.getY()) {
            //食物的位置要重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇增加一节
            this.snake.addBody();
        }

        //当x和y坐标都重合的时候，才会return true
    }

}