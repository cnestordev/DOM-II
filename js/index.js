import randomColor from 'randomcolor'
//Event 1 (mouseover/mouseleave): hover mouse over nav items to change thier styling
const allLinks = document.querySelectorAll('nav a')
allLinks.forEach(link => link.addEventListener('mouseover', () => {
    link.style.borderBottom = "1px solid black";
    link.style.paddingBottom = "1%";
}));
allLinks.forEach(link => link.addEventListener('mouseleave', () => {
    link.style.borderBottom = "none";
    link.style.paddingBottom = "none";
}));

//Event 2 (scroll): add shadow to navbar when scrolled, restore original style when page is back at the top
const navBar = document.querySelector('.main-navigation')
const logo = document.querySelector('.logo-heading')
logo.style.transition = "200ms"
let hasScrolled = false
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 && !hasScrolled) {
        navBar.style.boxShadow = "0 0 4px 1px black";
        navBar.style.borderBottom = 'none'
        navBar.style.opacity = "0.95"
        logo.style.color = "#ffc800"
        hasScrolled = true;
    } else if (window.scrollY === 0) {
        hasScrolled = false;
        navBar.style.boxShadow = "none";
        navBar.style.borderBottom = '2px dashed #C0C0C0'
    }
})

//Event 3 (click): add shadow to parent container when button is clicked
const allBtns = document.querySelectorAll('.content-pick .btn');
allBtns.forEach(btn => btn.addEventListener('click', () => {
    if (btn.parentNode.style.boxShadow === "") {
        btn.parentNode.style.boxShadow = "0 0 4px 1px #bfbfbf"
    } else {
        btn.parentNode.style.boxShadow = ""
    }
}));

//Event 4 (keydown): Escape key will return to the top of the page and change logo back to black
window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        logo.style.color = "black"
    }
})


//Event 5 (double click) create box when double clicks
//****create the element
const parentDiv = document.createElement('div')
const head = document.createElement('h2')
head.textContent = "Ready To Start?"
const newBtn = document.createElement('button')
newBtn.textContent = "Book Now"
parentDiv.appendChild(head)
parentDiv.appendChild(newBtn)
parentDiv.style.position = "absolute";
parentDiv.style.border = "1px solid black"
parentDiv.style.background = "white"
parentDiv.style.padding = "2%"
parentDiv.style.textAlign = "center"
parentDiv.id = "boxing"

document.body.addEventListener('dblclick', (e) => {
    e.preventDefault()
    document.body.prepend(parentDiv)
    parentDiv.style.display = "block"
    parentDiv.style.top = `${e.clientY}px`
    parentDiv.style.left = `${e.clientX}px`
})
// ***remove pop up box when click outside of it
document.body.addEventListener('click', () => {
    parentDiv.style.display = "none"
});


//Event 6 (mousemove) change header image when mouse moves over it
const firstImg = document.querySelector('img')
firstImg.addEventListener('load', () => {
    const height = firstImg.height
    const width = firstImg.width
    firstImg.addEventListener('mousemove', () => {
        const id = setInterval(() => {
            let newWidth = width + (Math.round(Math.random() * 10))
            firstImg.src = `https://picsum.photos/${newWidth}/${height}`
        }, 3000)
        firstImg.addEventListener('mouseleave', () => {
            clearInterval(id)
        })
    })
})

// Event 7 (contextmenu) change image when right click
const bodyImgs = document.querySelectorAll('.selectImg')
bodyImgs.forEach(img => img.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    let height = img.height
    let newWidth = img.width + (Math.round(Math.random() * 5))
    img.src = `https://picsum.photos/${newWidth}/${height}`
}))


//Event 8 (copy) change font color when its copied
const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach(p => p.addEventListener('copy', (e) => {
    p.style.color = randomColor()
}))

//Event 9 (load) invert font/background on page load
window.addEventListener('load', () => {
    let num = Math.floor(Math.random() * 2)
    if (num === 0) {
        document.body.style.background = "#0e0d0d"
        document.body.style.color = "white"
    }
})

//Event 10 (resize) change font color when window changes size
window.addEventListener('resize', () => {
    document.body.style.color = randomColor()
});

//Nested event listeners
document.body.addEventListener('click', () => {
    console.log("body clicked")
    document.body.style.color = randomColor();
});

allLinks.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("link clicked")
}))