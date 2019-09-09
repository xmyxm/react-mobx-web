import React, { Component } from "react";
import Header from "../component/header/index"
import Clock from "../component/clock"
import "../style/index.less";

export default class Index extends Component {

    render() {
        return (
            <React.Fragment>
                <Header title="react&mobx"></Header>
                <div className="index-page">
                    <div className="title">
                        <div className="icon"></div>
                        状态管理之Mobx
                    </div>
                    <Clock/>
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
