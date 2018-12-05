// Uncoment if you want show selection in menubar
$('#example-getting-started').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                      return 'Ingredients:';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               //labels.push($(this).attr('label'));
                               
                           }
                           else {
                               //labels.push($(this).html());
                               
                           }
                       });
                       //return labels.join(', ') + '';
                   }
              }
  });
  
  $('#example-getting-started1').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                      return 'I am allergic on:';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               //labels.push($(this).attr('label'));
                               
                           }
                           else {
                               //labels.push($(this).html());
                               
                           }
                       });
                       //return labels.join(', ') + '';
                   }
              }
  });
  