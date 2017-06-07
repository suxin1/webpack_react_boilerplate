/**
 * Created by suxin on 5/13/17.
 */
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: 'Hello World!'
        }
    }

    render() {
        const {words} = this.state;
        return (
            <div>
                {words}
            </div>
        )
    }
}

export default App;