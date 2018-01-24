import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Page stop
import PageStop from './PageStop';

// Forms
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

// Header
import HeaderLogo from './HeaderLogo';
import HeaderSearchBlock from './HeaderSearchBlock';
import HeaderSocial from './HeaderSocial';
import HeaderSignInUpBlock from './HeaderSignInUpBlock';

// Navigation-menu
import NavigationMenu from './NavigationMenu';

// Main article
import MainArticle from './MainArticle';

// Content block
import ArticlesBlock from './ArticlesBlock';
import EventsBlock from './EventsBlock';
import SubscriptionForm from './SubscriptionForm';

// Footer
import FooterWarning from './FooterWarning';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

// Styles
import './KnFoto.css';

// Data
import mainArticle from '../json/mainArticle';
import articles from '../json/articles';
import events from '../json/events';

class KnFoto extends React.Component {
    state = {
        workMode: 'HOME'
    }

    callBackLogIn = () => {
        this.setState( {workMode: 'LOGIN'} );
    }

    callBackRegister = () => {
        this.setState( {workMode: 'REGISTER'} );
    }

    callBackStop = () => {
        this.setState( {workMode: 'STOP'} );
    }

    callBackHome = () => {
        this.setState( {workMode: 'HOME'} );
    }

    render() {
    // Render home screen
        if (this.state.workMode === 'HOME') {
            return (
                    <div className = 'wrapper'>
                        <header className = 'header-wrapper'>
                            <div className = 'header'>
                                <HeaderLogo callBackHome = {this.callBackHome}/>
                                <HeaderSearchBlock/>
                                <HeaderSocial/>
                            </div>
                            <HeaderSignInUpBlock
                                callBackLogIn = {this.callBackLogIn}
                                callBackRegister = {this.callBackRegister}/>
                        </header>
                        <NavigationMenu callBackStop = {this.callBackStop}
                            callBackHome = {this.callBackHome}/>
                        <main className = 'main-article'>
                            <MainArticle article = {mainArticle}
                                callBackStop = {this.callBackStop}/>
                        </main>
                        <div className = 'content-block'>
                            <section className = 'articles-section'>
                                <ArticlesBlock articles = {articles}
                                    callBackStop = {this.callBackStop}/>
                            </section>
                            <section className = 'events-section'>
                                <EventsBlock events = {events}
                                    callBackStop = {this.callBackStop}/>
                                <SubscriptionForm/>
                            </section>
                        </div>
                        <footer className = 'footer'>
                            <FooterWarning/>
                            <FooterInfo callBackStop = {this.callBackStop}/>
                            <FooterLinks callBackStop = {this.callBackStop}/>
                            <FooterSocial/>
                        </footer>
                    </div>
                );
        }
    // Render stop screen
        if (this.state.workMode === 'STOP') {
            return (
                    <div className = 'wrapper'>
                        <header className = 'header-wrapper'>
                            <div className = 'header'>
                                <HeaderLogo callBackHome = {this.callBackHome}/>
                                <HeaderSearchBlock/>
                                <HeaderSocial/>
                            </div>
                            <HeaderSignInUpBlock
                                callBackLogIn = {this.callBackLogIn}
                                callBackRegister = {this.callBackRegister}/>
                        </header>
                        <NavigationMenu callBackStop = {this.callBackStop}
                            callBackHome = {this.callBackHome}/>
                        <div className = 'content-block'>
                            <PageStop/>
                        </div>
                        <footer className = 'footer'>
                            <FooterWarning callBackStop = {this.callBackStop}/>
                            <FooterInfo callBackStop = {this.callBackStop}/>
                            <FooterLinks callBackStop = {this.callBackStop}/>
                            <FooterSocial callBackStop = {this.callBackStop}/>
                        </footer>
                    </div>
                );
        }
    // Render login screen
        if (this.state.workMode === 'LOGIN') {
            return (
                    <div className = 'wrapper'>
                        <header className = 'header-wrapper'>
                            <div className = 'header'>
                                <HeaderLogo callBackHome = {this.callBackHome}/>
                                <HeaderSearchBlock/>
                                <HeaderSocial/>
                            </div>
                            <HeaderSignInUpBlock
                                callBackLogIn = {this.callBackLogIn}
                                callBackRegister = {this.callBackRegister}/>
                        </header>
                        <NavigationMenu callBackStop = {this.callBackStop}
                            callBackHome = {this.callBackHome}/>
                        <div className = 'content-block'>
                            <LoginForm/>
                        </div>
                        <footer className = 'footer'>
                            <FooterWarning callBackStop = {this.callBackStop}/>
                            <FooterInfo callBackStop = {this.callBackStop}/>
                            <FooterLinks callBackStop = {this.callBackStop}/>
                            <FooterSocial callBackStop = {this.callBackStop}/>
                        </footer>
                    </div>
                );
        }
    // Render register screen
        if (this.state.workMode === 'REGISTER') {
            return (
                    <div className = 'wrapper'>
                        <header className = 'header-wrapper'>
                            <div className = 'header'>
                                <HeaderLogo callBackHome = {this.callBackHome}/>
                                <HeaderSearchBlock/>
                                <HeaderSocial/>
                            </div>
                            <HeaderSignInUpBlock
                                callBackLogIn = {this.callBackLogIn}
                                callBackRegister = {this.callBackRegister}/>
                        </header>
                        <NavigationMenu callBackStop = {this.callBackStop}
                            callBackHome = {this.callBackHome}/>
                        <div className = 'content-block'>
                            <RegisterForm/>
                        </div>
                        <footer className = 'footer'>
                            <FooterWarning/>
                            <FooterInfo/>
                            <FooterLinks/>
                            <FooterSocial/>
                        </footer>
                    </div>
                );
        }
    }
}

export default KnFoto;
