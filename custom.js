jQuery(document).ready(function($){
	
  
$("select[id=billing_depto] option:first").text("Seleccione");

	$('select[id=billing_depto]  option:contains("Seleccione")').attr("selected", "selected");
	$('select[id=billing_depto]  option:contains("Seleccione")').prop("selected", "selected");
  $("select[id=shipping_depto] option:first").text("Seleccione");	
	$('select[id=shipping_depto]').prop('selectedIndex',0);
	
  $('#shipping_depto').change(function() {
	      if($(this).val()== 'Francisco Morazan'){
		      var cities = ["Valle de Ángeles", "Talanga", "Tegucigalpa"];
	      }
	      else if($(this).val()== 'Olancho'){
		      var cities = ["Campamento", "Juticalpa", "Catacamas"];
	      }
	      else if($(this).val()== 'Valle'){
		      var cities = ["Nacaome","San Lorenzo"];
	      }
	      $("#shipping_city").empty();
             for(var i in cities) {
                $("#shipping_city").append('<option value="'+cities[i]+'">'+cities[i]+'</option>');
            }
  
    });

	
    $('#billing_depto').change(function() {
	     if($(this).val()== 'Francisco Morazan'){
		     var cities = ["Valle de Ángeles", "Talanga", "Tegucigalpa"];
	     }
	     else if($(this).val()== 'Olancho'){
		     var cities = ["Campamento", "Juticalpa", "Catacamas"];
	     }
	     else if($(this).val()== 'Valle'){
		     var cities = ["Nacaome","San Lorenzo"];
	     }

       $("#billing_city").empty();
            for(var i in cities) {
               $("#billing_city").append('<option value="'+cities[i]+'">'+cities[i]+'</option>');
           }
  
    });
});
