
const loadMore = async (url) => {
	let products = null;
	let error = null;

	try {
		const data = await fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify()
		});
		if (!data.ok) {
			throw Error('There was an error!');
		}
		products = await data.json();
	}
	catch(err) {
		error = err.message;
	}

	return products;
}

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

	  // Init AOS
		AOS.init({
			// Global settings:
			disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 50, // was 120 - offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		});
		AOS.refresh();

}, true);

window.addEventListener('load', () => {

	// ------------ Globals ------------
	const html = document.querySelector('html');
	const body = document.body;
	const overlay = document.getElementById('overlay');
	const main_header = document.getElementById('main_header');
	const mobile_header = document.getElementById('mobile_header');
	const toggleMobileHeader = document.getElementById('expand_mobile_menu');

	// ------------ General ------------

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

	// Highlight current nav item
	(function() {
		const nav_links = document.querySelectorAll('#main_header nav .main_links li a');
		if (!nav_links.length) { return; }
		nav_links.forEach(link => {
			if (window.location.href.includes(link.href)) {
				link.classList.add('current_page');
			}
		});
	})();

	// Megamenu interaction
	if (window.innerWidth > 1024) {
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
	}

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

	// Toggle inputs labels
	(function() {
		const input_fields = document.querySelectorAll('.input_field_animated');
		if (!input_fields.length) {
			return;
		}
		for (let i = 0; i < input_fields.length; i++) {
			const input = input_fields[i].querySelector('input');

			input.addEventListener('focus', () => {
				input_fields[i].classList.add('active');
			}, true);

			input.addEventListener('blur', () => {
				if (!input.value) {
					input_fields[i].classList.remove('active');
				}
			}, true);
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

	// Change amounts
	(function() {
		const manage_quantitys = document.querySelectorAll('.manage_quantity');
		if (!manage_quantitys.length) {
			return false;
		}

		function checkQuantity(quantity, product_quantity, quantity_decrease, quantity_increase) {
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
			product_quantity.value = quantity;
		}

		for (let i = 0; i < manage_quantitys.length; i++) {
			const product_quantity = manage_quantitys[i].querySelector('.single_product_quantity');
			const quantity_decrease = manage_quantitys[i].querySelector('.quantity_decrease');
			const quantity_increase = manage_quantitys[i].querySelector('.quantity_increase');

			// Init
			let quantity = 1;
			product_quantity.value = quantity;
			quantity_decrease.disabled = true;

			quantity_decrease.addEventListener('click', () => {
				quantity--;
				checkQuantity(quantity, product_quantity, quantity_decrease, quantity_increase);
			}, true);
			quantity_increase.addEventListener('click', () => {
				quantity++;
				checkQuantity(quantity, product_quantity, quantity_decrease, quantity_increase);
			}, true);
			product_quantity.addEventListener('focus', () => {
				manage_quantitys[i].classList.add('active');
			}, true);
			product_quantity.addEventListener('blur', () => {
				checkQuantity(quantity, product_quantity, quantity_decrease, quantity_increase);
				manage_quantitys[i].classList.remove('active');
			}, true);

		}
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

	// Validation
	(function() {
		const forms = document.querySelectorAll('form.validation');
		if (!forms.length) {
			return;
		}

		forms.forEach(form => {
			const inputs = form.querySelectorAll('input');
			const submit = form.querySelector('button[type=submit]');

			// Init
			submit.disabled = true;

			// Validate inputs
			inputs.forEach(input => {
				input.addEventListener('input', () => {
					if (
						input.checked ||
						(input.required && input.value !== '') ||
						(input.required && input.checked) ||
						!input.required
					) {
						input.classList.remove('invalid');
						input.classList.add('valid');
					} else {
						input.classList.remove('valid');
					}

					const validInputs = form.querySelectorAll('input.valid');
					if (validInputs.length === inputs.length) {
						submit.disabled = false;
					} else {
						submit.disabled = true;
					}
				}, true);
			});

			submit.addEventListener('mouseenter', () => {
				inputs.forEach(input => {
					if (
						input.checked ||
						(input.required && input.value !== '') ||
						(input.required && input.checked) ||
						!input.required
					) {
						input.classList.remove('invalid');
						input.classList.add('valid');
					} else {
						input.classList.remove('valid');
						input.classList.add('invalid');
					}
				});

				const validInputs = form.querySelectorAll('input.valid');
				if (validInputs.length === inputs.length) {
					submit.disabled = false;
				} else {
					submit.disabled = true;
				}
			}, true);
		});
	})();

	// ------------ Catalog ------------

	// Load More
	(function() {
		const load_more = document.getElementById('load_more');
		const cards_wrapper = document.querySelector('.catalog_products .cards');
		const number_of_products = document.getElementById('number_of_products');
		if (!load_more || !cards_wrapper) {
			return;
		}
		const load_more_icon = load_more.querySelector('svg');

		const newCardsHtml = (products, start, end, btn_load_amount, cards_filler_index = null) => {
			let cards_set = '';
			let col_index = 0;

			for (let i = start; i < end; i++) {
				let cardHtml = '';

				if (cards_filler_index && i === cards_filler_index) {
					cardHtml += `
						<a href="#" class="catalog_filler" data-aos="fade-in">
							<img src="./img/catalog_filler.jpg" alt="catalog_filler">
						</a>
					`;
					col_index += 2;
				}
				cardHtml += `<div class="card" data-aos="slide-up" data-aos-delay="${col_index * 50}">`;
					if (products[i].tags.length) {
						cardHtml += '<div class="tags">';
							products[i].tags.forEach(tag => {
								cardHtml += `
									<a href="./archive-product.html?tag=${tag}" class="tag ${tag}">${tag}</a>
								`;
							});
						cardHtml += '</div>';
					}

					cardHtml += products[i].image ? `
						<a class="thumb" href="${products[i].url}">
							<img src="${products[i].image}" alt="product_thumb">
						</a>` : '';

					cardHtml += products[i].title ? `
						<a class="name" href="${products[i].url}">
							<h4>${products[i].title}</h4>
						</a>` : '';

					if (products[i].price_current || products[i].quantity) {
						cardHtml += '<div class="attributes">';

							if (products[i].price_current) {
								cardHtml += '<div class="price">';
									cardHtml += `<p class="price_current">
										<span class="value">${products[i].price_current}</span>
										<span class="units">₪</span>
									</p>`;
									cardHtml += products[i].price_old ? `<p class="price_old">
										<span class="value">${products[i].price_old}</span>
										<span class="units">₪</span>
									</p>` : '';
								cardHtml += '</div>';
							}

							if (products[i].quantity) {
								cardHtml += '<div class="quantity">';
									cardHtml += `
										<span class="value">${products[i].quantity}</span>
										<span class="units">םיעבצ</span>
									`;
								cardHtml += '</div>';
							}

						cardHtml += '</div>';
					}

					cardHtml += `<button class="add_to_cart">ADD TO CART</button>`;
				cardHtml += '</div>';

				cards_set += cardHtml;
				col_index++;

				if (col_index === btn_load_amount) {
					col_index = 0;
				}
			}

			return cards_set;
		}

		// Init variables
		let start_index = 0;
		let btn_load_amount = 5;
		let load_iterations = 0;
		let output_amount = 13;
		let cards_filler_index = 5;
		const urlParams = new URLSearchParams(window.location.search);
		const filter_tag = urlParams.get('tag');

		// Highlight filter button
		if (filter_tag) {
			document.querySelector(`.catalog_products .filters .filter_buttons > a[href*='${filter_tag}']`).classList.add('active');
		} else {
			document.querySelector('.catalog_products .filters .filter_buttons > .all').classList.add('active');
		}

		// Redefine variables due to window width
		if (window.innerWidth <= 480) {
			output_amount = 8;
			btn_load_amount = 4;
		} else if (window.innerWidth <= 768) {
			output_amount = 9;
			btn_load_amount = 3;
		} else if (window.innerWidth <= 1440) {
			output_amount = 10;
			cards_filler_index = 4;
			btn_load_amount = 4;
		}

		// ----------------------- Init load -----------------------
		const initLoadProducts = async (start_index) => {
			let products = null;
			const getProducts = await loadMore('./data/products.json');

			// Count items
			if (!filter_tag) {
				products = getProducts;
			} else {
				products = getProducts.filter(product => {
					return product.tags.includes(filter_tag);
				});
			}
			number_of_products.innerText = products.length;
			if (output_amount > products.length) {
				output_amount = products.length;
				load_more.style.display = 'none';
			}

			cards_wrapper.innerHTML += newCardsHtml(products, start_index, start_index + output_amount, btn_load_amount, cards_filler_index);
		}
		initLoadProducts(start_index);
		start_index += output_amount;

		// ----------------------- Load on button click -----------------------
		const outputProducts = async (start_index) => {
			const products = await loadMore('./data/products.json');

			if (start_index + btn_load_amount >= products.length - 1) {

				setTimeout(() => {
					cards_wrapper.innerHTML += newCardsHtml(products, start_index, products.length);
					load_more.style.display = 'none';
				}, 500);

			} else {

				setTimeout(() => {
					cards_wrapper.innerHTML += newCardsHtml(products, start_index, start_index + btn_load_amount, btn_load_amount);
				}, 500);

			}

		}

		// Button listener
		load_more.addEventListener('click', () => {
			load_iterations++;
			load_more_icon.style.transform = `rotate(${load_iterations * 180}deg)`;

			outputProducts(start_index);
			start_index += btn_load_amount;
		}, true);

	})();

	// ------------ Checkout ------------

	// Recount prices
	(function() {
		const cart_items = document.querySelectorAll('section.checkout .cart_items .cart_item');
		const summary_price = document.querySelector('#summary_price');
		const summary_plus_delivery = document.querySelector('#summary_plus_delivery');
		if (!cart_items.length || !summary_price || !summary_plus_delivery) { return; }

		for (let i = 0; i < cart_items.length; i++) {
			const item_quantity = cart_items[i].querySelector('.single_product_quantity');
			const item_price_el = cart_items[i].querySelector('.price');
			const item_price = parseFloat(item_price_el.innerText.substring(1).replace(',', '.'));

			// console.log(item_quantity, item_price_el);

			item_quantity.addEventListener('input', () => {
				console.log('change');
				item_price_el.innerText = `₪${item_price * item_quantity.value}`;
			}, true);
		}
	})();

	// Delete item
	(function() {
		const cart_items_wrapper = document.querySelector('section.checkout .cart_items');
		const cart_items = document.querySelectorAll('section.checkout .cart_items .cart_item');
		if (!cart_items_wrapper || !cart_items.length) {
			return;
		}
		let items_count = cart_items.length;

		for (let i = 0; i < cart_items.length; i++) {
			cart_items[i].querySelector('.remove_item').addEventListener('click', (e) => {
				e.preventDefault();
				cart_items[i].classList.add('removed');
				setTimeout(() => {
					cart_items[i].remove();
				}, 400);
				items_count--;
				if (items_count === 0) {
					cart_items_wrapper.classList.add('no_items');
				}
			}, true);
		}
	})();

	// Toggle coupon field
	(function() {
		const cart_items = document.querySelector('section.checkout .cart_items');
		const toggle_coupon_field = document.getElementById('toggle_coupon_field');
		if (!cart_items || !toggle_coupon_field) {
			return;
		}
		toggle_coupon_field.addEventListener('click', (e) => {
			e.preventDefault();
			cart_items.classList.toggle('opened_coupon');
			toggle_coupon_field.classList.toggle('active');
		}, true);
	})();

	// ------------ Account ------------

	// Toggle nav on mobile
	(function() {
		const account_header = document.querySelector('.account_nav_header');
		if (!account_header) {
			return;
		}
		account_header.addEventListener('click', () => {
			account_header.classList.toggle('active');
		}, true);
	})();

	// Toggle order details
	(function() {
		const open_details = document.querySelectorAll('.results .open_details button');
		const details = document.querySelectorAll('.results .details');

		if (open_details.length && details.length) {

			for (let i = 0; i < open_details.length; i++) {
				open_details[i].addEventListener('click', () => {
					if (open_details[i].classList.contains('active')) {
						open_details[i].classList.remove('active');
						details[i].classList.remove('active');
					} else {
						open_details.forEach(btn => {
							btn.classList.remove('active');
						});
						details.forEach(detail => {
							detail.classList.remove('active');
						});
						open_details[i].classList.add('active');
						details[i].classList.add('active');
					}
				}, true);
			}

		}
	})();

	// ------------ FAQ ------------

	(function() {

		const faq_block = document.querySelector('.faq_block');

		if (!faq_block) {
			return;
		}

		const catBtns = faq_block.querySelectorAll('.categories button');
		const catContents = faq_block.querySelectorAll('.contents .category');

		// Toggle categories
		for (let i = 0; i < catBtns.length; i++) {
			catBtns[i].addEventListener('click', () => {

				catContents.forEach(catContent => {
					catContent.classList.remove('active');
				});
				setTimeout(() => {
					catContents[i].classList.add('active');
				}, 400);

				catBtns.forEach(catBtn => {
					catBtn.classList.remove('active');
				});
				catBtns[i].classList.add('active');

			}, true);
		}

		// Toggle questions
		for (let i = 0; i < catContents.length; i++) {
			const faqs = catContents[i].querySelectorAll('.faqs .faq');
			const questions = catContents[i].querySelectorAll('.faqs .faq .question');

			for (let j = 0; j < questions.length; j++) {
				questions[j].addEventListener('click', () => {
					faqs.forEach(faq => {
						faq.classList.remove('active');
					});
					faqs[j].classList.add('active');
				}, true);
			}

		}

	})();

}, true);
