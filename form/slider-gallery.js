	const swiper = new Swiper(".swiper", {
	// ページネーションが必要なら追加
	slidesPerView: 1,  /* この行を追加 */
	pagination: {
	el: ".swiper-pagination"
	},
	// ナビボタンが必要なら追加
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	loop: true,
});