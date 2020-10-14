
const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"];

// open tabs function to open each of the site urls in a different window
const openTabs = function(){
    for (var i = 0; (i < siteUrls.length); i++){
        window.open(siteUrls[i])
    }
}
openTabs();