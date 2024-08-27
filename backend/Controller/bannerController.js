const Bannermodal=require('../Model/Bannermodal')
// import { createGraph } from './../../admin/assets/vendor/echarts/echarts.simple';

const createbanner = async (req, res) => {
    try {
        
        const { imageUrl } = req.body;
        if (!imageUrl) return res.status(404).json({ message: "Please provide banner URL" });

        const banner = await Bannermodal.create({ imageUrl });
        res.status(200).json({ message: "Banner created successfully", banner });
    } catch (error) {
        res.status(500).json({ message: "Error creating banner", error });
    }
};

const showbanner=async(req, res) => {
    try {
        const banner =await Bannermodal.find()
        const last = banner.length;
        const imageLink = banner[last-1].imageUrl;
        console.log(banner, "   ", last, "   ", imageLink);
        res.status(200).json(imageLink)
        
    } catch (error) {
        res.status(404).json({message:"error fetching banners",error})

        
    }
}



const deletebanner=async(req,res) => {
    try {
        const {id}=req.params;
        if(!id) return res.status(404).json({message:"please provide banner id"})
            const banner =await Bannermodal.findByIdAndDelete(id)
        res.status(200).json({message:"banner deleted successfully",banner})

        
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
        
    }
}
module.exports={createbanner,showbanner,deletebanner}
