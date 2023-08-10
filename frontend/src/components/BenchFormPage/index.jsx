import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { createBench } from "../../store/benches";

export default function BenchForm() {
    const dispatch = useDispatch();
    // const location = useLocation();
    const currentUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(50);
    const [description, setDescription] = useState('');
    const [seating, setSeating] = useState(2);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    
    const [errors, setErrors] = useState([]);
    
    if (!currentUser) return <Redirect to="/" />;

    // const searchParams = new URLSearchParams(location.search);
    // const lat = searchParams.get('lat');
    // const lng = searchParams.get('lng');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {title, price, description, seating, lat, lng};

        const res = await dispatch(createBench(formData));

        if (res.errors) {
            setErrors(res.errors);
        } else {
            <Redirect to="/" />;
        }

        setTitle('');
        setPrice(50);
        setDescription('');
        setSeating(2);
        setLat(0);
        setLng(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title: 
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </label>

            <label>Price:
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
            </label>

            <label>Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
            </label>

            <label>Seating:
                <input
                    type="number"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    placeholder="Seating"
                />
            </label>

            <label>Latitude:
                <input
                    type="number"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    placeholder="Latitude"
                />
            </label>            
            
            <label>Longitude:
                <input
                    type="number"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    placeholder="Longitude"
                />
            </label>

            <button>Create Bench</button>

            <ul>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        </form>
    )
}