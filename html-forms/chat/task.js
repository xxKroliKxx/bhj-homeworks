const e_chat_widget = document.getElementsByClassName('chat-widget')[0]
const e_chat_widget_SideText = document.getElementsByClassName('chat-widget__side-text')[0]
const e_input = document.getElementById('chat-widget__input')
const messages = document.getElementById('chat-widget__messages');
const e_container = document.getElementsByClassName('chat-widget__messages-container')[0]

let waitingID = null

e_chat_widget_SideText.onclick = function (e) {
    //e_chat.classList.remove('chat-widget__side')
    e_chat_widget.classList.add('chat-widget_active')
}

e_input.addEventListener('change', e => {
    let text = e.target.value
    e.target.value = ''
    messages.innerHTML +=
        `
          <div class="message message_client">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">
              ${text}
            </div>
          </div>
        `;
    messages.innerHTML +=
        `
        <div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">Добрый день!</div>
        </div>
        `
    e_container.scrollTop = e_container.scrollHeight
    clearTimeout(waitingID)
});

e_input.addEventListener('focus', (e) => {
    waitingID = setTimeout(()=> {
        messages.innerHTML +=
            `
        <div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">Так и будем молчать?</div>
        </div>
        `
    }, 30000)
})

e_input.addEventListener('blur', (e) => {
    clearTimeout(waitingID)
})

function getTime(){
    let date = new Date()
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')
}