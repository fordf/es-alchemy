var effectsToIngredsForm,
    ingredsToEffectsForm,
    effectsDataList,
    ingredsDataList,
    merchantsDataList,
    effectSelector,
    ingredSelector,
    merchantSelector,
    potionIngredsDiv,
    potionMakerDiv,
    potionClearButton,
    effectsJSONForm,
    ingredsJSONForm,
    sortedIngredients,
    selectedIngredients,
    merchantIngredients,
    merchantForm,
    newMerchantButton,
    alchemy,
    infoBox,
    newIngredButton;

const log = console.log
var negativeEffectsFiltered = true;

var effectsUrls = {
    "Blind": "http://images.uesp.net//b/b1/MW-icon-effect-Blind.jpg/",
    "Burden": "http://images.uesp.net//5/54/MW-icon-effect-Burden.jpg/",
    "Cure Blight Disease": "http://images.uesp.net//a/a3/MW-icon-effect-Cure_Blight_Disease.jpg/",
    "Cure Common Disease": "http://images.uesp.net//e/e5/MW-icon-effect-Cure_Common_Disease.jpg/",
    "Cure Paralyzation": "http://images.uesp.net//4/4b/MW-icon-effect-Cure_Paralyzation.jpg/",
    "Cure Poison": "http://images.uesp.net//7/72/MW-icon-effect-Cure_Poison.jpg/",
    "Damage Fatigue": "http://images.uesp.net//d/d6/MW-icon-effect-Damage_Fatigue.jpg/",
    "Damage Health": "http://images.uesp.net//7/78/MW-icon-effect-Damage_Health.jpg/",
    "Damage Intelligence": "http://images.uesp.net//a/a4/MW-icon-effect-Damage_Attribute.jpg/",
    "Damage Magicka": "http://images.uesp.net//d/d5/MW-icon-effect-Damage_Magicka.jpg/",
    "Detect Animal": "http://images.uesp.net//9/97/MW-icon-effect-Detect_Animal.jpg/",
    "Detect Enchantment": "http://images.uesp.net//b/b9/MW-icon-effect-Detect_Enchantment.jpg/",
    "Detect Key": "http://images.uesp.net//b/b7/MW-icon-effect-Detect_Key.jpg/",
    "Dispel": "http://images.uesp.net//5/50/MW-icon-effect-Dispel.jpg/",
    "Drain Agility": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Alteration": "http://images.uesp.net//e/ee/MW-icon-effect-Drain_Skill.jpg/",
    "Drain Endurance": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Fatigue": "http://images.uesp.net//c/c4/MW-icon-effect-Drain_Fatigue.jpg/",
    "Drain Health": "http://images.uesp.net//1/11/MW-icon-effect-Drain_Health.jpg/",
    "Drain Intelligence": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Luck": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Magicka": "http://images.uesp.net//5/55/MW-icon-effect-Drain_Magicka.jpg/",
    "Drain Personality": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Speed": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Strength": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Drain Willpower": "http://images.uesp.net//5/57/MW-icon-effect-Drain_Attribute.jpg/",
    "Feather": "http://images.uesp.net//f/f8/MW-icon-effect-Feather.jpg/",
    "Fire Shield": "http://images.uesp.net//4/4e/MW-icon-effect-Fire_Shield.jpg/",
    "Fortify Agility": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Attack": "http://images.uesp.net//4/4d/MW-icon-effect-Fortify_Attack.jpg/",
    "Fortify Endurance": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Fatigue": "http://images.uesp.net//0/03/MW-icon-effect-Fortify_Fatigue.jpg/",
    "Fortify Health": "http://images.uesp.net//f/fb/MW-icon-effect-Fortify_Health.jpg/",
    "Fortify Intelligence": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Luck": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Magicka": "http://images.uesp.net//6/6c/MW-icon-effect-Fortify_Magicka.jpg/",
    "Fortify Maximum Magicka": "http://images.uesp.net//0/02/MW-icon-effect-Fortify_Maximum_Magicka.jpg/",
    "Fortify Personality": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Speed": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Strength": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Fortify Willpower": "http://images.uesp.net//e/e6/MW-icon-effect-Fortify_Attribute.jpg/",
    "Frost Damage": "http://images.uesp.net//5/54/MW-icon-effect-Frost_Damage.jpg/",
    "Frost Shield": "http://images.uesp.net//6/6e/MW-icon-effect-Frost_Shield.jpg/",
    "Invisibility": "http://images.uesp.net//8/80/MW-icon-effect-Invisibility.jpg/",
    "Levitate": "http://images.uesp.net//0/08/MW-icon-effect-Levitate.jpg/",
    "Light": "http://images.uesp.net//0/0f/MW-icon-effect-Light.jpg/",
    "Lightning Shield": "http://images.uesp.net//2/2c/MW-icon-effect-Lightning_Shield.jpg/",
    "Night Eye": "http://images.uesp.net//3/3a/MW-icon-effect-Night_Eye.jpg/",
    "Paralyze": "http://images.uesp.net//4/48/MW-icon-effect-Paralyze.jpg/",
    "Poison": "http://images.uesp.net//d/d0/MW-icon-effect-Poison.jpg/",
    "Recall": "http://images.uesp.net//0/05/MW-icon-effect-Recall.jpg/",
    "Reflect": "http://images.uesp.net//e/e3/MW-icon-effect-Reflect.jpg/",
    "Resist Common Disease": "http://images.uesp.net//a/a5/MW-icon-effect-Resist_Common_Disease.jpg/",
    "Resist Fire": "http://images.uesp.net//0/04/MW-icon-effect-Resist_Fire.jpg/",
    "Resist Frost": "http://images.uesp.net//0/08/MW-icon-effect-Resist_Frost.jpg/",
    "Resist Magicka": "http://images.uesp.net//8/84/MW-icon-effect-Resist_Magicka.jpg/",
    "Resist Paralysis": "http://images.uesp.net//c/c9/MW-icon-effect-Resist_Paralysis.jpg/",
    "Resist Poison": "http://images.uesp.net//e/ea/MW-icon-effect-Resist_Poison.jpg/",
    "Resist Shock": "http://images.uesp.net//4/48/MW-icon-effect-Resist_Shock.jpg/",
    "Restore Agility": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Endurance": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Fatigue": "http://images.uesp.net//2/2f/MW-icon-effect-Restore_Fatigue.jpg/",
    "Restore Health": "http://images.uesp.net//8/82/MW-icon-effect-Restore_Health.jpg/",
    "Restore Intelligence": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Luck": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Magicka": "http://images.uesp.net//d/d8/MW-icon-effect-Restore_Magicka.jpg/",
    "Restore Personality": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Speed": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Strength": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Restore Willpower": "http://images.uesp.net//8/85/MW-icon-effect-Restore_Attribute.jpg/",
    "Spell Absorption": "http://images.uesp.net//8/81/MW-icon-effect-Spell_Absorption.jpg/",
    "Swift Swim": "http://images.uesp.net//f/f5/MW-icon-effect-Swift_Swim.jpg/",
    "Telekinesis": "http://images.uesp.net//7/74/MW-icon-effect-Telekinesis.jpg/",
    "Vampirism": "http://images.uesp.net//d/d7/MW-icon-effect-Vampirism.jpg/",
    "Water Breathing": "http://images.uesp.net//b/b0/MW-icon-effect-Water_Breathing.jpg/",
    "Water Walking": "http://images.uesp.net//d/da/MW-icon-effect-Water_Walking.jpg/",
    "Weakness to Fire": "http://images.uesp.net//1/15/MW-icon-effect-Weakness_to_Fire.jpg/",
    "Weakness to Poison": "http://images.uesp.net//4/43/MW-icon-effect-Weakness_to_Poison.jpg/",
}

