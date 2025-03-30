//ternary
const playerguess = 25
const correctanswer = 25

const messages = playerguess > correctanswer ? "Too high"
:playerguess < correctanswer ? "Too low"
:"Exactly right"
console.log(messages)



function productprice(item){
    let price = 0
    switch (item){
        case "coffee":
            price = 10
            break
    }
    return `the price for ${item} is $${price}`
}
console.log(productprice('coffee'))