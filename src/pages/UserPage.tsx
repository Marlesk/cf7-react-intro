import {useParams} from "react-router";
import {useEffect} from "react";

const UserPage = () => {
    const {userId} = useParams();
    useEffect(() => {
        document.title = `CF7 User Id: ${userId}`
    }, []);
    return (
        <>
            <h1>User with id: {userId}</h1>
        </>
    )
}

export default UserPage