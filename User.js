const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 5,
        max: 90,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema
})

// Add methods for each instance Schema
userSchema.methods.sayHi = function() {
    console.log(`Hi, my name is ${this.name}!`)
}

userSchema.statics.findByName = function(name) {
    return this.where({ name: new RegExp(name, 'i')})
}

userSchema.query.byName = function (name) {
    return this.where({ name: new RegExp(name, 'i')})
}

module.exports = mongoose.model("User", userSchema);

