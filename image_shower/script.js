function displayImage() {
    const Url = document.getElementById("Url").value;
    const image = document.getElementById("image");

    if (Url) {
        const img = document.createElement('img');
        img.src = Url;
        img.alt = `Bu yerda reklamangiz bo'lishi mumkin edi`;
    } else {
        
    }
}