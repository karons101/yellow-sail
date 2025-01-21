// src/components/ImageUploader.js
import React, { useRef } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const ImageUploader = () => {
    const imageRef = useRef(null);
    const cropperRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            if (cropperRef.current) {
                cropperRef.current.destroy(); // Destroy previous cropper instance
            }
            const image = imageRef.current;
            image.src = e.target.result;

            cropperRef.current = new Cropper(image, {
                aspectRatio: 16 / 9, // Set your desired aspect ratio
                viewMode: 1,
                autoCropArea: 1,
                crop(event) {
                    // You can get the cropped area here
                },
            });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div>
                <img id="image-to-crop" ref={imageRef} alt="To Crop" style={{ maxWidth: '100%' }} />
            </div>
        </div>
    );
};

export default ImageUploader;