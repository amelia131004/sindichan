var wms_layers = [];

var format_RDTR_KEC_NGAWEN_0 = new ol.format.GeoJSON();
var features_RDTR_KEC_NGAWEN_0 = format_RDTR_KEC_NGAWEN_0.readFeatures(json_RDTR_KEC_NGAWEN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RDTR_KEC_NGAWEN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RDTR_KEC_NGAWEN_0.addFeatures(features_RDTR_KEC_NGAWEN_0);
var lyr_RDTR_KEC_NGAWEN_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RDTR_KEC_NGAWEN_0, 
                style: style_RDTR_KEC_NGAWEN_0,
                popuplayertitle: 'RDTR_KEC_NGAWEN',
                interactive: true,
    title: 'RDTR_KEC_NGAWEN<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_0.png" /> Hutan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_1.png" /> Industri Lainnya<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_2.png" /> Jalan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_3.png" /> Kampung<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_4.png" /> Kantor/Instansi Pemerintahan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_5.png" /> Kebun<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_6.png" /> Kolam/Empang/Tebat<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_7.png" /> Ladang/Tegalan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_8.png" /> Lapangan Olahraga<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_9.png" /> Makam Umum<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_10.png" /> Penggunaan Campuran<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_11.png" /> Pergudangan Tertutup<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_12.png" /> Sawah Irigasi<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_13.png" /> Sawah Non-Irigasi<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_14.png" /> Situ/Embung<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_15.png" /> Sungai<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_16.png" /> Tanah Kosong Belum Diperuntukkan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_17.png" /> Tanah Kosong Sudah Diperuntukkan<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_18.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/RDTR_KEC_NGAWEN_0_19.png" /> <br />'
        });

lyr_RDTR_KEC_NGAWEN_0.setVisible(true);
var layersList = [lyr_RDTR_KEC_NGAWEN_0];
lyr_RDTR_KEC_NGAWEN_0.set('fieldAliases', {'LANDUSE': 'LANDUSE', });
lyr_RDTR_KEC_NGAWEN_0.set('fieldImages', {'LANDUSE': 'TextEdit', });
lyr_RDTR_KEC_NGAWEN_0.set('fieldLabels', {'LANDUSE': 'no label', });
lyr_RDTR_KEC_NGAWEN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});