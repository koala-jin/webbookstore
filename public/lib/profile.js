const express = require('express')
const path = require('path')

const router = express.Router()
const root = path.join(__dirname, '../../')

// 访问用户界面
router.get('/user', function(req, res) {
	res.sendFile('user.html', { root: root })
})

modul.exports = router
