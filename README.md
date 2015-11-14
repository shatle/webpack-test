## Notices


#### Data URIs Disadvantages

* Data URIs are not separately cached from their containing documents (e.g. CSS or HTML files) so data is downloaded every time the containing documents are redownloaded.

* Content must be re-encoded and re-embedded every time a change is made.
Internet Explorer through version 7 (approximately 15% of the market as of January 2011), lacks support.
* Internet Explorer 8 limits data URIs to a maximum length of 32 KB. 
* Data is included as a simple stream, and many processing environments (such as web browsers) may not support using containers (such as multipart/alternative or message/rfc822) to provide greater complexity such as metadata, data compression, or content negotiation.

* Base64-encoded data URIs are 1/3 larger in size than their binary equivalent. (However, this overhead is reduced to 2-3% if the HTTP server compresses the response using gzip)

* Data URIs make it more difficult for security software to filter content.