COLORS = {
    "Blind": 'grey',
    "Paralyze": 'black'
}

const negatives = ["Weak", "Drain", "Paral", "Pois"]
const isNegative = x => negatives.some(i=>x.startsWith(i))
const isPositive = x => !negativeEffectsFiltered || !isNegative(x)

for (let e of Object.keys(effectsUrls)) {
    if (e.startsWith("Weakn") || e.startsWith('Drain')) COLORS[e] = "maroon";
    if (e.startsWith("Fortify") || e.startsWith('Restore')) COLORS[e] = "green";
    if (e.startsWith("Resist") || e.startsWith('Cure')) COLORS[e] = "teal";
    if (e.startsWith("Levitate") || e.startsWith('Detect') || e.startsWith('Water')) COLORS[e] = "purple";
}

class SortedIngredDataListArray {
    constructor(...args) {
        if (args.length == 1 && Array.isArray(args[0])) {
            this.array = args[0]
        } else {
            this.array = Array.from(args)
        }
        ingredsDataList.innerHTML = this.array.map(optionize).join('')
        Object.getOwnPropertyNames(Array.prototype).forEach(prop => this[prop] = (...as) => Array.prototype[prop].apply(this.array, as))
    }
    insert(item) {
        const array = this.array
        const [afterValue, afterIndex] = findNextBiggest(array, item);
        ingredsDataList.insertBefore(makeOption(item), ingredsDataList.childNodes[afterIndex])
        this.array = array.slice(0, afterIndex).concat([item]).concat(array.slice(afterIndex))
    }
}

