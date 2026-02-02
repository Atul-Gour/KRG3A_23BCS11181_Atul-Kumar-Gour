import { useAuth } from "src/context/authcontext.js";
import {useNavigate} from "react-router-dom";

const Login = () => useAuth();

const {setIsAuthenticated} = useAuth;
const navigate = useNavigate();

const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
}

return (
    <>
    <h2>Login</h2>
    <button onClick={handleLogin}> Login to Ecotrack </button>
    </>
)