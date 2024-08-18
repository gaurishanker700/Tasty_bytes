// controllers/reviewController.js

const Review = require('../Model/Reviewmodel');
const Product = require('../Model/Productmodel');

// Controller to get reviews for a specific product
getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const reviews = await Review.find({ product: productId })
    .populate('user')
    .populate('product');
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to add a review for a product
addReview= async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const userId = req.decoded; // Assuming req.decoded contains the user ID

    // Check if the user has already reviewed this product
    const existingReview = await Review.findOne({ user: userId, product: productId });
    if (existingReview) {
      return res.status(400).json({
        message: 'You have already reviewed this product',
      });
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Create a new review
    const newReview = new Review({
      user: userId,
      product: productId,
      rating,
      comment,
    });

    await newReview.save();

    res.json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to update a review
updateReview = async (req, res) => {
  try {
    const { reviewId } = req.body;
    const { rating, comment } = req.body;
    const userId = req.body.userId; 

  
    const review = await Review.findOne({ _id: reviewId, user: userId });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Update the review
    review.rating = rating;
    review.comment = comment;

   
    await review.save();

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a review
deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.body;
    

   
    const review = await Review.findOne({ _id: reviewId});
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Remove the review
    await review.deleteOne();

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// get all the Review
getallReview = (req,res)=>{
  
  Review.find(req.body)
  .populate("user")
  .populate('product')
  .then(data=>{
      res.json({
          'status':200,
          'success':true,
          'msg':'data loaded',
          'data':data
      })
  })
  .catch(err=>{
      res.json({
          status:500,
          success:false,
          msg : 'Error Occur',
          error : String(err)
      })
  })
  
}

const updateReviewStatus = async (req, res) => {
  try {
    const formData = req.body;

    if (!formData._id || !formData.status) {
      return res.status(422).json({
        success: false,
        status: 422,
        message: "Both _id and status are required",
      });
    }

    const revie = await Review.findOne({ _id: formData._id });

    if (!revie) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "No revie Found",
      });
    }

    revie.status = formData.status;
    await revie.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "revie Status Changed Successfully",
      data: revie,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = {
    getReviewsByProduct,
    addReview,
    updateReview,
    deleteReview,
    getallReview,
    updateReviewStatus
  
  }