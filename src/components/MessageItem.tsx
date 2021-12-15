import * as React from 'react';
import { Message } from './Types'

type Props = {
    message: Message
}

const MessageItem: React.FC<Props> = ({ message }) => {
    return (
        <li>
            <label>
                <span>{ message.title }</span>
            </label>
        </li>
    )
}

export default MessageItem