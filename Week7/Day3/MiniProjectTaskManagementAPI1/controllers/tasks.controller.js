const fs = require("fs");

const path = require('path')
const fileLocation = path.resolve(__dirname,'../config/','tasks.json');

const getAllTasks = async (req, res) =>{
    try {
        fs.readFile(fileLocation, 'utf8',(err,data) => {
            if(err) res.status(404).json({message:'Couldnt read the file'})
            else res.json(JSON.parse(data))})
    } catch (error) {
        res.status(404).json({message:'Something went wrong'})
    }
}

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        fs.readFile(fileLocation, 'utf8',(err,data) => {
            if(err) res.status(404).json({message:'Couldnt read the file'})
            else {
                const tasks = JSON.parse(data)
                if (id > tasks.length) {res.status(404).json({message:'No task with this id'})}
                else {
                const myTask = tasks.find((item) => item.id == id);
                console.log(myTask);
                res.json(myTask)}
    }})
    } catch (error) {
        res.status(404).json({message:'Something went wrong'})
    }
}

const createTask = async (req, res) => {
    const { task, status } = req.body;
    try {
        fs.readFile(fileLocation, 'utf8',(err,data) => {
            if(err) res.status(404).json({message:'Couldnt read the file'})
            else 
            {
                dataObject = JSON.parse(data);
                dataObject.push({id:JSON.parse(data).length + 1, task:task, status:status})
                console.log(dataObject);
                fs.writeFile(fileLocation, JSON.stringify(dataObject), 'utf8', (err) =>
                    {if(err) res.status(404).json({message:'Couldnt read the file'})
                        else {
                            res.json(dataObject)}
                })
            }})
    } catch (error) {
        res.status(404).json({message:'Something went wrong'})
    }
  }

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task, status } = req.body;
    try {
        fs.readFile(fileLocation, 'utf8',(err,data) => {
            if(err) res.status(404).json({message:'Couldnt read the file'})
            else 
            {
                dataObject = JSON.parse(data);
                if (id > dataObject.length) {res.status(404).json({message:'No task with this id'})}
                else{
                    const index = dataObject.findIndex((item) => item.id == id);
                    dataObject[index].task = task;
                    dataObject[index].status = status;
                    console.log(dataObject);
                    fs.writeFile(fileLocation, JSON.stringify(dataObject), 'utf8', (err) =>
                    {if(err) res.status(404).json({message:'Couldnt read the file'})
                        else {
                            res.json(dataObject)}
                })}
            }})
    } catch (error) {
        res.status(404).json({message:'Something went wrong'})
    }
  }

const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        fs.readFile(fileLocation, 'utf8',(err,data) => {
            if(err) res.status(404).json({message:'Couldnt read the file'})
            else 
            {
                dataObject = JSON.parse(data);
                if (id > dataObject.length) {res.status(404).json({message:'No task with this id'})}
                else {
                    const index = dataObject.findIndex((item) => item.id == id);
                dataObject.splice(index, 1);
                console.log(dataObject);
                fs.writeFile(fileLocation, JSON.stringify(dataObject), 'utf8', (err) =>
                    {if(err) res.status(404).json({message:'Couldnt read the file'})
                        else {
                            res.json(dataObject)}
                })}
            }})
    } catch (error) {
        res.status(404).json({message:'Something went wrong'})
    }
}

module.exports = {
    getAllTasks, 
    getTaskById, 
    createTask, 
    updateTask, 
    deleteTask
}