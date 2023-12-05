// ./here-comes-the-sun.js

let rgb = 0;

let whiteBackground = function() {
    if (rgb < 255) {
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(whiteBackground);
    } else if (rgb === 255) {
        console.log('white background');
        document.body.style.backgroundColor = '#FFFF66';

        let sun = document.createElement('img');
        sun.src ='https://iheartcraftythings.com/wp-content/uploads/2022/02/6-19.jpg';
        sun.style.height = '300px';
        sun.style.width = '300px';

        document.getElementById('body').appendChild(sun);
    }
}

requestAnimationFrame(whiteBackground);
