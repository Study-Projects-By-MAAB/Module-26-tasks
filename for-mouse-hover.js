const shapeContainer = document.getElementById('shapeContainer');
const forMouseHover = document.querySelectorAll(".forMouseHover");

for (const card of forMouseHover) {
    // console.log(card);
    card.addEventListener('mouseover', function () {
        if (card === forMouseHover[0] || card === forMouseHover[1] || card === forMouseHover[2]) {
            card.style.backgroundColor = 'rgb(251, 188, 237)'
        }
        else {
            card.style.backgroundColor = 'rgb(105, 199, 240)'
        }
    })
    card.addEventListener('mouseout', function () {
        card.style.backgroundColor = ''
    })
}

