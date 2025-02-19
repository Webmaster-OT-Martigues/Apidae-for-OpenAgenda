<h1>API (PHP) Apidae -> OpenAgenda (+interface)</h1>

<div align="center">
	<img alt="Office de Tourisme de Martigues" src="https://user-images.githubusercontent.com/8257981/201097229-43a65b5a-5801-4542-ba78-9ad476939cee.png" />
</div>

<div align="center">
	<sub><b>Introduction</b></sub>
    	<br />
    	<a href="#introduction">Introduction</a> •
    	<a href="#prerequis">Ressources nécessaires</a>
    	<br />
	
  <sub>Accès et Clef</sub>
  	<br />
    	<a href="#quick-start">Comment obtenir l'accès </a> •
    	<a href="#clefapidae">Obtenir les clefs d'APIDAE</a> •
    	<a href="#clefopenagenda">Obtenir les clefs OpenAgenda</a>
    	<br />
<sub>Fichier de l'API</sub>
  	<br />
	<sub>les Clefs à utiliser</sub>
  	<br />
	<a href="#responses">Utilisations des clefs</a> •
	<a href="#default-response">Config.php</a> •
	<a href="#extended-response">Les requêtes</a>
    	<br />
</div> 

------------

<h1><b>Avant de commencer</b></h1>
<h2 id="introduction"><b>Introduction</b></h2>
<h4>Interface web. (Voir capture d'écran de l'Office de Tourisme de Martigues)</h4>
<p>Cette nouvelle interface n'utilise pas de fichier config car tout les paramètres sont passés via son URL. Cette version faisait partie de l'ancien Extranet de l'Office de Tourisme de Martigues et en reprends son template css.</p>
	
Nous avons à présent un formulaire qui va générer une URL avec les clefs en paramètres.

Le formulaire : 

