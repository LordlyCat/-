//获取轮播图图片
var loop = document.querySelector('.loop');
var imgs = loop.querySelectorAll('img');


function getImgs () {
    ajax({
        method: 'GET',
        url: '/sliders',
        success: showImgs,
    });
}

function showImgs (data) {
    
    var jsonObj = JSON.parse(data);

    if (jsonObj.length > 2) {
        imgs[0].src = jsonObj[0].imgURL;
        imgs[1].src = jsonObj[1].imgURL;
        imgs[2].src = jsonObj[2].imgURL;
        imgs[3].src = jsonObj[0].imgURL;
    }else {
        imgs[0].src = jsonObj[0].imgURL;
        imgs[1].src = jsonObj[1].imgURL;
        imgs[2].src = jsonObj[0].imgURL;
        imgs[3].src = jsonObj[1].imgURL;
    }
    

}

getImgs();



//获取新闻
function getNews () {

    ajax({
        method: 'GET',
        url: '/news?num=4',
        success: showData,
    });
}

function showData (data) {

    var jsonObj = JSON.parse(data);

    var title = document.querySelectorAll('.headline');
    var img = document.querySelectorAll('.pic');
    var description = document.querySelectorAll('.description');
    var postnumber = document.querySelectorAll('.postnumber');
    var type = document.querySelectorAll('.type');
    var tit = document.querySelector('.tit');
    var words = document.querySelector('.words');
    var mold = document.querySelector('.mold');


    tit.innerHTML = jsonObj[0].title;
    if (jsonObj[0].title.length > 20) {
        tit.innerHTML = jsonObj[0].title.substring(0, 20) + '...';
    }
    if (jsonObj[0].type !== null) {
        mold.innerHTML = jsonObj[0].type;
        mold.style.backgroundColor = jsonObj[0].typeColor;
    }else {
        words.removeChild(mold);
    }

    for (var i = 0; i < jsonObj.length; i++) {

        title[i].innerHTML = jsonObj[i].title;
        img[i].src = jsonObj[i].imgURL;

        description[i].innerHTML = jsonObj[i].description;
        if (description[i].innerHTML.length > 25) {
            description[i].innerHTML = jsonObj[i].description.substring(0, 22) + '...';
        }

        postnumber[i].innerHTML = jsonObj[i].post;
        if (jsonObj[i].post > 10000) {
            var n = jsonObj[i].post / 10000;
            var s = Math.floor(n);

            postnumber[i].innerHTML = s + '万跟帖';
        }
        if (jsonObj[i].type !== null) {
            type[i].innerHTML = jsonObj[i].type;
            type[i].style.backgroundColor = jsonObj[i].typeColor;
        }else {
            var content = document.querySelectorAll('.content');

            content[i].removeChild(type[i]);
            postnumber[i].style.right = 0;
        }
    
    }
}

getNews();

//获取菜单
function getmenu () {
    ajax({
        method: 'GET',
        url: '/tags',
        success: showTags,
    });
}

function showTags (data) {

    var jsonObj = JSON.parse(data);

    var box = document.querySelectorAll('.box');
    var boxs = document.querySelectorAll('.boxs');

    if (jsonObj.added.length >= 12) {
        
        for (var i = 0; i < 12; i++) {

            box[i].innerHTML = jsonObj.added[i].name;
        }
    }else if (jsonObj.added.length > 0 || jsonObj.added.length < 12) {

        for (var i = 0; i < jsonObj.added.length; i++) {

            box[i].innerHTML = jsonObj.added[i].name;
        }
    }

    if (jsonObj.avaliable.length >= 20) {

        for (var i = 0; i < 20; i++) {

            boxs[i].innerHTML = jsonObj.avaliable[i].name;
        }
    }else if (jsonObj.avaliable.length > 0 || jsonObj.avaliable.length < 20) {
        for (var i = 0; i < jsonObj.avaliable.length; i++) {

            boxs[i].innerHTML = jsonObj.avaliable[i].name;
        }
    }
    
}

getmenu();

