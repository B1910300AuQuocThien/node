const express = require("express")
const cors = require("cors")
const contactSRouter = require("./app/routes/contact.route")
const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactSRouter)
app.get("/", (req, res) => {
    res.json({
        message: "xin chao"
    })
})

module.exports = app;