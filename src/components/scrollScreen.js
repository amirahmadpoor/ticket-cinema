function setScrollScreen() {
    const navScroll = document.querySelector('#scroll');

    function scroller() {
        let scrollTop = window.scrollY;
        let bodyHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;

        let scrollNumber = scrollTop / (bodyHeight - windowHeight);
        let scrollPercent = Math.round(scrollNumber * 100);
        navScroll.style.width = `${scrollPercent}%`;

    }
    window.addEventListener('scroll', scroller);
}

export {setScrollScreen};