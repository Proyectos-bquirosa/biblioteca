'use strict';
const usersModel = require('./users.model');

module.exports.registerUser = function (req, res) {

    let newUser = new usersModel({

        userRol: req.body.userRol,
        userEmail: req.body.userEmail,
        userID: req.body.userID,
        userFirstName: req.body.userFirstName,
        userMiddleName: req.body.userMiddleName,
        userSurname: req.body.userSurname,
        userSecondSurname: req.body.userSecondSurname,
        userBirthdate: req.body.userBirthdate,
        userAge: req.body.userAge,
        userCellPhone: req.body.userCellPhone,
        userPassword: req.body.userPassword,
        userImage: req.body.userImage,
        userProvince: req.body.userProvince,
        userCanton: req.body.userCanton,
        userDistrict: req.body.userDistrict,
        userAccount: req.body.userAccount,
        userBanned: req.body.userBanned,

    });

    newUser.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error: ' + error });
        } else {
            res.json({ success: true, msg: 'El usuario se registró con éxito' });
        }
    });
};

module.exports.listUsers = function (req, res) {
    usersModel.find({ userID: req.params.userID }).sort({ userFirstName: 'asc' }).then(
        function (users) {
            res.send(users);
        }
    );

};