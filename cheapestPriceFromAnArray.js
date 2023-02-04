const phones =[
    {name:'samsung',camera:13,storage:'32gb',price:36000,color:'blue'},
    {name:'walton',camera:13,storage:'32gb',price:16000,color:'blue'},
    {name:'iphone',camera:13,storage:'32gb',price:96000,color:'blue'},
    {name:'Oppo',camera:13,storage:'32gb',price:26000,color:'blue'},
    {name:'xaomi',camera:13,storage:'32gb',price:46000,color:'blue'},
    {name:'HTc',camera:13,storage:'32gb',price:76000,color:'blue'},
    {name:'Nokia',camera:13,storage:'32gb',price:44000,color:'blue'},
]


function cheapestPrice(phones){
    let cheapest =phones[0];
    for(let i=0;i<phones.length;i++){
        const element =phones[i];
        // console.log(element)
        if(element.price<cheapest.price){
            cheapest=element;
            console.log("cheapest phone is",cheapest.name,"Price ",cheapest.price)
        }
    }
    return cheapest;

}
const mySelection =cheapestPrice(phones)
 