(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('hi');
var $name = $('#name');
var $email = $('#email');
var $message = $('#message');
var $charges = $('#charges');
var $courtDate = $('#courtDate');
var $phoneNumber = $('#number');
var $preferredContact = $("input[name='contactType']:checked");

$courtDate.on('click', function () {
    $courtDate.attr('type', 'date');
});

$(document).ready(function () {

    $('form#contactForm').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: 'https://formspree.io/info@sondhidefence.ca',
            method: 'POST',
            data: {
                name: $name.val(),
                _replyto: $email.val(),
                message: $message.val(),
                courtCharges: $charges.val(),
                courtDate: $courtDate.val(),
                phoneNumber: $phoneNumber.val(),
                preferredContact: $preferredContact.val()
            },
            dataType: "json",
            success: function success() {
                console.log('form submitted');

                $('div#blackScreen').css('display', 'flex');
                $('div.exit').click(function () {
                    $('div#blackScreen').css('display', 'none');
                });
                // reset form
                $name.attr('placeholder', 'Full Name');
                $email.attr('placeholder', 'Email');
                $message.attr('placeholder', 'Your message');
                $charges.attr('placeholder', 'Charge(s)');
                $courtDate.attr('type', 'text', 'placeholder', 'Court Date');
                $phoneNumber.attr('placeholder', 'Phone Number');
            }
        });
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLElBQUksUUFBUSxFQUFFLE9BQUYsQ0FBWjtBQUNBLElBQUksU0FBUyxFQUFFLFFBQUYsQ0FBYjtBQUNBLElBQUksV0FBVyxFQUFFLFVBQUYsQ0FBZjtBQUNBLElBQUksV0FBVyxFQUFFLFVBQUYsQ0FBZjtBQUNBLElBQUksYUFBYSxFQUFFLFlBQUYsQ0FBakI7QUFDQSxJQUFJLGVBQWUsRUFBRSxTQUFGLENBQW5CO0FBQ0EsSUFBSSxvQkFBb0IsRUFBRSxtQ0FBRixDQUF4Qjs7QUFHQSxXQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXdCLFlBQU07QUFDMUIsZUFBVyxJQUFYLENBQWdCLE1BQWhCLEVBQXdCLE1BQXhCO0FBQ0gsQ0FGRDs7QUFJQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQUs7O0FBRW5CLE1BQUUsa0JBQUYsRUFBc0IsRUFBdEIsQ0FBeUIsUUFBekIsRUFBb0MsVUFBQyxDQUFELEVBQU87QUFDdkMsVUFBRSxjQUFGOztBQUVBLFVBQUUsSUFBRixDQUFPO0FBQ0gsaUJBQUksNENBREQ7QUFFSCxvQkFBUSxNQUZMO0FBR0gsa0JBQU07QUFDRixzQkFBTSxNQUFNLEdBQU4sRUFESjtBQUVGLDBCQUFVLE9BQU8sR0FBUCxFQUZSO0FBR0YseUJBQVMsU0FBUyxHQUFULEVBSFA7QUFJRiw4QkFBYyxTQUFTLEdBQVQsRUFKWjtBQUtGLDJCQUFXLFdBQVcsR0FBWCxFQUxUO0FBTUYsNkJBQWEsYUFBYSxHQUFiLEVBTlg7QUFPRixrQ0FBa0Isa0JBQWtCLEdBQWxCO0FBUGhCLGFBSEg7QUFZSCxzQkFBVSxNQVpQO0FBYUgscUJBQVUsbUJBQU07QUFDWix3QkFBUSxHQUFSLENBQVksZ0JBQVo7O0FBRUEsa0JBQUUsaUJBQUYsRUFBcUIsR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsTUFBcEM7QUFDQSxrQkFBRSxVQUFGLEVBQWMsS0FBZCxDQUFvQixZQUFNO0FBQ3RCLHNCQUFFLGlCQUFGLEVBQXFCLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLE1BQXBDO0FBQ0gsaUJBRkQ7QUFHQTtBQUNBLHNCQUFNLElBQU4sQ0FBVyxhQUFYLEVBQXlCLFdBQXpCO0FBQ0EsdUJBQU8sSUFBUCxDQUFZLGFBQVosRUFBMEIsT0FBMUI7QUFDQSx5QkFBUyxJQUFULENBQWMsYUFBZCxFQUE0QixjQUE1QjtBQUNBLHlCQUFTLElBQVQsQ0FBYyxhQUFkLEVBQTRCLFdBQTVCO0FBQ0EsMkJBQVcsSUFBWCxDQUFnQixNQUFoQixFQUF1QixNQUF2QixFQUE4QixhQUE5QixFQUE0QyxZQUE1QztBQUNBLDZCQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBZ0MsY0FBaEM7QUFDSDtBQTNCRSxTQUFQO0FBNkJILEtBaENEO0FBa0NILENBcENEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnNvbGUubG9nKCdoaScpXG52YXIgJG5hbWUgPSAkKCcjbmFtZScpO1xudmFyICRlbWFpbCA9ICQoJyNlbWFpbCcpO1xudmFyICRtZXNzYWdlID0gJCgnI21lc3NhZ2UnKTtcbnZhciAkY2hhcmdlcyA9ICQoJyNjaGFyZ2VzJyk7XG52YXIgJGNvdXJ0RGF0ZSA9ICQoJyNjb3VydERhdGUnKTtcbnZhciAkcGhvbmVOdW1iZXIgPSAkKCcjbnVtYmVyJyk7XG52YXIgJHByZWZlcnJlZENvbnRhY3QgPSAkKFwiaW5wdXRbbmFtZT0nY29udGFjdFR5cGUnXTpjaGVja2VkXCIpOyAgIFxuXG5cbiRjb3VydERhdGUub24oJ2NsaWNrJywgKCgpID0+IHtcbiAgICAkY291cnREYXRlLmF0dHIoJ3R5cGUnLCAnZGF0ZScpO1xufSkpXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpPT4ge1xuXG4gICAgJCgnZm9ybSNjb250YWN0Rm9ybScpLm9uKCdzdWJtaXQnLCAoKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vaW5mb0Bzb25kaGlkZWZlbmNlLmNhJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6ICRuYW1lLnZhbCgpLFxuICAgICAgICAgICAgICAgIF9yZXBseXRvOiAkZW1haWwudmFsKCksXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJG1lc3NhZ2UudmFsKCksXG4gICAgICAgICAgICAgICAgY291cnRDaGFyZ2VzOiAkY2hhcmdlcy52YWwoKSxcbiAgICAgICAgICAgICAgICBjb3VydERhdGU6ICRjb3VydERhdGUudmFsKCksXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICRwaG9uZU51bWJlci52YWwoKSxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRDb250YWN0OiAkcHJlZmVycmVkQ29udGFjdC52YWwoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtIHN1Ym1pdHRlZCcpO1xuXG4gICAgICAgICAgICAgICAgJCgnZGl2I2JsYWNrU2NyZWVuJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuICAgICAgICAgICAgICAgICQoJ2Rpdi5leGl0JykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCdkaXYjYmxhY2tTY3JlZW4nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgZm9ybVxuICAgICAgICAgICAgICAgICRuYW1lLmF0dHIoJ3BsYWNlaG9sZGVyJywnRnVsbCBOYW1lJyk7XG4gICAgICAgICAgICAgICAgJGVtYWlsLmF0dHIoJ3BsYWNlaG9sZGVyJywnRW1haWwnKTtcbiAgICAgICAgICAgICAgICAkbWVzc2FnZS5hdHRyKCdwbGFjZWhvbGRlcicsJ1lvdXIgbWVzc2FnZScpO1xuICAgICAgICAgICAgICAgICRjaGFyZ2VzLmF0dHIoJ3BsYWNlaG9sZGVyJywnQ2hhcmdlKHMpJyk7XG4gICAgICAgICAgICAgICAgJGNvdXJ0RGF0ZS5hdHRyKCd0eXBlJywndGV4dCcsJ3BsYWNlaG9sZGVyJywnQ291cnQgRGF0ZScpO1xuICAgICAgICAgICAgICAgICRwaG9uZU51bWJlci5hdHRyKCdwbGFjZWhvbGRlcicsJ1Bob25lIE51bWJlcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxuKVxufSkiXX0=
