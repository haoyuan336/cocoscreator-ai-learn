class Neural{
    constructor(){
        this._value = 0;
        this._weightList = [];
    }
    setRandomWeightList(){
        this._weightList.forEach((v, k)=>{
            v = this.getRandomWeight();
        });
        console.log("weight list ", this._weightList);
    }
    getRandomWeight(){
        return Math.random() * 2 - 1;
    }
    getValue(){
        return this._value;
    }
    getWeight(){
        return this._weight;
    }

}
export default Neural;