import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from '@mui/material/Button';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton className="menuIcon">
                    <MenuIcon />
                </IconButton>   
                <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
            </div>
            <div className='header__middle'>
                <input className="searchInput" placeholder="Search" type="text" />
                <Button className="searchButton" size='large'><SearchOutlinedIcon sx={{ color: 'black' }}/></Button>
                <IconButton>
                    <MicOutlinedIcon sx={{ color: 'black' }}/>
                </IconButton>
            </div>
            <div className='header__right'>
                <VideoCallOutlinedIcon className="createIcon" size='large' />
                <AppsOutlinedIcon className="appsIcon" size='large' />
                <NotificationsNoneOutlinedIcon className="notificationIcon" size='large' />
                <AccountCircleOutlinedIcon className="avatarIcon" size='large' />
            </div>
        </div>
    )
}