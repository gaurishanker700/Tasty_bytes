import React, { useState } from 'react';
import cake from "../../assets/img/cake.jpg";
import axios from 'axios';

export default function AddBanner({ setIsActive, isActive })  {
  const [bannerUrl, setBannerUrl] = useState('');
  const [imageUrl, setImageUrl] = useState(cake);

  const handleAddBanner = async () => {
    if (bannerUrl) {
      setImageUrl(bannerUrl);
      try {
        const res = await axios.post("http://localhost:5000/banner/addbanner", { imageUrl: bannerUrl });
        console.log("Banner added successfully", res.data);
      } catch (error) {
        console.error("Error adding banner:", error.response ? error.response.data : error.message);
      }
      setBannerUrl('');
    }
  };

  const handleDeleteBanner = async () => {
    try {
      const res = await axios.post("http://localhost:5000/banner/deletebanner", { imageUrl });
      console.log("Banner deleted successfully", res.data);
      setImageUrl(cake); // Reset to default image
    } catch (error) {
      console.error("Error deleting banner:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
<main id="main" className={`main mainWrapper ${isActive === true && 'active'}`}>
   
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div className="productcard">
        <div className="productinner-card">

          <div className="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>Add Banner</h4>
            <span className="productheart">
              <i className="fa fa-heart"></i>
            </span>
          </div>

          <div className="px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter banner URL"
              value={bannerUrl}
              onChange={(e) => setBannerUrl(e.target.value)}
            />
          </div>

          <div className="px-2 mt-3">
            <button onClick={handleAddBanner} className="btn-product btn-primary px-3">
              Submit
            </button>
            <button onClick={handleDeleteBanner} className="btn btn-outline-primary px-3">
              Delete Banner
            </button>
          </div>

          {imageUrl && (
            <div className="mt-4 text-center px-2">
              <h5>Banner Preview</h5>
              <img 
                src={imageUrl} 
                alt="Banner Preview" 
                className="img-fluid mt-2 rounded" 
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
    </main>
    </div>
    
  );
}
