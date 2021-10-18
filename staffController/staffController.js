// https://www.youtube.com/watch?v=TLdIqIfJmko
const Staff = require('../config/config');
const Staffs = require('../models/staff');
// const uuid = require('uuid');
// const firebase = require('firebase-admin');

const addStaff = async function(req,res){
  try{
    let data = req.body;
    data.id=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    console.log(data)
    const result = await Staff.add(data);
    res.status(200).json({result,message:"data saved sexsexfully"});
  }catch(err){
    res.status(404).json('something went wrong');
  }
}

const getAllStaffDetails = async function(req,res){
  try{
    //querySnapshot
    const data = await Staff.get();
    //documentSnapshot
    const result = data.docs;
    const staffArray = []
    if(result.empty){
      res.status(404).json('data not found');
    }else{
      result.forEach(function(items){
        console.log('itemsss',items)
        const staff = new Staffs(
          items.data().name,
          items.data().age,
          items.data().country,
          items.data().email,    
          items.data().id
        )
        staffArray.push(staff);
      })
      res.status(200).json({
        message:"data reterived sucessfully",
        staffArray
      });
    }
  }catch(err){
    res.status(400).json(err)
  }
}

const getSingleUser =async function(req,res){
// const id = req.params.id
const { id} = req.params

console.log("id",id)
console.log(typeof(id))
// const id = '3VG8pDwVRezdbDVfcwb5'
const data = await Staff.doc(id).get();
// const data = await Staff.get();
console.log('data',data);

console.log(data.empty)
if(!data.exists){
  res.status(404).json('data not found');
}else{
  console.log('test')

  res.status(200).json(data.data());
  

  // res.json(data.data());
  // res.json(data.docs)
}

  // const { id } = req.params;
  // console.log("id",id)
  // const data =await Staff.doc(id);
  // console.log('data',data)
  // const result =await data.get();
  // console.log(result)
  // if(!result.exists){
  //   res.status(404).json("student with given id not found")
  // }else{
  //   res.json(result);
  // }
}

module.exports = {
  addStaff,
  getAllStaffDetails,
  getSingleUser
}