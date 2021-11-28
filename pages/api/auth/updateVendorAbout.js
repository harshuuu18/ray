import VendorData from '../../../data/VendorData.json'
import fs from 'fs'


export default async(req,res) => {
    const {desc,vid,vname} = req.body

    if(!desc || !vid  || !vname){
        return res.status(422).json({error:"Please add all the fields"})
    }

    try{
        VendorData[vname+" "+vid].about = desc
        fs.writeFileSync('./data/VendorData.json',JSON.stringify(VendorData))
        res.status(200).json({message:"Data updated"})
    }catch(err){
        console.log(err)
    }

}
