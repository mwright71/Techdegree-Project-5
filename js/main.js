// search function

$(document).ready(function(){
    let images = document.querySelectorAll('.main a');
    $('#searchBar').on('keyup', function(){
        let search =$('#searchBar').val().toLowerCase();
        for(let i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute('data-title');
            if(searchVal.toLowerCase().indexOf(search) > -1){
                images[i].style.display = "";
            }else{
                images[i].style.display = "none";

            }
        }
    });
});