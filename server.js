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
console.log(`Random Number Generated: ${generatedNumber}`);

//Send the client the correct incorrect text//
app.get("/guess/:guessNumber", (req, res) => {
    console.log(`User guess number: ${req.params.guessNumber}`);
    if (req.params.guessNumber == generatedNumber) {

        generatedNumber = Math.floor(Math.random() * 100);
        console.log(`New Random Number Generated: ${generatedNumber}`);

        res.send({
            message: "Correct, You won! A new number is now generated.",
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
    //console.log(`The server is up on port ${port}.`);
});