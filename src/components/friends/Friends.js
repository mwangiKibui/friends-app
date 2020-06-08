//React
import React,{useState} from 'react';

//css
import './Friends.css';

const Friends = () => {
    const [_friends]  = useState([
        {name:'Simon Njunu',age:`${22} years old`,profile:'/static/images/symo.webp',career:'Software developer.'},
        {name:'David Njuguna',age:`${22} years old`,profile:'/static/images/dav.webp',career:'Software developer'},
        {name:'Lydia Wambui',age:`${22} years old`,profile:'/static/images/wambui.webp',career:'Software developer'}
    ]);
    return (
        <section className="friends">
            <h4 className="friends-heading">Here My top friends.</h4>
            {
                _friends.map((friend,i) => (
                    <div className="friend" key={i}>
                        <div className="friend-profile-img-container">
                        <img src={friend.profile} className="friend-profile-img" alt="loading..." />
                        </div>
                        <div className="friend-details">
                        <h5 className="friend-details-name">Name: {friend.name}</h5>
                        <h5 className="friend-details-career">Career: {friend.career}.</h5>
                        <p className="friend-details-age">Age: {friend.age}.</p>
                        <p className="friend-details-bio">{friend.bio}.</p>
                        </div>                        
                    </div>
                ))
            }
        </section>
    )
};


export default Friends;