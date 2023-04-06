
const express = require("express")
const router = express.Router()
const ProfileRestaurentController = require('../controllers/ProfileRestaurentController')

router.post('/create', ProfileRestaurentController.createProfileRestaurent)
router.put('/update/:id', ProfileRestaurentController.updateProfileRestaurent)
router.get('/get-details/:id', ProfileRestaurentController.getDetailsProfileRestaurent)
router.delete('/delete-restaurent/:id', ProfileRestaurentController.deleteProfileRestaurent)



module.exports = router