const Feed = require("../model/post");

exports.addMotivation = async (req, res) => {
  const email = req.body.email;
  const feedback = req.body.feedback;
  const message = new Feed({
    email: email,
    feedback: feedback,
  });
  await message.save();
  res.json({
    message: "successfully updated new feed",
  });
};

exports.getAllMotivations = async (req, res) => {
  try {
    const result = await Feed.find();
    res.send(result);
    console.log("Successfully fetched all motivations from database");
  } catch (error) {
    console.log(error);
  }
};
