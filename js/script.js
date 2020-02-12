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

$('.team__nav li').click(function(){
	if(!$(this).is('.active')){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$(this).parents('.team').find('.person-card').hide().filter('[data-category="'+index+'"]').fadeIn(300);
	}
})
$('.person-card__trigger').click(function(){
	if(!$(this).is('.person-card__trigger--active')){
		$(this).addClass('person-card__trigger--active').siblings().removeClass('person-card__trigger--active');
		var index = $(this).index();
		$(this).closest('.person-card').find('.person-card__tab').hide().eq(index).fadeIn(300);
	}
})
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