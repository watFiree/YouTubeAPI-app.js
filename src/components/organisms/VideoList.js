import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {Circular} from 'styled-loaders-react'
import Video from '../molecules/Video';
import Title from '../atoms/Title';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

const LoadingWrapper = styled(Wrapper)`
    width:100%;
    height:100vh;
`;

const VideoList = ({whom,videos}) => {
    return(
        <>
            <Title size='xl'>Najnowsze filmy {whom}</Title>
            {videos.length !== 0 && <Wrapper>
                {videos.map(({snippet, contentDetails}) => <Video
                    key={contentDetails.upload.videoId}
                    videoId={contentDetails.upload.videoId}
                    src={snippet.thumbnails.maxres.url}
                >
                    {snippet.title}
                    </Video>)
                }</Wrapper>}
                {videos.length === 0 &&<LoadingWrapper><Circular/></LoadingWrapper>}
        </>
    )
};

VideoList.propTypes = {
    whom : PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    videos: PropTypes.array.isRequired
}
export default VideoList;