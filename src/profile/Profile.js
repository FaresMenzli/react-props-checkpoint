import React from 'react' ;
import PropTypes from 'prop-types';


const Profile = (props) => {

    const handleName=(e)=>{
        alert(`M name is ${props.fullName} \n Bio : ${props.bio} \n Profession : ${props.profession}`)

    }
    return (
        <div >

            <p>{props.children}</p>
            <a href="/" onClick={handleName}> Click me</a>
            
        </div>
    )
}
Profile.defaultProps = {
    fullName:"default Name",
    bio:"default Bio",
    profession:"default profession"
}

Profile.propTypes = {
    fullName : PropTypes.string ,
    bio : PropTypes.string ,
    profession : PropTypes.string ,

} ;

export default Profile
