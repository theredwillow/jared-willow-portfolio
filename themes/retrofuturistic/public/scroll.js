const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) { cancelAnimationFrame(frame); }
        frame = requestAnimationFrame(() => fn(...params));
    } 
};

const storeScroll = () => {
    const threshold = window.innerHeight * 0.4;
    if (window.scrollY >= threshold) {
        document.getElementById("name").classList.add("fixed");
        document.removeEventListener('scroll', scrollFunc);
        // console.log("Scrolled past it!");
    }
    else {
        console.log("Not scrolled past it yet!");
        // document.getElementById("name").classList.remove("fixed");
    }
};

const scrollFunc = debounce(storeScroll);

document.addEventListener('scroll', scrollFunc, { passive: true });

storeScroll();

// console.log("Scrolling functionality was included!");
