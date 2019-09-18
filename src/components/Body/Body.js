import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import CallsPage from '../Calls/CallsPage';
import EventsPage from '../Events/EventsPage';
import SupportPage from '../Support/SupportPage';
import UsersPage from '../Users/Users';

class Body extends React.Component{
    
    body(){
        switch(this.state.selected) {
          case 'dash':
            return <Dashboard />;
          case 'calls':
            return <CallsPage />;
          case 'events':
            return <EventsPage />;
          case 'users':
            return <UsersPage />;
          case 'support':
            return <SupportPage />;
          default:
            return null;
        }
    }



    render(){
        return(
            <div>
                {this.body}
            </div>
            
        );
    }

}

export default Body;