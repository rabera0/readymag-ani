import{a as n}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CY2FEJLT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-5EGHSVLS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-MWOSWUM3.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S2UTM4FX.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-D6J5HC4D.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-URFCP7B2.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IWCOVASN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CQ3QLQK5.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-YM5H3BT6.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-MVDJARLS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-T6TN5YO4.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-W5OZJVNV.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PTOZSKV6.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-PSGGD2IQ.js";import{a as o,b as m}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LUPS5IAT.js";import{a,b as l}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-WEREZOGV.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-A23WIZTM.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CXA7FWYL.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-ZWSDUWXW.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-GDSGTKKB.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6P4KCQ22.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-SHJ7QGQT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CYBVJMMN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-UMLFVHKK.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-FFSQZJFP.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-C3SKTX2K.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-Z4COXDDT.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-6KVCTNLD.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-O4L6L2GG.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VMLLFM4X.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-BDTBHKNZ.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-LA3FLWVR.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-U6WQ4G6W.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-7ZY2VSVL.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-VPHMCDHS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-5JZ2YWXB.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-DQFZXCVV.js";import{a as g}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-H3ZPPNIG.js";import{b as p}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-S4OSB3PN.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-KI5HOILD.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-IJGABWID.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-CD44EXNS.js";import"https://st-p.rmcdn.net/a09f30ec/dist/c/c-SLUQJE2K.js";import{d as r}from"https://st-p.rmcdn.net/a09f30ec/dist/c/c-4X7D5KOI.js";var h=r(g()),d=r(p());l();m();var c=n.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,render:function(){this.makeBox("widget-gmaps"),this.$el.html((0,h.default)('<div class="map-container"></div>')),this.rendered=!0;let e=this.api_key;return this.mag&&this.mag.opts&&this.mag.opts.gmaps_key&&this.mag.opts.gmaps_key!==this.api_key&&(e=this.mag.opts.gmaps_key),a.initGMapsAPI(e,function(){this.destroyed||d.default.defer(function(){if(this.destroyed)return;let s;o.isOn(this.page.pageViewport,this.mag.getViewportWidth(this.page.pageViewport),this.mag.viewOpts)&&this.scale(),this.map=new google.maps.Map(this.$(".map-container").get(0),{zoom:this.map_zoom,center:new google.maps.LatLng(this.center_lat,this.center_lng),mapTypeId:this.map_type_id||google.maps.MapTypeId.ROADMAP,disableDefaultUI:!this.show_controls,streetViewControl:!1,scrollwheel:this.scrollwheel===void 0||!!this.scrollwheel}),this.marker_lat&&this.marker_lng&&this.current_type!=="directions"&&(this.marker=new google.maps.Marker({map:this.map,position:new google.maps.LatLng(this.marker_lat,this.marker_lng)}),google.maps.event.addListener(this.marker,"click",function(){this.infowindow&&this.infowindow.open(this.map,this.marker)}.bind(this)),this.infowindow=new google.maps.InfoWindow({maxWidth:this.w-100}),this.formatted_address?this.infowindow.setContent(this.formatted_address):(s=new google.maps.Geocoder,s.geocode({latLng:new google.maps.LatLng(this.marker_lat,this.marker_lng)},function(t,i){i===google.maps.GeocoderStatus.OK&&t[0]&&this.infowindow.setContent(t[0].formatted_address)}.bind(this)))),this.current_type==="directions"&&this.direction_start_lat&&this.direction_start_lng&&this.direction_end_lat&&this.direction_end_lng&&this.direction_route_type?(this.directionsService=new google.maps.DirectionsService,this.directionsDisplay=new google.maps.DirectionsRenderer({preserveViewport:!0}),this.directionsService.route({origin:new google.maps.LatLng(this.direction_start_lat,this.direction_start_lng),destination:new google.maps.LatLng(this.direction_end_lat,this.direction_end_lng),travelMode:google.maps.TravelMode[this.direction_route_type.toUpperCase()]},function(t,i){i===google.maps.DirectionsStatus.OK&&(this.directionsDisplay.setDirections(t),this.directionsDisplay.setMap(this.map),google.maps.event.addListener(this.map,"tilesloaded",function(){this.widgetIsLoaded()}.bind(this)))}.bind(this))):google.maps.event.addListener(this.map,"tilesloaded",function(){this.widgetIsLoaded()}.bind(this)),this.current_type==="custom"&&this.custom_json&&this.map.setOptions({styles:JSON.parse(this.custom_json)})}.bind(this))}.bind(this)),this},scale:function(){let e=this.mag.getScale(this.page.pageViewport),s=this.$(".map-container");if(o.isCSSZoom())s.css("zoom",1/e);else if(o.isCSSTransform()){let t=e*100,i=(t-100)/2;s.css({transform:"scale("+1/e+") translate(-"+i+"%, -"+i+"%)",width:t+"%",height:t+"%"})}},start:function(){return this.started=!0,!this.rendered||this.destroyed||!this.map?this:(google.maps.event.trigger(this.map,"resize"),this.map.setCenter(new google.maps.LatLng(this.center_lat,this.center_lng)),this)},destroy:function(){return this.map&&google.maps.event.clearListeners(this.map,"tilesloaded"),this.marker&&google.maps.event.clearListeners(this.marker,"click"),n.prototype.destroy.apply(this,arguments)}}),u=c;export{u as default};