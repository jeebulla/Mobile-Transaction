const pinCode = "*901#";
let accountBalance = 5000;
const userPin = 1111;
let account, amount, confirmation, bankName;
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
    let affirm = confirm(`
      ₦6.98 network charge will apply for this transaction.
      Would you like to proceed?`);
    if (affirm === true) {
      alert(`
        Your account balance is ₦${accountBalance}.
        Thank you!`);
    } else {
      alert("Thank you for banking with us");
    }
  } else if (transaction === 2) {
    let bankType = +prompt(`Choose bank type
    1. Access Transfer
    2. Transfer to other banks`);
    if (bankType === 1) {
      account = prompt("Enter account number");
      amount = +prompt("Enter amount");
      confirmation = +prompt("Enter your Secret pin");
      if (confirmation === userPin && amount <= accountBalance) {
        alert(`
        You have transferred ₦${amount} to ${account}
        Your account balance is: ₦${accountBalance - amount}
        Thank you.`);
      } else {
        alert("Transaction failed");
      }
    } else {
      bankName = +prompt(`Choose bank name
        1. GT Bank
        2. Zenith Bank
        3. UBA Bank
        4. Union Bank
        5. First Bank
        99. Others`);

      if (bankName === 1) {
        bankName = "GT Bank";
      } else if (bankName === 2) {
        bankName = "Zenith Bank";
      } else if (bankName === 3) {
        bankName = "UBA Bank";
      } else if (bankName === 4) {
        bankName = "Union Bank";
      } else if (bankName === 5) {
        bankName = "First Bank";
      } else if (bankName === 99) {
        bankName = "";
      }
      switch (bankName) {
        case "GT Bank":
        case "Zenith Bank":
        case "UBA Bank":
        case "Union Bank":
        case "First Bank":
          account = +prompt("Enter account number");
          let amount = +prompt("Enter amount");
          let confirmation = +prompt("Enter your Secret pin");
          if (confirmation === userPin) {
            alert(`
            Transfer Complete
            You have transefered ₦${amount} to ${bankName}
            with account number ${account}
            Thank you.`);
          } else {
            alert("Transaction failed");
          }
          break;
        case 99:
          bankName = prompt("Enter bank name");
          account = +prompt("Enter account number");
          confirmation = +prompt("Enter your Secret pin");
          if (confirmation === userPin) {
            alert(`
            Transfer Complete
            You have transefered ₦${amount} to ${bankName}
            with ${account}
            Thank you.`);
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
      amount = +prompt(`Enter amount`);
      let confirmation = +prompt("Enter your Secret pin");
      if (confirmation === userPin) {
        alert(`
        Transfer Complete
        You recharged your line with ₦${amount} airtime
        Your account balance is: ₦${accountBalance - amount}
        Thank you.`);
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
        alert(`${userNum} has been recharged ₦${rechargeAmount}
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
} else if (accessCode !== pinCode) {
  confirm(`
  Welcome to Access Bank USSD Banking.
  ₦6.98 network change will apply to your 
  account for services on this channel.
  Press 901 to accept or 2 to reject`);
} else {
  alert("Thanking you for choosing Access bank");
}
