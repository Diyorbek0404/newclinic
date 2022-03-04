const router = require("express").Router();
const Reklama = require("../models/Reklama")

router.post("/", async (req, res) => {
    const newPost = new Reklama(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const post = await Reklama.findByIdAndDelete(req.params.id)
        res.status(200).json("sizning postingiz o'chdi")
    }
    catch (error) {
        res.status(500).json(error)

    }
})
router.get("/:id", async (req, res) => {
    try {
        const post = await Reklama.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all posts
router.get("/", async (req, res) => {
    let posts;
    try {
        posts = await Reklama.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router