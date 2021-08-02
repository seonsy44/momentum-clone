const imgs = ['0.jpg','1.jpg','2.jpg'];

const randomImgs = imgs[Math.floor(Math.random()*imgs.length)];

const bgImg = document.createElement('img');

bgImg.src = `img/${randomImgs}`;
bgImg.id = 'bgimg'

document.body.appendChild(bgImg);