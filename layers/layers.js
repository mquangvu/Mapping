var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_WA_POLYGONS_1 = new ol.format.GeoJSON();
var features_WA_POLYGONS_1 = format_WA_POLYGONS_1.readFeatures(json_WA_POLYGONS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_POLYGONS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_POLYGONS_1.addFeatures(features_WA_POLYGONS_1);
var lyr_WA_POLYGONS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WA_POLYGONS_1,
maxResolution:28.00446615226196,
 
                style: style_WA_POLYGONS_1,
                interactive: true,
                title: '<img src="styles/legend/WA_POLYGONS_1.png" /> W(A)_POLYGONS'
            });
var format_MOA_POLYGONS_2 = new ol.format.GeoJSON();
var features_MOA_POLYGONS_2 = format_MOA_POLYGONS_2.readFeatures(json_MOA_POLYGONS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOA_POLYGONS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOA_POLYGONS_2.addFeatures(features_MOA_POLYGONS_2);
var lyr_MOA_POLYGONS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOA_POLYGONS_2,
maxResolution:28.00446615226196,
 
                style: style_MOA_POLYGONS_2,
                interactive: true,
                title: '<img src="styles/legend/MOA_POLYGONS_2.png" /> MO(A)_POLYGONS'
            });
var format_BA_POLYGONS_3 = new ol.format.GeoJSON();
var features_BA_POLYGONS_3 = format_BA_POLYGONS_3.readFeatures(json_BA_POLYGONS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_POLYGONS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_POLYGONS_3.addFeatures(features_BA_POLYGONS_3);
var lyr_BA_POLYGONS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_POLYGONS_3,
maxResolution:28.00446615226196,
 
                style: style_BA_POLYGONS_3,
                interactive: true,
                title: '<img src="styles/legend/BA_POLYGONS_3.png" /> B(A)_POLYGONS'
            });
var format_CTA_POLYGONS_4 = new ol.format.GeoJSON();
var features_CTA_POLYGONS_4 = format_CTA_POLYGONS_4.readFeatures(json_CTA_POLYGONS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTA_POLYGONS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTA_POLYGONS_4.addFeatures(features_CTA_POLYGONS_4);
var lyr_CTA_POLYGONS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CTA_POLYGONS_4,
maxResolution:28.00446615226196,
 
                style: style_CTA_POLYGONS_4,
                interactive: true,
                title: '<img src="styles/legend/CTA_POLYGONS_4.png" /> CT(A)_POLYGONS'
            });
var format_SCZ_5 = new ol.format.GeoJSON();
var features_SCZ_5 = format_SCZ_5.readFeatures(json_SCZ_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCZ_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCZ_5.addFeatures(features_SCZ_5);
var lyr_SCZ_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCZ_5, 
                style: style_SCZ_5,
                interactive: true,
                title: '<img src="styles/legend/SCZ_5.png" /> SCZ'
            });
var format_SCZforMT_6 = new ol.format.GeoJSON();
var features_SCZforMT_6 = format_SCZforMT_6.readFeatures(json_SCZforMT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCZforMT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCZforMT_6.addFeatures(features_SCZforMT_6);
var lyr_SCZforMT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCZforMT_6, 
                style: style_SCZforMT_6,
                interactive: true,
                title: '<img src="styles/legend/SCZforMT_6.png" /> SCZ for MT'
            });
var format_WL_POLYLINES_7 = new ol.format.GeoJSON();
var features_WL_POLYLINES_7 = format_WL_POLYLINES_7.readFeatures(json_WL_POLYLINES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WL_POLYLINES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WL_POLYLINES_7.addFeatures(features_WL_POLYLINES_7);
var lyr_WL_POLYLINES_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WL_POLYLINES_7, 
                style: style_WL_POLYLINES_7,
                interactive: true,
                title: '<img src="styles/legend/WL_POLYLINES_7.png" /> W(L)_POLYLINES'
            });
