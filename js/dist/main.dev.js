"use strict";

function todoList() {
  var input = document.getElementById("todoInput"); //select the input

  var text = document.createTextNode(input.value);
  var textLink = document.createTextNode(input.value); //to get the input

  if (input.value.length > 0) {
    //for chek if user typed
    var newItem = document.createElement("div"); //to create a div 

    newItem.classList.add("shorten"); //to add clase that has style in css

    var btn = document.createElement("button"); //to create copy btn

    btn.classList.add("btn"); //to add bootsrtrab class

    btn.innerHTML = "copy"; //to type copy in btn

    btn.onclick = function () //to copy link 
    {
      //to change style and make a copy
      btn.style.color = "#fff";
      btn.style.background = "hsl(255, 11%, 22%)";
      btn.innerHTML = "copied!";
      input.select();
      document.execCommand("copy");
    };

    var p = document.createElement("p"); // to create a prgraph

    p.appendChild(text); //to make p has the input value 

    var Link = document.createElement("a"); // to create a link

    Link.setAttribute("href", textLink.nodeValue); // to create attr as link from input

    Link.target = "_blank"; // to open in other tab

    Link.appendChild(textLink); // to make link has the input value 
    //to make thos item as a child in the parent div

    newItem.appendChild(btn);
    newItem.appendChild(p);
    newItem.appendChild(Link);
    document.getElementById("todoList").appendChild(newItem); //to add the div in parent todolist
  } else {
    document.getElementById("todoInput").setAttribute("class", "form-control faild"); // to make it has class faild that has style in css

    document.getElementById("req").style.display = "inline"; // to show its required
  }
}