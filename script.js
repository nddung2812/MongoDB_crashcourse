const mongoose = require('mongoose');
const User = require('./User')
mongoose.connect('mongodb://127.0.0.1:27017/testdb');

async function run() {
    // const user = new User({name: "Johnny", age: 26});
    // await user.save()
    try {
        // query level method
        // const user = await User.find().byName("Johnny")

        //simple level method
        // const user = await User.findOne({name: "Johnny"})
        // user.sayHi()

        // static level method
        // const user = await User.findByName("Johnny")
        // console.log(user)

        // Virtual level method
        const user = await User.findOne({ name: "Johnny"})
        await user.save();
        console.log(user, "test")
        

    } catch (e) {
        console.log(e.message)
    }
    
}
run()
