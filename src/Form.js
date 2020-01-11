import React, {useState} from 'react';



const Form = () => {

   

    const send = (e) => {

        e.preventDefault();

        const state = {
            username: e.target.username.value,
            useremail: e.target.username.value,
            userpassword: e.target.username.value
        };
        
        fetch('https://google.com', {
            method: 'POST',
            body: JSON.stringify(state)
        })
    }

    return(
        <form onSubmit={changeInput}>
            <input name="username" type="text" placeholder="enter name" />
            <input name="useremail" type="email" placeholder="enter email" />
            <input name="userpassword" type="password" placeholder="enter password" />
            <button>Send form</button>
        </form>
    )
}

export default Form;