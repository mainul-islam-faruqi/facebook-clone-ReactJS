import React from 'react';
import "./Feed.css"
import StoryReal from './StoryReal';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReal />
            <MessageSender />
            <Post 
                profilePic="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4"
                message="Wow this work and it is first message" 
                timestamp="timestamp"
                username="Mainul Islam Faruqi"
                image="https://www.appventurez.com/blog/wp-content/uploads/2019/05/image11.png"
                />
            <Post
            profilePic="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4"
            message="Wow this work and it is Second message" 
            timestamp="timestamp"
            username="Mainul Islam Faruqi"
            image="https://www.tco-team.com/blog/wp-content/uploads/2019/01/the-most-popular-programming-languages-in-2018.jpg"
            />
            
            <Post
            profilePic="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4"
            message="   Wow this work and it is Third message" 
            timestamp="timestamp"
            username="Mainul Islam Faruqi"
            image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post
            profilePic="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4"
            message="Wow this work and it is Forth message" 
            timestamp="timestamp"
            username="Mainul Islam Faruqi"
            image="https://images.unsplash.com/photo-1516918656725-e9b3ae9ee7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            
            <Post
            profilePic="https://avatars2.githubusercontent.com/u/53335400?s=460&u=66cb296ad68ebb5d86c162a6b5aece93977865fd&v=4"
            message=" Happy Hacking!" 
            timestamp="timestamp"
            username="Mainul Islam Faruqi"
            image="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
            />

        </div>
    );
};

export default Feed;