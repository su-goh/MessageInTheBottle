const msg = document.getElementById('msgBox');
const submitBtn = document.getElementById('submitBtn');

const database = firebase.database();
const rootRef = database.ref('msgs');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitMessage();
})

document.getElementById('msgBox').addEventListener("keydown", function(e) {
    if (!e) {
        var e = window.event;
    }

    e.preventDefault;
    if(e.keyCode == 13) {
        submitMessage();
    }
    
}, false);

const submitMessage = () => {
    const autoId = rootRef.push().key;
    rootRef.child(autoId).set ({
        msg: msg.value
    });
    console.log("WHere");
    $('#submittedModal').modal(options)
}