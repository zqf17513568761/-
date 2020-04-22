const express = require("express");
const app = express();
// 当前地址API
app.get("/restapi/member/v2/users/14547420/location", (req, res) => {
    res.sendfile("./jsons/location.json");
})

// 筛选条API
app.get("/pizza/shopping/restaurants/batch_filter",(req,res)=>{
    res.sendfile("./jsons/batch_filter.json");
})

// 种类轮播图
app.get("/restapi/shopping/v2/entries",(req,res)=>{
    res.sendfile("./jsons/entries.json");
})

// 四张图片轮播API
app.get("/restapi/shopping/v2/banners",(req,res)=>{
    res.sendfile("./jsons/banners.json");
})

// 商家信息API
app.get("/restapi/shopping/v3/restaurants",(req,res)=>{
    res.sendfile("./jsons/rest.json");
})

app.listen(3000, () => {
    console.log("3000....");
})