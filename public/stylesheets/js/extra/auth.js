     function validateForm() {

     let name =  document.getElementById('defaultContactFormName').value;
  if (name == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

  let phone =  document.getElementById('defaultContactFormPhone').value;
  if (phone == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Phone Number cannot be empty";
      return false;
  }

  let email =  document.getElementById('defaultContactFormEmail').value;
  if (email == "") {
    document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
  }
        else if (email != ""){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        document.getElementById('notify').style.display = "block";
          document.getElementById('status').innerHTML = "Email format invalid";
          return false;
      }
  }
  else {
    document.getElementById('notify').style.display = "none";
  }

  var message =  document.getElementById('exampleFormControlTextarea2').value;
  if (message == "") {
    document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
  } else {
    document.getElementById('notify').style.display = "none";
  }
    document.getElementById('notify').style.display = "block";
  document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('contact-form').submit();

  }


  function agreeds(){
    if (document.getElementById('agreed').checked){
        let dismiss = document.getElementById('submitForm').style.display = "block";
    }else{
        let dismiss = document.getElementById('submitForm').style.display = "none";
    }
  }

     function validateForm2() {
// ================================= Name ====================================
     let name =  document.getElementById('defaultContactFormName').value;
  if (name == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }
// ============================== Phone Number ================================
  let phone =  document.getElementById('defaultContactFormPhone').value;
  if (phone == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Phone Number cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }
// ================================== Email ========================
  let email =  document.getElementById('defaultContactFormEmail').value;
  if (email == "") {
    document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
  }
        else if (email != ""){function agreeds(){
          alert('goal');
          // let lasu = document.getElementById('agreed');
          // if (document.getElementById('agreed').checked){
          //     let dismiss = document.getElementById('submitForm').style.display = "block";
          // }else{
          //     let dismiss = document.getElementById('submitForm').style.display="hidden";
          // }
        }
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        document.getElementById('notify').style.display = "block";
          document.getElementById('status').innerHTML = "Email format invalid";
          return false;
      }
  }
  else {
    document.getElementById('notify').style.display = "none";
  }
// ========================== Address ==========================================

  let address =  document.getElementById('defaultContactFormAddress').value;
  if (address == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Address cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }
// =============================== Gender ==================================

let gender =  document.getElementById('gender').value;
  if (gender == "selectGender") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Please Select Your Gender";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

// ============================== Faculty ================================
let faculty =  document.getElementById('defaultContactFormFaculty').value;
  if (faculty == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Faculty cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

  // ============================== Dept ================================
let dept =  document.getElementById('defaultContactFormDept').value;
  if (dept == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Department cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

  // ============================== Level ================================
  let level =  document.getElementById('defaultContactFormLevel').value;
  if (level == "selectLevel") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Level cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

   // ============================== course ================================
   let course =  document.getElementById('defaultContactFormCourse').value;
  if (course == "") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Course cannot be empty";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

// =============================== Classes ==================================

let classes =  document.getElementById('classes').value;
  if (classes == "selectClass") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Please Select the type of Class";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

  // =============================== Days ==================================

let days =  document.getElementById('days').value;
  if (days == "selectDays") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Please Select the preferred Days";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

   // =============================== Class Time ==================================

let classTime =  document.getElementById('classTime').value;
  if (classTime == "chooseTime") {
        document.getElementById('notify').style.display = "block";
      document.getElementById('status').innerHTML = "Please Select the preferred Time";
      return false;
  }else {
    document.getElementById('notify').style.display = "none";
  }

  // function agreeds(){
    // alert('goal');
    // let lasu = document.getElementById('agreed');
    // if (document.getElementById('agreed').checked){
    //     let dismiss = document.getElementById('submitForm').style.display = "block";
    // }else{
    //     let dismiss = document.getElementById('submitForm').style.display="hidden";
    // }
  // }


  document.getElementById('notify').style.display  = "block";
  document.getElementById('status').innerHTML = "Sending...";
  document.getElementById('tutor-form').submit();

  }

