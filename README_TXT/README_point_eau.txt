************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                             HYD_POINT_EAU                            *
************************************************************************
Résumé:

Plusieurs possibilités ont été envisagées pour généraliser cette couche.

- Appliquer un champ d'importance aux objets permettant de faire une sélection selon l'échelle voulue.

- Trier les points selon qu'ils sont nommés ou pas. Cependant, ce mode de fonctionnement ne traduit pas forcément un classement par importance et est très sensible aux champs incomplets de la base de donnée.

- Trier les cascades par hauteur( cependant, la hauteur n'est pas le seul critère qui détermine si une cascade doit être affichée à une petite échelle)

Ainsi, une tentative d'agrégation des cascades proches avec généralisation en une sule majeure placée au centroïde de ce polygone a été réalisée. Cependant, la généralisation devient à la fois incorrecte géométriquement et non représentative de la réalité de la hiérarchie des cascades. 

La restructuration de la BDD est nécessaire pour pouvoir généraliser au mieux cette couche. 

# Remarques et pistes d'amélioration

- rajouter un champ orientation pour orienter les symboles des cascdes - Ajouter un champ importance sur les points d'eau et cascades

