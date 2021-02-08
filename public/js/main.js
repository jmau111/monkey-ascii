const target = document.getElementById("results");
const fileInput = document.getElementById('upload');

// lib ascii
const processImg = (ref) => {
    target.innerHTML = "";
    const reader = new FileReader();
    reader.onload = async function (e) {
        let image = document.createElement("img");
        image.src = e.target.result;
        let ele = new imgToAscii(image.src, .5);
        let result = await ele.display(false)
        target.appendChild(result)
    }
    reader.readAsDataURL(ref);
}

// case basic
fileInput.onchange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    processImg(fileInput.files[0]);
}

// drag, drop, tutti quanti
const dragenter = (e) => {
    e.stopPropagation();
    e.preventDefault();
}
const dragover = (e) => {
    e.stopPropagation();
    e.preventDefault();
}
const drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let dt = e.dataTransfer;
    let files = [...dt.files];
    processImg(files[0])
}

const dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);