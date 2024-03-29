import ProfileWrapper from "./ProfileWrapper";
import SocialIcons from './SocialIcons'

function MainContainer() {
    return (
        <>
            <div id="main-container" className="container contact-card">
            <ProfileWrapper />
            <div>
            <SocialIcons />
            </div>
            </div>
        </>
    )
}

export default MainContainer;