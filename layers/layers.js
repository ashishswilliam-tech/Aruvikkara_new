var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Aruvikkara01_1 = new ol.format.GeoJSON();
var features_Aruvikkara01_1 = format_Aruvikkara01_1.readFeatures(json_Aruvikkara01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aruvikkara01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aruvikkara01_1.addFeatures(features_Aruvikkara01_1);
var lyr_Aruvikkara01_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aruvikkara01_1, 
                style: style_Aruvikkara01_1,
                popuplayertitle: 'Aruvikkara01',
                interactive: false,
                title: '<img src="styles/legend/Aruvikkara01_1.png" /> Aruvikkara01'
            });
var format_geomorphology02_2 = new ol.format.GeoJSON();
var features_geomorphology02_2 = format_geomorphology02_2.readFeatures(json_geomorphology02_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphology02_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology02_2.addFeatures(features_geomorphology02_2);
var lyr_geomorphology02_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology02_2, 
                style: style_geomorphology02_2,
                popuplayertitle: 'geomorphology02',
                interactive: false,
    title: 'geomorphology02<br />\
    <img src="styles/legend/geomorphology02_2_0.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphology02_2_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphology02_2_2.png" /> Residual Hill<br />\
    <img src="styles/legend/geomorphology02_2_3.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphology02_2_4.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphology02_2_5.png" /> Water Body<br />\
    <img src="styles/legend/geomorphology02_2_6.png" /> <br />' });
var format_Asset_3 = new ol.format.GeoJSON();
var features_Asset_3 = format_Asset_3.readFeatures(json_Asset_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asset_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asset_3.addFeatures(features_Asset_3);
var lyr_Asset_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asset_3, 
                style: style_Asset_3,
                popuplayertitle: 'Asset',
                interactive: false,
                title: '<img src="styles/legend/Asset_3.png" /> Asset'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Aruvikkara01_1.setVisible(true);lyr_geomorphology02_2.setVisible(true);lyr_Asset_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Aruvikkara01_1,lyr_geomorphology02_2,lyr_Asset_3];
lyr_Aruvikkara01_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'name_ml': 'name_ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_geomorphology02_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Asset_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', 'mycode': 'mycode', });
lyr_Aruvikkara01_1.set('fieldImages', {'admin_leve': '', 'boundary': 'TextEdit', 'local_auth': '', 'name': 'TextEdit', 'name_ml': '', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_geomorphology02_2.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Asset_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', 'mycode': 'TextEdit', });
lyr_Aruvikkara01_1.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'name_ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_geomorphology02_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Asset_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', 'mycode': 'no label', });
lyr_Asset_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});