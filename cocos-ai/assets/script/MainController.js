

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
    start () {
        for (let i = 0 ; i < 100 ; i ++){
            // let boom = cc.instantiate(this.)
        }
        for (let i = 0 ; i < 10 ; i ++){

        }
    }
});
