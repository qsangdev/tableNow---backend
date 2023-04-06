const ProfileRestaurentSevice = require("../services/ProfileRestaurentSevice");

const createProfileRestaurent = async (req, res) => {
  try {
    const { restaurentName, restaurentAdress, restaurentTable, openTime, closeTime, restaurentDescribe } = req.body;    
    
    if (!restaurentName || !restaurentAdress || !restaurentTable || !openTime || !closeTime || !restaurentDescribe) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await ProfileRestaurentSevice.createProfileRestaurent(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};



const updateProfileRestaurent = async (req, res) => {
    try {
      const profileId = req.params.id
      const data = req.body
      if(!profileId){
        return res.status(200).json({
          status: "ERR",
          message: "The profileId is required",
        });
      }
  
      const response = await ProfileRestaurentSevice.updateProfileRestaurent(profileId, data);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };



const getDetailsProfileRestaurent = async (req, res) => {
    try {
      const profileId = req.params.id
      if(!profileId){
        return res.status(200).json({
          status: "ERR",
          message: "The profileId is required",
        });
      }
  
      const response = await ProfileRestaurentSevice.getDetailsProfileRestaurent(profileId);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
  };
  


const deleteProfileRestaurent = async (req, res) => {
    try {
      const profileId = req.params.id
      if(!profileId){
        return res.status(200).json({
          status: "ERR",
          message: "The profileId is required",
        });
      }
  
      const response = await ProfileRestaurentSevice.deleteProfileRestaurent(profileId);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(404).json({
        message: e,
      });
    }
}

module.exports = {
  createProfileRestaurent,
  updateProfileRestaurent,
  getDetailsProfileRestaurent,
  deleteProfileRestaurent
};
