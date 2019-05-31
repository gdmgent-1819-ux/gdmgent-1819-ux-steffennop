$(document).ready(function () {

	//Room Slider
	$('.room-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		prevArrow: $('.room-slider-wrap .prev'),
		nextArrow: $('.room-slider-wrap .next'),
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Facility Slider
	$('.facility-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		prevArrow: $('.facility-slider-wrap .prev'),
		nextArrow: $('.facility-slider-wrap .next'),
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//Article Slider
	$('.article-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		prevArrow: $('.article-slider-wrap .prev'),
		nextArrow: $('.article-slider-wrap .next')
	});

	//Magnific Popup
	$('.photo-gallery a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

	//Date Picker
	$('input.datepicker').datepicker({
		format: 'dd/mm/yyyy'
	});

});