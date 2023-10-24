class DataService {
  constructor() {

  }

  getData(apivegpont, callback, hibaCallback, leiro) {
    axios
      .get(apivegpont)
      .then(function (response) {
        // handle success
       /* console.log("Válasz object",response);
        console.log("adatok",response.data);
        console.log("státusz",response.status);
        console.log("státusz szöveg",response.statusText);
        console.log("válasz fejléc",response.headers);
        console.log("válasz config",response.config);*/
        console.log(callback)
        callback(response.data.nevek, leiro)
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        hibaCallback(error)
      })
      .finally(function () {
        // always executed
      });
  }
}

export default DataService
