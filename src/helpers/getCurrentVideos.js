/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const getCurrentVideos = async (key,channelId,setState,results=5) => {
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${results}&key=${key}`);
        const data = await response.json();
        setState(data.items.filter(item => item.snippet.type === "upload"));
    } catch (err){
        setState('Uppps! Coś poszło nie tak :( ');
    }
    
};

