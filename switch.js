let img = document.getElementsByClassName("setting__images")[0];
let info = document.getElementsByClassName("setting__info")[0];
let discard = document.getElementsByClassName("setting__discard")[0];

elem1.onclick = function(e) {
    switch (e.target.classList.length) {
        case 1:
            e.target.classList.add("active");
            e.target.classList.add("x");
            img.style.display = "none";
            info.style.display = "block";
            discard.style.display = "flex";
            break;
        case 2:
            return;
    }
    let items = document.getElementsByClassName(e.target.classList[0]);
    for(let i = 0; i < 2; i++){
        switch (items[i].classList.length) {
            case 2:
                items[i].classList.remove("active");
                break;
            case 3:
                items[i].classList.remove("x");
                break;
        }    
    }
}
elem2.onclick = function(e) {
    console.log();
    switch (e.target.classList.length) {
        case 1:
            e.target.classList.add("active");
            e.target.classList.add("x");
            img.style.display = "flex";
            info.style.display = "none";
            discard.style.display = "none";
            break;
        case 2:
            return;
    }
    let items = document.getElementsByClassName(e.target.classList[0]);
    for(let i = 0; i < 2; i++){
        switch (items[i].classList.length) {
            case 2:
                items[i].classList.remove("active");
                break;
            case 3:
                items[i].classList.remove("x");
                break;
        }    
    }
}
