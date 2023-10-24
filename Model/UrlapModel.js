import { ADATLEIRO } from "../Model/adatLeiro.js"
class Model{
    #leiro
    constructor(){
        this.#leiro = ADATLEIRO
    }

    /*getLeiro(){
        return this.#leiro
    }*/

    get leiro(){
        return this.#leiro
    }
}
export default Model