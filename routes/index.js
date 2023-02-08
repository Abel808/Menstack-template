import  Router  from "express"
import * as control from '../controllers/index.js'


const router = Router()






router.get('/', control.index)





export{
    router
}