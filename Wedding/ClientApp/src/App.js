import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Information } from './components/Information';
import { Location } from './components/Location';
import { Osa } from './components/Osa';
import { Toast } from './components/Toast';
import { withNamespaces } from 'react-i18next';
import { translate, Trans } from 'react-i18next'
import i18n from './i18n';
import i18next from 'i18next';
import './custom.css'

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}

class App extends Component {
    static displayName = App.name;
    
    //<h1>ä</h1>
    //<h1>{i18n.t('home.title')}</h1>
    //<button onClick={() => i18n.changeLanguage('sv')}>sv</button>
    //<button onClick={() => i18n.changeLanguage('en')}>en</button>

    render() {
        const { t, i18n } = this.props;
    return (
        <Layout>
            
        <Route exact path='/' component={Home} />
            <Route path='/location' component={Location} />
            <Route path='/information' component={Information} />
        <Route path='/osa' component={Osa} />
        <Route path='/toast' component={Toast} />
      </Layout>
    );
  }

}
export default translate('common')(App);
//export default withNamespaces()(App);
