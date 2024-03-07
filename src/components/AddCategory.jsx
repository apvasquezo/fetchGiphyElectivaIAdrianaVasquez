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
                    className='rounded'
                    type="text" 
                    placeholder='Search...' 
                    onChange={event => setValue(event.target.value)}
                    value={value}
                />
             </center></div>
            </form>
            <div className='row justify-content-center'>
                <div  style={{width: '300px'}}>   
                    { error ? <p className='alert alert-info text-center mt-2 mb-0 ' role="alert">The field cannot be empty...</p> : ""}
                </div>
            </div>
            
        </>
     );
}
 
export default AddCategory;