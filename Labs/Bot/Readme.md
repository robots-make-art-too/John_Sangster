# THIS IS MY TECHNICAL README - MY "HOW"

Link to add bot to server: [https://discordapp.com/oauth2/authorize?&client_id=947256024602128384&scope=bot&permissions=8](url)

Please let me know if this link does not work!

---

This bot was made using the Autocode API, which is an online tool able to freely host Discord bots.

Its function is relatively simple. The bot uses a list of many Unicode face emojis (all the emojis listed under "People" in the Discord emojis tab).

`const emojis = [`😀`,`😃`,`😄`,`😁`,`😆`,`😅`,`😂`,`🤣`,`☺️`,`😊`,`😇`,`🙂`,`🙃`,`😉`,`😌`,`🥲`,`😍`,`🥰`,`😘`,`😗`,`😙`,`😚`,`😋`,`😛`,`😝`,`😜`,`🤪`,`🤨`,`🧐`,`🤓`,`😎`,`🤩`,`🥳`,`😏`,`😒`,`😞`,`😔`,`😟`,`😕`,`🙁`,`☹️`,`😣`,`😖`,`😫`,`😩`,`🥺`,`😢`,`😭`,`😤`,`😮`,`‍💨`,`😠`,`😡`,`🤬`,`🤯`,`😳`,`😶`,`‍🌫️`,`🥵`,`🥶`,`😱`,`😨`,`😰`,`😥`,`😓`,`🤗`,`🤔`,`🤭`,`🥱`,`🤫`,`🤥`,`😶`,`😐`,`😑`,`😬`,`🙄`,`😯`,`😦`,`😧`,`😮`,`😲`,`😴`,`🤤`,`😪`,`😵`,`😵`,`‍💫`,`🤐`,`🥴`,`🤢`,`🤮`,`🤧`,`😷`,`🤒`,`🤕`,`🤑`,`🤠`,`🥸`,`😈`,`👿`,`👹`,`👺`,`🤡`,`💩`,`👻`,`💀`,`☠️`,`👽`,`👾`,`🤖`,`🎃`,`😺`,`😸`,`😹`,`😻`,`😼`,`😽`,`🙀`,`😿`,`😾`];`

It then chooses an emoji from this list at random, and sends it as a message:

`content: emojis[Math.floor(Math.random() * emojis.length)]`

Currently, the bot uses Discord's slash commands, integrated via Autocode's built-in slash command integration for Discord bots. It responds to /emoji

The rest of the code of this bot is provided by default by Autocode (sometimes with slight edits). This adds no functionality, but enables the bot to work properly

Autocode default code:

```
package.json
{
  "name": "new-project",
  "author": "metajarra",
  "publish": false,
  "dependencies": {
    "lib": "latest"
  }
}
```

```
stdlib.json
{
  "name": "metajarra/emojibot",
  "timeout": 10000,
  "connector": false,
  "events": {
    "functions/events/discord/command/emoji.js": {
      "name": "discord.command",
      "subtype": {
        "command": "emoji"
      }
    }
  }
}
```
