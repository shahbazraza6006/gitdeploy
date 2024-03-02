// ImageGallery.js
import React from 'react';
import './NewsLink.css'; // Import the CSS file for styling

const images = [
    { id: 1, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 2, url: 'https://seeklogo.com/images/D/Discovery_Cove-logo-1D331B053C-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery_Cove-logo-1D331B053C-seeklogo.com.png' },
    { id: 3, url: 'https://1000logos.net/wp-content/uploads/2020/09/Warner-Bros-Logo-tumb.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 4, url: 'https://1000logos.net/wp-content/uploads/2017/05/Walt-Disney-logo-tumb.jpg', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 5, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 6, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 7, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 8, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 9, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
    { id: 10, url: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png', link: 'https://seeklogo.com/images/D/Discovery-logo-A3D1FAC239-seeklogo.com.png' },
  ];

const ImageGallery = () => {
  return (
    <div className="p-4 mt-10 h-50 w-full rounded-lg bg-gray-800 border-2 border-black m-2 overflow-hidden">
      <div className=" flex  justify-around image-container">
        {images.map((image) => (
          <div key={image.id} className="m-4">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="w-48 h-32 object-contain rounded-md cursor-pointer floating-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

