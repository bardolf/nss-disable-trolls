jQuery.expr[':'].Contains = function (a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

chrome.storage.sync.get({
    trolls: 'Zmestabileho, naska, ciki333',
    remove: false
}, function (items) {
    var trolls = items.trolls.split(",")
    for (troll of trolls) {
        var filter = troll.trim();
        console.log("Implementing rules for '" + filter + "'.");
        if (items.remove) {
            $('section > div.comment > span:Contains("' + filter + '")').closest('div').html("<font color='grey'>troll was here</font>")
        } else {
            $('div.comment > span:Contains("'+filter+'")').closest('div').css({ "color": "white" });
            $('div.comment > span:Contains("'+filter+'")').closest('div').children('p').css({ "color": "white" });            
        }
    }
});