import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioHomePage from '../components/PortfolioHomePage';
import ContactPage from '../components/ContactPage';
import ResumePage from '../components/ResumePage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="main-container">
            <Header />
            <Switch>
                <Route path="/" component={PortfolioHomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/resume" component={ResumePage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export {AppRouter as default};