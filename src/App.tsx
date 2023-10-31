import React, {useState} from 'react';

const App = () => {
    function promiseTest(): Promise<void> {
        return new Promise<void>((resolve) => setTimeout(resolve, 2000))
    }
    const [loading, setLoading] = useState(true);

    promiseTest().then(() => setLoading(false));

    return (
        <div>{loading ? 'Loading...' : 'Hello World!'}</div>
    )
}

export default App;
