import React, {useState} from 'react';

const Timer = () => {
const [timeValue, setTimeValue] = useState(0);

setTimeout(() => {
    setTimeValue(timeValue+1)
}, 1000);

    return (
        <div>
            <h4>You have used {timeValue} seconds on this website</h4>
        </div>
    );
}

export default Timer;
