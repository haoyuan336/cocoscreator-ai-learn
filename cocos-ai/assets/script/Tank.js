import NeuralNetwork from "./NeuralNetwork";

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._neuralnetwork = new NeuralNetwork();
    },

    update (dt) {

    }
});
