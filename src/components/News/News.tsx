import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from 'axios';

const News = () => {

    const myID = 857468;

    const [myData, setMyData] = useState([])
    const [tasksTitle, setTasksTitle] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        axios
            .get('https://repetitora.net/api/JS/Images?page=3&count=3')
            .then(response => {
                setMyData(response.data.map((d: any) => {
                        return (
                            <img
                                style={{height: '80px', width: '80px' }}
                                src={d.original}
                                alt={'name'}
                                key={d.original}
                            />
                        )
                    })
                )
            })
    }, [])


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onClickSendHandler = () => {
        axios
            .post('https://repetitora.net/api/JS/Tasks', {
                widgetId: myID,
                title: inputValue,
            })
        setInputValue('')
    }
    const onClickDeleteHandler = (taskId: string) => {
        axios
            .delete('https://repetitora.net/api/JS/Tasks', {
                headers: {

                },
                data: {
                    widgetId: myID,
                    taskId,
                },
            })
            .then((res) => {
                console.log(res)
            })
    }

    const onClickGetHandler = () => {
        axios
            .get(`https://repetitora.net/api/JS/Tasks?widgetId=${myID}`)
            .then(response => {
                setTasksTitle(response.data.map((d: any) => {
                        return (
                            <li key={d.id} onClick={() => onClickDeleteHandler(d.id)}>{d.title}</li>
                        )
                    })
                )
            })
    }

    return (
        <div>
            News
            <div>{myData}</div>
            <div>
                <input type="text" onChange={onChangeInputHandler} value={inputValue}/>
                <button onClick={onClickSendHandler}>send task title</button>
                <div>
                    <button onClick={onClickGetHandler}>get tasks titles</button>
                    <ul>{tasksTitle}</ul>
                </div>
            </div>
        </div>
    );
};

export default News;