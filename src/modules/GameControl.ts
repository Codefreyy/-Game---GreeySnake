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
        this.scorePanel = new ScorePanel();
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

        this.snake.setX(X);
        this.snake.setY(Y);

        this.isLive && setTimeout(this.run, 300 - (this.scorePanel.level) * 30);
    }
}