function switchSelectedItem(htmlElement){
    htmlElement.classList.toggle('selected');
}

function checkSelection(){
    let selecteds = document.querySelectorAll('.selected');
    let selection_list = document.querySelector('ul#selectionList');
    selection_list.innerHTML = '';
    for (const selected of selecteds) {
        let col = selected.parentElement.getAttribute('col');//selected.parentNode.classList[0];
        let row = selected.parentElement.parentElement.getAttribute('row');//selected.parentNode.parentNode.classList[0];

        let new_li = document.createElement('li');
        new_li.innerText = `${row} - ${col}`;
        selection_list.appendChild(new_li);
    }
}