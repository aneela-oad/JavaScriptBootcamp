class Bird{
    fly(){
        console.log('I can fly');
    }
}
class Duck extends Bird{

}
class Penguin extends Bird{
    fly(){
       throw new Error('I can not fly')
    }
}

const dk = new Duck();
const pg = new Penguin();

dk.fly()
pg.fly()