const express=require("express")
const app=express()
const port=8000;
const path=require("path")
//--------------------------------------------------------------
//path
const spath=(path.join(__dirname,"../componets"));
app.use(express.static(spath))

//--------------------------------------------------------------
// routing
app.get("",(req,res)=>{
    res.send("mohit")
})

app.get("/about",(req,res)=>{
    res.send("about")
})

app.get("/weather",(req,res)=>{
    res.send("weather")
})

app.get("*",(req,res)=>{
    res.send("error")
})
//--------------------------------------------------------------
app.listen(port,()=>{
    console.log(`running on port number ${port}`);
})