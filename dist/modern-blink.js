/*!
 * modern-blink - The <blink> element resurrected as an HTML Custom Element
 * @version v0.0.0
 * @link https://github.com/leonderijke/Modern-Blink
 * @license MIT
 */
(function(window, document, undefined) {
	"use strict";

	var proto = Object.create(HTMLElement.prototype);

	proto.createdCallback = function() {
		this.readAttributes();
		this.updateAnimation();
	};

	proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
		if ( /^(duration|iterationCount|run)$/.test(attrName) ) {
			this.readAttributes();
			this.updateAnimation();
		}
	};

	proto.readAttributes = function() {
		this.duration = this.getAttribute('duration') || '1000ms';
		this.iterationCount = this.getAttribute('iterationCount') || 'infinite';
		this.run = (this.getAttribute('run') !== "false") || false;
	};

	proto.updateAnimation = function() {
		var animationName = (this.run) ? 'modern-blink' : '',
			animationDuration = (this.run) ? this.duration : '',
			animationIterationCount = (this.run) ? this.iterationCount : '';

		this.style.webkitAnimationName = animationName;
		this.style.animationName = animationName;
		this.style.webkitAnimationDuration = animationDuration;
		this.style.animationDuration = animationDuration;
		this.style.webkitAnimationIterationCount = animationIterationCount;
		this.style.animationIterationCount = animationIterationCount;
	};

	document.registerElement('modern-blink', {
		prototype: proto
	});

}(window, document));
