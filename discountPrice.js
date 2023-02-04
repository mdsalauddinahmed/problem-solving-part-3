function ticketPrice(ticketQuantity){
   const first100Rate =100;
   const second100Rate =90;
   const restTicketRate =70;
   if(ticketQuantity<=100){
    const price = ticketQuantity*first100Rate;
    return price;
   }else if(ticketQuantity<=200){
    const first100Price =100*first100Rate;
    const restTicketQuantity =ticketQuantity-100;
    const restTicketPrice =restTicketQuantity*second100Rate;
    const totalPrice =first100Price+restTicketPrice;
    return totalPrice;
   }else{
    const first100Price =100*first100Rate;
    const secondTicketPrice =100*second100Rate;
    const restTicketQuantity=ticketQuantity-200;
    const restTicketPrice=restTicketQuantity*restTicketRate;
    const totalPrice =first100Price+secondTicketPrice+restTicketPrice;
    return totalPrice
   }
    
}
 const totalPrice=ticketPrice(202);
 console.log(totalPrice)