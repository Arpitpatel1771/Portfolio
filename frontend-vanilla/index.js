function lg() {
    console.log(...arguments);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNumber(a, b) {
    let num = Math.random()
    return (a + (b-a) * num)
}

function getRandomInteger(a, b) {
    return Math.floor(getRandomNumber(a, b))
}
function getViewportDimensions() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)   
    
    return {
        width: vw,
        height: vh
    }
}

let wrapper = document.getElementById("animation");

function addDiv(wrapper) {
    let div = document.createElement("div");
    div.classList.add("node");
    div.style.backgroundColor = getRandomColor();
    let viewportDimensions = getViewportDimensions()
    if (viewportDimensions.width > viewportDimensions.height) {
        div.style.width = `${getRandomNumber(5, 25)}%`
    } else {
        div.style.height = `${getRandomNumber(5, 25)}%`
    }
    div.style.opacity = 0
    div.style.top = `${getRandomNumber(-50, getViewportDimensions().height)}px`
    div.style.left = `${getRandomNumber(-50, getViewportDimensions().width)}px`
    
    let duration = getRandomInteger(6, 20)
    div.style.transition = `top ${duration}s ease-in-out, left ${duration}s ease-in-out, opacity 1s ease-in-out`
    wrapper.appendChild(div)
    
    div.style.top = `${getRandomNumber(-50, getViewportDimensions().height)}px`
    div.style.left = `${getRandomNumber(-50, getViewportDimensions().width)}px`
    div.style.opacity = 1

    setTimeout(()=>div.style.opacity = 0, (duration-1)*1000)
    setTimeout(()=>div.remove(), duration*1000)
    return div;
}

function addDivs(wrapper) {
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)
    addDiv(wrapper)

    setTimeout(()=>addDivs(wrapper), 2000)
}

addDivs(wrapper)