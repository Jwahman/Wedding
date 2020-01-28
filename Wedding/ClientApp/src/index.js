import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import common_en from './lang/en/common.json';
import common_sv from './lang/sv/common.json';

//i18next.init({
//    interpolation: { escapeValue: false },  // React already does escaping
//});
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        sv: {
            common: common_sv
        },
    },
});

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
    <BrowserRouter basename={baseUrl}>
        
            <App />
        
        </BrowserRouter>
    </I18nextProvider>,
  rootElement);

registerServiceWorker();

