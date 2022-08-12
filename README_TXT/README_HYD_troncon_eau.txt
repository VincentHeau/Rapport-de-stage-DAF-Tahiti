************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                     HYD_troncon_eau_GEN_Tahiti                       *
*                     HYD_troncon_eau_GEN_Moorea                       *
************************************************************************


# Résumé:
Ici, deux types de couches sont présentes:
- une couche issue de la base de donnée, qui n'est pas généralisée.
  (utilisée pour les échelles 1/5000 , 1/10000, 1/15000 et 1/25000.)

- une couche issue du MNT présentant un réseau hydrographique où les tronçons présentent des codes permettant de réduire l'affichage. 
  (utilisée pour les échelles 1/50000, 1/100000, 1/250000, 1/500000.)

Le lissage de la géométrie sur le réseau issu du MNT n'a pas été réalisé pour s'ajuster au mieux avec l'ombrage.

Couche de départ : MNT Raster de Tahiti et Moorea

La description ci-après détaille les traitements qui ont été faits sur la couche pour ces différentes échelles.

** Echelle 1/5000, 1/10000, 1/15000, 1/25000 **
Couche HYD_TRONCON_EAU

** Echelle 1/50000, 1/100000, 1/250000, 1/500000 **
(voir schéma récapitulatif en annexe dans le dossier)

Couche extraite du MNT avec le champ grid_code après les traitements suivants :
- Remplissage (complet sans indication de limite Z)
- Sens de circulation type D8 ( produit un raster de direction de flux )
- Accumulation de flux ( Flottant, type D8 ) (produit un raster d'accumulation de flux)
- Calcul sur le raster ( seul les pixels dont la valeur est supérieure à un seuil prennent la valeur 1, les autres la valeur 0. On isole ainsi le tracé des rivières. formule de calcul choisie : Con("%Accumulation%"> 5000,1)

- Ordre d'écoulement (Strahler) ( prennant en paramètre le raster de direction de flux et le raster binaire créé à l'étape d'avant) 

-Ecoulement vers entité
--> En sortie une couche vectorielle des cours d'eau avec un champ GRID_CODE donnant l'importance et permettant de la généraliser.

- Jointure spatiale avec HYD_TRONCON_EAU (Correspondance choisie, l'intersection)



# Remarques et pistes d'amélioration

Le traitement sur MNT est évitable par une réorganisation de la base de données ou un meilleur nommage des cours d'eau sans tronçons non nommés pour les cours d'eau principaux.