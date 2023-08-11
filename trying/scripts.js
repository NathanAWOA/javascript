const form = document.querySelector("#contatac-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const button = document.querySelector("#button");

// function send email ...

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);