class MyMap extends Object {
    map(f) {
        Object.entries(this).map(...args => f(...args))
    }
}

class FullyConnectedNode {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.connTypes = ['effects', "ingreds", 'merchants'].filter(t => t !== type)
        this.connTypes.forEach(type => this[type] = {})
    }

    all() {
        return this.connTypes.reduce((dict, type) => {
            dict[type] = Object.keys(this[type]);
            return dict;
        }, {})
    }
}

class Graph extends Object {
    constructor(relations={}) {
        super()
        this.update(relations)
    }

    add(type, name) {
        if (!(type in this)) this[type] = {};
        else if (name in this[type]) return;
        this[type][name] = new FullyConnectedNode(type, name)
    }

    connect(rootType, rootName, relatedType, relatedName, add=true) {
        if (add) this.add(rootType, rootName);
        this.add(relatedType, relatedName);
        const rootNode = this[rootType][rootName];
        const relatedNode = this[relatedType][relatedName];
        const exists = relatedName in rootNode[relatedType];
        rootNode[relatedType][relatedName] = relatedNode;
        relatedNode[rootType][rootNode] = rootNode;
        return !exists;
    }

    update(relations) {
        entries(relations).forEach(([rootType, relationDict]) => {
            log(rootType)
            if (!(rootType in this)) this[rootType] = {};
            entries(relationDict).forEach(([relatedType, innerRelations]) => {
                log('\t'+relatedType)
                if (!(relatedType in this)) this[relatedType] = {};
                entries(innerRelations).forEach(([rootNode, relatedToNodes]) => {
                    log(rootNode, relatedToNodes)
                    this.add(rootType, rootNode);
                    relatedToNodes.forEach(node => this.connect(rootType, rootNode, relatedType, node, false));
                })
            })
        })
    }
    jsonify(type) {
        Object.entries(this[type])
    }
}

function entries(x) {
    return Array.isArray(x) ? x : Object.entries(x || {})
}

class AlchemyGraph extends Graph {
    connect(rootType, rootName, relatedType, relatedName) {
        let created = super.connect(rootType, rootName, relatedType, relatedName);
        const special = [rootType, relatedType];
        if (special.includes('ingreds') && special.includes('merchants')) {
            const merchantNode = [rootNode, relatedNode][special.indexOf('merchants')];
            const merchantEffects = matchingEffects(Object.keys(merchantNode.ingreds));
            merchantEffects.forEach(([eff, ings]) => this.connect('merchants', merchantNode.name, 'effects', eff));
        }
        return created;
    }
}

