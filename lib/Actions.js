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

BotActions.prototype.userMentionedChuck = function(options) {

    var params = options.params || this.params;
    var channels = utils.forceArray(options.channels);

    _.each(channels, function(channel, key) {
        this.bot.postMessageToChannel(channel, 'Did someone mention my name?', params).then(function(data) {

        }).fail(function(data) {
            console.log('ERROR: Post message to channel', channel, 'failed', data);
        })
    }.bind(this));

}

BotActions.prototype.userMentionedNorrisJokes = function(options) {

    var params = options.params || this.params;
    var channels = utils.forceArray(options.channels);

    request('http://api.icndb.com/jokes/random/', function (error, response, body) {
        var json = JSON.parse(body).value;
        if (!error && response.statusCode == 200) {
            _.each(channels, function(channel, key) {
                this.bot.postMessageToChannel(channel, json.joke, params).then(function(data) {

                }).fail(function(data) {
                    console.log('ERROR: Post message to channel', channel, 'failed telling joke', data);
                })
            }.bind(this));
        }
    }.bind(this));
}

module.exports = BotActions;