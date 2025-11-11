$(document).ready(function() {
// Swiper: Slider
	new Swiper('.swiper-partners', {
		loop: true,
		direction: 'vertical',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 2,
	});
	new Swiper('.swiper-team', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 8,
		navigation: {
			nextEl: '.swiper__team-button-next',
			prevEl: '.swiper__team-button-prev',
		}
	});
	new Swiper('.swiper-certificate', {
		loop: true,
		slidesPerView: 6,
		spaceBetween: 24,
		navigation: {
			nextEl: '.swiper__certificate-button-next',
			prevEl: '.swiper__certificate-button-prev',
		},
	});
	new Swiper('.swiper-styles1', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 8,
		navigation: {
			nextEl: '.swiper__styles1-button-next',
			prevEl: '.swiper__styles1-button-prev',
		},
	});
	new Swiper('.swiper-styles2', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 8,
		navigation: {
			nextEl: '.swiper__styles2-button-next',
			prevEl: '.swiper__styles2-button-prev',
		},
	});
	new Swiper('.swiper-styles3', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 8,
		navigation: {
			nextEl: '.swiper__styles3-button-next',
			prevEl: '.swiper__styles3-button-prev',
		},
	});
	new Swiper('.swiper-styles4', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 8,
		navigation: {
			nextEl: '.swiper__styles4-button-next',
			prevEl: '.swiper__styles4-button-prev',
		},
	});
	new Swiper('.swiper-works', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 24,
		navigation: {
			nextEl: '.swiper__works-button-next',
			prevEl: '.swiper__works-button-prev',
		},
	});
	new Swiper('.swiper-review', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 24,
		navigation: {
			nextEl: '.swiper__review-button-next',
			prevEl: '.swiper__review-button-prev',
		},
	});
	new Swiper('.swiper-review-photo', {
		loop: true,
		nested: true, // Добавить во внутренний свайпер
		slidesPerView: 1,
		spaceBetween: 24,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
    	},
	});
	new Swiper('.swiper-review-photo2', {
		loop: true,
		nested: true,
		slidesPerView: 1,
		spaceBetween: 24,
		
	});
});

Fancybox.bind('[data-fancybox]', {
	Carousel: {
		infinite: false,
	},
	on: {
		close: () => {
			console.log('Fancybox is closing!');
		},
	},
});