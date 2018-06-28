var ingred;
Array.from(rows).slice(1).reduce((d, row, i) => {
    if (i % 2) {
        let effectLinks = Array.from(row.querySelectorAll('td > a:first-child')).slice(0,4)
        let effects = effectLinks.map(link => link.title)
        console.log(i, effects)
        d[ingred] = effects
    } else {
        console.log(row)
        ingred = row.querySelector('td:nth-child(2) > a').title
    }
    return d
}, {});