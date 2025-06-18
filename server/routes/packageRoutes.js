const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

router.post('/', async(req, res)=>{
    try {
        const newPackage = new Package(req.body);
        await newPackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/', async(req, res)=>{
    try {
        const packages = await Package.find();
        res.json(packages);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const singlePackage = await Package.findById(req.params.id);
        if (!singlePackage) {
            return res.status(404).json({ message: "Package Not Found" });
        }
        res.json(singlePackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async(req, res)=>{
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!updatedPackage){
            return res.status(404).json({message: "Package Not Found"});
        }
        res.json(updatedPackage);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async(req, res)=>{
    try{
        const deletedPackage = await Package.findByIdAndDelete(req.params.id);
        if(!deletedPackage){
            return res.status(404).json({message: "Package Not Found"});
        }
        res.json({message: "Package Deleted Successfully"});
    }
    catch (error){
        res.json(500).json({message: error.message});
    }
});


module.exports = router;