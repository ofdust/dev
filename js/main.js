
$(".info").hide();


var mq = window.matchMedia( "(max-width: 712px)" );
if (mq.matches) {
	$(".info").show();
	$(".info").css("background", "rgba(0,0,0,.7)");

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

	$("#flex").mouseenter(function(){showInfo("#flex > span");});
	$("#flex").mouseleave(function(){hideInfo("#flex > span");});

	$("#parallax").mouseenter(function(){showInfo("#parallax > span");});
	$("#parallax").mouseleave(function(){hideInfo("#parallax > span");});

	$("#wordpress").mouseenter(function(){showInfo("#wordpress > span");});
	$("#wordpress").mouseleave(function(){hideInfo("#wordpress > span");});

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



