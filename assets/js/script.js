// $('.correo').tooltip(options)

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $("#correo").click(
    function(){alert("El correo fue enviado correctamente...")
    
    }
)

$('body').on('dblclick', 'h3', function() {
  $(this).css("color",'red');
} )