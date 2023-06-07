
var ul = document.createElement("ul");

for (var i = 0; i < 3; i++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.textContent = "Link " + (i + 1);
  
  li.appendChild(a);
  ul.appendChild(li);
}


var nav = document.createElement("nav");
nav.appendChild(ul);

var i = document.createElement("i");
i.classList.add("fa-solid", "fa-bars");
i.addEventListener("click", function() {
    var ul = document.createElement("ul");
    ul.setAttribute("id", "bar_ul");

    for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = "Link " + (i + 1);
        
        li.appendChild(a);
        ul.appendChild(li);
    }

    var div = document.createElement("div");
    div.setAttribute("class", "bar_box");
    div.appendChild(ul);
    
    var targetElement = document.querySelector("body");
    targetElement.appendChild(div);
});

var header = document.createElement("header");
header.appendChild(nav);
header.appendChild(i);

var div = document.createElement("div");
div.setAttribute("container", "");
div.appendChild(header);


document.body.appendChild(div);