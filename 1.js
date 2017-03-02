function  validateForm() {
    var email=document.myForm.uemail.value;
    var password=document.myForm.upassword.value;
    var name=document.myForm.fname.value;
    var lastname=document.myForm.lname.value;
    var phoneno=document.myForm.telno.value;
    var city=document.myForm.ucity.value;
    var country=document.myForm.ucountry.value;
    var birthday=document.myForm.birthday.value;
    var nationality=document.myForm.unationality.value;
    var accept=document.myForm.a1.checked;
    var receive=document.myForm.a2.checked;

    if(emailvalidation(email)) {
        if(pswdvalidation(password,7,12)) {
            if(firstnamevalidation(name,4,12)) {
                if(lastnamevalidation(lastname,3,12)) {
                    if(phonenumbervalidation(phoneno)) {
                        if(cityvalidation(city)) {
                            if(countryvalidation(country)) {
                                if(birthdayvalidation(birthday)) {
                                    if(nationvalidation(nationality)) {
                                        if(acceptvalidation(accept)) {
                                            if(receivevalidation(receive)) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function emailvalidation(email) {
    exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email) {
        document.getElementById("error_uemail").innerHTML = "*Email id is required."
        return false;
    }else if(!exp.test(email)) {
        document.getElementById("error_uemail").innerHTML = "*Enter a valid Email."
        return false;
    }
    document.getElementById("error_uemail").innerHTML = ""
    return true;
}

function pswdvalidation(password,min,max) {
    if (!password){
        document.getElementById("error_upassword").innerHTML = "*password is required."
        return false;
    }else if(!(password.length>=min && password.length<max)){
        document.getElementById("error_upassword").innerHTML = "*Password must be atleast 6 characters long."
        return false;
    }
    document.getElementById("error_upassword").innerHTML = ""
    return true;
}
function firstnamevalidation(name,min,max) {
    if (!name) {
        document.getElementById("error_fname").innerHTML = "*first name is required"
        return false;
    }else if(!(name.length>=min && name.length<max)){
        document.getElementById("error_fname").innerHTML = "*first name must be of specified length"
        return false;
    }
    document.getElementById("error_fname").innerHTML = ""
    return true;
}

function lastnamevalidation(lastname,min,max) {
    if(!lastname) {
        document.getElementById("error_lname").innerHTML = "*Last name is required"
        return false;
    }else if(!(lastname.length>=min && lastname.length<max)) {
    document.getElementById("error_lname").innerHTML = "*Last name must be of specified length"
        return false;
    }
    document.getElementById("error_lname").innerHTML = ""
    return true;
}

function phonenumbervalidation(phoneno) {
    var phone = /^\d{10}$/;
    if (!phoneno) {
        document.getElementById("error_telno").innerHTML = "*phone no is required"
        return false;
    }else if(!phone.test(phoneno)) {
        document.getElementById("error_telno").innerHTML = "*phone no must be of atmost 10 digits"
        return false;
    }
    document.getElementById("error_telno").innerHTML=""
    return true;
}

function cityvalidation(city) {
    if(!city) {
        document.getElementById("error_ucity").innerHTML="*city is required"
        return false;
    }else if(city=="default"){
        document.getElementById("error_ucity").innerHTML="*city must be selected from list"
        return false;
    }
    document.getElementById("error_ucity").innerHTML=""
        return true;
    }


function countryvalidation(country) {
    if(!country) {
        document.getElementById("error_ucountry").innerHTML="*country is required"
        return false;
    }else if(country=="default"){
        document.getElementById("error_ucountry").innerHTML="*country must be selected from the list"
        return false;
    }
    document.getElementById("error_ucountry").innerHTML=""
        return true;
    }


function birthdayvalidation(birthday) {
    if(!birthday) {
        document.getElementById("error_birthday").innerHTML="Please select your appropriate date of birth"
        return false;
    }
    document.getElementById("error_birthday").innerHTML=""
        return true;
    }

function nationvalidation(nationality) {
    if(!nationality) {
        document.getElementById("error_unationality").innerHTML="please select your nationality"
        return false;
    }else if(nationality=="default"){
        document.getElementById("error_unationality").innerHTML="select your nationality from the list"
        return false;
    }
    document.getElementById("error_unationality").innerHTML=""
        return true;
    }


function acceptvalidation(accept) {
    if(!accept) {
        document.getElementById("error_a1").innerHTML="please accept these details"
        return false;
    }
    else
    {
        document.getElementById("error_a1").innerHTML=""
        return true;
    }
}

function receivevalidation(receive) {
    if(!receive) {
        document.getElementById("error_a2").innerHTML="please fill this"
        return false;
    }
    else
    {
        document.getElementById("error_a2").innerHTML=""
        return true;
    }
}
