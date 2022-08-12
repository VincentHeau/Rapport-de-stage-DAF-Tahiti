************************************************************************
*     Explication de la méthode de généralisation cartographique       *
*                             HYD_LIMITE_EAU                           *
************************************************************************
# Résumé:
Cette couche n'a pas été utilisée, donc pas généralisée. La cartographie ne s'appuie pas sur cette couche mais sur l'utilisation d'un fond cyan raster. Son niveau de détail important le rend néanmoins inutilisable pour les échelles faibles ( 1/50000, 1/100000, 1/250000, 1/500000).

Ainsi pour pallier ce problème, des données de télédétection sur les récifs (issus d'un atlas de 2005*) ont été ajoutées à la cartographie. en regroupant les classes de récifs, il est possible d'isoler les récifs barrières ainsi que les zones de bas fond. le niveau de détail s'ajuste parafaitement avec des échelles comme le 1/100000 ou encore le 1/500000. 

{
  Title                    = {Atlas des récifs coralliens de Polynésie française},
  Author                   = {S. Andréfouët and C. Chauvin and Spraggins S. and Torres-Pulliza D and Kranenburg C},
  Year                     = {2005},
  Pages                    = {19-22}
}



Voir le rapport annexe *classement_recif.pdf* pour avoir le détail de ce regroupement.

Les fichier lyrx présents dans ce dossier contiennent les regroupements appropriés pour les différentes gammes d'échelles.

** Echelle 1/5000 à 1/25 000 **
Groupement le plus détaillé

** Echelle 1/50000 à 1/250 000 **
Groupement intermédiaire ou quelques classes sont supprimées par rapport à la représentation précédente

** Echelle 1/500000 **
Uniquement les récifs barrières en blanc



# Remarques et pistes d'amélioration

Voir le document pdf *classement_recif.pdf* avec les illustrations. Principal problème : la cohérence des limites terrestres entre cette couche et la couche LOC_ile ( exemple amplifié sur les motus des tuamotus)



