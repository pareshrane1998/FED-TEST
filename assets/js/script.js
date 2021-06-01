// logic for hamburger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
});

// js for gallery filter

const btns = document.querySelectorAll(".find");
// console.log(btns)
const stroreProducts = document.querySelectorAll(".strore-product") ;

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",(e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        // console.log(filter);

        stroreProducts.forEach((product)=> {
            if (filter == "all"){
                product.style.display = "block"
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block"
                } else {
                    product.style.display = "none"
                }
            }

        } );
    });
}





















