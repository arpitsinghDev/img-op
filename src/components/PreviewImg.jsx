 const previewImg=({images,handleRemove}) => {
     return(
        <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-24 h-24">
            <img
              src={image.preview}
              alt="preview"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              onClick={() => handleRemove(index)}
            >✕</button>
          </div>
        ))}
      </div>
     );
};
export default previewImg