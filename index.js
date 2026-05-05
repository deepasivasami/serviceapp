const express = require('express')
const Register = require("./router/RegisterRouter")
const Techincian=require("./router/TechinacienRouter")



const app = express()
const port = 7000

const dns = require('dns')
dns.setServers(["1.1.1.1","8.8.8.8"])
const db = require('./dbconfig/config')
const mainrouter = require("./router/complaintRoutes")
const cors = require("cors");

app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/", mainrouter);
app.use("/", Register);
app.use("/", Techincian);


app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
})