var format_WL_POINTS_8 = new ol.format.GeoJSON();
var features_WL_POINTS_8 = format_WL_POINTS_8.readFeatures(json_WL_POINTS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WL_POINTS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WL_POINTS_8.addFeatures(features_WL_POINTS_8);
var lyr_WL_POINTS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WL_POINTS_8, 
                style: style_WL_POINTS_8,
                interactive: true,
                title: '<img src="styles/legend/WL_POINTS_8.png" /> W(L)_POINTS'
            });
var format_DisttoMO_9 = new ol.format.GeoJSON();
var features_DisttoMO_9 = format_DisttoMO_9.readFeatures(json_DisttoMO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DisttoMO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisttoMO_9.addFeatures(features_DisttoMO_9);
var lyr_DisttoMO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DisttoMO_9, 
                style: style_DisttoMO_9,
                interactive: true,
                title: '<img src="styles/legend/DisttoMO_9.png" /> Dist to MO'
            });
var format_WA_POINTS_10 = new ol.format.GeoJSON();
var features_WA_POINTS_10 = format_WA_POINTS_10.readFeatures(json_WA_POINTS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_POINTS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_POINTS_10.addFeatures(features_WA_POINTS_10);
var lyr_WA_POINTS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WA_POINTS_10, 
                style: style_WA_POINTS_10,
                interactive: true,
                title: '<img src="styles/legend/WA_POINTS_10.png" /> W(A)_POINTS'
            });
var format_VGP_11 = new ol.format.GeoJSON();
var features_VGP_11 = format_VGP_11.readFeatures(json_VGP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VGP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VGP_11.addFeatures(features_VGP_11);
var lyr_VGP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VGP_11, 
                style: style_VGP_11,
                interactive: true,
                title: '<img src="styles/legend/VGP_11.png" /> VG(P)'
            });
var format_MOP_12 = new ol.format.GeoJSON();
var features_MOP_12 = format_MOP_12.readFeatures(json_MOP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOP_12.addFeatures(features_MOP_12);
var lyr_MOP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOP_12, 
                style: style_MOP_12,
                interactive: true,
                title: '<img src="styles/legend/MOP_12.png" /> MO(P)'
            });
var format_MOA_POINTS_13 = new ol.format.GeoJSON();
var features_MOA_POINTS_13 = format_MOA_POINTS_13.readFeatures(json_MOA_POINTS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOA_POINTS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOA_POINTS_13.addFeatures(features_MOA_POINTS_13);
var lyr_MOA_POINTS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOA_POINTS_13, 
                style: style_MOA_POINTS_13,
                interactive: true,
                title: '<img src="styles/legend/MOA_POINTS_13.png" /> MO(A)_POINTS'
            });
var format_MFL_POLYLINES_14 = new ol.format.GeoJSON();
var features_MFL_POLYLINES_14 = format_MFL_POLYLINES_14.readFeatures(json_MFL_POLYLINES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MFL_POLYLINES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MFL_POLYLINES_14.addFeatures(features_MFL_POLYLINES_14);
var lyr_MFL_POLYLINES_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MFL_POLYLINES_14, 
                style: style_MFL_POLYLINES_14,
                interactive: true,
                title: '<img src="styles/legend/MFL_POLYLINES_14.png" /> MF(L)_POLYLINES'
            });
var format_MFL_POINTS_15 = new ol.format.GeoJSON();
var features_MFL_POINTS_15 = format_MFL_POINTS_15.readFeatures(json_MFL_POINTS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MFL_POINTS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MFL_POINTS_15.addFeatures(features_MFL_POINTS_15);
var lyr_MFL_POINTS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MFL_POINTS_15, 
                style: style_MFL_POINTS_15,
                interactive: true,
                title: '<img src="styles/legend/MFL_POINTS_15.png" /> MF(L)_POINTS'
            });
