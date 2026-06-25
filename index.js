import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connedtDB from "./src/config/db.config.js"
import routes from "./src/routes/auth.routes.js"

dotenv.config();

const app = express();
connedtDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth",routes)



app.get("/",(req , res)=>{
    res.send("hay khushi!!")
})




const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}🚀🚀🚀`)
})