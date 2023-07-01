$(document).ready(function () {
	const collArrow = $('#coll__link-img');
	const collArrowLine = $('#coll__link-img line');
	const tip = $('#coll__link-img path');

	const collScroll = $('.coll__inner');
	collScroll.scrollLeft(collScroll.prop('clientWidth') / 4);

	const btnAddListMain = $('.btn__box-item--3');
	const btnAddListMainPrice = $('.btn__box-item--3 .btn__box-item--subtitle');
	const btnAddlist1 = $('.btn__addlist--1');
	const btnAddlist2 = $('.btn__addlist--2');
	const btnAddlist3 = $('.btn__addlist--3');
	const btnAddlist4 = $('.btn__addlist--4');
	const btnAddlist5 = $('.btn__addlist--5');

	const btnBoxItem1 = $('.btn__box-item--1 .btn__box-list--item--1');
	const btnBoxItem2 = $('.btn__box-item--1 .btn__box-list--item--2');
	const btnBoxItem3 = $('.btn__box-item--1 .btn__box-list--item--3');
	const btnBoxItem4 = $('.btn__box-item--1 .btn__box-list--item--4');
	const btnBoxItem5 = $('.btn__box-item--1 .btn__box-list--item--5');

	const btnItem = $('.menu__btn-list--1 .menu__btn-item');

	// Menu Button
	btnBoxItem1.on('mouseover', () => {
		btnAddlist1.css('display', 'block');
		btnAddListMain.css('opacity', '0');
		btnAddListMainPrice.css('opacity', '0');
	})
	btnBoxItem1.on('mouseout', () => {
		btnAddlist1.css('display', 'none');
		btnAddListMain.css('opacity', '1');
		btnAddListMainPrice.css('opacity', '1');
	})


	btnBoxItem2.on('mouseover', () => {
		btnAddlist2.css('display', 'block');
		btnAddListMain.css('opacity', '0');
		btnAddListMainPrice.css('opacity', '0');
	})
	btnBoxItem2.on('mouseout', () => {
		btnAddlist2.css('display', 'none');
		btnAddListMain.css('opacity', '1');
		btnAddListMainPrice.css('opacity', '1');
	})


	btnBoxItem3.on('mouseover', () => {
		btnAddlist3.css('display', 'block');
		btnAddListMain.css('opacity', '0');
		btnAddListMainPrice.css('opacity', '0');
	})
	btnBoxItem3.on('mouseout', () => {
		btnAddlist3.css('display', 'none');
		btnAddListMain.css('opacity', '1');
		btnAddListMainPrice.css('opacity', '1');
	})


	btnBoxItem4.on('mouseover', () => {
		btnAddlist4.css('display', 'block');
		btnAddListMain.css('opacity', '0');
		btnAddListMainPrice.css('opacity', '0');
	})
	btnBoxItem4.on('mouseout', () => {
		btnAddlist4.css('display', 'none');
		btnAddListMain.css('opacity', '1');
		btnAddListMainPrice.css('opacity', '1');
	})


	btnBoxItem5.on('mouseover', () => {
		btnAddlist5.css('display', 'block');
		btnAddListMain.css('opacity', '0');
		btnAddListMainPrice.css('opacity', '0');
	})
	btnBoxItem5.on('mouseout', () => {
		btnAddlist5.css('display', 'none');
		btnAddListMain.css('opacity', '1');
		btnAddListMainPrice.css('opacity', '1');
	})

	// Burger Menu Button
	for (let item of btnItem) {
		item.addEventListener('click', (e) => {
			for (let el of btnItem) {
				$(el.firstElementChild).css('display', 'none');
			}
			$(e.target.firstElementChild).css('display', 'block');
		})
	}

	// Main Slider
	$('.slider__inner').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		collArrows: false,
		fade: true,
		cssEase: 'linear',
	});

	// Coll Arrows
	collArrow.on('mouseover', () => {
		collArrowLine.attr('stroke', '#1273EB')
		collArrowLine.attr('x1', '-5')
		tip.attr('fill', '#1273EB')
	})
	collArrow.on('mouseout', () => {
		collArrowLine.attr('stroke', '#464646')
		collArrowLine.attr('x1', '-20')
		tip.attr('fill', '#464646')
	})


	// Our Slider
	// const ourSlides = $('.our__slides');
	// const ourSlide = $('.our__slide');
	// const ourImg = $('.our__slide-img');
	// const imgActive = $('.our__slide-active');
	// const ourArrowLeft = $('.arrow__media-left');
	// const ourArrowRight = $('.arrow__media-right');

	// $(ourSlides.children().first().children()).addClass('our__slide-active');
	// ourArrowRight.on('click', (e) => {
	// 	const target = e.target;
	// 	const firstChild = ourSlides.children().first();
	// 	firstChild.children().removeClass('our__slide-active');
	// 	firstChild.remove();
	// 	ourSlides.append(firstChild);

	// 	$(ourSlides.children().first().children()).addClass('our__slide-active');
	// })

	// ourArrowLeft.on('click', (e) => {
	// 	const target = e.target;
	// 	const firstChild = ourSlides.children().first();
	// 	const lastChild = ourSlides.children().last();

	// 	firstChild.children().removeClass('our__slide-active');
	// 	lastChild.remove();
	// 	ourSlides.prepend(lastChild);
	// 	lastChild.children().addClass('our__slide-active');
	// })

	// Menu Burger
	$('.header__burger-img').click(function () {
		$('.header__burger-menu').toggleClass('active');
		$('.header__burger').toggleClass('active');
	})

	// Our Slider (Slick Slider)
	$('.our__slides').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<svg id="arrow__media" class="arrow__media-left" xmlns="http://www.w3.org/2000/svg" width="37.905" height="37.905" viewBox="0 0 37.905 37.905" style="transform: rotate(180deg)"> <g id="Layer_x0020_1" transform="translate(4.738 9.257)"> <path id="Контур_21" data-name="Контур 21" d="M2.038,3.2a1.185,1.185,0,1,0,0,2.369H28.1a1.185,1.185,0,0,0,0-2.369H2.038Z" transform="translate(-0.853 5.311)" fill="#464646" /> <path id="Контур_22" data-name="Контур 22" d="M6.036,2.014A1.184,1.184,0,0,0,4.361,3.689l7.674,7.674L4.361,19.037a1.184,1.184,0,0,0,1.675,1.675l8.5-8.5.007-.007a1.185,1.185,0,0,0,0-1.675h0L6.036,2.014Z" transform="translate(13.535 -1.667)" fill="#464646" /> </g> <rect id="Прямоугольник_17" data-name="Прямоугольник 17" width="37.905" height="37.905" fill="none" /></svg>',
		nextArrow: '<svg id="arrow__media" class="arrow__media-right" xmlns="http://www.w3.org/2000/svg" width="37.905" height="37.905" viewBox="0 0 37.905 37.905"> <g id="Layer_x0020_1" transform="translate(4.738 9.257)"> <path id="Контур_21" data-name="Контур 21" d="M2.038,3.2a1.185,1.185,0,1,0,0,2.369H28.1a1.185,1.185,0,0,0,0-2.369H2.038Z" transform="translate(-0.853 5.311)" fill="#464646" /> <path id="Контур_22" data-name="Контур 22" d="M6.036,2.014A1.184,1.184,0,0,0,4.361,3.689l7.674,7.674L4.361,19.037a1.184,1.184,0,0,0,1.675,1.675l8.5-8.5.007-.007a1.185,1.185,0,0,0,0-1.675h0L6.036,2.014Z" transform="translate(13.535 -1.667)" fill="#464646" /> </g> <rect id="Прямоугольник_17" data-name="Прямоугольник 17" width="37.905" height="37.905" fill="none" /></svg>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	// Submenu
	$('.header__menu-item--1').click(function () {
		$('.header__submenu-1').toggleClass('active');
		$('.header__menu-item--1 ').toggleClass('active');

		$('.header__submenu-2').removeClass('active');
		$('.header__menu-item--2 ').removeClass('active');

		$('.header__submenu-3').removeClass('active');
		$('.header__menu-item--3 ').removeClass('active');

		$('.header__submenu-4').removeClass('active');
		$('.header__menu-item--4 ').removeClass('active');

		$('.header__submenu-5').removeClass('active');
		$('.header__menu-item--5 ').removeClass('active');
	})


	$('.header__menu-item--2').click(function () {
		$('.header__submenu-2').toggleClass('active');
		$('.header__menu-item--2 ').toggleClass('active');

		$('.header__submenu-1').removeClass('active');
		$('.header__menu-item--1 ').removeClass('active');

		$('.header__submenu-3').removeClass('active');
		$('.header__menu-item--3 ').removeClass('active');

		$('.header__submenu-4').removeClass('active');
		$('.header__menu-item--4 ').removeClass('active');

		$('.header__submenu-5').removeClass('active');
		$('.header__menu-item--5 ').removeClass('active');
	})


	$('.header__menu-item--3').click(function () {
		$('.header__submenu-3').toggleClass('active');
		$('.header__menu-item--3 ').toggleClass('active');

		$('.header__submenu-1').removeClass('active');
		$('.header__menu-item--1 ').removeClass('active');

		$('.header__submenu-2').removeClass('active');
		$('.header__menu-item--2 ').removeClass('active');

		$('.header__submenu-4').removeClass('active');
		$('.header__menu-item--4 ').removeClass('active');

		$('.header__submenu-5').removeClass('active');
		$('.header__menu-item--5 ').removeClass('active');
	})


	$('.header__menu-item--4').click(function () {
		$('.header__submenu-4').toggleClass('active');
		$('.header__menu-item--4 ').toggleClass('active');

		$('.header__submenu-1').removeClass('active');
		$('.header__menu-item--1 ').removeClass('active');

		$('.header__submenu-2').removeClass('active');
		$('.header__menu-item--2 ').removeClass('active');

		$('.header__submenu-3').removeClass('active');
		$('.header__menu-item--3 ').removeClass('active');

		$('.header__submenu-5').removeClass('active');
		$('.header__menu-item--5 ').removeClass('active');
	})

	$('.header__menu-item--5').click(function () {
		$('.header__submenu-5').toggleClass('active');
		$('.header__menu-item--5 ').toggleClass('active');

		$('.header__submenu-1').removeClass('active');
		$('.header__menu-item--1 ').removeClass('active');

		$('.header__submenu-2').removeClass('active');
		$('.header__menu-item--2 ').removeClass('active');

		$('.header__submenu-3').removeClass('active');
		$('.header__menu-item--3 ').removeClass('active');

		$('.header__submenu-4').removeClass('active');
		$('.header__menu-item--4 ').removeClass('active');
	});

	$('.header__submenu-item').click(function () {
		$('.header__submenu').removeClass('active');
		$('.header__menu-item').removeClass('active');
	});



	$(".main").mouseover(function () {
		$(".header__submenu-1").removeClass('active');
		$(".header__submenu-2").removeClass('active');
		$(".header__submenu-3").removeClass('active');
		$(".header__submenu-4").removeClass('active');
		$(".header__submenu-5").removeClass('active');
		$(".header__menu-item--1").removeClass('active');
		$(".header__menu-item--2").removeClass('active');
		$(".header__menu-item--3").removeClass('active');
		$(".header__menu-item--4").removeClass('active');
		$(".header__menu-item--5").removeClass('active');
	});
});