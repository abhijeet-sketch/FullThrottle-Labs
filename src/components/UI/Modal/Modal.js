import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../containers/Aux';
import Backdrop from '../Backdrop/Backdrop';
import MyCalendar from '../../MyCalendar';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show ||nextProps.children !== this.props.children;
    }
    
    render() {
        if(this.props.show){
            var show = <MyCalendar activity={this.props.activity}/>
        }
        return (
            <Aux>
            <Backdrop show = {this.props.show} clicked ={this.props.modalClosed}/>
            <div className="Modal" style = {{
                transform: this.props.show ? 'translateY(0)' :'translateY(-100vh)',
                opacity: this.props.show ? '1':'0'
            }}>
                {show}
            </div>
        </Aux>
        );
    }
}

export default Modal;