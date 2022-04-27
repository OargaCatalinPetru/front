async function getData() {
    let url = state.databaseUrl + ".json";
    let response = await fetch(url);
    //let serverResponseText = await response.text();
    let serverResponseJSON = await response.json();
    //console.log(serverResponseText);
    console.log(serverResponseJSON);
  }
  