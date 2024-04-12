import React, {useState, useEffect} from 'react';
import './Contacts.css';

const Contacts = () => {

    const [dataFromApi, setDataFromApi] = useState(null);

    const[isLoaded, setIsLoaded] = useState(false);

    const [userName, setUserName] = useState('');

    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        console.log(isLoaded);
    }, [isLoaded]);

    const fetchData = (data) => {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: JSON.stringify({
                    title: data,
                    body: "body",
                }),
        }).then((data) => data.json())
        .then((res) => {
            setDataFromApi(res.id);
            setIsLoaded(true);
        });
    };

    const onChangeOurInput = (e) => {
        if(e.target.value.length > 3) {
            setUserName(e.target.value);
            fetchData(e.target.value);
        }
    };

    const deletUser = (userNameLocal) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromApi}`, {
            method: "DELETE",
        }).then(() => setIsDeleted(true));
    }

    return (
        <div className='contacts-page-container'>
            <p className='contacts-page-container__head-text'>
                Контакты
            </p>
            <div>
                <p>Введите ваши данные: </p>
                <input type="text" onChange={(e) => onChangeOurInput(e)}></input>
            </div>
            <div>
                {isLoaded ? <p>Ваш айди: </p> : <p>Ваш айди ещё не загружен</p>}
                {isLoaded && <p>айди - {dataFromApi}</p>}
            </div>
            {isLoaded && (
            <div>
                <button onClick={(() => deletUser())}>
                    {isDeleted 
                    ? "Пользователь удален" 
                    : `Удалить пользователя - ${userName}`} 
                </button>
            </div>
            )}
        </div>
    );
};

export default Contacts;