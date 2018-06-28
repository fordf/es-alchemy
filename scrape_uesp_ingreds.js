// Scrape Ingredient -> Effects from UESP's Morrowind ingredients page
// as of June 2018

var ingred;
let tableRows = i => Array.from(document.querySelectorAll(`table:nth-of-type(${i}) tr`)).slice(1),
    commonIngredRows = tableRows(1),
    specialIngredRows = tableRows(3);
let ingreds = Array.from(commonIngredRows).reduce((d, row, i) => {
    if (i % 2) {
        let effectLinks = Array.from(row.querySelectorAll('td > a:first-child')).slice(0,4)
        let effects = effectLinks.map(link => link.title)
        d[ingred] = effects
    } else {
        ingred = row.querySelector('td:nth-child(2) > a').title.split(':')[1]
    }
    return d
}, 
    Array.from(specialIngredRows).reduce((d, row, i) => {
        if (i % 2) return d;
		ingred = row.querySelector('td:nth-child(2)>b>span').id.replace(/.27/g, "'").replace(/_/g, ' ');
        d[ingred] = Array.from(row.querySelectorAll(`td:nth-child(n+5)>a:first-child`)).map(a => a.title);
        return d;
    }, {})                                               
);
