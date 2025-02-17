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
<sub>Token d'accès</sub>
	<br />
	<a href="#token">Création d'un Token</a>
    	<br />
<sub>Analyse de donnée brut</sub>
	<br />
	<a href="#createve">Analyse des données APIDAE</a> •
	<a href="#titre">Titre de l'événement </a> •
	<a href="#state">Etat de l'événement</a> •
	<a href="#image">Image &amp; copyright</a>
	<br />
	<a href="#adresse">Création de l'adresse</a> •
	<a href="#description">Description</a> •
	<a href="#mot">Les mots clefs</a> •
	<a href="#date">Gestions des date</a> •
	<a href="#tarif">Tarif en clair </a>
    	<br />
</div> 

------------

<h1><b>Avant de commencer</b></h1>
<h2 id="introduction"><b>Introduction</b></h2>
<h4>Interface web. (Voir capture d'écran de l'Office de Tourisme de Martigues)</h4>
<p>Cette interface n'utilise pas de fichier config car tout les paramètres sont passés via son URL. Elle faisait partie de l'ancien Extranet de l'Office de Tourisme de Martigues et en reprends son template css.</p>
	
<p><b>Paramètre URL : </b></p>

<p>api-rest/<b>index.php</b>?<b>public</b>=12345678912346789&<b>secret</b>=12345678912346789&<b>apiKey</b>=V0ACBDE&<b>projetId</b>=1234&<b>selectionIds</b>=13000&<b>test=oui</b></p>

<p>Les Clefs "<b>public</b>" et "<b>secret</b>" sont tirées de votre <b>OpenAgenda</b> et <b>ApiKey</b>, <b>projecId</b>, <b>selectionIds</b> sont disponibles sur votre projet APIDAE. Vous avez un descriptif plus bas dans ce Readme.</p>
<p> Le code source est fonctionnel : </p>


