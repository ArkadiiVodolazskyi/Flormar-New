
document.addEventListener('DOMContentLoaded', () => {

	// Slicks options
  slickOptions = {
		'banner_slider': {
			rtl: true,
			lazyLoad: 'progressive',
			arrows: false,
			dots: true,
			appendDots: $('.banner_main .slider_nav'),
			draggable: false,
			swipe: false,
			focusOnSelect: false,
			infinite: false,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						draggable: true,
						swipe: true,
						touchThreshold: 500
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
					breakpoint: 1601,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 2,
						draggable: true,
						touchThreshold: 300,
						swipe: true,
					},
				},
				{
					breakpoint: 411,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						draggable: true,
						touchThreshold: 300,
						swipe: true,
					},
				},
			],
		},
		'single_product_big': {
			rtl: true,
			lazyLoad: 'progressive',
			arrows: false,
			dots: false,
			speed: 500,
			draggable: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						swipe: true,
						draggable: true,
						touchThreshold: 300,
						dots: true,
						appendDots: $('.choose_product .product_gallery .slider_nav'),
					},
				},
			]
		},
		'single_product_small': {
			rtl: true,
			lazyLoad: 'progressive',
			arrows: true,
			dots: false,
			prevArrow: $(".choose_product .product_gallery .small_images .slick-prev"),
      nextArrow: $(".choose_product .product_gallery .small_images .slick-next"),
			asNavFor: $(".choose_product .product_gallery .big_images .slider"),
			speed: 500,
			draggable: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			centerMode: true
		},
		'single_product_colors': {
			rtl: true,
			arrows: true,
			dots: false,
			prevArrow: $(".choose_product .product_variations .slider_colors .slick-prev"),
      nextArrow: $(".choose_product .product_variations .slider_colors .slick-next"),
			speed: 500,
			draggable: false,
			slidesToShow: 7,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						swipe: true,
						draggable: true,
						touchThreshold: 300
					},
				},
				{
					breakpoint: 769,
					settings: {
						swipe: true,
						draggable: true,
						touchThreshold: 300,
						arrows: false
					},
				},
				{
					breakpoint: 376,
					settings: {
						swipe: true,
						draggable: true,
						touchThreshold: 300,
						arrows: false,
						slidesToShow: 6,
					},
				},
			]
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

	// Open/close mobile menu
	(function() {
		const open_mobile = document.querySelector('#expand_mobile_menu');
		if (open_mobile) {
			open_mobile.addEventListener('click', () => {
				overlay.classList.add('active');
				mobile_header.classList.add('active');
				html.classList.add('discroll');
			}, true);
			overlay.addEventListener('click', () => {
				html.classList.remove('discroll');
				mobile_header.classList.remove('active');
				overlay.classList.remove('active');
			}, true);
		}
	})();

	// Mobile menu interactions
	(function() {
		const open_links_mobile = document.querySelectorAll('#mobile_header .main_links_mobile .expand_item');
		const sub_links_nav = document.querySelector('#mobile_header > nav');
		const sub_links_blocks = document.querySelectorAll('#mobile_header .sub_links_mobile .sub_links_block');
		const sub_links_backs = document.querySelectorAll('#mobile_header .sub_links_mobile .sub_links_block .back');

		if (open_links_mobile.length && sub_links_nav && sub_links_blocks.length && sub_links_backs.length) {
			if (open_links_mobile.length === sub_links_blocks.length) {

				for (let i = 0; i < open_links_mobile.length; i++) {
					open_links_mobile[i].addEventListener('click', () => {
						sub_links_blocks[i].classList.add('active');
						sub_links_nav.classList.add('show_sublinks');
					}, true);
				}

				for (let i = 0; i < sub_links_backs.length; i++) {
					sub_links_backs[i].addEventListener('click', () => {
						sub_links_nav.classList.remove('show_sublinks');
						setTimeout(() => {
							document.querySelector('#mobile_header .sub_links_mobile .sub_links_block.active').classList.remove('active');
						}, 500);
					}, true);
				}

			} else {
				console.log(`open_links_mobile.length not equals sub_links_blocks.length: ${open_links_mobile.length} : ${sub_links_blocks.length}`);
			}
		} else {
			console.log(`Something is wrong with mobile links`);
		}
	})();

	// ------------ Single Product ------------

	// Click on slides
	(function() {
		const small_images = document.querySelectorAll('.choose_product .product_gallery .small_images .slide');
		$(small_images).click(function(e) {
			$(small_images).removeClass('slick-current');
			e.currentTarget.classList.add('slick-current');
			$(".slider[data-type='single_product_small'").slick('slickGoTo', parseInt(e.currentTarget.getAttribute('data-slick-index')));
			$(".slider[data-type='single_product_big'").slick('slickGoTo', parseInt(e.currentTarget.getAttribute('data-slick-index')));
		});
	})();

	// Toggle list of all colors
	(function() {
		const show_all_colors = document.getElementById('show_all_colors');
		const all_colors = document.getElementById('all_colors');

		if (!show_all_colors || !all_colors) {
			return false;
		}

		if (show_all_colors && all_colors) {
			show_all_colors.addEventListener('click', () => {
				show_all_colors.classList.toggle('active');
				all_colors.classList.toggle('active');
			}, true);
		}

		body.addEventListener('click', (e) => {
			if (e.target !== show_all_colors) {
				show_all_colors.classList.remove('active');
				all_colors.classList.remove('active');
			}
		}, true);
	})();

	// Change amount
	(function() {
		const manage_quantity = document.querySelector('.choose_product .manage_quantity');
		const single_product_quantity = document.getElementById('single_product_quantity');
		const quantity_decrease = document.getElementById('quantity_decrease');
		const quantity_increase = document.getElementById('quantity_increase');

		if (!single_product_quantity) {
			return false;
		}

		// Init
		let quantity = 1;
		single_product_quantity.value = quantity;
		quantity_decrease.disabled = true;

		function checkQuantity(quantity) {
			if (quantity <= 1) {
				quantity = 1;
				quantity_decrease.disabled = true;
			} else if (quantity >= 99) {
				quantity = 99;
				quantity_increase.disabled = true;
			} else {
				quantity_decrease.disabled = false;
				quantity_increase.disabled = false;
			}
			single_product_quantity.value = quantity;
		}

		quantity_decrease.addEventListener('click', () => {
			quantity--;
			checkQuantity(quantity);
		}, true);
		quantity_increase.addEventListener('click', () => {
			quantity++;
			checkQuantity(quantity);
		}, true);
		single_product_quantity.addEventListener('focus', () => {
			manage_quantity.classList.add('active');
		}, true);
		single_product_quantity.addEventListener('blur', () => {
			checkQuantity(quantity);
			manage_quantity.classList.remove('active');
		}, true);

	})();

	// Hover on colors reveal thumb of this product's color
	(function() {
		const list_all_colors = document.querySelectorAll('#all_colors a');
		const slider_all_colors = document.querySelectorAll(".slider[data-type='single_product_colors'] .slide");

		const big_slider = document.querySelector('.choose_product .product_gallery .big_images .slider');
		const other_colors_wrapper = document.querySelector('.choose_product .product_gallery .other_colors');
		const other_colors = document.querySelectorAll('.choose_product .product_gallery .other_colors img');

		if (!list_all_colors.length || !slider_all_colors.length || !big_slider || !other_colors_wrapper || !other_colors.length) {
			return false;
		}

		if ( other_colors.length === list_all_colors.length
			&& other_colors.length === slider_all_colors.length
			&& other_colors_wrapper !== undefined ) {

			for (let i = 0; i < list_all_colors.length; i++) {

				list_all_colors[i].addEventListener('mouseover', () => {
					big_slider.classList.add('inactive');
					other_colors[i].classList.add('active');
					other_colors_wrapper.classList.add('active');
				}, true);
				list_all_colors[i].addEventListener('mouseout', () => {
					other_colors_wrapper.classList.remove('active');
					other_colors.forEach(item => {
						item.classList.remove('active');
					});
					big_slider.classList.remove('inactive');
				}, true);

				slider_all_colors[i].addEventListener('mouseover', () => {
					big_slider.classList.add('inactive');
					other_colors[i].classList.add('active');
					other_colors_wrapper.classList.add('active');
				}, true);
				slider_all_colors[i].addEventListener('mouseout', () => {
					other_colors.forEach(item => {
						item.classList.remove('active');
					});
					other_colors_wrapper.classList.remove('active');
					big_slider.classList.remove('inactive');
				}, true);

			}

		} else {
			console.error('There is something with product colors interactions.');
		}
	})();

	// Add to fav
	(function() {
		const add_to_fav = document.getElementById('add_to_fav');
		if (!add_to_fav) {
			return;
		}
		add_to_fav.addEventListener('click', () => {
			add_to_fav.classList.toggle('active');
		}, true);
	})();

}, true);
