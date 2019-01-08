// Advanced filter
///////////////////

let on = "rgb(0, 157, 255)"
let off= "gray"

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
// Allergens  
// Uncoment if you want to add extra feature of showing selected alergens
// Not supported in mobile, allergens will go out off the screen.
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
  
  if ($("#multioption1").val()==0  )
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

////////////////////////////
// End of search filter
//////////////////////////

function edit_btn() {
    window.location.href = "user_recipes"
}

function add_recipe() {
    window.location.href = "add_recipe"
}
var toggle=0;

$("#help").click(function () {

    if (toggle==0) {
        $(function () {
            $('[data-toggle="tooltip"], .tooltip').tooltip();
            $('[data-toggle="tooltip"], .tooltip').tooltip("show");
            $("button").click(function () {
                $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
            });
            $(".card-header").click(function () {
                $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
            });
            $(".card-body").click(function () {
                $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
            });
            $(".masthead").click(function () {
                $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
            });
        });
        toggle=1;
  
} else { 
    toggle=0;
    $('[data-toggle="tooltip"], .tooltip').tooltip("hide");
}
    
    
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