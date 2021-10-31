let text = document.querySelector("textarea");
const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const downloadBtn = document.getElementById("save-text-file");
upper.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
})
lower.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
})
proper.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
    let arr = text.value.split("");
    if (arr[0] !== " ") {
        arr[0] = arr[0].toUpperCase();
    }
    for (let e = 1; e < arr.length-1; e++) {
        if (arr[e] === " ") {
            arr[e+1] = arr[e+1].toUpperCase();
        }
    }
    text.value = arr.join("");
})
sentence.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
    let arr = text.value.split("");
    if (arr[0] !== " ") {
        arr[0] = arr[0].toUpperCase();
    }
    for (let e = 1; e < arr.length-1; e++) {
        if (arr[e] === "!" || arr[e] === "?" || arr[e] === "." && arr[e+1] === " ") {
            arr[e+2] = arr[e+2].toUpperCase();
        }
    }
    text.value = arr.join("");
})
download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
downloadBtn.addEventListener("click", () => download("text.txt", text.value));
