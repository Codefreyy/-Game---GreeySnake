export default class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    //设置一个变量表示多少分升级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level')
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        //判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp()
            //每加十分升一级
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
