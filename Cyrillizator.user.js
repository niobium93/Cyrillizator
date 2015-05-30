// ==UserScript==
// @name         Cyrillizator
// @namespace    https://github.com/niobium93/Cyrillizator
// @version      0.1
// @description  Converts Latin characters into Cyrillic ones. Helps with learning languages using Cyrillic alphabets. Most code stolen from http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Beautifying_the_Web#Straighten_Smart_Quotes
// @author       niobis
// @grant        none
// ==/UserScript==

   var arReplacements = {
		'B': 'Б',
		'V': 'В',
		'G': 'Г',
		'D': 'Д',
		'Ž': 'Ж',
		'Z': 'З',
		'I': 'И',
		'L': 'Л',
		'N': 'Н',
		'P': 'П',
		'R': 'Р',
		'S': 'С',
		'U': 'У',
		'F': 'Ф',
        'H': 'Х',
		'C': 'Ц',
        'Č': 'Ч',
        'Š': 'Ш',
        'E': 'Э',
        'b': 'б',
		'v': 'в',
		'g': 'г',
		'd': 'д',
		'ž': 'ж',
		'z': 'з',
		'i': 'и',
		'l': 'л',
		'n': 'н',
		'p': 'п',
		'r': 'р',
		's': 'с',
		'u': 'у',
		'f': 'ф',
        'h': 'х',
		'c': 'ц',
        'č': 'ч',
        'š': 'ш',
        'e': 'э'};

   var arRegex = new Array();
   for (var sKey in arReplacements) {
	   arRegex[sKey] = new RegExp(sKey, 'g');
   }

   var snapTextNodes = document.evaluate("//text()[" +
	   "not(ancestor::script) and not(ancestor::style)]",
	   document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

   for (var i = snapTextNodes.snapshotLength - 1; i >= 0; i--) {
	  var elmTextNode = snapTextNodes.snapshotItem(i);
	  var sText = elmTextNode.data;
	  for (var sKey in arReplacements) {
		  sText = sText.replace(arRegex[sKey], arReplacements[sKey]);
	  }
	  elmTextNode.data = sText;
  }