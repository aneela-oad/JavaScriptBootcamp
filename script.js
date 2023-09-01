class caloryTracker {
    constructor(maxCalories){
        this.maxCalories =  maxCalories;
        this.currentCalories = 0;
    }
    trackCalories(){
        let caloryCount = 2
        this.currentCalories = +caloryCount;
        if(this.currentCalories > this.maxCalories){
            console.log('Max calories exceed!');
        }
    }

}


const ct  = new caloryTracker(300);
ct.trackCalories(400)