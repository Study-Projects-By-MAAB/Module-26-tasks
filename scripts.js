// <-- common formula -->
function getDataFromId(formulaInputId) {
    const validInput = parseFloat(document.getElementById(formulaInputId).value)
    document.getElementById(formulaInputId).value = ''
    return validInput

}
const ol = document.createElement('ol')
ol.classList.add('list-decimal')
const areaCal = document.getElementById('areaCalculation');
areaCal.appendChild(ol)

function setResult(targetElement, result) {
    const target = document.getElementById(targetElement);
    target.innerText = result

    if (targetElement.includes('triangle')) {
        const li = document.createElement('li')
        li.innerText = `Triangle    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }
    if (targetElement.includes('rectangle')) {
        const li = document.createElement('li')
        li.innerText = `Rectangle    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }
    if (targetElement.includes('parallelogram')) {
        const li = document.createElement('li')
        li.innerText = `Parallelogram    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }
    if (targetElement.includes('rhombus')) {
        const li = document.createElement('li')
        li.innerText = `Rhombus    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }
    if (targetElement.includes('pentagon')) {
        const li = document.createElement('li')
        li.innerText = `Pentagon    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }
    if (targetElement.includes('ellipse')) {
        const li = document.createElement('li')
        li.innerText = `Ellipse    ${result} cm²`;
        // console.log(li);
        ol.appendChild(li)
    }

}

// <-- triangle formula -->
function calculateTriangleArea() {
    const triangleBase = getDataFromId('triangle-base');
    const triangleHeight = getDataFromId('triangle-height');

    const area = 0.5 * triangleBase * triangleHeight
    setResult('triangle-area', area)
}

// <-- rectangle formula -->
function calculateRectangleArea() {
    const rectangleBase = getDataFromId('rectangle-length');
    const rectangleHeight = getDataFromId('rectangle-width');

    const area = rectangleBase * rectangleHeight
    setResult('rectangle-area', area)
}

// <-- parallelogram formula -->
function calculateParallelogramArea() {
    const parallelogramBase = getDataFromId('parallelogram-base');
    const parallelogramHeight = getDataFromId('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight
    setResult('parallelogram-area', area)
}

// <-- rhombus formula -->
function calculateRhombusArea() {
    const rhombusBase = getDataFromId('rhombus-base');
    const rhombusHeight = getDataFromId('rhombus-height');

    const area = 0.5 * rhombusBase * rhombusHeight
    setResult('rhombus-area', area)
}

// <-- pentagon formula -->
function calculatePentagonArea() {
    const pentagonPerimeter = getDataFromId('pentagon-perimeter');
    const pentagonApothem = getDataFromId('pentagon-apothem');

    const area = 0.5 * pentagonPerimeter * pentagonApothem
    setResult('pentagon-area', area)
}

// <-- ellipse formula -->
function calculateEllipseArea() {
    const ellipseMajor = getDataFromId('ellipse-major-radius');
    const ellipseMinor = getDataFromId('ellipse-minor-radius');

    const area = 3.14 * ellipseMajor * ellipseMinor
    setResult('ellipse-area', area)
}