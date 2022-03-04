const express = require("express")
const router = express.Router();
const Chat = require("../models/Chat")

// create post 
router.post("/", async (req, res) => {
    const newPost = new Chat(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Chat.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all posts
router.get("/", async (req, res) => {
    let posts;
    try {
        posts = await Chat.find()
        res.status(200).json(posts) 
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router