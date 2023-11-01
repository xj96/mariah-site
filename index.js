// variable declarations
const whyMariah = document.getElementById('whyMTE')

const whyMTE1 = document.getElementById('whyMTE-1')
const whyMTE2 = document.getElementById('whyMTE-2')
const whyMTE3 = document.getElementById('whyMTE-3')
const whyMTE4 = document.getElementById('whyMTE-4')
const whyMTE5 = document.getElementById('whyMTE-5')
const whyMTE6 = document.getElementById('whyMTE-6')

const scrollThreshold = [200, 300, 400, 500, 600, 700, 800]

window.addEventListener('scroll', (event) => {
    const scrollValue = window.scrollY;

    // Checks position; hides section if not at a certain scroll position
    if (scrollValue < scrollThreshold[0]) {
        whyMTE1.style.display = "none"
    } else {
        whyMTE1.style.display = "block"
    }

    if (scrollValue < scrollThreshold[1]) {
        whyMTE2.style.display = "none"
    } else {
        whyMTE2.style.display = "block"
    }

    if (scrollValue <= scrollThreshold[2]) {
        whyMTE3.style.display = "none"
    } else {
        whyMTE3.style.display = "block"
    }

    if (scrollValue <= scrollThreshold[3]) {
        whyMTE4.style.display = "none"
    } else {
        whyMTE4.style.display = "block"
    }

    if (scrollValue <= scrollThreshold[4]) {
        whyMTE5.style.display = "none"
    } else {
        whyMTE5.style.display = "block"
    }

    if (scrollValue <= scrollThreshold[5]) {
        whyMTE6.style.display = "none"
    } else {
        whyMTE6.style.display = "block"
    }

    // JS animations for whyMTE-1:6 
    if (scrollValue >= scrollThreshold[0] && scrollValue < scrollThreshold[1]) {
        whyMTE1.style.animation = 'fadeIn'
        whyMTE1.style.animationDuration = '2s'
        whyMTE1.style.animationIterationCount = '1'
    } else if (scrollValue >= scrollThreshold[1] && scrollValue < scrollThreshold[2]) {
        whyMTE2.style.animation = 'fadeIn'
        whyMTE2.style.animationDuration = '2s'
        whyMTE2.style.animationIterationCount = '1'
        whyMTE2.style.animationDelay = '0.3s'
    } else if (scrollValue >= scrollThreshold[2] && scrollValue < scrollThreshold[3]) {
        whyMTE3.style.animation = 'fadeIn'
        whyMTE3.style.animationDuration = '2s'
        whyMTE3.style.animationIterationCount = '1'
        whyMTE3.style.animationDelay = '0.3s'
    } else if (scrollValue >= scrollThreshold[3] && scrollValue < scrollThreshold[4]) {
        whyMTE4.style.animation = 'fadeIn'
        whyMTE4.style.animationDuration = '2s'
        whyMTE4.style.animationIterationCount = '1'
        whyMTE4.style.animationDelay = '0.3s'
    } else if (scrollValue >= scrollThreshold[4] && scrollValue < scrollThreshold[5]) {
        whyMTE5.style.animation = 'fadeIn'
        whyMTE5.style.animationDuration = '2s'
        whyMTE5.style.animationIterationCount = '1'
        whyMTE5.style.animationDelay = '0.3s'
    } else if (scrollValue >= scrollThreshold[5] && scrollValue < scrollThreshold[6]) {
        whyMTE6.style.animation = 'fadeIn'
        whyMTE6.style.animationDuration = '2s'
        whyMTE6.style.animationIterationCount = '1'
        whyMTE6.style.animationDelay = '0.3s'
    }
})