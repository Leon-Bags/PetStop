import ClientPost from "../components/ClientPost";
import GuestPost from "../components/GuestPost";
import { useOutletContext } from "react-router-dom";

const PostList = () => {
    const [isLoggedIn] = useOutletContext();
    return isLoggedIn ? <ClientPost /> : <GuestPost />;
};

export default PostList;