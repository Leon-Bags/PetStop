import ClientGreeting from "../components/ClientGreeting";
import GuestGreeting from "../components/GuestGreeting";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
    const [isLoggedIn] = useOutletContext();
    return isLoggedIn ? <ClientGreeting /> : <GuestGreeting />;
};

export default HomePage;