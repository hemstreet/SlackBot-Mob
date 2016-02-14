var _ = require('underscore'),
    utils = require('./utilities');

var BotActions = function(bot) {
    this.bot = bot;

    // more information about additional params https://api.slack.com/methods/chat.postMessage
    // http://www.emoji-cheat-sheet.com
    this.params = {
        as_user: true
    };
}

BotActions.prototype.userMentionedChuck = function(channels, params) {

    params = params || this.params;
    channels = utils.forceArray(channels);
    _.each(channels, function(channel, key) {
        this.bot.postMessageToChannel(channel, 'Did someone mention my name?', params).then(function(data) {
            
        }).fail(function(data) {
            console.log('ERROR: Post message to channel', channel, 'failed', data);
        })
    }.bind(this));

}

BotActions.prototype.userMentionedNorrisJokes = function() {

    //Norris jokes API http://api.icndb.com/jokes

    // Individual joke
    // http://api.icndb.com/jokes/random/
}

module.exports = BotActions;