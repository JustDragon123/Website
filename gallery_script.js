document.getElementById("y20").addEventListener("click", function(){
    document.getElementById('x20').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
})
document.getElementById("y21").addEventListener("click", function(){
    document.getElementById('x21').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
})
document.getElementById("y22").addEventListener("click", function(){
    document.getElementById('x22').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
})
document.getElementById("y23").addEventListener("click", function(){
    document.getElementById('x23').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
})
document.getElementById("y24").addEventListener("click", function(){
    document.getElementById('x24').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
})

let imageFrames = document.querySelectorAll(".Kepkeretpapir");
let viewImage = document.querySelector(".view-image");
let fullImages = document.querySelectorAll(".view-image img");
let closeBtn = document.querySelector(".view-image span");
let ImgDesc = document.querySelector("#Description");
let header = document.querySelector("header");

imageFrames.forEach(frame => {
    let imgs = frame.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener("click", () => {
            header.style = "position:static";
            viewImage.style.display = "flex";

            fullImages.forEach((viewImg, index) => {
                if (imgs[index]) {
                    viewImg.style.display = "block";
                    viewImg.src = imgs[index].src;
                    viewImg.alt = imgs[index].alt;
                } else {
                    viewImg.style.display = "none";
                    viewImg.src = "";
                }
            });

            ImgDesc.textContent = img.alt;
            
        });
    });
});

closeBtn.addEventListener('click', function () {
    viewImage.style.display = "none";
    header.style = "display:flex;position:fixed";
    
});