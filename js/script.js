/****************************************************************
 * DISPLAY ICONS
****************************************************************/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];
const colors = ["#f9bc60", "#abd1c6", "#e16162"];
const container = document.querySelector(".icons");
const types = getTypes(icons);
const coloredIcons = colorIcons(icons, types, colors);

// printIcons(container, icons);
printIcons(container, coloredIcons);


/****************************************************************
 * FUNCTIONS
****************************************************************/

/** 
 * Stampare icone in html
 */
function printIcons (container, icons) {
    let html = "";
    icons.forEach((icon) => {
        const {name, prefix, family, color} = icon;
        html += 
        `<div class="icon">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="name">${name}</div>
        </div>`;
        return html;
    });
    container.innerHTML = html;
};

/** 
 * Ricavare i type delle icons
 */
function getTypes(icons) {
    const types = [];
    icons.forEach((icon) => {
        if(! types.includes(icon.type) ) {
            types.push(icon.type);
        }
    });
    return types
};

/** 
 * Colorare le icone
*/
function colorIcons(icons, types, colors) {
    const coloredIcons = icons.map((icon) => {
        const index = types.indexOf(icon.type);
        return {
            ...icon,
            color: colors[index],
        }
    });
    return coloredIcons;
};



