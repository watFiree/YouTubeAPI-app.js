import React,{useEffect, useState, useContext} from 'react';
import GallerySlider from '../components/molecules/GallerySlider'
import VideoList from '../components/organisms/VideoList'
import {getMainVideos} from '../helpers/getMainVideos';
import { names, channelsId} from '../helpers/data';
import MyContext from '../context/index'
import {theme} from '../themes/mainTheme'

const MainView = () => {

    const [videos,setVideos] = useState([]);
    const {whom} = theme;
    useEffect( ()=> {
        names.forEach(name => 
            getMainVideos(process.env.REACT_APP_API_KEY,channelsId[name],videos,setVideos) );
            // eslint-disable-next-line
    },[])

    const {setNewestVideo}= useContext(MyContext);

    const sortedVideos = videos.sort( (a,b) => {
        return new Date(  b.snippet.publishedAt) - new Date(  a.snippet.publishedAt)
    })
    if(sortedVideos.length >= names.length){
       setNewestVideo(whom[Object.keys(channelsId).filter( key => channelsId[key] === sortedVideos[0].snippet.channelId ? channelsId : null)[0]]);
    }

    return(
        <>
            <GallerySlider />
            <VideoList videos={sortedVideos} whom='ekipy' />
        </>
)};

export default MainView;