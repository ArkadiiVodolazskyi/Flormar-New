
document.addEventListener('DOMContentLoaded', () => {

	// Slicks options
  slickOptions = {
		'banner_slider': {
			rtl: true,
			lazyLoad: 'progressive',
			arrows: false,
			dots: true,
			appendDots: $('.banner_main .slider_nav'),
			speed: 500,
			draggable: false,
			swipe: false,
			focusOnSelect: false,
			infinite: false,
			autoplay: false,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						draggable: true,
						swipe: true,
					},
				}
			],
		},
		'products': {
			rtl: true,
			lazyLoad: 'progressive',
			arrows: true,
			dots: false,
			prevArrow: $(".slider[data-type='products'] + .slider_nav .slick-prev"),
      nextArrow: $(".slider[data-type='products'] + .slider_nav .slick-next"),
			speed: 500,
			draggable: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: 4,
					},
				}
			],
		}
	}

	// Init desktops
	const toSlicks = document.querySelectorAll('.slider');
	if (toSlicks.length) {
		toSlicks.forEach(toSlick => {
			const type = toSlick.getAttribute('data-type');
			$(toSlick).slick(slickOptions[type]);
		});
	}

}, true);

window.addEventListener('load', () => {

	// Globals
	const html = document.querySelector('html');
	const body = document.body;
	const overlay = document.getElementById('overlay');
	const main_header = document.getElementById('main_header');
	const mobile_header = document.getElementById('mobile_header');
	const toggleMobileHeader = document.getElementById('expand_mobile_menu');

	// On window scroll
	(function() {
		let YOffset = window.scrollY;
		if (YOffset > 30) {
			main_header.classList.add('roll');
		} else {
			main_header.classList.remove('roll');
		}
		window.addEventListener('scroll', () => {
			YOffset = window.scrollY;
			if (YOffset > 15) {
				main_header.classList.add('roll');
			} else {
				main_header.classList.remove('roll');
			}
		});
	})();

	// Smooth anchors
	(function() {
		$("a[href^='#']").on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $(this.hash).offset().top
				}, 400, function(){
			});
		});
	})();

	// Loaded animations
	(function() {
		const loading = document.querySelectorAll('.loading');
		loading.forEach(el => {
			setTimeout(() => {
				el.classList.remove('loading');
			}, 500);
		});
	})();

	// Megameny interaction
	(function() {
		const main_links = document.querySelectorAll('#main_header .main_links li a');
		const main_megamenu = document.getElementById('main_megamenu');
		const megaItems = document.querySelectorAll('#main_header #main_megamenu .mega_item');

		if (main_links.length && main_megamenu && megaItems.length) {

			for (let i = 0; i < main_links.length; i++) {
				main_links[i].addEventListener('mouseenter', () => {
					megaItems[i].classList.add('active');
					main_header.classList.add('mega_opened');
					main_megamenu.classList.add('active');
				});
				main_links[i].addEventListener('mouseleave', () => {
					main_megamenu.classList.remove('active');
					main_header.classList.remove('mega_opened');
					megaItems[i].classList.remove('active');
				});

				for (let i = 0; i < megaItems.length; i++) {
					megaItems[i].addEventListener('mouseenter', () => {
						main_links[i].classList.add('active');
						main_header.classList.add('mega_opened');
						main_megamenu.classList.add('active');
						megaItems[i].classList.add('active');
					});
					megaItems[i].addEventListener('mouseleave', () => {
						megaItems[i].classList.remove('active');
						main_megamenu.classList.remove('active');
						main_header.classList.remove('mega_opened');
						main_links[i].classList.remove('active');
					});
				}

			}

		}
	})();

	// Toggle mobile header
	(function() {
		toggleMobileHeader.addEventListener('click', () => {
			overlay.classList.toggle('active');
			mobile_header.classList.toggle('active');
			toggleMobileHeader.classList.toggle('active');
			html.classList.toggle('discroll');

			// Click on overlay
			overlay.addEventListener('click', () => {
				overlay.classList.remove('active');
				mobile_header.classList.remove('active');
				toggleMobileHeader.classList.remove('active');
				html.classList.remove('discroll');
			}, true);

			// Click on links
			const mobileLinks = document.querySelectorAll('#mobile_header nav a');
			mobileLinks.forEach(link => {
				link.addEventListener('click', () => {
					overlay.classList.remove('active');
					mobile_header.classList.remove('active');
					toggleMobileHeader.classList.remove('active');
					html.classList.remove('discroll');
				}, true);
			});
		}, true);
	})();
}, true);
