const express = require('express')
const router = express.Router()
const { postData, getData, updateData, deleteData} = require('../controller/controller.js')

router.post('/post', postData)

router.get('/get', getData)

router.put('/update/:id', updateData)

router.delete('/delete/:id', deleteData)

module.exports = router