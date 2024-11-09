const express = require('express')
const app = express()
const cors = require('cors')
const mongodb = require('./db/connect')
const port = process.env.PORT || 3000
app.use(cors())

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.error(err)
    } else {
        app.listen(port, () => console.log(`Connect to DB and listening on ${port}`));
    }
})