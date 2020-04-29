/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const getCurrentInfo = async (key,channelId,setState) => {
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${key}`);
        const data = await response.json();
        setState(data.items[0]);
    } catch (err){
        setState('Uppps! Coś poszło nie tak :( ');
    }
    
};