"use strict";

var _ = require('underscore'),
    utils = require('./utilities'),
    request = require('request');

var BotActions = function(bot) {
    this.bot = bot;

    // more information about additional params https://api.slack.com/methods/chat.postMessage
    // http://www.emoji-cheat-sheet.com
    this.params = {
        as_user: true
    };
}

BotActions.prototype.userMentionedNorrisJoke = function(options) {

    var params = options.params || this.params;
    var channel = options.channel;

    request('http://api.icndb.com/jokes/random/', function (error, response, body) {
        var json = JSON.parse(body).value;
        if (!error && response.statusCode == 200) {
            this.bot.postMessage(channel, json.joke, params);
        }
    }.bind(this));
}
module.exports = BotActions;