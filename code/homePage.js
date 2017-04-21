var splide= document.querySelector('.splide');
var moveSplide = splide.querySelector('span');
var lists = document.querySelector('.lists');
var li = lists.querySelectorAll('li');
var html = document.querySelector('html');
var body = document.querySelector('body');

/*function changeFontSise (argument) {

    var body = document.querySelector('body');

    html.style.fontSize = (window.screen.availWidth/640)*20 + 'px';
    if (window.screen.availWidth <= 640) {
        body.style.width = '100%';
    }
}*/
//changeFontSise();


function moving (event) {

    var el = event.srcElement;
    var name = el.className;
    //var distance = parseFloat(moveSplide.style.marginLeft);
    
    switch (name) {

        case 'one':
            moveSplide.style.marginLeft = '0.0rem';             
            break;

        case 'two':
            moveSplide.style.marginLeft = '5.0rem';           
            break;
            
        case 'three':
            moveSplide.style.marginLeft = '10.3rem';            
            break;
            
        case 'four':
            moveSplide.style.marginLeft = '15.4rem';           
            break;
            
        case 'five':
            moveSplide.style.marginLeft = '20.7rem';
            break;
    }

}


for (var i = 0; i <5; i++) {
    li[i].addEventListener('click', moving, false);
}

//轮播图

function circle () {
    var img = document.querySelector('.img');
    var index = 0;

    function go () {
        if (parseInt(img.style.left) === -96) {
            img.style.left = '0rem';
        }
        if (index !== 32) {
            index += 1;
            img.style.left = parseInt(img.style.left) - 1 + 'rem';

            setTimeout(go, 10);
        }
        
    }
    go();

    setTimeout(circle, 3000);
}

//setTimeout(circle, 3000);
circle();

var dots = document.querySelector('.dots');
var spans = dots.querySelectorAll('span');
var index = 0;

function changeDots () {

    for (var i = 0; i < spans.length; i++) {
        if (spans[i].className == "on"){
            spans[i].className = " off";
            break;
        }
    }
    index += 1;
    if (index === 3) {
        index = 0;
    }
    spans[index].setAttribute("class","on");


    setTimeout(changeDots, 3000);
}

setTimeout(changeDots, 3000);


//下拉菜单
var btn_down = document.querySelector('.menu');
var btn_up = document.querySelector('.up_menu');
var menu = document.querySelector('#menu');

btn_down.addEventListener('click', function () {
    
    menu.style.display = 'block';

}, false);

btn_up.addEventListener('click', function () {
    
    menu.style.display = 'none';
}, false);






