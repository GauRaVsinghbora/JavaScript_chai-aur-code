const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const myShoppingCart = [
    {
        itemName:"Js course",
        price:2999,
    },
    {
        itemName:"App dev course",
        price:5999,
    },
    {
        itemName:"mobile dev course",
        price:12999,
    },
    {
        itemName:"Communication course",
        price:14999,
    }
]

const priceToPay = myShoppingCart.reduce( (acc , item)=> acc + item.price,0) ;
console.log(`You have to Pay: ${priceToPay.toLocaleString('en-in')}`);