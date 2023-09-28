import { useNavigate } from "react-router-dom";

const GuestLogin = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };

    return (
        <div className="panel">
            <h1>Welcome to Stranger`s Things!</h1>
            <h2>Explore a new hobby or Sell `em!</h2>
            <button onClick={navigateLogin} className="loginButton">Log In</button>
        </div>
    )
};

export default GuestLogin;