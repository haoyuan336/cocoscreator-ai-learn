import NeuralLayer from "./NeuralLayer";

class NeuralNetwork{
    constructor(){
        this._neuralLayerList = [];
        const info = [4, 2];
        for (let i = 0 ;i < 2 ; i ++){
            this._neuralLayerList.push(new NeuralLayer(i, info));
        }
        
    }
    
}
export default NeuralNetwork;