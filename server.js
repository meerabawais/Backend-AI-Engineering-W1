const express = require("express");
const app = express();
const PORT = 3000;
app.get("/",(req,res) => {
    res.json({
        message : "Welcome!"
    });
});
app.get("/about",(req,res)=>{
    res.json({
        name: "Meerab Awais",
        age: 21
    });
});
app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
});