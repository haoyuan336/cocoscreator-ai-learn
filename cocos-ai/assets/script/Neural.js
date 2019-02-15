class Neural {
    constructor(index, info) {
        this.value = 0;
        if (index < info.length - 1) {
            this.weightList = [];
            for (let i = 0; i < info[index + 1]; i++) {

                this.weightList.push(1);
            }
            this.setRandomWeightList();
        } 
    }
    setRandomWeightList() {
        for (let i = 0; i < this.weightList.length; i++) {
            this.weightList[i] = Math.random() * 2 - 1;
        }
    }
    getRandomWeight() {
        return Math.random() * 2 - 1;
    }
}
export default Neural;