import express from 'express';

const app = express();

app.get("/", function(req,res){
    console.log(req)
    res.send("after many times!!")
})

// app.use(express.json());

// app.get("/", function (req, res) {
//     console.log(req);
//       res.json("WORKING!!!");

// });

app.listen(3000, function () {
    console.log("The server is listening ");
});