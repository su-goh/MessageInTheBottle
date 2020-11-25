const msg = document.getElementById('msgBox');
const submitBtn = document.getElementById('submitBtn');

const database = firebase.database();
const rootRef = database.ref('msgs');
var ref = database.ref('msgs');
ref.on('value', getData, errHandle)

function getData(data) {
    var msg = data.val();
    var keys = Object.keys(msg);
    var value = Object.values(msg);

    console.log(value);

    value.forEach(element => {
        console.log(element.msg);

        let card = document.createElement('div');
        card.className = 'card';
        card.style = 'width: 18rem';

        let cardBody = document.createElement('div');
        cardBody.className ='card-body';

        let message = document.createElement('P');
        message.innerHTML = element.msg;
        message.style = 'card-text';

        cardBody.appendChild(message);
        card.appendChild(cardBody);

        document.getElementById("cards").appendChild(card);
    });




}

function errHandle(err) {
    console.log(err);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitMessage();
})

document.getElementById('msgBox').addEventListener("keydown", function(e) {
    if (!e) {
        var e = window.event;
    }

    e.preventDefault;
    // if press enter key, submit message
    // if(e.keyCode == 13) {
    //     submitMessage();
    // }
    
}, false);

const submitMessage = () => {
    const autoId = rootRef.push().key;
    rootRef.child(autoId).set ({
        msg: msg.value
    });

    document.getElementById('msgForm').reset();
    $('#submittedModal').modal(focus);
}