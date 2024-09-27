const sayHello = (req, res) => {
    return res.status(200).json({ message: "Hello from Express" });
}

const getMessage = (req, res) => {
    console.log(req.body);
    return res.status(200).json({ message: 
        `I recieved your POST request. This is what you sent me: ${req.body.message}` });
}

module.exports = {
    sayHello,
    getMessage,
};