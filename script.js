$(document).ready(function () {
  let counter = 0;

  $('#btnAdd').click(function () {
    counter++;
    var count = counter;

    var title = $('#inputTitle').val();
    var content = $('#inputContent').val();

    var newCard = `
         <div class="row mt-4">
           <div class="col-md-12">
             <h5 class="pb-0 mb-0">${count}</h5>
             <div class="card mt-3">
               <div class="card-header">
                 <h4>${title}</h4>
               </div>
               <div class="card-body">
                 <p>${content}</p>
                 <button class="btn-delete btn float-right" style="background-color: rgb(246, 195, 100)">Delete</button>
               </div>
             </div>
           </div>
         </div>
       `;

    $('.appendDiv').append(newCard);
  });

  $('.appendDiv').on('click', '.btn-delete', function () {
    $(this).closest('.row').remove();

    counter = 0; // Reset the counter to 1
  });
});
