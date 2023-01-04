for (let i=0 ; i < 11; i++) {
    let myImg = document.querySelector(`[decoding = "async"]`);
    myImg.setAttribute("alt", "Elzero Logo")
    myImg.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
    document.body.appendChild(myImg);
}