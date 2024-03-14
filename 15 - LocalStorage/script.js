const addItems = document.querySelector('.add-items')
const platesList = document.querySelector('.plates')

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item)
    propagateList(items, platesList);
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();
}

function propagateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((item, i) => {
        return (`
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? "checked" : ""}>
                <label for="item${i}">${item.text}</label>
            </li>
        `);
    }).join('');
}

function toggleCheck(e) {
    if(!e.target.matches('input')) return;     //this is called event delegation
    items[e.target.dataset.index].done = !(items[e.target.dataset.index].done)
    localStorage.setItem('items', JSON.stringify(items))
    propagateList(items, platesList);
    // console.log(e.target.dataset.index)
    // console.log(e.target)
}

addItems.addEventListener('submit', addItem)
platesList.addEventListener('click', toggleCheck)

propagateList(items, platesList);