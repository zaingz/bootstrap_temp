// JavaScript Document



	$(document).ready(function() {
 
  
  
                $('#imgBox').animate({
                    top: 17,
					opacity:1
                }, 1500, "easeOutElastic").delay(3000);
				
$('#what_box').waypoint(function(direction) {
	
	
	if (direction == 'down'){
		
	
		 $('.navbar-default').css({ backgroundColor: '#428bca' });
   $('#logo').css("color", "#FFF");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#FFF");
		
 $("#img1").animate({
	 
	 opacity:1
	 },500,function(){
		 $("#img2").animate({
	 
	 opacity:1
	 },500,function(){
		  $("#img3").animate({
	 
	 opacity:1
	 },500);
		 
		 });
		 }).delay(500);
	
	
	
	 

	 
	 
	  	}
				
					
			if (direction == 'up'){
				  $('.navbar-default').css({ backgroundColor: '#FFF' });
   $('#logo').css("color", "#428bca");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#535353");}	
			//	$('#ass').animate({height:120},500);
			
			
			
				}, { offset: 155 });
				
				
				
				$('#skills_box').waypoint(function(direction){
						if (direction == 'down'){/*
					 $('.navbar-default').css({ backgroundColor: '#FFF' });
   $('#logo').css("color", "#428bca");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#535353");*/
   $('#ass').animate({opacity:0},500);
   
  $('.chart').easyPieChart({
         animate: 2500,
		 barColor: "#F93333",
		 trackColor: "#FFF",
		 scaleColor	: "#CCC",
		 lineWidth : "8",
		 size : 150,
		 lineCap : "square"
    });
   
   
   
   
   
   }
   if (direction == 'up'){
		/*
	
		 $('.navbar-default').css({ backgroundColor: '#428bca' });
   $('#logo').css("color", "#FFF");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#FFF");*/
     $('#ass').animate({opacity:1},500);
   }
					}, { offset: 155 });
					
					
					
					
					//skills_circle way points integration
					
					
					
$('#skills_circle').waypoint(function(direction) {
	
	
	if (direction == 'down'){
		  $('#ass').animate({opacity:1},500);
	 
	 
	  	}
				
					
			if (direction == 'up'){
				  $('#ass').animate({opacity:0},500);
				  }
			
				}, { offset: 180 });
				
					
					
					
$('#contact_box').waypoint(function(direction) {
	
	
	if (direction == 'down'){
		 $('.navbar-default').css({ backgroundColor: '#FFF' });
   $('#logo').css("color", "#428bca");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#535353");
	 
	  	}
				
					
			if (direction == 'up'){
				 $('.navbar-default').css({ backgroundColor: '#428bca' });
   $('#logo').css("color", "#FFF");
   $('#bs-example-navbar-collapse-1 ul li a').css("color", "#FFF");
				  }
			
				}, { offset: 10 });
				
				
				
					
					
					
					
					
					
					
	
	});
		
$("#link2").click(function() {
    $('html, body').animate({
        scrollTop: ($("#skills_box").offset().top)-0
    }, 2000,"easeInOutCirc");

});
	
$("#link3").click(function() {
    $('html, body').animate({
        scrollTop: ($("#works_box").offset().top)-80
    }, 2000,"easeInOutCirc");

});

	
$("#link4").click(function() {
    $('html, body').animate({
        scrollTop: ($("#contact_box").offset().top)-0
    }, 2000,"easeInOutCirc");

});


	
$("#link1").click(function() {
    $('html, body').animate({
        scrollTop: ($("#what_box").offset().top)-80
    }, 2000,"easeInOutCirc");

});

	
$("#my_btn").click(function() {
    $('html, body').animate({
        scrollTop: ($("#contact_box").offset().top)-80
    }, 2000,"easeInOutCirc");

});

$('.carousel').carousel({
  interval: 8000
});
//$('.carousel').imageScroll();

$('#carousel-example-generic').on('slide.bs.carousel', function () {

});
//#carousel-example-generic

	$('#carousel-example-generic').waypoint(function(direction){
		
		
		});

///svg
