'use strict';

const wiki_key = "ha8eO1B6b3yBeBy0HIzbrkdkusBUYTI3Hb0Xmsse";
const wiki_baseUrl = 'https://en.wikipedia.org/w/api.php';
const wiki_endpoint = '?origin=*&action=query&format=json&prop=extracts%7Cpageimages&indexpageids=1&redirects=1&exchars=1200&exsectionformat=plain&piprop=name%7Cthumbnail%7Coriginal&pithumbsize=250&titles=skiing';
const youtube_key = "";
const youtube_baseurl = "";

function userSearch() {
    
    // grabs the name of the park(s) in the state that the user wants to see
    $('.entry-form').submit(function(event) {  
        event.preventDefault();
        //let states = [];
        //states.push($("#state-entry1").val());
        //$('.display-results').empty();
        // let entry = $("#races option:selected").val();
        let entry = $('#races option:selected').text();
        console.log(entry);
        //let states= entry.split(",");
        //console.log(states);
        //let maxResults = $('#input-max-results').val(); 
        //maxResults = parseInt(maxResults, 10);
        // console.log(states, maxResults);
        //stateCodes(states, key, maxResults);

        }
      )
