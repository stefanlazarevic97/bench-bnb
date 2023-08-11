import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './LoginForm.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";

export default function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, onCredentialChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    // const [errors, handleSubmit] = useSubmit({
    //     createAction: () => sessionActions.login({ credential, password }),
    //     // onSuccess
    // })
    
    const [errors, setErrors] = useState([]);
    
    if (sessionUser) return <Redirect to="/" />;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;

                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }

                if (data?.errors) {
                    setErrors(data.errors);
                } else if (data) {
                    setErrors([data]);
                } else {
                    setErrors([res.statusText]);
                }
            });
    }

    return (
        <>
            <h1>Log In</h1>
            
            <form onSubmit={handleSubmit}>
                <FormErrors errors={errors} />
                
                <Input
                    label="Username or Email: "
                    value={credential}
                    onChange={onCredentialChange}
                    required
                />

                <Input
                    label="Password: "
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    required
                />

                <button>Log In</button>
            </form>
        </>
    );
}