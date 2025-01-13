// src/components/Upload.js
import React from 'react';

const Upload = () => {
  return (
    <div>
      <h2>Upload Media</h2>
      <form>
        <input type="file" accept="audio/*, video/*" required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;