import './App.css';

function about(){
    return(
        <div className='full-page'>
        <h1 className='title'>About me</h1>
        <div className="about-me">
        <ul>
            <li>Location: Berkeley CA</li>
            <li>Web:</li>
            <li>Degree: B.S in Electrical Engineering And Computer Science </li>
            <li>Email:</li>
            <li>Looking for: SWE, MLE </li>
        </ul>
        <p className="text-container">I am currently an undergraduate student at the University of California, Berkeley pursuing a BS in Electrical Engineering and Computer Science. Outside of school, I enjoy playing guitar and swimming.</p>

        <h1></h1>
        </div>
        </div>
    );
}

export default about;