load('lib/bookAPIResponse.js');


// dummy function for returning formatted book info
function formatBookMeta(book){
    var bookTitle = book.volumeInfo.title;
    var bookSubtitle = book.volumeInfo.subtitle;
    var isForSale = book.saleInfo.saleability;
    var hasEPUB = book.accessInfo.epub.isAvailable;
    var hasPDF = book.accessInfo.pdf.isAvailable;
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
