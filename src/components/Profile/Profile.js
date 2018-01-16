import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../ducks/users';

class Profile extends Component {

    componentDidMount(){
        this.props.getUserInfo()
    }

    render(){
        console.log(this.props.picture)
        return(
            <div>
                <img className="profile-img" src={this.props.picture}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        picture: state.user.picture
    }
}

export default connect(mapStateToProps, {getUserInfo})(Profile);