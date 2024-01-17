import { useState } from 'react';

export default function FeedbackForm (){
    const [message , setMessage] = useState('');
    const [isSent , setIsSent ] = useState(false);

    if (isSent) {
        return <h1>Thank You!</h1>;
    } else {
        return (
        <div>
            <form 
            onSubmit={e => {
            e.preventDefault(); 
            alert(`Sending: "${message}"`);
            setIsSent(true);
            }}>

            <textarea 
            placeholder="message" 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            />

            <br />
            <button type="submit">Send</button>
            </form>
        </div>
        );
    }
}