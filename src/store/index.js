import { observable, computed, action } from "mobx"
import { getTime } from "../util/tools.js"

class IndexStore {

    @observable
    time

    @observable
    randomNum

    constructor() {
        this.time = getTime()
        this.randomNum = Math.ceil(Math.random()*1000)
    }

    @action
    updateTime() {
        this.time = getTime()
    }

    @computed
    get randomNumText() {
        return "随机数: " + this.randomNum
    }
}

export default {IndexStore: new IndexStore()}
