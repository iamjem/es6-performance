load('lib/bookAPIResponse.js');


// dummy function for returning formatted book info
function formatBookMeta({ volumeInfo: { title: bookTitle, subtitle: bookSubtitle }, saleInfo: { saleability: isForSale }, accessInfo: { epub: { isAvailable: hasEPUB}, pdf: { isAvailable: hasPDF } } }){
    return [bookTitle, bookSubtitle, isForSale, hasEPUB, hasPDF].join(' ');
}


function processBooks(books) {
    for (var i = 0, l = books.length; i < l; i++) {
        formatBookMeta(books[i]);
    }
}

var count = 1000;
while (count--) {
    processBooks(books.items);
}
