

const palette = document.querySelector('.container')
const refresh = document.querySelector('.refresh')
let colors = ['#336699', '#993366', '#669933', '#CC6600', '#663399', '#FF9933', '#FF6600', '#006666', '#FFCC66', '#3399CC', '#993333', '#CCCC99', '#663366', '#FFCC00', '#FFCC33', '#CCFF00', '#996666', '#FF99CC', '#339966', '#996699', '#99CCFF', '#CC9999', '#FF6666', '#FF9933', '#66CCCC', '#CCCCFF', '#CC6699', '#CC9933', '#FFCC99', '#FFCCCC', '#99CC66', '#66CC99', '#FF99CC', '#9933CC', '#6699CC', '#CC9999', '#FFCC66', '#FF9933', '#006666', '#FFCC66', '#3399CC', '#993333', '#CCCC99', '#663366', '#FFCC00', '#FFCC33', '#CCFF00', '#996666', '#FF99CC', '#339966', '#996699', '#99CCFF', '#CC9999', '#FF6666', '#FF9933', '#66CCCC', '#CCCCFF', '#CC6699', '#CC9933', '#FFCC99', '#FFCCCC', '#99CC66', '#66CC99', '#FF99CC', '#9933CC', '#6699CC', '#CC9999', '#FFCC66', '#FF9933']

color_add()
function color_add(){
    
    const color_random = shuffleArray(colors)
    color_random.forEach(item_create)
}


refresh.addEventListener('click', () => {

    /* const childNodes = Array.from(palette.childNodes);
    childNodes.forEach((child) => {
        palette.removeChild(child);
    });  */
    palette.textContent = ''
    color_add()
})


function item_create(colors){
    const items = document.createElement('li')
    items.classList.add('items')

    const color_box = document.createElement('div')
    color_box.style.backgroundColor = colors
    color_box.classList.add('color-box')

    const label = document.createElement('label')
    label.textContent = colors

    items.appendChild(color_box)
    items.appendChild(label)

    palette.appendChild(items)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}