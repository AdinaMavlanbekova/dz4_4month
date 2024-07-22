import MainPage from "../mainPage/MainPage";
import {useEffect, useState} from "react";
import ErrorPage from "../errorPage/ErrorPage";


const promptName = prompt('введите имя')
const promptSurname = prompt('введите фамилию')

function AskName() {

    const [user, setUser] = useState({name: '', surname: ''})

    const handlePrompt = () => {
        setUser({name: promptName , surname: promptSurname});
    }

    useEffect(() => {
            handlePrompt()
    }, [])

        return (
        <>
            {user.name === 'John' && user.surname === 'Johns'
                ? (<MainPage user={user}/>) : <ErrorPage user={user}/>}
        </>
    );
}

export default AskName;