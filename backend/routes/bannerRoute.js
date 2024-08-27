const express=require('express')
const {createbanner,showbanner,deletebanner}=require('../Controller/bannerController')
const router=express.Router()
router.post("/addbanner",createbanner)
router.get("/showbanner",showbanner)
router.delete("/deletebanner/:id",deletebanner)
module.exports = router