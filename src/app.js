import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider  } from "mobx-react"
import Index from "./page/index"
import IndexStore from "./store/index"

class App extends Component {

    render() {
        return (
            <Provider {...IndexStore}>
                <BrowserRouter basename="/mobx">
                    <Switch>
                        <Route path="/" component={Index}/>
                        <Route path="/index" component={Index}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector("#main"))
