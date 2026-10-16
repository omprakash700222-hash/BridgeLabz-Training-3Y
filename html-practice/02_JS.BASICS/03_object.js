const person1={
    username:"user_123",
    email:"user@gmail.com",
    age:20,
    subscriptions:{
        netflix: "Gold",
        amazonprime:"basics"
        
    },
    show: function showDetail(){
        console.log("this is user:"+this.username + "age is:" + this.age)
    }
}

const person2={
    username:"user_333",
    email:"user@gmail.com",
    age:30,
    subscriptions:{
        netflix: "Gold",
        amazonprime:"basics"
        
    },
    show: function showDetail(){
        // console.log("this is user:"+this.username + "age is:" + this.age)
        return this.age
    }
}


console.log(person1.show())
const userInfo=person2.show()
console.log("this is person2 info:",userInfo)

person1.address="Agra" 
console.log(person1["email"])

delete person1.username
console.log(person1)
















const task = {
    customerName: "Raj",
    movieName: "Avengers",
    ticketPrice: 250,
    quantity: 3,

    customer: {
        email: "user@gmail.com",
        city: "Agra"
    },

    seats: [101, 102, 103],

    calculateTotalAmount: function() {
        return this.ticketPrice * this.quantity;
    }
};

// 1. Print movie name using dot notation
console.log(task.movieName);

// 2. Read customer's city using nested property access
console.log(task.customer.city);

// 3. Change ticket price and add bookingStatus property
task.ticketPrice = 300;
task.bookingStatus = "Confirmed";

// 4. Print all object keys
console.log(Object.keys(task));

// 5. Destructure movieName and quantity
const { movieName, quantity } = task;
console.log(movieName, quantity);

// 6. Calculate and print total booking amount
console.log(task.calculateTotalAmount());