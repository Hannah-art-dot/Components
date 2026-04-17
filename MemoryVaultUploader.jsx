import React from 'react';

const MemoryVaultUploader = () => {
  const handleFileUpload = (e) => {
    const files = e.target.files;
    console.log("Uploading files to vault:", files);
  };

  return (
    <div className="memory-vault-uploader">
      <h2>Wedding Memory Vault</h2>
      <p>Scan the QR code to access this page on your device, or upload directly here.</p>
      <input type="file" multiple accept="image/*,video/*" onChange={handleFileUpload} />
      <button>Upload Media</button>
    </div>
  );
};

export default MemoryVaultUploader;