selectedIngredients = new Set(JSON.parse(localStorage.getItem('selectedIngredients')));
document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    // ingredsToEffects = flipStringListDict(effectsToIngreds);
    const effectsToIngreds = ensureStrListObj(JSON.parse(localStorage.getItem('effectsToIngreds')), Object.keys(effectsUrls));
    const merchantIngredients = ensureStrListObj(JSON.parse(localStorage.getItem('merchantIngredients')));
    alchemy = new AlchemyGraph(
        {
            'effects': {'ingreds': effectsToIngreds},
            'merchants': {'ingreds': merchantIngredients}
        }
    );
    effectsToIngredsForm = document.getElementById("effects-to-ingredients-form");
    ingredsToEffectsForm = document.getElementById("ingredients-to-effects-form");
    effectsDataList = document.getElementById('effects');
    ingredsDataList = document.getElementById('ingreds');
    merchantsDataList = document.getElementById('merchants');
    newIngredButton = document.getElementById('new-ingredient');
    effectsJSONForm = document.getElementById('effect-to-ingreds-json-form');
    ingredsJSONForm = document.getElementById('ingred-to-effects-json-form');
    potionIngredsDiv = document.querySelector('#potion-maker > div');
    potionMakerDiv = document.querySelector('#potion-maker > div:nth-child(2)');
    potionClearButton = document.querySelector('#potion-maker > button');
    merchantForm = document.getElementById('merchant-form');
    newMerchantButton = document.getElementById('new-merchant-button');
    infoBox = document.getElementById('info');

    sortedIngredients = new SortedIngredDataListArray(Object.keys(alchemy.ingreds).sort());

    merchantsDataList.innerHTML = Object.keys(alchemy.merchants).map(optionize).join('');
    merchantSelector = document.createElement('input');
    merchantSelector.setAttribute('type', 'text');
    merchantSelector.setAttribute('list', 'merchants');

    effectsDataList.innerHTML = Object.keys(alchemy.effects).map(optionize).join('');
    effectSelector = document.createElement('input');
    effectSelector.setAttribute('type', 'text');
    effectSelector.setAttribute('list', 'effects');

    ingredSelector = document.createElement('input')
    ingredSelector.setAttribute('type', 'text');
    ingredSelector.setAttribute('list', 'ingreds');

    document.body.addEventListener('click', onClick)

    sortedIngredients.forEach(ingred => {
        let ingredDiv = makeIngredDiv(ingred);
        ingredsToEffectsForm.appendChild(ingredDiv);
        addPotionIngredDiv(ingred);
    });

    Object.keys(effectsToIngreds).sort().forEach(effect => {
        let effectDiv = makeEffectDiv(effect)
        effectsToIngredsForm.appendChild(effectDiv);
    });
    updatePotionMaker();

    updateMerchants();

    potionClearButton.addEventListener('click', clearSelected);
    effectsToIngredsForm.addEventListener("change", onEffectFormChange);
    ingredsToEffectsForm.addEventListener("change", onIngredFormChange);
    merchantForm.addEventListener("change", onMerchantFormChange)
    newIngredButton.addEventListener("click", newIngredient);
    effectsJSONForm.addEventListener('submit', onEffectsJSONFormSubmit);
    ingredsJSONForm.addEventListener('submit', onIngredsJSONFormSubmit);
    newMerchantButton.addEventListener("click", newMerchant);
}

function onClick(e) {
    if (!e.target.classList.contains('node')) {
        hideInfo();
        return;
    }
    nodeTypes = ['effects', 'ingreds', 'merchants']
    type = Object.keys(e.target.dataset)[0]
    if (!type) {
        hideInfo();
        return;
    }
    item = e.target.dataset[type]
    connections = alchemy[type][item].all();
    showInfo(e.pageX, e.pageY, item, connections)
}

function hideInfo() {
    infoBox.style.display = 'none';
    if (infoBox.style.display === 'none') infoBox.innerHTML = '';
}

