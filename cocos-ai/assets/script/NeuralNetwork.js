import NeuralLayer from "./NeuralLayer";

class NeuralNetwork {
    constructor() {
        this._neuralLayerList = [];
        const info = [4, 3, 2];
        for (let i = 0; i < info.length; i++) {
            this._neuralLayerList.push(new NeuralLayer(i, info));
        }

    }
    input(v1, v2) {

        let inputData = [v1.x, v1.y, v2.x, v2.y];
        for (let i = 0; i < this._neuralLayerList[0].length; i++) {
            this._neuralLayerList[0][i].value = inputData[i];
        }
        for (let i = 1; i < (this._neuralLayerList.length - 1); i++) {
            let neuralList = this._neuralLayerList[i].neuralList;
            let lastNeuralList = this._neuralLayerList[i - 1].neuralList;
            for (let j = 0; j < neuralList.length; j++) {
                neuralList[j].value = 0;
                for (let h = 0; h < lastNeuralList.length; h++) {
                    neuralList[j].value += lastNeuralList[h].value * lastNeuralList[h].weightList[j];
                }
                neuralList[j].value = this.actionFunction(neuralList[j].value);
            }
        }
        let lastNeuralList = this._neuralLayerList[this._neuralLayerList.length - 1].neuralList;
        let beforNeuralList = this._neuralLayerList[this._neuralLayerList.length - 2].neuralList;
        for (let i = 0; i < lastNeuralList.length; i++) {
            lastNeuralList[i].value = 0;
            for (let j = 0; j < beforNeuralList.length; j++) {
                lastNeuralList[i].value += beforNeuralList[j].weightList[i];
            }
            lastNeuralList[i].value = this.actionFunction(lastNeuralList[i].value);

        }
        return cc.v2(lastNeuralList[0].value, lastNeuralList[1].value);

    }
    actionFunction(value) {
        let p = 1;
        return 1 / (1 + Math.pow(Math.E, - value / p)) - 0.5;
    }
    getDNA() {
        let dnaList = [];
        for (let i = 0; i < this._neuralLayerList.length - 1; i++) {
            let neuralList = this._neuralLayerList[i].neuralList;
            let weightsList = [];
            for (let j = 0; j < neuralList.length; j++) {
                let neural = neuralList[j];
                weightsList.push(neural.weightList);
            }
            dnaList.push(weightsList);
        }
        return dnaList;
    }
    loadDNA(dna) {
        for (let i = 0; i < this._neuralLayerList.length - 1; i++) {
            let neuralList = this._neuralLayerList[i].neuralList;
            for (let j = 0; j < neuralList.length; j++) {
                let neural = neuralList[j];
                neural.weightList = dna[i][j];
            }
        }
    }
}
export default NeuralNetwork;