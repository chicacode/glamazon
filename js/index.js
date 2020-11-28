$(function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
            $('.carousel').carousel({
                interval: 2000
            });
            // trigger events with JQuery
            // .on subscribe a evento
            $('#modalForm').on('show.bs.modal', function (e) {

                $('#buyIdBtn').removeClass('btn btn-light btn-buy');
                $('#buyIdBtn').addClass('btn btn-outline-info btn-block');
                $('#buyIdBtn').prop('disabled', true);
            });
            $('#modalForm').on('shown.bs.modal', function (e) {
                console.log('El Modal se mostroo');
            });
            $('#modalForm').on('hide.bs.modal', function (e) {
                console.log('El Modal se ha escondido');
            });
            $('#modalForm').on('hidden.bs.modal', function (e) {
                $('#buyIdBtn').removeClass('btn btn-outline-info btn-block');
                $('#buyIdBtn').addClass('btn btn-light btn-buy');
                $('#buyIdBtn').prop('disabled', false);
            });
        });