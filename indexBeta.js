
/*
function callWikiApi(wiki_key, entry, wiki_baseurl) {
    // exeuctes call to the API and gets the data
    //first submit API:
    // let searchUrl = startUrl + key + extentionUrl + "?" + stateCode;
    // console.log(searchUrl);
    /*
  console.log(states);
  for (let i = 0; i < states.length; i++) {
    let state = states[i];
    let stateCode = "stateCode=" + state;
    console.log(stateCode);
    let allStateCodes = stateCode + "&" + stateCode;
    console.log(allStateCodes);
    
    //console.log(allStateCodes);
    
    let apiKey = "api_key=" + key;
    let searchUrl = baseUrl + "?" + allStateCodes + apiKey;
    console.log(searchUrl);
    fetch(searchUrl)
        .then(response=>{
          if (response.ok) {
            return response.json(); 
          }
            throw new Error(response.statusText);
        }) 
        .then(responseJson =>
          displayResults(responseJson, maxResults)) 
        //.catch(error=>alert('Sorry - that State Park was not found!', error));
}
//}

function callYouTubeApi(youtube_key, entry, youtube_baseurl) {
    // exeuctes call to the API and gets the data
    //first submit API:
    // let searchUrl = startUrl + key + extentionUrl + "?" + stateCode;
    // console.log(searchUrl);
    /*
  console.log(states);
  for (let i = 0; i < states.length; i++) {
    let state = states[i];
    let stateCode = "stateCode=" + state;
    console.log(stateCode);
    let allStateCodes = stateCode + "&" + stateCode;
    console.log(allStateCodes);
    
    //console.log(allStateCodes);
    let apiKey = "api_key=" + key;
    let searchUrl = baseUrl + "?" + allStateCodes + apiKey;
    console.log(searchUrl);
    fetch(searchUrl)
        .then(response=>{
          if (response.ok) {
            return response.json(); 
          }
            throw new Error(response.statusText);
        }) 
        .then(responseJson =>
          displayResults(responseJson, maxResults)) 
        //.catch(error=>alert('Sorry - that State Park was not found!', error));
}
//}

function displayResults(responseJson, maxResults) {
    // displays final results to users, after clearing out previous results
    // displays Full Name of Park, Description, URL and Address
    // handles any errors with search
            // $('.display-results').empty();
            let newHTML = " ";
            console.log(responseJson.data.length);
            for(let i=0; i<responseJson.data.length & i < maxResults; i++) { // do i need to iterate thru 'reponseJson.data?
            newHTML +=
              `<div class="display-resultsJson"> 
              <p>${responseJson.data[i].states}</p>
              <P>${responseJson.data[i].fullName}</p>
              <p>${responseJson.data[i].description}</P>
              <a href='${responseJson.data[i].url}'>Website</a>     
              </div> 
              `;
            }
            if (newHTML == " ") {
                alert('This State has no Parks');
            } else {
            $('.display-results').append(newHTML);
            $('.parks-results').removeClass('hidden');
            }
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    userSearch();
  }
);