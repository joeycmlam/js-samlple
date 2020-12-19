
let stock = {
    stockRic: '0006.HK',
    latestPrice: 0.0

};

const h1 = document.getElementById('h1Msg')
const hstockcode = document.getElementById('hStockCode')
const hprice = document.getElementById('hPrice')


showMessage(h1.id, 'Stock Price');
showMessage(hstockcode.id, stock.stockRic);
showMessage(hprice.id, stock.latestPrice);



hstockcode.style.color = 'BLUE';
hprice.style.color = 'BLUE';




