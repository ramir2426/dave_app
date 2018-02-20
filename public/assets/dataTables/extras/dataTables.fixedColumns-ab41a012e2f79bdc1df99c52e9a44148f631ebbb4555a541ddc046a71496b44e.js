!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(e){return t(e,window,document)}):"object"==typeof exports?module.exports=function(e,i){return e||(e=window),i&&i.fn.dataTable||(i=require("datatables.net")(e,i).$),t(i,e,e.document)}:t(jQuery,window,document)}(function(t,e,i,o){"use strict";var l=t.fn.dataTable,n=function(e,i){var l=this;if(this instanceof n){i!==o&&!0!==i||(i={});var s=t.fn.dataTable.camelToHungarian;s&&(s(n.defaults,n.defaults,!0),s(n.defaults,i));var r=new t.fn.dataTable.Api(e).settings()[0];if(this.s={dt:r,iTableColumns:r.aoColumns.length,aiOuterWidths:[],aiInnerWidths:[]},this.dom={scroller:null,header:null,body:null,footer:null,grid:{wrapper:null,dt:null,left:{wrapper:null,head:null,body:null,foot:null},right:{wrapper:null,head:null,body:null,foot:null}},clone:{left:{header:null,body:null,footer:null},right:{header:null,body:null,footer:null}}},r._oFixedColumns)throw"FixedColumns already initialised on this table";r._oFixedColumns=this,r._bInitComplete?this._fnConstruct(i):r.oApi._fnCallbackReg(r,"aoInitComplete",function(){l._fnConstruct(i)},"FixedColumns")}else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")};return t.extend(n.prototype,{fnUpdate:function(){this._fnDraw(!0)},fnRedrawLayout:function(){this._fnColCalc(),this._fnGridLayout(),this.fnUpdate()},fnRecalculateHeight:function(t){delete t._DTTC_iHeight,t.style.height="auto"},fnSetRowHeight:function(t,e){t.style.height=e+"px"},fnGetPosition:function(e){var i,o=this.s.dt.oInstance;if(t(e).parents(".DTFC_Cloned").length){if("tr"===e.nodeName.toLowerCase())return i=t(e).index(),o.fnGetPosition(t("tr",this.s.dt.nTBody)[i]);var l=t(e).index();return i=t(e.parentNode).index(),[o.fnGetPosition(t("tr",this.s.dt.nTBody)[i]),l,o.oApi._fnVisibleToColumnIndex(this.s.dt,l)]}return o.fnGetPosition(e)},_fnConstruct:function(l){var s=this;if("function"==typeof this.s.dt.oInstance.fnVersionCheck&&!0===this.s.dt.oInstance.fnVersionCheck("1.8.0"))if(""!==this.s.dt.oScroll.sX){this.s=t.extend(!0,this.s,n.defaults,l);var r,d=this.s.dt.oClasses;this.dom.grid.dt=t(this.s.dt.nTable).parents("div."+d.sScrollWrapper)[0],this.dom.scroller=t("div."+d.sScrollBody,this.dom.grid.dt)[0],this._fnColCalc(),this._fnGridSetup(),t(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC",function(){r="main"}).on("scroll.DTFC",function(t){!r&&t.originalEvent&&(r="main"),"main"===r&&(s.s.iLeftColumns>0&&(s.dom.grid.left.liner.scrollTop=s.dom.scroller.scrollTop),s.s.iRightColumns>0&&(s.dom.grid.right.liner.scrollTop=s.dom.scroller.scrollTop))});var a="onwheel"in i.createElement("div")?"wheel.DTFC":"mousewheel.DTFC";s.s.iLeftColumns>0&&t(s.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",function(){r="left"}).on("scroll.DTFC",function(t){!r&&t.originalEvent&&(r="left"),"left"===r&&(s.dom.scroller.scrollTop=s.dom.grid.left.liner.scrollTop,s.s.iRightColumns>0&&(s.dom.grid.right.liner.scrollTop=s.dom.grid.left.liner.scrollTop))}).on(a,function(t){var e="wheel"===t.type?-t.originalEvent.deltaX:t.originalEvent.wheelDeltaX;s.dom.scroller.scrollLeft-=e}),s.s.iRightColumns>0&&t(s.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC",function(){r="right"}).on("scroll.DTFC",function(t){!r&&t.originalEvent&&(r="right"),"right"===r&&(s.dom.scroller.scrollTop=s.dom.grid.right.liner.scrollTop,s.s.iLeftColumns>0&&(s.dom.grid.left.liner.scrollTop=s.dom.grid.right.liner.scrollTop))}).on(a,function(t){var e="wheel"===t.type?-t.originalEvent.deltaX:t.originalEvent.wheelDeltaX;s.dom.scroller.scrollLeft-=e}),t(e).on("resize.DTFC",function(){s._fnGridLayout.call(s)});var h=!0,f=t(this.s.dt.nTable);f.on("draw.dt.DTFC",function(){s._fnDraw.call(s,h),h=!1}).on("column-sizing.dt.DTFC",function(){s._fnColCalc(),s._fnGridLayout(s)}).on("column-visibility.dt.DTFC",function(t,e,i,l,n){(n===o||n)&&(s._fnColCalc(),s._fnGridLayout(s),s._fnDraw(!0))}).on("destroy.dt.DTFC",function(){f.off("column-sizing.dt.DTFC column-visibility.dt.DTFC destroy.dt.DTFC draw.dt.DTFC"),t(s.dom.scroller).off("mouseover.DTFC touchstart.DTFC scroll.DTFC"),t(e).off("resize.DTFC"),t(s.dom.grid.left.liner).off("mouseover.DTFC touchstart.DTFC scroll.DTFC "+a),t(s.dom.grid.left.wrapper).remove(),t(s.dom.grid.right.liner).off("mouseover.DTFC touchstart.DTFC scroll.DTFC "+a),t(s.dom.grid.right.wrapper).remove()}),this._fnGridLayout(),this.s.dt.oInstance.fnDraw(!1)}else this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");else alert("FixedColumns "+n.VERSION+" required DataTables 1.8.0 or later. Please upgrade your DataTables installation")},_fnColCalc:function(){var e=this,i=0,o=0;this.s.aiInnerWidths=[],this.s.aiOuterWidths=[],t.each(this.s.dt.aoColumns,function(l,n){var s,r=t(n.nTh);if(r.filter(":visible").length){var d=r.outerWidth();0===e.s.aiOuterWidths.length&&(d+="string"==typeof(s=t(e.s.dt.nTable).css("border-left-width"))?1:parseInt(s,10)),e.s.aiOuterWidths.length===e.s.dt.aoColumns.length-1&&(d+="string"==typeof(s=t(e.s.dt.nTable).css("border-right-width"))?1:parseInt(s,10)),e.s.aiOuterWidths.push(d),e.s.aiInnerWidths.push(r.width()),l<e.s.iLeftColumns&&(i+=d),e.s.iTableColumns-e.s.iRightColumns<=l&&(o+=d)}else e.s.aiInnerWidths.push(0),e.s.aiOuterWidths.push(0)}),this.s.iLeftWidth=i,this.s.iRightWidth=o},_fnGridSetup:function(){var e,i=this._fnDTOverflow();this.dom.body=this.s.dt.nTable,this.dom.header=this.s.dt.nTHead.parentNode,this.dom.header.parentNode.parentNode.style.position="relative";var o=t('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],l=o.childNodes[0],n=o.childNodes[1];this.dom.grid.dt.parentNode.insertBefore(o,this.dom.grid.dt),o.appendChild(this.dom.grid.dt),this.dom.grid.wrapper=o,this.s.iLeftColumns>0&&(this.dom.grid.left.wrapper=l,this.dom.grid.left.head=l.childNodes[0],this.dom.grid.left.body=l.childNodes[1],this.dom.grid.left.liner=t("div.DTFC_LeftBodyLiner",o)[0],o.appendChild(l)),this.s.iRightColumns>0&&(this.dom.grid.right.wrapper=n,this.dom.grid.right.head=n.childNodes[0],this.dom.grid.right.body=n.childNodes[1],this.dom.grid.right.liner=t("div.DTFC_RightBodyLiner",o)[0],(e=t("div.DTFC_RightHeadBlocker",o)[0]).style.width=i.bar+"px",e.style.right=-i.bar+"px",this.dom.grid.right.headBlock=e,(e=t("div.DTFC_RightFootBlocker",o)[0]).style.width=i.bar+"px",e.style.right=-i.bar+"px",this.dom.grid.right.footBlock=e,o.appendChild(n)),this.s.dt.nTFoot&&(this.dom.footer=this.s.dt.nTFoot.parentNode,this.s.iLeftColumns>0&&(this.dom.grid.left.foot=l.childNodes[2]),this.s.iRightColumns>0&&(this.dom.grid.right.foot=n.childNodes[2]))},_fnGridLayout:function(){var e,i=this.dom.grid,o=t(i.wrapper).width(),l=t(this.s.dt.nTable.parentNode).outerHeight(),n=t(this.s.dt.nTable.parentNode.parentNode).outerHeight(),s=this._fnDTOverflow(),r=this.s.iLeftWidth,d=this.s.iRightWidth,a=function(t,e){s.bar?t.style.width=e+s.bar+"px":(t.style.width=e+20+"px",t.style.paddingRight="20px",t.style.boxSizing="border-box")};s.x&&(l-=s.bar),i.wrapper.style.height=n+"px",this.s.iLeftColumns>0&&(i.left.wrapper.style.width=r+"px",i.left.wrapper.style.height="1px",i.left.body.style.height=l+"px",i.left.foot&&(i.left.foot.style.top=(s.x?s.bar:0)+"px"),a(i.left.liner,r),i.left.liner.style.height=l+"px"),this.s.iRightColumns>0&&(e=o-d,s.y&&(e-=s.bar),i.right.wrapper.style.width=d+"px",i.right.wrapper.style.left=e+"px",i.right.wrapper.style.height="1px",i.right.body.style.height=l+"px",i.right.foot&&(i.right.foot.style.top=(s.x?s.bar:0)+"px"),a(i.right.liner,d),i.right.liner.style.height=l+"px",i.right.headBlock.style.display=s.y?"block":"none",i.right.footBlock.style.display=s.y?"block":"none")},_fnDTOverflow:function(){var t=this.s.dt.nTable,e=t.parentNode,i={x:!1,y:!1,bar:this.s.dt.oScroll.iBarWidth};return t.offsetWidth>e.clientWidth&&(i.x=!0),t.offsetHeight>e.clientHeight&&(i.y=!0),i},_fnDraw:function(e){this._fnGridLayout(),this._fnCloneLeft(e),this._fnCloneRight(e),null!==this.s.fnDrawCallback&&this.s.fnDrawCallback.call(this,this.dom.clone.left,this.dom.clone.right),t(this).trigger("draw.dtfc",{leftClone:this.dom.clone.left,rightClone:this.dom.clone.right})},_fnCloneRight:function(t){if(!(this.s.iRightColumns<=0)){var e,i=[];for(e=this.s.iTableColumns-this.s.iRightColumns;e<this.s.iTableColumns;e++)this.s.dt.aoColumns[e].bVisible&&i.push(e);this._fnClone(this.dom.clone.right,this.dom.grid.right,i,t)}},_fnCloneLeft:function(t){if(!(this.s.iLeftColumns<=0)){var e,i=[];for(e=0;e<this.s.iLeftColumns;e++)this.s.dt.aoColumns[e].bVisible&&i.push(e);this._fnClone(this.dom.clone.left,this.dom.grid.left,i,t)}},_fnCopyLayout:function(e,i,o){for(var l=[],n=[],s=[],r=0,d=e.length;r<d;r++){var a=[];a.nTr=t(e[r].nTr).clone(o,!1)[0];for(var h=0,f=this.s.iTableColumns;h<f;h++)if(-1!==t.inArray(h,i)){var u=t.inArray(e[r][h].cell,s);if(-1===u){var c=t(e[r][h].cell).clone(o,!1)[0];n.push(c),s.push(e[r][h].cell),a.push({cell:c,unique:e[r][h].unique})}else a.push({cell:n[u],unique:e[r][h].unique})}l.push(a)}return l},_fnClone:function(e,i,l,n){var s,r,d,a,h,f,u,c,p,g,m=this,C=this.s.dt;if(n){for(t(e.header).remove(),e.header=t(this.dom.header).clone(!0,!1)[0],e.header.className+=" DTFC_Cloned",e.header.style.width="100%",i.head.appendChild(e.header),c=this._fnCopyLayout(C.aoHeader,l,!0),(p=t(">thead",e.header)).empty(),s=0,r=c.length;s<r;s++)p[0].appendChild(c[s].nTr);C.oApi._fnDrawHead(C,c,!0)}else for(c=this._fnCopyLayout(C.aoHeader,l,!1),g=[],C.oApi._fnDetectHeader(g,t(">thead",e.header)[0]),s=0,r=c.length;s<r;s++)for(d=0,a=c[s].length;d<a;d++)g[s][d].cell.className=c[s][d].cell.className,t("span.DataTables_sort_icon",g[s][d].cell).each(function(){this.className=t("span.DataTables_sort_icon",c[s][d].cell)[0].className});this._fnEqualiseHeights("thead",this.dom.header,e.header),"auto"==this.s.sHeightMatch&&t(">tbody>tr",m.dom.body).css("height","auto"),null!==e.body&&(t(e.body).remove(),e.body=null),e.body=t(this.dom.body).clone(!0)[0],e.body.className+=" DTFC_Cloned",e.body.style.paddingBottom=C.oScroll.iBarWidth+"px",e.body.style.marginBottom=2*C.oScroll.iBarWidth+"px",null!==e.body.getAttribute("id")&&e.body.removeAttribute("id"),t(">thead>tr",e.body).empty(),t(">tfoot",e.body).remove();var y=t("tbody",e.body)[0];if(t(y).empty(),C.aiDisplay.length>0){var T=t(">thead>tr",e.body)[0];for(u=0;u<l.length;u++){h=l[u],(f=t(C.aoColumns[h].nTh).clone(!0)[0]).innerHTML="";var v=f.style;v.paddingTop="0",v.paddingBottom="0",v.borderTopWidth="0",v.borderBottomWidth="0",v.height=0,v.width=m.s.aiInnerWidths[h]+"px",T.appendChild(f)}t(">tbody>tr",m.dom.body).each(function(e){var i=this.cloneNode(!1);i.removeAttribute("id");var o=!1===m.s.dt.oFeatures.bServerSide?m.s.dt.aiDisplay[m.s.dt._iDisplayStart+e]:e,n=m.s.dt.aoData[o].anCells||t(this).children("td, th");for(u=0;u<l.length;u++)h=l[u],n.length>0&&(f=t(n[h]).clone(!0,!0)[0],i.appendChild(f));y.appendChild(i)})}else t(">tbody>tr",m.dom.body).each(function(){(f=this.cloneNode(!0)).className+=" DTFC_NoData",t("td",f).html(""),y.appendChild(f)});if(e.body.style.width="100%",e.body.style.margin="0",e.body.style.padding="0",C.oScroller!==o){var b=C.oScroller.dom.force;i.forcer?i.forcer.style.height=b.style.height:(i.forcer=b.cloneNode(!0),i.liner.appendChild(i.forcer))}if(i.liner.appendChild(e.body),this._fnEqualiseHeights("tbody",m.dom.body,e.body),null!==C.nTFoot){if(n){null!==e.footer&&e.footer.parentNode.removeChild(e.footer),e.footer=t(this.dom.footer).clone(!0,!0)[0],e.footer.className+=" DTFC_Cloned",e.footer.style.width="100%",i.foot.appendChild(e.footer),c=this._fnCopyLayout(C.aoFooter,l,!0);var _=t(">tfoot",e.footer);for(_.empty(),s=0,r=c.length;s<r;s++)_[0].appendChild(c[s].nTr);C.oApi._fnDrawHead(C,c,!0)}else{c=this._fnCopyLayout(C.aoFooter,l,!1);var D=[];for(C.oApi._fnDetectHeader(D,t(">tfoot",e.footer)[0]),s=0,r=c.length;s<r;s++)for(d=0,a=c[s].length;d<a;d++)D[s][d].cell.className=c[s][d].cell.className}this._fnEqualiseHeights("tfoot",this.dom.footer,e.footer)}var w=C.oApi._fnGetUniqueThs(C,t(">thead",e.header)[0]);t(w).each(function(t){h=l[t],this.style.width=m.s.aiInnerWidths[h]+"px"}),null!==m.s.dt.nTFoot&&(w=C.oApi._fnGetUniqueThs(C,t(">tfoot",e.footer)[0]),t(w).each(function(t){h=l[t],this.style.width=m.s.aiInnerWidths[h]+"px"}))},_fnGetTrNodes:function(t){for(var e=[],i=0,o=t.childNodes.length;i<o;i++)"TR"==t.childNodes[i].nodeName.toUpperCase()&&e.push(t.childNodes[i]);return e},_fnEqualiseHeights:function(e,i,o){if("none"!=this.s.sHeightMatch||"thead"===e||"tfoot"===e){var l,n,s,r,d,a=i.getElementsByTagName(e)[0],h=o.getElementsByTagName(e)[0],f=t(">"+e+">tr:eq(0)",i).children(":first"),u=(f.outerHeight(),f.height(),this._fnGetTrNodes(a)),c=this._fnGetTrNodes(h),p=[];for(l=0,n=c.length;l<n;l++)r=u[l].offsetHeight,s=(d=c[l].offsetHeight)>r?d:r,"semiauto"==this.s.sHeightMatch&&(u[l]._DTTC_iHeight=s),p.push(s);for(l=0,n=c.length;l<n;l++)c[l].style.height=p[l]+"px",u[l].style.height=p[l]+"px"}}}),n.defaults={iLeftColumns:1,iRightColumns:0,fnDrawCallback:null,sHeightMatch:"semiauto"},n.version="3.2.0",l.Api.register("fixedColumns()",function(){return this}),l.Api.register("fixedColumns().update()",function(){return this.iterator("table",function(t){t._oFixedColumns&&t._oFixedColumns.fnUpdate()})}),l.Api.register("fixedColumns().relayout()",function(){return this.iterator("table",function(t){t._oFixedColumns&&t._oFixedColumns.fnRedrawLayout()})}),l.Api.register("rows().recalcHeight()",function(){return this.iterator("row",function(t,e){t._oFixedColumns&&t._oFixedColumns.fnRecalculateHeight(this.row(e).node())})}),l.Api.register("fixedColumns().rowIndex()",function(e){return(e=t(e)).parents(".DTFC_Cloned").length?this.rows({page:"current"}).indexes()[e.index()]:this.row(e).index()}),l.Api.register("fixedColumns().cellIndex()",function(e){if((e=t(e)).parents(".DTFC_Cloned").length){var i,o=e.parent().index(),l=this.rows({page:"current"}).indexes()[o];if(e.parents(".DTFC_LeftWrapper").length)i=e.index();else i=this.columns().flatten().length-this.context[0]._oFixedColumns.s.iRightColumns+e.index();return{row:l,column:this.column.index("toData",i),columnVisible:i}}return this.cell(e).index()}),t(i).on("init.dt.fixedColumns",function(e,i){if("dt"===e.namespace){var o=i.oInit.fixedColumns,s=l.defaults.fixedColumns;if(o||s){var r=t.extend({},o,s);!1!==o&&new n(i,r)}}}),t.fn.dataTable.FixedColumns=n,t.fn.DataTable.FixedColumns=n,n});