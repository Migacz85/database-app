// Uncoment if you want show selection in menubar
$('#multioption').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                      return 'Ingredients';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               labels.push($(this).attr('label'));
                               
                           }
                           else {
                               labels.push($(this).html());
                               
                           }
                       });
                       return labels.join(', ') + '';
                   }
              }
  });
// allergens  
$('#multioption1').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                      return 'I am not allergic';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                                    
                            labels.push($(this).attr('label'));
                           }
                           else {
                               labels.push($(this).html());
                           }
                       });
                       return 'Alergic: ' + labels.join(', ') + '';
                   }
              }
  });
$('body > div.container-flex > div > div > div > form > div:nth-child(4) > button > span').text("I'm not allergic")

  
$('#multioption2').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                      return 'Cooking time';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               labels.push($(this).attr('label'));
                           }
                           else {
                               labels.push($(this).html());
                           }
                       });
                       return "Cooking time: " + labels.join(', ') + ' max';
                   }
              }
  });
$('body > div.container-flex > div > div > div > form > div:nth-child(6) > button > span').text("Cooking Time: all")