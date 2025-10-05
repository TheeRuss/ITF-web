const account_balance = document.getElementById("accountbalance")
const cash_balance = document.getElementById("cashbalance")
const txt = document.getElementById("text")
const operation = document.getElementById("bank-ope")
const choice = document.getElementById("bankope")
let account_b = 0
let cash_b = 0
let ope1 = 0
let inout = 0

function change() {
    account_b = account_balance.value
    cash_b = cash_balance.value
    txt.prepend(`Current account balance: ${parseInt(account_b)}, Current cash balance: ${cash_b}\n`)
}

function proceed() {
    account_b = parseInt(account_b)
    cash_b = parseInt(cash_b)
    inout = parseInt(choice.value)
    ope1 = parseInt(operation.value)
    if (operation.value == "Deposit") {
        account_b += inout
        cash_b -= inout
    }
    else {
        account_b -= inout
        cash_b += inout
    }
    if (account_b < 0) {
        txt.prepend("Couldn't Withdraw (Insufficient account balace)\n")
    }
    if (cash_b < 0) {
        txt.prepend("Couldn't Deposit entered balance (Insufficient account balace)\n")
    }
    else {
        txt.prepend(`Current account balance: ${parseInt(account_b)}, Current cash balance: ${cash_b}\n`)
    }
}

function convert(){

}
