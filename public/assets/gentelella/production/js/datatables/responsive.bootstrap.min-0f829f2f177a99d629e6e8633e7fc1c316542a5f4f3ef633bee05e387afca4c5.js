!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-responsive"],function(a){return e(a,window,document)}):"object"==typeof exports?module.exports=function(a,d){return a||(a=window),d&&d.fn.dataTable||(d=require("datatables.net-bs")(a,d).$),d.fn.dataTable.Responsive||require("datatables.net-responsive")(a,d),e(d,a,a.document)}:e(jQuery,window,document)}(function(e){var a=e.fn.dataTable,d=a.Responsive.display,n=d.modal;return d.modal=function(a){return function(d,o,t){e.fn.modal?o||(o=e('<div class="modal fade" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>'),a&&a.header&&o.find("div.modal-header").append('<h4 class="modal-title">'+a.header(d)+"</h4>"),o.find("div.modal-body").append(t()),o.appendTo("body").modal()):n(d,o,t)}},a.Responsive});