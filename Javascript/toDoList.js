var inputText=document.getElementById('inputText');
var addButton=document.getElementById('addBTN');
var removeButton=document.getElementById('removeBTN');
var ulParent=document.getElementById('ulList');
// console.log(document.getElementById('del1'));
// var trash=document.getElementById('fa fa-trash');

function addItemfunc(){
   if(inputText.value!=null&&inputText.value!=''&&inputText.value!=undefined){
    var newListElement=document.createElement('li');
    var lastCount=ulParent.childElementCount;
    var newTextNode=document.createTextNode(inputText.value);
    // newListElement.innerHTML='List Item 3';
    newListElement.append(newTextNode);
    newListElement.id="Item "+(lastCount+1);
    var delElement=document.createElement('i');
    newListElement.appendChild(delElement);
    delElement.id='del'+(lastCount+1);
    
    delElement.className='fa fa-trash ';
    var ticks=document.createElement('button');
    newListElement.append(ticks);
    ticks.innerHTML='&#10003;';
    ticks.id='check'+(lastCount+1);
    
    var editBox=document.createElement('i');
    newListElement.append(editBox);
    editBox.className='fa fa-edit';
    editBox.id='edit'+(lastCount+1);
    // console.log(newListElement);
    // console.log(ulParent.firstElementChild)
    // console.log(newListElement);
    // console.log(ticks);
    // console.log(delElement.id)
    ulParent.appendChild(newListElement);
    inputText.value='';
    
   }
};
addButton.addEventListener('click',addItemfunc)
document.body.addEventListener('keydown',function(){
    // console.log(String.fromCharCode(e.keyCode));
    // console.log(e.keyCode);
    // console.log(event.key);

    if(event.key==='Enter'){
        addItemfunc();
    }
    
    
});



//To add Element From Top use this function 
// addButton.addEventListener('click',function(){
    
//     var newListElement=document.createElement('li');
//     var lastCount=ulParent.childElementCount;
//     var newTextNode=document.createTextNode('List Item '+(lastCount+1));
//     // newListElement.innerHTML='List Item 3';
//     newListElement.append(newTextNode);
//     newListElement.id="Item "+(lastCount+1);
//     // console.log(newListElement);
//     // ulParent.appendChild(newListElement);
//     var firstElementChild=ulParent.firstElementChild;
//     ulParent.insertBefore(newListElement,firstElementChild);
    
// })

removeButton.addEventListener('click',function(){
    // console.log(ulParent.lastChild);
    ulParent.removeChild(ulParent.lastElementChild);
    
});




ulParent.addEventListener('click', function(event) {
    // const isList = event.target.nodeName === 'Li';
    // console.log(event.target.nodeName)
    var regex=/del\d/;
    var clickedDelId=event.target.id
    if(regex.test(clickedDelId)){
    // console.log(event.target)
    if(confirm('Are you sure ?')){
        var deletionId=clickedDelId.substring(3);
        // console.log('Item '+deletionId);

        var deleteElement=document.getElementById('Item '+deletionId);
        // console.log(deleteElement);
        ulParent.removeChild(deleteElement);
    }
    
    }

    

})



ulParent.addEventListener('click',function(e){
    // console.log(e.target.id);
    // var clickedTickId=e.target.id

    var regex=/check\d/;
    var clickedId=e.target.id
    if(regex.test(clickedId))
    {
    var clickedTickId=(e.target.id).substring(5);
    
    // console.log('Item '+clickedTickId);

    var selectedElement=document.getElementById('Item '+clickedTickId);
    if(selectedElement.style.textDecoration==='none'||selectedElement.style.textDecoration===''){
        
        selectedElement.style.textDecoration='line-through';
        // console.log(selectedElement.style.textDecoration);
    }
    else{
        selectedElement.style.textDecoration='none';
        // console.log(selectedElement.style.textDecoration);
    }

    // console.log(selectedElement);
    // var newStrikedValue=document.createTextNode(selectedElement.innerText);
    }
    
    
})

ulParent.addEventListener('click',function(e){

    var regex=/edit\d/;
    var clickedId=e.target.id
    if(regex.test(clickedId))
    {
    var clickedId=e.target.id
    var editId=clickedId.substring(4);
    // console.log(editId);
    // console.log('Item '+deletionId);

    var selectedElement=document.getElementById('Item '+editId);
    // console.log(selectedElement);
        var newText=prompt('Update your task : ',selectedElement.innerText.slice(0,-2));
        
        var secondPartIndex=selectedElement.innerHTML.indexOf('<');
        // console.log(secondPartIndex);
        var afterString=selectedElement.innerHTML.substring(secondPartIndex);
        // console.log(afterString);
        if(newText!=null){
            
            selectedElement.innerHTML=newText+afterString;
            // console.log(selectedElement.innerHTML);
        }
        // var test1='List Item 2 and what do you do tell me everything in List Item 2 and what d List Item 2 and what d bdhbjwbcjwcbwjccw nswmwdn mcnbvnvnvnvnvnvmvjfn';
        // console.log(test1.length)//145
        

    }
})




