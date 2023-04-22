

const dobError = document.getElementById('dobError');
const postcode_Error = document.getElementById('postcode_Error');

function init() {
  var regForm = document.getElementById("regform");
   regForm.onclick = validateDob;
   regForm.onclick = validatePostcode;
   regForm.onclick = validateTextarea;
  }


function validateDob() {
  var date_Error = document.getElementById("dobError");
 
  //Get the date from the TextBox.
  var dateString = document.getElementById("date_of_birth").value;
  var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

  //Check whether valid dd/MM/yyyy Date Format.
  if (regex.test(dateString)) {
      var parts = dateString.split("/");
      var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
      var dtCurrent = new Date();
      date_Error.innerHTML = "Eligibility is between 18 years and 80 years."
      if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18  || dtCurrent.getFullYear() - dtDOB.getFullYear() > 80) {
          return false;
      }

      if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

          //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
          if (dtCurrent.getMonth() < dtDOB.getMonth()) {
              return false;
          }
          if (dtCurrent.getMonth() == dtDOB.getMonth()) {
              //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
              if (dtCurrent.getDate() < dtDOB.getDate()) {
                  return false;
              }
          }
      }
      date_Error.innerHTML = "";
      return true;
  } else {
      date_Error.innerHTML = "Enter date in dd/mm/yyyy format please."
      return false;
  }

}

// const element = document.getElementById('date_of_birth');
// if(element){
// element.addEventListener("click",validateDob);
// }


// check if postcode is valid or not
function validatePostcode() {
  const postcodeInput = document.getElementById("post_code").value;
  const postcodeError = document.getElementById("postcode_Error");
  const selectedState = document.getElementById("state").value;
  console.log(selectedState);
  console.log(postcodeInput);

  var firstDigit = postcodeInput.charAt(0);
  var rightFirstDigit;
  let validPostcode = true;

  switch (selectedState) {
    case "VIC":
      rightFirstDigit= '3,8';
      break;
    case "NSW":
      rightFirstDigit= '1,2';
      break;
    case "QLD":
      rightFirstDigit= '4,9';
      break;
    case "NT":
      rightFirstDigit= '0';
      break;
    case "WA":
      rightFirstDigit= '6';
      break;
    case "SA":
      rightFirstDigit= '5';
      break;
    case "TAS":
      rightFirstDigit= '7';
      break;
    case "ACT":
      rightFirstDigit= '0';
      break;
    default:
      validPostcode = false;
  }

  if (!rightFirstDigit.includes(firstDigit)) {
    postcodeError.innerText = "Invalid postcode for selected state.";
    return false;
  } else {
    postcodeError.innerText = "";
    return true;
  }
}

function validateTextarea(){
   const otherCheckbox = document.getElementById('other-kills-checkbox');
   const otherchecktextarea = document.getElementById('otherchecktextarea');
// set the checked property to true
   otherCheckbox.checked = true;
// the textarea cannot empty
  if(otherCheckbox.checked){
    const textbox = document.getElementById('textError');
    textbox.innerHTML = "Textarea cannot be empty if other skills are selected."
    return false;
  }
  else{
    textbox.innerHTML = "";
    return true ;
   }
}

// Retrieve the reference number when the user clicks the Apply hyperlink
// const applyLinks = document.querySelectorAll(".apply-link");
// console.log(applyLinks);
// applyLinks.forEach((link) => {
//   link.addEventListener("click", function(event) {
//     // Get the reference number from the job description section
   
//     const section = event.target.closest("section");
//     const referenceNo= section.getAttribute("id");


//     // Store the reference number in local storage
//     localStorage.setItem("referenceNo", referenceNo);
//   });
// });

// // Retrieve the reference number from local storage
// const referenceNo = localStorage.getItem("referenceNo");
// console.log(referenceNo);

document.getElementById('job1').addEventListener("click",function(){
  window.localStorage.setItem("referenceNo","asss");

})

window.onload = init;

