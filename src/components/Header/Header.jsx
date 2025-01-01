import iconProfile from '../../assets/profile_icon.svg'
import iconSettings from '../../assets/settings_icon.svg'

const Header = () => {
    return (
        <div className="flex items-center justify-between px-14 py-3 bg-black/30">
            <div className="flex items-center space-x-6 start-12">
                <img src={iconProfile} alt="iconProfile" width={"13px"} height={"14"}/>
                <img src={iconSettings} alt="iconSettings" width={"13px"} height={"14"}/>
            </div>
        </div>
    )
}

export default Header;