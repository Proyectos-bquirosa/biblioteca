'use strict';
const express = require('express');
const router = express.Router();
const usersApi = require('./users.api');

router.route('/registerUser')
    .post(function (req, res) {
        usersApi.registerUser(req, res);
    });


router.route('/listUsers')
.get(function (req, res) {
    usersApi.listUsers(req, res);
});


module.exports = router;