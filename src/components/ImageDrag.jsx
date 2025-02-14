import PropTypes from "prop-types";
export default function ImageDrag({setImages}) {
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
      };
    
      const handleFiles = (files) => {
        const imageFiles = files.filter((file) => file.type.startsWith("image"));
    
        if (imageFiles.length > 0) {
          const newImages = imageFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );
          setImages((prev) => [...prev, ...newImages]);
        }
      };
  return (
    <>
      <label
        htmlFor="upload-img"
        className="w-full h-48 border-2 border-dashed border-gray-400 bg-white flex items-center justify-center text-gray-600 cursor-pointer rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <p>Drag & Drop Images Here</p>
      </label>

      <input
        type="file"
        multiple
        accept="image/*"
        className="mt-4 hidden"
        id="upload-img"
        onChange={(e) => handleFiles(Array.from(e.target.files))}
      />
    </>
  );
}
ImageDrag.propTypes = {
    setImages: PropTypes.func.isRequired  
};
