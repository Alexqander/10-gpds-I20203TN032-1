const ServerController = (req,res)=>{
	{ data }= req.body

	return res.status(200).jsom({message:"Succesful Operation"})
}
