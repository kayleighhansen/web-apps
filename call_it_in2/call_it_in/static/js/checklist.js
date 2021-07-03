var myNodelist = document.getElementsByTagName("LI");
// myNodelist should come from localStorage

var i;

// add the x's to the li's
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// make the close funtion work
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // delete from localStorage
  }
}

// adding  new item
document.querySelector(".checklist-form-submit").addEventListener("click", function() {
var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    localStorage.setItem('excuse', inputValue);

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var div = document.createElement("DIV");
        var totalItem = div.appendChild(li);
        document.querySelector(".checklist-excuses").appendChild(totalItem);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        // delete from localStorage
      }
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // add a checked attribute to the localStorage 
  }
}, false);