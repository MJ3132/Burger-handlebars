
var isLoading = false;


$('.burger').on("click", function (event){
    event.preventDefault();
    $("#hide").hide();
    isLoading = true;
let burger_id = $(this)[0].id;
console.log("this is our burger ID");
console.log(burger_id); 
console.log("is loading" + isLoading);

$.ajax({ 
    
    method:"PUT",
    url : "/api/burgers/" +  burger_id
   

}).then(function(data){
 location.reload();
    
isLoading = false;
    // window.location.href = "/"; 
    console.log("is loading" + isLoading);

    console.log(data);

    
})

    console.log('changed this');
    console.log($(this));
})

