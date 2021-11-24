const Truncate = (e) => {
    return e < 0 ? 0 : e > 255 ? 255 : e;
}

let brightness = document.getElementById('brightness');
let contrast = document.getElementById('contrast');
let transparent = document.getElementById('transparent');
let fileInput = document.getElementById('file-input');
let saveButton = document.getElementById('save-button');

fileInput.addEventListener('change', (ev) => {
    if (ev.target.files) {
        let file = ev.target.files[0];
        let reader  = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = e => {
            let image = new Image();
            image.src = e.target.result;
            image.onload = () => {
                let canvas = document.getElementById('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(image,0,0);
                const addFilter = () => {
                    ctx.drawImage(image,0,0);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const pixels = imageData.data;
                    let b = parseInt(brightness.value, 10);
                    let c = parseInt(contrast.value, 10);
                    const factor = 259 * (255 + c) / (255 * (259 - c))
                    for (let i = 0; i < pixels.length; i+=4) {
                        pixels[i] = Truncate(factor * (pixels[i] - 128) + 128 + b);
                        pixels[i + 1] = Truncate(factor * (pixels[i + 1] - 128) + 128 + b);
                        pixels[i + 2] = Truncate(factor * (pixels[i + 2] - 128) + 128 + b);
                    }
                    let t = parseFloat(transparent.value);
                    for (let i = 3; i < pixels.length; i+=4) {
                        pixels[i] = Truncate(pixels[i] * t);
                    }
                    ctx.putImageData(imageData, 0, 0);
                    console.log(b, c, t);
                }
                const download = () => {
                    let imageData = canvas.toDataURL();
                    let tmpLink = document.createElement( 'a' );
                    tmpLink.download = 'result.png';
                    tmpLink.href = imageData;
                    document.body.appendChild( tmpLink );
                    tmpLink.click();
                    document.body.removeChild( tmpLink );
                };
                brightness.addEventListener("change", addFilter);
                contrast.addEventListener("change", addFilter);
                transparent.addEventListener("change", addFilter);
                saveButton.addEventListener('click', download);
            }
        }
    }
});