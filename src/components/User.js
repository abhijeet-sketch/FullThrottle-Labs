import React, { Component } from 'react';
import Data from '../data.json';
import Card from '../containers/Card';
import './User.css';
import Aux from '../containers/Aux';
import Modal from './UI/Modal/Modal';

class User extends Component {
    state= {
        displayModal:false,
        activity: []
    }

    modalCancelHandler = () => {
        this.setState({displayModal: false,});
    }
    modalOpenHandler = (activity) => {

        this.setState({
            displayModal:true,
            activity:activity
        });
    }

    render() {
        return (
        <Aux>
            <h1 className="main-heading">Click To View Members Activity Periods</h1>
            <div className="user-data">
                {Data.members.map((data, index) => {
                    return(
                        <Card activity={data.activity_periods} cardClicked={() => this.modalOpenHandler(data.activity_periods)} key={data.id} data={data} />
                    );
                })}
            </div>
            <Modal activity={this.state.activity} show={this.state.displayModal} modalClosed = {this.modalCancelHandler}>
            </Modal>
        </Aux>
        );
    }
}

export default User;