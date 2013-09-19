// In DevTools, click Settings -> Workspace -> Add folder
// Sources -> right click on file -> "Map to file system resource..."

$("#message-in").focus();

$(document).keydown(function(evt) {

	if (evt.keyCode == 13) {
		$("#message-out").text("You have entered: " + $("#message-in").val() + " test");
	}
});