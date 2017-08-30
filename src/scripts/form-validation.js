jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$(document).ready(function () {

    $( "#validationForm" ).validate({
        rules: {
            Name: {
                required: true,
                minlength: 2
            },
            email:{
                email: true,
                required: true
            },
            textarea:{
                required: true
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});