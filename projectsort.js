/*
 * Refactored by Ludovic HU
 *
 * Code basé sur et inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
 */

var projetsParNoms = {
  "NomProjet": {
    Ville: "NomVille",
    "Date de livraison": "2000-XX-XX",
    Maitrise_douvrage: "Client",
    Categorie: "EcrireCategorie",
    ref: "projet_template.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./NomDossierImage/pic1.jpg",
  },
  "Une école de plein-air": {
    Ville: "Rennes",
    "Date de livraison": "2012-XX-XX",
    Maitrise_douvrage: "Ville de Rennes, Archipel Habitat",
    Categorie: "Habitats",
    ref: "rennes_ecole.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rennes_ecole/pic1.jpg",
  },


  "Les bords de Vilaine": {
    Ville: "Rennes",
    "Date de livraison": "1991-XX-XX",
    Maitrise_douvrage: "Territoires (SEM)",
    Categorie: "Habitats",
    ref: "rennes_vilaine.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rennes_vilaine/pic1.jpg",
  },

  "Zac du canal des Aunettes": {
    Ville: "Sainte Geneviève Des Bois",
    "Date de livraison": "2005-XX-XX",
    Maitrise_douvrage: "  Ville de Sainte-Geneviève-des-Bois",
    Categorie: "Projets urbains",
    ref: "sgb_canal.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./sgb_canal/pic1.jpg",
  },

  "21 maisons individuelles": {
    Ville: "Sainte Geneviève Des Bois",
    "Date de livraison": "2004-XX-XX",
    Maitrise_douvrage: " Expansiel (SEM)",
    Categorie: "Habitats",
    ref: "sgb_maisons.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./sgb_maisons/pic1.jpg",
  },

  "Rouen": {
    Ville: "Rouen",
    "Date de livraison": "2011-XX-XX",
    Maitrise_douvrage: " Ville de Rouen",
    Categorie: "Projets urbains",
    ref: "rouen.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rouen/pic1.jpg",
  },

  "Rungis": {
    Ville: "Rungis",
    "Date de livraison": "2014-XX-XX",
    Maitrise_douvrage: " SOGARIS",
    Categorie: "Expositions",
    ref: "rungis.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rungis/pic1.jpg",
  },

  "Place des Savonniers": {
    Ville: "Peynier",
    "Date de livraison": "2003-XX-XX",
    Maitrise_douvrage: "Commune de Peynier",
    Categorie: "Projets urbains",
    ref: "peynier.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./peynier/pic1.jpg",
  },

  "Parc des Saules": {
    Ville: "Orly",
    "Date de livraison": "1998-XX-XX",
    Maitrise_douvrage: "Opac du Val de Marne",
    Categorie: "Rues et jardins",
    ref: "orly.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./orly/pic1.jpg",
  },

  "Le 'Faisceau'": {
    Ville: "Nanterre",
    "Date de livraison": "2010-XX-XX",
    Maitrise_douvrage: "EPASA (Etablissement Public de Seine Arche)",
    Categorie: "Projets urbains",
    ref: "nanterre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nanterre/pic1.jpg",
  },

  "Les ateliers du Bras Vert": {
    Ville: "Nancy",
    "Date de livraison": "2013-XX-XX",
    Maitrise_douvrage: "SOLOREM",
    Categorie: "Activités",
    ref: "nancy_ecuries.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_ecuries/pic1.jpg",
  },


  "Maison individuelle à Thiétreville": {
    Ville: "Thiétreville",
    "Date de livraison": "2005-XX-XX",
    Maitrise_douvrage: "Privée",
    Categorie: "Habitats",
    ref: "thietreville.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./thietreville/pic1.jpg",
  },

  "Vallée de la Bièvre": {
    Ville: "Val-de-Marne",
    "Date de livraison": "1988-XX-XX",
    Maitrise_douvrage: "Conseil Général du Val-de-Marne",
    Categorie: "Projets urbains",
    ref: "vallee_bievre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vallee_bievre/pic1.jpg",
  },

  "Equipement culturel de Vauhallan": {
    Ville: "Vauhallan",
    "Date de livraison": "2002-XX-XX",
    Maitrise_douvrage: "Commune de Vauhallan",
    Categorie: "Activités",
    ref: "vauhallan.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vauhallan/pic1.jpg",
  },

  "Plateau de Haye : Plan Guide": {
    Ville: "Nancy",
    "Date de livraison": "2015-XX-XX",
    Maitrise_douvrage: "Communauté Urbaine du Grand Nancy, André Rossinot Président",
    Categorie: "Projets urbains",
    ref: "nancy_plateau_guideplan.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_plateau_guideplan/n1.jpg",
  },

  "Médiaparc": {
    Ville: "Nancy",
    "Date de livraison": "2007-XX-XX",
    Maitrise_douvrage: "SOCOGIM",
    Categorie: "Projets urbains",
    ref: "nancy_mediaparc.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_mediaparc/n1.jpg",
  },

  "Les Deux Rives": {
    Ville: "Nancy",
    "Date de livraison": "2009-XX-XX",
    Maitrise_douvrage: "Bouygues Immobilier",
    Categorie: "Habitats",
    ref: "nancy_deuxrives.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_deuxrives/n1.jpg",
  },

  "Jardin d'eau": {
    Ville: "Nancy",
    "Date de livraison": "1996-XX-XX",
    Maitrise_douvrage: "SOLOREM ",
    Categorie: "Rues et jardins",
    ref: "nancy_jardineau.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_jardineau/n1.jpg",
  },

  "Les rives de Meurthe": {
    Ville: "Nancy",
    "Date de livraison": "1989-XX-XX",
    Maitrise_douvrage: "SOLOREM (SEM)",
    Categorie: "Rues et jardins",
    ref: "nancy_rives.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_rives/n1.jpg",
  },

  "Jardins Schlumberger": {
    Ville: "Montrouge",
    "Date de livraison": "1985-XX-XX",
    Maitrise_douvrage: "Groupe Schlumberger",
    Categorie: "Rues et jardins",
    ref: "montrouge.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./montrouge/m1.jpg",
  },

  "ZHB Villejuif": {
    Ville: "Villejuif",
    "Date de livraison": "1995-XX-XX",
    Maitrise_douvrage: "SEMASEP",
    Categorie: "Projets urbains",
    ref: "villejuif.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./villejuif/B62Y4997.jpg",
  },

  "Port de Vannes": {
    Ville: "Vannes",
    "Date de livraison": "2018-XX-XX",
    Maitrise_douvrage: "Groupe GIBOIRE",
    Categorie: "Projets urbains",
    ref: "vannes.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vannes/Vannes Gambetta.jpg",
  },

  "Marne et Gondoire": {
    Ville: "Marne et Gondoire",
    "Date de livraison": "2011-XX-XX",
    Maitrise_douvrage: "Communauté d’agglomération de Marne et Gondoire",
    Categorie: "Projets urbains",
    ref: "marnegondoire.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./marnegondoire/m3.jpg",
  },

  "Boulevards de Lyon": {
    Ville: "Lyon",
    "Date de livraison": "2001-XX-XX",
    Maitrise_douvrage: " Le Grand Lyon Mission Tramway, SERL",
    Categorie: "Projets urbains",
    ref: "lyon_blv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lyon_blv/l1.jpg",
  },

  "Les terrasses de La presqu’îLe": {
    Ville: "Lyon",
    "Date de livraison": "2013-XX-XX",
    Maitrise_douvrage: " Communauté Urbaine de Lyon",
    Categorie: "Projets urbains",
    ref: "lyon_presqueile.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lyon_presqueile/l1.jpg",
  },

  "La Roche sur Yon": {
    Ville: "La Roche sur Yon",
    "Date de livraison": "2014-XX-XX",
    Maitrise_douvrage: " Ville de La Roche-sur-Yon",
    Categorie: "Projets urbains",
    ref: "laroche.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./laroche/l1.jpg",
  },

  "Aménagement de la plage": {
    Ville: "Le Havre",
    "Date de livraison": "1994-XX-XX",
    Maitrise_douvrage: " Ville du Havre, atelier littoral",
    Categorie: "Rues et jardins",
    ref: "lehavre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lehavre/l1.jpg",
  },

  "Le parc des sports Géo André": {
    Ville: "La Courneuve",
    "Date de livraison": "2007-XX-XX",
    Maitrise_douvrage: "Ville de La Courneuve",
    Categorie: "Activités",
    ref: "lacourneuve_stade.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lacourneuve_stade/ls1.jpg",
  },


  "Maison des sports de La Courneuve": {
    Ville: "La Courneuve",
    "Date de livraison": "2006-XX-XX",
    Maitrise_douvrage: "Ville de La Courneuve",
    Categorie: "Activités",
    ref: "lacourneuve_mds.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lacourneuve_mds/l1.jpg",
  },

  "Espaces publics du centre-ville de Grenoble": {
    Ville: "Grenoble",
    "Date de livraison": "2013-XX-XX",
    Maitrise_douvrage: "Ville de Grenoble",
    Categorie: "Rues et jardins",
    ref: "grenoble_cv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./grenoble_cv/gcv1.jpg",
  },

  "Aménagements extérieurs Grenoble": {
    Ville: "Grenoble",
    "Date de livraison": "2008-XX-XX",
    Maitrise_douvrage: " Ville de Grenoble, Territoires 38 (SEM)",
    Categorie: "Rues et jardins",
    ref: "grenoble_parc.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./grenobleparc/g1.jpg",
  },

  "Festival des jardins": {
    Ville: "Chaumont sur Loire",
    "Date de livraison": "2008-XX-XX",
    Maitrise_douvrage: "Conservatoire International des Parcs et Jardins et Paysage",
    Categorie: "Rues et jardins",
    ref: "chaumontsurloire.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./chaumontsurloire/c1.jpg",
  },

  "Kanaalplan": {
    Ville: "Bruxelles",
    "Date de livraison": "2000-01-01",
    Maitrise_douvrage: "Région de Bruxelles-Capitale, Administration de l’Aménagement du territoire et du Logement",
    Categorie: "Rues et jardins",
    ref: "bruxelles.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bruxelles/bc1.JPG",
  },

  "Bourges": {
    Ville: "Bourges",
    "Date de livraison": "2006-XX-XX",
    Maitrise_douvrage: "SEGECE",
    Categorie: "Activités",
    ref: "bourges.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bourges/b1.jpg",
  },

  "La ferme de Blanquefort": {
    Ville: "Blanquefort",
    "Date de livraison": "2013-XX-XX",
    Maitrise_douvrage: "SEMI de Blanquefort",
    Categorie: "Activités",
    ref: "blanquefort_ferme.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./blanquefort_ferme/bf1.jpg",
  },

  "La Riviere Blanquefort": {
    Ville: "Blanquefort",
    "Date de livraison": "2009-XX-XX",
    Maitrise_douvrage: "SEMI de Blanquefort",
    Categorie: "Rues et jardins",
    ref: "blanquefortlariv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./blanquefortlariv/blanquefortlariv1.jpg",
  },

  "Butte de Bagneux ": {
    Ville: "Bagneux",
    "Date de livraison": "1990-XX-XX",
    Maitrise_douvrage: "Ville de Bagneux",
    Categorie: "Rues et jardins",
    ref: "bagneuxb.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bagneux_butte/bagneuxb1.jpg",
  },

  "Boulogne": {
    Ville: "Boulogne",
    "Date de livraison": "2001-XX-XX",
    Maitrise_douvrage: "Ville de Boulogne-Billancourt",
    Categorie: "Projets urbains",
    ref: "boulogne.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./boulogne/boulogne1.jpg",
  },



  "Angoulême": {
    Ville: "Angoulême",
    "Date de livraison": "2007-XX-XX",
    Maitrise_douvrage: "SEGECE (pour le centre commercial, le parking et les logements)",
    Categorie: "Activités",
    ref: "angouleme.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./angouleme/angouleme1.jpg",
  },

  "Bègles": {
    Ville: "Bègles",
    "Date de livraison": "2019-XX-XX",
    Maitrise_douvrage: "EPA Bordeaux Euratlantique",
    Categorie: "Projets urbains",
    ref: "begles.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./begles/begles1.png",
  },

  "Arcueil": {
    Ville: "Arcueil",
    "Date de livraison": "1997-XX-XX",
    Maitrise_douvrage: "SEMASEP",
    Categorie: "Rues et jardins",
    ref: "arcueil.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./arcueil/arcueil1.JPG",
  },

  "ENS de Paysage de Versailles": {
    Ville: "Versailles",
    "Date de livraison": "2019-XX-XX",
    Maitrise_douvrage: "ENS de Paysage de Versailles",
    Categorie: "Activités",
    ref: "versailles_potager.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./versailles_potager/Vrs01_Insertion_00.jpg",
  },

  "Les Allonnes": {
    Ville: "Allonnes",
    "Date de livraison": "2005-XX-XX",
    Maitrise_douvrage: "Sarthe Habitat, Ville d’Allonnes, Communauté Urbaine du Mans",
    Categorie: "Rues et jardins",
    ref: "allonnes.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./allonnes_images/ALLONNES1.JPG",
  },

  "Les Morins": {
    Ville: "Antony",
    "Date de livraison": "1982-XX-XX",
    Maitrise_douvrage: "OPHLM Antony ",
    Categorie: "Rues et jardins",
    ref: "morins.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./morins/alm1.jpg",
  },

  "Gentilly": {
    Ville: "Gentilly",
    "Date de livraison": "1993-01-01",
    Maitrise_douvrage: "bureau des paysages ",
    Categorie: "Projets urbains",
    ref: "gentilly.html",
    miniature: "gentilly/g1.jpg",
  },

  "Villeurbanne Parc Habité": {
    Ville: "Villeurbanne",
    "Date de livraison": "2019-07-XX",
    Maitrise_douvrage: "OGIC",
    Categorie: "Projets urbains",
    ref: "VB_Parc_Habite.html",
    miniature: "VB_Parc_Habite/IMG_2958_cropped.jpg",
  },

  "Bordeaux Zone Urbaine": {
    Ville: "Bordeaux",
    "Date de livraison": "2012-01-01",
    Maitrise_douvrage: "CUB",
    Categorie: "Habitats",
    ref: "bordeaux_urbain.html",
    miniature: "bordeaux_urbain/bd1.jpg",
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
        '<img id="thumbs_img" src="./liste_projets/images_projet/' + Data[i].miniature + '">';
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


