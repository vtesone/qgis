var wms_layers = [];

var format_Roma_ZToponomastiche_WGS84_0 = new ol.format.GeoJSON();
var features_Roma_ZToponomastiche_WGS84_0 = format_Roma_ZToponomastiche_WGS84_0.readFeatures(json_Roma_ZToponomastiche_WGS84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roma_ZToponomastiche_WGS84_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roma_ZToponomastiche_WGS84_0.addFeatures(features_Roma_ZToponomastiche_WGS84_0);
var lyr_Roma_ZToponomastiche_WGS84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roma_ZToponomastiche_WGS84_0, 
                style: style_Roma_ZToponomastiche_WGS84_0,
                interactive: false,
                title: '<img src="styles/legend/Roma_ZToponomastiche_WGS84_0.png" /> Roma_ZToponomastiche_WGS84'
            });
var format_Roma_Zone_Urbanistiche_WGS84_1 = new ol.format.GeoJSON();
var features_Roma_Zone_Urbanistiche_WGS84_1 = format_Roma_Zone_Urbanistiche_WGS84_1.readFeatures(json_Roma_Zone_Urbanistiche_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roma_Zone_Urbanistiche_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roma_Zone_Urbanistiche_WGS84_1.addFeatures(features_Roma_Zone_Urbanistiche_WGS84_1);
var lyr_Roma_Zone_Urbanistiche_WGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roma_Zone_Urbanistiche_WGS84_1, 
                style: style_Roma_Zone_Urbanistiche_WGS84_1,
                interactive: false,
                title: '<img src="styles/legend/Roma_Zone_Urbanistiche_WGS84_1.png" /> Roma_Zone_Urbanistiche_WGS84'
            });
var format_Roma_Circoscrizioni_WGS84_2 = new ol.format.GeoJSON();
var features_Roma_Circoscrizioni_WGS84_2 = format_Roma_Circoscrizioni_WGS84_2.readFeatures(json_Roma_Circoscrizioni_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roma_Circoscrizioni_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roma_Circoscrizioni_WGS84_2.addFeatures(features_Roma_Circoscrizioni_WGS84_2);
var lyr_Roma_Circoscrizioni_WGS84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roma_Circoscrizioni_WGS84_2, 
                style: style_Roma_Circoscrizioni_WGS84_2,
                interactive: false,
                title: '<img src="styles/legend/Roma_Circoscrizioni_WGS84_2.png" /> Roma_Circoscrizioni_WGS84'
            });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Comuni_LAZIO_01012023Com01012023_WGS84_4 = new ol.format.GeoJSON();
var features_Comuni_LAZIO_01012023Com01012023_WGS84_4 = format_Comuni_LAZIO_01012023Com01012023_WGS84_4.readFeatures(json_Comuni_LAZIO_01012023Com01012023_WGS84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuni_LAZIO_01012023Com01012023_WGS84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuni_LAZIO_01012023Com01012023_WGS84_4.addFeatures(features_Comuni_LAZIO_01012023Com01012023_WGS84_4);
var lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuni_LAZIO_01012023Com01012023_WGS84_4, 
                style: style_Comuni_LAZIO_01012023Com01012023_WGS84_4,
                interactive: false,
                title: '<img src="styles/legend/Comuni_LAZIO_01012023Com01012023_WGS84_4.png" /> Comuni_LAZIO_01012023 — Com01012023_WGS84'
            });
var format_Province_LAZIO_01012023ProvCM01012023_WGS84_5 = new ol.format.GeoJSON();
var features_Province_LAZIO_01012023ProvCM01012023_WGS84_5 = format_Province_LAZIO_01012023ProvCM01012023_WGS84_5.readFeatures(json_Province_LAZIO_01012023ProvCM01012023_WGS84_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_LAZIO_01012023ProvCM01012023_WGS84_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_LAZIO_01012023ProvCM01012023_WGS84_5.addFeatures(features_Province_LAZIO_01012023ProvCM01012023_WGS84_5);
var lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Province_LAZIO_01012023ProvCM01012023_WGS84_5, 
                style: style_Province_LAZIO_01012023ProvCM01012023_WGS84_5,
                interactive: false,
                title: '<img src="styles/legend/Province_LAZIO_01012023ProvCM01012023_WGS84_5.png" /> Province_LAZIO_01012023 — ProvCM01012023_WGS84'
            });
