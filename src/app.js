const express = require("express");
const app = express();
const port = 3000;
app.listen(port,() => console.log("\x1b[5m",`This app listening at http://localhost:${port}`))