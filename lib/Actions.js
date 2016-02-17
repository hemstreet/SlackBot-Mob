"use strict";

var _ = require('underscore'),
    utils = require('./utilities'),
    request = require('request'),
    config = require('../config/config'),
    googleImages = require('google-images'),
    client = googleImages(config.googleImagesCxKey, 'API KEY');

googleImages('CSE ID', 'API KEY');

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

    google.search( query, function (err, images) {
        console.log(images);
        params.attachments = [
            {
                "image_url": "http://my-website.com/path/to/image.jpg",
                "thumb_url": "http://example.com/path/to/thumb.png"
            }
        ];
    });

};



module.exports = BotActions;