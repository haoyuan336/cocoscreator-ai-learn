import NeuralLayer from "./NeuralLayer";

class NeuralNetwork{
    constructor(info){
        this._neuralLayerList = [];
        for (let i = 0 ; i < info.length ; i ++){
            this._neuralLayerList.push(new NeuralLayer(info));
        }
    }
    
}
export default NeuralNetwork;