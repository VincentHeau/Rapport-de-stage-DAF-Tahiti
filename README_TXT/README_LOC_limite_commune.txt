************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                       LOC_limite_commune_GEN                         *
************************************************************************
# Résumé:
Cette couche est l'agrégation des couches des limites de communes aux échelles de généralisation ( 1/5000 , 1/10000, 1/15000, 1/25000, 1/50000, 1/100000, 1/250000, 1/500000 ).

Dans la table attributaire, les champs Echelle_MIN et Echelle_MAX indiquent pour chaque limite, les échelles minimales et maximales d'affichage.


La description ci-après détaille les paramètres des traitements qui ont été fait sur la couche pour ces différentes échelles. 
Il s'agit pour chacune des échelles suivantes, d'une simplification des lignes ( algorithme de Douglas - Peucker) accompagnée d'un lissage.

Couche de départ : LOC_limite_commune

** Echelle 1/5000 **
Pas de généralisation à cette échelle, couche déjà produite


** Echelle 1/10000 **
Simplification (tolérance) :25m
Lissage : 15m


** Echelle 1/15000 **
Simplification (tolérance) :50m
Lissage : 20m


** Echelle 1/25000 **
Simplification (tolérance) :80m
Lissage : 25m


** Echelle 1/50000 **
Simplification (tolérance) :150m
Lissage : 50m


** Echelle 1/100000 ** 
Simplification (tolérance) :350m
Lissage : 75m

# Remarques et pistes d'amélioration
Toutes les modifications de ce traitement doivent se faire en harmonie avec la couche LOC_ile pour que les traits de côte et de limite de commune soit harmonisés entre eux