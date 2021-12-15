import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import './App.css'
import {Message} from "./components/Types";
import * as React from "react";
import {useState} from "react";

const initialState: Message[] = [
]

const App: React.FC = () => {
    const [messages, setMessages] = useState(initialState)

    return (
        <div>
            <MessageList messages={messages} setMessages={setMessages} />
            <MessageInput messages={messages} setMessages={setMessages} />
        </div>
    )
}

export default App