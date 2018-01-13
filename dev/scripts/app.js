console.log('hiv')

$("form").submit((e) => {
    console.log('form Submitted')
    $('div#blackScreen').css('display','flex')
    $('div.exit').click(() => {
        $('div#blackScreen').css('display','none');
    })
    e.preventDefault();
})