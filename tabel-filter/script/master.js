function getInvoiceType() {
    let results = ["فاتورة المتجر", "فاتورة الدورة تعليمية"];
    for (let i = 0; i < trTableFilter.length; i++) {
        let currentIndex = theSelectFilter.selectedIndex;
        trTableFilter[i].style.display = "table-row";
        if ( currentIndex == 2 || currentIndex == 3 ) {
            let tdTableFilter = trTableFilter[i].getElementByTagName("td")[2];
            if (tdTableFilter) {
                let resultTable = tdTableFilter.textContent || tdTableFilter.innerText;
                resultTable.indexOf(results[currentIndex - 2]) > -1 ? trTableFilter[i].style.display = '' : trTableFilter[i].style.display = 'none';
            }
        }
    }
}
