import { ADATLEIRO } from "./adatLeiro.js";
class AdatModel {
  #leiro;
  constructor() {
    this.#leiro = ADATLEIRO;
  }

  get leiro() {
    return this.#leiro;
  }
}
export default AdatModel;
