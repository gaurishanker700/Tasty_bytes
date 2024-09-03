const express = require('express');
const { contact, getallcontacts } = require('../Controller/ContactController');
const router= express.Router()
router.post("/create",contact)
router.get("/show",getallcontacts)
module.exports=router