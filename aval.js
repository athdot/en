 document.getElementById('bro').innerHTML = "Checking OS...";
 if(navigator.platform === "Win32"){
var password = prompt("Enter Password")
if(password === "deutsch"){
  document.getElementById('bro').innerHTML = "Starting Decryption...";
  var href = window.location.href
  var hrefl = href.length
  var hrefl2 = hrefl-10
  var href2 = href.substring(0,hrefl2)
    window.location = href2+"data/master.bat"
}else{
document.getElementById('denied').setAttribute("style","visibility:visible;");
document.getElementById('bro').innerHTML = "Acess denied";
}
  }else{
   document.getElementById('denied').setAttribute("style","visibility:visible;");
document.getElementById('bro').innerHTML = "Acess denied";
  }
