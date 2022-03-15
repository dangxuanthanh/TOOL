
$(document).ready(function () {
	toggleMenu();
	mappingMenu();
	tabActive();
	scrollTop();
	swiperInit();
	stopPropagation();
})
function toggleMenu() {
	$('.button_menu .btn').on("click", function (e) {
		e.stopPropagation();
		$(this).toggleClass("active");
		$(".mobile_wrap").toggleClass("active");
	});
	$(document).on("click", function (e) {
		$(".mobile_wrap").removeClass('active');
		$(".button_menu .btn").removeClass('active');
	});

}
function mappingMenu() {
	let menu = $("header .nav_bar .menu").mapping({
		mobileWrapper: "header .mobile_wrap",
		mobileMethod: "appendTo",
		desktopWrapper: "header .nav_left",
		desktopMethod: "prependTo",
		breakpoint: 993,
	});
	let icon = $("header .nav_bar .icon").mapping({
		mobileWrapper: "header .mobile_wrap",
		mobileMethod: "appendTo",
		desktopWrapper: "header .nav_right",
		desktopMethod: "prependTo",
		breakpoint: 993,
	});
}
function tabActive() {
	$('.tab_link').on("click", function () {
		var tabID = $(this).attr('data_tab');

		$(this).addClass('active').siblings().removeClass('active');
		$('#tab_' + tabID).addClass('active').siblings().removeClass('active');
	});

}
function scrollTop() {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$('.back_to_top').addClass('active');
		} else {
			$('.back_to_top').removeClass('active');
		}
	});
	$('.back_to_top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '200');
	});
}
function swiperInit() {
	var homerSwiper = new Swiper(".home_banner .swiper-container", {
		slidesPerView: 1,
		autoplay: {
			delay: 3000
		},
		effect: "fade",
		speed: 800,
		loop: true,
		lazy: true,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: "true"
		}
	});
	var tabSwiper = new Swiper(".models .tab_content .swiper-container", {
		slidesPerView: 1,
		autoplay: {
			delay: 3000
		},
		speed: 800,
		lazy: true,
		observer: true,
		observeParents: true,
		breakpointsInverse: true,
		//         breakpoints: {
		//             200: {
		//                 slidesPerView: 1,
		//             },
		//             375: {
		//                 slidesPerView: 1,
		//             },
		//             576: {
		//                 slidesPerView: 2,
		//             },
		//             769: {
		//                 slidesPerView: 4,
		//             },
		//             1200: {
		//                 slidesPerView: 5,
		//             },
		//         },
		//         navigation: {
		//             nextEl: ".btn-next-" + index,
		//             prevEl: ".btn-prev-" + index,
		//         },
	});
}
function stopPropagation() {
	$(".mobile_wrap").click(function (e) {
		e.stopPropagation();
	});
}
