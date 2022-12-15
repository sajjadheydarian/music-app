$(document).ready(function () {
    maudio({
        obj: 'audio',
        fastStep: 10
    });
    $('*').click(function () {
        maudio({
            obj: 'audio',
            fastStep: 10
        });
        $('*').ready(function () {
            maudio({
                obj: 'audio',
                fastStep: 10
            });
        });
    });
});
