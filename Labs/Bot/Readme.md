# THIS IS MY TECHNICAL README - MY "HOW"

Link to add bot to server: [https://discordapp.com/oauth2/authorize?&client_id=947256024602128384&scope=bot&permissions=8](url)

Please let me know if this link does not work!

---

This bot was made using the Autocode API, which is an online tool able to freely host Discord bots.

Its function is relatively simple. The bot uses a list of many Unicode face emojis (all the emojis listed under "People" in the Discord emojis tab).

`const emojis = [`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐คฃ`,`โบ๏ธ`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐ฅฒ`,`๐`,`๐ฅฐ`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐คช`,`๐คจ`,`๐ง`,`๐ค`,`๐`,`๐คฉ`,`๐ฅณ`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`๐`,`โน๏ธ`,`๐ฃ`,`๐`,`๐ซ`,`๐ฉ`,`๐ฅบ`,`๐ข`,`๐ญ`,`๐ค`,`๐ฎ`,`โ๐จ`,`๐ `,`๐ก`,`๐คฌ`,`๐คฏ`,`๐ณ`,`๐ถ`,`โ๐ซ๏ธ`,`๐ฅต`,`๐ฅถ`,`๐ฑ`,`๐จ`,`๐ฐ`,`๐ฅ`,`๐`,`๐ค`,`๐ค`,`๐คญ`,`๐ฅฑ`,`๐คซ`,`๐คฅ`,`๐ถ`,`๐`,`๐`,`๐ฌ`,`๐`,`๐ฏ`,`๐ฆ`,`๐ง`,`๐ฎ`,`๐ฒ`,`๐ด`,`๐คค`,`๐ช`,`๐ต`,`๐ต`,`โ๐ซ`,`๐ค`,`๐ฅด`,`๐คข`,`๐คฎ`,`๐คง`,`๐ท`,`๐ค`,`๐ค`,`๐ค`,`๐ค `,`๐ฅธ`,`๐`,`๐ฟ`,`๐น`,`๐บ`,`๐คก`,`๐ฉ`,`๐ป`,`๐`,`โ ๏ธ`,`๐ฝ`,`๐พ`,`๐ค`,`๐`,`๐บ`,`๐ธ`,`๐น`,`๐ป`,`๐ผ`,`๐ฝ`,`๐`,`๐ฟ`,`๐พ`];`

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
