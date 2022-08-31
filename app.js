// https://www.omnicalculator.com/finance/cash-flow-to-debt

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cashflowtodebtratioRadio = document.getElementById('cashflowtodebtratioRadio');
const operatingcashflowRadio = document.getElementById('operatingcashflowRadio');
const totaldebtRadio = document.getElementById('totaldebtRadio');

let cashflowtodebtratio;
let operatingcashflow = v1;
let totaldebt = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

cashflowtodebtratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating cash flow';
  variable2.textContent = 'Total debt';
  operatingcashflow = v1;
  totaldebt = v2;
  result.textContent = '';
});

operatingcashflowRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash flow to debt ratio';
  variable2.textContent = 'Total debt';
  cashflowtodebtratio = v1;
  totaldebt = v2;
  result.textContent = '';
});

totaldebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash flow to debt ratio';
  variable2.textContent = 'Operating cash flow';
  cashflowtodebtratio = v1;
  operatingcashflow = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cashflowtodebtratioRadio.checked)
    result.textContent = `Cash flow to debt ratio = ${computecashflowtodebtratio().toFixed(2)}`;

  else if(operatingcashflowRadio.checked)
    result.textContent = `Operating cash flow = ${computeoperatingcashflow().toFixed(2)}`;

  else if(totaldebtRadio.checked)
    result.textContent = `Total debt = ${computetotaldebt().toFixed(2)}`;
})

// calculation

function computecashflowtodebtratio() {
  return (Number(operatingcashflow.value) / Number(totaldebt.value)) * 100;
}

function computeoperatingcashflow() {
  return (Number(cashflowtodebtratio.value) / 100) * Number(totaldebt.value);
}

function computetotaldebt() {
  return Number(operatingcashflow.value) / (Number(cashflowtodebtratio.value) / 100);
}