![Capture d'écran 2025-02-17 115023](https://github.com/user-attachments/assets/15837705-2f28-4943-abed-4da18d22424a)

-------

<p>Vous trouverez ici toutes les ressources nécessaires pour paramétrer et utiliser notre API APIDAE / OPEN AGENDA.</p>
<p>Note et méthode de développement - Ce code source peut être utilisé et amélioré par tout le monde.</p>

-------

<h2 id="prerequis"><b>Ressources nécessaires </b></h2>
<p>* Pour modifier les fichiers PHP qui composent l'API, vous aurez besoin :</p>
<p>	* D'un éditeur de texte. Dans ce guide, nous avons utilisé l'éditeur de code source <a href="https://notepad-plus-plus.org/downloads/" target="_blank">Notpad++</a> (gratuit et disponible pour Windows. <a href="http://www.codelobster.com/html_editing.html" target="_blank">sublime-text</a> est disponible sous Ubuntu). L'éditeur vous aidera à modifier les fichiers PHP pour développer, déboguer et tester l'API.</p>

<p>	* Avoir un environnement web pour exécuter le code source de l'API (Généralement, il s’agit du  serveur qui héberge votre site Internet).</p>
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
<p>Identifiant	:&nbsp;&nbsp;<code>6775</code> - Dans l'URL projetId=6775 </p>
<p>Clef d'API	  :&nbsp;&nbsp;<code>AbcdeF</code> - Dans l'URL apiKey=AbcdeF </p>

<h3 id="clefopenagenda"><b>Obtenir les clefs d'OpenAgenda</b></h3>
		
<p>Vous aurez besoin de 3 clefs : la clé secrète, la clé public et l’agenda UID à saisir dans le fichier config.php. </p>
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

<p>api-rest/<b>index.php</b>?<b>public</b>=12345678912346789&<b>secret</b>=12345678912346789&<b>apiKey</b>=V0ACBDE&<b>projetId</b>=1234&<b>selectionIds</b>=13000&<b>test=oui</b></p>


--------

<h2 id="query-parameters"><b>Les fichiers sources de l'API</b></h2>
<h3 id="basics"><b>Descriptif</b></h3>
<p>l'API est développée en PHP. Le PHP est un langage de programmation web simple et efficace. Il est préférable d'avoir quelques notions de programmation pour éditer et utiliser l'API.</p>
<p>L'API a été compressée dans un fichier au format ZIP. Il contient un dossier <b>/fonctions</b>, un dossier <b>/exemple</b> et deux fichiers d'utilisation dans le dossier racine.</p>

<table>
	<thead>
		<tr>
			<th>Fichiers</th>
			<th style="text-align:left">Descriptions</th>
			<th>Dossier</th>
			<th style="text-align:center">Modifier?</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>config.php</code></td>
				<td style="text-align:left">Ce fichier contiendra vos clefs APIDAE et OpenAgenda.</td>
				<td>API/config/</td>
				<td style="text-align:center"><b>OUI</b></td>
			</tr>
			<tr>
				<td><code>fonctions_API.php</code></td>
				<td style="text-align:left">Ce fichier contient toutes les fonctions utiles à l'API.</td>
				<td>API/fonctions/</td>
				<td style="text-align:center"><b>NON</b></td>
			</tr>
			<tr>
				<td><code>test_api.php</code></td>
				<td style="text-align:left">Fichier d'exemple pour <b>lire</b> et <b>afficher</b> les données sur OpenAgenda et APIDAE. Affichage brut des données. </td>
				<td>API</td>
				<td style="text-align:center"><b>OUI</b></td>
							</tr>
							<tr>
								<td><code>create_event.php</code></td>
								<td style="text-align:left">Création d'un événement sur OpenAgenda. Ajoute un événement à modérer.</td>
								<td>API</td>
								<td style="text-align:center"><b>OUI</b></td>
							</tr>							
							<tr>
								<td><code>update_event.php</code></td>
								<td style="text-align:left">Mise à jour d'un événement <b>déjà</b> existant sur Openagenda. Il peut être créé avec le fichier d'exemple create_event.php</td>
								<td>API</td>
								<td style="text-align:center"><b>OUI</b></td>
							</tr>								
						</tbody>
					</table>
					<p></p>
		
----------

<h2 id="responses"><b>Utilisation des clefs</b></h2>
<p>Vous avez à présent toutes les clefs APIDAE et OpenAgenda. Vous pouvez construire votre URL</p>
<p>Clef public  :&nbsp;&nbsp;<code>3cadd4ccb8484442a87432cf0f94c</code></p>
<p>Clef secrète :&nbsp;&nbsp;<code>c071a53f48074d6c8c849fb1f0223</code><br></p>
<p>AgendaUid    :&nbsp;&nbsp;<code>65630513</code><br></p>
<p>Identifiant  :&nbsp;&nbsp;<code>6775</code></p>
<p>Clef d'API :&nbsp;&nbsp;<code>AbcdeF</code><br></p>

Vous devez donc avoir 
  
<h3 id="default-response"><b>Config.php</b></h3>
<p>Vous devez copier et coller vos clefs dans ce fichier. La moindre erreur peut empêcher son bon fonctionnement.</p> 
					
<pre><code class="language-nof">
	$keys = array( /* Les clés API permettent de lire et écrire des données sur OpenAgenda via l'API. */
	  'public' =&gt; '3cadd4ccb8484442a87432cf0f94c', /* Pour OpenAgenda en lecture */
	  'secret' =&gt; 'c071a53f48074d6c8c849fb1f0223'  /* Pour OpenAgenda en mode écriture et autres*/
	);

	/*
		Clef disponible via la page : https://openagenda.com/martigues-tourisme
	*/
	$agendaUid = 65630513;  
	/* Valeur d'exemple à retrouver dans votre APIDAE  : */
	$territoireIds = array('5693912'); /* Conseil de territoire : Pays de Martigues */ 
	$selectionIds = array('126230');

	$apiDomain = "http://api.apidae-tourisme.com/api/";
	
	$apiKey = 'AbcdeF'; // LA CLEF de l'API APIDAE  
	$projetId = '6775'; 
	
	$nbResult = '200'; 

	/*
	 *  Requêtes Apidae
	 */

	$requete = array(); /* Sauvegarde de la requête dans un tableau */
	$requete['territoireIds'] = $territoireIds;
	$requete['selectionIds'] = $selectionIds;
	$requete['identifiants'] = $identifiants;
	$requete['apiKey'] = $apiKey;
	$requete['projetId'] = $projetId;
	//$requete['dateDebut'] = date("Y-m-d"); /* Défini un début de période dans la liste des événements */
	// $requete['dateDebut'] = "2022-09-10"; /* date("Y-m-d") = date du jour ou une date en clair "2022-09-10" */
	
	// Vous pouvez afficher SEULEMENT une liste via leur identifiant 
	// $identifiants = array( '5591771','5591811','5591834','5592056','5592230','5801215');
					
	$requete['identifiants'] = $identifiants;
	$requete["responseFields"] = array("@all");
	$url_Apidae = $apiDomain."v002/agenda/detaille/list-objets-touristiques/";
	$url_Apidae .= '?';
	$url_Apidae .= 'query='.urlencode(json_encode($requete));
	$url_OpenAgenda="https://openagenda.com/agendas/".$agendaUid."/events.v2.json?key=".$keys['public'];
	
	/* Pour la création de la requête ADRESSE */
	$department		= 	"Bouches-du-Rhône"; 
	$timezone		=	"Europe/Paris"; /* Fuseau horaire de référence */
	$countryCode 	= 	"FR";
	
</code></pre>

<p> Vous pouvez indiquer une liste d'événement via leurs identifiants sous forme d'un tableau, ainsi qu'une date de début des événements.</p>
<p><i>Ils ont été notés dans le fichier config.php en commentaires via // </i></p>
<pre><code class="language-nof">
//$requete['dateDebut'] = date("Y-m-d"); /* Défini un début de période dans la liste des événements */
// $requete['dateDebut'] = "2022-09-10"; /* date("Y-m-d") = date du jour ou une date en clair "2022-09-10" */
</code></pre>	
		
<hr style="border-top: 1px solid rgba(255,255,255,0.15);">
	
<h2 id="extended-response"><b>Les requêtes</b></h2>
<p>Toutes les demandes de lectures et d'écritures se font par des requêtes construites en format <b>JSON</b>. Le JSON, pour JavaScript Object Notation, est un format d'échange de données structurées.</p>
<p> Exemple d'une requête envoyé par l'API pour se connecter à APIDAE, toutes ces valeurs viennent du fichier config.php.</p>
					
<p> La requête en clair : </p>				
<pre><code class="language-nof">
{
  "query" : {
    "selectionIds" : [ 126230 ],
    "territoireIds" : [ 5693912 ],
    "searchFields" : "NOM_DESCRIPTION_CRITERES",
    "dateDebut" : "2022-08-30",
    "first" : 0,
    "count" : 20,
    "order" : "IDENTIFIANT",
    "asc" : true,
    "responseFields" : [ "@all" ],
    "apiKey" : "AbcdeF",
    "projetId" : 6775
  }
</code></pre>					
					
<p>La requête est convertie grâce à une ligne de codes dans le fichier config.php . Le fichier test_api.php se charge de l’exécuter.</p>
<p>La requête mentionnée ci-dessus est traduite par la ligne de code ci-dessous (visible dans le fichier config.php) :</p>
<p></p>
<pre><code class="language-nof">$url_Apidae .= 'query='.urlencode(json_encode($requete));</code></pre><p></p>

<p>Explications : urlencode est la fonction qui va convertir la requête pour l'envoyer sur APIDAE via l'URL :
</p><p></p><pre><code class="language-nof">"http://api.apidae-tourisme.com/api/v002/agenda/detaille/list-objets-touristiques/?query=%7B%22territoireIds%22%3A%5B%225693912%22%5D%2C%22selection..."</code></pre><p></p>
<p>La requête mentionnée ci-dessus est également traduite par la ligne de code ci-dessous (visible dans le fichier test_api.php) :</p>
<p></p>
<pre><code class="language-nof">$results_API = API_Resource($url_Apidae);</code></pre><p></p>

<p>Explications : API_Resource est la fonction qui va se charger de la requête à envoyer à APIDAE</p>
<p><b>PHP</b></p>

<pre><code class="language-nof">
function API_Resource($url_source)
{
	$session = curl_init(); /* initialise une nouvelle session et retourne un identifiant de session cURL à utiliser avec les fonctions curl_setopt(), curl_exec() et curl_close(). */
	curl_setopt($session, CURLOPT_POST, 1);
	curl_setopt($session, CURLOPT_URL, $url_source);
	curl_setopt($session, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($session, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

	$result = curl_exec($session);
	if (!$result)	{
		die("Il existe une erreur dans votre URL !! ");
	}
	curl_close($session); /* Fermeture de la session */
	
	return $result; 

}
</code></pre>	

<p>Le résultat est un flux/fichier au format JSON. Vous trouverez un exemple dans le dossier <code>\exemples\JSON-APIDAE.txt </code></p>

--------

<h2 id="token"><b>Création d'un Token d'accès</b></h2>

<p>Avant toute manipulation de données, vous devez récupérer un token d'accès valide nécessaire aux opérations en écriture.</p>
<p>La fonction access_token_get est disponible dans le fichier fonctions_API.php. Elle vous permet d’en faire la demande à OpenAgenda. La clef secrète ($secret) récupéré au préalable est la variable qui sera vérifiée par OpenAgenda.  </p>

<p><b>PHP</b></p>

<pre><code class="language-nof">	
function access_token_get($secret)
{
	$Url_AccessToken =  'https://api.openagenda.com/v2/requestAccessToken';
	$retour_curl = curl_init(); /* Initialise une session cURL */ 
	/* Initialise une nouvelle session et retourne un identifiant de session cURL à utiliser avec les fonction */
    curl_setopt($retour_curl, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($retour_curl, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt( $retour_curl, CURLOPT_URL, $Url_AccessToken );
	curl_setopt($retour_curl, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($retour_curl, CURLOPT_POST, true);
	curl_setopt($retour_curl, CURLOPT_POSTFIELDS, array(
		'grant_type' =&gt; 'authorization_code',
		'code' =&gt; $secret
	));

  $received_content = curl_exec($retour_curl);
  $access_token = json_decode( $received_content, true )["access_token"];

  return $access_token;
}
</code></pre>

<p>NB : Vous trouverez dans les fichiers sources PHP (dossier API), une demande de token via la fonction ci-contre : </p>
<p></p><pre><code class="language-nof">$accessToken = access_token_get($keys['secret']);</code></pre><p></p>
<p>On va retrouver la variable $accessToken dans chaque fonction liée à OpenAgenda. Exemple :  </p>
<pre><code class="language-nof">create_localisation_event($accessToken,$Openagenda_event_adresse,$agendaUid);</code></pre><p></p>

<p>Veuillez trouver ci-contre, un exemple d'un token retourné par la fonction : </p>
<p></p><pre><code class="language-nof">03a502330951edff9495a17adf1b6234</code></pre><p></p>


<h2 id="createve"><b>Analyse des données APIDAE</b></h2>
					
<p>La variable $Openagenda_event_data que l’on retrouve dans le fichier create_event.php ; est utilisée dans l'API . Elle utilise les données APIDAE pour les envoyer à l’OpenAgenda. </p>
<p>On parlera ici d'objet lorsque nous souhaitons accéder aux données. </p>
<p>Les valeurs comme « title », « image », « description » et « locationUid » sont obligatoires. Ce sont des chaînes de caractères ou des tableaux.</p>

<p><b>PHP</b></p>		
<pre><code class="language-nof">					
$Openagenda_event_data = array(
	'title' =&gt; array('fr' =&gt; $titre),
	'state' =&gt; 0, 
	'image' 		=&gt; 	array('url' =&gt; $event_illustrations[0]['photo_url']),
	'imageCredits'	=&gt;	$event_illustrations[0]['photo_copyright'],
	'locationUid' 	=&gt; 	$result_uid_location, 
	'longDescription'=&gt; 	array('fr'=&gt; $descriptifDetaille),
	'description' 	=&gt; 	array('fr'=&gt; substr($descriptifCourt, 0, 200).'...'), 
	'public' 		=&gt; 	25,	
	'conditions'	=&gt; 	$result_event_tarif,
	'registration' 	=&gt; 	array('fr'=&gt; $reservation_registration),
	'nature'		=&gt; 	57, /* NON DOCUMENTÉ */
	'thematique' 	=&gt;	2,  /* NON DOCUMENTÉ */
	'fadas' 		=&gt;	46, /* NON DOCUMENTÉ */
	'featured'		=&gt; 	false, /* true quand l'événement doit apparaître en tête de liste ( en une ) */
	'keywords' 		=&gt; 	array('fr' =&gt; "Visite, Photographie, Nature"),
	'timings' 		=&gt; 	$event_heure_ouverture,
	'slug' 			=&gt;	$slug					  
);
</code></pre>

<p></p><h4>Format des données relatives à l'API</h4><p></p>
<p>La variable $retourfiche contient tous les objets de votre projet APIDAE. Par conséquent, votre projet APIDAE nécessite de contenir des sélections et/ou des filtres afin d’afficher un contenu. </p>
<p>La variable est présente dans les fichiers test_api.php, create_event.php et update_event.php. Dans les explications qui suivent, nous retrouverons constamment la variable $retourfiche. </p>
<p>Exemple : <code>$titre = $retourfiche-&gt;nom-&gt;libelleFr;</code>. Nous affichons ici le titre de l'événement (voir ci-dessous)</p>

<p></p><h4 id="titre">* titre de l'événement : </h4><p></p>

Le titre qui s’affiche dans l’objet APIDAE (JSON) :
"nom" : {
	"libelleFr" : "Rando-découverte de l'Etang de Berre"
},

<p>La ligne de code pour obtenir la donnée depuis APIDAE : </p>
<pre><code class="language-nof">$titre = $retourfiche-&gt;nom-&gt;libelleFr;</code></pre>
<p>La ligne de code dans la requête pour OpenAgenda <code>'title' =&gt; array('fr' =&gt; $titre) sous forme de tableau array('fr'=&gt;"Rando..",'en'=&gt;"Hike..").</code></p>
<p>Note : Nous traitons ici QUE la version "FR" du titre de l'événement.</p>
<p>Le résultat obtenu dans l’OpenAgenda title (JSON) :</p>
    <p></p><pre><code class="language-nof">"title": {
        "fr": "Rando-découverte de l'Etang de Berre",
        "en": "Hike-discovery of the Etang de Berre",
    },</code></pre><p></p>


	
<h4 id="state">* Etat de l'événement - state : </h4>
<p><code class="language-nof">'state' =&gt; 0,</code> <i>  Valeur uniquement dans OpenAgenda.</i></p>
<p> State représente l'état de la publication de votre événement avec : </p>
<p>
	- 0 : événement non publié et à modéré  (recommandé).<br>
	- 1 : événement non publié, prêt à publier.<br>
	- 2 : événement publié (valeur par défaut si state n'est pas dans la requête)<br>
</p>

<p></p>
<h4 id="image">* image &amp; copyright: </h4><p></p>
<p>Attention : l'API prend en compte une seule image et donc un seul crédit photo.</p>
<p>Les données récupérées de l’objet APIDAE (JSON) : </p>
<pre><code class="language-nof">"illustrations" : [ {
	"identifiant" : 12416505,
	"link" : false,
	"type" : "IMAGE",
	"nom" : {
	"libelleFr" : "Camping Paradis, visite des décors"
	},
	"legende" : { },
	"copyright" : {
	"libelleFr" : "OTC Martigues"
	},
	"traductionFichiers" : [ {
	"locale" : "fr",
	"url" : "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/145/233/12577169.jpg",
	"urlListe" : "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/145/233/12577169-liste.jpg",
	"urlFiche" : "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/145/233/12577169-fiche.jpg",
	"urlDiaporama":"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/145/233/12577169-diaporama.jpg",
	"extension" : "jpg",
	"fileName" : "20190816_094658",
	"taille" : 2946673,
	"hauteur" : 3024,
	"largeur" : 4032,
	"lastModifiedDate" : "2022-02-10T15:56:05.770+0000"
} ],</code></pre>

<p>La ligne de code pour obtenir les données depuis APIDAE : </p>
<p></p>
<pre><code class="language-nof">$photo_url			= $retourfiche-&gt;illustrations[0]-&gt;traductionFichiers[0]-&gt;urlDiaporama;
$photo_copyright 	= $retourfiche-&gt;illustrations[0]-&gt;traductionFichiers[0]-&gt;copyright-&gt;libelleFr;
$photo_fileName		= $retourfiche-&gt;illustrations[0]-&gt;traductionFichiers[0]-&gt;fileName;
$photo_libelleFr	= $retourfiche-&gt;illustrations[0]-&gt;traductionFichiers[0]-&gt;nom-&gt;libelleFr;
					
$event_illustrations = array(	'photo_url'	=&gt; $photo_url,
								'photo_copyright' 	=&gt; $photo_copyright,
								'photo_fileName'	=&gt; $photo_fileName,
								'photo_libelleFr'	=&gt; $photo_libelleFr	   );
</code></pre>
<p></p>

<p>Pour tester l’affichage de la photo avec le crédit photo à tout moment, voici le code à intégrer : </p>
<pre><code class="language-nof">echo '‹img src="'.$event_illustrations[0]['photo_url'].'" width="240px" height="200px" style="border-radius:8px"›'; 
echo 'Crédit '.$event_illustrations[0]['photo_copyright'];</code></pre>	

<p>Le résultat obtenu dans l’OpenAgenda image -&gt; url (JSON) :</p>

<pre><code class="language-nof">"image": {
	"url" : "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/145/233/12577169-diaporama.jpg"
},</code></pre>


<p></p><h4 id="adresse">* Création de l'adresse &amp; GPS.</h4><p></p>
<p>Avant la création d'un événement, vous devez créer un lieu, comme un bâtiment, parc, plage, etc. Chaque lieu à son identifiant propre. Vous devrez par la suite l'associer à votre événement.</p>
	
<p>La localisation qui s’affiche dans l’objet APIDAE (JSON) : </p>
	
<pre><code class="language-nof">
	"localisation": {
		"adresse": {
			"nomDuLieu": "Lieu de tournage de la série Camping Paradis",
			"adresse1": "Chemin de la batterie",
			"adresse2": "Après le camping L'Arquet - Côte Bleue",
			"adresse3": "La Couronne",
			"codePostal": "13500",
			"commune": {
				"id": 4467,
				"code": "13056",
				"nom": "Martigues",
				"pays": {
					"elementReferenceType": "Pays",
					"id": 532,
					"libelleFr": "France",
					"ordre": 78
				},
				"codePostal": "13500"
			}
		},
		"geolocalisation": {
			"valide": true,
			"geoJson": {
				"type": "Point",
				"coordinates": [
					5.056848,
					43.328275
				]
			}
		},
		"perimetreGeographique": [
			{
				"id": 4467,
				"code": "13056",
				"nom": "Martigues",
				"pays": {
					"elementReferenceType": "Pays",
					"id": 532,
					"libelleFr": "France",
					"ordre": 78
				},
				"codePostal": "13500"
			}
		],
		"lieu": {
			"id": 15156
		}
	}
</code></pre>

<p> Ligne de code pour obtenir les données depuis APIDAE : </p> 

<pre><code class="language-nof">
$event_adresse = $retourfiche-&gt;localisation-&gt;adresse-&gt;nomDuLieu.", ";	
$event_adresse.= $retourfiche-&gt;localisation-&gt;adresse-&gt;adresse1.", ";	
$event_adresse.= $retourfiche-&gt;localisation-&gt;adresse-&gt;adresse2.", ";	
$event_adresse.= $retourfiche-&gt;localisation-&gt;adresse-&gt;codePostal." ";	
$event_adresse.= $retourfiche-&gt;localisation-&gt;adresse-&gt;commune-&gt;nom;		

$event_adresse.=", ".$retourfiche-&gt;localisation-&gt;adresse-&gt;commune-&gt;pays-&gt;libelleFr." ";

$geolocalisation_long		=$retourfiche-&gt;localisation-&gt;geolocalisation-&gt;geoJson-&gt;coordinates['0'];
$geolocalisation_lat		=$retourfiche-&gt;localisation-&gt;geolocalisation-&gt;geoJson-&gt;coordinates['1'];
$complement_geolocalisation	=$retourfiche-&gt;localisation-&gt;geolocalisation-&gt;complement-&gt;libelleFr;
								
$nomDuLieu 	= $retourfiche-&gt;localisation-&gt;adresse-&gt;nomDuLieu;
$codePostal = $retourfiche-&gt;localisation-&gt;adresse-&gt;codePostal;
$ville		= $retourfiche-&gt;localisation-&gt;adresse-&gt;commune-&gt;nom;
</code></pre>			

<p>Note : vous pouvez déterminer si la valeur existe avec la fonction php isset. Si la valeur est inexistante, elle ne sera pas reprise dans la création de l’adresse. </p>
<pre><code class="language-nof">if (isset($retourfiche-&gt;localisation-&gt;adresse-&gt;commune-&gt;pays-&gt;libelleFr))	{
$event_adresse.=", ".$retourfiche-&gt;localisation-&gt;adresse-&gt;commune-&gt;pays-&gt;libelleFr." ";
		}</code></pre>

<p>La valeur « countryCode » dans OpenAgenda équivaut à la valeur "Code Pays" d’APIDAE ( voir countryCode Code pays ISO 3166-1 Alpha 2). Vous la trouverez dans le fichier config.php à "FR".</p>
<p>Le tableau "coordinates" récupéré d’APIDAE contient 2 valeurs GPS : [ 5.056848, 43.328275 ]. On utilise la variable coordinates['0'] pour 5.056848 et la variable coordinates['1'] pour 43.328275.</p> 

<pre><code class="language-nof">$geolocalisation_long=$retourfiche-&gt;localisation-&gt;geolocalisation-&gt;geoJson-&gt;coordinates['0'];
$geolocalisation_lat=$retourfiche-&gt;localisation-&gt;geolocalisation-&gt;geoJson-&gt;coordinates['1'];</code></pre>

<p> Création de la requête : </p><p>
</p><pre><code class="language-nof">
$Openagenda_event_adresse = array(
'name' 			=&gt; 	$nomDuLieu,
'address' 		=&gt; 	$event_adresse,
'postalCode'	=&gt; 	$codePostal,
'city'			=&gt; 	$ville,
'department'	=&gt;	$department,				/* Dans config.php car non présent dans le json d'APIDAE */
'timezone'		=&gt;	$timezone,					/* config.php */
'countryCode' 	=&gt;	$countryCode,				/* config.php */
'latitude'		=&gt; 	$geolocalisation_lat,
'longitude'		=&gt; 	$geolocalisation_long,
);</code></pre>
<p></p>
<p><b>Note</b> : il y a une concaténation de l'adresse avec <code>$event_adresse.=</code> car il n'existe qu'un objet pour la sauvegarder avec cette ligne <code>'address'=&gt;$event_adresse</code></p> 
<p>Plus d'info ici -&gt; <a href="https://developers.openagenda.com/10-structure-lieu/" target="_blank">https://developers.openagenda.com/10-structure-lieu/</a> </p>

<p>Le résultat attendu sur l’OpenAgenda location (JSON) :</p>
<pre><code class="language-nof">"location": {
"city": "La Couronne"",
}
</code></pre>

	
<h2 id="description"><b>* Description court et détaillé : </b></h2><p></p>
<p>La description courte de l'événement est limitée à 200 caractères par langue - ce champ est OBLIGATOIRE.</p>
<p>La description longue est limitée à 10000 caractères par langue – ce champ est OPTIONNEL. L’événement pourra se créer sur l’OpenAgenda sans avoir de descriptif détaillé. Ce qui n’est pas le cas s’il n’a pas de descriptif court. </p>


<pre><code class="language-nof">$descriptifCourt	= $retourfiche-&gt;presentation-&gt;descriptifCourt-&gt;libelleFr;
$descriptifDetaille	= $retourfiche-&gt;presentation-&gt;descriptifDetaille-&gt;libelleFr;
</code></pre>


<p></p><h2 id="mot"><b>* Les mots clefs.</b></h2><p></p>

<p>Les thèmes des fiches APIDAE de type manifestation sont repris dans le champ « Mots clés » de la fiche OpenAgenda. La quantité des tags est limité à 100 sous réserve que la chaîne de caractère n’atteint pas 255 caractères. Ce champ est optionnel. </p>

<pre><code class="language-nof">$b=0;$keywords="";
do 	{ /* la virgule permet de couper les mots par OpenAgenda */
	$keywords.=$retourfiche-&gt;informationsFeteEtManifestation-&gt;themes[$b]-&gt;libelleFr.", ";
}
while ($retourfiche-&gt;informationsFeteEtManifestation-&gt;themes[++$b]-&gt;libelleFr!="");
$keywords=substr($keywords, 0, -2); /* Pour supprimer la virgule en fin de chaine et l'espace ", " */</code></pre>



<p></p><h2 id="date"><b>* Gestions des dates :</b></h2><p></p> 
<p></p>

<p>A noter : Il existe un décalage horaire de 2h entre la date affichée sur APIDAE et celle importé dans OpenAgenda. Il s’agit d’un bug connu à laquelle nous avons apporté un correctif au sein de l’API. </p>

<p>Pour pallier à ce problème, nous avons ajouté 2h à l’heure de début et de fin avec le bout de code « +0200 ». Exemple ci-dessous </p>
<p></p>

<pre><code class="language-nof"> =&gt; $begin."+0200";</code></pre>
<p></p>

<p>Important à savoir : Chaque objet doit contenir obligatoirement un horaire de fin. L’absence d’information pour ce champ empêche la bonne publication de l’objet sur l’OpenAgenda. </p>

<p>Forme de la date à avoir sur OpenAgenda : </p>
<pre><code class="language-nof">{
  "begin": "2021-02-25T17:00:00+0200",
  "end": "2021-02-25T19:00:00+0200"
},</code></pre>

<p></p>

<pre><code class="language-nof">$nb_date_ouverture=0;
do 
{
/* Recherche des horaires - Ouvertures et fermetures ainsi que la date en cours  */
$begin=$json_event_date_ouverture-&gt;periodesOuvertures[$nb_date_ouverture]-&gt;dateDebut."T".$json_event_date_ouverture-&gt;periodesOuvertures[$nb_date_ouverture]-&gt;horaireOuverture;
$end=$json_event_date_ouverture-&gt;periodesOuvertures[$nb_date_ouverture]-&gt;dateFin  ."T".$json_event_date_ouverture-&gt;periodesOuvertures[$nb_date_ouverture]-&gt;horaireFermeture;
$date_ouverture=$json_event_date_ouverture-&gt;periodesOuvertures[$nb_date_ouverture]-&gt;dateDebut;
$event_heure_ouverture[] = array('begin' =&gt; $begin."+0200", 'end' =&gt; $end."+0200");
} 
while ($json_event_date_ouverture-&gt;periodesOuvertures[++$nb_date_ouverture]-&gt;dateDebut!="");</code></pre>


<p></p>

<p></p><h2 id="tarif"><b>* Tarif en clair : </b></h2><p></p>

<p>Ici, nous récupérons les « tarifs en clair » sur APIDAE. Cette astuce permet de remplir directement le champ « Conditions de participation, tarifs » disponible sur OpenAgenda. Le champ ne peut pas excéder le nombre de 255 caractères. </p>

<p><b>PHP</b></p>

<pre><code class="language-nof">$tarifsEnClair=$retourfiche-&gt;descriptionTarif-&gt;tarifsEnClair-&gt;libelleFr;	</code></pre>

<p>Il existe néanmoins un bout de code source qui extrait les tarifs pour y récupérer toutes les plages des tarifs mini, maxi ainsi que la cible s’y attachant. 

</p><pre><code class="language-nof">$nb_periode=0;
do 	{	
	do 	{
		$tarifs_minimum=$retourfiche-&gt;descriptionTarif-&gt;periodes[$nb_periode]-&gt;tarifs[$nb_tarif]-&gt;minimum;					
		$tarifs_maximum=$retourfiche-&gt;descriptionTarif-&gt;periodes[$nb_periode]-&gt;tarifs[$nb_tarif]-&gt;maximum;	
		$tarif_cible=$retourfiche-&gt;descriptionTarif-&gt;periodes[$nb_periode]-&gt;tarifs[$nb_tarif]-&gt;type-&gt;libelleFr;	
		$tarif_description=$retourfiche-&gt;descriptionTarif-&gt;periodes[$nb_periode]-&gt;tarifs[$nb_tarif]-&gt;type-&gt;description;	
		$event_tarif[$nb_tarif]= array('tarifs_minimum'=&gt;$tarifs_minimum, 'tarifs_maximum'=&gt;$tarifs_maximum, 'tarif_cible'=&gt;$tarif_cible, 'description'=&gt;$tarif_description);
	} 
	while ($retourfiche-&gt;descriptionTarif-&gt;periodes[$nb_periode]-&gt;tarifs[++$nb_tarif]-&gt;minimum!="");
} 
while ($retourfiche-&gt;descriptionTarif-&gt;periodes[++$nb_periode]-&gt;tarifs[$nb_tarif]-&gt;minimum!="");</code></pre>
# API-APIDAE-OPENAGENDA
# API-APIDAE-OPENAGENDA
