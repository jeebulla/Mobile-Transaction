const pinCode = "*901#";
let accountBalance = 5000;
const userPin = 1111;
alert("Dial *901# to perform a USSD transaction");
let accessCode = prompt("Enter USSD Code here");
if (accessCode === pinCode) {
  let transaction = +prompt(`
    1.Balance Enquiry
    2.Transfer
    3.Airtime
    4.Pay bills
    5.Deactivate Account`);

  if (transaction === 1) {
    let affirm = confirm(`₦6.98 network charge will apply for this transaction?
        Would you like to proceed?`);
    if (affirm === true) {
      alert(`Your account balance is ₦${accountBalance}.
            Thank you!`);
    } else {
      alert("Thank you for choosing IDAN Bank");
    }
  } else if (transaction === 2) {
    let bankType = +prompt(`Choose bank type
    1. Access Transfer
    2. Transfer to other banks`);
    if (bankType === 1) {
      +prompt("Enter amount");
      let confirmation = +prompt("Enter your Secret pin");
      if (confirmation === userPin) {
        alert(`Transfer Complete`);
      } else {
        alert("Transaction failed");
      }
    } else {
      let bankName = +prompt(`Choose bank name
        1. GT Bank
        2. Zenith Bank
        3. UBA Bank
        4. Union Bank
        5. First Bank
        99. Others`);

      switch (bankName) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          let accountNum = +prompt("Enter account number");
          let amount = +prompt("Enter amount");
          let confirmation = +prompt("Enter your Secret pin");
          if (confirmation === userPin) {
            alert(`Transfer Complete
            You have transefered ₦${amount} to ${accountNum}`);
          } else {
            alert("Transaction failed");
          }
          break;
        case 99:
          let selectBank = prompt("Enter bank name");
          confirmation = +prompt("Enter your Secret pin");
          if (confirmation === userPin) {
            alert(`Transfer Complete
            You have transefered ₦${amount} to ${selectBank}`);
          } else {
            alert("Transaction failed");
          }
      }
    }
  } else if (transaction === 3) {
    const self = +prompt(`
    1. Self
    2. Others`);
    if (self === 1) {
      +prompt(`Enter amount`);
      let confirmation = +prompt("Enter your Secret pin");
      if (confirmation === userPin) {
        alert(`Transfer Complete`);
      } else {
        alert("Transaction failed");
      }
    } else if (self === 2) {
      let userNum = +prompt(`Enter Phone Number`);
      prompt(`Enter Network
       1. MTN
       2. GLO
       3. 9MOBILE
       4. AIRTEL`);
      const rechargeAmount = +prompt("Enter recharge amount");
      let confirmation = +prompt("Enter your Secret pin");
      if (confirmation === userPin) {
        alert(`${userNum} has been recharged ${rechargeAmount}
        Thank you.`);
      } else {
        alert("Transaction failed");
      }
    } else {
      alert("Transaction failed");
    }
  } else if (transaction === 4) {
    alert("Feature unavailable");
  } else if (transaction === 5) {
    alert("Feature unavailable");
  } else {
    alert("Invalid Transaction");
  }
} else {
  confirm(
    `Welcome to Access Bank USSD Banking.
     ₦6.98 network change will apply to your account for banking services on this channel.
     Press 901 to accept or 2 to reject`
  );
}
