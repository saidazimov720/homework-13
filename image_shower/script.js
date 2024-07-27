function displayImage() {
    const Url = document.getElementById("Url").value;
    const image = document.getElementById("image");

    if (Url) {
        const img = document.createElement('img');
        img.src = Url;
        img.alt = `Bu yerda reklamangiz bo'lishi mumkin edi`;
        img.classList.add('image_display');
        const container = document.createElement('div');
        container.classList.add('image_wrapper');
        container.appendChild(img);
        image.appendChild(container);
    } else {
        alert("Invalid Url");
    }
}