let pageIndex = 1;
let previousIndex = 0;

function showFirst() {
    let contents = document.getElementsByClassName("page_content");
    contents[0].style.display = "block";
    for (let i = 0; i < contents.length; i++) {
        contents[i].onclick = function () {
            if (pageIndex < 31) {
                previousIndex = pageIndex;
                pageIndex = parseInt(pageIndex + 1);
            } else {
                pageIndex = 1;
                previousIndex = 31;
            }
            changePage();
        };
    }
}

function changeTextSize() {
    let textSizeInput = document.getElementById("text_size_input");
    let texts = document.getElementsByClassName("text");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.fontSize = textSizeInput.value + "pt";
    }
}

function changeTextColor() {
    let textColorInput = document.getElementById("text_color_input");
    let texts = document.getElementsByClassName("text");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.color = textColorInput.value;
    }
}

function changeBackColor() {
    let backColorInput = document.getElementById("back_color_input");
    let contents = document.getElementsByClassName("page_content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.background = backColorInput.value;
    }
}

function toPage() {
    previousIndex = pageIndex;
    pageIndex = document.getElementById("page_num_input").value;
    changePage();
}

function setParams() {
    let contents = document.getElementsByClassName("page_content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        contents[i].classList.remove("page_animation2");
        void contents[i].offsetWidth;
        contents[i].classList.add("page_animation");
    }
    contents[pageIndex - 1].style.display = "block";
    // contents[previousIndex - 1].classList.remove("page_animation2");
    // void contents[previousIndex - 1].offsetWidth;
    // contents[previousIndex - 1].classList.add("page_animation");
}

function changePage() {
    let contents = document.getElementsByClassName("page_content");
    let pageNumInput = document.getElementById("page_num_input");
    pageNumInput.value = pageIndex;

    contents[previousIndex - 1].classList.remove("page_animation");
    void contents[previousIndex - 1].offsetWidth;
    contents[previousIndex - 1].classList.add("page_animation2");
    setTimeout(setParams, 1000)
}