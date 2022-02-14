
// buyer info collect and transfer to Invoice section 

const buyerDetails = document.getElementById('buyer-details-input');
const buyerInfo = document.getElementById('buyer-info');


document.getElementById('detail-submit-btn').addEventListener('click',
    function () {
        buyerInfo.innerText = buyerDetails.value;
        buyerDetails.value = '';
    })



// get item and send it to table 
// const itemName2 = document.getElementById('item-name-input');
// console.log(itemName2);

function itemcalled(item) {
    return document.getElementById(item);
}
function createElements(element) {
    return document.createElement(element);
}

const itemName = itemcalled('item-name-input');
const itemPrice = itemcalled('item-price-input');
const itemQuentity = itemcalled('item-quantity-input');
const tableInfo = itemcalled('info-table');
const totalPriceField = itemcalled('sub-total');
const totalTaxField = itemcalled('tax');
const grandTotalField = itemcalled('grand-total');
const grandTotalField2 = itemcalled('grand-total-2');




// add button action function 
document.getElementById('add-details-btn').addEventListener('click',
    function () {
        
        // crete table 
        const tr = createElements('tr');
        const th = createElements('th');
        const td1 = createElements('td');
        const td2 = createElements('td');
        const td3 = createElements('td');
        // calculation sub total 
        td3.classList.add('total-item');


        const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuentity.value);
        th.innerText = itemName.value;
        td1.innerText = itemPrice.value;
        td2.innerText = itemQuentity.value;
        td3.innerText = totalPrice;

        // append to the tr and table 
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tableInfo.appendChild(tr);

        // clean the input field 
        itemName.value='';
        itemPrice.value = '';
        itemQuentity.value = '';

        // sub total calculation 
        const totalItem = document.getElementsByClassName('total-item');
        let subTotal = 0;
        for (let i = 0; i< totalItem.length; i++) {
          const element = totalItem[i];
          const price = parseInt(element.innerText);
           subTotal = subTotal + price;
        }
        const totalTax = (subTotal*.2).toFixed(2);
        const grandTotal = parseFloat(subTotal) + parseFloat(totalTax);
        // output
        totalPriceField.innerText= subTotal;
        totalTaxField.innerText = totalTax;
        grandTotalField.innerText = grandTotal;
        grandTotalField2.innerText = grandTotal;
        
       
    })