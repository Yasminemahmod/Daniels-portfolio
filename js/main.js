

//  Navbar links border bottom
let navbarElement = document.querySelector("#nav");
let aboutSection = document.querySelector(".about");
window.addEventListener('scroll', function() {
  if (window.scrollY >= aboutSection.offsetTop) {
    navbarElement.classList.add("scroll-nav");
  }
  else {
    navbarElement.classList.remove("scroll-nav");
  }
});


// To increace progress Bar on scrolling
let progressSpan = Array.from(document.querySelectorAll(".prog"));
let progressBar = Array.from(document.querySelectorAll(".progress-bar"));
let progressPart = document.querySelector(".progress-part");




window.addEventListener("scroll", function() {
  if(this.scrollY >= progressPart.offsetTop - 500) {
    progressBar.forEach(el => {
      el.style.width = el.dataset.width;
      el.classList.add("px-2");
    });
  };
})


// portfolio
let portfolioItems = Array.from(document.querySelectorAll(".portfolio-items__item"));
let portfolioList = Array.from(document.querySelectorAll(".portfolio-list li span"));

portfolioList.forEach(portType => {
    portType.addEventListener('click', (e) => {
        activateType(e);
        showRelatedItems(e);
    });
})

function showRelatedItems(e) {
    portfolioItems.forEach(item => {
        item.classList.add("d-none");
        let dataTypes = item.dataset.type.split(" ");
        dataTypes.forEach(type => {
            if(e.currentTarget.classList.contains(type)) {
                item.classList.remove("d-none");
            }
        });
        if (e.currentTarget.classList.contains("all")) {
            item.classList.remove("d-none");
        }
    });
}

function activateType(e) {
    portfolioList.forEach(portType => {
        portType.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
}





// Statistics count Incresing
let statsSection = document.querySelector(".statistics");
let goals = Array.from(document.querySelectorAll(".statistics-items h2"));
let started = false;

window.addEventListener("scroll", () => {
    if(this.scrollY >= statsSection.offsetTop-500) {
        if(!started) {
            goals.forEach(goal => {
                const update = () => {
                    const c = +goal.innerText;
                    const target = +goal.dataset.goal;
                    const increment = target / 500;
                    if(c < target) {
                        goal.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(update, 1);
                    };
                }
                update();
            });
        }
        started = true;
    }
});



