import Axios from "axios";


class gameClient{
    constructor(serverAddr) {
        this.base_url = serverAddr + '/api'
    }
}