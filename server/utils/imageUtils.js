// imageUtils.js

const fs = require('fs');
const path = require('path');

// Function to upload an image
const uploadImage = async (imageFile) => {
    try {
        const uploadDir = 'path_to_upload_directory'; // Define the directory where you want to store images
        const uniqueFileName = `${Date.now()}-${imageFile.name}`;

        // Create a write stream to save the image
        const imageStream = fs.createWriteStream(path.join(uploadDir, uniqueFileName));

        // Pipe the image data to the write stream
        imageFile.pipe(imageStream);

        // Return the image URL (assuming you have a URL generation logic)
        const imageUrl = `url_to_your_server/images/${uniqueFileName}`;
        return imageUrl;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    uploadImage,
};
