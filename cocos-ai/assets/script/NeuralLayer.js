import Neural from "./Neural";

class NeuralLayer {
    constructor(index, info) {
        this._neuralList = [];
        for (let i = 0; i < info[index]; i++) {
            let neural = new Neural(i, info);
            this._neuralList.push(neural);
        }
    }
}
export default NeuralLayer;