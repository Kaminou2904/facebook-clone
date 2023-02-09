import AdChoices from './facebookAdChoices.png'

function Footer(){
    return(
        <div className="mainFooter">
             <div className="weird-languages">
                <div className="languages">
                    <p className="lang">English (UK)</p>
                    <p className="lang">मराठी</p>
                    <p className="lang">हिन्दी</p>
                    <p className="lang">اردو</p>
                    <p className="lang">ગુજરાતી</p>
                    <p className="lang">ಕನ್ನಡ</p>
                    <p className="lang">ਪੰਜਾਬੀ</p>
                    <p className="lang">தமிழ்</p>
                    <p className="lang">বাংলা</p>
                    <p className="lang">తెలుగు</p>
                    <p className="lang">മലയാളം</p>
                    <i className="fa-solid fa-plus plusIcon"></i>
                </div>
             </div>
             <hr className="line2"/>
             <div className="extraInfo">
                <p className="extraText">Sign up</p>
                <p className="extraText">Log in</p>
                <p className="extraText">Messenger</p>
                <p className="extraText">Facebook Lite</p>
                <p className="extraText">Watch</p>
                <p className="extraText">Places</p>
                <p className="extraText">Games</p>
                <p className="extraText">Marketplace</p>
                <p className="extraText">Meta Play</p>
                <p className="extraText">Oculus</p>
                <p className="extraText">Portal</p>
                <p className="extraText">Instagram</p>
                <p className="extraText">Bulletin</p>
                <p className="extraText">Fundraisers</p>
                <p className="extraText">Services</p>
                <p className="extraText">Voting Information centre</p>
                <p className="extraText">Privacy Policy</p>
                <p className="extraText">Privacy Centre</p>
                <p className="extraText">Groups</p>
                <p className="extraText">About</p>
                <p className="extraText">Create ad</p>
                <p className="extraText">Create Page</p>
                <p className="extraText">Developers</p>
                <p className="extraText">Careers</p>
                <p className="extraText">Cookies</p>
                <p className="extraText">AdChoices <span><img src={AdChoices} alt="Ad choices" style={{width: "12px", position: "relative", top: "2px"}}/></span></p>
                <p className="extraText">Terms</p>
                <p className="extraText">Help</p>
                <p className="extraText">Contact uploading and non-users</p>
             </div>
             <p className='meta'>Meta &#169; 2023</p>
        </div>
    )
}

export default Footer;