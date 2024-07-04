/*
 * Refactored by Ludovic HU
 *
 * Code basé sur et inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
 */

var projetsParNoms = {
  "NomProjet": {
    Ville: "NomVille",
    "Date de livraison": "2000-01-01",
    Maitrise_douvrage: "Client",
    Categorie: "EcrireCategorie",
    ref: "projet_template.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */ 
    miniature: "./NomDossierImage/nomImage.jpgOuPng",
  },

  "Gentilly": {
    Ville: "Gentilly",
    "Date de livraison": "1993-01-01",
    Maitrise_douvrage: "Bureau des paysages ",
    Categorie: "Réhabilitation et extension du siège social et des bureaux",
    ref: "gentilly.html",
    miniature: "Gentilly/Gentilly3.png",
  },

  "Villeurbanne Parc Habité": {
    Ville: "Villeurbanne",
    "Date de livraison": "2019-07-XX",
    Maitrise_douvrage: "OGIC",
    Categorie: "urbain",
    ref: "VB_Parc_Habite.html",
    miniature: "VB_Parc_Habite/IMG_2958_cropped.jpg",
  },

  "Bordeaux Zone Urbaine": {
    Ville: "Bordeaux",
    "Date de livraison": "2012-01-01",
    Maitrise_douvrage: "CUB",
    Categorie: "urbain",
    ref: "bordeaux_urbain.html",
    miniature: "./bordeaux_urbain/bd1.PNG",
  },

};

var ProjectArray = Object.keys(projetsParNoms).map(function (v) {
  return $.extend({ Nom: v }, projetsParNoms[v]);
});

display(ProjectArray); /*Display All ProjectArray data */

function sorting(ProjData, SearchString = "", SortBy) {
  switch (SortBy) {
    case "Nom":
      ProjData.sort(function (a, b) {
        return a.Nom.localeCompare(b.Nom); /*Sort By Nom*/
      });
      break;

    case "Ville":
      ProjData.sort(function (a, b) {
        return a.Ville.localeCompare(b.Ville); /*Sort By Ville*/
      });
      break;

    case "Date de livraison":
      ProjData.sort(function (a, b) {
        return a["Date de livraison"].localeCompare(
          b["Date de livraison"]
        ); /*Sort By Date de livraison*/
      });
      break;

    default:
      /*Silent is golden*/
      break;
  }

  return ProjData;
}

function filtering(ProjData, SearchString = "", FilterBy) {
  var FilteredData = [];
  var index = 0;
  var Categorie = "";

  if (FilterBy == "Tout") {
    return ProjData;
  } else {
    for (i = 0; i < ProjData.length; i++) {
      Categorie =
        ProjData[i].Categorie;
      if (Categorie == FilterBy) {
        /*Search By Nom*/
        FilteredData[index++] = ProjData[i];
      }
    }
    return FilteredData;
  }
}

function searching() {
  var SearchString = $("#search")
    .val()
    .toUpperCase(); /*Uppercase for Case Insentive*/
  var SortBy = $("#sort").val();
  var FilterBy = $("#filter").val();

  var sortedData = sorting(ProjectArray, SearchString, SortBy);
  var filteredData = filtering(sortedData, SearchString, FilterBy);
  var SearchData = [];
  var index = 0;
  var Nom = "";
  for (i = 0; i < filteredData.length; i++) {
    Nom = filteredData[i].Nom.toUpperCase(); /*Uppercase for Case Insentive*/
    if (Nom.indexOf(SearchString) >= 0) {
      /*Search By Nom*/
      SearchData[index++] = filteredData[i];
    }
  }
  display(SearchData); /*Display Sorting Data*/
}

function display(Data) {
  var html = "";
  for (var i = 0; i < Data.length; i++) {
    if (Data[i].Nom != "NomProjet") {
      html += '<div class="projet">';

      html +=
        '<img id="thumbs_img" src="./liste_projets/images_projet/'+ Data[i].miniature +'">';
        html += '<a href="./liste_projets/' +
        Data[i].ref +
        '"><div class="overlay">';
        html += '<p><strong>' + Data[i].Nom + "</strong><br />";
        html += Data[i].Ville + "<br />";
        html +=
          'Livré le: ' +
          Data[i]["Date de livraison"] +
          "<br />";
        html +=
          'Maîtrise d\'ouvrage: ' +
          Data[i].Maitrise_douvrage +
          "<br />";
        html += 'Catégorie: ' + Data[i].Categorie + "</p>";
      html += "</div></a>";
      html += "</div>";

    }
  }
  $("#liste_projets").html(html);
}

$("#search").keyup(function () {
  /*Live Search, When Pressing any Keys*/ searching();
});

$("#sort").change(function () {
  /*Live Search, When Sort by*/ searching();
});

$("#filter").change(function () {
  /*Live Search, When Sort by*/ searching();
});


