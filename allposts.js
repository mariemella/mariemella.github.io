
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

var btn = document.querySelector("#btn")

btn.onclick = function(){
			ad.style.display = "none"
		}