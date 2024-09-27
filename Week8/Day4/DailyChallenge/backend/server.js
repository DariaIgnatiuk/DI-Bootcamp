const express = require("express");
const wordRouter = require("./routes/word.router.js");
const cors = require("cors");

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** body-parser */
app.use(express.json());
app.use(cors());

app.use("/api", wordRouter);