class Store{
    constructor(user){
        this.strp = new Stripe(user)
        this.Pal = new PayPal();
        this.usr = user
    }

    purchaseBike(quantity){
        this.Pal.makePayment(this.usr, quantity);
        this.strp.makePayment(4);
    }
}



class Stripe{
    constructor(user){
        this.user = user
    }
    makePayment(quantity){
        console.log(`${this.user} made payment of ${quantity*50} with Stripe` );
    }
        
}
class PayPal{
    makePayment(user, quantity){
        console.log(`${user} made payment of ${quantity} Bikes with cost of ${quantity*100} with Payapl` );
    }
}

const store = new Store('Ali');
store.purchaseBike(3)
