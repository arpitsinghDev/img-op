import { useState, useEffect } from "react";
import PreviewImg from "./PreviewImg";
import axios from "axios";
import ImageDrag from "./ImageDrag";
import RangeSlider from "./RangeSlider";
import DownloadOptimizeFile from "./DownloadOptimizeFile";
const API_URL = import.meta.env.VITE_API_URL;

export default function MainForm() {
  const [images, setImages] = useState([]);
  const [optimizeImage, setOptimizeImage] = useState([]);
  const [rangeValue, setRangeValue] = useState(80);
  const [error, setError] = useState(null);

  const handleRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Reset Images
  const handleReset = () => {
    images.forEach((image) => URL.revokeObjectURL(image.preview));
    setImages([]);
  };

  // Cleanup Object URLs to prevent memory leaks
  useEffect(() => {
    return () => images.forEach((image) => URL.revokeObjectURL(image.preview));
  }, [images]);
  // Optimize & Upload Images
  const optimizeImagesHandler = async () => {
    if (images.length === 0) {
      alert("No images selected.");
      return;
    }
    const formData = new FormData();
    images.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    try {
      formData.append(`quality`, rangeValue);
      const res = await axios.post(`${API_URL}upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setOptimizeImage(res.data);
       setError(null)
    } catch (error) {
       if (error.response) {
    console.log(error.response);
    setError(error.response.data.message); // store in state
  } else {
    console.error("Request failed:", error.message);
  }
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-fit bg-gray-100 p-6">
      <h1 className="font-bold text-2xl m-6">Optimize Images</h1>
      <ImageDrag setImages={setImages} />
      <PreviewImg images={images} handleRemove={handleRemove} />
      {images.length > 0 && (
        <>
          <RangeSlider value={rangeValue} setRangeValue={setRangeValue} />
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            onClick={optimizeImagesHandler}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow"
          >
            Optimize
          </button>
          {error?<h3>{error}</h3>:""}
          {(optimizeImage.length!=0)?<DownloadOptimizeFile optimizeImage={optimizeImage}/>:""}
        </>
      )}
    </div>
  );
}
