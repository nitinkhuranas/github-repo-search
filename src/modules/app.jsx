import React from "react";
import { Provider } from 'react-redux';
import store from './globalStore';
import Output from "./output/container";
import Input from "./input/container";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Provider store={store}>
                    <div>
                        <Input/>
                        <Output/>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;