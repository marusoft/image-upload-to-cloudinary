const User = require("../model/user");
const cloudinary = require("../utils/cloudinary");


 const createUser = async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result)
    // Create new user
    let user = new User({
      name: req.body.name,
      address: req.body.address,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
}
module.exports = createUser;