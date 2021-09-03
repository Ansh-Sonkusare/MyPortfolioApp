$(document).ready(function () {
    let jsonObj = [];
    $('#contact-form').on('submit', function (e) {
        const form = document.getElementById('contact-form');
        const name = document.getElementById('form_name').value;
        const email = document.getElementById('form_email').value;
        const msg = document.getElementById('form_message').value;
        let item = {}
        item["name"] = name;
        item["email"] = email;
        item["msg"] = msg;
        jsonObj.push(item);
        e.preventDefault();
        console.log(name, email, msg);
        fetch('http://localhost:3000/form', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonObj),
        })
    })
});