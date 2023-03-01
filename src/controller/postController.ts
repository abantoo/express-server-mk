import FeedModel from "../model/post";


export default class FeedbackController {
  static async addMotivation(req: any, res: any): Promise<void> {
    const email = req.body.email;
    const feedback = req.body.feedback;
    await FeedModel.addMotivation({ email, feedback });
    res.json({
      message: "successfully updated new feed",
    });
  };

  static async getAllMotivations(req: any, res: any): Promise<void> {
    try {
      const result = FeedModel.getAllMotivations();
      res.send(result);
      console.log("Successfully fetched all motivations from database");
    } catch (error) {
      console.log(error);
    }
  };
}