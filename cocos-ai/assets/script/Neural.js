class Neural{
    constructor(index, info){
        this._value = 0;
        if (index == info.length - 1 ){

        }else{
            this._weightList = [];
        }
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
        
    }
    getWeightList(){
        return this._weightList;
    }

}
export default Neural;