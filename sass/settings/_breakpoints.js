let r_xs= 640;
let r_s= 768;
let r_m= 1024;
let r_l= 1200;
let r_xl= 1480;
let r_xxl= 1900;
// let retina = `(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)`;

export default [
    {name:'xs', query: `(min-width: ${r_xs}px`},
    {name:'s', query: `(min-width: ${r_s}px`},
    {name:'m', query: `(min-width: ${r_m}px`},
    {name:'l', query: `(min-width: ${r_l}px`},
    {name:'xl', query: `(min-width: ${r_xl}px`},
    {name:'xxl', query: `(min-width: ${r_xxl}px`},
    // {name:'retina', query: retina}
];
