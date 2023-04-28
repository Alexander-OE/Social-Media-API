const router = require("express").Router()

// update user
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.user.isAdmin){

    }else{
        return res.status(403)
    }
})
// delete user
//get a user
// follow a user
// unfollow a user

module.exports = router;