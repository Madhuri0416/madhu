const listBox= document.getElementById("list-box");
const listContainer= document.getElementById("list-container")

function addTask(){
    if(listBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li"); 
        li.innerHTML = listBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.onclick = function () {
            this.parentElement.remove();
        };
        li.appendChild(span);

    }

    listBox.value = "";
}

