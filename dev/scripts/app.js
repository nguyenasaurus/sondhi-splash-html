console.log('hi')
var $name = $('#name');
var $email = $('#email');
var $message = $('#message');
var $charges = $('#charges');
var $courtDate = $('#courtDate');
var $phoneNumber = $('#number');
var $preferredContact = $("input[name='contactType']:checked");   


$courtDate.on('click', (() => {
    $courtDate.attr('type', 'date');
}))

$(document).ready(()=> {

    $('form#contactForm').on('submit', ((e) => {
        e.preventDefault();
        
        $.ajax({
            url:'https://formspree.io/info@sondhidefence.ca',
            method: 'POST',
            data: {
                name: $name.val(),
                _replyto: $email.val(),
                message: $message.val(),
                courtCharges: $charges.val(),
                courtDate: $courtDate.val(),
                phoneNumber: $phoneNumber.val(),
                preferredContact: $preferredContact.val(),
            },
            dataType: "json",
            success: (() => {
                console.log('form submitted');

                $('div#blackScreen').css('display', 'flex')
                $('div.exit').click(() => {
                    $('div#blackScreen').css('display', 'none');
                })
                // reset form
                $name.attr('placeholder','Full Name');
                $email.attr('placeholder','Email');
                $message.attr('placeholder','Your message');
                $charges.attr('placeholder','Charge(s)');
                $courtDate.attr('type','text','placeholder','Court Date');
                $phoneNumber.attr('placeholder','Phone Number');
            })
        })
    })
)
})