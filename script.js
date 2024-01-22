function addImage(){
    let input_value = document.querySelector("input")
    let URL = input_value.value;
    let image = document.createElement("img");
    image.src = URL;
    if(URL !== ""){
        document.getElementById("image-container").appendChild(image);
        document.querySelector("input").value = null;
    }
    }
    

