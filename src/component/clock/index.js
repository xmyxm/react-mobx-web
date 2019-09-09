import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import "./index.less"

@inject("IndexStore")
@observer
export default class Clock extends Component {

    componentDidMount() {
        setInterval(() => { this.props.IndexStore.updateTime() }, 1000)
    }

    render() {
        const { time } = this.props.IndexStore
        return (<div className="time">当前时间:{time}</div>)
    }
}
