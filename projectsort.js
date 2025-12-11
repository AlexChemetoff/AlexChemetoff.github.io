/*
 * Refactored by Ludovic HU
 *
 * Code basé sur et inspiré de la solution de Sumon Sarker @ https://stackoverflow.com/questions/43037486/dynamic-sorting-of-data-with-html-select-dropdown
 */

var projetsParNoms = {
  "Parking des Arts": {
    Ville: "Nice",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2025",
    Maitrise_douvrage: "Ville de Nice",
    Categorie: "Activités",
    ref: "nice_parking.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nice_parking/pic1.jpg",
  },
  
  "NomProjet": {
    Ville: "NomVille",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2000",
    Maitrise_douvrage: "Client",
    Categorie: "EcrireCategorie",
    ref: "projet_template.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./NomDossierImage/pic1.jpg",
  },
  
  "Site de la COOP": {
    Ville: "Strasbourg",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2018",
    Maitrise_douvrage: "SPL Deux Rives",
    Categorie: "Projets urbains",
    ref: "strasbourg_siteCOOP.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./strasbourg_siteCOOP/pic1.jpg",
  },


"Union sociale": {
    Ville: "Strasbourg",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2021",
    Maitrise_douvrage: "SPL Deux Rives",
    Categorie: "Projets urbains",
    ref: "strasbourg_union.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./strasbourg_union/pic1.jpg",
  },

"Parc de la COOP": {
    Ville: "Strasbourg",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2024",
    Maitrise_douvrage: "SPL Deux Rives",
    Categorie: "Projets urbains",
    ref: "strasbourg_parc_COOP.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./strasbourg_parc_COOP/pic1.JPG",
  },

"Site de la Virgule": {
    Ville: "Strasbourg",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2019",
    Maitrise_douvrage: "SPL Deux Rives",
    Categorie: "Projets urbains",
    ref: "strasbourg_sitevirgule.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./strasbourg_sitevirgule/pic1.jpg",
  },

  
  "Cave à vins": {
    Ville: "Strasbourg",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2021",
    Maitrise_douvrage: "SPL Deux Rives",
    Categorie: "Projets urbains",
    ref: "strasbourg_cave.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./strasbourg_cave/pic1.JPG",
  },

  "Village Laverny": {
    Ville: "Nancy",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2018",
    Maitrise_douvrage: "Le Nid",
    Categorie: "Habitat",
    ref: "nancy_laverny.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_laverny/pic1.JPG",
  },

  "Promenade du Paillon": {
    Ville: "Nice",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "en cours",
    Maitrise_douvrage: "Ville de Nice",
    Categorie: "Rues et jardins",
    ref: "nice_paillon.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nice_paillon/pic1.jpg",
  },

  "L'Octroi": {
    Ville: "Nancy",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2021",
    Maitrise_douvrage: "Solorem",
    Categorie: "Activités",
    ref: "nancy_octroi.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_octroi/pic1.jpg",
  },

  "Le jardin Florentin": {
    Ville: "Nancy",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2022",
    Maitrise_douvrage: "SAS 3B",
    Categorie: "Habitat",
    ref: "nancy_florentin.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_florentin/pic1.jpg",
  },

  "Bamboo": {
    Ville: "Nantes",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2024",
    Maitrise_douvrage: "OCDL - groupe Giboire",
    Categorie: "Habitat",
    ref: "nantes_bamboo.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_bamboo/pic1.JPG",
  },

  "Îlot MA1 Malakoff": {
    Ville: "Nantes",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2023",
    Maitrise_douvrage: "Cogedim",
    Categorie: "Habitat",
    ref: "nantes_malakoff.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_malakoff/pic1.jpg",
  },

  "Alstom Bergeron": {
    Ville: "Nantes",
    /*date en chiffres format "année/mois/jour" OU "en cours" */ 
    "Date de livraison": "2025",
    Maitrise_douvrage: "Quartus",
    Categorie: "Activités",
    ref: "nantes_alstom.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_alstom/pic1.jpg",
  },

  "Jardin de l'ambassade de France": {
    Ville: "New Delhi",
    "Date de livraison": "1986",
    Maitrise_douvrage: "-",
    Categorie: "Rues et jardins",
    ref: "newdelhi.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./newdelhi/pic1.jpg",
  },

  "Boulevard Exelmans": {
    Ville: "Paris",
    "Date de livraison": "2017 - Non retenu",
    Maitrise_douvrage: "Paris Habitat OPH",
    Categorie: "Habitat",
    ref: "paris_blvexelmans.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris_blvexelmans/pic1.jpg",
  },

  "Villa des Mariniers": {
    Ville: "Paris",
    "Date de livraison": "2011 - Non retenu",
    Maitrise_douvrage: "RIVP (Régie immobilière de la Ville de Paris)",
    Categorie: "Habitat",
    ref: "paris_villadesmariniers.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris_villadesmariniers/pic1.jpg",
  },

  "Cinéma": {
    Ville: "Paris",
    "Date de livraison": "2011 - Non retenu",
    Maitrise_douvrage: "UGC",
    Categorie: "Activités",
    ref: "paris_cinema.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris_cinema/pic1.jpg",
  },

  "Place de la République": {
    Ville: "Paris",
    "Date de livraison": "2009 - Non retenu",
    Maitrise_douvrage: "Ville de Paris",
    Categorie: "Projets urbains",
    ref: "paris_placerepublique.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris_placerepublique/pic1.jpg",
  },

  "Gare de l'Etat": {
    Ville: "Nantes",
    "Date de livraison": "2001",
    Maitrise_douvrage: "Communauté Urbaine de Nantes",
    Categorie: "Projets urbains",
    ref: "nantes_gare.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_gare/pic1.jpg",
  },

  "Quartier du Tripode": {
    Ville: "Nantes",
    "Date de livraison": "2010",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Projets urbains",
    ref: "nantes_tripode.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_tripode/pic1.jpg",
  },

 "Quai Mitterrand": {
    Ville: "Nantes",
    "Date de livraison": "2005",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Projets urbains",
    ref: "nantes_mitterrand.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_mitterrand/pic1.jpg",
  },
  
  "Parc des chantiers": {
    Ville: "Nantes",
    "Date de livraison": "2009",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Projets Urbains",
    ref: "nantes_parcdeschantiers.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_parcdeschantiers/pic1.jpg",
  },


  "Bichat-Temple": {
    Ville: "Paris",
    "Date de livraison": "2016",
    Maitrise_douvrage: "Paris Habitat - OPH",
    Categorie: "Habitat",
    ref: "paris10.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris10/pic1.jpg",
  },


  "Place Denfert-Rochereau": {
    Ville: "Paris",
    "Date de livraison": "en cours",
    Maitrise_douvrage: "Ville de Paris",
    Categorie: "Rues et jardins",
    ref: "paris_denfert.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./paris_denfert/pic1.jpg",
  },


  "Nefs de la Loire": {
    Ville: "Nantes",
    "Date de livraison": "2007",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Projets Urbains",
    ref: "nantes_nefsloire.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_nefsloire/pic1.jpg",
  },

  "Square de l'île Mabon": {
    Ville: "Nantes",
    "Date de livraison": "2005",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Rues et jardins",
    ref: "nantes_square.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_square/pic1.jpg",
  },

  "Îlots": {
    Ville: "Nantes",
    "Date de livraison": "2011",
    Maitrise_douvrage: "Nantes Métropole",
    Categorie: "Projets urbains",
    ref: "nantes_ilotsgeneral.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_ilotsgeneral/pic1.jpg",
  },

  "Au bord de la Tiretaine": {
    Ville: "Clermont-Ferrand",
    "Date de livraison": "en cours",
    Maitrise_douvrage: "Bouygues Immobilier",
    Categorie: "Projets urbains",
    ref: "clermont_ferrand_site_industriel.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./clermont_ferrand_site_industriel/pic1.jpg",
  },


  "Cèdre-Bleu & Tilleul-Argenté": {
    Ville: "Nancy",
    "Date de livraison": "en cours",
    Maitrise_douvrage: "OPH du Grand Nancy",
    Categorie: "Habitat",
    ref: "nancy_tilleul.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_tilleul/pic1.jpg",
  },


  "Bords de Seine à Ris-Orangis": {
    Ville: "Ris-Orangis",
    "Date de livraison": "en cours",
    Maitrise_douvrage: "Ville de Ris-Orangis",
    Categorie: "Rues et jardins",
    ref: "risorangis.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./risorangis/pic1.jpg",
  },

  "Abords du centre commercial": {
    Ville: "Nantes",
    "Date de livraison": "2007",
    Maitrise_douvrage: " Nantes Métropole",
    Categorie: "Projets urbains",
    ref: "nantes_centrecom.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_centrecom/pic1.jpg",
  },

  "Cales": {
    Ville: "Nantes",
    "Date de livraison": "2009",
    Maitrise_douvrage: " SAMOA (SEM)",
    Categorie: "Projets urbains",
    ref: "nantes_cales.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_cales/pic1.jpg",
  },

  "Boulevard du Général De Gaulle": {
    Ville: "Nantes",
    "Date de livraison": "2007",
    Maitrise_douvrage: " Nantes Métropole",
    Categorie: "Projets urbains",
    ref: "nantes_blvgdg.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nantes_blvgdg/pic1.jpg",
  },

  "Une école dans la manufacture": {
    Ville: "Saint-Etienne",
    "Date de livraison": "2014",
    Maitrise_douvrage: " Etablissement public d'aménagement de Saint-Etienne (EPASE)",
    Categorie: "Activités",
    ref: "st_etienne_ecole.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./st_etienne_ecole/pic1.jpg",
  },

  "Manufacture": {
    Ville: "Saint-Etienne",
    "Date de livraison": "2013",
    Maitrise_douvrage: " Etablissement public d'aménagement de Saint-Etienne (EPASE)",
    Categorie: "Activités",
    ref: "st_etienne_manufacture.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./st_etienne_manufacture/pic1.jpg",
  },


  "Une école de plein-air": {
    Ville: "Rennes",
    "Date de livraison": "2012 - Non retenu",
    Maitrise_douvrage: "Ville de Rennes, Archipel Habitat",
    Categorie: "Habitat",
    ref: "rennes_ecole.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rennes_ecole/pic1.jpg",
  },


  "Les bords de Vilaine": {
    Ville: "Rennes",
    "Date de livraison": "1991",
    Maitrise_douvrage: "Territoires (SEM)",
    Categorie: "Habitat",
    ref: "rennes_vilaine.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rennes_vilaine/pic1.jpg",
  },

  "Zac du canal des Aunettes": {
    Ville: "Sainte Geneviève Des Bois",
    "Date de livraison": "2005",
    Maitrise_douvrage: "  Ville de Sainte-Geneviève-des-Bois",
    Categorie: "Projets urbains",
    ref: "sgb_canal.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./sgb_canal/pic1.jpg",
  },

  "21 maisons individuelles": {
    Ville: "Sainte Geneviève Des Bois",
    "Date de livraison": "2004",
    Maitrise_douvrage: " Expansiel (SEM)",
    Categorie: "Habitat",
    ref: "sgb_maisons.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./sgb_maisons/pic1.jpg",
  },

  "Rouen": {
    Ville: "Rouen",
    "Date de livraison": "2011 - Non retenu",
    Maitrise_douvrage: " Ville de Rouen",
    Categorie: "Projets urbains",
    ref: "rouen.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rouen/pic1.jpg",
  },

  "Rungis": {
    Ville: "Rungis",
    "Date de livraison": "2014",
    Maitrise_douvrage: " SOGARIS",
    Categorie: "Expositions",
    ref: "rungis.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./rungis/pic1.jpg",
  },

  "Place des Savonniers": {
    Ville: "Peynier",
    "Date de livraison": "2003",
    Maitrise_douvrage: "Commune de Peynier",
    Categorie: "Projets urbains",
    ref: "peynier.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./peynier/pic1.jpg",
  },

  "Parc des Saules": {
    Ville: "Orly",
    "Date de livraison": "1998",
    Maitrise_douvrage: "Opac du Val de Marne",
    Categorie: "Rues et jardins",
    ref: "orly.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./orly/pic1.jpg",
  },

  "Le 'Faisceau'": {
    Ville: "Nanterre",
    "Date de livraison": "2010",
    Maitrise_douvrage: "EPASA (Etablissement Public de Seine Arche)",
    Categorie: "Projets urbains",
    ref: "nanterre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nanterre/pic1.jpg",
  },

  "Les ateliers du Bras Vert": {
    Ville: "Nancy",
    "Date de livraison": "2013",
    Maitrise_douvrage: "SOLOREM",
    Categorie: "Activités",
    ref: "nancy_ecuries.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_ecuries/pic1.jpg",
  },


  "Maison individuelle à Thiétreville": {
    Ville: "Thiétreville",
    "Date de livraison": "2005",
    Maitrise_douvrage: "Privée",
    Categorie: "Habitat",
    ref: "thietreville.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./thietreville/pic1.jpg",
  },

  "Vallée de la Bièvre": {
    Ville: "Val-de-Marne",
    "Date de livraison": "1988",
    Maitrise_douvrage: "Conseil Général du Val-de-Marne",
    Categorie: "Projets urbains",
    ref: "vallee_bievre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vallee_bievre/pic1.jpg",
  },

  "Equipement culturel de Vauhallan": {
    Ville: "Vauhallan",
    "Date de livraison": "2002",
    Maitrise_douvrage: "Commune de Vauhallan",
    Categorie: "Activités",
    ref: "vauhallan.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vauhallan/pic1.jpg",
  },

  "Plateau de Haye : Plan Guide": {
    Ville: "Nancy",
    "Date de livraison": "2015",
    Maitrise_douvrage: "Communauté Urbaine du Grand Nancy, André Rossinot Président",
    Categorie: "Projets urbains",
    ref: "nancy_plateau_guideplan.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_plateau_guideplan/n1.jpg",
  },

  "Médiaparc": {
    Ville: "Nancy",
    "Date de livraison": "2007",
    Maitrise_douvrage: "SOCOGIM",
    Categorie: "Projets urbains",
    ref: "nancy_mediaparc.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_mediaparc/n1.jpg",
  },

  "Les Deux Rives": {
    Ville: "Nancy",
    "Date de livraison": "2009",
    Maitrise_douvrage: "Bouygues Immobilier",
    Categorie: "Habitat",
    ref: "nancy_deuxrives.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_deuxrives/n1.jpg",
  },

  "Jardin d'eau": {
    Ville: "Nancy",
    "Date de livraison": "1996",
    Maitrise_douvrage: "SOLOREM ",
    Categorie: "Rues et jardins",
    ref: "nancy_jardineau.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_jardineau/n1.jpg",
  },

  "Les rives de Meurthe": {
    Ville: "Nancy",
    "Date de livraison": "1989",
    Maitrise_douvrage: "SOLOREM (SEM)",
    Categorie: "Rues et jardins",
    ref: "nancy_rives.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./nancy_rives/n1.jpg",
  },

  "Jardins Schlumberger": {
    Ville: "Montrouge",
    "Date de livraison": "1985",
    Maitrise_douvrage: "Groupe Schlumberger",
    Categorie: "Rues et jardins",
    ref: "montrouge.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./montrouge/m1.jpg",
  },

  "ZHB Villejuif": {
    Ville: "Villejuif",
    "Date de livraison": "1995",
    Maitrise_douvrage: "SEMASEP",
    Categorie: "Projets urbains",
    ref: "villejuif.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./villejuif/B62Y4997.jpg",
  },

  "Port de Vannes": {
    Ville: "Vannes",
    "Date de livraison": "2018 - Non retenu",
    Maitrise_douvrage: "Groupe GIBOIRE",
    Categorie: "Projets urbains",
    ref: "vannes.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./vannes/Vannes Gambetta.jpg",
  },

  "Marne et Gondoire": {
    Ville: "Marne et Gondoire",
    "Date de livraison": "2011",
    Maitrise_douvrage: "Communauté d’agglomération de Marne et Gondoire",
    Categorie: "Projets urbains",
    ref: "marnegondoire.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./marnegondoire/m3.jpg",
  },

  "Boulevards de Lyon": {
    Ville: "Lyon",
    "Date de livraison": "2001",
    Maitrise_douvrage: " Le Grand Lyon Mission Tramway, SERL",
    Categorie: "Projets urbains",
    ref: "lyon_blv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lyon_blv/l1.jpg",
  },

  "Les terrasses de la presqu’île": {
    Ville: "Lyon",
    "Date de livraison": "2013 - Non retenu",
    Maitrise_douvrage: " Communauté Urbaine de Lyon",
    Categorie: "Projets urbains",
    ref: "lyon_presqueile.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lyon_presqueile/l1.jpg",
  },

  "La Roche sur Yon": {
    Ville: "La Roche sur Yon",
    "Date de livraison": "2014",
    Maitrise_douvrage: " Ville de La Roche-sur-Yon",
    Categorie: "Projets urbains",
    ref: "laroche.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./laroche/l1.jpg",
  },

  "Aménagement de la plage": {
    Ville: "Le Havre",
    "Date de livraison": "1994",
    Maitrise_douvrage: " Ville du Havre, atelier littoral",
    Categorie: "Rues et jardins",
    ref: "lehavre.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lehavre/l1.jpg",
  },

  "Le parc des sports Géo André": {
    Ville: "La Courneuve",
    "Date de livraison": "2007",
    Maitrise_douvrage: "Ville de La Courneuve",
    Categorie: "Activités",
    ref: "lacourneuve_stade.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lacourneuve_stade/ls1.jpg",
  },


  "Maison des sports de La Courneuve": {
    Ville: "La Courneuve",
    "Date de livraison": "2006",
    Maitrise_douvrage: "Ville de La Courneuve",
    Categorie: "Activités",
    ref: "lacourneuve_mds.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./lacourneuve_mds/l1.jpg",
  },

  "Espaces publics du centre-ville de Grenoble": {
    Ville: "Grenoble",
    "Date de livraison": "2013",
    Maitrise_douvrage: "Ville de Grenoble",
    Categorie: "Rues et jardins",
    ref: "grenoble_cv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./grenoble_cv/gcv1.jpg",
  },

  "Parc Paul Mistral": {
    Ville: "Grenoble",
    "Date de livraison": "2008",
    Maitrise_douvrage: " Ville de Grenoble, Territoires 38 (SEM)",
    Categorie: "Rues et jardins",
    ref: "grenoble_parc.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./grenobleparc/g1.jpg",
  },

  "Festival des jardins": {
    Ville: "Chaumont sur Loire",
    "Date de livraison": "2008",
    Maitrise_douvrage: "Conservatoire International des Parcs et Jardins et Paysage",
    Categorie: "Rues et jardins",
    ref: "chaumontsurloire.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./chaumontsurloire/c1.jpg",
  },

  "Kanaalplan": {
    Ville: "Bruxelles",
    "Date de livraison": "2000",
    Maitrise_douvrage: "Région de Bruxelles-Capitale, Administration de l’Aménagement du territoire et du Logement",
    Categorie: "Rues et jardins",
    ref: "bruxelles.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bruxelles/bc1.JPG",
  },

  "Bourges": {
    Ville: "Bourges",
    "Date de livraison": "2006 - Non retenu",
    Maitrise_douvrage: "SEGECE",
    Categorie: "Activités",
    ref: "bourges.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bourges/b1.jpg",
  },

  "La ferme de Blanquefort": {
    Ville: "Blanquefort",
    "Date de livraison": "2013",
    Maitrise_douvrage: "SEMI de Blanquefort",
    Categorie: "Habitat",
    ref: "blanquefort_ferme.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./blanquefort_ferme/bf1.jpg",
  },

  "La Riviere Blanquefort": {
    Ville: "Blanquefort",
    "Date de livraison": "2009",
    Maitrise_douvrage: "SEMI de Blanquefort",
    Categorie: "Rues et jardins",
    ref: "blanquefortlariv.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./blanquefortlariv/blanquefortlariv1.jpg",
  },

  "Butte de Bagneux ": {
    Ville: "Bagneux",
    "Date de livraison": "1990",
    Maitrise_douvrage: "Ville de Bagneux",
    Categorie: "Rues et jardins",
    ref: "bagneuxb.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./bagneux_butte/bagneuxb1.jpg",
  },

  "Boulogne": {
    Ville: "Boulogne",
    "Date de livraison": "2001",
    Maitrise_douvrage: "Ville de Boulogne-Billancourt",
    Categorie: "Projets urbains",
    ref: "boulogne.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./boulogne/boulogne1.jpg",
  },



  "Angoulême": {
    Ville: "Angoulême",
    "Date de livraison": "2007",
    Maitrise_douvrage: "SEGECE (pour le centre commercial, le parking et les logements)",
    Categorie: "Activités",
    ref: "angouleme.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./angouleme/angouleme1.jpg",
  },

  "Cité numérique": {
    Ville: "Bègles",
    "Date de livraison": "2019",
    Maitrise_douvrage: "EPA Bordeaux Euratlantique",
    Categorie: "Activités",
    ref: "begles.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./begles/pic1.jpg",
  },

  "Arcueil": {
    Ville: "Arcueil",
    "Date de livraison": "1997",
    Maitrise_douvrage: "SEMASEP",
    Categorie: "Rues et jardins",
    ref: "arcueil.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./arcueil/arcueil1.JPG",
  },

  "Bâtiment des Suisses au Potager du Roi": {
    Ville: "Versailles",
    "Date de livraison": "2019",
    Maitrise_douvrage: "ENS de Paysage de Versailles",
    Categorie: "Activités",
    ref: "versailles_potager.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./versailles_potager/Vrs01_Insertion_00.jpg",
  },

  "Quartier de Chaoué": {
    Ville: "Allonnes",
    "Date de livraison": "2005",
    Maitrise_douvrage: "Sarthe Habitat, Ville d’Allonnes, Communauté Urbaine du Mans",
    Categorie: "Rues et jardins",
    ref: "allonnes.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./allonnes_images/ALLONNES1.JPG",
  },

  "Antony les Morins": {
    Ville: "Antony",
    "Date de livraison": "1982",
    Maitrise_douvrage: "OPHLM Antony ",
    Categorie: "Rues et jardins",
    ref: "morins.html",
    /*miniature avec un rapport 3024(longueur)/1840(hauteur) */
    miniature: "./morins/alm1.jpg",
  },

  "Gentilly": {
    Ville: "Gentilly",
    "Date de livraison": "1993",
    Maitrise_douvrage: "Bureau des paysages ",
    Categorie: "Projets urbains",
    ref: "gentilly.html",
    miniature: "gentilly/g1.jpg",
  },

  "Collection - Le Parc Habité": {
    Ville: "Villeurbanne",
    "Date de livraison": "2019",
    Maitrise_douvrage: "OGIC",
    Categorie: "Habitat",
    ref: "VB_Parc_Habite.html",
    miniature: "VB_Parc_Habite/pic1.jpg",
  },

  "Bordeaux Zone Urbaine": {
    Ville: "Bordeaux",
    "Date de livraison": "2012",
    Maitrise_douvrage: "CUB",
    Categorie: "Habitat",
    ref: "bordeaux_urbain.html",
    miniature: "bordeaux_urbain/bd1.jpg",
  },


};

