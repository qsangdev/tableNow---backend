const ProfileRestaurent = require("../models/ProfileRestaurantModel")

const createProfileRestaurent = (newProfileRestaurent) => {
    return new Promise(async (resolve, reject) => {
        const { restaurentName, restaurentAdress, restaurentTable, openTime, closeTime, restaurentDescribe } = newProfileRestaurent
        try{
            const checkProfileRestaurent = await ProfileRestaurent.findOne({
                restaurentName: restaurentName
            })
            if (checkProfileRestaurent !== null){
                resolve({
                    status: 'Ok',
                    message: 'The ProfileRestaurent is already'
                })
            }
            const createdProfileRestaurent = await ProfileRestaurent.create({
                restaurentName, 
                restaurentAdress, 
                restaurentTable, 
                openTime, 
                closeTime, 
                restaurentDescribe
            })
            if (createdProfileRestaurent){
                resolve({
                    status: 'OK',
                    message:'SUCCESS',
                    data: createdProfileRestaurent
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}


const updateProfileRestaurent = (id, data) => {
    return new Promise(async (resolve, reject) => {
        
        try{
            const checkProfileRestaurent = await ProfileRestaurent.findOne({
                _id: id
            })
            if (checkProfileRestaurent === null){
                resolve({
                    status: 'Ok',
                    message: 'The ProfileRestaurent is not defined'
                })
            }

            const updateProfileRestaurent = await ProfileRestaurent.findByIdAndUpdate(id, data, {new: true})    
                
                resolve({
                    status: 'OK',
                    message:'SUCCESS',
                    data: updateProfileRestaurent
                })
            
        } catch (e) {
            reject(e)
        }
    })
}


const getDetailsProfileRestaurent = (id, data) => {
    return new Promise(async (resolve, reject) => {
        
        try{
            const profile = await ProfileRestaurent.findOne({
                _id: id
            })
            if (profile === null){
                resolve({
                    status: 'Ok',
                    message: 'The profile is not defined'
                })
            }  
                
                resolve({
                    status: 'OK',
                    message:'SUCCESS',
                    data: profile
                })
            
        } catch (e) {
            reject(e)
        }
    })
}

const deleteProfileRestaurent = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try{
            const checkProfileRestaurent = await ProfileRestaurent.findOne({
                _id: id
            })
            if (checkProfileRestaurent === null){
                resolve({
                    status: 'Ok',
                    message: 'The ProfileRestaurent is not defined'
                })
            }

            await ProfileRestaurent.findByIdAndDelete(id)    
                
                resolve({
                    status: 'OK',
                    message:'DELETE SUCCESS',
                    data: deleteProfileRestaurent
                })
            
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createProfileRestaurent,
    updateProfileRestaurent,
    getDetailsProfileRestaurent,
    deleteProfileRestaurent
  };
  