
function validation(){
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("nameerror")
    const mobileError = document.getElementById("mobileerror")
    const emailError = document.getElementById("emailerror")
    const alphaExp = /^[a-zA-Z]+$/;  //regular expression for charcters only
    const mobilelength= document.getElementById("countrycode").value
    const numExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email expression
    let namestatus = mobilestatus = emailstatus = false

    // name validation
    if(username=== ""){
     nameError.innerHTML =" Name is mandatory"
    }else{
          if(username.match(alphaExp)){
          nameError.innerHTML ="";
          namestatus = true
           }
          else{
             nameError.innerHTML =" only characters"
         }
    }

    // mobile validation
    if(mobile === ""){
     mobileError.innerHTML =" Contact number is required"
    }else{
          if(mobile.match(numExp)) {
             if(mobile.length == mobilelength){
                 mobileError.innerHTML = "" ;
                 mobilestatus = true
             }
              else{
                 mobileError.innerHTML =  mobilelength + " Digit mobile number "
             }

          }
          else{
             mobileError.innerHTML =" Only Digits"
          }
    }


                 //  email validation

                if(email ===""){
                    emailError.innerHTML="Email Id is required"
                } else{
                     if(email.match(emailExp)){
                         emailError.innerHTML =""
                         emailstatus =true
                     }
                      else{
                         emailError.innerHTML =   email +" is not valid email "
                      }
                }








 if ( namestatus  &&  mobilestatus && emailstatus){
     return true
 }
   else{
     return false
   }

}
