const bill1 = {
  bank: {
    name: 'AMERIA',
    amount: {
      value: 100000,
      currency: 'AMD'
    }
  }
}

const bill2 = {
  bank: {}
}

function getBillValueFrom(bill) {
  // return bill.bank.amount.value

  // return (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
  //   ? bill.bank.amount.value
  //   : undefined;

  return bill?.bank?.amount?.value
}

// console.log(getBillValueFrom(bill1));
// console.log(getBillValueFrom(bill2));


console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('h2')?.textContent);
console.log(document.querySelector('h2').textContent);
