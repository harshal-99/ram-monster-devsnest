import express from "express"
import ramRouter from "./api/ramRouter.js";
import dataService from "./data.service.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products', ramRouter)
app.use('/api/reset', (req, res) => {
	dataService.resetData()
	res.status(200).json({message: "Data reset"})
})


const PORT  = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
