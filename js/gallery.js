$(`.gallery-item`).click (
    function() {
       var src = $(this).find(`img`).data(`full`);
       var alt = $(this).find(`.gallery-item-title`).text();
       $(`.img-view-item p`).text(alt);
       $(`.img-view-item img`).attr(`src`,src);
       $(`.img-view`).css(`display`,`flex`);
    }
);

$(`.img-view img`).click (
    function() {
        $(`.img-view`).css(`display`,`none`);
    }
)

