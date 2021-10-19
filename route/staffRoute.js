const express = require('express');
const { addStaff, getAllStaffDetails, getSingleUser, updateStaffDetails, updateAllStaffDetails, deleteStaffDetails, deleteAllStaffDetails } = require('../staffController/staffController');
const route = express.Router();
route.post('/post', addStaff);
route.get('/getAll',getAllStaffDetails);
route.get('/get:id',getSingleUser);
route.put('/update:id',updateStaffDetails);
route.put('/update',updateAllStaffDetails);
route.delete('/delete/:id',deleteStaffDetails)
route.delete('/delete',deleteAllStaffDetails)
module.exports = route;