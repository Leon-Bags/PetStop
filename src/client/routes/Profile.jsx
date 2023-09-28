import { useState, useEffect } from "react";
import { userMessages } from "../API/AjaxHelper";

const Profile = () => {
    const token = localStorage.getItem('token');
    const [messageToUser, setMessageToUser] = useState([]);
    const [messageFromUser, setMessageFromUser] = useState([]);

    useEffect(() => {
        Promise.all([userMessages(token)])
            .then(([data]) => {
                setMessageFromUser(data.messages);
                let initial = [];
                const getMessagesToUser = data.posts.reduce(
                    (accumulator, currentPost) => {
                        const currentMessages = currentPost.messages.map((message) => ({
                            ...message,
                            title: currentPost.title
                        }));
                        return accumulator.concat(currentMessages);
                    },
                    initial
                );
                setMessageToUser(getMessagesToUser);
            });
    }, [token]);

    return (
        <div className="panel">
            <h3>Messages to me:</h3>
            {messageToUser?.map(({ _id, title, fromUser: { username }, content }) => (
                <div key={_id} className="posts">
                    <h2>From: {username}</h2>
                    <h4>Message: {content}</h4>
                    <h4>From post: {title}</h4>
                </div>
            ))}
            <h3>Messages from me:</h3>
            {messageFromUser?.map(({ _id, post: { title }, fromUser: { username }, content }) => (
                <div key={_id} className="posts">
                    <h2>From: {username}</h2>
                    <h4>Message: {content}</h4>
                    <h4>From post: {title}</h4>
                </div>
            ))}
        </div>
    );
};

export default Profile;