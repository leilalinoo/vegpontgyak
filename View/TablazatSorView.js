class TablazatSorView {
  #adat = {};
  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.tablaElem = szuloElem;
    this.#sor();
    this.index = index;
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    this.megseElem = this.sorElem.children("td").children(".megse").hide();
    this.torolElem = this.sorElem.children("td").children(".torol");

    this.pipaElem.on("click", () => {
      console.log(this);
      this.sorElem.css("background-color", "lightgreen");
      this.megseElem.show();
      this.pipaElem.hide();
    });
    this.megseElem.on("click", () => {
      this.sorElem.css("background-color", "white");
      this.pipaElem.show();
      this.megseElem.hide();
    });
    this.torolElem.on("click", () => {
      this.sorElem.remove();
      this.#esemenyTrigger("torles");
    });
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (key !== "kesz") {
        if (Object.hasOwnProperty.call(this.#adat, key)) {
          const element = this.#adat[key];
          txt += `<td>${element}</td>`;
        }
      }
    }

    txt += `
    <td>
    <span class = "kesz"> ✔ </span>
    <span class = "megse"> ✘ </span>
    <span class = "torol"> ☠ </span>
    </td>`;

    txt += `</tr>`;

    this.tablaElem.append(txt);
  }

  #esemenyTrigger(esemeny) {
    const esemenyem = new CustomEvent(esemeny, { detail: this.index });
    window.dispatchEvent(esemenyem);
  }
}
export default TablazatSorView;
