const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new Coversation
router.post("/", async (req, res) => {
const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
    
})
});

//get conversation of a user

module.exports = router;
