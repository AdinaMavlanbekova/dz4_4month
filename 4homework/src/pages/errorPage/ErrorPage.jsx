import {useState, useEffect} from "react";


function ErrorPage({user}) {

    const[state, setState] = useState({ name: '', surname: '' })

    useEffect(() => {
        setState({ name: user.name, surname: user.surname });
    }, [user]);


    return (
        <div>
            <h2> Тебе сюда нельзя - {state.name} {state.surname}</h2>
        </div>
    );
}

export default ErrorPage;