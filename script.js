const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Adds a new ask to the list when the butto  is clicked
function addTask(){
    //Checks if input is empty
    if(inputBox.value === ''){ 
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //span acts as a delete buttton
        let span = document.createElement("span");
        //\u00d7 is the Unicode character for "×".
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    //Save data in local storage
    saveData();
}

//Allows interaction with the list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}