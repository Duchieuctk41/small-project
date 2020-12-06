import React, { Component } from 'react';
import Aux from '../Aux';

import Toolbar from '../../UI/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    clickedSideDrawerToggle = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer});
    }

    render () {

        return (
            <Aux>
                <Toolbar clickedSideToggle={this.clickedSideDrawerToggle} />
                <SideDrawer open={this.state.showSideDrawer} 
                    closed={this.showSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }   
}

export default Layout;
