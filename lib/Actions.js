"use strict";

var _ = require('underscore'),
    utils = require('./utilities'),
    request = require('request'),
    config = require('../config/config'),
    gis = require('g-i-s');

var BotActions = function(bot) {
    this.bot = bot;

    // Formatting messages
    //https://api.slack.com/docs/formatting
    //https://api.slack.com/docs/attachments

    this.params = {
        as_user: true
    };
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    // http://www.emoji-cheat-sheet.com
};

BotActions.prototype.userMentionedNorrisJoke = function(options) {

    var params = options.params || this.params;
    var data = options.data;

    request('http://api.icndb.com/jokes/random/', function (error, response, body) {
        var json = JSON.parse(body).value;
        if (!error && response.statusCode == 200) {
            this.bot.postMessage(data.channel, json.joke, params);
        }
    }.bind(this));

};

BotActions.prototype.imageMe = function(options) {
    var params = options.params || this.params,
      data = options.data,
      query = data.text.split('chuck image me')[1];

    gis(query, function(err, results) {
        if (err) {
            console.log(err);
            return;
        }

        var imageUrl = results[Math.floor(Math.random() * results.length) - 1];

        this.bot.postMessage(data.channel, imageUrl, params);

    }.bind(this));

};



module.exports = BotActions;