let r_s= 375;
let r_m= 555;
let r_l= 735;
let r_xl= 1035;
let r_xxl= 1270;
let r_xxxl= 1470;
let retina = `(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)`;

export default [
    {name:'s', query: `(min-width: ${r_s}px`},
    {name:'m', query: `(min-width: ${r_m}px`},
    {name:'l', query: `(min-width: ${r_l}px`},
    {name:'xl', query: `(min-width: ${r_xl}px`},
    {name:'xxl', query: `(min-width: ${r_xxl}px`},
    {name:'xxxl', query: `(min-width: ${r_xxxl}px`},
    {name:'retina', query: retina}
];