function showInfo(x, y, item, connections) {
    infoBox.style.left = x + 'px'
    infoBox.style.top = y + 'px'
    infoBox.innerHTML = `<h5>${item}</h5>` +
        Object.entries(connections).map(([type, items]) => `<h6>${type}</h6><ul>` +
            items.map(i => `<li>${i}</li>`).join('') + '</ul>').join('');
    infoBox.style.display = 'block';
}

function clearSelected() {
    selectedIngredients = new Set();
    for (let div of Array.from(potionIngredsDiv.children)) {
        div.className = '';
    }
    updatePotionMaker();
}

function addPotionIngredDiv(ingred) {
    let div = document.createElement('div');
    div.innerText = ingred;
    div.setAttribute('data-ingreds', ingred)
    if (selectedIngredients.has(ingred)) div.className = 'selected';
    div.addEventListener('click', () => {
        if (selectedIngredients.has(ingred)) {
            div.className = '';
            selectedIngredients.delete(ingred);
        } else {
            div.className = 'selected';
            selectedIngredients.add(ingred);
        }
        updatePotionMaker();
    })
    let [afterValue, afterIndex] = findNextBiggest((sortedIngredients || []), ingred);
    console.log('addPotionIngredDiv', potionIngredsDiv.querySelector(`div[data-ingreds="${afterValue}"]`), potionIngredsDiv.childNodes[afterIndex])
    potionIngredsDiv.insertBefore(div, potionIngredsDiv.querySelector(`div[data-ingreds="${afterValue}"]`));
}

function updatePotionMaker() {
    localStorage.setItem('selectedIngredients', JSON.stringify(Array.from(selectedIngredients)))
    let foundEffects = matchingEffects(selectedIngredients);
    potionMakerDiv.innerHTML = foundEffects.sort().map(([eff, ings]) => `<p>${eff}: ${ings.join(', ')}</p>`).join('')
}

function updateMerchants(...merchants) {
    localStorage.setItem('merchantIngredients', JSON.stringify(merchantIngredients))

    if (merchants.length === 0) {
        merchantForm.innerHTML = ''
        Object.keys(merchantIngredients).forEach(merchant =>
            merchantForm.appendChild(makeMerchantDiv(merchant)))
    } else {
        merchants.forEach(merchant => {
            merchantForm.replaceChild(
                makeMerchantDiv(merchant),
                merchantForm.querySelector(`div[data-merchants="${merchant}"]`));
        })
    }
}

function onMerchantFormChange(e) {
    const parent = e.target.parentElement;
    let ingred = e.target.value;
    let merchant = e.target.dataset.merchants;
    if (!(ingred in alchemy.ingreds)) {
        if (!confirm('add new ' + ingred)) return;
        sortedIngredients = insertSorted(sortedIngredients, ingred)
        alchemy.add('ingreds', ingred)
        insertNewIngredient(ingred);
    }
    if (!(ingred in merchantIngredients[merchant])) {
        merchantIngredients[merchant] = insertSorted(merchantIngredients[merchant], ingred)
        updateMerchants([merchant])
    }
    setTimeout(
        () => merchantForm.querySelector(`div[data-merchants="${merchant}"] input`).focus(),
        150
    )
}

function newMerchant() {
    let input = merchantSelector
    newMerchantButton.innerHTML = '&#10004;';
    newMerchantButton.parentElement.insertBefore(input, newMerchantButton);
    newMerchantButton.removeEventListener('click', newMerchant);
    input.focus();
    let onSubmitNewMerchant = () => {
        let merchant = input.value;
        if (merchant in merchantIngredients) {
            merchantForm.querySelector(`div[data-merchants="${merchant}"] input`).focus()
        } else {
            merchantIngredients[merchant] = [];
            insertNewMerchant(merchant);
            setTimeout(
                () => merchantForm.querySelector(`div[data-merchants="${merchant}"] input`).focus(),
                150
            )
        }
        newMerchantButton.innerHTML = 'New';
        input.remove();
        newMerchantButton.removeEventListener('click', onSubmitNewMerchant);
        newMerchantButton.addEventListener('click', newMerchant);
    }
    newMerchantButton.addEventListener('click', onSubmitNewMerchant);
}

