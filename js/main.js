// var run;

// var mq = window.matchMedia( "(min-width: 768px)" );
// if (mq.matches) {
// 	$(".info").show();
// 	run == false;
// }
// else {
// 	run == true;
// }

// if (run == true) {
	$(".info").hide();
// }
// else {
// 	//$(".info").html
// }

var mq = window.matchMedia( "(max-width: 712px)" );
if (mq.matches) {
	$(".info").show();
	$(".info").css("background", "rgba(0,0,0,.7)");
	//$(".project").css("background", "+linear-gradient( to bottom, rgba(0,0,0,.2), rgba(0,0,0,.8))+");

}
else {
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

	$("#fc").mouseenter(function(){showInfo("#fc > span");});
	$("#fc").mouseleave(function(){hideInfo("#fc > span");});

	$("#float").mouseenter(function(){showInfo("#float > span");});
	$("#float").mouseleave(function(){hideInfo("#float > span");});


}

	
// function showInfo(project, projectID) {
// 	$(project).fadeIn(500);
// }

// function hideInfo(project, projectID) {
// 	$(project).hide();
// }

// $("#bashme").mouseenter(function(){showInfo("#bashme > span");});
// $("#bashme").mouseleave(function(){hideInfo("#bashme > span");});

// $("#sop").mouseenter(function(){showInfo("#sop > span");});
// $("#sop").mouseleave(function(){hideInfo("#sop >span");});

// $("#exquisitecorpse").mouseenter(function(){showInfo("#exquisitecorpse > span");});
// $("#exquisitecorpse").mouseleave(function(){hideInfo("#exquisitecorpse > span");});

// $("#sassbp").mouseenter(function(){showInfo("#sassbp > span");});
// $("#sassbp").mouseleave(function(){hideInfo("#sassbp > span");});

// $("#cs").mouseenter(function(){showInfo("#cs > span");});
// $("#cs").mouseleave(function(){hideInfo("#cs > span");});

// $("#fc").mouseenter(function(){showInfo("#fc > span");});
// $("#fc").mouseleave(function(){hideInfo("#fc > span");});

// $("#float").mouseenter(function(){showInfo("#float > span");});
// $("#float").mouseleave(function(){hideInfo("#float > span");});



