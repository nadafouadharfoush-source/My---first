const btn = document.getElementById('get-image-btn');
const imageElement = document.getElementById('random-image');

const apiUrl = 'https://picsum.photos/600/400';

function fetchRandomImage() {

    imageElement.src = apiUrl + '?v=' + Date.now();
    
    imageElement.style.opacity = '0'; 
    imageElement.onload = () =>{
        imageElement.style.opacity = '1'; 
    };
}

btn.addEventListener('click', fetchRandomImage);

fetchRandomImage();