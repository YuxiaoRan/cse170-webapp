$(document).ready(function() {
	initializePage();
});

function initializePage() {
  var loginState = localStorage.getItem('loginState');
	if (loginState == null) {
		localStorage.setItem('loginState', 'false');
	}
  console.log(loginState);
  $('facebookLogin').click(loginHandler);
  $('.logout-btn').click(logoutHandler);
}

function loginHandler(e) {
	e.preventDefault();
  console.log("hello");
	localStorage.setItem('loginState', 'true');
}

function logoutHandler(e) {
	e.preventDefault();
	localStorage.setItem('loginState', 'false');
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  //if (response.status === 'connected') {
  var loginState = localStorage.getItem('loginState');
  console.log(loginState);
  if (localStorage.getItem('loginState') == 'false') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
          FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  } else {
    localStorage.setItem('loginState', 'true');
  }
}

function changeUser(response) {
  $('.facebookLogin').hide();
  $('#name').text(response.name);
  $('#photo').attr('src', response.picture.data.url);
}