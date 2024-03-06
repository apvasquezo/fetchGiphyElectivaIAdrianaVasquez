import React, { useState } from 'react';

const AddCategory = ({ setCategory }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchGif = event => {
        event.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
    }

    return ( 
        <>
            <form onSubmit={ searchGif }>
            <div><center>
                <input 
                    className='rounded-pill'
                    type="text" 
                    placeholder='Search...' 
                    onChange={event => setValue(event.target.value)}
                    value={value}
                />
             </center></div>
            </form>
            <div className='container'>
                { error ? <p className='alert alert-info'>El campo no puede estar vacio...</p> : ""}
            </div>
            
        </>
     );
}
 
export default AddCategory;