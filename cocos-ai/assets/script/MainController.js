

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
        }
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
            let tank = cc.instantiate(this.tankPrefab);
            tank.getComponent('Tank').initWithData(this);
            this._tankList.push(tank);
            tank.parent = this.node;
            tank.position = cc.v2(Math.random() * 1334 - 1334 * 0.5, Math.random() * 750 - 750 * 0.5);
        }
       
    },
    getBoomList(){
        return this._boomList;
    }
});
