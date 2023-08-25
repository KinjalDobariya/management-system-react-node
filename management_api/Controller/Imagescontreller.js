const fs = require('fs');
const path = require('path');
const addmissionModel = require('../Model/Addmissionmodel');

// Function to handle image upload and save image to MongoDB
const saveImageToMongoDB = async (req) => {
    try {
      if (!req.file) {
        throw new Error("Image file is required.");
      }
  
      const imagePath = path.join(__dirname, '..', 'public', req.file.filename);
  
      // Check if the file exists before reading it
      if (!fs.existsSync(imagePath)) {
        throw new Error("Image file not found.");
      }
  
      const newAddmission = new addmissionModel({
        image: imagePath, // Save the file path directly
        // Other fields for admission data
      });
  
      return await newAddmission.save();
    } catch (error) {
      throw error;
    }
  };
  
 
  
  
  
  
  
  

module.exports = { saveImageToMongoDB };