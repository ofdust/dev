$(document).ready(function() {
	$(".info").hide();
});
	
function showInfo(projectID) {
	$(projectID).fadeIn(500);
	console.log("pls work");
}

function hideInfo(projectID) {
	$(projectID).hide();
}

var SOP = document.getElementById("sop");
SOP.addEventListener("mouseover", function(){showInfo("#sop > span");}, false);
SOP.addEventListener("mouseout", function(){hideInfo("#sop >span");}, false);