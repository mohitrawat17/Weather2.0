const express=require("express")
const app=express()
const port=8000;
const path=require("path")
const hbs=require('hbs')
//--------------------------------------------------------------
//path
const staticPath=path.join(__dirname,"../componets")
const templatesPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")


app.set('view engine','hbs');  // we using hbs view engine
app.set('views',templatesPath);   // views set to templates
hbs.registerPartials(partialsPath)  // registering before using partials


app.use(express.static(staticPath))

//--------------------------------------------------------------
// routing
app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error")
})
//--------------------------------------------------------------
app.listen(port,()=>{
    console.log(`running on port number ${port}`);
})