const Exercise4 = (props) => {
    

    const sendRequest = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({  
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27})
        }

        try {
            const res = await fetch('https://webhook.site/01500c3a-f55d-4385-8ba8-c98876d7776f', options);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    
    return(
        <>
        <button onClick={()=>sendRequest()}>Press me to post some data</button>
        </>
    )
}

export default Exercise4;