"use strict";

/*!
 * HTML Tag Injector
 * -----------------
 *
 * Identifies the optimal place for top tags (e.g. CSS) and
 * bottom tags (e.g. JS) to be injected into a HTML view.
 *
 * Copyright(c) 2013 Owen Barnes <owen@socketstream.org>
 * MIT Licensed
 */

var topTag = '<head',
    bottomTag = '</html>';

module.exports = function(originalHTML, options) {
  options = options || {};

  var topTags    = options.top    || "<TOP_TAGS/>";
  var bottomTags = options.bottom || "<BOTTOM_TAGS/>";

  var outputHTML,
      lowecaseHTML = originalHTML.toLowerCase();

  // Only process if critical tags are present
  if (lowecaseHTML.indexOf(topTag) >= 0 && lowecaseHTML.indexOf(bottomTag) >= 0) {

    // Insert topTagName (typically CSS) just after the <head> tag
    var startOfTagIndex = lowecaseHTML.indexOf(topTag) + topTag.length;
    var endOfTagIndex = lowecaseHTML.substring(startOfTagIndex).indexOf('>');
    var topIndex = startOfTagIndex + endOfTagIndex + 1;

    // Insert bottomTagName (typically JS) just after the closing </html> tag
    var bottomIndex = lowecaseHTML.lastIndexOf(bottomTag);

    // Compose HTML output
    outputHTML = originalHTML.substring(0, topIndex) + 
      topTags +
      originalHTML.substring(topIndex, bottomIndex) +
      bottomTags + "\n" +
      originalHTML.substring(bottomIndex, originalHTML.length);
  }

  return outputHTML;

};
