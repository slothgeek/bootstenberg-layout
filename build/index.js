(window.webpackJsonp_bootstenberg_layout=window.webpackJsonp_bootstenberg_layout||[]).push([[1],{9:function(e,t,n){}}]),function(e){function t(t){for(var o,l,a=t[0],s=t[1],i=t[2],b=0,p=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp_bootstenberg_layout=window.webpackJsonp_bootstenberg_layout||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;c.push([10,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.compose},,function(e,t,n){"use strict";n.r(t);var o=n(6),r=(n(9),n(4)),c=n.n(r),l=n(7),a=n.n(l),s=n(0),i=n(1),u=n(2),b=n(3),p=n(8),d=n(5),f=Object(s.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(d.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"}));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(p.createHigherOrderComponent)((function(e){return function(t){return"sg-block/bootstenberg-layout"==t.name?Object(s.createElement)(e,c()({},t,{className:"row"})):Object(s.createElement)(e,t)}}),"rowCustomClassName");wp.hooks.addFilter("editor.BlockListBlock","sg-block/bootstenberg-layout",j),Object(o.registerBlockType)("sg-block/bootstenberg-layout",{attributes:{itsSection:{type:"boolean",default:!1},id:{type:"string"},hasContainer:{type:"boolean",default:!1},fullWidth:{type:"boolean",default:!1},showGuide:{type:"boolean",default:!0},style:{type:"object",default:{}}},edit:function(e){var t=e.clientId,n=e.attributes,o=e.setAttributes,r=(0,wp.data.select)("core/block-editor").getBlocksByClientId(t)[0].innerBlocks,l=Object(u.useBlockProps)({className:n.showGuide?"guide":""});return Object(s.createElement)("div",c()({},l,{style:n.style}),Object(s.createElement)(u.BlockControls,null,Object(s.createElement)(b.ToolbarGroup,{class:"sg-toolbar"},Object(s.createElement)(b.ToolbarButton,{icon:f,label:Object(i.__)("Mostrar guía","bootstenberg"),onClick:function(){return o({showGuide:!n.showGuide})},className:n.showGuide?"active":""}))),Object(s.createElement)(u.InspectorControls,null,Object(s.createElement)(b.PanelBody,{title:Object(i.__)("Espacio","bootstenberg"),initialOpen:!1},Object(s.createElement)(b.ToggleControl,{label:"¿Activar sección?",help:n.itsSection?"Sección.":"Solo fila.",checked:n.itsSection,onChange:function(e){return o({itsSection:e})}}),Object(s.createElement)(b.ToggleControl,{label:"¿Activar contenedor?",help:n.hasContainer?"Contenedor.":"Solo fila.",checked:n.hasContainer,onChange:function(e){return o({hasContainer:e})}}),Object(s.createElement)(b.ToggleControl,{label:"¿Ancho completo?",help:n.fullWidth?"Fila.":"Solo fila.",checked:n.fullWidth,onChange:function(e){return o({fullWidth:e})}})),Object(s.createElement)(b.PanelBody,{title:Object(i.__)("Estilo","bootstenberg"),initialOpen:!1},Object(s.createElement)("div",{className:"sg-inspector"},Object(s.createElement)("div",{className:"label"},Object(s.createElement)("span",null,Object(i.__)("Color de fondo","bootstenberg")),Object(s.createElement)("button",{className:"btn-clean",onClick:function(){var e=n.style;delete e.backgroundColor,o({style:e})}},Object(i.__)("Limpiar","bootstenberg"))),Object(s.createElement)(b.ColorPicker,{value:n.style.backgroundColor,onChangeComplete:function(e){return o({style:O(O({},n.style),{},{backgroundColor:e.hex})})}})),Object(s.createElement)("div",{className:"sg-inspector"},Object(s.createElement)("div",{className:"label"},Object(s.createElement)("span",null,Object(i.__)("Color de texto","bootstenberg")),Object(s.createElement)("button",{className:"btn-clean",onClick:function(){var e=n.style;delete e.color,o({style:e})}},Object(i.__)("Limpiar","bootstenberg"))),Object(s.createElement)(b.ColorPicker,{value:n.style.color,onChangeComplete:function(e){return o({style:O(O({},n.style),{},{color:e.hex})})}})))),function(){if(0==r.length)return[Object(s.createElement)("div",{className:"sg-empty-inner-block"},Object(s.createElement)("div",{className:"sg-block-name"},Object(s.createElement)("span",{className:"dashicons dashicons-grid-view"}),Object(i.__)("Layout (Fila)","bootstenberg")),Object(i.__)("Agrega una o más columnas presionando el botón de abajo con el símbolo de más.","bootstenberg"))]}(),Object(s.createElement)(u.InnerBlocks,{allowedBlocks:["sg-block/bootstenberg-columns"],renderAppender:function(){return Object(s.createElement)("div",{class:"apender-container"},Object(s.createElement)(u.InnerBlocks.ButtonBlockAppender,null))}}))},save:function(e){var t=e.attributes,n=void 0!==t.className?t.className:"";return t.hasContainer?Object(s.createElement)("div",{id:t.id,className:"container ".concat(n)},t.itsSection?Object(s.createElement)("section",{className:"row",style:t.style},Object(s.createElement)(u.InnerBlocks.Content,null)):Object(s.createElement)("div",{className:"row",style:t.style},Object(s.createElement)(u.InnerBlocks.Content,null))):t.itsSection?Object(s.createElement)("section",{id:t.id,className:"row ".concat(n).concat(t.fullWidth?" full-width":""),style:t.style},Object(s.createElement)(u.InnerBlocks.Content,null)):Object(s.createElement)("div",{id:t.id,className:"row ".concat(n).concat(t.fullWidth?" full-width":""),style:t.style},Object(s.createElement)(u.InnerBlocks.Content,null))}})}]);