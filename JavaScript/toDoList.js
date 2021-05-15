var inputText=document.getElementById('inputText');
var addButton=document.getElementById('addBTN');
var removeButton=document.getElementById('removeBTN');
var ulParent=document.getElementById('ulList');

function addItemfunc(){
   if(inputText.value!=null&&inputText.value!=''&&inputText.value!=undefined){
    var newListElement=document.createElement('li');
    var lastCount=ulParent.childElementCount;
    var newTextNode=document.createTextNode(inputText.value);
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
    ulParent.appendChild(newListElement);
    inputText.value='';
    
   }
};
addButton.addEventListener('click',addItemfunc)
document.body.addEventListener('keydown',function(){

    if(event.key==='Enter'){
        addItemfunc();
    }
    
    
});




removeButton.addEventListener('click',function(){

    ulParent.removeChild(ulParent.lastElementChild);
    
});




ulParent.addEventListener('click', function(event) {

    var regex=/del\d/;
    var clickedDelId=event.target.id
    if(regex.test(clickedDelId)){

    if(confirm('Are you sure ?')){
        var deletionId=clickedDelId.substring(3);
        var deleteElement=document.getElementById('Item '+deletionId);
        ulParent.removeChild(deleteElement);
    }
    
    }

    

})



ulParent.addEventListener('click',function(e){


    var regex=/check\d/;
    var clickedId=e.target.id
    if(regex.test(clickedId))
    {
    var clickedTickId=(e.target.id).substring(5);
    


    var selectedElement=document.getElementById('Item '+clickedTickId);
    if(selectedElement.style.textDecoration==='none'||selectedElement.style.textDecoration===''){
        
        selectedElement.style.textDecoration='line-through';

    }
    else{
        selectedElement.style.textDecoration='none';

    }

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
 
        

    }
})