function insertNewMerchant(merchant) {
    let merchantDiv = makeMerchantDiv(merchant)
    let [afterValue, afterIndex] = findNextBiggest(Object.keys(merchantIngredients).sort(), merchant);
    console.log('insertNewMerchant', merchantForm.querySelector(`div[data-ingreds="${afterValue}"]`), merchantForm.childNodes[afterIndex])
    merchantForm.insertBefore(merchantDiv, merchantForm.querySelector(`div[data-ingreds="${afterValue}"]`));
}

function makeMerchantDiv(merchant) {
    let merchantDiv = document.createElement('div')
    let ingredSelectorClone = ingredSelector.cloneNode(true)
    ingredSelectorClone.setAttribute('data-merchants', merchant);
    merchantDiv.setAttribute('data-merchants', merchant);
    let foundEffects = matchingEffects(merchantIngredients[merchant]);
    merchantDiv.innerHTML = `<h3>${merchant}</h3><h4>Ingredients</h4><ul>` +
        merchantIngredients[merchant].map(i =>
            `<li>${i} <button type="button" onclick="deleteMI('${merchant}', '${i}')">X</button></li>`).join('') +
        `<li>${ingredSelectorClone.outerHTML}</li></ul>` +
        '<h4>Can Make</h4>' +
        foundEffects.sort().map(
            ([eff, ings]) => `<div data-effects="${eff}" style="border: 1px solid ${COLORS[eff] || 'red'}">${eff}: ${ings.join(', ')}</div>`).join('') +
        `<button type="button" onclick="deleteMerchant('${merchant}')">Delete Merchant</button>`
    return merchantDiv;
}

function deleteMerchant(merchant) {
    delete merchantIngredients[merchant];
    updateMerchants();
}

function deleteMI(merchant, ingred) {
    merchantIngredients[merchant] = merchantIngredients[merchant].filter(i => i != ingred)
    updateMerchants([merchant])
}

function matchingEffects(ingreds) {
    return Object.entries(Array.from(ingreds).reduce((foundEffects, ingred) => {
        alceingreds.forEach(e => {
            if (e in foundEffects) {
                foundEffects[e].push(ingred);
            } else if (isPositive(e)) {
                foundEffects[e] = [ingred];
            }
        })
        return foundEffects;
    }, {})).filter(([eff, ings]) => ings.length > 1);
}

function findNextBiggest(array, value) {
    let [afterValue, afterIndex] = array.reduce(([after, afteri], x, i) => {
            if ((!after || x < after) && x > value) {
                return [x, i];
            }
            return [after, afteri];
        },
        [null, array.length]
    )
    return [afterValue, afterIndex]
}

function insertSorted(array, value) {
    let [afterValue, afterIndex] = findNextBiggest(array, value);
    return array.slice(0, afterIndex).concat([value]).concat(array.slice(afterIndex))
}

function flipStringListDict(strListDict) {
    return Object.keys(strListDict).sort().reduce((dict, key) => {
        strListDict[key].forEach(value => {
            dict[value] = insertSorted(dict[value] || [], key)
        });
        return dict;
    }, {});
}

function makeOption(item) {
    const option = document.createElement('option');
    option.setAttribute('value', item);
    return option;
}

const optionize = e => `<option value="${e}">${e}</option>`;
const makeRelationListItem = (type, item, related_to) => `<li><span class="node" data-${type}="${item}">${item}</span><button type="button" onclick="removeIEPair('${item}', '${related_to}')">X</button></li>`

function updateEffect(effect) {
    effectUL = effectsToIngredsForm.querySelector(`div[data-effects="${effect}"] > ul`);
    effectUL.innerHTML = alchemy.effects[effect].ingreds.map(ingred => makeRelationListItem('ingreds', ingred, effect)).join('')
}

