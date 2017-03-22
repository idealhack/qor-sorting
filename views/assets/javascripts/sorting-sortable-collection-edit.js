"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(e){function t(i,n){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,e.isPlainObject(n)&&n),this.init()}var i="qor.collection.sortable",n="enable."+i,o="disable."+i,r="click."+i,s=".qor-sortable__item",d=".qor-sortable__button-change",a=".qor-sortable__button-done",l=".qor-sortable__button-add",f=".qor-sortable__button-delete",c=".qor-sortable__button-move",u=".qor-sortable__action",h=".qor-sortable__action-position",m=".is-delete",b="sortable-collection-loaded";return t.prototype={constructor:t,init:function(){this.bind(),this.initItemOrder()},bind:function(){this.$element.on(r,e.proxy(this.click,this))},unbind:function(){this.$element.off(r,this.click)},initItemOrder:function(i){var n=this.$element.find(s).filter(":visible").not(m);if(n.size()){var o,r,d=n.find(u).find(h),a={},l=n.size(),f=n.first().html();d.size()&&d.remove(),r||(o=f.match(/(\w+)\="(\S*\[\d+\]\S*)"/),o.length&&(o=o[2],r=o.match(/^(\S*)\[(\d+)\]([^\[\]]*)$/),r.length&&(r=r[1]))),n.each(function(n){var o=e(this),s=o.find(u);a.isSelected=!1,a.itemTotal=l,a.itemIndex=n+1,s.prepend('<select class="qor-sortable__action-position"></select>');for(var d=1;l>=d;d++)a.index=d,a.itemIndex==d?a.isSelected=!0:a.isSelected=!1,s.find("select").append(window.Mustache.render(t.OPTION_HTML,a));if(i){var f,c,h,m=/\[\d+\]/.test(r),b=e(this).find('[name^="'+r+'"]');if(!b.length)return;b.each(function(){f=e(this).prop("name"),h=f.match(/\.\w+$/),c="["+a.itemIndex+"]",f=m?f.replace(/\[\d+\]\.\w+$/,""+c+h):f.replace(/\[\d+\]/,c),e(this).prop("name",f)})}o.data(a)})}},moveItem:function(t){var i,n,o=t.closest(s),r=o.data().itemIndex,d=o.find(h).val();d!=r&&(i=1==d?1:r>d?d-1:d,n=this.$element.find(s).filter(function(){return e(this).data().itemIndex==i}),1==d?n.before(o.fadeOut("slow").fadeIn("slow")):n.after(o.fadeOut("slow").fadeIn("slow")),this.initItemOrder(!0))},click:function(t){var i=e(t.target),n=this.$element,o=n.find(s).filter(":visible").not(m);i.is(c)&&this.moveItem(i),i.is(a)&&(i.hide(),n.find(u).hide(),n.find(d).show(),n.find(l).show(),n.find(f).show()),i.is(d)&&o.size()&&(i.hide(),n.find(a).show(),n.find(u).show(),n.find(l).hide(),n.find(f).hide(),this.initItemOrder())},destroy:function(){this.unbind(),this.$element.removeData(i)}},t.DEFAULTS={},t.OPTION_HTML='<option value="[[index]]" [[#isSelected]]selected[[/isSelected]]>[[index]] of [[itemTotal]]</option>',t.plugin=function(n){return this.each(function(){var o,r=e(this),s=r.data(i);if(!s){if(/destroy/.test(n))return;r.data(i,s=new t(this,n))}"string"==typeof n&&e.isFunction(o=s[n])&&o.apply(s)})},e(function(){var i='[data-toggle="qor.collection.sortable"]';e("body").data(b)||(e("body").data(b,!0),e(document).on(o,function(n){t.plugin.call(e(i,n.target),"destroy")}).on(n,function(n){t.plugin.call(e(i,n.target))}).triggerHandler(n))}),t});