import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { createBench } from "../../store/benches";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input, TextArea } from "../Forms";

export default function BenchForm() {
    const history = useHistory();
    // const location = useLocation();
    const currentUser = useSelector(state => state.session.user);

    const [title, onTitleChange] = useInput('');
    const [price, onPriceChange] = useInput(50);
    const [description, onDescriptionChange] = useInput('');
    const [seating, onSeatingChange] = useInput(2);
    const [lat, onLatChange] = useInput(0);
    const [lng, onLngChange] = useInput(0);
    
    const [errors, onSubmit] = useSubmit({
        createAction: () => {
            const formData = { title, price, description, seating, lat, lng };
            return createBench(formData);
        },

        onSuccess: () => history.push("/")
    });

    if (!currentUser) return history.push("/");

    // const searchParams = new URLSearchParams(location.search);
    // const lat = searchParams.get('lat');
    // const lng = searchParams.get('lng');
    
    return (
        <form onSubmit={onSubmit}>
            <FormErrors errors={errors} />
            
            <Input
                label="Title: "
                value={title}
                onChange={onTitleChange}
                placeholder="Title"
                required
            />

            <Input
                label="Price: "
                type="number"
                value={price}
                onChange={onPriceChange}
                placeholder="Price"
                required
            />

            <TextArea
                label="Description: "
                value={description}
                onChange={onDescriptionChange}
                placeholder="Description"
                required
            />

            <Input
                label="Seating: "
                type="number"
                value={seating}
                onChange={onSeatingChange}
                placeholder="Seating"
                required
            />

            <Input
                label="Latitude: "
                type="number"
                value={lat}
                onChange={onLatChange}
                placeholder="Latitude"
                required
            />

            <Input
                label="Longitude: "
                type="number"
                value={lng}
                onChange={onLngChange}
                placeholder="Longitude"
                required
            />

            <button>Create Bench</button>
        </form>
    )
}