function updateIngred(ingred) {
    ingredUL = ingredsToEffectsForm.querySelector(`div[data-ingreds="${ingred}"] > ul`);
    ingredUL.innerHTML = alchemy.ingreds[ingred].effects.map(effect => makeRelationListItem('effects', effect, ingred))
}

function update(...things) {
    for (let thing of things) {
        thing in effectsUrls ? updateEffect(thing) : updateIngred(thing);
    }
    localStorage.setItem('effectsToIngreds', JSON.stringify(effectsToIngreds));
}

function makeEffectDiv(effect) {
    const effectDiv = document.createElement("div");
    const ingredSelectorClone = ingredSelector.cloneNode(true)
    ingredSelectorClone.setAttribute('class', 'ingred-selector')
    effectDiv.setAttribute('data-effects', effect)
    if (COLORS[effect]) effectDiv.style.borderColor = COLORS[effect];
    effectDiv.innerHTML = `<h4 class="node" data-effects="${effect}">${effect}</h4>` +
        // `<img src="${effectsUrls[effect]}" />` +
        `<ul>` + effectsToIngreds[effect].map(ingred => makeRelationListItem('ingreds', ingred, effect)).join('') + 
        `<li>${ingredSelectorClone.outerHTML}</li></ul>`
    return effectDiv;
}

function makeIngredDiv(ingred) {
    const ingredDiv = document.createElement("div");
    const effectSelectorClone = effectSelector.cloneNode(true)
    effectSelectorClone.setAttribute('data-ingreds', ingred);
    ingredDiv.setAttribute('data-ingreds', ingred);
    ingredDiv.innerHTML = `<h4 class="node" data-ingreds="${ingred}">${ingred}</h4><ul>` +
        Object.keys(alchemy.ingreds[ingred].effects).map(effect => makeRelationListItem('effects', effect, ingred)).join('') +
        `<li>${effectSelectorClone.outerHTML}</li></ul>` +
        `<button type="button" onclick="deleteIngred('${ingred}')">x</button>`
    return ingredDiv;
}

function makeIngredDivAlt(ingred) {
    const ingredDiv = document.createElement("div");
    const effectSelectorClone = effectSelector.cloneNode(true)
    effectSelectorClone.setAttribute('data-ingreds', ingred);
    ingredDiv.setAttribute('data-ingreds', ingred);
    ingredDiv.innerHTML = `<h4 class="node" data-ingreds="${ingred}">${ingred}</h4><ul>` +
        Object.keys(alchemy.ingreds[ingred].effects).map(effect => makeRelationListItem('effects', effect, ingred)).join('') + '</ul>' +
        `<button type="button" onclick="deleteIngred('${ingred}')">x</button>`
    ingredDiv.querySelector('ul').appendChild(effectSelectorClone)
    return ingredDiv;
}

function insertNewIngredient(ingred) {
    addPotionIngredDiv(ingred)
    let ingredDiv = makeIngredDiv(ingred)
    let [afterValue, afterIndex] = findNextBiggest((sortedIngredients || []), ingred);
    console.log('insertNewIngredient', ingredsToEffectsForm.querySelector(`div[data-ingreds="${afterValue}"]`), ingredsToEffectsForm.childNodes[afterIndex])
    ingredsToEffectsForm.insertBefore(ingredDiv, ingredsToEffectsForm.querySelector(`div[data-ingreds="${afterValue}"]`));
}

function newIngredient() {
    let input = document.createElement('input');
    newIngredButton.innerHTML = '&#10004;';
    newIngredButton.parentElement.insertBefore(input, newIngredButton);
    input.focus();
    newIngredButton.removeEventListener('click', newIngredient);
    let onSubmitNewIngred = () => {
        let ingred = input.value;
        if (!(ingred in alchemy.ingreds)) {
            sortedIngredients = insertSorted(sortedIngredients, ingred)
            alchemy.ingreds[ingred].effects = [];
            insertNewIngredient(ingred);
            setTimeout(
                () => ingredsToEffectsForm.querySelector(`div[data-ingreds="${ingred}"] input`).focus(),
                150
            )
        }
        newIngredButton.innerHTML = 'New';
        input.remove();
        newIngredButton.removeEventListener('click', onSubmitNewIngred);
        newIngredButton.addEventListener('click', newIngredient);
    }
    newIngredButton.addEventListener('click', onSubmitNewIngred);
}

