const itemContainer=document.getElementById('item-container');
const addBtn=document.getElementById('btn');
const cat=document.getElementById('select');
const link=document.getElementById('text');
const invalid=document.getElementById('para');


let itemArr=[];
addBtn.addEventListener('click',(e)=>{
    if(link.value==""){
        invalid.innerText="No Link present";
        setTimeout(()=>{
            invalid.innerText="";
        },1000);
    }
    else{
    const itemDiv=document.createElement('div');
    const imgTag=document.createElement('img');
    const button=document.createElement('button');
    itemDiv.append(imgTag);
    itemDiv.append(button);
    imgTag.src=link.value;
    button.classList="delete-btn";
    itemDiv.classList=`store-item ${cat.value}`;
    button.innerText ="Delete";
    itemArr.push({
        "url" : link.value,
        "type" : cat.value
    })
    console.log(itemArr)
    itemContainer.appendChild(itemDiv);
    link.value="";
    }
});

//For Delete

itemContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        let imgSrc=e.target.previousElementSibling.src;
        console.log(imgSrc)
        let delteIndex=itemArr.findIndex(item=> item.url==imgSrc);
        itemArr.splice(delteIndex,1);
        e.target.parentNode.remove();
    }
    console.log(itemArr)
});



function filterItem(e){
    e.preventDefault();
    const storeImages=document.querySelectorAll('.store-item');
    const filter=e.target.dataset.filter;
    storeImages.forEach((item)=>{
        if(filter == 'all'){
            item.style.display='block';
        }
        else if(item.classList.contains(filter)){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })

}


const buttons=document.querySelectorAll('.btn');
buttons.forEach((filterButton)=>{
    filterButton.addEventListener('click',filterItem);
})



