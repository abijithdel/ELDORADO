function copy1() {

    navigator.clipboard.writeText
     ("9745388290");
    alert("number copied")
    
}

 function copy2() {
    navigator.clipboard.writeText
      ("9562484096");
    alert("number copied")
    
  }


 function copy3() {
    navigator.clipboard.writeText
     ("8157038735");
    alert("number copied")
      
  }

  


  
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_waqrd6s";
  const templateID = "template_5e4bl45";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

