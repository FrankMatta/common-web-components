const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const leftArrowCoordinates ={x: leftArrow.getBoundingClientRect().x, y: leftArrow.getBoundingClientRect().y};
const rightArrowCoordinates ={x: rightArrow.getBoundingClientRect().x, y: rightArrow.getBoundingClientRect().y};

document.addEventListener('mousemove', (mouse) => {
    const mouseAndLeftArrowDistance = getDistance(mouse, leftArrowCoordinates);
    const mouseAndRightArrowDistance = getDistance(mouse, rightArrowCoordinates);

    if(mouseAndLeftArrowDistance < 100) {
        leftArrow.classList.add('expand');
    } else if(leftArrow.classList.contains('expand')) {
        leftArrow.classList.remove('expand');
    }

    if(mouseAndRightArrowDistance < 70) {
        rightArrow.classList.add('expand')
    } else if(rightArrow.classList.contains('expand')) {
        rightArrow.classList.remove('expand');
    }

})

const getDistance = (firstElement, secondElement)=> {
    return Math.hypot(firstElement.x - secondElement.x, firstElement.y - secondElement.y);
}