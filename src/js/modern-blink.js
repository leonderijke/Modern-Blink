(function(window, document, undefined) {
	"use strict";

	var proto = Object.create(HTMLElement.prototype);

	proto.createdCallback = function() {
		this.readAttributes();
		this.updateAnimation();
	};

	proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
		if ( /^(duration|iterationCount)$/.test(attrName) ) {
			this.readAttributes();
			this.updateAnimation();
		}
	};

	proto.readAttributes = function() {
		this.duration = this.getAttribute('duration');
		this.iterationCount = this.getAttribute('iterationCount');
	};

	proto.updateAnimation = function() {
		var animationName = 'modern-blink',
			animationDuration = this.duration || '1000ms',
			animationIterationCount = this.iterationCount || 'infinite';

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
