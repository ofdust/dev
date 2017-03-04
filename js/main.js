$(document).ready(function() {
	$(".info").hide();
});
	
function showInfo(project, projectID) {
	$(project).fadeIn(500);
}

function hideInfo(project) {
	$(project).hide();
}

$("#sop").mouseenter(function(){showInfo("#sop > span");});
$("#sop").mouseleave(function(){hideInfo("#sop >span");});

$("#exquisitecorpse").mouseenter(function(){showInfo("#exquisitecorpse > span");});
$("#exquisitecorpse").mouseleave(function(){hideInfo("#exquisitecorpse >span");});