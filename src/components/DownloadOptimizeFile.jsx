const DownloadOptimizeFile = ({ optimizeImage }) => {
  console.log(optimizeImage);
  if (optimizeImage.length == 0) {
    return;
  }
  return (
    <div>
      <h1>Download Image</h1>
      {optimizeImage.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.path} alt="image1" />
            <ul>
              <li>
                Previous Size: {(el.info.previousSize / 1024).toFixed(2)}KB
              </li>
              <li>Current Size: {(el.info.currentSize / 1024).toFixed(2)}KB</li>
              <li>
                Optimize Size : {(el.info.optimizeSize / 1024).toFixed(2)}KB
              </li>
              <li>
                <a href={el.path} download={el.key} target="_blank">
                  Download
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DownloadOptimizeFile;
