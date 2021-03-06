import React from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../reducer/users';
import './Profile.css';

class Profile extends React.Component {

    componentDidMount(){
        this.props.getUserInfo();
    }


    render(){
        console.log(this.props.picture)
        return(
            <div className="pro-container">
                <img className="profile-img" src={this.props.picture} alt="profile"/>
                <div className="name">{this.props.name}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        picture: state.user.picture,
        name: state.user.name,
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);