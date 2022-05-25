

var userNameInput = document.getElementById('userNameInput');
var userEmailInput = document.getElementById('userEmailInput');
var userPasswordInput = document.getElementById('userPassword');
var userInfo ;
    if( localStorage.getItem('user')==null){
        userInfo=[];
    }else{
        userInfo= JSON.parse(localStorage.getItem('user'));
    };


   function signUp(){
    userInputsValidation();
    isExist();
       if( userInputsValidation()==true && isExist()==false){

        user={
            name:userNameInput.value,
            email:userEmailInput.value,
            pass :userPasswordInput.value,
        };
        userInfo.push(user);
        localStorage.setItem('user',JSON.stringify(userInfo));
        var confirmMsg=document.getElementById('confirmMsg');
        confirmMsg.classList.replace('d-none','d-fixed');
        var signin=document.getElementById('signin');    
        signin.replace('d-none','d-fixed');
    }else{
        var wrongMsg=document.getElementById('wrongMsg');
        wrongMsg.classList.replace('d-none','d-block');
    }
        
        
    }

    function userNameValidation(){
        var userNameAlert =document.getElementById('userNameAlert');
        var regex=/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
        if(regex.test(userNameInput.value)==true && userNameInput.value !=""){
            userNameInput.classList.add("is-valid");
            userNameInput.classList.remove('is-invalid');
            userNameAlert.classList.replace('d-block','d-none')
            return true;
        }else{
            userNameInput.classList.add("is-invalid");
            userNameInput.classList.remove('is-valid');
            userNameAlert.classList.replace('d-none','d-block')
            return false;
        };
    };
    function userEmailValidation(){
        var regex=/^.{5,15}$/;
        var userEmailAlert = document.getElementById('userEmailAlert');
        if(regex.test(userEmailInput.value == true)&& userEmailInput.value != ""){
            userEmailInput.classList.add("is-valid");
            userEmailInput.classList.remove('is-invalid');
            userEmailAlert.classList.replace('d-block','d-none');
            return true;
        }else{
            userEmailInput.classList.add("is-invalid");
            userEmailInput.classList.remove('is-valid');
            userEmailAlert.classList.replace('d-none','d-block')
            return false;
        };
    }
    function userPasswordValidation(){
        var regex =/^.{5,15}$/;
        var userpaswAlert=document.getElementById('userpaswAlert');
        if(regex.test(userPasswordInput.value ==true)&&userPasswordInput.value!=""){
            userPasswordInput.classList.add("is-valid");
            userPasswordInput.classList.remove('is-invalid');
            userpaswAlert.classList.replace('d-block','d-none')
            return true;
        }else{
            userPasswordInput.classList.add("is-invalid");
            userPasswordInput.classList.remove('is-valid');
            userpaswAlert.classList.replace('d-none','d-block')
            return false;
        };
    }

    function userInputsValidation(){
        userNameValidation();
        userEmailValidation();
        userPasswordValidation();
        if(userNameValidation()==true && userEmailValidation()==true&&userPasswordValidation()==true){
            return true;
        }else{return false};
    };
    function isExist(){
     var   accountExistMsg =document.getElementById('accountExistMsg');
     for(var i =0; i < userInfo.length;i++){
         if(userInfo[i].name.toLowerCase() ==userNameInput.value.toLowerCase()||userInfo[i].email.toLowerCase()==userEmailInput.value){
             userNameInput.classList.remove('is-valid');
             userEmailInput.classList.remove('is-valid');
             accountExistMsg.classList.replace('d-none','d-block');
            return true;
         }else{
             return false;
         }
     }
    }

    // i Cant get user name in login padge........!
    var userNameWelcome=localStorage.getItem('welcomUserpadge')
    function login(){
        var loginEmail =document.getElementById('loginEmail');
        var loginPassword=document.getElementById('loginPassword');
        var loginBtn = document.getElementById('loginBtn');
        var wrongMsg =document.getElementById('wrongMsg');
        if( loginEmail.value ==""||loginPassword.value ==""){
            var  fillMsg=document.getElementById('fillMsg');
            fillMsg.classList.replace('d-none','d-block');
            return false;
        }
        for(var i =0;i<userInfo.length;i++){
            if(userInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase()&&userInfo[i].pass.toLowerCase()==loginPassword.value){
                localStorage.setItem('welcomUserpadge',userInfo[i].name)
                loginBtn.setAttribute('href','welcome.html')

            }else{
                wrongMsg.classList.replace('d-none','d-block')
            }
        }
    }
    function displayWelcomeUser(){
        document.getElementById('welcomUserpadge').innerHTML="Welcome"+userNameWelcome;
    }
    function logout(){
        localStorage.removeItem('welcomUserpadge');
    }