/*
* Refactored by Ludovic HU
*
* Code basé sur et inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
*/


var projetsParNoms = {
    "NomProjet": {"Ville": "NomVille",
                  "Date de livraison": "2000-01-01",
                  "Maitrise_douvrage":"Client",
                  "Description": "EcrireDescription",
                  "ref":"projet_template.html"},

    "VB_Parc_Habité": {"Ville": "Villeurbanne",
      "Date de livraison": "2019-07-XX",
      "Maitrise_douvrage":"OGIC",
      "Description": "Le nom que nous avons donné à cet ensemble d’habitations : \“Villas et Jardins\”, qualifie un projet, raconte un programme et défi nit une ambition. Il dit une manière de concevoir et d\’élaborer un petit ensemble urbain en relation avec un site particulier. Il s\’agit de créer un environnement accueillant qui associe chaque logement à un espace extérieur en pleine terre sur une terrasse, des balcons ou des loggias. Ainsi, chaque appartement s\’ouvre sur le dehors. <br />C\’est cette association des espaces clos et de plein-air qui crée un environnement vivant. Nous avons conçu le plan comme un continuum ou se mêlent des maisons et des jardins. Recherchant le plus possible à abolir la distinction entre les espaces intérieurs et extérieurs. Favorisant les adossements, les continuités, les rapprochements. C\’est un petit quartier à l\’échelle des piétons, un jardin habité. La circulation automobile y est limitée à sa plus simple expression et les allées carrossables, accessibles aux véhicules de secours et de service, sont traitées comme les promenades d\’un parc. Les circulations verticales et en particulier les escaliers sont, le plus souvent, tournées vers le dehors. Le parcours qui va depuis la rue jusqu\’à chaque appartement est composé d’une succession d’allées, de passages, de cours et de paliers ouverts. Les terrasses sont de nouveaux sols sur lesquels sont édifi ées des maisons ou aménagés des jardins qui couronnent les immeubles.",
"ref":"VB_Parc_Habite.html"}
    
  };
  
  var ProjectArray = Object.keys(projetsParNoms).map(function(v) {
    return $.extend({ Nom: v }, projetsParNoms[v]);
  });
  
  display(ProjectArray);  /*Display All ProjectArray data */
  
  function sorting(ProjData,SearchString='',SortBy='Nom'){
    switch(SortBy){
  
      case 'Nom' :
        ProjData.sort(function(a,b) {
          return a.Nom.localeCompare(b.Nom);  /*Sort By Nom*/
        });
      break;
  
      case 'Ville' :
        ProjData.sort(function(a,b) {
          return a.Ville.localeCompare(b.Ville);  /*Sort By Ville*/
        });
      break;
  
      case 'Date de livraison' :
        ProjData.sort(function(a,b) {
          return a["Date de livraison"].localeCompare(b["Date de livraison"]);  /*Sort By Date de livraison*/
        });
      break;
  
      default     :
        /*Silent is golden*/
      break; 
    }
  
    return ProjData;
  }
  
  function searching(){
    var SearchString  = $('#search').val().toUpperCase();  /*Uppercase for Case Insentive*/
    var SortBy        = $('#sort').val();
    var Data          = sorting(ProjectArray,SearchString,SortBy);
    var SearchData    = [];
    var index         = 0;
    var Nom          = '';
    for(i=0; i<Data.length; i++){
      Nom      = Data[i].Nom.toUpperCase();  /*Uppercase for Case Insentive*/
      if (Nom.indexOf(SearchString)>=0){  /*Search By Nom*/
        SearchData[index++] = Data[i];
      }
    }
    display(SearchData);  /*Display Sorting Data*/
  }
  
  function display(Data){
    var html = '';
    for(var i=0; i<Data.length;i++){
      if (Data[i].Nom != 'NomProjet'){
        html+='<div class="projet">';
          html+='<p class="Nom">'+Data[i].Nom+'</p>';
          html+='<p class="Ville">'+Data[i].Ville+'</p>';
          html+='<p class="Date de livraison">Livré le: '+Data[i]['Date de livraison']+'</p>';
          html+='<p class="Maitrise_douvrage">Maîtrise d\'ouvrage: '+Data[i].Maitrise_douvrage+'</p>';
          html+='<p class="Description">'+Data[i].Description+'</p>';
          html+='<a href="./liste_projets/'+Data[i].ref+'" class="project_links">voir plus</a>';
        html+='</div>';
      }
    };
    $('#liste_projets').html(html);
  }
  
  $('#search').keyup(function(){  /*Live Search, When Pressing any Keys*/
    searching();
  });
  
  $('#sort').change(function(){  /*Live Search, When Sort by*/
    searching();
  });
