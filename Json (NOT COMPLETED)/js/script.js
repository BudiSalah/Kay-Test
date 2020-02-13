jQuery(document).ready(() => {
    jsonData();
});

function jsonData() {
    fetch("https://api.myjson.com/bins/t0ac8")
  .then(response => response.json())
  .then(json => {
      let i = 1,
          tableBody = jQuery("tbody");

      let jsonLen = json.length;
      
      for (x of json) {
        for (let j = 0; j < jsonLen; j++) {
            let newRaw = document.createElement("tr"),
                newTh = document.createElement("th"),
                firstTd = document.createElement("td"),
                secondTd = document.createElement("td");

            newTh.append(i);
            firstTd.append(x[j].FullNameArabic);
            secondTd.append(x[j].Id);
            newRaw.append(newTh, firstTd, secondTd);
            tableBody.append(newRaw);

            i += 1;
        }
      }
  });
}