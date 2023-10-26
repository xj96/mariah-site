window.addEventListener('scroll', () => {
    // variable declarations
    const whyMTE1 = document.getElementById('whyMTE-1')
    const whyMTE2 = document.getElementById('whyMTE-2')
    const whyMTE3 = document.getElementById('whyMTE-3')
    const whyMTE4 = document.getElementById('whyMTE-4')
    const whyMTE5 = document.getElementById('whyMTE-5')
    const whyMTE6 = document.getElementById('whyMTE-6')

    const scrollPosition = window.screenY;
    const triggerPosition = document.getElementById('whyMTE')

    if (scrollPosition >= triggerPosition) {
        whyMTE1.classList.add('fadeIn')
        whyMTE2.classList.add('fadeIn', 'moveInLeft')
        whyMTE3.classList.add('fadeIn', 'moveInLeft')
        whyMTE4.classList.add('fadeIn', 'moveInLeft')
        whyMTE5.classList.add('fadeIn', 'moveInLeft')
        whyMTE6.classList.add('fadeIn', 'moveInLeft')
    }
})