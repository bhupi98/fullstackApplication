const express = require("express");
const port = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/dropdownRoutes"));
app.listen(port, () => console.log(`server is running on port ${port}`));
