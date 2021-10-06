import React from 'react'
import Layout from '../../component/layout';

const Home = () => {
    return (
        <div>
            <Layout/>
            <div style={{margin:'5rem',background:'#afd3ed' }} className=" p-5 rounded-lg m-3 text-center">
                <h1>Welcome To Admin Dashboard</h1>
            </div>
            
        </div>
    )
}

export default Home