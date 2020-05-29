const express = require('express')
const config = require('config')
const mongoose = require('mongoose')



const app = express()

// MIDDLEWARES
app.use('api/auth', require('./routes/auth.route'))



// CONFIG
const PORT = config.get('port') || 5000



// DB Connection
async function startDB () {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        app.listen(PORT, ()=> {
            console.log(`Server has been started... PORT: ${PORT}`)
        })

    }
    catch(e) {
        console.log(`Server error: ${e.message}`)
        process.exit(1)
    }
}

startDB()

// express.use()


