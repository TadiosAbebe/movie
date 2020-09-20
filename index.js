const filter_btn = document.querySelector(".filter_btn");
const filter_div = document.querySelector(".filter_div");

filter_btn.addEventListener('click', () => {
    if (filter_div.style.display === "none")
        filter_div.style.display = "block";
    else {
        filter_div.style.display = "none";
    }
});