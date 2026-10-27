# float 🎈

i keep discord on half my screen and it never really fit, everything got squished. so i made it fit

it's a port of [maenDisease/Float](https://github.com/maenDisease/Float) (the old betterdiscord theme, it's archived now) for the new discord ui. i loved that theme so i hope i did it justice

basically:
- the channel list turns into a strip of icons and slides open when you hover it, the chat moves over to make room
- same with the member list (and the profile panel in dms) on the other side
- nothing reflows, things just slide, the chat and message box keep their width
- the smaller you make the window the more it hides: topic, extra header buttons, composer buttons, then the strips, then the server list (at 700, 500, 400 and 300 px)
- plus a bunch of small fixes so threads, forums, the inbox and the image viewer don't break when it's narrow

### you'll need
discord and vencord. it works alone or on top of [system24](https://github.com/refact0r/system24) or [midnight](https://github.com/refact0r/midnight-discord), i use it with midnight

### setting it up
first go to vencord → settings and turn on **disable minimum window size**, otherwise discord won't get narrow enough and the whole thing is kinda pointless

then settings → themes → **open themes folder**, drop `float.theme.css` in there and turn it on

if you're using another theme turn float on *after* that one

### changing stuff
all the knobs are at the top of the file in `:root`. most keep the names from the original float

- `--float-animations` 1, set it to 0 and everything snaps instead of sliding
- `--float-sidebar-width` 42, channel strip width in px (0 hides it). 42 keeps the icons centred
- `--sidebar-hover-width` 0px, how wide the channel list opens. 0px uses discord's own width
- `--slide-window-on-hover` 1, 0 makes the list cover the chat instead of pushing it
- `--float-members-width` 60px, member strip (0px hides it). 60 keeps the avatars and role counts centred
- `--members-hover-width` 240px, member list when open
- `--slide-window-on-members-hover` 1, same idea as the channel one
- `--sidebar-hover-delay` / `--members-hover-delay` 0s, wait before opening
- `--sidebar-transition-duration` / `--members-transition-duration` 0.4s, slide speed
- `--guildicon-size` 48
- `--guildlist-collapse` 0, 1 hides the server list behind a hover strip too
- `--topic-opacity` 1
- `--toolbar-visibility` flex, none hides the extra header buttons until you hover
- `--textarea-buttons-gif` / `-sticker` / `-gift` flex / flex / none

the `@media` blocks under that are the width presets, change them or delete them, whatever works for you

### heads up
float only turns on when discord is 1300px wide or less (like half a 1080p screen). if you want it at a different size change the `1300px` in `@media (max-width: 1300px)`

it uses discord's exact class names because it's way faster than the `[class^=...]` way. the bad part is when discord changes them float breaks until i update it. midnight and system24 break at the same time though so at least you'll know it's not just me

the gif / gift buttons are matched by their text, so those only work if your discord is in english

if something looks squished let me know, i'm on discord way too much anyway so i'll probably notice too 💜
