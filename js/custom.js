
//
$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});

	AOS.init();

	// check if element is in viewport

	function isInViewport(el) {
		var elemTop = el.getBoundingClientRect().top;
		var elemBottom = el.getBoundingClientRect().bottom;
	  
		var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
		return isVisible;
	}

	// start scroll indicator

	var fillbar = () => {
		var docHeight = $(document).height(), windowHeight = $(window).height(),
		scrollPercent;
		scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
        $('.scroll-indicator-bar').width(scrollPercent + 'vw');
	}

	$(window).scroll(fillbar);

	// end scroll indicator



	// start counter

	var countweb = false;

	var data = [95, 80, 70, 90];

	function counter(index){

		var show = document.querySelectorAll('.js-count')[index],
		number = data[index];
		// if(number>=data[0]){
		// 	return;
		// }
		
		var showInner = show.innerHTML.slice(0, -1);
		let   counter = Number(showInner),
			delay = 1,
			x = Math.floor(number/3),
			y = number;

		counter_js(index);

		function counter_js(index){

			x ++;
			delay = (x-y);
			
			show.innerHTML = counter.toString()+"%";
			document.querySelectorAll('.progress-web')[index].style.width=counter+"%";
			counter ++;
			
			if ( counter <= number ) {
				setTimeout(function(){
					counter_js(index);
				}, delay)    
			} 
		}
	}

	// end counter

	$(window).on('scroll', function(){
		var counters = document.querySelector('.counters');
		if(isInViewport(counters) && !countweb){
			countweb = true;
			
			setTimeout(function(){
				counter(0);
				counter(1);
				counter(2);
				counter(3);
			}, 900);
		}
	});

});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})