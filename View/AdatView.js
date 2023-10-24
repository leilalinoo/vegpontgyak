import TablazatSorView from "./TablazatSorView.js";
class AdatView {
  #lista = [];
  #leiro;
  constructor(lista, szuloElem, leiro) {
    this.#lista = lista;
    this.#leiro = leiro;
    szuloElem.append(`<table class= table table-striped table-bordered >`);
    this.tablaElem = szuloElem.children("table");
    this.tarolo = szuloElem.children("table");
    this.megjelenit();
  }
  megjelenit() {
    this.fejlec();
    this.#lista.forEach((elem, index) => {
      new TablazatSorView(elem, this.tablaElem, index);
    });
  }

  fejlec() {
    let txt = "<tr>";
    for (const key in this.#leiro) {
        console.log(key)
      txt += `<th>${ this.#leiro[key].megj}</th>`;
    }
    txt += `</tr>`;
    this.tablaElem.append(txt);
  }
}
export default AdatView;
