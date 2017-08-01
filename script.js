 $(document).ready(function () {
            $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign)&row=10',
                data: {
            format: 'json'    
            },
                dataType: 'jsonp',
                success: function (data, textStatus, xhr) {
                    console.log("success");
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            });
        });

$("#btn1").click(function(){
 alert("I was clicked!!");
});