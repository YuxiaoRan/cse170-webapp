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
}

function likeHandler(e) {
	e.preventDefault();
	var likeBtn = $('.like-btn');
	if(likeBtn.text() == "Like!") {
		likeBtn.text("Liked!");
	} else {
		likeBtn.text("Like!");
	}
}