var ProjectArray = Object.keys(projetsParNoms).map(function (v) {
  return $.extend({ Nom: v }, projetsParNoms[v]);
});



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
      ProjData.reverse();
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
    Maitrise_douvrage = filteredData[i].Maitrise_douvrage.toUpperCase(); /*Uppercase for Case Insentive*/
    Date_livraison = filteredData[i]["Date de livraison"].toUpperCase(); /*Uppercase for Case Insentive*/
    Ville = filteredData[i].Ville.toUpperCase(); /*Uppercase for Case Insentive*/
    if (Nom.indexOf(SearchString) >= 0) {
      /*Search By Nom*/
      SearchData[index++] = filteredData[i];
    }
    else if (Maitrise_douvrage.indexOf(SearchString) >= 0) {
      /*Search By Nom*/
      SearchData[index++] = filteredData[i];
    }
    else if (Date_livraison.indexOf(SearchString) >= 0) {
      /*Search By Nom*/
      SearchData[index++] = filteredData[i];
    }
    else if (Ville.indexOf(SearchString) >= 0) {
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
searching();
display(ProjectArray); /*Display All ProjectArray data */

$("#search").keyup(function () {
  /*Live Search, When Pressing any Keys*/ searching();
});

$("#sort").change(function () {
  /*Live Search, When Sort by*/ searching();
});

$("#filter").change(function () {
  /*Live Search, When Sort by*/ searching();
});


