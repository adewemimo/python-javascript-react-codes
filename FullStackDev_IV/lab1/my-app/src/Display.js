import React from 'react';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

const  Display = () => {
    let likeButtonContainer = []
    for (let i = 0; i < 10; i++) {likeButtonContainer.push(<LikeButton id={i} key={i}/>)};
    return <> <Greeter /> {likeButtonContainer} </>    
}
 
export default Display;