
const collapsible = document.getElementsByClassName("collapsible");
const content = document.querySelector('.content');
const botStarterMessage = document.querySelector("#botStarterMessage");

//responses
function getBotResponse(input){
	if(input == "rock"){return "paper";}
	else if(input == "paper"){return "scissors";}
	//simple responses
	if(input == "Hello"){return "Hello there!";}
	else if(input == "Goodbye"){return "Talk to you later";}
	else{return "Try asking something else!"}
}

for(let i of collapsible){
	i.addEventListener("click",function(){
		this.classList.toggle("active");
		if(content.style.maxHeight){
			content.style.maxHeight = null;
		}else{
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

function getTime(){
	let today = new Date();
	hours = today.getHours();
	minutes = today.getMinutes();

	if(hours<10){
		hours = "0" + hours
	}
	if(minutes<10){
		minutes = "0" + minutes
	}
	let time =  hours+ ":"+minutes;
	return time; 
}

function firstBotMessage(){
	let firstMessage = "How is it going?"
	botStarterMessage.innerHTML ='<p class="botText"><span>'+firstMessage+'</span></p>';

	let time = getTime();
	$("#chat-timestamp").append(time);
	document.querySelector("#userInput").scrollIntoView(false);
}
firstBotMessage();

function getHardResponse(userText){
	let botResponse = getBotResponse(userText);
	let botHtml = '<p class = "botText"><span>'+botResponse+'</span></p>';
	$("#chatbox").append(botHtml);
	let chatBarBotton = document.querySelector("#chat-bar-bottom");
	chatBarBotton.scrollIntoView(true);
}

function getResponse(){
	let userText = $("#textInput").val();

	if(userText == ""){
		userText = "I love Code Palace!";
	}
	let userHtml = '<p class = "userText"><span>'+userText+'</span></p>';

	$("#textInput").val("");
	$("#chatbox").append(userHtml);
	document.querySelector("#chat-bar-bottom").scrollIntoView(true);

	setTimeout(()=>{
		getHardResponse(userText);

	},1000);
}

function buttonSendText(sampleText){
	let userHtml = '<p class = "userText"><span>'+sampleText+'</span></p>';
	$("#textInput").val("");
	$("#chatbox").append(userHtml);
	document.querySelector("#chat-bar-bottom").scrollIntoView(true);
}
function sendButton(){
	getResponse();
}
function heartButton(){
	buttonSendText("I like it!")
}
//Press enter to send a message
$("#textInput").keypress(function(e){
	if(e.which == 13){
		getResponse();
	}
});
