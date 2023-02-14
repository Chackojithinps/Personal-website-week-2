function validate(){
  var username=document.getElementById("name")
  var email=document.getElementById("email")
  var subject=document.getElementById("subject")
  var message=document.getElementById("message")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(username.value==""){
    document.getElementById("error-message").innerHTML="The box is empty"
    return false;
  }
  if(username.value.length<5){
    document.getElementById("error-message").innerHTML="Name should contain atleast 5 Elements"
    return false;
  }
  if(email.value==""){
    document.getElementById("error-message").innerHTML="The email box is empty"
    return false;
  }
  if(mailformat.test(email)==false){
      document.getElementById("error-message").innerHTML="Invalid Email Id, try another one"
      return false;
     }
  if(subject.value==""){
    document.getElementById("error-message").innerHTML="subject box is empty"
    return false;
  }
  if(subject.value.length<5){
    document.getElementById("error-message").innerHTML="Subject should contain atleast 5 Elements"
    return false;
  }
  if(message.value==""){
    document.getElementById("error-message").innerHTML="Message box is empty"
    return false;
  }
  if(message.value.length<10){
    document.getElementById("error-message").innerHTML="messege should contain atleast 10 Elements"
    return false; 
  }
  return true;
  
 }

// function validate(){
//   var username=document.getElementById("name")
//   var email=document.getElementById("email")
//   var subject=document.getElementById("subject")
//   var message=document.getElementById("message")
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   // var send=true;
//   if(username.value==""){
//     document.getElementById("error-message").innerHTML="The box is empty"
//     // send=false
//     return false;
//   }
//   if(username.value.length<5){
//     document.getElementById("error-message").innerHTML="Name should contain atleast 5 Elements"
//     // send=false;
//     return false;
//   }
//   if(email.value==""){
//     document.getElementById("error-message").innerHTML="The email box is empty"
//     // send=false
//     return false;
//   }
//  if(inputText.value.match(mailformat)==false){
//   document.getElementById("error-message").innerHTML="Invalid Email Id, try another one"
//   return false;
//  }
// {
//   if(subject.value==""){
//     document.getElementById("error-message").innerHTML="Subject box is empty"
//     return false;
//   }
//   if(subject.value.length<5){
//     document.getElementById("error-message").innerHTML="Subject should contain atleast 5 Elements"
//     // send=false
//     return false;
//   }
//   if(message.value==""){
//     document.getElementById("error-message").innerHTML="Message box is empty"
//     // send=false
//     return false;
//   }
//   if(message.value.length<10){
//     document.getElementById("error-message").innerHTML="Messege should contain atleast 10 Elements"
//     // send=false
//     return false; 
//   }
  
//   return true;

// }