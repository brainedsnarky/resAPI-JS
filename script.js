$("#btn1").click(function(){
    $.fn.getCampaigns("campaign");
})
$(document).ready(function(){
    
   $.fn.getCampaigns = function(x){
       $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:'+ x + ')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log("Getting " + x);
                    // console.log(data.response.docs);

                    data.response.docs.forEach(function(d) {
                         
                         console.log(d.name);
                           card = document.createElement('div');
                           card.className = 'card';
                           card.id = "CARD"
                        //    card.innerHTML = "data"
                        document.getElementById("main").appendChild(card);

                        titlewrapper = document.createElement('div');
                        titlewrapper.className = 'title-wrapper';
                        titlewrapper.id = 'Title';
                        document.getElementById("CARD").appendChild(titlewrapper);
                        
                    });

                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
   }
   })
