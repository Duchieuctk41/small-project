import React from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';

const sideDrawer = props => {
    let attachmentClass = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachmentClass = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closedBackdrop} />
            <div className={attachmentClass.join(' ')} >
                <nav>
                    ...
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
