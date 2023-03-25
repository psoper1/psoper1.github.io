import ProfileWrapper from "./ProfileWrapper";
import SocialIcons from './SocialIcons'

function MainContainer() {
    return (
        <>
            <div id="main-container" className="container contact-card">
            <ProfileWrapper />
            <SocialIcons />
            </div>
        </>
    )
}

export default MainContainer;