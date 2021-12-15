import * as React from 'react';
import { Message } from './Types'
import MessageItem from "./MessageItem";

type Props = {
    messages: Message[]
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const MessageList: React.FC<Props> = ({ messages, setMessages }) => {

    return (
        <div className="inner">
            {
                messages.length <= 0 ? 'メッセージはありません。' :
                    <ul className="message-list">
                        { messages.map( message => (
                            <MessageItem
                                key={message.id}
                                message={message}
                            />
                        )) }
                    </ul>
            }
        </div>
    )
}

export default MessageList