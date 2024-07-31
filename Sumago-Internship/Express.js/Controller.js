const studmodel = require('./modal')

const showdetail = async(req,res)=>{
    try{
        const data = await studmodel.find()
        res.status(200).send({data})
    }
    catch(err){
        console.log(err);
        res.status(400).send({err})
    }
        
}

const adduser = async(req,res)=>{
    const {fname,lname,rollno}=req.body
    try{
        const data = new studmodel({
            fname,lname,rollno
        })
        const userdata = await data.save()
        res.status(200).send({userdata})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}

const updatedata = async (req,res) => {
    const {fname,lname,rollno} = req.body
    try{
        const fname = req.params.fname
        const data = await studmodel.updateOne({
            $set: {fname,lname,rollno}
        })
        if(data.modifiedCount > 0) {
            res.status(200).send({msg:"updated sucessfully"})
        }
        else{
            res.status(200).send({msg: "not updated successfully"})
        }
    } catch (error) {
        res.status(400).send(err)
    }
}

const deleteuser = async (req, res) => {
    try {
        const data = await studmodel.deleteOne({ fname:req.params.fname });

        if (data.deletedCount > 0) {
            res.status(404).send({ msg: "Deleted" })
        }
        else {
            res.status(404).send({ msg: "Not Deleted" })
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({error:error.message});
    }
}

const login = async (req,res) => {
    try {
        const {fname} = req.body;
        const user = await studmodel.findOne({ fname:req.body.fname })

        if (!user) {
            res.status(401).send({ msg: "user not Found" })
        }
        else {
            res.status(200).send({ msg: "Login Successfully..!" })
        }
    }
    catch (error) {
        res.status(400).send( error );
    }
}

module.exports = { showdetail, adduser, updatedata, deleteuser, login}
