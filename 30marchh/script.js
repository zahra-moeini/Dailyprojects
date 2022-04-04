const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople=[
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortego',
    'Larry Ellison',
    'Mark Zuxkeberg',
    'Michael Bloomberg',
    'Larry Page'
];

// store listimes
const listItmes=[];

let dragStartIndex;

createList();

// insert list items into Dom
function createList(){
    [...richestPeople]
    .map(a=>({value:a,sort:Math.random()}))
    .sort((a,b)=>a.sort-b.sort)
    .map(a=>a.value)
    .forEach((person,index)=>{
        const ListItem=document.createElement('li');

        ListItem.setAttribute('data-index',index);

        ListItem.innerHTML=`
        <span class="number">${index+1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItmes.push(ListItem);
        draggable_list.appendChild(ListItem)
    });
    addEventListener();
}

function dragStsrt(){
    // console.log('Event','dragstsrt');
    dragStartIndex=+this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);

}

function dragEnter(){
    // console.log('Enter','drapenter');
    this.classList.add('over');
}

function dragleave() {
//   console.log("Event", "dragleave");
     this.classList.remove('over')

}


function dragOver(e) {
//   console.log("Event", "dragover");
     e.preventDefault();
}

function dragDrop() {
//   console.log("Event", "drop");
     const dragEndindex=+this.getAttribute('data-index');
     swapitems(dragStartIndex,dragEndindex);
     this.classList.remove('over');


}

function swapitems(fromIndex,toIndex){
    const itemOne = listItmes[fromIndex].querySelector(".draggable");
    const itemTwo = listItmes[toIndex].querySelector(".draggable");

    listItmes[fromIndex].appendChild(itemOne);
    listItmes[toIndex].appendChild(itemTwo)
}

function checkOrder(){
    listItmes.forEach((ListItem,index)=>{
        const personName = ListItem.querySelector(".draggable").innerText.trim();
        if(personName !==richestPeople[index]){
            ListItem.classList.add("wrong");
        }
        else{
            ListItem.classList.remove('wrong');
            ListItem.classList.add('right');
        }
    });
}

function addEventListener(){
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable=>{
        draggable.addEventListener('dragstsrt',dragStsrt);
    })

    dragListItems.forEach(item=>{
        item.addEventListener("dragover",dragOver);
        item.addEventListener("drop",dragDrop);
        item.addEventListener("dragenter",dragEnter);
        item.addEventListener("dragleave", dragleave);

    });
    
}

check.addEventListener("click", checkOrder);