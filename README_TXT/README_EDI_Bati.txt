************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                          EDI_BATI_x_GEN                              *
************************************************************************
Résumé:
Cette couche est l'agrégation des couches de bâtiments sur le fuseau x aux 
échelles de généralisation :
 1/5000 , 1/10000, 1/15000, 1/25000, 1/50000, 1/100000, 1/250000, 1/500000 

Dans la table attributaire, les champs Echelle_MIN et Echelle_MAX indiquent
pour chaque bâtiment ou regroupement de bâtiment, les échelles minimales et
maximales auxquelles il doit être utilisé.

La description ci-après détaille les traitements qui ont été fait sur la 
couche pour ces différentes échelles.

** Echelle 1/5000 **
Pas de généralisation à cette échelle, couche déjà produite

** Echelle 1/10000 **
Le passage de l'échelle 1/5000 à 1/10000 ne semble nécessiter qu'une 
simplification dans la géométrie des bâtiments(tolérance de simplification 10m)
avec une suppression des bâtiments insignifiants ( moins de 5m²).

** Echelle 1/15000 **
Simplification dans la géométrie des bâtiments(tolérance de simplification 25m)
avec une suppression des bâtiments insignifiants ( moins de 9m²).

** Echelle 1/25000 **
Simplification dans la géométrie des bâtiments(tolérance de simplification 30m)
avec une suppression des bâtiments insignifiants ( moins de 16m²).

** Echelle 1/50000 **
Généralisation, mais à partir de la couche initiale, on regroupe les bâtiments
de plus de 10m² à proximité d'autres bâtiments dans un rayon de 100m. Enfin, on
sélectionne parmi ces agrégations de polygones, celles qui ont une superficie de
plus de 2000m² ( choix pour la visibilité à l'échelle 1/50 000). La dernière étape
consiste à intersecter ces agrégats de polygones avec la couche de contour de l'île
adaptée.

/!\ Le traitement de généralisation pour les échelles inférieures se fait en série /!\

** Echelle 1/100000 ** 
On agrège les entités obtenues à l'échelle 1/50000 selon qu'elles se situent dans un rayon
de 500m. Puis on sélectionne seulement les entités supérieures à 8000 m². Deux étapes supplémentaires sont réalisées: une simplification des géométries avec une tolérance de 
50m puis un lissage avec une tolérance de 75m. Enfin, la dernière étape est une 
intersection avec la couche de contour de l'île.

** Echelle 1/250000 & 1/500000 ** 
Le traitement s'effectuant en série, la production des couches à ces échelles se fait par
un lissage de la couche précédente ( tolérance 750 m ) accompagné d'une intersection avec
le contour de l'île évitant les débordements.

Limites d'utilisation
Couche limitée au fuseau 6 ( Possibilité d'appliquer le traitement ModelBuilder sur 
d'autre fuseaux)