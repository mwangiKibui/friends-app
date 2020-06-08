//React
import React,{useState} from 'react';

//css
import './Person.css';

const Person = () => {
    const [personalData] = useState({
        name:'Kennedy Mwangi',
        career:'Software Developer',
        age:`${22} years old`,
        bio:'I can and i shall',
        img:'/static/images/kenny.webp'
    })
    return (
        <section className="person">
            <div className="person-card">
                <div className="person-card-img-container">
                <img src={personalData.img} className="person-card-img" alt="" />
                </div>
                <div className="person-card-details">
                <h5 className="person-card-heading">Name: {personalData.name}</h5>
                <h5 className="person-card-subheading">Career: {personalData.career}.</h5>
                <p className="person-card-text">Age: {personalData.age}.</p>
                <p className="person-card-text">{personalData.bio}.</p>
                </div>
            </div>
        </section>
    )
};

export default Person;