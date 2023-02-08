//server
import "dotenv/config.js" 
import express from "express";

// imports - middleware
import logger from 'morgan'
import MethodOverride from "method-override"
import { fileURLToPath } from "url";
import path from "path"

// import - router
import{router as indexRouter, router} from './routes/index.js' 

const app = express ()

//database
import './config/database.js'

// view engine
app.set('veiw engine', "ejs")


//middleware
app.use(logger('dev'))
app.use(MethodOverride('_method'))
app.use(
    express.static(
        path.join(path.dirname(fileURLToPath(import.meta.url)),
        'public')
    )
)

//mounted routes

app.use('/', indexRouter)


// port listen
app.listen(3000, function(){
    console.log('working')
})