var format_Biodiversit_ittica_acque_correnti_6 = new ol.format.GeoJSON();
var features_Biodiversit_ittica_acque_correnti_6 = format_Biodiversit_ittica_acque_correnti_6.readFeatures(json_Biodiversit_ittica_acque_correnti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biodiversit_ittica_acque_correnti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biodiversit_ittica_acque_correnti_6.addFeatures(features_Biodiversit_ittica_acque_correnti_6);
var lyr_Biodiversit_ittica_acque_correnti_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biodiversit_ittica_acque_correnti_6, 
                style: style_Biodiversit_ittica_acque_correnti_6,
                interactive: true,
                title: '<img src="styles/legend/Biodiversit_ittica_acque_correnti_6.png" /> Biodiversit_ittica_acque_correnti'
            });
var group_Roma = new ol.layer.Group({
                                layers: [lyr_Roma_ZToponomastiche_WGS84_0,lyr_Roma_Zone_Urbanistiche_WGS84_1,lyr_Roma_Circoscrizioni_WGS84_2,],
                                title: "Roma"});

lyr_Roma_ZToponomastiche_WGS84_0.setVisible(true);lyr_Roma_Zone_Urbanistiche_WGS84_1.setVisible(true);lyr_Roma_Circoscrizioni_WGS84_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4.setVisible(true);lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5.setVisible(true);lyr_Biodiversit_ittica_acque_correnti_6.setVisible(true);
var layersList = [group_Roma,lyr_GoogleSatellite_3,lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4,lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5,lyr_Biodiversit_ittica_acque_correnti_6];
lyr_Roma_ZToponomastiche_WGS84_0.set('fieldAliases', {'PRO_COM': 'PRO_COM', 'COD_Z_TOPO': 'COD_Z_TOPO', 'DEN_Z_TOPO': 'DEN_Z_TOPO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Roma_Zone_Urbanistiche_WGS84_1.set('fieldAliases', {'PRO_COM': 'PRO_COM', 'COD_Z_URB': 'COD_Z_URB', 'DEN_Z_URB': 'DEN_Z_URB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Roma_Circoscrizioni_WGS84_2.set('fieldAliases', {'PRO_COM': 'PRO_COM', 'COD_CIRCOS': 'COD_CIRCOS', 'DEN_CIRCOS': 'DEN_CIRCOS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'SHAPE_LENG': 'SHAPE_LENG', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'SHAPE_AREA': 'SHAPE_AREA', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_Biodiversit_ittica_acque_correnti_6.set('fieldAliases', {'fid': 'fid', 'ID_STAZION': 'ID_STAZION', 'COD_STAZIO': 'COD_STAZIO', 'TIPCORSO': 'TIPCORSO', 'CORSOACQUA': 'CORSOACQUA', 'PROV': 'PROV', 'ABRAMIDE': 'ABRAMIDE', 'ACERINA': 'ACERINA', 'ALBORELLA': 'ALBORELLA', 'ALBORELL_1': 'ALBORELL_1', 'ANGUILLA': 'ANGUILLA', 'BARBO_DANU': 'BARBO_DANU', 'BARBO_IBER': 'BARBO_IBER', 'BARBO_PADA': 'BARBO_PADA', 'BARBO_TIBE': 'BARBO_TIBE', 'BRANZINO': 'BRANZINO', 'CAGNETTA': 'CAGNETTA', 'CARASSIO': 'CARASSIO', 'CARASSIO_D': 'CARASSIO_D', 'CARPA': 'CARPA', 'CARPIONE_D': 'CARPIONE_D', 'CAVEDANO': 'CAVEDANO', 'CAVEDANO_E': 'CAVEDANO_E', 'CEFALO': 'CEFALO', 'CHEPPIA': 'CHEPPIA', 'COBITE_COM': 'COBITE_COM', 'COBITE_MAS': 'COBITE_MAS', 'GAMBUSIA': 'GAMBUSIA', 'GHIOZZETTO': 'GHIOZZETTO', 'GHIOZZO_DI': 'GHIOZZO_DI', 'GHIOZZO__1': 'GHIOZZO__1', 'GOBIONE': 'GOBIONE', 'IBRIDO_CAV': 'IBRIDO_CAV', 'IBRIDO_FAR': 'IBRIDO_FAR', 'LAMPREDA_D': 'LAMPREDA_D', 'LAMPREDA_1': 'LAMPREDA_1', 'LAMPREDA_2': 'LAMPREDA_2', 'LASCA': 'LASCA', 'LATTERINO': 'LATTERINO', 'LEUCISCO': 'LEUCISCO', 'LUCCIO': 'LUCCIO', 'LUCIOPERCA': 'LUCIOPERCA', 'MUGGINE_CA': 'MUGGINE_CA', 'NESSUN_PES': 'NESSUN_PES', 'PERSICO_RE': 'PERSICO_RE', 'PERSICO_SO': 'PERSICO_SO', 'PERSICO_TR': 'PERSICO_TR', 'PESCE_GATT': 'PESCE_GATT', 'PESCE_GA_1': 'PESCE_GA_1', 'PESCE_GA_2': 'PESCE_GA_2', 'PSEUDORASB': 'PSEUDORASB', 'RODEO_AMAR': 'RODEO_AMAR', 'ROVELLA': 'ROVELLA', 'RUTILO': 'RUTILO', 'SALMERINO': 'SALMERINO', 'SALPA': 'SALPA', 'SAVETTA': 'SAVETTA', 'SCARDOLA': 'SCARDOLA', 'SILURO': 'SILURO', 'SPINARELLO': 'SPINARELLO', 'TINCA': 'TINCA', 'TRIOTTO': 'TRIOTTO', 'TROTA_FARI': 'TROTA_FARI', 'TROTA_IRID': 'TROTA_IRID', 'TROTA_MACR': 'TROTA_MACR', 'VAIRONE': 'VAIRONE', });
lyr_Roma_ZToponomastiche_WGS84_0.set('fieldImages', {'PRO_COM': '', 'COD_Z_TOPO': '', 'DEN_Z_TOPO': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Roma_Zone_Urbanistiche_WGS84_1.set('fieldImages', {'PRO_COM': 'TextEdit', 'COD_Z_URB': 'TextEdit', 'DEN_Z_URB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Roma_Circoscrizioni_WGS84_2.set('fieldImages', {'PRO_COM': '', 'COD_CIRCOS': '', 'DEN_CIRCOS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_Biodiversit_ittica_acque_correnti_6.set('fieldImages', {'fid': 'Range', 'ID_STAZION': 'Range', 'COD_STAZIO': 'TextEdit', 'TIPCORSO': 'TextEdit', 'CORSOACQUA': 'TextEdit', 'PROV': 'TextEdit', 'ABRAMIDE': 'TextEdit', 'ACERINA': 'TextEdit', 'ALBORELLA': 'TextEdit', 'ALBORELL_1': 'TextEdit', 'ANGUILLA': 'TextEdit', 'BARBO_DANU': 'TextEdit', 'BARBO_IBER': 'TextEdit', 'BARBO_PADA': 'TextEdit', 'BARBO_TIBE': 'TextEdit', 'BRANZINO': 'TextEdit', 'CAGNETTA': 'TextEdit', 'CARASSIO': 'TextEdit', 'CARASSIO_D': 'TextEdit', 'CARPA': 'TextEdit', 'CARPIONE_D': 'TextEdit', 'CAVEDANO': 'TextEdit', 'CAVEDANO_E': 'TextEdit', 'CEFALO': 'TextEdit', 'CHEPPIA': 'TextEdit', 'COBITE_COM': 'TextEdit', 'COBITE_MAS': 'TextEdit', 'GAMBUSIA': 'TextEdit', 'GHIOZZETTO': 'TextEdit', 'GHIOZZO_DI': 'TextEdit', 'GHIOZZO__1': 'TextEdit', 'GOBIONE': 'TextEdit', 'IBRIDO_CAV': 'TextEdit', 'IBRIDO_FAR': 'TextEdit', 'LAMPREDA_D': 'TextEdit', 'LAMPREDA_1': 'TextEdit', 'LAMPREDA_2': 'TextEdit', 'LASCA': 'TextEdit', 'LATTERINO': 'TextEdit', 'LEUCISCO': 'TextEdit', 'LUCCIO': 'TextEdit', 'LUCIOPERCA': 'TextEdit', 'MUGGINE_CA': 'TextEdit', 'NESSUN_PES': 'TextEdit', 'PERSICO_RE': 'TextEdit', 'PERSICO_SO': 'TextEdit', 'PERSICO_TR': 'TextEdit', 'PESCE_GATT': 'TextEdit', 'PESCE_GA_1': 'TextEdit', 'PESCE_GA_2': 'TextEdit', 'PSEUDORASB': 'TextEdit', 'RODEO_AMAR': 'TextEdit', 'ROVELLA': 'TextEdit', 'RUTILO': 'TextEdit', 'SALMERINO': 'TextEdit', 'SALPA': 'TextEdit', 'SAVETTA': 'TextEdit', 'SCARDOLA': 'TextEdit', 'SILURO': 'TextEdit', 'SPINARELLO': 'TextEdit', 'TINCA': 'TextEdit', 'TRIOTTO': 'TextEdit', 'TROTA_FARI': 'TextEdit', 'TROTA_IRID': 'TextEdit', 'TROTA_MACR': 'TextEdit', 'VAIRONE': 'TextEdit', });
lyr_Roma_ZToponomastiche_WGS84_0.set('fieldLabels', {});
lyr_Roma_Zone_Urbanistiche_WGS84_1.set('fieldLabels', {});
lyr_Roma_Circoscrizioni_WGS84_2.set('fieldLabels', {});
lyr_Comuni_LAZIO_01012023Com01012023_WGS84_4.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'SHAPE_LENG': 'no label', 'Shape_Le_1': 'no label', });
lyr_Province_LAZIO_01012023ProvCM01012023_WGS84_5.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'DEN_PROV': 'no label', 'DEN_CM': 'no label', 'DEN_UTS': 'no label', 'SIGLA': 'no label', 'TIPO_UTS': 'no label', 'SHAPE_AREA': 'no label', 'Shape_Ar_1': 'no label', });
lyr_Biodiversit_ittica_acque_correnti_6.set('fieldLabels', {'fid': 'no label', 'ID_STAZION': 'no label', 'COD_STAZIO': 'no label', 'TIPCORSO': 'no label', 'CORSOACQUA': 'no label', 'PROV': 'no label', 'ABRAMIDE': 'no label', 'ACERINA': 'no label', 'ALBORELLA': 'no label', 'ALBORELL_1': 'no label', 'ANGUILLA': 'no label', 'BARBO_DANU': 'no label', 'BARBO_IBER': 'no label', 'BARBO_PADA': 'no label', 'BARBO_TIBE': 'no label', 'BRANZINO': 'no label', 'CAGNETTA': 'no label', 'CARASSIO': 'no label', 'CARASSIO_D': 'no label', 'CARPA': 'no label', 'CARPIONE_D': 'no label', 'CAVEDANO': 'no label', 'CAVEDANO_E': 'no label', 'CEFALO': 'no label', 'CHEPPIA': 'no label', 'COBITE_COM': 'no label', 'COBITE_MAS': 'no label', 'GAMBUSIA': 'no label', 'GHIOZZETTO': 'no label', 'GHIOZZO_DI': 'no label', 'GHIOZZO__1': 'no label', 'GOBIONE': 'no label', 'IBRIDO_CAV': 'no label', 'IBRIDO_FAR': 'no label', 'LAMPREDA_D': 'no label', 'LAMPREDA_1': 'no label', 'LAMPREDA_2': 'no label', 'LASCA': 'no label', 'LATTERINO': 'no label', 'LEUCISCO': 'no label', 'LUCCIO': 'no label', 'LUCIOPERCA': 'no label', 'MUGGINE_CA': 'no label', 'NESSUN_PES': 'no label', 'PERSICO_RE': 'no label', 'PERSICO_SO': 'no label', 'PERSICO_TR': 'no label', 'PESCE_GATT': 'no label', 'PESCE_GA_1': 'no label', 'PESCE_GA_2': 'no label', 'PSEUDORASB': 'no label', 'RODEO_AMAR': 'no label', 'ROVELLA': 'no label', 'RUTILO': 'no label', 'SALMERINO': 'no label', 'SALPA': 'no label', 'SAVETTA': 'no label', 'SCARDOLA': 'no label', 'SILURO': 'no label', 'SPINARELLO': 'no label', 'TINCA': 'no label', 'TRIOTTO': 'no label', 'TROTA_FARI': 'no label', 'TROTA_IRID': 'no label', 'TROTA_MACR': 'no label', 'VAIRONE': 'no label', });
lyr_Biodiversit_ittica_acque_correnti_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});