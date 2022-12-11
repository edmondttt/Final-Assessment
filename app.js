//display current date
document.addEventListener('DOMContentLoaded', function(){
    
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDate();
    let year = today.getFullYear();
    var date = document.querySelector("#date");
    
    date.innerHTML += month+1 + " " + day + " " + year;
    
});

//dynamic generate salary input field
var hiring = document.querySelector("#inputHiring");
var question = document.querySelector("#inputQuestion");
var comment = document.querySelector("#inputComment");
var salary = document.querySelector("#salary");
hiring.addEventListener('click', function(){
    salary.classList.remove("hidden");
});
question.addEventListener('click', function(){
    salary.classList.add("hidden");
});
comment.addEventListener('click', function(){
    salary.classList.add("hidden");
});


// scroll view

function toContact() {
    const element = document.getElementById("contact");
    element.scrollIntoView();
}

function toAbout() {
    const element = document.getElementById("about-me");
    element.scrollIntoView();
  }
  function toEducation() {
    const element = document.getElementById("education");
    element.scrollIntoView();
  }

function validatePostal(){
    var postal = document.getElementById("inputPostal").value;
    var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (postal.match(regex)){
        return true;
    }
    else{
        alert("invalid postal code");
        return false;
    }
    
}