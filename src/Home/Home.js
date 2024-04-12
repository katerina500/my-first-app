import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    
    const [dataFromApi, setDataFromApi] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
           .then((result) => result.json())
           .then((data) => setDataFromApi(data.splice(1, 10)));
}, [] );




    return (
        <div className='home-page-container'>
            <p className='home-page-container__head-text'>
                Домашняя страница
            </p>
            <p>Элементы с сервера: </p>
            {dataFromApi.map((el, index) =>{
                return (
                    <div key={index + el.id} className='home-page-container__item-container'>
                        <h3 className='item-container__item-head'>{el.title}</h3>
                        <div className='item-container__item-body'>{el.body}</div>
                </div>
                );
            })}
        </div>
    );
};

export default Home;