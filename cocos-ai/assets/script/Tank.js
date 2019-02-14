import NeuralNetwork from "./NeuralNetwork";
import Vec2 from "./vec2";

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this._neuralnetwork = new NeuralNetwork();
        this._targetBoom = undefined;
        this._targetVec = undefined;
        this._lookVec = cc.v2(Math.random() * 2 - 1, Math.random() * 2 - 1);

    },
    initWithData(controller){
        console.log("初始化数据");
        this._controller = controller;
    },
    update(dt) {
        if (this._targetBoom == undefined && this._controller) {
            //寻找target 
            let boomList = this._controller.getBoomList();
            let minDis = 1000;
            
            for (let i = 0 ; i < boomList.length ; i ++){
                let dis = boomList[i].position.sub(this.node.position).mag();
                if (dis < minDis){
                    minDis = dis;
                    this._targetBoom = boomList[i];
                }
            }
            // if (this._targetBoom){
            //     console.log("找到了 距离最近的 地雷");
            // }
        }
        this.node.position = cc.v2(
            this.node.position.x + this._lookVec.x,
            this.node.position.y + this._lookVec.y
        )
        if (this.node.position.x - this.node.width * 0.5 < 1334 * - 0.5) {
            this._lookVec.x = Math.abs(this._lookVec.x);
        }
        if (this.node.position.y - this.node.width * 0.5 < 750 * - 0.5) {
            this._lookVec.y = Math.abs(this._lookVec.y);
        }

        if (this.node.position.x + this.node.width * 0.5 > 1334 * 0.5) {
            this._lookVec.x = -Math.abs(this._lookVec.x)
        }
        if (this.node.position.y + this.node.width * 0.5 > 750 * 0.5) {
            this._lookVec.y = -Math.abs(this._lookVec.y);
        }

        if (this._targetBoom){
            let targteVec = this._targetBoom.position.sub(this.node.position).normalize();
            //取出目标炸弹的与自己的 方向向量 
            let outV = this._neuralnetwork.input(this._lookVec,targteVec);
            this._lookVec.x += outV.x;
            this._lookVec.y += outV.y;
            this._lookVec = this._lookVec.normalize();
        }


        // let angle = cc.pAngleSigned(direction, cc.p(0,-1));
        let angle = this._lookVec.signAngle(cc.v2(0, 1));
        // cc.log("angle = " + angle);
        this.node.rotation =(180 / Math.PI) * angle;
    }
});
