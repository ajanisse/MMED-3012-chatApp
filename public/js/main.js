(() => {
  const socket = io();

  let messageList = document.querySelector('ul'),
  chatForm = document.querySelector('form'),
  nameInput = document.querySelector('.nickname'),
  chatMessage = document.querySelector('.message'),
  nickName = null;

  function setNickname() {
    //debugger;
    nickName = this.value;

  }

  function handleSendMessage(e) {
    e.preventDefault(); // Prevent the Default Behaviour

    
  nickName = (nickName && nickName.length > 0) ? nickName : 'user';

  msg = `${nickName} says ${chatMessage.value}`;

// emit a chat event so that we cam pass it through to the server (and everyone else)
  socket.emit('chat message', msg);
  chatMessage.value = '';
  return false;
  }

  function appendMessage(msg) {
  //  debugger;
  let newMsg = `<li>${msg.message}</li>`;
  messageList.innerHTML += newMsg;

  }
  function appendDMessage(msg) {
    //debugger;
    let newMsg = `<li>${msg}</li>`;
    messageList.innerHTML += newMsg;
  }
    

  nameInput.addEventListener('change', setNickname, false);
  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDMessage, false);
})();
