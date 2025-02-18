<?php 
// *****************************************************************************
// *****                       Historique des versions                     *****
// *****************************************************************************
// ***** 09/07/2020 -  Mise à jour de FnLikemark / ajax-like.php
// *****************************************************************************
// ***** 0 / /2021 -  Mise à jour de la fonction 
// *****************************************************************************

	ip();

?>

<script type="text/javascript">

		function FnBookmark(idd,mode){
		   $.ajax({
			   url : 'ajax/ajax-todo.php?', // La ressource ciblée
			   type : 'GET', // Le type de la requête HTTP.
			   data : 'idd=' + idd +'&mode=' + mode
			});
		}
		function FnLikemark(idlike,login){
		   $.ajax({
			   url : 'ajax/ajax-like.php?', // La ressource ciblée
			   type : 'GET', // Le type de la requête HTTP.
			   data : 'like=y&idlike=' + idlike + '&login=' + login
			});
		}
		function FnNavmark(navbar){
		   $.ajax({
			   url : 'ajax/ajax-theme.php?', // La ressource ciblée
			   type : 'GET', // Le type de la requête HTTP.
			   data : 'theme=' + navbar 
			});
		}
		function FnBulle(onoff,bulle,login){
		   $.ajax({
			   url : 'ajax/ajax-icon_autorise.php?', // La ressource ciblée
			   type : 'GET', // Le type de la requête HTTP.
			   data : 'onoff='+ onoff + '&bulle=' + bulle + '&login=' + login
			});
		}
		function FnBlocnote(idd,membre,texte){
		   $.ajax({
			   url : 'ajax/ajax-note.php?', // La ressource ciblée
			   type : 'GET', // Le type de la requête HTTP.
			   data : 'idd='+ idd + '&membre=' + membre + '&texte=' + texte
			});
		}
		function refresh() {
			window.location.reload(false);
		}
		function envoyer() 
		{
			alert ('text'); // Nous souhaitons recevoir "Success" ou "Failed", donc on indique text !
				   $.ajax({
			   url : 'sauvegarde-messages.php', // La ressource ciblée
			   //type : 'GET', // Le type de la requête HTTP.
			   //data : 'idd='+ idd + '&membre=' + membre + '&texte=' + texte
			});
		
		}
		function autocomplet() 
		{
			
			$('#ref_aide').autocomplete("ajax/ajax_auto_aide.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});
			$('#ref_glossaires').autocomplete("ajax/ajax_auto_glossaires.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});
			$('#ref_destinataire').autocomplete("ajax/ajax_destinataire.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});
			$('#ref_objet').autocomplete("ajax/ajax_auto_objet.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});
			$('#ref_mel').autocomplete("ajax/ajax_auto_mel.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});

			$('#ref_messages').autocomplete("ajax/ajax_messages.php", 	
			{ 
				matchContains: true,
				minChars : 2, 
				selectFirst: false 	
			});	
		}	
		function envoi_form(url)
		{
			document.formulaire.action = url;
			document.formulaire.submit();
		}
		function toggleFullScreen() {
		  if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) 
		  {
			if (document.documentElement.requestFullScreen) 
			{
			  document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) 
			{
			  document.documentElement.mozRequestFullScreen();
			} else 	if (document.documentElement.webkitRequestFullScreen) 
					{
						document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
					}
		  } else {
			if (document.cancelFullScreen) {
			  document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
			  document.webkitCancelFullScreen();
			}
		  }
		}
		

</script>

<?php


function ecrire_var_sql($sql)
{
	$fp = fopen ("donnees.txt", "a+");
	fwrite ($fp, " ".$sql."".PHP_EOL);
	fclose ($fp);
} 

function ip() {
    // Si on peut déterminer l'adresse IP
    $adresse_ip = Null;
	$nom_fichier=basename(__FILE__);
	
    if(isset($_SERVER['REMOTE_ADDR'])) {
        $adresse_ip = '"'.$_SERVER['REMOTE_ADDR'].'"';
    }
    $txt_log=$adresse_ip.';'.date('d/m/Y H:i:s').';'.$_SESSION['login'].';'.$nom_fichier."\n";
    // écriture dans un fichier de traçage
    // $fichier = "log/tracage_".date('Ymd').".log";
    $fichier = "/log/ip.log";
    preg_match("`^(.*\/)([^\/]+)$`",$_SERVER['SCRIPT_FILENAME'], $matches);
    $chemin_script = $matches[1];
    $fichierCible = $chemin_script.$fichier;
    $myFile=fopen($fichierCible,'a+');
    fputs($myFile,$txt_log);
    fclose($myFile);
}



?>