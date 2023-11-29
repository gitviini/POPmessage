import express from 'express'
const app = express()
import http from 'http'
const server = http.createServer(app)
import {Server} from 'socket.io'
const io = new Server(server)

const PORT = 3000

app.use(express.static('public'))

app.route('/')
    .get((req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

io.on('connection', (socket) =>{
    console.log('conectou')
    socket.on('disconnect', ()=>{
        console.log('desconectou')
    })
    socket.on('chat',(msg)=>{
        console.log(msg)
        io.emit('chat',msg)
    })
})

server.listen(PORT, ()=>{
    console.log(':.'+PORT)
})