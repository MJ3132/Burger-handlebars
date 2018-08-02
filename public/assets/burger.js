


$('.burger').on("click", function (event){
    event.preventDefault();
let burger_id = $(this)[0].id;
console.log(burger_id);

$.ajax({ 

    method:"PUT",
    url : "/api/burgers/" +  burger_id
   

}).then(function(data){


    console.log(data);

    
})

    console.log('changed this');
    console.log($(this));
})

