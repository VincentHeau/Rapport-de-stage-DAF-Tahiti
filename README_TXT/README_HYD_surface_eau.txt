************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                           HYD_SURFACE_EAU                            *
************************************************************************

$Couche en RGPF$
Résumé:

Dans la table attributaire, les champs Echelle_MIN et Echelle_MAX indiquent pour chaque surface d'eau, les échelles minimales et maximales d'affichage.

La description ci-après détaille les traitements qui ont été fait sur la couche pour ces différentes échelles.

Pour les surfaces d'eau, une modification de la géométrie semble nécessaire à partir de l'échelle 1/50000.


**Echelle 1/5000 - 1/10000 - 1/15000 - 1/25000 **

Pas de généralisation des surfaces d'eau à cette échelle


**Echelle 1/50000**
Simplification des polygones (Douglas-Peucker 20m)
Suppression des polygones de moins de 20m²
Lissage ( tolérance de 25m, algorithme PAEK)

**Echelle 1/100000**
Simplification des polygones (Douglas-Peucker 30m)
Suppression des polygones de moins de 400m²
Lissage ( tolérance de 35m, algorithme PAEK)

