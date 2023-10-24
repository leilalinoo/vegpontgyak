import Model from "../Model/UrlapModel.js";
import AdatView from "../View/AdatView.js";
import HibaView from "../View/HibaView.js";
import View from "../View/Urlap/UrlapView.js";
import AdatModel from "../Model/AdatModel.js";
import DataService from "../Model/DataService.js";
import { ADATLEIRO } from "../Model/adatLeiro.js";

class AdatConstroller {
  constructor() {
    console.log("cnstrctr");
    this.dataService = new DataService();
    this.leiro = ADATLEIRO;
    this.dataService.getData(
      "../adat.json",
      this.adatokMegj,
      this.hibaMegj,
      this.leiro
    );
    
    this.urlapModel = new Model()
    this.adatModel = new AdatModel();

    this.urlapView = new View($(".urlap"), this.urlapModel.leiro);

    $(window).on("felvesz", (event) => {
      console.log(event.detail);
    });
  }

  adatokMegj(lista, leiro) {
    console.log(leiro);
    new AdatView(lista, $(".lista"), leiro);
  }

  hibaMegj(error) {
    console.log(error);
    new HibaView(error, $(".lista"));
  }
}

export default AdatConstroller;
