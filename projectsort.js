/*
* Auteur: Ludovic HU
*
* Code inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
*/


var projetsParNoms = {
    "Eglise": {"Ville": "New York","Date de livraison": "2008-01-15","Description": "Une belle église."},
    "Ecole": {"Ville": "Fresnes","Date de livraison": "2012-05-01","Description": "Une petite école."},
    "Maison": {"Ville": "Saint-mandé","Date de livraison": "2011-08-24","Description": "La maison d'Hector."},
    "Pont": {"Ville": "Paris","Date de livraison": "2013-03-19","Description": "Pour passer par dessus la Seine."},
    "Autoroute": {"Ville": "Paris","Date de livraison": "2012-01-10","Description": "Pour aller plus vite."}
    
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
      html+='<div class="projet">';
        html+='<p class="Nom">'+Data[i].Nom+'</p>';
        html+='<p class="Ville">'+Data[i].Ville+'</p>';
        html+='<p class="Date de livraison">'+Data[i]['Date de livraison']+'</p>';
        html+='<p class="Description">'+Data[i].Description+'</p>';
      html+='</div>';
    };
    $('#liste_projets').html(html);
  }
  
  $('#search').keyup(function(){  /*Live Search, When Pressing any Keys*/
    searching();
  });
  
  $('#sort').change(function(){  /*Live Search, When Sort by*/
    searching();
  });