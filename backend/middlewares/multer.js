import multer from "multer";


const storage = multer.memoryStorage();
export const singUpload = multer({storage}).single("file");