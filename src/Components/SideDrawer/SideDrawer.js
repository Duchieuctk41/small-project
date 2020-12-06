import React from 'react';
import classes from './SideDrawer.css';
import Aux from '../../hoc/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    let attachmentClass = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachmentClass = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachmentClass.join(' ')}>
                <nav>
                    ...
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
