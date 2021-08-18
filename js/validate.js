function validateForm() {
  var fname = document.forms["register"]["fname"].value;
  if (fname == "") {
    alert("'Full name' must be filled out.");
    return false;
  }

  var uname = document.forms["register"]["uname"].value;
  if (uname == "") {
    alert("'Username' must be filled out.");
    return false;
  }

  var email = document.forms["register"]["email"].value;
  if (email == "") {
    alert("'Email' must be filled out.");
    return false;
  }

  var pass = document.forms["register"]["pass"].value;
  if (pass == "") {
    alert("'Password' must be filled out.");
    return false;
  }

  var copass = document.forms["register"]["copass"].value;
  if (copass == "") {
    alert("'Confirm password' must be filled out.");
    return false;
  }
}