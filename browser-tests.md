# Browser testing

This document contains some tests and checks on various browsers(devices);

![demo][demo]


# Table of Content
- [Sketch](#sketch)
- [Research](#research)
- [Tools](#tools)
- [Tests](#tests)
	- [Macbook](#macbook)
		- [chrome](#chrome)
		- [firefox](#firefox)
		- [Safari](#safari)
	- [iPhone4](#)
		- [Safari](#safari)
	- [Samsung Galaxy s8](#samsung-galaxy-s8)
	- [VirtualBox](#virtualbox)
		- [IE8](#ie8)
		- [IE11](#ie11)
	- [Others](#others)
- [](#)


## Sketch
A sketch portraying the core and extra functions.
![sketch][sketch]

## Research
A short research about the support and possible options to support older browsers.

### Meta tag
About the the refresh meta tag. This is for when there is no Javascript enabled or when Websockets is not supported by the browser.

Sources:
- https://www.keycdn.com/support/http-equiv/
- https://stackoverflow.com/questions/8711888/auto-refresh-code-in-html-using-meta-tags
- https://metatags.nl/lijst-van-metatags/wat-is-de-html-tag-http-equiv-refresh-meta-tag-refresh
- https://www.w3.org/TR/WCAG20-TECHS/H76.html


### WebSockets
Sources where I found out how to implement the websockets and a bit about the support

Sources:
- https://github.com/JangoSteve/websockets-demo
- https://html.spec.whatwg.org/multipage/web-sockets.html
- https://os.alfajango.com/websockets-slides/#/
- https://github.com/websockets/ws
- https://developer.mozilla.org/nl/docs/WebSockets


## Tools
The tools used to test.

- VirtualBox
	- IE8
	- IE11

- Macbook
	- Chrome
	- Firefox (Dev Edition)
	- Safari

- iPhone 4s
	- Safari

- Samsung Galaxy S8
	- Samsung Browser
	- Chrome

## Tests
The testing on functionality (the polling).

Do note that the submit butten has yet to be removed in the images. The submit button is for when there is no websocket support or no javascript;

### Macbook

#### Chrome
<img src="https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/mb-chrome.png" alt="" width="300" height="300"/>

#### Firefox
<img src="https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/mb-ff.png" alt="" width="300" height="300"/>

#### Safari
<img src="https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/mb-safari.png" alt="" width="300" height="300"/>

### iPhone4
#### Safari
Some of the styling doesn't seem to be supported. And a few default styling has not been overwritten.
<img src="https://github.com/kyunwang/Live-Poll/blob/master/doc/images/iphone4-safari.png" alt="" width="300" height="300"/>

### Samsung Galaxy s8

#### Samsung Internet
All works fine here, but the submit button color differs.
<img src="https://github.com/kyunwang/Live-Poll/blob/master/doc/images/sg8-si.jpg" alt="" width="300" height="300"/>

#### Chrome
All works fine here, but the submit button color differs here too.
<img src="https://github.com/kyunwang/Live-Poll/blob/master/doc/images/sg8-chrome.jpeg" alt="" width="300" height="300"/>


### VirtualBox

#### IE8
IE8 does not support websockets and will fallback using the submitbutton.
Some styling also doesn't work.

<img src="https://github.com/kyunwang/Live-Poll/blob/master/doc/images/ie8.png" alt="" width="300" height="300"/>

#### IE11
Websockets fullt works on IE11. Some styling does not work correctly either like the focus/hover state

<img src="https://github.com/kyunwang/Live-Poll/blob/master/doc/images/ie11.png" alt="" width="300" height="300"/>

[demo]: https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/poll-demo.gif

[sketch]: https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/sketch.jpg

[iph4-safari]: https://github.com/kyunwang/Live-Poll/blob/readme/doc/images/iphone4-safari.png

[sg-sb]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/sg8-si.jpg
[sg-chrome]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/sg8-chrome.jpeg

[ie8]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/ie8.png
[ie11]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/ie11.png

[.]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/
[.]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/
[.]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/

