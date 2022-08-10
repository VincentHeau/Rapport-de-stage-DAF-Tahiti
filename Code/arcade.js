// Code permettant de d'importer les images en tant que pieces jointes dans ArcGIS Online

// Expressions invariantes de l'URL ---------------------------------

var Part1 = "https://services.arcgis.com/L4H4rU26VyhEF588/arcgis/rest/services/RepereAvecMesurev3/FeatureServer/2"

var Part2 = "/attachments/"

// Placement des ID dans l'URL --------------------------------------

if(Count(Attachments($feature))==1){
    // Une seule piece jointe
    if (First(Attachments($feature)).contentType == "image/jpeg"){
       var ObjectID = $feature.OBJECTID
       var AttachID = First(Attachments($feature)).ID
       return Part1 + "/" +  ObjectID + Part2 + AttachID
    }
}
else if(Count(Attachments($feature))==2){
    // Deux pieces jointes
    if (First(Attachments($feature)).contentType == "image/jpeg"){
       var ObjectID = $feature.OBJECTID
       var AttachID = First(Attachments($feature)).ID
       return Part1 + "/" +  ObjectID + Part2 + AttachID
    }
    else if (Attachments($feature)[1].contentType == "image/jpeg"){
       var ObjectID = $feature.OBJECTID
       var AttachID = Attachments($feature)[1].ID
       return Part1 + "/" +  ObjectID + Part2 + AttachID
    }
}


