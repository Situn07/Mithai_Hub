import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import createDefaultUsers from "./src/utils/createDefaultUsers.js";

const PORT = process.env.PORT || 5000;

connectDB();
createDefaultUsers();

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
