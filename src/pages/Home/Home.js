import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Button from '../../components/micro/Button/Button'


function Home(props) {

    return(
        <>
        <div>Home</div>
        <Banners/>
        <Button label="Fazer Login" onclick="null" class="conversao"/>
        </>
    )
}

export default Home