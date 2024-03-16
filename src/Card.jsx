import profilePic from './assets/Reyna.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Reyna</h2>
            <p>reyna@gmail.com</p>
        </div>

    );

}

export default Card