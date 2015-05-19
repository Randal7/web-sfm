module.exports = {

  "name": "Rosetta-Spacecraft",

  "root": "/demo/Rosetta-Spacecraft",

  "images": [
    { "id": 0, "name": "Colour_image_of_comet", "extension": ".jpg" },
    { "id": 1, "name": "Comet_on_5_September_2014", "extension": ".jpg" },
    { "id": 2, "name": "Comet_on_7_August_a", "extension": ".jpg" },
    { "id": 3, "name": "Comet_on_7_August_b", "extension": ".jpg" },
    { "id": 4, "name": "Comet_on_7_December_2014_NavCam", "extension": ".jpg" },
    { "id": 5, "name": "Comet_on_9_December_2014_NavCam", "extension": ".jpg" },
    { "id": 6, "name": "Comet_on_10_December_2014_NavCam", "extension": ".jpg" },
    { "id": 7, "name": "Comet_on_14_September_2014_-_NavCam", "extension": ".jpg" },
    { "id": 8, "name": "Comet_on_17_November_NavCam", "extension": ".jpg" },
    { "id": 9, "name": "Comet_on_19_September_2014_NavCam", "extension": ".jpg" },
    { "id": 10, "name": "Comet_on_22_August_2014_-_NavCam", "extension": ".jpg" },
    { "id": 11, "name": "Comet_on_24_September_NavCam", "extension": ".jpg" },
    { "id": 12, "name": "Comet_on_4_November_NavCam", "extension": ".jpg"},
    { "id": 13, "name": "Comet_on_12_January_2015_NavCam", "extension": ".jpg"},
    { "id": 14, "name": "ESA_Rosetta_Navcam_20150122_mosaic-1024x906", "extension": ".jpg"},
    { "id": 15, "name": "ESA_Rosetta_NavCam_20150131_Mosaic-1024x958", "extension": ".jpg"},
    { "id": 16, "name": "ESA_Rosetta_NavCam_20150203_Mosaic-938x1024", "extension": ".jpg"},

    { "id": 17, "name": "ESA_Rosetta_NAVCAM_20150118_mosaic-950x1024", "extension": ".jpg"},
    { "id": 18, "name": "ESA_Rosetta_NAVCAM_20150121_mosaic-1024x969", "extension": ".jpg"},
    { "id": 19, "name": "False_colour_comet_Hapi_region", "extension": ".jpg"},
    { "id": 20, "name": "Comet_on_21_August_2014_-_NavCam", "extension": ".jpg"},
    { "id": 21, "name": "Comet_on_17_August_2014_-_NavCam", "extension": ".jpg"},
    { "id": 22, "name": "Comet_on_10_January_2015_NavCam", "extension": ".jpg"},
    { "id": 23, "name": "Comet_on_1_January_2015_NavCam", "extension": ".jpg"},
    { "id": 24, "name": "Comet_on_2_December_NavCam", "extension": ".jpg"},
    { "id": 25, "name": "Agilkia_landing_site_6_November_2014", "extension": ".jpg"},
    { "id": 26, "name": "Comet_on_1_December_2014_NavCam", "extension": ".jpg"}

      /*
    { "id": , "name": "", "extension": ""},
*/

  ],

  "desc": '<p>This demo is created using photos captured by <em>Rosetta Spacecraft</em> (<a href="http://rosetta.jpl.nasa.gov/gallery/images/comet-67p/churyumov-gerasimenko" target="_blank">source</a>).</p><p>Structure from Motion of this demo is incomplete, not enough matches are found between the images.<br/>This can be solved by adding manual matching into the application.</p><p>SIFT features are generated from <em>WebSIFT</em> (WebSFM&#39;s javascript implementation of SIFT).</p><p>Feature matches are generated by <em>WebMatcher</em> (WebSFM&#39;s javascript implementation of kd-tree based ANN matcher).</p>',

  "entries": ["image", "feature", "match"]

};