var format_MFA_POINTS_16 = new ol.format.GeoJSON();
var features_MFA_POINTS_16 = format_MFA_POINTS_16.readFeatures(json_MFA_POINTS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MFA_POINTS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MFA_POINTS_16.addFeatures(features_MFA_POINTS_16);
var lyr_MFA_POINTS_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MFA_POINTS_16, 
                style: style_MFA_POINTS_16,
                interactive: true,
                title: '<img src="styles/legend/MFA_POINTS_16.png" /> MF(A)_POINTS'
            });
var format_MFA_POLYLINES_17 = new ol.format.GeoJSON();
var features_MFA_POLYLINES_17 = format_MFA_POLYLINES_17.readFeatures(json_MFA_POLYLINES_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MFA_POLYLINES_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MFA_POLYLINES_17.addFeatures(features_MFA_POLYLINES_17);
var lyr_MFA_POLYLINES_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MFA_POLYLINES_17, 
                style: style_MFA_POLYLINES_17,
                interactive: true,
                title: '<img src="styles/legend/MFA_POLYLINES_17.png" /> MF(A)_POLYLINES'
            });
var format_FL_POLYLINES_18 = new ol.format.GeoJSON();
var features_FL_POLYLINES_18 = format_FL_POLYLINES_18.readFeatures(json_FL_POLYLINES_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FL_POLYLINES_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FL_POLYLINES_18.addFeatures(features_FL_POLYLINES_18);
var lyr_FL_POLYLINES_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FL_POLYLINES_18, 
                style: style_FL_POLYLINES_18,
                interactive: true,
                title: '<img src="styles/legend/FL_POLYLINES_18.png" /> F(L)_POLYLINES'
            });
var format_FL_POINTS_19 = new ol.format.GeoJSON();
var features_FL_POINTS_19 = format_FL_POINTS_19.readFeatures(json_FL_POINTS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FL_POINTS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FL_POINTS_19.addFeatures(features_FL_POINTS_19);
var lyr_FL_POINTS_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FL_POINTS_19, 
                style: style_FL_POINTS_19,
                interactive: true,
                title: '<img src="styles/legend/FL_POINTS_19.png" /> F(L)_POINTS'
            });
var format_CTA_POINTS_20 = new ol.format.GeoJSON();
var features_CTA_POINTS_20 = format_CTA_POINTS_20.readFeatures(json_CTA_POINTS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTA_POINTS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTA_POINTS_20.addFeatures(features_CTA_POINTS_20);
var lyr_CTA_POINTS_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CTA_POINTS_20, 
                style: style_CTA_POINTS_20,
                interactive: true,
                title: '<img src="styles/legend/CTA_POINTS_20.png" /> CT(A)_POINTS'
            });
var format_CFP_21 = new ol.format.GeoJSON();
var features_CFP_21 = format_CFP_21.readFeatures(json_CFP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CFP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CFP_21.addFeatures(features_CFP_21);
var lyr_CFP_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CFP_21, 
                style: style_CFP_21,
                interactive: true,
                title: '<img src="styles/legend/CFP_21.png" /> CF(P)'
            });
var format_CP_22 = new ol.format.GeoJSON();
var features_CP_22 = format_CP_22.readFeatures(json_CP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_22.addFeatures(features_CP_22);
var lyr_CP_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CP_22, 
                style: style_CP_22,
                interactive: true,
                title: '<img src="styles/legend/CP_22.png" /> C(P)'
            });
