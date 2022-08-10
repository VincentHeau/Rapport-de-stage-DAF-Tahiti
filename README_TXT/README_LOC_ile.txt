************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                             LOC_ile                                  *
************************************************************************
Résumé:
Cette couche est l'agrégation des couches de contour des îles sur toute la Polynésie Française aux échelles de généralisation ( 1/5000 , 1/10000, 1/15000, 1/25000, 1/50000, 1/100000, 1/250000, 1/500000 ).

Dans la table attributaire, les champs Echelle_MIN et Echelle_MAX indiquent pour chaque île, les échelles minimales et maximales d'affichage.

La description ci-après détaille les traitements qui ont été fait sur la couche pour ces différentes échelles. Pour toutes les échelles, les traitements sont similaires. Seuls les paramètres varient. En effet, le traitement se compose d'une simplification des polygones accompagnée d'un lissage.

En ce qui concerne la simplification, la tolérance correspond au seuil dans l'algorithme de Douglas-Peucker. (cet algorithme est employé pour chaque échelle) 

** Echelle 1/5000 **
Pas de généralisation à cette échelle


** Echelle 1/10000 **
Simplification : Tolérance de 25m (suppression des entités inférieures à 0m²)
Lissage: 15m


** Echelle 1/15000 **
Simplification : Tolérance de 50m (suppression des entités inférieures à 80m²)
Lissage: 20m


** Echelle 1/25000 & 1/50000**
Simplification : Tolérance de 80m (suppression des entités inférieures à 100m²)
Lissage: 25m


** Echelle 1/100000 **
Simplification : Tolérance de 150m (suppression des entités inférieures à 250m²)
Lissage: 50m


** Echelle 1/500000 **
Simplification : Tolérance de 350m (suppression des entités inférieures à 500m²)
Lissage: 75m



Limites d'utilisation
Couche limitée au fuseau 6 ( Possibilité d'appliquer le traitement ModelBuilder sur d'autre fuseaux)