var pass;
pass = prompt("please enter the password to access");
if (pass == "mera@password") {
  document.location.href = "myurl.html";
} else {
  document.write("The password you've is enter is incorrect");
}
