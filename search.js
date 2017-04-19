$('#ajax > #submit').click(() => {
  /* loading message */
  setTimeout(() => $('#ajax_result').html('loading'), 300);
  
  /* read input value */
  var id = $('#ajax > #id').val();

  /* send value print result */
  $.get("ajax.njs", {id: id}, (data) => {
    $("#ajax_result").html(data);
  });

});
