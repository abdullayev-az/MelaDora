$('.hamburger').click(function(){
   $('.line2').css({'transform':'rotate(1440deg)','opacity':'0'});
   $('.line1').css({'transform':'translateX(200px)'});
   $('.line3').css({'transform':'translateX(-200px)','opacity':'0'});
   $('.offcanvas-texts').css({'transform':'translateX(20px)'})
   $('.close1').css('width','30px');
   $('.close2').css('width','30px');
});

$('.offclose').click(function(){
   $('.close1').css('width','100%');
   $('.close2').css('width','100%');
   $('.offcanvas-texts').css({'transform':'translateX(320px)'});
   $('.line2').css({'transform':'rotate(0deg)','opacity':'1'});
   $('.line1').css({'transform':'translateX(0px)'});
   $('.line3').css({'transform':'translateX(0px)','opacity':'1'});
});

function over1(){
   $('.bag1').css({'filter':'blur(0px)','margin-top':'-4vh','height':'54vh'});
   $('.bag2').css({'filter':'blur(4px)','margin-top':'0vh','height':'50vh'});
}
function out1(){
   $('.bag1').css({'filter':'blur(4px)','margin-top':'0vh','height':'50vh'});
   $('.bag2').css({'filter':'blur(0px)','margin-top':'-4vh','height':'54vh'});
}

function over3(){
   $('.bag3').css({'filter':'blur(0px)','margin-top':'-4vh','height':'54vh'});
   $('.bag2').css({'filter':'blur(4px)','margin-top':'0vh','height':'50vh'});
}
function out3(){
   $('.bag3').css({'filter':'blur(4px)','margin-top':'0vh','height':'50vh'});
   $('.bag2').css({'filter':'blur(0px)','margin-top':'-4vh','height':'54vh'});
}
$('.hamısı').click(function(){
   $(this).css('color','#91B40D');
   $('.meyve').css('display','flex');
   $('.meyveler').css('color','black');
   $('.terevezler').css('color','black');
   $('.taxıllar').css('color','black');
   $('.digerler').css('color','black');
   $('.terevez').css({'display':'flex'});
   $('.taxıl').css({'display':'flex'});
   $('.diger').css({'display':'flex'});
});
$('.meyveler').click(function(){
   $(this).css('color','#91B40D');
   $('.meyve').css('display','flex');
   $('.hamısı').css('color','black');
   $('.terevezler').css('color','black');
   $('.taxıllar').css('color','black');
   $('.digerler').css('color','black');
   $('.terevez').css({'display':'none'});
   $('.taxıl').css({'display':'none'});
   $('.diger').css({'display':'none'});
});
$('.terevezler').click(function(){
   $(this).css('color','#91B40D');
   $('.terevez').css({'display':'flex'});
   $('.hamısı').css('color','black');
   $('.meyveler').css('color','black');
   $('.taxıllar').css('color','black');
   $('.digerler').css('color','black');
   $('.meyve').css({'display':'none'});
   $('.taxıl').css({'display':'none'});
   $('.diger').css({'display':'none'});
});
$('.taxıllar').click(function(){
   $(this).css('color','#91B40D');
   $('.taxıl').css({'display':'flex'});
   $('.hamısı').css('color','black');
   $('.meyveler').css('color','black');
   $('.terevezler').css('color','black');
   $('.digerler').css('color','black');
   $('.meyve').css({'display':'none'});
   $('.terevez').css({'display':'none'});
   $('.diger').css({'display':'none'});
});
$('.digerler').click(function(){
   $(this).css('color','#91B40D');
   $('.diger').css({'display':'flex'});
   $('.hamısı').css('color','black');
   $('.meyveler').css('color','black');
   $('.terevezler').css('color','black');
   $('.taxıllar').css('color','black');
   $('.meyve').css({'display':'none'});
   $('.terevez').css({'display':'none'});
   $('.taxıl').css({'display':'none'});
});
