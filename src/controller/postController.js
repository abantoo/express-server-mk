import FeedModel from "../model/post";

exports.addMotivation = async (req, res) => {
  const email = req.body.email;
  const feedback = req.body.feedback;
  await FeedModel.addMotivation({ email, feedback });
  res.json({
    message: "successfully updated new feed",
  });
};

exports.getAllMotivations = async (req, res) => {
  try {
    const result = FeedModel.getAllMotivations();
    res.send(result);
    console.log("Successfully fetched all motivations from database");
  } catch (error) {
    console.log(error);
  }
};
