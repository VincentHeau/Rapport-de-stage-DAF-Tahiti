************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                           REL_LIGNE_DE_RELIEF                            *
************************************************************************

Résumé:

Dans la table attributaire, les champs Echelle_MIN et Echelle_MAX indiquent pour chaque entité, les échelles minimales et maximales d'affichage.

La description ci-après détaille les traitements qui ont été fait sur la couche pour ces différentes échelles.


**Echelles 1/5000 - 1/10000 - 1/15000 - 1/25000 **

Pas de généralisation des courbes de niveau à cette échelle. Même, au 1/25000 (carte de référence pour la randonnée), seul un tri dans les catégories s'impose. Seules les courbes de niveau sont conservées. Une discussion s'est faite sur les falaises à intégrer avec une symbolgie particulière.


**Echelle 1/50000**
Généralisation de la géométrie avec FME et le généralisateur de Sherbend. (Ajout d'un lissage très fin sur Arcgis en fin de traitement pour améliorer les angles sans fausser les points côtés.)

La généralisation au 1/50000 sur FME se fait en utilisant les points côtés du 1/25000 pour maintenir une précision importante.

Enfin, modification de l'équidistance des courbes de niveau pour une meilleure visbilité.

Traitements FME successifs avec paramètres associés : 

-

** Echelles 1/100 000 et moins**

Pas de généralisation de courbes de niveau à ces échelles car elles ne sont pas affichées sur la carte