function updateProductInput(product,minus,price){
const inputFaield =document.getElementById(product + '-number');
let inputNumber = inputFaield.value;
if(minus){
  inputNumber = parseInt(inputNumber) + 1;  
}else if(inputNumber > 0) {inputNumber = parseInt(inputNumber) - 1;}

const updateTotal =document.getElementById(product + '-total')
updateTotal.innerText = inputNumber * price;

inputFaield.value = inputNumber;
calculateTotal()
}
function getProductInput(productId){
    const productInput =document.getElementById(productId + '-number');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}


function calculateTotal(){
   const phoneAmmount = getProductInput('phone') * 500;
   const caseAmmount = getProductInput('case') * 10;
  const subTotal = phoneAmmount + caseAmmount;
  const  tex = subTotal / 10;
  const total = subTotal + tex;

  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-ammount').innerText = tex;
  document.getElementById('total-price').innerText = total;
}


document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductInput('phone',true,500);

})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductInput('phone',false,500);

})

document.getElementById('case-plus').addEventListener('click',function(){
    updateProductInput('case',true,10);
  
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductInput('case',false,10);
    
})