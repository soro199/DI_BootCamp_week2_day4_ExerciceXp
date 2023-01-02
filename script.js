/* Exercise 1 : Information*/

// Part I : function with no parameters

//1) Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe(){

}


//2) The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutMe(){
    
    console.log("je m'appelle Soro, j'ai 26 ans en j'aime le voyage")
}

//1) Call the function.
infoAboutMe()




// Part II : function with three parameters

// 1) Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

function infoAboutPerson(personName, personAge, personFavoriteColor){

}


// 2) The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("je me nomme "+personName+" j'ai "+personAge+" ma couleur preferée est : "+personFavoriteColor)

}

// 3) Call the function twice with the following arguments:
    // infoAboutPerson("David", 45, "blue")
    // infoAboutPerson("Josh", 12, "yellow")

    infoAboutPerson("David", 45, "blue")
    infoAboutPerson("Josh", 12, "yellow")

    /*Exercise 2 : Tips*/


//John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

//1) Create a function named calculateTip() that takes no parameter.

function calculateTip(){

    
}

// 2) Inside the function, use prompt to ask John for the amount of the bill.

function calculateTip(){

    let montant= prompt("Entrez le montant de la facture")

    
}

//3) Here are the rules
    // If the bill is less than $50, tip 20%.
    // If the bill is between $50 and $200, tip 15%.
    // If the bill is more than $200, tip 10%.


   
//4) Console.log the tip amount and the final bill (bill + tip).


function calculateTip(){

    let montant= Number(prompt("Entrez le montant de la facture"))

    
    if(montant<50){

        let pre = montant*0.2 + montant 

        console.log(" le pourboire est : "+ montant*0.2 +" "+ " la facture finale alors " + pre)


    }else if(montant>200){

        let deu = montant*0.1 + montant 
        console.log(" le pourboire est : "+ montant*0.1 +" "+ " la facture finale alors " +deu)

    }else{

        let troi = montant*1.5 +montant
        console.log(" le pourboire est : "+ montant*1.5 +" "+ " la facture finale alors " + troi )
        
    }

    
}


//5) Call the calculateTip() function.

calculateTip()



/* Exercise 3 : Find The Numbers Divisible By 23*/


//1) Create a function call isDivisible() that takes no parameter.

function isDivisible(){


}

//2) In the function, loop through numbers 0 to 500.

function isDivisible(){


    for(let i= 0; i<=500;i++){

        console.log(i)
    }
    
}


//3) Console.log all the numbers divisible by 23.

function isDivisible(){


    for(let i= 0; i<=500;i++){

       if(i%23==0){

        console.log(i)
       }
    }
    
}

isDivisible()

//4) At the end, console.log the sum of all numbers that are divisible by 23.

function isDivisible(){
    let somme=0

    for(let i= 0; i<=500;i++){
    
       if(i%23==0){
        somme+=i
        
        console.log(i)
       }
    }
    
    console.log("somme :"+ somme)
}

//5) Bonus: Add a parameter divisor to the function.

function isDivisible(divisor){
    let somme=0

    for(let i= 0; i<=500;i++){
    
       if(i%divisor==0){
        somme+=i
        
        console.log(i)
       }
    }
    
    console.log("somme :"+ somme)
}


/*Exercise 4 : Shopping List*/



//1) Add the stock and prices objects to your js file.

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



//2) Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.


let shoppingList = ["banane","orange","apple"]

//3) Create a function called myBill() that takes no parameters.


function myBill(){


}

// 4) The function should return the total price of your shoppingList. In order to do this you must follow these rules:
        // 1)The item must be in stock. (Hint : check out if .. in)
        //2) If the item is in stock find out the price in the prices object.

        function myBill(){


            for(i of shoppingList){

              let qty = stock[i]

              if(qty > 0 ){
                        let price = prices[i]

                        console.log("le prix de ", i, " est ", price)
                        console.log("nous avons aussi en stock : ",  stock[i])
                        stock[i]= stock[i] - 1   //6) Bonus: If the item is in stock, decrease the item’s stock by 1
                        console.log(" la nouvelle quantité de " , i, " est ", stock[i])
              } else {
                console.log(" ce produit ", i , " manque en stock")

              } 


            }



        }

// 5)Call the myBill() function.

myBill()


/* Exercise 5 : What’s In My Wallet ? */


//1) Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
        // an item price
        // and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange){






}

//2) In the function, determine whether or not you can afford the item.
        // If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
        // If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false



function changeEnough(itemPrice, amountOfChange){

    let sum = 0

    for(i of amountOfChange){

     let convertisseur       //3) Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    
     

        if(amountOfChange.indexOf(i)==0){ convertisseur=0.25 }
        if(amountOfChange.indexOf(i)==1){ convertisseur=0.10 }
        if(amountOfChange.indexOf(i)==2){ convertisseur=0.05}
        if(amountOfChange.indexOf(i)==3){ convertisseur=0.01}
        sum = sum + i * convertisseur
        
    }

    if(sum > itemPrice){

        console.log(true)
    }else{
        console.log(false)
    }

}

changeEnough(14.11,[2,100,0,0])
changeEnough(0.75,[0,0,20,5])
        

/* Exercise 6 : Vacations Costs*/


// 1) Define a function called hotelCost().
    // It should ask the user for the number of nights they would like to stay in the hotel.
    // If the user doesn’t answer or if the answer is not a number, ask again.
    // The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelcost(){

    let NbreNuit

    while(!nombre(NbreNuit)){

        NbreNuit = prompt("Entrez le nombre de nuit que vous allez passer ici")
    }

    const total = NbreNuit*140
    console.log("L'hotel coute : ", total)

    return total 
  

}


function nombre(str){ 
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)

}




//2) Define a function called planeRideCost().
        // It should ask the user for their destination.
        // If the user doesn’t answer or if the answer is not a string, ask again.
        // The function should return a different price depending on the location.
        // “London”: 183$
        // “Paris” : 220$
        // All other destination : 300$



function planeRideCost(){
    let destination = ""
    while(destination == "" || lettre(destination)){
        destination = prompt("Ou allez-vous ?")
    }

    
    if(destination == "London"){
        console.log("Le billet d'avion coute:", "183$")

       

    }else if(destination == "Paris"){
        console.log("Le billet d'avion coute:", "220$")
        

    }else{
        console.log("Le billet d'avion coute :", "300$")

    } 
    
    

}
function lettre(st){

    const regex = new RegExp(/\d/)
    return regex.test(st)
}





// 3) Define a function called rentalCarCost().
    // It should ask the user for the number of days they would like to rent the car.
    // If the user doesn’t answer or if the answer is not a number, ask again.
    // Calculate the cost to rent the car. The car costs $40 everyday.
    // If the user rents a car for more than 10 days, they get a 5% discount.
    // The function should return the total price of the car rental.


function rentalCarCost(){
let Nbrej
while(!nombre(Nbrej)){

    Nbrej= prompt("Vous voulez louer la  voiture pour combien de jours ")
}

if(Nbrej < 10 ){

    console.log(" La voiture coute :", Nbrej*40)
}else{

    const v= Nbrej*40-Nbrej*0.05

    console.log(" La voiture coute:", v)


}

}






// 1) Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    // Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
    // Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost(){

hotelcost()
planeRideCost()
rentalCarCost()

}




//5) Call the function totalVacationCost()

totalVacationCost()



