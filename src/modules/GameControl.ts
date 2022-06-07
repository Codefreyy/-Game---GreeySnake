//游戏控制器，控制其他所有类
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake';

export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = ''

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

    }

    //键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        //检查方向是否合法

        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run() {

    }
}