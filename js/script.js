//установка полезных css-переменных
function setCssVariables(){
	document.documentElement.style.setProperty('--w-height',window.innerHeight + 'px');
	document.documentElement.style.setProperty('--w-width',document.body.clientWidth + 'px');
}
setCssVariables();
$(window).resize(setCssVariables);

//модальные окна
$('.image-link').magnificPopup({type:'image'});
$('.modal-link').magnificPopup({type:'inline'});


$('.faq__question').click(function(){
	$(this).toggleClass('faq__question--active').siblings('.faq__answer').slideToggle(300);
})
$('.reviews__slider').slick({
	variableWidth: true,
	prevArrow: '<span class="reviews__arrow reviews__arrow--prev far fa-angle-left" />',
	nextArrow: '<span class="reviews__arrow reviews__arrow--prev far fa-angle-right" />',
	appendArrows: '.reviews__nav'
})
$('.docs__nav li').click(function(){
	if(!$(this).is('.active')){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$(this).parents('.docs').find('.doc-card').hide().filter('[data-category="'+index+'"]').fadeIn(300);
	}
})