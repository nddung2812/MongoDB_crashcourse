const mongoose = require('mongoose');
const User = require('./User')
mongoose.connect('mongodb://127.0.0.1:27017/testdb');

async function run() {
    // const user = new User({name: "Johnny", age: 26});
    // await user.save()
    try {
        // const user = await User.create({
        //     name: "Johnny", 
        //     age: 36,
        //     email: "johnnytest@test.com",
        //     hobbies: ["Weight Lifting", "Fishing"],
        //     address: {
        //         street: "Hope St"
        //     }
        // })
        const user = await User.find().byName("Johnny")
        // user.sayHi();
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
    
}
run()
