import React, { useState } from 'react';
import cake from "../../assets/img/cake.jpg";
import axios from 'axios';

const AddBanner = () => {
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
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <div className="card w-100 max-w-md p-4 shadow">
        <h1 className="h4 text-center mb-4">Add Banner</h1>

        <div className="mb-3">
          <label htmlFor="banner-url" className="form-label">Banner URL</label>
          <input
            type="text"
            id="banner-url"
            className="form-control"
            placeholder="Enter banner URL"
            value={bannerUrl}
            onChange={(e) => setBannerUrl(e.target.value)}
          />
        </div>

        <div className="d-grid mb-3">
          <button
            onClick={handleAddBanner}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>

        {imageUrl && (
          <div className="mt-4 text-center">
            <h5>Banner Preview</h5>
            <img 
              src={imageUrl} 
              alt="Banner" 
              className="img-fluid mt-2" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
            <button
              onClick={handleDeleteBanner}
              className="btn btn-danger mt-2"
            >
              Delete Banner
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBanner;
