import chalk from "chalk";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dbConfig from "./config/dbConfig.json";
import serverConfig from "./config/serverConfig.json";
// import PostRouter from "./routes/index";
import mongoose from "mongoose";
// import postController from "./controller/postController";
const app = express();
const router = express.Router();
const port = serverConfig.port;
const uri = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.url}/Storage?retryWrites=true&w=majority`;
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
}));
// router.get("/", postController.getAllMotivations);
// router.post("/", postController.addMotivation);
// app.use("/", router);
try {
    const connection = await mongoose.connect(uri);
    if (connection) {
        console.log(connection);
        app.listen(port, () => console.log(chalk.redBright("This app listening at"), chalk.whiteBright.bgRedBright.bold(`http://localhost:${port}`)));
    }
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=app.js.map