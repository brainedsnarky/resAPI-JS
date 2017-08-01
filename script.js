$("#btn1").click(function(){
 $.ajax({
                url: 'https://staging.letzchange.org/search?fq=(type:campaign)&row=10',
                type: 'GET',
                dataType: 'json',
                success: function (data, textStatus, xhr) {
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Database');
                }
            })
})