import express,{Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT||3000

const app = express()
app.use(express.json())

//health check
app.get("/", (req:Request, res:Response)=>{
    res.status(200).json({
        "msg":"Api is running"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http//:localhost:${PORT}`)
})