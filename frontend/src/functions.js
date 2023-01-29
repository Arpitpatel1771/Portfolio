export function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export function getRandomNumber(a, b) {
	let num = Math.random();
	return a + (b - a) * num;
}

export function getRandomInteger(a, b) {
	return Math.floor(getRandomNumber(a, b));
}


function addDiv(wrapper, viewportDimensions) {
    let div = document.createElement("div");
    div.classList.add("node");
    div.style.backgroundColor = getRandomColor();

    if (viewportDimensions.width > viewportDimensions.height) {
        div.style.width = `${getRandomNumber(5, 25)}%`
    } else {
        div.style.height = `${getRandomNumber(5, 25)}%`
    }

    div.style.opacity = 0
    div.style.top = `${getRandomNumber(-50, viewportDimensions.height)}px`
    div.style.left = `${getRandomNumber(-50, viewportDimensions.width)}px`
    let duration = getRandomInteger(4, 10)
    div.style.transition = `top ${duration}s ease-in-out, left ${duration}s ease-in-out, opacity 1s ease-in-out`
    
    wrapper.appendChild(div)

    setTimeout(()=>{
        div.style.top = `${getRandomNumber(-50, viewportDimensions.height)}px`
        div.style.left = `${getRandomNumber(-50, viewportDimensions.width)}px`
        div.style.opacity = 1
    }, 100)

    setTimeout(()=>div.style.opacity = 0, (duration-1)*1000)
    setTimeout(()=>div.remove(), duration*1000)
}

export function addDivs(wrapper, viewportDimensions) {
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    addDiv(wrapper, viewportDimensions)
    
    setTimeout(()=>addDivs(wrapper, viewportDimensions), 2000)
}