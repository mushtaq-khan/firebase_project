const express = require('express');
const { addStaff, getAllStaffDetails, getSingleUser } = require('../staffController/staffController');
const route = express.Router();
route.post('/post', addStaff);
route.get('/getAll',getAllStaffDetails);
route.get('/get:id',getSingleUser);
module.exports = route;