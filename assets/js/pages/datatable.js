$(document).ready(function () {
    $('#basic-datatable').DataTable({
        scrollX: true,
        scroller: {
            rowHeight: 10
        },
        language: {
            decimal: "",
            emptyTable: "Sem dados disponíveis na tabela",
            search: "Pesquisar:",
            paginate: {
                "first": "First",
                "last": "Last",
                "next": "<i class='mdi mdi-chevron-right'>",
                "previous": "<i class='mdi mdi-chevron-left'>"
            },
            infoEmpty: "<p style='font-size:13px;'>Mostrando 0 a 0 de 0 entradas</p>",
            info: "<p style='font-size:13px;'>Mostrando _START_ a _END_ de _TOTAL_ entradas</p>",
            infoFiltered: "<p class='text-muted' style='font-size:11px;'>filtrado de _MAX_ entradas totais</p>",
            lengthMenu: "Mostrar _MENU_",
            infoPostFix: "",
            thousands: ",",
            loadingRecords: "Carregando...",
            processing: "",
            zeroRecords: "Nenhum registro correspondente encontrado",
            aria: {
                sortAscending: ": ativar para classificar a coluna em ordem crescente",
                sortDescending: ": ativar para ordenar a coluna decrescente"
            }
        }
    });
});