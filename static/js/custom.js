
let on = "rgb(0, 157, 255)"
let off= "gray"


// Uncoment if you want show selection in menubar
$('#multioption').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                    $('#Advance > div:nth-child(2) > button > span').css('color',off)
                      return 'Type of recipe';
                  } else {
                    if ($("#multioption").val()=="" )
                    {
                        $('#Advance > div:nth-child(2) > button > span').css('color',off)
                     return "Type of recipe [all]"
                    } else {
                        $('#Advance > div:nth-child(2) > button > span').css('color',on)
                    }


                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               labels.push($(this).attr('label'));
                               
                           }
                           else {
                               labels.push($(this).html());
                               
                           }
                       });
                       $('#Advance > div:nth-child(2) > button > span').css('color',on)
                       return labels.join(', ') + '';
                   }
              }
  });
// allergens  
$('#multioption1').multiselect({
    buttonText: function(options, select) {
                  if (options.length === 0) {
                        $('#Advance > div:nth-child(4) > button > span').css('color',off)
                      return 'I am not alergic';
                  } else {
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                            // In feature extend this commented code to be turned on desktop devices        
                            // labels.push($(this).attr('label'));
                            
                           }
                           else {
                            //    labels.push($(this).html());
                           }
                       });
                       $('#Advance > div:nth-child(4) > button > span').css('color',on)
                       return 'I am alergic: ' + labels.join(', ') + '';
                   }
              }
  });
// $('body > div.container-flex > div > div > div > form > div:nth-child(4) > button > span').text("I'm not allergic")

  
$('#multioption2').multiselect({
    buttonText: function(options, select) {
                   
                  if (options.length === 0) {
                    
                      return 'Cooking time';
                  } else {
                    if ($("#multioption2").val()==900 )
                    {
                        $('#Advance > div:nth-child(6) > button > span').css('color',off)
                     return "Cooking time [all]"
                    }
                       var labels = [];
                       options.each(function() {
                           if ($(this).attr('label') !== undefined) {
                               labels.push($(this).attr('label'));
                               
                           }
                           else {
                               labels.push($(this).html());
                               
                           }
                       });
                       $('#Advance > div:nth-child(6) > button > span').css('color',on)
                       
                       return "Cooking time: " + labels.join(', ') + ' max';
                   }
                
                   
              }
  });

//  Set colors after refresh of the site

  if ($("#multioption").val()=="" )
  {
      $('#Advance > div:nth-child(2) > button > span').css('color',off)
  } else {
    
      $('#Advance > div:nth-child(2) > button > span').css('color',on)
  }
  
  if ($("#multioption1").val().length==0  )
  {
      $('#Advance > div:nth-child(4) > button > span').css('color',off)
  } else {
      $('#Advance > div:nth-child(4) > button > span').css('color',on)
  }  
 
  if ($("#multioption2").val()=="900" )
  {
      $('#Advance > div:nth-child(6) > button > span').css('color',off)
  } else {
      $('#Advance > div:nth-child(6) > button > span').css('color',on)
  }
 
// After selecting any of the filter I want to have instant submit and response from server
$(document).ready(function() {
    // make following action fire when radio button changes
    $('input[type=radio]').change(function(){
         $('button[type=submit]').click()
         });
    $('#multioption1').change(function(){
            $('button[type=submit]').click()
            });
    });

// $('body > div.container-flex > div > div > div > form > div:nth-child(6) > button > span').text("Cooking Time: all")

// $(function () {
// //    $('[data-toggle="tooltip"], .tooltip').tooltip();
// //    $('[data-toggle="tooltip"], .tooltip').tooltip("show");
//     $("button").click(function () {
//       $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
//     });
//     $(".card-header").click(function () {
//         $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
//       });
//     $(".card-body").click(function () {
//         $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
//       });
//   });

// Bootstrap
$('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
})  

//Hide tooltips on click when modal appear
$('[rel="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
})