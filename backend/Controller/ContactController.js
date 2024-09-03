const Contact = require("../Model/Contactmodel")

const contact = async (req, res) => {
  try {
    const { name, email, phone, query } = req.body;
    console.log('Received contact request:', { name, email, phone, query }); // Debug log

    if (!name || !email || !phone || !query) {
      return res.status(400).json({ "error": "Please fill in all fields" });
    }

    // Creating contact entry in the database
    const contacts = await Contact.create({ 
      name,
      email,
      phone,
      query
    });

    console.log('Contact created successfully:', contacts); // Success log
    res.status(201).json({ 
      success: true,
      message: "Contact created successfully",
      contacts
    });

  } catch (error) {
    console.error('Error creating contact:', error); // Error log
    res.status(500).json({ "error": "Internal Server Error" });
  }
};


const getallcontacts = async(req,res)=>{
  try {
    
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      contacts,
      msg:"all contacts"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      msg:"Internal Server Error"
    })
    
  }
}

getsinglecontacts = (req,res)=>{
  
    Contact.find({_id:req.body._id})
    .exec()
    .then(contactdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':contactdata
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


  deleteContact = (req, res) => {
    var validation = "";
    if (req.body._id == "") {
      validation += "ID is required \n";
    }
    if (!!validation) {
      res.json({
        status: 409,
        success: false,
        msg: validation,
      });
    } else {
      //check whether data exists or not wrt particular id
      Contact.findOne({ _id: req.body._id })
        .then((contactdata) => {
          if (contactdata == null) {
            res.json({
              status: 409,
              success: false,
              msg: "Data not found",
            });
          } else {
            //Delete
            Contact.deleteOne({ _id: req.body._id })
              .then((data) => {
                res.json({
                  status: 200,
                  success: true,
                  msg: "Record Deleted",
                });
              })
              .catch((err) => {
                res.json({
                  status: 500,
                  success: false,
                  msg: "Error",
                  error: String(err),
                });
              });
          }
        })
        .catch((err) => {
          res.json({
            status: 500,
            success: false,
            msg: "Error",
            error: String(err),
          });
        });
    }
  };

  latestContact= (req, res) => {
    Contact.find()
      .sort({ created_at: -1 }) 
      .limit(3) 
      .exec()
      .then((latestmsg) => {
        res.json({
          status: 200,
          success: true,
          msg: "Latest Message loaded",
          data: latestmsg,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          success: false,
          msg: "Error",
          error: String(err),
        });
      });
  };
module.exports = {
    contact,
    getallcontacts,
    deleteContact,
    getsinglecontacts,
    latestContact

}