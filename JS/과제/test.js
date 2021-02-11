$(document).ready(function(){


    $('button.abc').click(function(){
        abc()

        function abc(){
        var A='';
        var array = ['A','B','C','D','E'];
        
        for (var i = 0; i <= 4; i++){ 
            for (var j = 0; j < i; j++){ 
                A += array[j];
            }
            A += array[j]+'<br>';
        }
 

        for (var i = 3; i >= 0; i--){
            for (var j = 0; j < i; j++){ 
                A += array[j];
            }
            A += array[j]+'<br>'; 
        }
        document.write(A); 
        }
    });

    function test(){
        var array2 = ['100','91','90','69']

        for(var j=0; j<i; j++){
            document.write(array2[j])
        }
    }


});

function favorFluit(){
    
}
