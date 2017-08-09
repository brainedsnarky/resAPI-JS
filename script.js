$("#btn1").click(function(){
    $.fn.getCampaigns("campaign");
})

var search_count = false;

$("#supporters_count").click(function(){
    search_count = true;
    $(".card").remove();
    $.fn.BySupportersCount("campaign");
})

var search_amnt = false;

$("#amnt_raised").click(function(){
    search_amnt = true;
    $(".card").remove();
    $.fn.ByAmountRaised("campaign");
})

var search_date = false;

$("#date_modified").click(function(){
    search_date = true;
    $(".card").remove();
    $.fn.ByDateModified("campaign");
})

$("#home").click(function(){
    $(".card").remove();
    $.fn.getCampaigns("campaign");
})

//Search (Called on keyUP)
function searchquery(){
    var term = document.getElementById("Termm").value;

    if( term.length > 0 ) {
        $.fn.Search(term,"campaign");
        $(".card").remove();
        if( search_count == true ){
            $("card").remove();
            $.fn.SearchbySupportersCount(term,"campaing");
        }
        else if( search_amnt == true ){
            $("card").remove();
            $.fn.SearchbyAmntRaised(term,"campaing");
        }
        else if( search_date == true ){
            $("card").remove();
            $.fn.SearchbyAmntRaised(term,"campaing");
        }
    }
    else
    {
        $(".card").remove();
        $.fn.getCampaigns("campaign");
    }
}

//Advanced Search (Called on keyUP)
function Advsearchquery(){
    var Advterm = document.getElementById("AdvTermm").value;

    if(Advterm.length > 0){
        $.fn.AdvancedSearch(Advterm);
        $(".card").remove();
    }
    else
    {
        $(".card").remove();
        $.fn.getCampaigns("campaign");
    }
}


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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
            },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
     });
   }

   $.fn.BySupportersCount = function(x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:'+ x +')&sort=supporter_count%20desc&row=10',
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
                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
            },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

   $.fn.ByAmountRaised = function(x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:'+ x +')&sort=raised_amount_in_inr%20desc&row=10',
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

   $.fn.ByDateModified = function(x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:'+ x +')&sort=created_at%20asc&row=10',
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

   $.fn.Search = function(y,x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?q='+ y +'~&fq=(type:'+ x +')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

   $.fn.SearchbySupportersCount = function(y,x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?q='+ y +'~&fq=(type:'+ x +')&sort=supporter_count%20desc&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

      $.fn.SearchbyAmntRaised = function(y,x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?q='+ y +'~&fq=(type:'+ x +')&sort=raised_amount_in_inr%20desc&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

     $.fn.SearchbyCreatedAt = function(y,x){
        $.ajax({
                url: 'https://staging.letzchange.org/search?q='+ y +'~&fq=(type:'+ x +')&sort=created_at%20asc&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
     }

   $.fn.AdvancedSearch = function(y){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20parent_name:'+ y +')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });

        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20creator_name:'+ y +')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });

        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20region:'+ y +')&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data.response.docs);
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

                            stat = document.createElement('div');
                            stat.className ='stats-wrapper';
                            stat.id ="Stats"+i;

                            fadate = document.createElement('i');
                            fadate.className = 'fa fa-clock-o';

                            date = document.createElement('p');
                            date.id = "date"+i;
                            date.innerHTML = (new Date(d.created_at)).toDateString();
                            fadate.appendChild(date);

                            fasupp = document.createElement('i');
                            fasupp.className = 'fa fa-heart';

                            count = document.createElement('p');
                            count.id = "count"+i;
                            count.innerHTML = d.supporter_count;
                            fasupp.appendChild(count);

                            amount = document.createElement('p');
                            amount.id = "amount"+i;
                            amount.innerHTML = "₹ " + d.raised_amount_in_inr;

                            stat.appendChild(fadate);
                            stat.appendChild(fasupp);
                            stat.appendChild(amount);

                            card.appendChild(stat);

                            contentwrapper = document.createElement('div');
                            contentwrapper.className = 'content-wrapper';
                            contentwrapper.id = "Content"+i;
                            contentwrapper.innerHTML = d.description;
                            card.appendChild(contentwrapper);

                            document.getElementById("main").appendChild(card);
                            document.getElementById("btn1").disabled = true;

                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
        });
   }

});
