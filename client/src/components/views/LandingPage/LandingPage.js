import React, {useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    return (
        <div>
            <NavBar />
            LandingPage
        </div>
    )
}

export default LandingPage
