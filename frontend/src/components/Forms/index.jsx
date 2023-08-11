export function Input({ label, type="text", ...inputProps }) {
    return (
        <label className="input">{label}
            <input {...inputProps} />
        </label>
    );
}

export function TextArea({ label, ...textareaProps }) {
    return (
        <label className="textarea">{label}
            <textarea {...textareaProps} />
        </label>
    );
}

export function FormErrors({ errors }) {
    if (!errors || !errors.length) return null;

    return (
        <ul className="form-errors">
            {errors.map((error, i) => (
                <li key={i}>{error}</li>
            ))}
        </ul>
    );
}