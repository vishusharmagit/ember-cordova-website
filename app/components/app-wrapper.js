import Ember from 'ember';
const { $ } = Ember;
export default Ember.Component.extend({
	tagName : '',//These one added for remove ember-view class. (http://stackoverflow.com/questions/23368862/ember-js-view-without-wrapping-div)
	didInsertElement: function(){
			skel.breakpoints({
				desktop: '(min-width: 737px)',
				wide: '(min-width: 1201px)',
				narrow: '(min-width: 737px) and (max-width: 1200px)',
				narrower: '(min-width: 737px) and (max-width: 1000px)',
				mobile: '(max-width: 736px)'
			});

			$(function() {
					var	$window = $(window),
					$body = $('body'),
					$document = $(document);

					// ===== Scroll to Top ====
					$window.scroll(function() {
					    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
					        $('#return-to-top').fadeIn(200);    // Fade in the arrow
					    } else {
					        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
					    }
					});
					$('#return-to-top').click(function() {      // When arrow is clicked
					    $('body,html').animate({
					        scrollTop : 0                       // Scroll to top of body
					    }, 500);
					});

					// Disable animations/transitions until the page has loaded.
					$body.addClass('is-loading');

					$window.on('load', function() {
							$body.removeClass('is-loading');
					});

					// Fix: Placeholder polyfill.
					// $('form').placeholder();

					// Prioritize "important" elements on mobile.
					skel.on('+mobile -mobile', function() {
							$.prioritize('.important\\28 mobile\\29',
									skel.breakpoint('mobile').active
							);
					});

					// Off-Canvas Sidebar.

					// Height hack.
					var $sc = $('#sidebar, #content'), tid;

					$window
						.on('resize', function() {
								window.clearTimeout(tid);
								tid = window.setTimeout(function() {
									$sc.css('min-height', $document.height());
								}, 100);
						})
						.on('load', function() {
								$window.trigger('resize');
						})
						.trigger('resize');

					// Title Bar.
					$(
						'<div id="titleBar">' +
							'<a id="vishu-test" href="#sidebar" class="toggle"></a>' +
							'<span class="title">' + $('#logo').html() + '</span>' +
						'</div>'
					).appendTo($body);

					$( "#vishu-test" ).click(function() {
					  // alert( "Vishu Testing." +skel.breakpoint('mobile').active);
						$('#sidebar')
							.panel({
									delay: 500,
									hideOnClick: true,
									hideOnSwipe: true,
									resetScroll: true,
									resetForms: true,
									side: 'left',
									target: $body,
									visibleClass: 'sidebar-visible'
							});
					});

					// Sidebar
					// $('#sidebar')
					// 	.panel({
					// 			delay: 500,
					// 			hideOnClick: true,
					// 			hideOnSwipe: true,
					// 			resetScroll: true,
					// 			resetForms: true,
					// 			side: 'left',
					// 			target: $body,
					// 			visibleClass: 'sidebar-visible'
					// 	});

					// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
					if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
							$('#titleBar, #sidebar, #main')
								.css('transition', 'none');

			});
	}

});
