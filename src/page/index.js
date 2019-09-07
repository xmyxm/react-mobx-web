import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../component/header/index"
import "../style/index.less";

export default class Index extends Component {

    render() {
        return (
            <React.Fragment>
                <Header title="react&mobx"></Header>
                <div className="index-page">
                    <div className="icon-max"></div>
                    <div className="describe">mobx学习</div>
                    <div className="info">
                        方案介绍：
                        <p>react</p>
                        <p>mobx</p>
                        <p>mobx-react</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
