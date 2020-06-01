/* eslint-disable react/prop-types */
import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Circular} from 'styled-loaders-react'
import ProfileImage from '../components/atoms/ProfileImage';
import ProfileInfo from '../components/atoms/ProfileInfo';
import VideoList from '../components/organisms/VideoList';
import {getCurrentInfo} from '../helpers/getCurrentInfo';
import {getCurrentVideos} from '../helpers/getCurrentVideos';
import {channelsId} from '../helpers/data';
import {theme} from '../themes/mainTheme'

const Wrapper = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:50px;
    margin-bottom:70px;
`;

const DetailsView = ({match}) => {
    const [info,setInfo] = useState([]);
    const [videos,setVideos] = useState([]);

    const currentPerson = match.url.slice(1).toLowerCase();
   

    useEffect( ()=> {
         getCurrentInfo(process.env.REACT_APP_API_KEY,channelsId[currentPerson],setInfo);
         getCurrentVideos(process.env.REACT_APP_API_KEY,channelsId[currentPerson],setVideos);
    },[currentPerson])

    return(
        <>
            <Wrapper>
                {info.length !== 0 && <><ProfileImage alt={currentPerson} src={info.snippet.thumbnails.high.url} />
                <ProfileInfo name={theme.fullNames[currentPerson]} subs={info.statistics.subscriberCount} /> </>}
                {info.length === 0 && <Circular/>}
           </Wrapper>
         
            <VideoList videos={videos} whom={theme.whom[currentPerson]} />
        </>
)};

export default DetailsView;