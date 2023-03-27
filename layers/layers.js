var wms_layers = [];

var format_palestine_0 = new ol.format.GeoJSON();
var features_palestine_0 = format_palestine_0.readFeatures(json_palestine_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_palestine_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_palestine_0.addFeatures(features_palestine_0);
var lyr_palestine_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_palestine_0, 
                style: style_palestine_0,
                interactive: true,
                title: '<img src="styles/legend/palestine_0.png" /> palestine'
            });
var format_Palestinian_Communities_Points_1 = new ol.format.GeoJSON();
var features_Palestinian_Communities_Points_1 = format_Palestinian_Communities_Points_1.readFeatures(json_Palestinian_Communities_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palestinian_Communities_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palestinian_Communities_Points_1.addFeatures(features_Palestinian_Communities_Points_1);
var lyr_Palestinian_Communities_Points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Palestinian_Communities_Points_1, 
                style: style_Palestinian_Communities_Points_1,
                interactive: true,
                title: '<img src="styles/legend/Palestinian_Communities_Points_1.png" /> Palestinian_Communities_Points'
            });
var format_districts_2 = new ol.format.GeoJSON();
var features_districts_2 = format_districts_2.readFeatures(json_districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districts_2.addFeatures(features_districts_2);
var lyr_districts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_districts_2, 
                style: style_districts_2,
                interactive: true,
                title: '<img src="styles/legend/districts_2.png" /> districts'
            });

lyr_palestine_0.setVisible(true);lyr_Palestinian_Communities_Points_1.setVisible(true);lyr_districts_2.setVisible(true);
var layersList = [lyr_palestine_0,lyr_Palestinian_Communities_Points_1,lyr_districts_2];
lyr_palestine_0.set('fieldAliases', {'NAME': 'NAME', });
lyr_Palestinian_Communities_Points_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PCBS_CO': 'PCBS_CO', 'NAME_1944': 'NAME_1944', 'GOVERNORAT': 'GOVERNORAT', 'Regon': 'Regon', 'الأسم': 'الأسم', });
lyr_districts_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GOVERNORAT': 'GOVERNORAT', 'GOVERNORAT_1': 'GOVERNORAT_1', 'NAME': 'NAME', 'POP2020': 'POP2020', 'POP2010': 'POP2010', 'NEWPCBS_CO': 'NEWPCBS_CO', });
lyr_palestine_0.set('fieldImages', {'NAME': '', });
lyr_Palestinian_Communities_Points_1.set('fieldImages', {'OBJECTID': '', 'PCBS_CO': '', 'NAME_1944': '', 'GOVERNORAT': '', 'Regon': '', 'الأسم': '', });
lyr_districts_2.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'GOVERNORAT': '', 'GOVERNORAT_1': '', 'NAME': '', 'POP2020': '', 'POP2010': '', 'NEWPCBS_CO': '', });
lyr_palestine_0.set('fieldLabels', {'NAME': 'inline label', });
lyr_Palestinian_Communities_Points_1.set('fieldLabels', {'OBJECTID': 'no label', 'PCBS_CO': 'no label', 'NAME_1944': 'inline label', 'GOVERNORAT': 'no label', 'Regon': 'no label', 'الأسم': 'no label', });
lyr_districts_2.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'no label', 'GOVERNORAT': 'no label', 'GOVERNORAT_1': 'no label', 'NAME': 'inline label', 'POP2020': 'no label', 'POP2010': 'no label', 'NEWPCBS_CO': 'no label', });
lyr_districts_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});