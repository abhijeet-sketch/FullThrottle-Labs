import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';
import moment from 'moment';

class MyCalendar extends Component {
    state = {
        update:true,
        startTime:"",
        endTime:"",
        date: new Date(),
        formatedDate:moment(new Date()).format("MMM D YYYY")
      }


    onChange = async date => {
        var formatedDate = (moment(date).format("MMM D YYYY"));
        
        var startTime = "";
        var endTime = "";
        this.props.activity.forEach(element => {
            var date = element.start_time.slice(0, element.start_time.lastIndexOf(' '));
            if(formatedDate == date){
                startTime = element.start_time.slice(element.start_time.lastIndexOf(' '));
                endTime = element.end_time.slice(element.end_time.lastIndexOf(' '));
            }
           });
        this.setState({
            date:date, formatedDate:formatedDate,
            startTime:startTime,
            endTime:endTime,
            update:false
        });
    }
    render() {
        var activity = <p className="user-activity">No Activity</p>;
        if(!this.props.displayModal && this.state.update){this.onChange(new Date())}
        if(this.state.startTime){
        activity = <p className="user-activity">Activity Period From {this.state.startTime} To {this.state.endTime}</p>
        }      
        return (
            <div>
            <Calendar className="my-calendar"
            onChange={this.onChange}
            />
            {activity}
            
        </div>
        );
    }
}

export default MyCalendar;