function onEffectFormChange(e) {
    let ingred = e.target.value;
    let effect = e.target.parentElement.firstChild.innerText;
    alchemy.connect('ingred', ingred, 'effect', effect)
    update(effect, ingred);
}

const removeIEPair = (x, y) => {
    [ingred, effect] = x in alchemy.ingreds ? [x, y] : [y, x]
    alchemy.ingreds[ingred].effects = alchemy.ingreds[ingred].effects.filter(i => i != effect)
    effectsToIngreds[effect] = effectsToIngreds[effect].filter(i => i != ingred)
    update(ingred, effect)
}

function onIngredFormChange(e) {
    let effect = e.target.value;
    let ingred = e.target.dataset.ingreds;
    if (!(effect in effectsToIngreds)) {
        e.target.value = '';
        e.target.focus();
        return;
    }
    alchemy.connect('effect', effect, 'ingred', ingred)
    update(effect, ingred);
    setTimeout(() => {
        ingredsToEffectsForm.querySelector(`div[data-ingreds="${ingred}"] input`).focus();
    }, 100);
}

function onEffectsJSONFormSubmit(e) {
    e.preventDefault()
    let old = effectsToIngreds;
    effectsToIngreds = JSON.parse(effectsJSONForm.querySelector('textarea').value)
    ingredsToEffects = flipStringListDict(effectsToIngreds)
    Object.keys(ingredsToEffects).filter(i => !(i in old)).forEach(i => {
        sortedIngredients = insertSorted(sortedIngredients, i)
        insertNewIngredient(i)
    })
    Object.keys(effectsToIngreds).forEach(updateEffect)
    Object.keys(ingredsToEffects).forEach(updateIngred)
    ingredsDataList.innerHTML = sortedIngredients.map(optionize).join('');
    update()
}

function onIngredsJSONFormSubmit(e) {
    e.preventDefault()
    let old = ingredsToEffects;
    ingredsToEffects = JSON.parse(ingredsJSONForm.querySelector('textarea').value)
    effectsToIngreds = flipStringListDict(ingredsToEffects)
    alchemy.update({'ingreds': {'effects': ingredsToEffects}})
    Object.keys(ingredsToEffects).filter(i => !(i in old)).forEach(i => {
        sortedIngredients = insertSorted(sortedIngredients, i)
        insertNewIngredient(i)
    })
    Object.keys(effectsToIngreds).forEach(updateEffect)
    Object.keys(ingredsToEffects).forEach(updateIngred)
    update()
}

function deleteIngred(ingred) {
    if (!confirm(`Delete ${ingred}?`)) return;
    Object.entries(effectsToIngreds).forEach(([effect, ingreds]) => {
        if (ingreds) {
            let index = ingreds.indexOf(ingred)
            if (index != -1) {
                effectsToIngreds[effect].pop(index);
                updateEffect(effect);
            }
        }
    }, effectsToIngreds);
    update()
    delete alchemy.ingreds[ingred].effects;
    ingredsToEffectsForm.querySelector(`div[data-ingreds="${ingred}"]`).remove()
    sortedIngredients.pop(sortedIngredients.indexOf(ingred))
}

function ensureStrListObj(potentialDict, keys=[]) {
    if (!potentialDict) {
        potentialDict = keys.reduce((acc, effect) => {
            acc[effect] = [];
            return acc;
        }, {});
    }
    return Object.entries(potentialDict).sort().reduce((d, [k, vs]) => {
        d[k] = vs;
        return d;
    }, {})
}
