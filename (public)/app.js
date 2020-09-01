const msg = document.getElementById('msgBox');
const submitBtn = document.getElementById('submitBtn');

const database = firebase.database();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/msg/' + msg.value).set({
        msg: msg.value
    })
    document.getElementById('msgForm').reset();
    window.alert("Your message is floating in the ocean.")
})

document.getElementById('msgBox').addEventListener("keydown", function(e) {
    if (!e) {
        var e = window.event;
    }
    
    e.preventDefault;
    if(e.keyCode == 13) {
        database.ref('/msg/' + msg.value).set({
            msg: msg.value
        })
        document.getElementById('msgForm').reset();
        window.alert("Your message is floating in the ocean.")
    }
}, false);