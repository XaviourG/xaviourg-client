import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const ResumePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/connect')
    }, [navigate]);

    return <>Coming Soon!</>
}

export default ResumePage