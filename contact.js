var btn = document.querySelector("#btn")
var enter = document.querySelector("#enter")

btn.onclick = function(){
	var name = document.querySelector("#name").value
	var email = document.querySelector("#email").value
	var subject = document.querySelector("#subject").value
	var form = document.querySelector("#contact")

	
	if(name == ""){
		result.innerHTML = "Please try again. Make sure to add all required information."
		return false;
	}else{
		result.innerHTML = "Thanks for your message " + name + "<br>" + " We will be in touch soon! <br>" 
		contact.style.display = "none"
		
	}

	if(email == ""){
		result.innerHTML = "Please try again. Make sure to add all required information."
		return false;
	}else{
		result.innerHTML = "Thanks for your message " + name + "<br>" + " We will be in touch soon! <br>"
		contact.style.display = "none" 
	}
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


var submit = document.querySelector("#submit")

submit.onclick = function(){
	var mail = document.querySelector("#mail").value

	if(mail == ""){
		answer.innerHTML = "Oops, try again!"
		return false;
	}else{
		answer.innerHTML = "Thanks for subscribing!"
		return false;
	
	}

}
