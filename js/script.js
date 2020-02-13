//установка полезных css-переменных
function setCssVariables(){
	document.documentElement.style.setProperty('--w-height',window.innerHeight + 'px');
	document.documentElement.style.setProperty('--w-width',document.body.clientWidth + 'px');
}
setCssVariables();
$(window).resize(setCssVariables);

//поля с плавающим placeholder
$('.field__input').each(function(){
	if(this.value){
		$(this).parents('.field').addClass('.field--fill');
	}
})
$('.field__input').change(function(){
	if(this.value){
		$(this).parents('.field').addClass('field--fill');
	}else{
		$(this).parents('.field').removeClass('field--fill');
	}
})

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
	appendArrows: '.reviews__nav',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: false,
				adaptiveHeight: true
			}
		}
	]
})
$('.docs__nav li').click(function(){
	if(!$(this).is('.active')){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$(this).parents('.docs').find('.doc-card').hide().filter('[data-category="'+index+'"]').fadeIn(300);
	}
})

//Навигация по странице
function pageNav(entries, observer){
  var element = entries[0].target;
	if(entries[0].isIntersecting && element.id){
		$('.header__nav .active').removeClass('active');
		$('.header__nav a').filter('[href="#'+element.id+'"]').parent().addClass('active');
	}
	if(!entries[0].isIntersecting && element.id){
		$('.header__nav a').filter('[href="#'+element.id+'"]').parent().removeClass('active');
	}
};
$('.page-section').each(function(){
	var sectionObserver = new IntersectionObserver(pageNav,{threshold: .2,rootMargin: '0px 0px -30% 0px'});
	sectionObserver.observe(this);
})

$('.header__nav a').click(function(e){
	e.preventDefault();
	var target = $(this.hash);
	if(target.length){
		//закрываем мобильное меню
		$('.menu-btn').removeClass('menu-btn--active');
		$('.header__menu').removeClass('header__menu--open');
		
		//плавная прокрутка
		$('html,body').animate({
			scrollTop: target.offset().top - 70
		},function(){
			//intersectionObserver не всегда корректно определяет элемент после такой прокрутки, особенно если просматриваемых секций несколько на экране, оэтому перестраховываюсь
			$(e.target).parent().addClass('active').siblings().removeClass('active');
		})
	}
})

//Мобильное меню
$('.menu-btn').click(function(){
	$(this).toggleClass('menu-btn--active');
	$('.header__menu').toggleClass('header__menu--open')
})

//Карта
$('[data-coords][id]').each(function(){
	var map = this;
	ymaps.ready(function(){
		initMap(map);
	});
})
function initMap(map){
	var coords = $(map).data('coords').replace(/[^\d\,\.]/g,'').split(',') || [];
	
	var myMap = new ymaps.Map(map.id, {
		center: coords,
		zoom: 15,
		controls: []
	});					
	myPlacemark = new ymaps.Placemark(coords, 
		{
			hintContent: '',
			balloonContent: ''
		}
	);
	myMap.geoObjects.add(myPlacemark);
}