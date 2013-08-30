$("#message-in").focus();

$(document).keydown(function(evt) {

	if (evt.keyCode == 13) {
		$("#message-out").text("You have entered: " + $("#message-in").val());
	}
});