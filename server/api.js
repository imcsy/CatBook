/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const MY_NAME = "Tina";
let data = {
    stories: [
        {
            _id: 0,
            creator_name: "nobody",
            content: "I love corgi",
        },
        {
            _id: 1,
            creator_name: "sombody",
            content: "I donttttt like corgi",
        }
    ],
    comments:[
        {
            _id: 0,
            creator_name: "audience",
            parent: 0,
            content: "Me 2",
        },
        {
            _id: 1,
            creator_name: "attacker",
            parent: 0,
            content: "Me 3",
        }
    ],
}

const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ message: "Wow I made my first API! In api.js" });
});

router.get("/stories", (req, res) => {
  res.send(data.stories);
});

router.get("/comment", (req, res) => {
    res.send(
        data.comments.filter(com => com.parent == req.query.parent)
    );
});

router.post("/story", (req, res) => {
    const myStory = {
        _id: data.stories.length,
        creator_name: MY_NAME,
        content: req.body.content
    }

    data.stories.push(myStory);
    res.send(myStory);
})

router.post("/comment", (req, res) => {
    const myComment = {
        _id: data.comments.length,
        creator_name: MY_NAME,
        parent: req.body.parent,
        content: req.body.content
    }

    data.comments.push(myComment);
    res.send(myComment);
})

router.all("*",  (req, res) => {
    console.log("not here");
    console.log(`API not found: ${req.method} ${req.url}`);
    res.status(404).send({messgae: "API Router not found"});
})

module.exports = router;