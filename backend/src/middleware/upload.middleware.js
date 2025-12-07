//NOTE: 'Multer' is a middleware for handling mulripart/form data
//       Here we use Multer for file uploads

import multer from "multer";

const storage = multer.memoryStorage();

//fileFilter - for avoiding wrong file format uploads
const fileFilter = (req, file, cb) => {

    if(file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

const upload = multer({

    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 6 * 1024 * 1024 }, //6MB limit

});

export default upload;