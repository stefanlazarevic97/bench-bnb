import { useState } from "react"
import { useDispatch } from "react-redux";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    };

    return [value, handleChange];
}

export const useSubmit = ({ createAction, onSuccess }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);

        const res = await dispatch(createAction());

        if (res.errors) {
            setErrors(res.errors);
        } else {
            onSuccess();
        }
    };

    return [errors, onSubmit];
}