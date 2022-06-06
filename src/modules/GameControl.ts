//游戏控制器，控制其他所有类
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake';

export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    //初始化游戏，调用后游戏开始
    init() {
        document.addEventListener('keydown', this.keydownHandler)

    }

    //键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key);
    }
}