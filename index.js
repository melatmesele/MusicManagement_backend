const  express = require("express");
const  http = require("http");
const  bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/manageSongRoute/song.router"); 
const statisticsRouter = require("./router/statisticsRoute/statistics.router"); 
require("./moongoDbConfig/conf");

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router);
app.use("/statistics", statisticsRouter);

const server = http.createServer(app);
server.listen(8000, () => {
  console.log("server is listening on http://localhost:8000/");
});

// const MONGO_URL =
// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);

// mongoose.connection.on("error", (error) => console.log(error));


