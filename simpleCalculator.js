function priceCalculator(tomato,potato,rice){
    const perKgTomato=30;
    const perKgPotato=25;
    const perKgRice =60;

    const potatoMarket=perKgPotato*potato;
    const tomatoMarket=perKgTomato*tomato;
    const riceMarket=perKgRice*rice;

    const totalMarket = potatoMarket+tomatoMarket+riceMarket;
    return totalMarket;
}
const totalValue =priceCalculator(2,3,4);
console.log(totalValue)