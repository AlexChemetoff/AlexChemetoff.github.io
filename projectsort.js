/*
 * Refactored by Ludovic HU
 *
 * Code basé sur et inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
 */

var projetsParNoms = {
  NomProjet: {
    Ville: "NomVille",
    "Date de livraison": "2000-01-01",
    Maitrise_douvrage: "Client",
    Categorie: "EcrireCategorie",
    ref: "projet_template.html",
    miniature: "./NomDossierImage/nomImage.jpgOuPng",
  },

  VB_Parc_Habité: {
    Ville: "Villeurbanne",
    "Date de livraison": "2019-07-XX",
    Maitrise_douvrage: "OGIC",
    Categorie: "urbain",
    ref: "VB_Parc_Habite.html",
    miniature: "VB_Parc_Habite/IMG_2958.jpg",
  },

  Eglise: {
    Ville: "New York",
    "Date de livraison": "2008-01-15",
    Categorie: "urbain",
    ref: "projet_template.html",
    miniature: "template_images/pic1.jpg",
  },
  Ecole: {
    Ville: "Fresnes",
    "Date de livraison": "2012-05-01",
    Categorie: "equipement",
    ref: "projet_template.html",
    miniature: "template_images/pic1.jpg",
  },
  Maison: {
    Ville: "Saint-mandé",
    "Date de livraison": "2011-08-24",
    Categorie: "public",
    ref: "projet_template.html",
    miniature: "template_images/pic1.jpg",
  },
  Pont: {
    Ville: "Paris",
    "Date de livraison": "2013-03-19",
    Categorie: "logement",
    ref: "projet_template.html",
    miniature: "template_images/pic1.jpg",
  },
  Autoroute: {
    Ville: "Paris",
    "Date de livraison": "2012-01-10",
    Categorie: "public",
    ref: "projet_template.html",
    miniature: "template_images/pic1.jpg",
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


