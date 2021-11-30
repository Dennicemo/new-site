let input = document.querySelector('.items');
let btn = document.querySelector('.btn-sort');
let column = document.querySelector('.column');
let aside = document.querySelector('aside');
btn.addEventListener("click", itemsSort)


function itemsSort() {
    aside.innerHTML = '';
    column.innerHTML = '';
    let inputValue = input.value;
    let arr = inputValue.split(' - ');
    let dictNumbers = [];
    let ni = 0, ai = 0;
    let dictStrings = [];






    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            dictStrings.push(["a" + ai, arr[i]]);
            ai++;
        } else {

            dictNumbers.push(["n" + ni, arr[i]]);
            ni++;
        }


    }

    dictNumbers.sort(function (first, second) {
        return first[1] - second[1];
    });

    dictStrings.sort(function (first, second) {
        return first[1] < second[1] ? -1 : 1;
    });

    for (let entry of dictStrings) {
        createItem(entry);
    }
    for (let entry of dictNumbers) {
        createItem(entry);
    }

}

function createItem(entry) {
    let node = document.createElement("div");
    node.innerHTML = entry[0] + " : " + entry[1];
    node.classList.add("item");
    column.appendChild(node);
    console.log(entry);
    node.addEventListener("click", addInAside);

}

function addInAside(event) {
    let node = document.createElement("div");
    node.innerHTML = event.target.innerText.split(':')[1];
    console.log(event);
    node.classList.add("item");
    aside.appendChild(node);
}


