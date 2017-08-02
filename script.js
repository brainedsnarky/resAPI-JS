$("#btn1").click(function(){
//  $.ajax({
//                 url: 'https://staging.letzchange.org/search?fq=(type:campaign)&row=10',
//                 type: 'GET',
//                 dataType: 'json',
//                 success: function (data, textStatus, xhr) {
//                     console.log(data);
//                 },
//                 error: function (xhr, textStatus, errorThrown) {
//                     console.log('Error in Database');
//                 }
//             });

    $.fn.getCampaigns("nonprofit");
    // $.fn.getNonProfit();
    // $.fn.getProjects();

});

$(document).ready(function(){
    
   $.fn.getCampaigns = function(x){
       $.ajax({
                url: 'https://letzchange.org/search?fq=(type:'+ x + ')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log("Getting" + x);
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            });
   }

//    $.fn.getNonProfit = function(){
//        $.ajax({
//                 url: 'https://letzchange.org/search?fq=(type:nonprofit)&row=10',
//                 type: 'GET',
//                 dataType: 'json',
//                 success: function (data, textStatus, xhr) {
//                     console.log("Getting Non-Profits!");
//                     console.log(data);
//                 },
//                 error: function (xhr, textStatus, errorThrown) {
//                     console.log('Error in Database');
//                 }
//             });
//    }

//    $.fn.getProjects = function(){
//        $.ajax({
//                 url: 'https://letzchange.org/search?fq=(type:project)&row=10',
//                 type: 'GET',
//                 dataType: 'json',
//                 success: function (data, textStatus, xhr) {
//                     console.log("Getting projects!");
//                     console.log(data);
//                 },
//                 error: function (xhr, textStatus, errorThrown) {
//                     console.log('Error in Database');
//                 }
//             });
//    }
});
