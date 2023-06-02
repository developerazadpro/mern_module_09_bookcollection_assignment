const app = require("./app")
const dotenv = require("dotenv")
dotenv.config()

const port = process.env.PORT || 8000

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`)
})
