window.onload = function(){
    // button
    Quickaddbtn = document.getElementById("Quickadd");
    Addbtn = document.getElementById("Add");
    Cancelbtn = document.getElementById("cancel");
    QuickaddformBtn = document.querySelector(".quickaddform");
    
    // form field
    FirstName = document.querySelector("firstname");
    LastName = document.querySelector("lastname");
    AddRess = document.querySelector("address");
    Email = document.querySelector("email");


    // Addressbook Display
    addBookDiv = document.querySelector(".addbook");

    // Create Storage Array
    addressBook = [];

    // Eventlisteners 
    Quickaddbtn.addEventListener("click", function(){
        QuickaddformBtn.style.display ="block";
    });
    
    Cancelbtn.addEventListener("click", function(){
        QuickaddformBtn.style.display ="none"
    })
    Quickaddbtn.addEventListener("dblclick", function(){
        QuickaddformBtn.style.display ="none";
    });

    Addbtn.addEventListener('click', Addbook)
    
    function jasonway(FirstName,LastName,AddRess,Email){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.AddRess = AddRess;
        this.Email = Email;
    }

    function Addbook(){
        isNull = firstname.value != '' && lastname.value != '' && address.value != '' && email.value != '';
        if(isNull){
        object = new jasonway(firstname.value,lastname.value,address.value,email.value);
        addressBook.push(object)
        localStorage['addbook']= JSON.stringify(addressBook)
        // hiding the form
        QuickaddformBtn.style.display="none";
        Showall();
        // clear form
        Clearform();
        //  to show form
        
        }
    }
    function Clearform(){
    frm = document.querySelectorAll('.formfields');
    for(i in frm){
        frm[i].value='';
    }}}
    function Showall(){
        // check if the 'addbook' exists in localstorage or else create it 
    if(localStorage['addbook'] === undefined ){
        localStorage['addbook'] = "[]"
    }
    else{
        addressBook = JSON.parse(localStorage['addbook']);
        addBookDiv.innerHTML ='';

        for(n in addressBook){
            str ='<div class="entry">;'
            str += '<div class="firstname"><p>'+ addressBook[n].FirstName + '</p></div>'
            str += '<div class="lastname"><p>'+ addressBook[n].LastName + '</p></div>'
            str += '<div class="address"><p>'+ addressBook[n].AddRess + '</p></div>'
            str += '<div class="email"><p>' + addressBook[n].Email + '</p></div>'
            str += '<div class="del"><a href="#" class="delbutton" data-id="'+ n +'">Delete</a></div>';
            str += '</div>';
            addBookDiv.innerHTML += str;
        }
    }
}

    
    
