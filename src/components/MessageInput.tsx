import * as React from 'react';
import {Message} from './Types'
import {useState} from "react";

type Props = {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    messages: Message[]
}

const MessageInput: React.FC<Props> = ({ setMessages, messages }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(messages.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Message = {
            id: count,
            title: inputTitle,
        }

        setMessages([newTask, ...messages])
        setInputTitle('')

    }
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={inputTitle}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn is-primary">送信</button>
                </div>
            </div>
        </div>
    )
}

export default MessageInput