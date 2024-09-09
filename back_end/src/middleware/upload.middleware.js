const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .png, .jpg and .jpeg formats are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,  // Corrected typo here
    limits: {
        fileSize: 1024 * 1024 * 5 // 5 MB file size limit
    }
});

module.exports = upload;