![image](https://github.com/user-attachments/assets/e5cc45d9-b945-4de0-99ae-bb321e092d8b)

<p><b>Paramètres URL générés par le formulaire : </b></p>

<p>api-rest/<b>index.php</b>?<b>public</b>=12345678912346789&<b>secret</b>=12345678912346789&<b>apiKey</b>=V0ACBDE&<b>projetId</b>=1234&<b>selectionIds</b>=13000&<b>test=oui</b></p>
Vous pouvez à présent, une fois que tout est correctement entré, garder votre URL dans vos favories.

Où se procurer les clefs et autres paramêtres : 

<p>Les Clefs "<b>public</b>" et "<b>secret</b>" sont tirées de votre <b>OpenAgenda</b> et <b>ApiKey</b>, <b>projecId</b>, <b>selectionIds</b> sont disponibles sur votre projet APIDAE. Vous avez un descriptif plus bas dans ce Readme.</p>
<p> Le code source est fonctionnel : </p>

![Capture d'écran 2025-02-19 112646](https://github.com/user-attachments/assets/b69d7ed4-b4ea-4615-b087-24032851f78a)

-------

<p>Vous trouverez ici toutes les ressources nécessaires pour paramétrer et utiliser notre API APIDAE / OPEN AGENDA.</p>

-------

<h2 id="prerequis"><b>Ressources nécessaires </b></h2>

<p>	* Avoir un compte administrateur <a href="https://base.apidae-tourisme.com/consulter/recherche-intuitive/?0" target="_blank">APIDAE</a></p>
<p>	* Avoir un compte administrateur <a href="https://openagenda.com/martigues-tourisme/admin/events" target="_blank">OpenAgenda</a>.</p>

----------

<h2 id="quick-start"><b>Comment obtenir l'accès</b></h2>

<p>Vous devez demander des clefs publics et privés au support d’Open Agenda. Une fois reçu par mail, on insère ces clefs dans le fichier Config de l’API. L’API va l’utiliser pour établir une liaison d’accès provisoire et sécurisé. </p>
<p>Nous pouvons traduire token par "Jeton d'accès spécial". Il vous faudra donc fournir des clefs pour la lecture sur APIDAE et des clefs pour l'écriture sur l'OpenAgenda.</p>
<p>* Les clefs APIDAE se récupèrent depuis votre compte administrateur après la création d'un projet </p>
<p>* Les clefs OpenAgenda vous seront communiqué après une demande par email à l’équipe technique OpenAgenda </p>
<p> <b>NB :</b> Les clefs utilisées dans ce guide sont des valeurs d'exemples. Elles n'existent pas et ne pourront donc pas être utilisées dans les tests de l'API.</p>
			
<h3 id="clefapidae"><b>Obtenir les clefs d'APIDAE</b></h3>		
<p>Veuillez suivre attentivement le tutoriel d'Apidae concernant la <a href="https://aide.apidae-tourisme.com/hc/fr/articles/360000828071-Cr%C3%A9er-son-projet-num%C3%A9rique#:~:text=Toute%20cr%C3%A9ation%20de%20projet%20est,la%20coordination%20globale%20du%20r%C3%A9seau." target="_blank">création d'un projet</a>.
La validation de votre projet vous permettra de retrouver les clefs nécessaires à l'API tel que l'identifiant de votre projet et la clef API. Ils sont tous les deux uniques. Vous trouverez les clefs dans la rubrique <b>informations générales</b> de votre projet.</p>
		
<br>

![apidae8](https://user-images.githubusercontent.com/8257981/201097699-030a5f8c-662f-43d0-990a-a461ed11c8d7.jpg)

						
<p>Les deux valeurs à noter sont :</p>
<p>Identifiant	:&nbsp;&nbsp;<code>6775</code>&nbsp;- Dans l'URL projetId=6775 </p>
<p>Clef d'API	:&nbsp;&nbsp;<code>AbcdeF</code>&nbsp;- Dans l'URL apiKey=AbcdeF </p>

<h3 id="clefopenagenda"><b>Obtenir les clefs d'OpenAgenda</b></h3>
		
<p>Vous aurez besoin de 3 clefs : la clé <b>secrète</b>, la clé <b>public</b> et l’agenda UID à saisir dans le fichier config.php. </p>
<p>L'activation de la clef privé (dites aussi clef secrète) doit être demandé par mail à support@openagenda.com (nécessaire aux opérations d'écriture).</p>
<p>Une fois cette activation effectuée par OpenAgenda, la clef publique et secrète seront disponibles dans votre interface administrateur. </p>
<p>Vos clefs d'accès en lecture et écriture sont disponibles dans la rubrique clés API de la page de paramétrage de votre compte </p>
 
![clef_openagenda](https://user-images.githubusercontent.com/8257981/201097801-b276f1d2-01ab-4faa-b3d1-301361c36f87.jpg)

<p>La clef secrète doit être renseignée dans le fichier Config.php de l’API. Le fait de renseigner cette clef permet d’effectuer une demande d’accès (token) aux données OpenAgenda. </p>
<p>* Voir création d'un Token dans fonction access_token_get($secret) dans le fichier fonctions_API.php</p>
<p>ATTENTION : le ticket d'accès/token a une durée de vie limitée lors de l'utilisation de votre API.</p>
<p>Vous pouvez consulter la <a href="https://developers.openagenda.com/authentification/" target="_blank">documentation d'OpenAgenda</a> pour approfondir la procédure d'authentification.</p>
<p><b>AgendaUid  : </b> l'<b>UID</b> (son numéro d'identification) de l'agenda est visible dans la barre latérale en bas à droite de l'agenda.</p>

![uid](https://user-images.githubusercontent.com/8257981/201098189-326a2c67-8dba-44c7-811e-b015978430c6.jpg)

<h3><b>Les trois valeurs à noter dans le fichier config sont donc :</b></h3><p></p>
<p>Clef public  :&nbsp;&nbsp;<code>3cadd4ccb8484442a87432cf0f94c</code>  - Dans l'Url : public=3cadd4ccb8484442a87432cf0f94c </p>
<p>Clef secrète :&nbsp;&nbsp;<code>c071a53f48074d6c8c849fb1f0223</code>  - Dans l'URL : secret=c071a53f48074d6c8c849fb1f0223 </p>
<p>AgendaUid    :&nbsp;&nbsp;<code>65630513</code> - Dans l'URL : agendaUid=65630513 </p>

<p><b>index.php</b>?<b>public</b>=12345678912346789&<b>secret</b>=12345678912346789&<b>apiKey</b>=V0ACBDE&<b>projetId</b>=1234&<b>selectionIds</b>=13000&<b>test=oui</b></p>

--------

<h2 id="query-parameters"><b>Les fichiers sources de l'API</b></h2>
<h3 id="basics"><b>Descriptif</b></h3>
<p>Il n'est plus nécessaire d'avoir des notions de programmation pour utiliser l'API.</p>
<p>L'API a été compressée dans un fichier au format ZIP. Il contient un dossier <b>/fonctions</b>, un dossier <b>/exemple</b> et deux fichiers d'utilisation dans le dossier racine.</p>
		
----------

<h2 id="responses"><b>Utilisation des clefs</b></h2>
<p>Vous avez à présent toutes les clefs APIDAE et OpenAgenda. Vous pouvez construire votre URL</p>
<p>Clef public  :&nbsp;&nbsp;<code>3cadd4ccb8484442a87432cf0f94c</code></p>
<p>Clef secrète :&nbsp;&nbsp;<code>c071a53f48074d6c8c849fb1f0223</code><br></p>
<p>AgendaUid    :&nbsp;&nbsp;<code>65630513</code><br></p>
<p>Identifiant  :&nbsp;&nbsp;<code>6775</code></p>
<p>Clef d'API :&nbsp;&nbsp;<code>AbcdeF</code><br></p>

Vous devez donc avoir dans votre URL : 

index.php?<b>public</b>=3cadd4ccb8484442a87432cf0f94c93a&<b>secret</b>=c071a53f48074d6c8c849fb1f0223f4e&<b>apiKey</b>=V0env9EH&<b>projetId</b>=6775&<b>selectionIds</b>=130723
		
<hr style="border-top: 1px solid rgba(255,255,255,0.15);">
	
<pre><code class="language-nof">$url_Apidae .= 'query='.urlencode(json_encode($requete));</code></pre><p></p>

--------

<h2 id="createve"><b>Analyse des données APIDAE pour OpenAgenda</b></h2>
					

Nous avons à transmetre sur l'OpenAgenda : 


* le titre de l'annonce 
* l'état de l'annonce : avec 0 pour l'événement non publié et/ou à contrôler - 1 pour un événement non publié et 2 pour un événement controlé et donc publié (valeur par défaut) 
* Une image
* Credits de l'image
* id de l'adresse, soit elle n'existe pas et donc il s'agit d'une création de lieu, soit il faut la récupérer 
* Un description long 
* Un descriptif court (200 caractères maximum)
* public (valeur 25 par défaut)
* Conditions pour les tarifs en clair 
* registration pour une lien vers un site Internet, site pour une billeterie où autres.
* Nature (valeur 57 par défaut) NON DOCUMENTÉ
* Thematique (Valeur 2)  NON DOCUMENTÉ
* Fadas, variable pour les Fadas, NON DOCUMENTÉ
* Featured, false ou true quand l'événement doit apparaître en tête de liste ( en une d'OpenAgenda )
* keywords est utilisé pour les mots clefs (exemple keywords : Tourisme, Historique, Environnement / Développement durable )
* timings pour les horaires d'ouvertures
* slug utiliser pour le titre de l'annonce. 






