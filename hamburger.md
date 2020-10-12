## How to use the hamburger icon

First add the `<link>` tag to your html/php document:
`<link rel="stylesheet" href="https://github.com/zPhoeniqz/CSS-Plugins/blob/main/Hamburger%20Menu%20Button/hamburger.css">`

After that, add that html code:
`<div class="menu-bttn">
  <div class="menu-bttn-burger">
  </div>
</div>`

Then add the JavaScript document:
`<script src="https://github.com/zPhoeniqz/CSS-Plugins/blob/main/Hamburger%20Menu%20Button/openDropdown.js"></script>`

Finally, add a bit JS to your document. Note, that "YOUR_DROPDOWN_ID" is a placeholder for the real id of the dropdown you want to toggle. If your dropdown just has no id,
leave YOUR_DROPDOWN_ID empty, but in that case you have to type in your dropdown's class. DONT TYPE AN ID **AND** A CLASS IN, OR LEAVE **BOTH** EMPTY, only the one you dont need:
`<script>
  openDropdown(YOUR_DROPDOWN_ID, YOUR_DROPDOWN_CLASS);
</script>`
