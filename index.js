

let images = ['1.jpg','2.jpg','3.jpg'];

images.forEach(image => {
    setTimeout(() => {
        if(image === images[0]){
            document.querySelector(".pictures").innerHTML = `<img src="1.jpg" alt="image one" width ="200" height ="200">`
            console.log("image 1");
        }
    }, 2000);

    setTimeout(() => {
        if(image === images[1]){
            document.querySelector(".pictures").innerHTML = `<img src="2.jpg" alt="image 2" width ="200" height ="200">`
            console.log("image 2");
        }
    }, 4000);

    setTimeout(() => {
        if(image === images[2]){
            document.querySelector(".pictures").innerHTML = `<img src="3.jpg" alt="image 3" width ="200" height ="200">`
            console.log("image 3");
        }
    }, 8000);

});



