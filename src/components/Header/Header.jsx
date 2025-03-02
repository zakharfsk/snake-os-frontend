import {useState,} from 'react';
import iconProfile from '../../assets/profile_icon.svg'
import iconSettings from '../../assets/settings_icon.svg'
import {Popover} from "@mui/material";
import AccountSettings from "../Settings/AccountSettings";
import Settings from "../Settings/Settings";

const Header = () => {
    const [accountSettingsEl, setAccountSettingsEl] = useState(null);
    const [settingsEl, setSettingsEl] = useState(null);

    const handleClickAccountSettings = (event) => setAccountSettingsEl(event.currentTarget);
    const handleCloseAccountSettings = () => setAccountSettingsEl(null);

    const handleClickSettings = (event) => setSettingsEl(event.currentTarget);
    const handleCloseSettings = () => setSettingsEl(null);

    const openAccountSettings = Boolean(accountSettingsEl);
    const openSettings = Boolean(settingsEl);

    const accountSettingsId = openAccountSettings ? 'account-settings-popover' : undefined;
    const settingsId = openSettings ? 'settings-popover' : undefined;

    return (
        <div className="flex items-center justify-between px-14 py-3 bg-black/30">
            {/* Ліва частина з іконками */}
            <div className="flex items-center space-x-6 start-12">
                <div className="flex items-center space-x-6">
                    <button aria-describedby={accountSettingsId} onClick={handleClickAccountSettings}>
                        <img src={iconProfile} alt="iconProfile" width="13" height="14"/>
                    </button>
                    <Popover
                        id={accountSettingsId}
                        open={openAccountSettings}
                        anchorEl={accountSettingsEl}
                        onClose={handleCloseAccountSettings}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <AccountSettings/>
                    </Popover>
                </div>
                <div className="flex items-center space-x-6">
                    <button aria-describedby={settingsId} onClick={handleClickSettings}>
                        <img src={iconSettings} alt="iconSettings" width="13" height="14"/>
                    </button>
                    <Popover
                        id={settingsId}
                        open={openSettings}
                        anchorEl={settingsEl}
                        onClose={handleCloseSettings}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Settings/>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default Header;
