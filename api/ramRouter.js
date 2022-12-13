import {Router} from "express";
import dataService from "../data.service.js";

const ramRouter = Router()

ramRouter.get('/', (req, res) => {
	if (!req.query)
		return res.send(dataService.getAll())
	return res.send(dataService.findQuery(req.query))
})


export default ramRouter
