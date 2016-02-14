var BotActions = function(bot) {
    this.bot = bot;

    // more information about additional params https://api.slack.com/methods/chat.postMessage
    // http://www.emoji-cheat-sheet.com
    this.params = {
        as_user: true
    };
}

BotActions.prototype.userMentionedChuck = function() {
    this.bot.postMessageToChannel('general', 'Did someone mention my name?', this.params);
}

BotActions.prototype.userMentionedNorrisJokes = function() {

    //Norris jokes API http://api.icndb.com/jokes

    // Individual joke
    // http://api.icndb.com/jokes/random/
}
module.exports = BotActions;