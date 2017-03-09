$(document).ready(function() {
	$(".info").hide();
});
	
function showInfo(project, projectID) {
	$(project).fadeIn(500);
}

function hideInfo(project, projectID) {
	$(project).hide();
}

$("#bashme").mouseenter(function(){showInfo("#bashme > span");});
$("#bashme").mouseleave(function(){hideInfo("#bashme > span");});

$("#sop").mouseenter(function(){showInfo("#sop > span");});
$("#sop").mouseleave(function(){hideInfo("#sop >span");});

$("#exquisitecorpse").mouseenter(function(){showInfo("#exquisitecorpse > span");});
$("#exquisitecorpse").mouseleave(function(){hideInfo("#exquisitecorpse > span");});

$("#sassbp").mouseenter(function(){showInfo("#sassbp > span");});
$("#sassbp").mouseleave(function(){hideInfo("#sassbp > span");});

$("#cs").mouseenter(function(){showInfo("#cs > span");});
$("#cs").mouseleave(function(){hideInfo("#cs > span");});
