const pinCode = "*901#";
let accountBalance = 5000;
const serviceFee = 6.98;
const userPin = 1111;
let isLoggedIn = true;
let transaction, account, amount, confirmation, bankName, accessCode, affirm;
const start = document.querySelector("#start");

start.addEventListener("click", (e) => {
  //Prevents page from refreshing
  // e.preventDefault();
  login();
});
function login() {
  for (let i = 0; i < 4; i++) {
    if (isLoggedIn) {
      accessCode = prompt("Enter USSD Code here");
      if (!accessCode || accessCode !== pinCode) {
        isLoggedIn = true;
        if (!accessCode) {
          alert("Thank you for choosing Access Bank");
          break;
        }
        alert(`
        Dial *901# to perform a USSD transaction
        You have ${3 - i} trails remaining`);
      } else {
        isLoggedIn = false;
        transactionType();
      }
    }
  }
}
//Access Bank Transfer
function intraBankTransfer() {
  account = prompt("Enter account number");
  amount = +prompt("Enter amount");
  if (amount <= accountBalance) {
    confirmPin();
    if (confirmation === userPin) {
      alert(`
      You have transferred ₦${amount} to ${account}
      Your account balance is: ₦${accountBalance - amount}
      Thank you.`);
      accountBalance = accountBalance - amount;
    } else {
      alert("Invalid transaction pin");
    }
  } else {
    alert("Insufficient fund");
  }
}

//Other Bank Transfer
function interBankTransfer() {
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
    bankName = "Others";
  }
  switch (bankName) {
    case "GT Bank":
    case "Zenith Bank":
    case "UBA Bank":
    case "Union Bank":
    case "First Bank":
      account = +prompt("Enter account number");
      let amount = +prompt("Enter amount");
      if (amount <= accountBalance) {
        confirmPin();
        if (confirmation === userPin) {
          alert(`
            Transfer Complete
            You have transefered ₦${amount} to ${bankName}
            with account number ${account}
            Thank you.`);
          accountBalance = accountBalance - amount;
        } else {
          alert("Transaction failed");
        }
      } else {
        alert("Insuffienct fund");
      }
      break;
    case "Others":
      bankName = prompt("Enter bank name");
      account = +prompt("Enter account number");
      let amounts = +prompt("Enter amount");
      if (amounts <= accountBalance) {
        confirmPin();
        if (confirmation === userPin) {
          alert(`
            Transfer Complete
            You have transefered ₦${amounts} to ${bankName}
            bank account number ${account}
            Thank you.`);
          accountBalance = accountBalance - amounts;
        } else {
          alert("Transaction failed");
        }
      } else {
        alert("Insufficient fund");
      }
      break;
    default:
      alert("Enter a valid service");
      break;
  }
}

//Charge Confirmation
function confirmCharge() {
  affirm = confirm(`
      ₦6.98 network charge will apply for this transaction.
      Would you like to proceed?`);
  return affirm;
}

//User pin Confirmation
function confirmPin() {
  confirmation = +prompt("Enter your Secret pin");
}

//Airtime topup Self
function airtimeSelfTopUp() {
  amount = +prompt(`Enter amount`);
  if (amount <= accountBalance) {
    confirmPin();
    if (confirmation === userPin) {
      alert(`
        Transfer Complete
        You recharged your line with ₦${amount} airtime
        Your account balance is: ₦${accountBalance - amount}
        Thank you.`);
    } else {
      alert("Transaction failed");
    }
  } else {
    alert("Insufficient fund");
  }
}

//Airtime topup Others
function airtimeOthersTopUp() {
  let userNum = +prompt(`Enter Phone Number`);
  prompt(`Enter Network
   1. MTN
   2. GLO
   3. 9MOBILE
   4. AIRTEL`);
  const rechargeAmount = +prompt("Enter recharge amount");
  if (rechargeAmount < accountBalance) {
    confirmPin();
    if (confirmation === userPin) {
      alert(`${userNum} has been recharged ₦${rechargeAmount}
      Thank you.`);
    } else {
      alert("Transaction failed");
    }
  } else {
    alert("Insufficient fund");
  }
}

//Transaction type
function transactionType() {
  transaction = +prompt(`
  1.Balance Enquiry
  2.Transfer
  3.Airtime
  4.Pay bills
  5.Deactivate Account`);

  // Transaction execution
  if (transaction === 1) {
    //Check Balance
    confirmCharge();
    let response =
      affirm === true
        ? `
      Your account balance is ₦${accountBalance - serviceFee}.
      Thank you!`
        : `Thank you for banking with us`;
    alert(response);
    accountBalance = accountBalance - serviceFee;
  } else if (transaction === 2) {
    //Cash Transfer
    let bankType = +prompt(`Choose bank type
    1. Access Transfer
    2. Transfer to other banks`);
    let transferChannel =
      bankType === 1 ? intraBankTransfer() : interBankTransfer();
    return transferChannel;
  } else if (transaction === 3) {
    //Airtime top up
    const self = +prompt(`
    1. Self
    2. Others`);
    let rechargeType = self === 1 ? airtimeSelfTopUp() : airtimeOthersTopUp();
    return rechargeType;
  } else if (transaction === 4) {
    alert("Feature unavailable");
  } else if (transaction === 5) {
    alert("Feature unavailable");
  }
}

//  if (accessCode !== pinCode) {
//   confirm(`
//   Welcome to Access Bank USSD Banking.
//   ₦6.98 network change will apply to your
//   account for services on this channel.
//   Press 901 to accept or 2 to reject`);
// } else {
//   alert("Thanking you for choosing Access bank");
// }
