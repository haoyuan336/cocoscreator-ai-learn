import Neural from "./Neural";

class NeuralLayer {
    constructor(index, info) {
        this.neuralList = [];
        for (let i = 0; i < info[index]; i++) {
            let neural = new Neural(index, info);
            this.neuralList.push(neural);
        }
    }
   
}
export default NeuralLayer;