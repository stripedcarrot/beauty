
var dublinServiceProviders=[
    {
        name:"Ultimate Hair & Beauty",
        addressLine1 :"Stephens Green Centre, Grafton Street",
        addressLine2 :"King Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 11111111",
        contactName:"Joe",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.hairtoday.ie",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/1.jpg"
    },
    {
        name:"Peter Marks",
        addressLine1 :"78",
        addressLine2 :"Terenure",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 2222222",
        contactName:"Eugene",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.petermark.ie",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/2.jpg"
    },
    {
        name:"Boston Belle",
        addressLine1 :"45",
        addressLine2 :"Camden Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 3333333",
        contactName:"Frank",
        service1 :"Nail Technician",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bostonbelle.ie",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/3.jpg"
    },
    {
        name:"Kieran James",
        addressLine1 :"Main Street, Malahide",
        addressLine2 :"89 Henry Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 44444444",
        contactName:"Jackie",
        service1 :"Nail Technician",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.keiranhair.ie",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/4.jpg"
    },
    {
        name:"Shave or Dye",
        addressLine1 :"Arnotts",
        addressLine2 :" 45 Henry Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Spray Tan",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/5.jpg"
    },
    {
        name:"Top Class Cuts",
        addressLine1 :"Jervis Centre",
        addressLine2 :"78 Henry Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Spray Tan",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/6.jpg"
    },
    {
        name:"Platinum Hairdressers",
        addressLine1 :"98",
        addressLine2 :"Wicklow Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/7.jpg"
    },
    {
        name:"Chopper Harris",
        addressLine1 :"56",
        addressLine2 :"Henry Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/8.jpg"
    },
    {
        name:"Top Class Cuts",
        addressLine1 :"15-17",
        addressLine2 :"Grafton Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Spray Tan",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/9.jpg"
    },
    {
        name:"Platinum Hairdressers",
        addressLine1 :"24",
        addressLine2 :"Henry Street",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/10.jpg"
    },
    {
        name:"Chopper Harris",
        addressLine1 :"26 Quay",
        addressLine2 :"Wellington Quay",
        county:  "Dublin" , // selector for Ireland
        email:"uhb@ultimate.com",
        telNumber:"01 8888888",
        contactName:"Joe",
        service1 :"Hairdresser",
        service2:"Nail Technician",
        service3:"Spray Tan",
        website:"www.bhb",
        summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores blanditiis eius enim et, omnis",
        photoUrl:"img/11.jpg"
    }

];

var map;
var geocoder;
function InitializeMap() {
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions =
    {
        zoom: 13,
        //center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);
}

//Sets value option which will be picked up on Google Maps
var salon1= dublinServiceProviders[0].addressLine1 + ", " +  dublinServiceProviders[0].county + " Ireland";
var salon2= dublinServiceProviders[1].addressLine1 + ", " +  dublinServiceProviders[1].county + " Ireland";
var salon3= dublinServiceProviders[2].addressLine1 + ", " +  dublinServiceProviders[2].county + " Ireland";
var salon4= dublinServiceProviders[3].addressLine1 + ", " +  dublinServiceProviders[3].county + " Ireland";


document.getElementById("option1").value = salon1;
document.getElementById("option2").value = salon2;
document.getElementById("option3").value = salon3;
document.getElementById("option6").value = salon4;


function FindLocation() {

    geocoder = new google.maps.Geocoder();
    InitializeMap();

    var address = document.getElementById("addressinput").value;
    var gymlocations = new Array();


    gymlocations[0] = salon1;
    gymlocations[1] = salon2;
    gymlocations[2] = salon3;
    gymlocations[3] = salon4;
    gymlocations[5] = dublinServiceProviders[4].name;
    gymlocations[6] = dublinServiceProviders[5].name;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
//info about salon
            if (address == gymlocations[0]) {

                document.getElementById('salonname').innerHTML = dublinServiceProviders[0].name;
                document.getElementById('myimage').src=dublinServiceProviders[0].photoUrl;
                document.getElementById('mycontact').innerHTML=dublinServiceProviders[0].contactName;
                document.getElementById('mytelephone').innerHTML=dublinServiceProviders[0].telNumber;
                document.getElementById('myweb').innerHTML=dublinServiceProviders[0].website;


            }
            if (address == gymlocations[1]) {
                document.getElementById('salonname').innerHTML = dublinServiceProviders[1].name;
                document.getElementById('myimage').src=dublinServiceProviders[1].photoUrl;
                document.getElementById('mycontact').innerHTML=dublinServiceProviders[1].contactName;
                document.getElementById('mytelephone').innerHTML=dublinServiceProviders[1].telNumber;
                document.getElementById('myweb').innerHTML=dublinServiceProviders[1].website;
            }
            if (address == gymlocations[2]) {
                document.getElementById('salonname').innerHTML = dublinServiceProviders[2].name;
                document.getElementById('myimage').src=dublinServiceProviders[2].photoUrl;
                document.getElementById('mycontact').innerHTML=dublinServiceProviders[2].contactName;
                document.getElementById('mytelephone').innerHTML=dublinServiceProviders[2].telNumber;
                document.getElementById('myweb').innerHTML=dublinServiceProviders[2].website;

            }

            if (address == gymlocations[3]) {

                document.getElementById('salonname').innerHTML = dublinServiceProviders[3].name;
                document.getElementById('myimage').src=dublinServiceProviders[3].photoUrl;
                document.getElementById('mycontact').innerHTML=dublinServiceProviders[3].contactName;
                document.getElementById('mytelephone').innerHTML=dublinServiceProviders[3].telNumber;
                document.getElementById('myweb').innerHTML=dublinServiceProviders[3].website;

            }

            if (address == gymlocations[4]) {
                document.getElementById('l1').innerHTML = gymlocations[4] + ' Tel: 01 3475432';

            }

            if (address == gymlocations[5]) {
                document.getElementById('l1').innerHTML = gymlocations[5] + ' Tel: 045 9995432';

            }

            if (address == gymlocations[6]) {
                document.getElementById('l1').innerHTML = gymlocations[6] + ' Tel: 01 5435432';

            }
        }
        else {
            alert("Not successful for the following reason: " + status);
        }
    });
}

FindLocation();


document.getElementById('Button1').addEventListener('click',function () {

 FindLocation();
 return false;
 }, false);




