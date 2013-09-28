Panespresso
-----------------------------------

## Ini et environnement

* `application/ini/globals.php` : date de fin, environnement par défaut (voir `Environnements`, plus bas)


## Environnements
Il y a deux environnements, définis dans `application/ini/globals.php`:

* `prod`  : utilisé une version compilée des javascript et css
* `devel` : appelle les versions developpement de toutes les librairies javascript

Quand on modifie l'application, il est conseillé de se mettre dans l'environnement `devel` de façon à ce que chaque changement apportés dans les js/css soit immédiatement pris en compte. Avant de committer, il faut lancer `watch3.coffee` et `compile.js` pour que la version `prod` soit utilisable.

Changement à l'exécution: Il est possible de remplacer des paramètres à l'exécution avec des variables GET:
 - Pour basculer de version : ajouter `?env=devel` à l'URL. Pour revenir, utiliser `?env=prod`.
 - Pour bypasser l'authentification (permet de développer sans le CAS, ou de prendre l'identité de quelqu'un): ajouter `bypassAuth=LOGIN` à l'URL. Le paramètre `allow_bypassAuth` doit être autorisé.

