************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                          EDI_CONSTRUCTION_S                          *
************************************************************************

# Résumé:
La généralisation se fait simplement par une simplification des bâtiments dont les paramètres sont choisis en fonction des entités à garder.

La superficie minimale correspond à la superficie en dessous de laquelle une entité est supprimée.

** Echelle 1/5000 **
Pas de généralisation à cette échelle, couche déjà produite

** Echelle 1/10000 **
Tolérance de simplification : 10m
Superficie minimale : 5m² 

** Echelle 1/15000 **
Tolérance de simplification : 25m
Superficie minimale : 35m² 

** Echelle 1/25000 **
Tolérance de simplification : 30m
Superficie minimale : 75m² 

** Echelle 1/50000 **
Tolérance de simplification : 45m
Superficie minimale : 7000m² 
(seul les terrains de foot sont conservés, les autres terrains sont supprimés)

** Echelle 1/100000 ** 
Tolérance de simplification : 50m
Superficie minimale : 10000m² 
(Stade et autres terrains plus grands)

** Echelle 1/250000 ** 
Tolérance de simplification : 45m
Superficie minimale : 50000m²
(Seuls les très grands terrains sont conservés (golf, piste d'aéroport, terrain de motocross, hippodrome, etc...)

# Remarques et pistes d'amélioration
Problématique de la suppression des petits aéroports dans les îles éloignées comme les Tuamotu. pour pallier cette difficulté, peut-être faire une catégorie à part. 