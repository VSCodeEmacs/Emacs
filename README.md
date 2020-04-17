<h2 align="center"><img src="https://github.com/VSCodeEmacs/Emacs/blob/master/images/icon.png?raw=true" height=123><br>VSCodeEmacs</h2>
<p align="center"><strong>Emacs emulation for Visual Studio Code</strong></p>

This is a fork of... I don't remember the original extension name but there are tons of Emacs extensions and many of them claims to be Emacs-friendly but many fails to implement basic Emacs behaviors.
To give you an example, in Emacs when you use `Ctrl+Space` to enter selection mode and then select some text, if you press `DEL` the text is removed and the selection mode is exited.
No fork had this implemented, instead the text would get erased but the selection mode would still be operating, which was annoying for a real Emacs user I believe.
At first I proposed a PR in one of the repository but they didn't even review the code and the motivation behind, they just asked how it would improve the extension, after I explained they just denied.
That is why I made another extension, it's not just to have my own version and pollute the marketplace even more. Coding should be free and share, not maintaining some domains and pretend to be a lord of thumb ups over denying the main purpose of the product you hold.


I also added the chord `alt+shift+1` which will open a minibuffer. Guess what `alt+shift+1` do in Emacs ?


Anyways I hope you enjoy this modification. Please if you want to improve the extension you're free to fork, modify and make push request (for the sake of perfection).

Special thanks to:
- flindeberg for fixing `C-w` glitch in the remote context and adding some mac keybindings.

Emacs FTW.
