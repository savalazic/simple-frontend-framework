/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/
	
	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues
	
	 */
	/* global window, document, define, jQuery, setInterval, clearInterval */
	(function (factory) {
	    'use strict';
	
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	})(function ($) {
	    'use strict';
	
	    var Slick = window.Slick || {};
	
	    Slick = function () {
	
	        var instanceUid = 0;
	
	        function Slick(element, settings) {
	
	            var _ = this,
	                dataSettings;
	
	            _.defaults = {
	                accessibility: true,
	                adaptiveHeight: false,
	                appendArrows: $(element),
	                appendDots: $(element),
	                arrows: true,
	                asNavFor: null,
	                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
	                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
	                autoplay: false,
	                autoplaySpeed: 3000,
	                centerMode: false,
	                centerPadding: '50px',
	                cssEase: 'ease',
	                customPaging: function customPaging(slider, i) {
	                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
	                },
	                dots: false,
	                dotsClass: 'slick-dots',
	                draggable: true,
	                easing: 'linear',
	                edgeFriction: 0.35,
	                fade: false,
	                focusOnSelect: false,
	                infinite: true,
	                initialSlide: 0,
	                lazyLoad: 'ondemand',
	                mobileFirst: false,
	                pauseOnHover: true,
	                pauseOnFocus: true,
	                pauseOnDotsHover: false,
	                respondTo: 'window',
	                responsive: null,
	                rows: 1,
	                rtl: false,
	                slide: '',
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: true,
	                swipeToSlide: false,
	                touchMove: true,
	                touchThreshold: 5,
	                useCSS: true,
	                useTransform: true,
	                variableWidth: false,
	                vertical: false,
	                verticalSwiping: false,
	                waitForAnimate: true,
	                zIndex: 1000
	            };
	
	            _.initials = {
	                animating: false,
	                dragging: false,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: false,
	                slideOffset: 0,
	                swipeLeft: null,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: false,
	                unslicked: false
	            };
	
	            $.extend(_, _.initials);
	
	            _.activeBreakpoint = null;
	            _.animType = null;
	            _.animProp = null;
	            _.breakpoints = [];
	            _.breakpointSettings = [];
	            _.cssTransitions = false;
	            _.focussed = false;
	            _.interrupted = false;
	            _.hidden = 'hidden';
	            _.paused = true;
	            _.positionProp = null;
	            _.respondTo = null;
	            _.rowCount = 1;
	            _.shouldClick = true;
	            _.$slider = $(element);
	            _.$slidesCache = null;
	            _.transformType = null;
	            _.transitionType = null;
	            _.visibilityChange = 'visibilitychange';
	            _.windowWidth = 0;
	            _.windowTimer = null;
	
	            dataSettings = $(element).data('slick') || {};
	
	            _.options = $.extend({}, _.defaults, settings, dataSettings);
	
	            _.currentSlide = _.options.initialSlide;
	
	            _.originalSettings = _.options;
	
	            if (typeof document.mozHidden !== 'undefined') {
	                _.hidden = 'mozHidden';
	                _.visibilityChange = 'mozvisibilitychange';
	            } else if (typeof document.webkitHidden !== 'undefined') {
	                _.hidden = 'webkitHidden';
	                _.visibilityChange = 'webkitvisibilitychange';
	            }
	
	            _.autoPlay = $.proxy(_.autoPlay, _);
	            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
	            _.changeSlide = $.proxy(_.changeSlide, _);
	            _.clickHandler = $.proxy(_.clickHandler, _);
	            _.selectHandler = $.proxy(_.selectHandler, _);
	            _.setPosition = $.proxy(_.setPosition, _);
	            _.swipeHandler = $.proxy(_.swipeHandler, _);
	            _.dragHandler = $.proxy(_.dragHandler, _);
	            _.keyHandler = $.proxy(_.keyHandler, _);
	
	            _.instanceUid = instanceUid++;
	
	            // A simple way to check for HTML strings
	            // Strict HTML recognition (must start with <)
	            // Extracted from jQuery v1.11 source
	            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
	
	            _.registerBreakpoints();
	            _.init(true);
	        }
	
	        return Slick;
	    }();
	
	    Slick.prototype.activateADA = function () {
	        var _ = this;
	
	        _.$slideTrack.find('.slick-active').attr({
	            'aria-hidden': 'false'
	        }).find('a, input, button, select').attr({
	            'tabindex': '0'
	        });
	    };
	
	    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
	
	        var _ = this;
	
	        if (typeof index === 'boolean') {
	            addBefore = index;
	            index = null;
	        } else if (index < 0 || index >= _.slideCount) {
	            return false;
	        }
	
	        _.unload();
	
	        if (typeof index === 'number') {
	            if (index === 0 && _.$slides.length === 0) {
	                $(markup).appendTo(_.$slideTrack);
	            } else if (addBefore) {
	                $(markup).insertBefore(_.$slides.eq(index));
	            } else {
	                $(markup).insertAfter(_.$slides.eq(index));
	            }
	        } else {
	            if (addBefore === true) {
	                $(markup).prependTo(_.$slideTrack);
	            } else {
	                $(markup).appendTo(_.$slideTrack);
	            }
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slides.each(function (index, element) {
	            $(element).attr('data-slick-index', index);
	        });
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	    };
	
	    Slick.prototype.animateHeight = function () {
	        var _ = this;
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.animate({
	                height: targetHeight
	            }, _.options.speed);
	        }
	    };
	
	    Slick.prototype.animateSlide = function (targetLeft, callback) {
	
	        var animProps = {},
	            _ = this;
	
	        _.animateHeight();
	
	        if (_.options.rtl === true && _.options.vertical === false) {
	            targetLeft = -targetLeft;
	        }
	        if (_.transformsEnabled === false) {
	            if (_.options.vertical === false) {
	                _.$slideTrack.animate({
	                    left: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            } else {
	                _.$slideTrack.animate({
	                    top: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            }
	        } else {
	
	            if (_.cssTransitions === false) {
	                if (_.options.rtl === true) {
	                    _.currentLeft = -_.currentLeft;
	                }
	                $({
	                    animStart: _.currentLeft
	                }).animate({
	                    animStart: targetLeft
	                }, {
	                    duration: _.options.speed,
	                    easing: _.options.easing,
	                    step: function step(now) {
	                        now = Math.ceil(now);
	                        if (_.options.vertical === false) {
	                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
	                            _.$slideTrack.css(animProps);
	                        } else {
	                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
	                            _.$slideTrack.css(animProps);
	                        }
	                    },
	                    complete: function complete() {
	                        if (callback) {
	                            callback.call();
	                        }
	                    }
	                });
	            } else {
	
	                _.applyTransition();
	                targetLeft = Math.ceil(targetLeft);
	
	                if (_.options.vertical === false) {
	                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	                } else {
	                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	                }
	                _.$slideTrack.css(animProps);
	
	                if (callback) {
	                    setTimeout(function () {
	
	                        _.disableTransition();
	
	                        callback.call();
	                    }, _.options.speed);
	                }
	            }
	        }
	    };
	
	    Slick.prototype.getNavTarget = function () {
	
	        var _ = this,
	            asNavFor = _.options.asNavFor;
	
	        if (asNavFor && asNavFor !== null) {
	            asNavFor = $(asNavFor).not(_.$slider);
	        }
	
	        return asNavFor;
	    };
	
	    Slick.prototype.asNavFor = function (index) {
	
	        var _ = this,
	            asNavFor = _.getNavTarget();
	
	        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
	            asNavFor.each(function () {
	                var target = $(this).slick('getSlick');
	                if (!target.unslicked) {
	                    target.slideHandler(index, true);
	                }
	            });
	        }
	    };
	
	    Slick.prototype.applyTransition = function (slide) {
	
	        var _ = this,
	            transition = {};
	
	        if (_.options.fade === false) {
	            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	        } else {
	            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	        }
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	    };
	
	    Slick.prototype.autoPlay = function () {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        if (_.slideCount > _.options.slidesToShow) {
	            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
	        }
	    };
	
	    Slick.prototype.autoPlayClear = function () {
	
	        var _ = this;
	
	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }
	    };
	
	    Slick.prototype.autoPlayIterator = function () {
	
	        var _ = this,
	            slideTo = _.currentSlide + _.options.slidesToScroll;
	
	        if (!_.paused && !_.interrupted && !_.focussed) {
	
	            if (_.options.infinite === false) {
	
	                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
	                    _.direction = 0;
	                } else if (_.direction === 0) {
	
	                    slideTo = _.currentSlide - _.options.slidesToScroll;
	
	                    if (_.currentSlide - 1 === 0) {
	                        _.direction = 1;
	                    }
	                }
	            }
	
	            _.slideHandler(slideTo);
	        }
	    };
	
	    Slick.prototype.buildArrows = function () {
	
	        var _ = this;
	
	        if (_.options.arrows === true) {
	
	            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
	            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
	
	            if (_.slideCount > _.options.slidesToShow) {
	
	                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	
	                if (_.htmlExpr.test(_.options.prevArrow)) {
	                    _.$prevArrow.prependTo(_.options.appendArrows);
	                }
	
	                if (_.htmlExpr.test(_.options.nextArrow)) {
	                    _.$nextArrow.appendTo(_.options.appendArrows);
	                }
	
	                if (_.options.infinite !== true) {
	                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                }
	            } else {
	
	                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
	                    'aria-disabled': 'true',
	                    'tabindex': '-1'
	                });
	            }
	        }
	    };
	
	    Slick.prototype.buildDots = function () {
	
	        var _ = this,
	            i,
	            dot;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$slider.addClass('slick-dotted');
	
	            dot = $('<ul />').addClass(_.options.dotsClass);
	
	            for (i = 0; i <= _.getDotCount(); i += 1) {
	                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
	            }
	
	            _.$dots = dot.appendTo(_.options.appendDots);
	
	            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
	        }
	    };
	
	    Slick.prototype.buildOut = function () {
	
	        var _ = this;
	
	        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        _.$slides.each(function (index, element) {
	            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
	        });
	
	        _.$slider.addClass('slick-slider');
	
	        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
	
	        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
	        _.$slideTrack.css('opacity', 0);
	
	        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	            _.options.slidesToScroll = 1;
	        }
	
	        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
	
	        _.setupInfinite();
	
	        _.buildArrows();
	
	        _.buildDots();
	
	        _.updateDots();
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        if (_.options.draggable === true) {
	            _.$list.addClass('draggable');
	        }
	    };
	
	    Slick.prototype.buildRows = function () {
	
	        var _ = this,
	            a,
	            b,
	            c,
	            newSlides,
	            numOfSlides,
	            originalSlides,
	            slidesPerSection;
	
	        newSlides = document.createDocumentFragment();
	        originalSlides = _.$slider.children();
	
	        if (_.options.rows > 1) {
	
	            slidesPerSection = _.options.slidesPerRow * _.options.rows;
	            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
	
	            for (a = 0; a < numOfSlides; a++) {
	                var slide = document.createElement('div');
	                for (b = 0; b < _.options.rows; b++) {
	                    var row = document.createElement('div');
	                    for (c = 0; c < _.options.slidesPerRow; c++) {
	                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
	                        if (originalSlides.get(target)) {
	                            row.appendChild(originalSlides.get(target));
	                        }
	                    }
	                    slide.appendChild(row);
	                }
	                newSlides.appendChild(slide);
	            }
	
	            _.$slider.empty().append(newSlides);
	            _.$slider.children().children().children().css({
	                'width': 100 / _.options.slidesPerRow + '%',
	                'display': 'inline-block'
	            });
	        }
	    };
	
	    Slick.prototype.checkResponsive = function (initial, forceUpdate) {
	
	        var _ = this,
	            breakpoint,
	            targetBreakpoint,
	            respondToWidth,
	            triggerBreakpoint = false;
	        var sliderWidth = _.$slider.width();
	        var windowWidth = window.innerWidth || $(window).width();
	
	        if (_.respondTo === 'window') {
	            respondToWidth = windowWidth;
	        } else if (_.respondTo === 'slider') {
	            respondToWidth = sliderWidth;
	        } else if (_.respondTo === 'min') {
	            respondToWidth = Math.min(windowWidth, sliderWidth);
	        }
	
	        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
	
	            targetBreakpoint = null;
	
	            for (breakpoint in _.breakpoints) {
	                if (_.breakpoints.hasOwnProperty(breakpoint)) {
	                    if (_.originalSettings.mobileFirst === false) {
	                        if (respondToWidth < _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    } else {
	                        if (respondToWidth > _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    }
	                }
	            }
	
	            if (targetBreakpoint !== null) {
	                if (_.activeBreakpoint !== null) {
	                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
	                        _.activeBreakpoint = targetBreakpoint;
	                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                            _.unslick(targetBreakpoint);
	                        } else {
	                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
	                            if (initial === true) {
	                                _.currentSlide = _.options.initialSlide;
	                            }
	                            _.refresh(initial);
	                        }
	                        triggerBreakpoint = targetBreakpoint;
	                    }
	                } else {
	                    _.activeBreakpoint = targetBreakpoint;
	                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                        _.unslick(targetBreakpoint);
	                    } else {
	                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
	                        if (initial === true) {
	                            _.currentSlide = _.options.initialSlide;
	                        }
	                        _.refresh(initial);
	                    }
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            } else {
	                if (_.activeBreakpoint !== null) {
	                    _.activeBreakpoint = null;
	                    _.options = _.originalSettings;
	                    if (initial === true) {
	                        _.currentSlide = _.options.initialSlide;
	                    }
	                    _.refresh(initial);
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            }
	
	            // only trigger breakpoints during an actual break. not on initialize.
	            if (!initial && triggerBreakpoint !== false) {
	                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	            }
	        }
	    };
	
	    Slick.prototype.changeSlide = function (event, dontAnimate) {
	
	        var _ = this,
	            $target = $(event.currentTarget),
	            indexOffset,
	            slideOffset,
	            unevenOffset;
	
	        // If target is a link, prevent default action.
	        if ($target.is('a')) {
	            event.preventDefault();
	        }
	
	        // If target is not the <li> element (ie: a child), find the <li>.
	        if (!$target.is('li')) {
	            $target = $target.closest('li');
	        }
	
	        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
	        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
	
	        switch (event.data.message) {
	
	            case 'previous':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'next':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'index':
	                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
	
	                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
	                $target.children().trigger('focus');
	                break;
	
	            default:
	                return;
	        }
	    };
	
	    Slick.prototype.checkNavigable = function (index) {
	
	        var _ = this,
	            navigables,
	            prevNavigable;
	
	        navigables = _.getNavigableIndexes();
	        prevNavigable = 0;
	        if (index > navigables[navigables.length - 1]) {
	            index = navigables[navigables.length - 1];
	        } else {
	            for (var n in navigables) {
	                if (index < navigables[n]) {
	                    index = prevNavigable;
	                    break;
	                }
	                prevNavigable = navigables[n];
	            }
	        }
	
	        return index;
	    };
	
	    Slick.prototype.cleanUpEvents = function () {
	
	        var _ = this;
	
	        if (_.options.dots && _.$dots !== null) {
	
	            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	        }
	
	        _.$slider.off('focus.slick blur.slick');
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
	        }
	
	        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
	        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
	        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
	        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
	
	        _.$list.off('click.slick', _.clickHandler);
	
	        $(document).off(_.visibilityChange, _.visibility);
	
	        _.cleanUpSlideEvents();
	
	        if (_.options.accessibility === true) {
	            _.$list.off('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	        }
	
	        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
	
	        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
	
	        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
	
	        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
	    };
	
	    Slick.prototype.cleanUpSlideEvents = function () {
	
	        var _ = this;
	
	        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
	        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	    };
	
	    Slick.prototype.cleanUpRows = function () {
	
	        var _ = this,
	            originalSlides;
	
	        if (_.options.rows > 1) {
	            originalSlides = _.$slides.children().children();
	            originalSlides.removeAttr('style');
	            _.$slider.empty().append(originalSlides);
	        }
	    };
	
	    Slick.prototype.clickHandler = function (event) {
	
	        var _ = this;
	
	        if (_.shouldClick === false) {
	            event.stopImmediatePropagation();
	            event.stopPropagation();
	            event.preventDefault();
	        }
	    };
	
	    Slick.prototype.destroy = function (refresh) {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        _.touchObject = {};
	
	        _.cleanUpEvents();
	
	        $('.slick-cloned', _.$slider).detach();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	        if (_.$prevArrow && _.$prevArrow.length) {
	
	            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
	
	            if (_.htmlExpr.test(_.options.prevArrow)) {
	                _.$prevArrow.remove();
	            }
	        }
	
	        if (_.$nextArrow && _.$nextArrow.length) {
	
	            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
	
	            if (_.htmlExpr.test(_.options.nextArrow)) {
	                _.$nextArrow.remove();
	            }
	        }
	
	        if (_.$slides) {
	
	            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
	                $(this).attr('style', $(this).data('originalStyling'));
	            });
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slideTrack.detach();
	
	            _.$list.detach();
	
	            _.$slider.append(_.$slides);
	        }
	
	        _.cleanUpRows();
	
	        _.$slider.removeClass('slick-slider');
	        _.$slider.removeClass('slick-initialized');
	        _.$slider.removeClass('slick-dotted');
	
	        _.unslicked = true;
	
	        if (!refresh) {
	            _.$slider.trigger('destroy', [_]);
	        }
	    };
	
	    Slick.prototype.disableTransition = function (slide) {
	
	        var _ = this,
	            transition = {};
	
	        transition[_.transitionType] = '';
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	    };
	
	    Slick.prototype.fadeSlide = function (slideIndex, callback) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).css({
	                zIndex: _.options.zIndex
	            });
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 1
	            }, _.options.speed, _.options.easing, callback);
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 1,
	                zIndex: _.options.zIndex
	            });
	
	            if (callback) {
	                setTimeout(function () {
	
	                    _.disableTransition(slideIndex);
	
	                    callback.call();
	                }, _.options.speed);
	            }
	        }
	    };
	
	    Slick.prototype.fadeSlideOut = function (slideIndex) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            }, _.options.speed, _.options.easing);
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            });
	        }
	    };
	
	    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
	
	        var _ = this;
	
	        if (filter !== null) {
	
	            _.$slidesCache = _.$slides;
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
	
	            _.reinit();
	        }
	    };
	
	    Slick.prototype.focusHandler = function () {
	
	        var _ = this;
	
	        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
	
	            event.stopImmediatePropagation();
	            var $sf = $(this);
	
	            setTimeout(function () {
	
	                if (_.options.pauseOnFocus) {
	                    _.focussed = $sf.is(':focus');
	                    _.autoPlay();
	                }
	            }, 0);
	        });
	    };
	
	    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
	
	        var _ = this;
	        return _.currentSlide;
	    };
	
	    Slick.prototype.getDotCount = function () {
	
	        var _ = this;
	
	        var breakPoint = 0;
	        var counter = 0;
	        var pagerQty = 0;
	
	        if (_.options.infinite === true) {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        } else if (_.options.centerMode === true) {
	            pagerQty = _.slideCount;
	        } else if (!_.options.asNavFor) {
	            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
	        } else {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        }
	
	        return pagerQty - 1;
	    };
	
	    Slick.prototype.getLeft = function (slideIndex) {
	
	        var _ = this,
	            targetLeft,
	            verticalHeight,
	            verticalOffset = 0,
	            targetSlide;
	
	        _.slideOffset = 0;
	        verticalHeight = _.$slides.first().outerHeight(true);
	
	        if (_.options.infinite === true) {
	            if (_.slideCount > _.options.slidesToShow) {
	                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
	                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
	            }
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	                    if (slideIndex > _.slideCount) {
	                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
	                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
	                    } else {
	                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
	                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
	                    }
	                }
	            }
	        } else {
	            if (slideIndex + _.options.slidesToShow > _.slideCount) {
	                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
	                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
	            }
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = 0;
	            verticalOffset = 0;
	        }
	
	        if (_.options.centerMode === true && _.options.infinite === true) {
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	        } else if (_.options.centerMode === true) {
	            _.slideOffset = 0;
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	        }
	
	        if (_.options.vertical === false) {
	            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
	        } else {
	            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
	        }
	
	        if (_.options.variableWidth === true) {
	
	            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	            } else {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	            }
	
	            if (_.options.rtl === true) {
	                if (targetSlide[0]) {
	                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                } else {
	                    targetLeft = 0;
	                }
	            } else {
	                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	            }
	
	            if (_.options.centerMode === true) {
	                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	                } else {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	                }
	
	                if (_.options.rtl === true) {
	                    if (targetSlide[0]) {
	                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                    } else {
	                        targetLeft = 0;
	                    }
	                } else {
	                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	                }
	
	                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	            }
	        }
	
	        return targetLeft;
	    };
	
	    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
	
	        var _ = this;
	
	        return _.options[option];
	    };
	
	    Slick.prototype.getNavigableIndexes = function () {
	
	        var _ = this,
	            breakPoint = 0,
	            counter = 0,
	            indexes = [],
	            max;
	
	        if (_.options.infinite === false) {
	            max = _.slideCount;
	        } else {
	            breakPoint = _.options.slidesToScroll * -1;
	            counter = _.options.slidesToScroll * -1;
	            max = _.slideCount * 2;
	        }
	
	        while (breakPoint < max) {
	            indexes.push(breakPoint);
	            breakPoint = counter + _.options.slidesToScroll;
	            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }
	
	        return indexes;
	    };
	
	    Slick.prototype.getSlick = function () {
	
	        return this;
	    };
	
	    Slick.prototype.getSlideCount = function () {
	
	        var _ = this,
	            slidesTraversed,
	            swipedSlide,
	            centerOffset;
	
	        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
	
	        if (_.options.swipeToSlide === true) {
	            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
	                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
	                    swipedSlide = slide;
	                    return false;
	                }
	            });
	
	            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
	
	            return slidesTraversed;
	        } else {
	            return _.options.slidesToScroll;
	        }
	    };
	
	    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: parseInt(slide)
	            }
	        }, dontAnimate);
	    };
	
	    Slick.prototype.init = function (creation) {
	
	        var _ = this;
	
	        if (!$(_.$slider).hasClass('slick-initialized')) {
	
	            $(_.$slider).addClass('slick-initialized');
	
	            _.buildRows();
	            _.buildOut();
	            _.setProps();
	            _.startLoad();
	            _.loadSlider();
	            _.initializeEvents();
	            _.updateArrows();
	            _.updateDots();
	            _.checkResponsive(true);
	            _.focusHandler();
	        }
	
	        if (creation) {
	            _.$slider.trigger('init', [_]);
	        }
	
	        if (_.options.accessibility === true) {
	            _.initADA();
	        }
	
	        if (_.options.autoplay) {
	
	            _.paused = false;
	            _.autoPlay();
	        }
	    };
	
	    Slick.prototype.initADA = function () {
	        var _ = this;
	        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
	            'aria-hidden': 'true',
	            'tabindex': '-1'
	        }).find('a, input, button, select').attr({
	            'tabindex': '-1'
	        });
	
	        _.$slideTrack.attr('role', 'listbox');
	
	        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
	            $(this).attr({
	                'role': 'option',
	                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
	            });
	        });
	
	        if (_.$dots !== null) {
	            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
	                $(this).attr({
	                    'role': 'presentation',
	                    'aria-selected': 'false',
	                    'aria-controls': 'navigation' + _.instanceUid + i + '',
	                    'id': 'slick-slide' + _.instanceUid + i + ''
	                });
	            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
	        }
	        _.activateADA();
	    };
	
	    Slick.prototype.initArrowEvents = function () {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow.off('click.slick').on('click.slick', {
	                message: 'previous'
	            }, _.changeSlide);
	            _.$nextArrow.off('click.slick').on('click.slick', {
	                message: 'next'
	            }, _.changeSlide);
	        }
	    };
	
	    Slick.prototype.initDotEvents = function () {
	
	        var _ = this;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).on('click.slick', {
	                message: 'index'
	            }, _.changeSlide);
	        }
	
	        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
	
	            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	        }
	    };
	
	    Slick.prototype.initSlideEvents = function () {
	
	        var _ = this;
	
	        if (_.options.pauseOnHover) {
	
	            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
	            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	        }
	    };
	
	    Slick.prototype.initializeEvents = function () {
	
	        var _ = this;
	
	        _.initArrowEvents();
	
	        _.initDotEvents();
	        _.initSlideEvents();
	
	        _.$list.on('touchstart.slick mousedown.slick', {
	            action: 'start'
	        }, _.swipeHandler);
	        _.$list.on('touchmove.slick mousemove.slick', {
	            action: 'move'
	        }, _.swipeHandler);
	        _.$list.on('touchend.slick mouseup.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	        _.$list.on('touchcancel.slick mouseleave.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	
	        _.$list.on('click.slick', _.clickHandler);
	
	        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
	
	        if (_.options.accessibility === true) {
	            _.$list.on('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
	
	        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
	
	        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
	
	        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
	    };
	
	    Slick.prototype.initUI = function () {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.show();
	            _.$nextArrow.show();
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.show();
	        }
	    };
	
	    Slick.prototype.keyHandler = function (event) {
	
	        var _ = this;
	        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	            if (event.keyCode === 37 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'next' : 'previous'
	                    }
	                });
	            } else if (event.keyCode === 39 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'previous' : 'next'
	                    }
	                });
	            }
	        }
	    };
	
	    Slick.prototype.lazyLoad = function () {
	
	        var _ = this,
	            loadRange,
	            cloneRange,
	            rangeStart,
	            rangeEnd;
	
	        function loadImages(imagesScope) {
	
	            $('img[data-lazy]', imagesScope).each(function () {
	
	                var image = $(this),
	                    imageSource = $(this).attr('data-lazy'),
	                    imageToLoad = document.createElement('img');
	
	                imageToLoad.onload = function () {
	
	                    image.animate({ opacity: 0 }, 100, function () {
	                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
	                            image.removeAttr('data-lazy').removeClass('slick-loading');
	                        });
	                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	                    });
	                };
	
	                imageToLoad.onerror = function () {
	
	                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
	
	                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
	                };
	
	                imageToLoad.src = imageSource;
	            });
	        }
	
	        if (_.options.centerMode === true) {
	            if (_.options.infinite === true) {
	                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	                rangeEnd = rangeStart + _.options.slidesToShow + 2;
	            } else {
	                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	            }
	        } else {
	            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
	            if (_.options.fade === true) {
	                if (rangeStart > 0) rangeStart--;
	                if (rangeEnd <= _.slideCount) rangeEnd++;
	            }
	        }
	
	        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
	        loadImages(loadRange);
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-slide');
	            loadImages(cloneRange);
	        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	            loadImages(cloneRange);
	        } else if (_.currentSlide === 0) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	            loadImages(cloneRange);
	        }
	    };
	
	    Slick.prototype.loadSlider = function () {
	
	        var _ = this;
	
	        _.setPosition();
	
	        _.$slideTrack.css({
	            opacity: 1
	        });
	
	        _.$slider.removeClass('slick-loading');
	
	        _.initUI();
	
	        if (_.options.lazyLoad === 'progressive') {
	            _.progressiveLazyLoad();
	        }
	    };
	
	    Slick.prototype.next = Slick.prototype.slickNext = function () {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'next'
	            }
	        });
	    };
	
	    Slick.prototype.orientationChange = function () {
	
	        var _ = this;
	
	        _.checkResponsive();
	        _.setPosition();
	    };
	
	    Slick.prototype.pause = Slick.prototype.slickPause = function () {
	
	        var _ = this;
	
	        _.autoPlayClear();
	        _.paused = true;
	    };
	
	    Slick.prototype.play = Slick.prototype.slickPlay = function () {
	
	        var _ = this;
	
	        _.autoPlay();
	        _.options.autoplay = true;
	        _.paused = false;
	        _.focussed = false;
	        _.interrupted = false;
	    };
	
	    Slick.prototype.postSlide = function (index) {
	
	        var _ = this;
	
	        if (!_.unslicked) {
	
	            _.$slider.trigger('afterChange', [_, index]);
	
	            _.animating = false;
	
	            _.setPosition();
	
	            _.swipeLeft = null;
	
	            if (_.options.autoplay) {
	                _.autoPlay();
	            }
	
	            if (_.options.accessibility === true) {
	                _.initADA();
	            }
	        }
	    };
	
	    Slick.prototype.prev = Slick.prototype.slickPrev = function () {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'previous'
	            }
	        });
	    };
	
	    Slick.prototype.preventDefault = function (event) {
	
	        event.preventDefault();
	    };
	
	    Slick.prototype.progressiveLazyLoad = function (tryCount) {
	
	        tryCount = tryCount || 1;
	
	        var _ = this,
	            $imgsToLoad = $('img[data-lazy]', _.$slider),
	            image,
	            imageSource,
	            imageToLoad;
	
	        if ($imgsToLoad.length) {
	
	            image = $imgsToLoad.first();
	            imageSource = image.attr('data-lazy');
	            imageToLoad = document.createElement('img');
	
	            imageToLoad.onload = function () {
	
	                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
	
	                if (_.options.adaptiveHeight === true) {
	                    _.setPosition();
	                }
	
	                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	                _.progressiveLazyLoad();
	            };
	
	            imageToLoad.onerror = function () {
	
	                if (tryCount < 3) {
	
	                    /**
	                     * try to load the image 3 times,
	                     * leave a slight delay so we don't get
	                     * servers blocking the request.
	                     */
	                    setTimeout(function () {
	                        _.progressiveLazyLoad(tryCount + 1);
	                    }, 500);
	                } else {
	
	                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
	
	                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
	
	                    _.progressiveLazyLoad();
	                }
	            };
	
	            imageToLoad.src = imageSource;
	        } else {
	
	            _.$slider.trigger('allImagesLoaded', [_]);
	        }
	    };
	
	    Slick.prototype.refresh = function (initializing) {
	
	        var _ = this,
	            currentSlide,
	            lastVisibleIndex;
	
	        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
	
	        // in non-infinite sliders, we don't want to go past the
	        // last visible index.
	        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
	            _.currentSlide = lastVisibleIndex;
	        }
	
	        // if less slides than to show, go to start.
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }
	
	        currentSlide = _.currentSlide;
	
	        _.destroy(true);
	
	        $.extend(_, _.initials, { currentSlide: currentSlide });
	
	        _.init();
	
	        if (!initializing) {
	
	            _.changeSlide({
	                data: {
	                    message: 'index',
	                    index: currentSlide
	                }
	            }, false);
	        }
	    };
	
	    Slick.prototype.registerBreakpoints = function () {
	
	        var _ = this,
	            breakpoint,
	            currentBreakpoint,
	            l,
	            responsiveSettings = _.options.responsive || null;
	
	        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
	
	            _.respondTo = _.options.respondTo || 'window';
	
	            for (breakpoint in responsiveSettings) {
	
	                l = _.breakpoints.length - 1;
	                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
	
	                if (responsiveSettings.hasOwnProperty(breakpoint)) {
	
	                    // loop through the breakpoints and cut out any existing
	                    // ones with the same breakpoint number, we don't want dupes.
	                    while (l >= 0) {
	                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
	                            _.breakpoints.splice(l, 1);
	                        }
	                        l--;
	                    }
	
	                    _.breakpoints.push(currentBreakpoint);
	                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
	                }
	            }
	
	            _.breakpoints.sort(function (a, b) {
	                return _.options.mobileFirst ? a - b : b - a;
	            });
	        }
	    };
	
	    Slick.prototype.reinit = function () {
	
	        var _ = this;
	
	        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }
	
	        _.registerBreakpoints();
	
	        _.setProps();
	        _.setupInfinite();
	        _.buildArrows();
	        _.updateArrows();
	        _.initArrowEvents();
	        _.buildDots();
	        _.updateDots();
	        _.initDotEvents();
	        _.cleanUpSlideEvents();
	        _.initSlideEvents();
	
	        _.checkResponsive(false, true);
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        _.setPosition();
	        _.focusHandler();
	
	        _.paused = !_.options.autoplay;
	        _.autoPlay();
	
	        _.$slider.trigger('reInit', [_]);
	    };
	
	    Slick.prototype.resize = function () {
	
	        var _ = this;
	
	        if ($(window).width() !== _.windowWidth) {
	            clearTimeout(_.windowDelay);
	            _.windowDelay = window.setTimeout(function () {
	                _.windowWidth = $(window).width();
	                _.checkResponsive();
	                if (!_.unslicked) {
	                    _.setPosition();
	                }
	            }, 50);
	        }
	    };
	
	    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
	
	        var _ = this;
	
	        if (typeof index === 'boolean') {
	            removeBefore = index;
	            index = removeBefore === true ? 0 : _.slideCount - 1;
	        } else {
	            index = removeBefore === true ? --index : index;
	        }
	
	        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	            return false;
	        }
	
	        _.unload();
	
	        if (removeAll === true) {
	            _.$slideTrack.children().remove();
	        } else {
	            _.$slideTrack.children(this.options.slide).eq(index).remove();
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	    };
	
	    Slick.prototype.setCSS = function (position) {
	
	        var _ = this,
	            positionProps = {},
	            x,
	            y;
	
	        if (_.options.rtl === true) {
	            position = -position;
	        }
	        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
	
	        positionProps[_.positionProp] = position;
	
	        if (_.transformsEnabled === false) {
	            _.$slideTrack.css(positionProps);
	        } else {
	            positionProps = {};
	            if (_.cssTransitions === false) {
	                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
	                _.$slideTrack.css(positionProps);
	            } else {
	                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
	                _.$slideTrack.css(positionProps);
	            }
	        }
	    };
	
	    Slick.prototype.setDimensions = function () {
	
	        var _ = this;
	
	        if (_.options.vertical === false) {
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: '0px ' + _.options.centerPadding
	                });
	            }
	        } else {
	            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: _.options.centerPadding + ' 0px'
	                });
	            }
	        }
	
	        _.listWidth = _.$list.width();
	        _.listHeight = _.$list.height();
	
	        if (_.options.vertical === false && _.options.variableWidth === false) {
	            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
	            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
	        } else if (_.options.variableWidth === true) {
	            _.$slideTrack.width(5000 * _.slideCount);
	        } else {
	            _.slideWidth = Math.ceil(_.listWidth);
	            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
	        }
	
	        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
	        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
	    };
	
	    Slick.prototype.setFade = function () {
	
	        var _ = this,
	            targetLeft;
	
	        _.$slides.each(function (index, element) {
	            targetLeft = _.slideWidth * index * -1;
	            if (_.options.rtl === true) {
	                $(element).css({
	                    position: 'relative',
	                    right: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            } else {
	                $(element).css({
	                    position: 'relative',
	                    left: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            }
	        });
	
	        _.$slides.eq(_.currentSlide).css({
	            zIndex: _.options.zIndex - 1,
	            opacity: 1
	        });
	    };
	
	    Slick.prototype.setHeight = function () {
	
	        var _ = this;
	
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.css('height', targetHeight);
	        }
	    };
	
	    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
	
	        /**
	         * accepts arguments in format of:
	         *
	         *  - for changing a single option's value:
	         *     .slick("setOption", option, value, refresh )
	         *
	         *  - for changing a set of responsive options:
	         *     .slick("setOption", 'responsive', [{}, ...], refresh )
	         *
	         *  - for updating multiple values at once (not responsive)
	         *     .slick("setOption", { 'option': value, ... }, refresh )
	         */
	
	        var _ = this,
	            l,
	            item,
	            option,
	            value,
	            refresh = false,
	            type;
	
	        if ($.type(arguments[0]) === 'object') {
	
	            option = arguments[0];
	            refresh = arguments[1];
	            type = 'multiple';
	        } else if ($.type(arguments[0]) === 'string') {
	
	            option = arguments[0];
	            value = arguments[1];
	            refresh = arguments[2];
	
	            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
	
	                type = 'responsive';
	            } else if (typeof arguments[1] !== 'undefined') {
	
	                type = 'single';
	            }
	        }
	
	        if (type === 'single') {
	
	            _.options[option] = value;
	        } else if (type === 'multiple') {
	
	            $.each(option, function (opt, val) {
	
	                _.options[opt] = val;
	            });
	        } else if (type === 'responsive') {
	
	            for (item in value) {
	
	                if ($.type(_.options.responsive) !== 'array') {
	
	                    _.options.responsive = [value[item]];
	                } else {
	
	                    l = _.options.responsive.length - 1;
	
	                    // loop through the responsive object and splice out duplicates.
	                    while (l >= 0) {
	
	                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
	
	                            _.options.responsive.splice(l, 1);
	                        }
	
	                        l--;
	                    }
	
	                    _.options.responsive.push(value[item]);
	                }
	            }
	        }
	
	        if (refresh) {
	
	            _.unload();
	            _.reinit();
	        }
	    };
	
	    Slick.prototype.setPosition = function () {
	
	        var _ = this;
	
	        _.setDimensions();
	
	        _.setHeight();
	
	        if (_.options.fade === false) {
	            _.setCSS(_.getLeft(_.currentSlide));
	        } else {
	            _.setFade();
	        }
	
	        _.$slider.trigger('setPosition', [_]);
	    };
	
	    Slick.prototype.setProps = function () {
	
	        var _ = this,
	            bodyStyle = document.body.style;
	
	        _.positionProp = _.options.vertical === true ? 'top' : 'left';
	
	        if (_.positionProp === 'top') {
	            _.$slider.addClass('slick-vertical');
	        } else {
	            _.$slider.removeClass('slick-vertical');
	        }
	
	        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
	            if (_.options.useCSS === true) {
	                _.cssTransitions = true;
	            }
	        }
	
	        if (_.options.fade) {
	            if (typeof _.options.zIndex === 'number') {
	                if (_.options.zIndex < 3) {
	                    _.options.zIndex = 3;
	                }
	            } else {
	                _.options.zIndex = _.defaults.zIndex;
	            }
	        }
	
	        if (bodyStyle.OTransform !== undefined) {
	            _.animType = 'OTransform';
	            _.transformType = '-o-transform';
	            _.transitionType = 'OTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.MozTransform !== undefined) {
	            _.animType = 'MozTransform';
	            _.transformType = '-moz-transform';
	            _.transitionType = 'MozTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.webkitTransform !== undefined) {
	            _.animType = 'webkitTransform';
	            _.transformType = '-webkit-transform';
	            _.transitionType = 'webkitTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.msTransform !== undefined) {
	            _.animType = 'msTransform';
	            _.transformType = '-ms-transform';
	            _.transitionType = 'msTransition';
	            if (bodyStyle.msTransform === undefined) _.animType = false;
	        }
	        if (bodyStyle.transform !== undefined && _.animType !== false) {
	            _.animType = 'transform';
	            _.transformType = 'transform';
	            _.transitionType = 'transition';
	        }
	        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
	    };
	
	    Slick.prototype.setSlideClasses = function (index) {
	
	        var _ = this,
	            centerOffset,
	            allSlides,
	            indexOffset,
	            remainder;
	
	        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
	
	        _.$slides.eq(index).addClass('slick-current');
	
	        if (_.options.centerMode === true) {
	
	            centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	            if (_.options.infinite === true) {
	
	                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
	
	                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
	                } else {
	
	                    indexOffset = _.options.slidesToShow + index;
	                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
	                }
	
	                if (index === 0) {
	
	                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
	                } else if (index === _.slideCount - 1) {
	
	                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
	                }
	            }
	
	            _.$slides.eq(index).addClass('slick-center');
	        } else {
	
	            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
	
	                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	            } else if (allSlides.length <= _.options.slidesToShow) {
	
	                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
	            } else {
	
	                remainder = _.slideCount % _.options.slidesToShow;
	                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
	
	                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
	
	                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
	                } else {
	
	                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	                }
	            }
	        }
	
	        if (_.options.lazyLoad === 'ondemand') {
	            _.lazyLoad();
	        }
	    };
	
	    Slick.prototype.setupInfinite = function () {
	
	        var _ = this,
	            i,
	            slideIndex,
	            infiniteCount;
	
	        if (_.options.fade === true) {
	            _.options.centerMode = false;
	        }
	
	        if (_.options.infinite === true && _.options.fade === false) {
	
	            slideIndex = null;
	
	            if (_.slideCount > _.options.slidesToShow) {
	
	                if (_.options.centerMode === true) {
	                    infiniteCount = _.options.slidesToShow + 1;
	                } else {
	                    infiniteCount = _.options.slidesToShow;
	                }
	
	                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
	                    slideIndex = i - 1;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                for (i = 0; i < infiniteCount; i += 1) {
	                    slideIndex = i;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
	                    $(this).attr('id', '');
	                });
	            }
	        }
	    };
	
	    Slick.prototype.interrupt = function (toggle) {
	
	        var _ = this;
	
	        if (!toggle) {
	            _.autoPlay();
	        }
	        _.interrupted = toggle;
	    };
	
	    Slick.prototype.selectHandler = function (event) {
	
	        var _ = this;
	
	        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
	
	        var index = parseInt(targetElement.attr('data-slick-index'));
	
	        if (!index) index = 0;
	
	        if (_.slideCount <= _.options.slidesToShow) {
	
	            _.setSlideClasses(index);
	            _.asNavFor(index);
	            return;
	        }
	
	        _.slideHandler(index);
	    };
	
	    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
	
	        var targetSlide,
	            animSlide,
	            oldSlide,
	            slideLeft,
	            targetLeft = null,
	            _ = this,
	            navTarget;
	
	        sync = sync || false;
	
	        if (_.animating === true && _.options.waitForAnimate === true) {
	            return;
	        }
	
	        if (_.options.fade === true && _.currentSlide === index) {
	            return;
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            return;
	        }
	
	        if (sync === false) {
	            _.asNavFor(index);
	        }
	
	        targetSlide = index;
	        targetLeft = _.getLeft(targetSlide);
	        slideLeft = _.getLeft(_.currentSlide);
	
	        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
	
	        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function () {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function () {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        }
	
	        if (_.options.autoplay) {
	            clearInterval(_.autoPlayTimer);
	        }
	
	        if (targetSlide < 0) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
	            } else {
	                animSlide = _.slideCount + targetSlide;
	            }
	        } else if (targetSlide >= _.slideCount) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = 0;
	            } else {
	                animSlide = targetSlide - _.slideCount;
	            }
	        } else {
	            animSlide = targetSlide;
	        }
	
	        _.animating = true;
	
	        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
	
	        oldSlide = _.currentSlide;
	        _.currentSlide = animSlide;
	
	        _.setSlideClasses(_.currentSlide);
	
	        if (_.options.asNavFor) {
	
	            navTarget = _.getNavTarget();
	            navTarget = navTarget.slick('getSlick');
	
	            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
	                navTarget.setSlideClasses(_.currentSlide);
	            }
	        }
	
	        _.updateDots();
	        _.updateArrows();
	
	        if (_.options.fade === true) {
	            if (dontAnimate !== true) {
	
	                _.fadeSlideOut(oldSlide);
	
	                _.fadeSlide(animSlide, function () {
	                    _.postSlide(animSlide);
	                });
	            } else {
	                _.postSlide(animSlide);
	            }
	            _.animateHeight();
	            return;
	        }
	
	        if (dontAnimate !== true) {
	            _.animateSlide(targetLeft, function () {
	                _.postSlide(animSlide);
	            });
	        } else {
	            _.postSlide(animSlide);
	        }
	    };
	
	    Slick.prototype.startLoad = function () {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.hide();
	            _.$nextArrow.hide();
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.hide();
	        }
	
	        _.$slider.addClass('slick-loading');
	    };
	
	    Slick.prototype.swipeDirection = function () {
	
	        var xDist,
	            yDist,
	            r,
	            swipeAngle,
	            _ = this;
	
	        xDist = _.touchObject.startX - _.touchObject.curX;
	        yDist = _.touchObject.startY - _.touchObject.curY;
	        r = Math.atan2(yDist, xDist);
	
	        swipeAngle = Math.round(r * 180 / Math.PI);
	        if (swipeAngle < 0) {
	            swipeAngle = 360 - Math.abs(swipeAngle);
	        }
	
	        if (swipeAngle <= 45 && swipeAngle >= 0) {
	            return _.options.rtl === false ? 'left' : 'right';
	        }
	        if (swipeAngle <= 360 && swipeAngle >= 315) {
	            return _.options.rtl === false ? 'left' : 'right';
	        }
	        if (swipeAngle >= 135 && swipeAngle <= 225) {
	            return _.options.rtl === false ? 'right' : 'left';
	        }
	        if (_.options.verticalSwiping === true) {
	            if (swipeAngle >= 35 && swipeAngle <= 135) {
	                return 'down';
	            } else {
	                return 'up';
	            }
	        }
	
	        return 'vertical';
	    };
	
	    Slick.prototype.swipeEnd = function (event) {
	
	        var _ = this,
	            slideCount,
	            direction;
	
	        _.dragging = false;
	        _.interrupted = false;
	        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
	
	        if (_.touchObject.curX === undefined) {
	            return false;
	        }
	
	        if (_.touchObject.edgeHit === true) {
	            _.$slider.trigger('edge', [_, _.swipeDirection()]);
	        }
	
	        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
	
	            direction = _.swipeDirection();
	
	            switch (direction) {
	
	                case 'left':
	                case 'down':
	
	                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
	
	                    _.currentDirection = 0;
	
	                    break;
	
	                case 'right':
	                case 'up':
	
	                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
	
	                    _.currentDirection = 1;
	
	                    break;
	
	                default:
	
	            }
	
	            if (direction != 'vertical') {
	
	                _.slideHandler(slideCount);
	                _.touchObject = {};
	                _.$slider.trigger('swipe', [_, direction]);
	            }
	        } else {
	
	            if (_.touchObject.startX !== _.touchObject.curX) {
	
	                _.slideHandler(_.currentSlide);
	                _.touchObject = {};
	            }
	        }
	    };
	
	    Slick.prototype.swipeHandler = function (event) {
	
	        var _ = this;
	
	        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
	            return;
	        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	            return;
	        }
	
	        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
	
	        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
	        }
	
	        switch (event.data.action) {
	
	            case 'start':
	                _.swipeStart(event);
	                break;
	
	            case 'move':
	                _.swipeMove(event);
	                break;
	
	            case 'end':
	                _.swipeEnd(event);
	                break;
	
	        }
	    };
	
	    Slick.prototype.swipeMove = function (event) {
	
	        var _ = this,
	            edgeWasHit = false,
	            curLeft,
	            swipeDirection,
	            swipeLength,
	            positionOffset,
	            touches;
	
	        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
	
	        if (!_.dragging || touches && touches.length !== 1) {
	            return false;
	        }
	
	        curLeft = _.getLeft(_.currentSlide);
	
	        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
	
	        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
	        }
	
	        swipeDirection = _.swipeDirection();
	
	        if (swipeDirection === 'vertical') {
	            return;
	        }
	
	        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	            event.preventDefault();
	        }
	
	        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
	        if (_.options.verticalSwiping === true) {
	            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	        }
	
	        swipeLength = _.touchObject.swipeLength;
	
	        _.touchObject.edgeHit = false;
	
	        if (_.options.infinite === false) {
	            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
	                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	                _.touchObject.edgeHit = true;
	            }
	        }
	
	        if (_.options.vertical === false) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        } else {
	            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
	        }
	        if (_.options.verticalSwiping === true) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        }
	
	        if (_.options.fade === true || _.options.touchMove === false) {
	            return false;
	        }
	
	        if (_.animating === true) {
	            _.swipeLeft = null;
	            return false;
	        }
	
	        _.setCSS(_.swipeLeft);
	    };
	
	    Slick.prototype.swipeStart = function (event) {
	
	        var _ = this,
	            touches;
	
	        _.interrupted = true;
	
	        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	            _.touchObject = {};
	            return false;
	        }
	
	        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	            touches = event.originalEvent.touches[0];
	        }
	
	        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
	
	        _.dragging = true;
	    };
	
	    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
	
	        var _ = this;
	
	        if (_.$slidesCache !== null) {
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.appendTo(_.$slideTrack);
	
	            _.reinit();
	        }
	    };
	
	    Slick.prototype.unload = function () {
	
	        var _ = this;
	
	        $('.slick-cloned', _.$slider).remove();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
	            _.$prevArrow.remove();
	        }
	
	        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
	            _.$nextArrow.remove();
	        }
	
	        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
	    };
	
	    Slick.prototype.unslick = function (fromBreakpoint) {
	
	        var _ = this;
	        _.$slider.trigger('unslick', [_, fromBreakpoint]);
	        _.destroy();
	    };
	
	    Slick.prototype.updateArrows = function () {
	
	        var _ = this,
	            centerOffset;
	
	        centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
	
	            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            if (_.currentSlide === 0) {
	
	                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            }
	        }
	    };
	
	    Slick.prototype.updateDots = function () {
	
	        var _ = this;
	
	        if (_.$dots !== null) {
	
	            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
	
	            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
	        }
	    };
	
	    Slick.prototype.visibility = function () {
	
	        var _ = this;
	
	        if (_.options.autoplay) {
	
	            if (document[_.hidden]) {
	
	                _.interrupted = true;
	            } else {
	
	                _.interrupted = false;
	            }
	        }
	    };
	
	    $.fn.slick = function () {
	        var _ = this,
	            opt = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            l = _.length,
	            i,
	            ret;
	        for (i = 0; i < l; i++) {
	            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
	            if (typeof ret != 'undefined') return ret;
	        }
	        return _;
	    };
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright Year
	 */
	
	var element = document.querySelector('.year'),
	    year = new Date().getFullYear();
	
	element.innerHTML = ' ' + year + ' ';

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Parallax Scroll
	 */
	
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
	
	function parallaxScroll() {
	
	  var windowOffset = document.body.scrollTop;
	
	  var lastPosition = -1;
	  if (lastPosition == windowOffset) {
	
	    requestAnimationFrame(parallaxScroll);
	    return false;
	  } else lastPosition = windowOffset;
	
	  var parallaxElements = document.querySelectorAll('[data-parallax]');
	
	  var i;
	  for (i = 0; i < parallaxElements.length; i++) {
	
	    var el = parallaxElements[i];
	    var parent = el.parentNode;
	
	    var parentHeight = parent.getBoundingClientRect().height;
	    var parentOffset = parent.getBoundingClientRect().top + parentHeight / 2;
	    var finalOffset = window.innerHeight / 2 - parentOffset;
	    var translate = finalOffset * el.getAttribute('data-parallax');
	
	    el.style.transform = 'translate3d(0,' + translate.toFixed(1) + 'px,0)';
	  }
	
	  requestAnimationFrame(parallaxScroll);
	}
	
	parallaxScroll();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	$('.multipleItems').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  fade: false,
	  cssEase: 'linear',
	  responsive: [{
	    breakpoint: 768,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 2
	    }
	  }, {
	    breakpoint: 480,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }
	  }]
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjZkMjNhOTY5NGVkYjRlMWQ4YmM/MzdlMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZW5kb3JzL3NsaWNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXNob3cuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImZhY3RvcnkiLCJkZWZpbmUiLCJleHBvcnRzIiwibW9kdWxlIiwialF1ZXJ5IiwiJCIsIlNsaWNrIiwid2luZG93IiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJfIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwidGV4dCIsImRvdHMiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlYXNpbmciLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwiZG9jdW1lbnQiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImluaXQiLCJwcm90b3R5cGUiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiY2hpbGRyZW4iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWNrIiwic2xpZGVIYW5kbGVyIiwidHJhbnNpdGlvbiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVG8iLCJidWlsZEFycm93cyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImFkZCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwibiIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJyZW1vdmUiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImZsb29yIiwib2Zmc2V0TGVmdCIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJtYXgiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwicGFyc2VJbnQiLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwic2hvdyIsInRhZ05hbWUiLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInNsaWNlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJsIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvbiIsInBvc2l0aW9uUHJvcHMiLCJ4IiwieSIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwib2Zmc2V0Iiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJhcmd1bWVudHMiLCJvcHQiLCJ2YWwiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJoaWRlIiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0IiwiciIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwicm91bmQiLCJQSSIsInN3aXBlRW5kIiwic3dpcGVMZW5ndGgiLCJlZGdlSGl0IiwibWluU3dpcGUiLCJpbmRleE9mIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVha3BvaW50IiwiZm4iLCJhcmdzIiwiQXJyYXkiLCJyZXQiLCJhcHBseSIsInF1ZXJ5U2VsZWN0b3IiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaW5uZXJIVE1MIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmFsbGF4U2Nyb2xsIiwid2luZG93T2Zmc2V0Iiwic2Nyb2xsVG9wIiwibGFzdFBvc2l0aW9uIiwicGFyYWxsYXhFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsInBhcmVudE5vZGUiLCJwYXJlbnRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRPZmZzZXQiLCJmaW5hbE9mZnNldCIsImlubmVySGVpZ2h0IiwidHJhbnNsYXRlIiwiZ2V0QXR0cmlidXRlIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxvQkFBQUEsQ0FBUSxDQUFSOztBQUVBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUixFOzs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQyxZQUFTQyxPQUFULEVBQWtCO0FBQ2Y7O0FBQ0EsU0FBSSxJQUFKLEVBQWdEO0FBQzVDQyxTQUFBLGlDQUFP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UCxHQUErQjFTLE1BQXBEO0FBQ0EsU0FBSTJTLGVBQWlCblEsT0FBT2tRLHFCQUFQLEdBQStCcFMsR0FBL0IsR0FBc0NtUyxlQUFhLENBQXhFO0FBQ0EsU0FBSUcsY0FBa0JqYyxPQUFPa2MsV0FBUCxHQUFtQixDQUFwQixHQUF5QkYsWUFBOUM7QUFDQSxTQUFJRyxZQUFpQkYsY0FBY0wsR0FBR1EsWUFBSCxDQUFnQixlQUFoQixDQUFuQzs7QUFFQVIsUUFBR2hGLEtBQUgsQ0FBU1ksU0FBVCxHQUFxQixtQkFBbUIyRSxVQUFVRSxPQUFWLENBQWtCLENBQWxCLENBQW5CLEdBQTJDLE9BQWhFO0FBRUQ7O0FBRURuQix5QkFBdUJJLGNBQXZCO0FBRUQ7O0FBRURBLGtCOzs7Ozs7OztBQzFDQXhiLEdBQUUsZ0JBQUYsRUFBb0I2SyxLQUFwQixDQUEwQjtBQUN4QjVJLGFBQVUsSUFEYztBQUV4QmEsaUJBQWMsQ0FGVTtBQUd4QkMsbUJBQWdCLENBSFE7QUFJeEJyQixTQUFNLElBSmtCO0FBS3hCYixXQUFRLEtBTGdCO0FBTXhCSSxhQUFVLElBTmM7QUFPeEJDLGtCQUFlLElBUFM7QUFReEJhLFNBQU0sS0FSa0I7QUFTeEJWLFlBQVMsUUFUZTtBQVV4Qm9CLGVBQVksQ0FDVjtBQUNFNEssaUJBQVksR0FEZDtBQUVFaE4sZUFBVTtBQUNSeUMscUJBQWMsQ0FETjtBQUVSQyx1QkFBZ0I7QUFGUjtBQUZaLElBRFUsRUFRVjtBQUNFc0ssaUJBQVksR0FEZDtBQUVFaE4sZUFBVTtBQUNSeUMscUJBQWMsQ0FETjtBQUVSQyx1QkFBZ0I7QUFGUjtBQUZaLElBUlU7QUFWWSxFQUExQixFIiwiZmlsZSI6InB1YmxpYy9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNmQyM2E5Njk0ZWRiNGUxZDhiYyIsInJlcXVpcmUoJy4vdmVuZG9ycy9zbGljay5qcycpXHJcblxyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzJylcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3BhcmFsbGF4LmpzJylcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3NsaWRlc2hvdy5qcycpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuNi4wXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yb2xlPVwibm9uZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDEpIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3JlYWR5LnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDEpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyxcbiAgICAgICAgICAgICAgICAnKjpub3QoLnNsaWNrLWFycm93KScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGU7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmF0dHIoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAncm9sZSc6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpICsgJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnbmF2aWdhdGlvbicgKyBfLmluc3RhbmNlVWlkICsgaSArICcnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKS5lbmQoKVxuICAgICAgICAgICAgICAgIC5maW5kKCdidXR0b24nKS5hdHRyKCdyb2xlJywgJ2J1dHRvbicpLmVuZCgpXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2RpdicpLmF0dHIoJ3JvbGUnLCAndG9vbGJhcicpO1xuICAgICAgICB9XG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3JlYWR5LnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoaW5kZXgpO1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXM7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKHN3aXBlRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy92ZW5kb3JzL3NsaWNrLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcclxuICogQ29weXJpZ2h0IFllYXJcclxuICovXHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKSxcclxuICAgICAgeWVhciAgICA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cclxuZWxlbWVudC5pbm5lckhUTUwgPSAnICcgKyB5ZWFyICsgJyAnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzIiwiLyoqXHJcbiAqIFBhcmFsbGF4IFNjcm9sbFxyXG4gKi9cclxuXHJcbmNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuZnVuY3Rpb24gcGFyYWxsYXhTY3JvbGwoKSB7XHJcblxyXG4gIHZhciB3aW5kb3dPZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxyXG5cclxuICB2YXIgbGFzdFBvc2l0aW9uID0gLTFcclxuICBpZiAoIGxhc3RQb3NpdGlvbiA9PSB3aW5kb3dPZmZzZXQgKSB7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhcmFsbGF4U2Nyb2xsKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gIH0gZWxzZSBsYXN0UG9zaXRpb24gPSB3aW5kb3dPZmZzZXRcclxuXHJcbiAgY29uc3QgcGFyYWxsYXhFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4XScpXHJcblxyXG4gIHZhciBpXHJcbiAgZm9yIChpID0gMDsgaSA8IHBhcmFsbGF4RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB2YXIgZWwgICAgID0gcGFyYWxsYXhFbGVtZW50c1tpXVxyXG4gICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGVcclxuXHJcbiAgICB2YXIgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICB2YXIgcGFyZW50T2Zmc2V0ICAgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKHBhcmVudEhlaWdodC8yKVxyXG4gICAgdmFyIGZpbmFsT2Zmc2V0ICAgID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIHBhcmVudE9mZnNldFxyXG4gICAgdmFyIHRyYW5zbGF0ZSAgICAgID0gZmluYWxPZmZzZXQgKiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYWxsYXgnKVxyXG5cclxuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyB0cmFuc2xhdGUudG9GaXhlZCgxKSArICAncHgsMCknXHJcblxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBwYXJhbGxheFNjcm9sbCApXHJcblxyXG59XHJcblxyXG5wYXJhbGxheFNjcm9sbCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvcGFyYWxsYXguanMiLCIkKCcubXVsdGlwbGVJdGVtcycpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgZmFkZTogZmFsc2UsXHJcbiAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzaG93LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==