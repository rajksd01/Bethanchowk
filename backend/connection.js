import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://rajksd9:Vlj7zIDNmyTn7Jlb@cluster0.ytnls8i.mongodb.net"
);
var conn = mongoose.connection;
conn.on("connected", () => {
  console.log("database connected");
});
conn.on("disconnected", () => {
  console.log("database disconnected");
});
conn.on("error", (error) => {
  console.error("Database Conection Failed", error);
  process.exit(1);
});
export default conn;
