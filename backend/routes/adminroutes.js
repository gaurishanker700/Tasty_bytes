const router=require("express").Router()
const multer = require("multer")
const usercontroller= require ("../Controller/UserController")
const contactcontroller = require ("../Controller/ContactController")
const testcontroller = require('../Controller/TestimonialController')
const reviewcontroller= require("../Controller/ReviewController")
const productcontroller= require("../Controller/ProductController")
// ---------- Userimage multer start----------
const userstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Customer_photo')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  const userupload = multer({ storage: userstorage })
  // ---------- userimage multer end----------
 // ---------- Testimonial multer end----------
  
 const TestImagestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Testimonial_Image')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file)
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})
const TastImageupload = multer({ storage: TestImagestorage })
// ---------- Testimonial multer end----------
   // ---------- Product multer start----------
   const productstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Product_Image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  const productupload = multer({ storage: productstorage })
  // ---------- Product multer end----------
router.post("/register",userupload.single('Image'),usercontroller.register)
router.post("/login",usercontroller.login)
router.post("/adduser",userupload.single('Image'),usercontroller.adduser)
router.post("/contact",contactcontroller.contact)
router.post("/getallTestimonial",testcontroller.getallTestimonial)
router.post("/getReviewsByProduct",reviewcontroller.getReviewsByProduct)
router.post("/getallProduct",productcontroller.getallProduct)
router.post("/getsingle-Product", productcontroller.getsingleProduct)
// =====================middleware start===========================
router.use(require('../Middleware/middleware'))
// =====================middleware end===========================


// -----------user routes --------------
router.post("/getalluser",usercontroller.getalluser)
router.post("/getallcustomer",usercontroller.getallcustomer)
router.post("/getsingleuser",usercontroller.getsingleuser)
router.post("/deleteuser",usercontroller.deleteuser)
router.post("/deletecustomer",usercontroller.deletecustomer)
router.post("/changeStatus",usercontroller.changeStatus)
router.post("/changepassword",usercontroller.changepassword)
router.post("/updateuser",userupload.single('Image'),usercontroller.updateuser)
// ----------Product Start---------
router.post("/add-Product",productupload.single('Image'),productcontroller.addProduct)
router.post("/updateProduct",productupload.single('Image'),productcontroller.updateProduct)
router.post("/delete-Product",productcontroller.deleteProduct)
router.post("/update-Product-Status",productcontroller.updateProductStatus)

// ============contact Start--------------

router.post("/get-all-contacts",contactcontroller.getallcontacts)
router.post("/deleteContact",contactcontroller.deleteContact)
router.post("/getsinglecontacts",contactcontroller.getsinglecontacts)
router.post("/latestContact",contactcontroller.latestContact)

// -------testimonial Router start------------
router.post("/addTestimonial",TastImageupload.single('Image'),testcontroller.addTestimonial)
router.post("/updateTestimonial",TastImageupload.single('Image'),testcontroller.updateTestimonial)
router.post("/getsingleTestimonial",testcontroller.getsingleTestimonial)
router.post("/deleteTestimonial",testcontroller.deleteTestimonial)
router.post("/updatetestimonialStatus",testcontroller.updatetestimonialStatus)
// -------testimonial Router End------------

// ----------Review Start---------
// router.post("/addReview",reviewcontroller.addReview)
// router.post("/updateReview",reviewcontroller.updateReview)
// router.post("/delete-Review",reviewcontroller.deleteReview)
// router.post("/get-all-Review",reviewcontroller.getallReview)
// router.post("/update-Review-Status",reviewcontroller.updateReviewStatus)
// ----------Review end---------
module.exports=router