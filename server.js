const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Static public files//
app.use("/public", express.static("public"));

//Send the client the index HTML file.//
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

//The random number generator//
let generatedNumber = Math.floor(Math.random() * 100);
console.log(generatedNumber);

//Send the client the correct incorrect text//
app.get("/ping/:guessNumber", (req, res) => {
    console.log(req.params.guessNumber, generatedNumber);
    if (req.params.guessNumber == generatedNumber) {
        res.send({
            message: "Correct, You won!",
        });
    } else if (req.params.guessNumber > generatedNumber) {
        res.send({
            message: "Incorrect, You are ABOVE!",
        });
    } else {
        res.send({
            message: "Incorrect, You are BELOW!",
        });
    }
});

//Listening to port//
app.listen(port, () => {
    console.log(`The server is up on port ${port}.`);
});