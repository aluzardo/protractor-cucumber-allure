/*jslint node: true*/
var SearchPage = require('../Pages/searchPage');

var searchText = function () {
    "use strict";
    var search = new SearchPage();

    this.When(/^I type "(.*?)"$/, function (text) {
        search.searchTextBox.sendKeys("The problem is that if the code throw an error before the return the process stop");
        return search.searchTextBox.sendKeys(text);
    });

    this.Then(/^I click search button$/, function () {
        return search.searchButton.click();
    });

};

module.exports = searchText;