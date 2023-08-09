// onload

window.onload = function() {

    console.log("Carregou o DOM");

    var title2 = document.querySelector("#subtitle");

    console.log(title2);

}

console.log("Caregou o JS");

var title = document.querySelector("#title");

console.log(title);

//click

var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

    console.log("hmm, safadinho");

    console.log(this);

    this.style.color = "red";
});

title.addEventListener("click", function() {

    var subtitle = document.querySelector("#subtitle");

    subtitle.style.display = "none";
});

//double click

var subtitle = document.querySelector("#subtitle");

subtitle.addEventListener("dblclick", function() {

    console.log("click duplo");
});

