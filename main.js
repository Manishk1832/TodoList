let form = document.getElementById("addForm");

let listItem = document.getElementById("items");

let themeColors = document.querySelectorAll('input[type="radio"]');


form.addEventListener("submit",runEvent);

listItem.addEventListener("click",removeEvent);

let filterItem = document.getElementById("filter");

filterItem.addEventListener("keyup",filterEvent);





//add item in list

function runEvent(e){
    e.preventDefault();
    let inputElement = document.querySelector('input[id="item"]');
    console.log(inputElement.value);


    let newItem = document.createElement("li");
    newItem.className="list-group-item";
    newItem.append(inputElement.value); 
    console.log(newItem);


    let deleteBtn = document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.append("X");
    newItem.append(deleteBtn);
    listItem.append(newItem);

}


//remove items from list

function removeEvent(e){
if(e.target.classList.contains("btn-danger")){
    if(confirm("Want to delete this item?")){
       listItem.removeChild(e.target.parentElement);
    }
}


}

//filter out elements

function filterEvent(e){
 let text = e.target.value.toLowerCase();

 let items = document.getElementsByTagName("li");
 

 Array.from(items).forEach((item)=>{
  let searchText =   item.childNodes[0].textContent;

  if(searchText.toLowerCase().indexOf(text)!=-1){
    item.style.display="block"
  }else{
    item.style.display="none"
  }
 })
    
}

//store themes

function storeTheme(theme){
  
 localStorage.setItem("theme",theme);


}











//apply theme


function applyTheme(){
const activeTheme =  localStorage.getItem("theme");

 themeColors.forEach((themeOption)=>{
    if(activeTheme==themeOption.id){
        themeOption.checked = true;
    }
 })


}

themeColors.forEach((themeOption)=>{
    themeOption.addEventListener("click",()=>{
        storeTheme(themeOption.id);





    })
})

document.onload = applyTheme();



