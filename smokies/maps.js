    //<![CDATA[
    var map1;
    var baseIcon = new GIcon();
    baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png";
    baseIcon.iconSize = new GSize(20, 34);
    baseIcon.shadowSize = new GSize(37, 34);
    baseIcon.iconAnchor = new GPoint(9, 34);
    baseIcon.infoWindowAnchor = new GPoint(9, 2);
    baseIcon.infoShadowAnchor = new GPoint(18, 25);

    var top_map;
    var map2;
    var map3;
    var ccmap1;
    var ccmap2;

    // Creates a marker at the given point with the given number label
    function createMarker1(point, number) {
      var marker = new GMarker(point);
      GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml("<b>" + number + "</b>");
      });
      return marker;
    }

    function load_map3(mapfile) {
      if (GBrowserIsCompatible()) {
        // create map3 
        map3 = new GMap2(document.getElementById("map3"));
        map3.setCenter(new GLatLng(35.5000, -83.568), 9);

        // add zoom and sat/map/both controls
        map3.addControl(new GLargeMapControl());
        map3.addControl(new GMapTypeControl());

        // add pushpin
        GDownloadUrl(mapfile, function(data, responseCode) {
          var xml = GXml.parse(data);
          var markers = xml.documentElement.getElementsByTagName("marker");
          var key = "<b><font size=+1>Key:</font></b><br>";
          key += "<table cellspacing=3>";
          for (var i = 0; i < markers.length; i++) {
            var point = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
                            parseFloat(markers[i].getAttribute("lng")));
            var letter = String.fromCharCode("A".charCodeAt(0) + i);
            var markerurl = "http://www.google.com/mapfiles/marker" + letter + ".png";
            var label = markers[i].getAttribute("label");
            map3.addOverlay(createMarker(point, label, i));

            key = key + "<tr><td>" + "<img src=" + markerurl + ">" + "</td><td>" + label + "</td></tr>";
         }
         key += "</table>";
         document.getElementById("sidebar3").innerHTML = key;
       });
      }
    }

    function load_top_map(lat, lon, name) {
      if (GBrowserIsCompatible()) {
        // create top_map 
        top_map = new GMap2(document.getElementById("top_map"));
        //top_map.setCenter(new GLatLng(35.5000, -83.568), 9);
        top_map.setCenter(new GLatLng(35.63, -83.5400), 9);

        // add zoom and sat/map/both controls
        top_map.addControl(new GSmallMapControl());
        top_map.addControl(new GMapTypeControl());

        // add pushpin
        var point = new GLatLng(lat, lon);
        top_map.addOverlay(createMarker1(point, name));
      }
    }

    function load_map2() {
      if (GBrowserIsCompatible()) {
        // create map2 
        map2 = new GMap2(document.getElementById("map2"));
        //map2.setCenter(new GLatLng(35.5000, -83.568), 9);
        map2.setCenter(new GLatLng(35.63, -83.5400), 9);

        // add zoom and sat/map/both controls
        map2.addControl(new GSmallMapControl());
        map2.addControl(new GMapTypeControl());

        // add pushpin
        var point = new GLatLng(35.6331, -83.9422);
        map2.addOverlay(createMarker1(point, "Look Rock"));
      }
    }

    function load_ccmap1() {
      if (GBrowserIsCompatible()) {
        // create ccmap1 
        ccmap1 = new GMap2(document.getElementById("ccmap1"));
        //ccmap1.setCenter(new GLatLng(35.5000, -83.568), 9);
        ccmap1.setCenter(new GLatLng(35.63, -83.5400), 9);

        // add zoom and sat/map/both controls
        ccmap1.addControl(new GSmallMapControl());
        ccmap1.addControl(new GMapTypeControl());

        // add pushpin
        var point = new GLatLng(35.604950,-83.766590);
        ccmap1.addOverlay(createMarker1(point, "Cades Cove"));
      }
    }

    function load_ccmap2() {
      if (GBrowserIsCompatible()) {
        // create map1
        ccmap2 = new GMap2(document.getElementById("ccmap2"));
        ccmap2.setCenter(new GLatLng(35.604950, -83.80), 13);
        //ccmap2.setMapType(G_HYBRID_MAP);

        // add zoom and sat/map/both controls
        //ccmap2.addControl(new GLargeMapControl());
        ccmap2.addControl(new GSmallMapControl());
        ccmap2.addControl(new GMapTypeControl());

        // add pushpins
        // parking area
        //var point = new GLatLng(35.63082591309715, -83.91);
        //ccmap2.addOverlay(createMarker(point, "Parking Area", 0));
      }
    }

    // Creates a marker at the given point with the given label
    function createMarker(point, descr, index) {
      //var marker = new GMarker(point);
      var letter = String.fromCharCode("A".charCodeAt(0) + index);
      var icon = new GIcon(baseIcon);
      icon.image = "http://www.google.com/mapfiles/marker" + letter + ".png";
      var marker = new GMarker(point, icon);
      GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml("<b>" + descr + "</b>");
      });
      return marker;
    }

    function load(map1, map2, ccmap1, ccmap2) {
      if (GBrowserIsCompatible()) {
        if (map2) {
           load_map2();
        }
        if (ccmap1) {
           load_ccmap1();
        }
        if (ccmap2) {
           load_ccmap2();
        }

       if (map1) {
        // create map1
        map1 = new GMap2(document.getElementById("map1"));
        map1.setCenter(new GLatLng(35.6360, -83.9350), 15);
        //map1.setMapType(G_HYBRID_MAP);

        // add zoom and sat/map/both controls
        //map1.addControl(new GLargeMapControl());
        map1.addControl(new GSmallMapControl());
        map1.addControl(new GMapTypeControl());

        // add pushpins
        // parking area
        var point = new GLatLng(35.63082591309715, -83.94063234329224);
        map1.addOverlay(createMarker(point, "Parking Area", 0));
        // air quality station
        var point = new GLatLng(35.63305826934026, -83.94142627716064);
        map1.addOverlay(createMarker(point, "Air Quality Station", 1));
        // fire tower
        var point = new GLatLng(35.63222986316555, -83.94287467002869);
        map1.addOverlay(createMarker(point, "Observation Tower", 2));
        // picnic area
        var point = new GLatLng(35.63748791665544, -83.93983840942383);
        map1.addOverlay(createMarker(point, "Picnic Area", 3));
        // entrance to the campground
        var point = new GLatLng(35.6368775467666, -83.93616914749146);
        map1.addOverlay(createMarker(point, "Campground Entrance", 4));
        // restrooms
        var point = new GLatLng(35.6370, -83.9385);
        map1.addOverlay(createMarker(point, "Restrooms", 5));

        // draw line
        var points = [];
        points.push(new GLatLng(35.63101775866038, -83.94005298614502));
        points.push(new GLatLng(35.63126192507494, -83.93983840942383));
        points.push(new GLatLng(35.63305826934026, -83.9413833618164));
        points.push(new GLatLng(35.632151382135376, -83.94284248352051));
        map1.addOverlay(new GPolyline(points));
       }
      }
    }

    //]]>

