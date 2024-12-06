const sequelize = require("./models");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

sequelize
  .sync()
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Error:", err));


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
