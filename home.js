
let stock = {
    stockRic: '0006.HK',
    latestPrice: 0.0

};

const h1 = document.getElementById('h1Msg')
const hstockcode = document.getElementById('hStockCode')
const hprice = document.getElementById('hPrice')
const hcomment = document.getElementById('comment')


showMessage(h1.id, 'Stock Price');
showMessage(hstockcode.id, stock.stockRic);
showMessage(hprice.id, stock.latestPrice);



hstockcode.style.color = 'BLUE';
hprice.style.color = 'BLUE';


const values = ['a', 'bb', 'ccc', 'eed', 'f']
const found = values.find(function(item) {
   return item.length > 2;
});

values.forEach(function(item) {console.log(item)});


showMessage(hcomment.id, found)




const containers = document.getElementsByClassName('container');


function aFunction() {
    let found = "xxxx";
    console.log(found);
}

aFunction();

console.log(found);
