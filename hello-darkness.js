// ./hello-darkness.js

let rgb = 255;

let darkBackground = setInterval( () => {
        if (rgb > 0) {
            rgb--;
            document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        } else {
            clearInterval(darkBackground);
        }
}, 500);

