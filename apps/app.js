function notifications_on(){

  alert('Notifications on')
localStorage.setItem("Notifications", "on")

}

function notifications_off(){

  alert('Notifications off')
localStorage.setItem("Notifications", "off")

}



var domain = document.domain

let ctheme = localStorage.getItem('theme');
if (ctheme == null || ctheme == undefined || ctheme == "") {

document.write('<!-- Web Linked Casscading Style Sheet (Css)--><link rel="stylesheet" href="https://' + domain + '/apps/00/themes/VoidBlack.css"/>')

}
else {

document.write('<!-- Web Linked Casscading Style Sheet (Css)--><link rel="stylesheet" href="' + ctheme + '"/>')

}

//grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  var AppID = urlParams.get('id')
  var invite = urlParams.get('inv')
  var copyinvite = urlParams.get('cin')
  var code = urlParams.get('code')
 if (AppID == '0'){ 
// AppID 0
// Replacord App 
 if (invite != 'true' && copyinvite != 'true') {
	  
	  document.write('<!DOCTYPE html><html lang="en" dir="ltr"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://use.typekit.net/tto8pja.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script><!-- Web Linked JavaScript (Js)--><script type="text/javascript" src="https://' + domain + '/apps/00/Chat.js"></script></head><body></body></div></div></html>')
	  
	  
  }


// AppID 0 && Inv true
// Replacord App Invitation
   if (invite == 'true' && copyinvite != 'true'){
	if (code == null || code == undefined){
		
		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
	}
	 else {
		 var invitelink = 'https://' + domain + '/apps/?id=0&code=' + code
		 document.write("<a href='" + invitelink + "'>Accept invite to room</a>")
		 
	 }
}

// AppID 0 && CopyInv true
// Replacord App Copy Invitation
  if (copyinvite == 'true' && invite != 'true'){
	if (code == null || code == undefined){
  
    		alert("This Is Not A Valid Invite Link")
		document.write("<h1>This Is Not A Valid Invite Link</h1>")
    		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<a style="font-size:25px;" href="' + invitelink + '"> Valid Invite Link ' + invitelink + '</a>')
    
	}
	 else {
		var invitelink = 'https://' + domain + '/apps/?id=1&inv=true&code=chatroom1'
		document.write('<html><head><title>Copy Invite</title><script src="https://'+ domain +'/apps/00/copy.js"></script></head><body></body></html>')
		 
	 }
}
}
// AppID 1
// Settings
 else if (AppID == '1') {
	  
	  document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-storage.js"></script></head><body><script type="module" src="https://' + domain + '/apps/01/settings.js"></script></head><body></body></div></div></html>')
	  
	  
  }
// AppID 2
// SignUp/Login
 else if (AppID == '2')  {

    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login/SignUp</title><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-storage.js"></script></head><body><input id="name" placeholder="Name" maxlength="15"><input type="file" id="file"><button id="submit" style="visibility: hidden;">Login</button><progress id="progress_bar" value="0" max="100"></progress><script src="https://' + domain + '/apps/02/login.js" type="text/javascript"></script></body></html>')

}

// AppID 3
// Themes 

else if (AppID == '3') {

document.write(`

<html>
<!-- Themes.JS -->
<script type="module" src="https://${domain}/apps/03/themes.js"></script>

<!-- Themes.CSS -->
<script type="module" src="https://${domain}/apps/03/themes.CSS.js"></script>
</html>
`)


}

else{
  
  document.write(`
<title>404 Not Found</title>
<h1>Error Finding App Under This ID "${AppID}"</h1>
<h3>404 Not Found}This App Does not exist or the link to this app was wrong or mistyped</h3>




`)
  
  
  
  
}