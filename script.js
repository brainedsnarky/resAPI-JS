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
                    data.response.docs.forEach(function(d,i) {
                            card = document.createElement('div');
                            card.className = 'card';
                            card.id = "CARD"+i;

                            titlewrapper = document.createElement('div');
                            titlewrapper.className = 'title-wrapper';
                            titlewrapper.id = "Title"+i;
                            titlewrapper.innerHTML = d.name;
                            card.appendChild(titlewrapper);

                            imgwrapper = document.createElement('div');
                            imgwrapper.className = 'image-wrapper';
                            imgwrapper.id = "Image"+i;
                            card.appendChild(imgwrapper);

                            img = document.createElement('img');
                            img.setAttribute("alt","Image");
                            img.setAttribute("src", d.creator_image);
                            imgwrapper.appendChild(img);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                    });
            },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            });
   }
   });
