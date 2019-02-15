

import NeuralNetwork from './NeuralNetwork'
cc.Class({
    extends: cc.Component,

    properties: {
        tankPrefab: {
            default: null,
            type: cc.Prefab
        },
        boomPrefab: {
            default: null,
            type: cc.Prefab
        },
        timePrograss: {
            default: null,
            type: cc.ProgressBar
        }
    },
    onLoad() {
        this._time = 0;
    },
    start() {
        this._boomList = [];
        for (let i = 0; i < 10; i++) {
            let boom = cc.instantiate(this.boomPrefab);
            boom.parent = this.node;
            boom.position = cc.v2(Math.random() * 1334 - 1334 * 0.5, Math.random() * 750 - 750 * 0.5);
            this._boomList.push(boom);
        }
        this._tankList = [];
        for (let i = 0; i < 10; i++) {
            this.createTank();
        }
        this._state = 'run';
        this._time = 0;
    },
    createTank() {
        let tank = cc.instantiate(this.tankPrefab);
        tank.getComponent('Tank').initWithData(this);
        this._tankList.push(tank);
        tank.parent = this.node;
        tank.position = cc.v2(Math.random() * 1334 - 1334 * 0.5, Math.random() * 750 - 750 * 0.5);
        return tank;
    },
    inheritDNA() {
        console.log("遗传dna");
        let dnaList = [];

        if (this._tankList.length !== 0 && this._tankList.length % 2 == 0) {
            for (let i = 0; i < this._tankList.length; i++) {
                dnaList.push(this._tankList[i].getComponent('Tank').getDNA());
            }

        }
        console.log("tank list length = " , this._tankList.length);
        for (let i = 0; i < this._tankList.length; i++) {
            this._tankList[i].destroy();
        }
        this._tankList = [];
        for (let i = 0; i < 10; i++) {
            this.createTank();
        }

        // this._tankList = [];
        let index = 0;
        for (let i = 0; i < dnaList.length / 2; i++) {
            let dnaA = dnaList[i];
            let dnaB = dnaList[dnaList.length / 2 + i];
            let endDna = [];
            for (let j = 0; j < dnaA.length; j += 2) {
                endDna.push(dnaA[j]);
                endDna.push(dnaB[j + 1]);
            }
            let tank = this._tankList[index];
            tank.getComponent('Tank').loadDNA(endDna);
            index++;
        }
        this._time = 0;
        this._state = 'run';
    },
    getBoomList() {
        return this._boomList;
    },
    removeTank(tankNode) {
        // this.node.removeChild(tankNode);
        // for (let i = 0; i < this._tankList.length; i++) {
        //     if (this._tankList[i] == tankNode) {
        //         this._tankList.splice(i);
        //         console.log("删掉其中一个 节点", i);
        //     }
        // }
    },
    update(dt) {
        if (this._state == 'run') {
            this._time += dt;
            if (this._time > 10) {
                this._state = 'time-end';
                this.inheritDNA();
            }
            this.timePrograss.progress = this._time / 10;
        }
    }
});
