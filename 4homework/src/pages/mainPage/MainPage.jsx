import {useState, useEffect} from "react";


function MainPage({user}) {

    const [state, setState] = useState({name: '', surname: ''})

    useEffect(() => {
        setState({ name: user.name, surname: user.surname });
    }, [user]);

    return (
        <>
            <h2>
                Добро пожаловать {state.name} {state.surname}, мы тебя ждали
            </h2>
        </>
    );
}

export default MainPage;