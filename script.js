$("#btn1").click(function(){
    $.fn.getCampaigns("campaign");
})

var search_count = false;
var search_amnt = false;
var search_date = false;

$("#supporters_count").click(function(){
    search_count = true;
    search_amnt = false;
    search_date = false;
    $(".card").remove();
    $.fn.BySupportersCount("campaign");
})

$("#amnt_raised").click(function(){
    search_amnt = true;
    search_count = false;
    search_date = false;
    $(".card").remove();
    $.fn.ByAmountRaised("campaign");
})

$("#date_modified").click(function(){
    search_date = true;
    search_amnt = false;
    search_count = false;
    $(".card").remove();
    $.fn.ByDateModified("campaign");
})

$("#home").click(function(){
    $(".card").remove();
    $.fn.getCampaigns("campaign");
})

$(".search-icon").click(function(){
    $("#mobile").css("display","block");
})

$(".arrow").click(function(){
    $('#mobile').css("display","none");
})

$(document).scroll(function(){
    if($(window).scrollTop()>5){
        $(".HEAD-Wrapper").add
    }
})

//Search (Called on keyUP)
function searchquery(){
    var term = document.getElementById("Termm").value;

    if( term.length > 0  ) {
        $.fn.Search(term,"campaign");
        $(".card").remove();
    }
    else
    {
        $(".card").remove();
        $.fn.getCampaigns("campaign");
    }

        if( search_count == true ){
            
            if( term.length > 0){
                $("card").remove();
                $.fn.SearchbySupportersCount(term,"campaign");
            }
            else{
                $("card").remove();
                $.fn.BySupportersCount("campaign");
                }
            }
        else if( search_amnt == true ){

            if(term.length > 0){
                $("card").remove();
                $.fn.SearchbyAmntRaised(term,"campaign");
            }
            else{
                $("card").remove();
                $.fn.ByAmountRaised("campaign");
            }
            
        }
        else if( search_date == true ){

            if(term.length > 0){
                $("card").remove();
                $.fn.SearchbyCreatedAt(term,"campaign");
            }
            else{
                $("card").remove();
                $.fn.BySupportersCount("campaign");
            }
            
        }
}

function Searchquery(){
    var Term = document.getElementById("termm").value;

    if( Term.length > 0 ) {
        $.fn.Search(Term,"campaign");
        $(".card").remove();
    }
    else
    {
        $(".card").remove();
        $.fn.getCampaigns("campaign");
    }

    if( search_count == true ){

        if(Term.length > 0){
            $("card").remove();
            $.fn.SearchbySupportersCount(Term,"campaign");
        }
        else{
            $("card").remove();
            $.fn.BySupportersCount("campaign");
        }
        
    }
    else if( search_amnt == true ){

        if( Term.length > 0 ) {
            $("card").remove();
            $.fn.SearchbyAmntRaised(Term,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByAmountRaised("campaign");
        }
    }
    else if( search_date == true ){

        if( Term.length > 0 ) {
            $("card").remove();
            $.fn.SearchbyCreatedAt(Term,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByDateModified("campaign");
        }
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

    if( search_count == true ){

        if(Advterm.length > 0){
            $("card").remove();
            $.fn.AdvancedSearchBySuppCount(Advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.BySupportersCount("campaign");
        }
    }
    else if( search_amnt == true ){

        if(Advterm.length > 0){
            $("card").remove();
            $.fn.AdvancedSearchByAmntRaised(Advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByAmountRaised("campaign");
        }
    }
    else if( search_date == true ){

        if(Advterm.length > 0){
            $("card").remove();
            $.fn.AdvancedSearchByCreatedAt(Advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByDateModified("campaign");
        }
    }

}

function advsearchquery(){
    var advterm = document.getElementById("advTermm").value;

    if(advterm.length > 0){
        $.fn.AdvancedSearch(advterm);
        $(".card").remove();
    }
    else
    {
        $(".card").remove();
        $.fn.getCampaigns("campaign");
    }

    if( search_count == true ){

        if(advterm.length > 0){
            $("card").remove();
            $.fn.AdvancedSearchBySuppCount(advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.BySupportersCount("campaign");
        }
        
    }
    else if( search_amnt == true ){

        if(advterm.length > 0){
            $("card").remove();
            $.fn.AdvancedSearchByAmntRaised(advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByAmountRaised("campaign");
        }
    }
    else if( search_date == true ){

        if(advterm.length > 0){
        $("card").remove();
        $.fn.AdvancedSearchByCreatedAt(advterm,"campaign");
        }
        else{
            $("card").remove();
            $.fn.ByDateModified("campaign");
        }
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

      $.fn.AdvancedSearchByAmntRaised = function(y){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20parent_name:'+ y +')&sort=raised_amount_in_inr%20desc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20creator_name:'+ y +')&sort=raised_amount_in_inr%20desc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20region:'+ y +')&sort=raised_amount_in_inr%20desc&row=10',
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

         $.fn.AdvancedSearchByCreatedAt = function(y){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20parent_name:'+ y +')&sort=created_at%20asc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20creator_name:'+ y +')&sort=created_at%20asc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20region:'+ y +')&sort=created_at%20asc&row=10',
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

         $.fn.AdvancedSearchBySuppCount = function(y){
        $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20parent_name:'+ y +')&sort=supporter_count%20desc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20creator_name:'+ y +')&sort=supporter_count%20desc&row=10',
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
                url: 'https://staging.letzchange.org/search?fq=(type:campaign%20AND%20region:'+ y +')&sort=supporter_count%20desc&row=10',
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