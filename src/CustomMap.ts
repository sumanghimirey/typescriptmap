

interface mappable {
    location : {
        lat: number;
        lng: number;
    }

    }
export class CustomMap {
    
    private  googleMap: google.maps.Map;

    constructor (divId: string) {
        this.googleMap = 
        new google.maps.Map(document.getElementById(divId), {
            zoom : 1,
            center : {
                lat : 0,
                lng : 0
            }
        });
    }

    addMarker(mappable: mappable):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{ 
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }

        });

        marker.addListener('click',()=>{
         const infowindow = new google.maps.InfoWindow({
             content: 'Hello there',

         });
         infowindow.open(this.googleMap, marker);

        })

        

    }
    
}