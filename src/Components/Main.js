import logo from './facebookLogo.svg';

function Main(){
    return(
        <div>
            <div className="main">
                <div className="mainLeft">
                    <div className='main-left-wrapper'>
                        <img src={logo} alt="facebook logo" className='logoImg'/>
                        <p className='mainText'>Facebook helps you connect and share with the people in your life.</p>
                    </div>
                </div>
                <div className="mainRight">
                    <div className="contact">
                        <input type="text" placeholder='Email address or phone number' className='inpu'/><br />
                        <input type="text" placeholder='Password' className='inpu'/><br />
                        <button className='loginBtn'>Log in</button><br />
                        <a href="https://facebook.com/support/" className='forgetLink'>Forget password?</a>
                        <hr className="line"/>
                        <button className='createBtn'>Create new account</button>
                    </div>
                    <p className='celebrity'><span className="celebritySpan">Create a Page</span> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;