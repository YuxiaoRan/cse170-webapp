'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.like-btn').click(likeHandler);
	$('.deposit-btn').click(depositHandler);
	$('.bio-btn').click(bioHandler);
	$('.logout-btn').click(logoutHandler);
	// $('#share-node').click(function(e) {
	// });
}

function likeHandler(e) {
	e.preventDefault();
	var likeBtn = $('.like-btn');
	if(likeBtn.text() == "Like!") {
		likeBtn.text("Liked!" + String.fromCodePoint(128512));
	} else {
		likeBtn.text("Like!");
	}
}

var isDepositBtnInnerPresent = false;

function depositHandler(e) {
	e.preventDefault();
	if (!isDepositBtnInnerPresent) {
		const depositBtn50 = document.createElement('button');
		depositBtn50.className = 'deposit-btn-inner';
		depositBtn50.innerHTML = 'Deposit $50';
		const depositBtn100 = document.createElement('button');
		depositBtn100.className = 'deposit-btn-inner';
		depositBtn100.innerHTML = 'Deposit $100';
		document.getElementById('user-container')
				.insertBefore(depositBtn50, 
				document.getElementById('bio-node'));
		document.getElementById('user-container')
				.insertBefore(depositBtn100, 
				document.getElementById('bio-node'));
		isDepositBtnInnerPresent = true;
		$('.deposit-btn-inner').click(depositInnerHandler);
	} else {
		var innerBtns = document.getElementsByClassName('deposit-btn-inner');
		for (var i = 0; i < innerBtns.length; i++) {
			innerBtns[i].style.display = 'none';
		}
		isDepositBtnInnerPresent = false;
	}
}

function depositInnerHandler(e) {
	e.preventDefault();
	var originalBalance = parseInt($('.userbalance').text().substring(1));
	if ($(this).text() == "Deposit $50") {
		var newBalance = originalBalance + 50;
		$('.userbalance').text('$' + newBalance);
	} else {
		var newBalance = originalBalance + 100;
		$('.userbalance').text('$' + newBalance);
	}
}

var moodId = 0;

function bioHandler(e) {
	var moods = ["Yummy yummy", "Happy", "Eating", "Drinking", "Broken", "Slackin\'"];
	e.preventDefault();
	$('.userbio').text(moods[++moodId % moods.length]);
}

function logoutHandler(e) {
	e.preventDefault();
	window.location.reload(true);
}

