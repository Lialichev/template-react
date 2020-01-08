import React, {useState, useEffect} from 'react';
import useForm from "../../../@theme/useForm";
import './example.scss';

function Example() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        if (count > 5) setCount(0);
    }, [count]);

    const {form, handleChange} = useForm({
        email: '',
    });

    return (
        <div className="example">
            {count}
            <button onClick={handleClick}>
                + 1
            </button>
            <form>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Example;