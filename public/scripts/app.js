(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hiv');

$("form").submit(function (e) {
    console.log('form Submitted');
    $('div#blackScreen').css('display', 'flex');
    $('div.exit').click(function () {
        $('div#blackScreen').css('display', 'none');
    });
    e.preventDefault();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxHQUFSLENBQVksS0FBWjs7QUFFQSxFQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFVBQUMsQ0FBRCxFQUFPO0FBQ3BCLFlBQVEsR0FBUixDQUFZLGdCQUFaO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixHQUFyQixDQUF5QixTQUF6QixFQUFtQyxNQUFuQztBQUNBLE1BQUUsVUFBRixFQUFjLEtBQWQsQ0FBb0IsWUFBTTtBQUN0QixVQUFFLGlCQUFGLEVBQXFCLEdBQXJCLENBQXlCLFNBQXpCLEVBQW1DLE1BQW5DO0FBQ0gsS0FGRDtBQUdBLE1BQUUsY0FBRjtBQUNILENBUEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc29sZS5sb2coJ2hpdicpXG5cbiQoXCJmb3JtXCIpLnN1Ym1pdCgoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmb3JtIFN1Ym1pdHRlZCcpXG4gICAgJCgnZGl2I2JsYWNrU2NyZWVuJykuY3NzKCdkaXNwbGF5JywnZmxleCcpXG4gICAgJCgnZGl2LmV4aXQnKS5jbGljaygoKSA9PiB7XG4gICAgICAgICQoJ2RpdiNibGFja1NjcmVlbicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICB9KVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pIl19
