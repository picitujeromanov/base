/* eslint-disable */
import settings from '../sass/settings/_breakpoints';

const mediaquery = store => {

    let matchCurrent = () => {
        let value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        return settings.find(media => media.name === value) || {};
    };

    if(window.matchMedia)
    {
        settings.forEach(media => {
            let md = window.matchMedia(media.query);
            console.log(media.query);
            md.addListener(function (mql) {

                console.log(mql);

                if(mql.type === 'change') {
                    store.commit('setBreakpoint', matchCurrent().name || 'default');
                }
            });
            if(md.matches) {
                store.commit('setBreakpoint', media.name);
            }
        });
    }
};

export default mediaquery;