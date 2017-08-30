$(document).ready(function() {
   $('#partners').DataTable( {
        "ajax": '/data/data.json',

       responsive: true

    } );


} );

