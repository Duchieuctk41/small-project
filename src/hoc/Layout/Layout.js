import React, { Component } from 'react';
import Aux from '../Aux';

import Toolbar from '../../UI/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';

class Layout extends Component {
   state={
       showSideDraw: false
   }

   closedSideDrawHandler = () => {
       this.setState({showSideDraw: false});
   };

   clickedSideDrawToggle = () => {
       this.setState({showSideDraw: !this.state.showSideDraw});
   }
    render () {

        return (
            <Aux>
                <Toolbar clickedSideToggle={this.clickedSideDrawToggle} />
                <SideDrawer 
                    open={this.state.showSideDraw}
                    closedBackdrop={this.closedSideDrawHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }   
}

export default Layout;
