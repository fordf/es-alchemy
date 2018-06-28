// Scrape Ingredient -> Effects from UESP's Morrowind ingredients page
// as of June 2018

var ingred;
let tableRows = i => Array.from(document.querySelectorAll(`table:nth-of-type(${i}) tr`)).slice(1),
    commonIngredRows = tableRows(1),
    specialIngredRows = tableRows(3);
let ingreds = Array.from(commonIngredRows).reduce((d, row, i) => {
    if (i % 2) {
        d[ingred] = Array.from(row.querySelectorAll('td:nth-child(n-4) > a:nth-child(2)'))
                         .map(link => link.innerText)
    } else {
        ingred = row.querySelector('td:nth-child(2) > a').innerText
    }
    return d
},
    Array.from(specialIngredRows).reduce((d, row, i) => {
        if (i % 2) return d;
        ingred = row.querySelector('td:nth-child(2)>b>a').innerText;
        d[ingred] = Array.from(row.querySelectorAll(`td:nth-child(n+5)>a:nth-child(2)`)).map(a => a.innerText);
        return d;
    }, {})
);
