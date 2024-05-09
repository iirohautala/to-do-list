const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if (inputBox.value === ''){
    alert("You must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputBox.value ="";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

function startSpeechRecognition() {
    const speechInput = document.getElementById('speech-input');

    // Check if browser supports SpeechRecognition
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';

        // Start speech recognition
        recognition.start();

        // Event listener for when speech is recognized
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            speechInput.value = transcript;
        };

        // Event listener for errors
        recognition.onerror = function(event) {
            console.error('Speech recognition error occurred:', event.error);
        };
    } else {
        alert('Speech recognition is not supported by this browser.');
    }
    
}