import React, {useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickhandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                console.log(response.data)
                if(response.data.success) {
                    props.history.push('/login');
                } else {
                    alert('로그아웃 실패');
                }
            })
    }
    return (
        <div>
            <button onClick={onClickhandler}>
                로그아웃
            </button>
            <NavBar />
            
        </div>
    )
}

export default withRouter(LandingPage)
