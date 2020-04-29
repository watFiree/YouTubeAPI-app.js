/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const getMainVideos = async (key,channelId,state,setState) => {
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=1&key=${key}`);
        const data = await response.json();
        // eslint-disable-next-line no-shadow
        setState( state => [...state, ...data.items.filter(item => item.snippet.type === "upload")]);
    } catch (err){
       setState('Uppps! Coś poszło nie tak :( ');
    }
    
};

