const express = require('express')
const Todo = require('../models/Todo')
const router = express.Router()
router.get('/', (req, res)=>{
    Todo.find().then(data => {
        res.json(data)
    }).catch(e => {
        res.json({message : e})
    })
})
router.post('/', (req, res)=>{
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        done: false
    })
    todo.save().then(data => {
        res.json(data)
    }).catch(e => {
        res.json({message: e})
    })
})
router.patch('/:id', (req, res) => {
    Todo.updateOne({_id: req.params.id}, {
            $set: {
                title: req.body.title, 
                description: req.body.description, 
                done: req.body.done
            }
        }).then(data => {
                res.json(data)
        }).catch(e => {
                res.json({message: e})
        })
})
router.delete('/:id', (req, res)=>{
    Todo.deleteOne({_id: req.params.id})
    .then(data => {
        res.json(data)
    }).catch(e => {
        res.json({message: e})
    })
})
module.exports = router;