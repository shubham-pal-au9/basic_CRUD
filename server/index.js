const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.use("/", require("./routes/getRoutes"));

app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`);
});
