const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
function makeBig(newImage){
    console.log(newImage.querySelector('.src'));

}
/* Declaring the array of image filenames */
const pics = ['../img/pic6.jpg','../img/pic7.jpg','../img/pic8.jpg','../img/pic9.jpg','../img/pic10.jpg'];
/* Declaring the alternative text for each image file */
const alttxt = ['eye','sand','flower','egypt','butterfly'];
/* Looping through images */
for (let i = 0;i < 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', pics[i]);
newImage.setAttribute('alt', alttxt[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click',()=>{ 
    displayedImage.setAttribute('src',pics[i]);
    displayedImage.setAttribute('alt',alttxt[i]);
})
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{
    const state = btn.getAttribute('class')
    if (state == 'dark'){
        btn.setAttribute("class", 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';    
    }
    else{
        btn.setAttribute("class", 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})
