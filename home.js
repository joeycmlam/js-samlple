
let stock = {
    stockRic: '0006.HK',
    latestPrie: 10,
    getPrice: function () {
        return this.latestPrie;
    }

};

const hcomment = document.getElementById('comment')


showMessage(hcomment.id, "result")

function addStock(day, ...stockCodes) {
    stockCodes.forEach(id => console.log(id));
}

addStock('Mondy', '0005.HK', '0006.HK', '0008.HK');

let app = (function() {
    let a = 'abcde';
    console.log('in fucntion - ' + a);
    return {};
}) ();

console.log(app);

let aStock = { stockRic: "0005", latestPrie: 15};

let newFn = stock.getPrice.bind(aStock);

console.log(newFn());

