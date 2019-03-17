// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

const denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  let output = {status: null, change: []};

  let available = parseFloat(cid.map(function(x) { return x[1] }).reduce((a, b) => a + b, 0).toFixed(2));
  cid = cid.reverse();
  let currentValue = 0;

  let changeArray = denom.reduce(function(acc, next, index) {
    let currentValueArray = 0;
    if (cid[index][1] === 0) {
      acc.push(cid[index]);
      return acc;
    } else {
      if (change >= next.val) {
        while (change >= next.val && cid[index][1] >= next.val) {
          change -= next.val;
          change = Math.round(change * 100) / 100;
          cid[index][1] = Math.round(cid[index][1] * 100) / 100;
          cid[index][1] -= next.val;
          currentValueArray += next.val;
        }
        currentValue = currentValueArray;
        acc.push([next.name, Math.round(currentValueArray * 100) / 100]);
        return acc;
      } else {
        return acc;
      }
    }
  }, []);

  if (change > available || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  } else if (available - Math.round(currentValue * 100) / 100 === 0) {
    output.status = "CLOSED";
    output.change = changeArray.reverse();
    return output;
  } else {
    output.status = "OPEN";
    output.change = changeArray.reverse();
    return output;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