var format_BA_POINTS_23 = new ol.format.GeoJSON();
var features_BA_POINTS_23 = format_BA_POINTS_23.readFeatures(json_BA_POINTS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BA_POINTS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA_POINTS_23.addFeatures(features_BA_POINTS_23);
var lyr_BA_POINTS_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA_POINTS_23, 
                style: style_BA_POINTS_23,
                interactive: true,
                title: '<img src="styles/legend/BA_POINTS_23.png" /> B(A)_POINTS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WA_POLYGONS_1.setVisible(true);lyr_MOA_POLYGONS_2.setVisible(true);lyr_BA_POLYGONS_3.setVisible(true);lyr_CTA_POLYGONS_4.setVisible(true);lyr_SCZ_5.setVisible(true);lyr_SCZforMT_6.setVisible(true);lyr_WL_POLYLINES_7.setVisible(true);lyr_WL_POINTS_8.setVisible(true);lyr_DisttoMO_9.setVisible(true);lyr_WA_POINTS_10.setVisible(true);lyr_VGP_11.setVisible(true);lyr_MOP_12.setVisible(true);lyr_MOA_POINTS_13.setVisible(true);lyr_MFL_POLYLINES_14.setVisible(true);lyr_MFL_POINTS_15.setVisible(true);lyr_MFA_POINTS_16.setVisible(true);lyr_MFA_POLYLINES_17.setVisible(true);lyr_FL_POLYLINES_18.setVisible(true);lyr_FL_POINTS_19.setVisible(true);lyr_CTA_POINTS_20.setVisible(true);lyr_CFP_21.setVisible(true);lyr_CP_22.setVisible(true);lyr_BA_POINTS_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WA_POLYGONS_1,lyr_MOA_POLYGONS_2,lyr_BA_POLYGONS_3,lyr_CTA_POLYGONS_4,lyr_SCZ_5,lyr_SCZforMT_6,lyr_WL_POLYLINES_7,lyr_WL_POINTS_8,lyr_DisttoMO_9,lyr_WA_POINTS_10,lyr_VGP_11,lyr_MOP_12,lyr_MOA_POINTS_13,lyr_MFL_POLYLINES_14,lyr_MFL_POINTS_15,lyr_MFA_POINTS_16,lyr_MFA_POLYLINES_17,lyr_FL_POLYLINES_18,lyr_FL_POINTS_19,lyr_CTA_POINTS_20,lyr_CFP_21,lyr_CP_22,lyr_BA_POINTS_23];
lyr_WA_POLYGONS_1.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MOA_POLYGONS_2.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_BA_POLYGONS_3.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_CTA_POLYGONS_4.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_SCZ_5.set('fieldAliases', {'fid': 'fid', 'Row Number': 'Row Number', 'Sample ID': 'Sample ID', 'Distance [m]': 'Distance [m]', 'Latitude [WGS84]': 'Latitude [WGS84]', 'Longitude [WGS84]': 'Longitude [WGS84]', 'Altitude [m]': 'Altitude [m]', 'Estimated Stress [MPa]': 'Estimated Stress [MPa]', '%SMYS': '%SMYS', 'Delete': 'Delete', 'Comments': 'Comments', 'Comments_1': 'Comments_1', 'Comments_2': 'Comments_2', 'Reduce': 'Reduce', 'Combined': 'Combined', });
lyr_SCZforMT_6.set('fieldAliases', {'Name': 'Name', 'Latitude [WGS84]': 'Latitude [WGS84]', 'Longitude [WGS84]': 'Longitude [WGS84]', 'Code': 'Code', '%SMYS': '%SMYS', });
lyr_WL_POLYLINES_7.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_WL_POINTS_8.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_DisttoMO_9.set('fieldAliases', {'Name': 'Name', 'Latitude [WGS84]': 'Latitude [WGS84]', 'Longitude [WGS84]': 'Longitude [WGS84]', 'Code': 'Code', '%SMYS': '%SMYS', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_WA_POINTS_10.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_VGP_11.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MOP_12.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MOA_POINTS_13.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MFL_POLYLINES_14.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MFL_POINTS_15.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MFA_POINTS_16.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_MFA_POLYLINES_17.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_FL_POLYLINES_18.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_FL_POINTS_19.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_CTA_POINTS_20.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_CFP_21.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_CP_22.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_BA_POINTS_23.set('fieldAliases', {'OBJNAME': 'OBJNAME', });
lyr_WA_POLYGONS_1.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_MOA_POLYGONS_2.set('fieldImages', {'OBJNAME': '', });
lyr_BA_POLYGONS_3.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_CTA_POLYGONS_4.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_SCZ_5.set('fieldImages', {'fid': 'TextEdit', 'Row Number': 'Range', 'Sample ID': 'Range', 'Distance [m]': 'TextEdit', 'Latitude [WGS84]': 'TextEdit', 'Longitude [WGS84]': 'TextEdit', 'Altitude [m]': 'TextEdit', 'Estimated Stress [MPa]': 'Range', '%SMYS': 'Range', 'Delete': 'CheckBox', 'Comments': 'TextEdit', 'Comments_1': 'TextEdit', 'Comments_2': 'TextEdit', 'Reduce': 'CheckBox', 'Combined': 'TextEdit', });
lyr_SCZforMT_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude [WGS84]': 'TextEdit', 'Longitude [WGS84]': 'TextEdit', 'Code': 'TextEdit', '%SMYS': 'TextEdit', });
lyr_WL_POLYLINES_7.set('fieldImages', {'OBJNAME': '', });
lyr_WL_POINTS_8.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_DisttoMO_9.set('fieldImages', {'Name': '', 'Latitude [WGS84]': '', 'Longitude [WGS84]': '', 'Code': '', '%SMYS': '', 'HubName': '', 'HubDist': '', });
lyr_WA_POINTS_10.set('fieldImages', {'OBJNAME': '', });
lyr_VGP_11.set('fieldImages', {'OBJNAME': '', });
lyr_MOP_12.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_MOA_POINTS_13.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_MFL_POLYLINES_14.set('fieldImages', {'OBJNAME': '', });
lyr_MFL_POINTS_15.set('fieldImages', {'OBJNAME': '', });
lyr_MFA_POINTS_16.set('fieldImages', {'OBJNAME': '', });
lyr_MFA_POLYLINES_17.set('fieldImages', {'OBJNAME': '', });
lyr_FL_POLYLINES_18.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_FL_POINTS_19.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_CTA_POINTS_20.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_CFP_21.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_CP_22.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_BA_POINTS_23.set('fieldImages', {'OBJNAME': 'TextEdit', });
lyr_WA_POLYGONS_1.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MOA_POLYGONS_2.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_BA_POLYGONS_3.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_CTA_POLYGONS_4.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_SCZ_5.set('fieldLabels', {'fid': 'inline label', 'Row Number': 'inline label', 'Sample ID': 'inline label', 'Distance [m]': 'inline label', 'Latitude [WGS84]': 'inline label', 'Longitude [WGS84]': 'inline label', 'Altitude [m]': 'inline label', 'Estimated Stress [MPa]': 'inline label', '%SMYS': 'inline label', 'Delete': 'inline label', 'Comments': 'inline label', 'Comments_1': 'inline label', 'Comments_2': 'inline label', 'Reduce': 'inline label', 'Combined': 'inline label', });
lyr_SCZforMT_6.set('fieldLabels', {'Name': 'inline label', 'Latitude [WGS84]': 'inline label', 'Longitude [WGS84]': 'inline label', 'Code': 'inline label', '%SMYS': 'inline label', });
lyr_WL_POLYLINES_7.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_WL_POINTS_8.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_DisttoMO_9.set('fieldLabels', {'Name': 'inline label', 'Latitude [WGS84]': 'inline label', 'Longitude [WGS84]': 'inline label', 'Code': 'inline label', '%SMYS': 'inline label', 'HubName': 'inline label', 'HubDist': 'inline label', });
lyr_WA_POINTS_10.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_VGP_11.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MOP_12.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MOA_POINTS_13.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MFL_POLYLINES_14.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MFL_POINTS_15.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MFA_POINTS_16.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_MFA_POLYLINES_17.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_FL_POLYLINES_18.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_FL_POINTS_19.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_CTA_POINTS_20.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_CFP_21.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_CP_22.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_BA_POINTS_23.set('fieldLabels', {'OBJNAME': 'inline label', });
lyr_BA_POINTS_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});