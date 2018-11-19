'use strict';
let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    // Users
    userRol : { type: String, required: true },
    userEmail : { type: String, required: true, unique: true },
    userID : { type: String, required: true, unique: true },
    userFirstName : { type: String, required: true },
    userMiddleName : { type: String, required: false },
    userSurname : { type: String, required: true },
    userSecondSurname : { type: String, required: false },
    userBirthdate : { type: String, required: true },
    userAge : { type: String, required: true },
    userCellPhone : { type: String, required: true },
    userPassword : { type: String, required: true },
    userImage : { type: String, required: false },
    userProvince : { type: String, required: true },
    userCanton : { type: String, required: true },
    userDistrict : { type: String, required: true },
    userAccount : { type: String, required: true },
    userBanned : { type: String, required: true },

});

module.exports = mongoose.model('User', userSchema);