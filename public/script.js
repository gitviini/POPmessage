var socket = io()

let input = document.querySelector('input')
let form = document.querySelector('form')
let messages = document.querySelector('#messages')

var nome = ''

while (nome == '' || nome.indexOf(' ') != -1){
    nome = prompt('nome:')
}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (input.value != ''){
        const resp = {'nome':nome,'value':`${nome}: ${input.value}`}
        input.value = ''
        socket.emit('chat', resp)
    }
    else{
    }
})

socket.on('chat', (data)=>{
    render(data)
})

function render(data){
    let message = document.createElement('div')
    message.innerText = data['value']
    message.setAttribute('class','message')
    if (data['nome'] == nome){
    }
    else{
        message.style.alignSelf = 'end'
        message.style.borderRadius = '50px 50px 0 50px'
    }
    messages.appendChild(message)
}