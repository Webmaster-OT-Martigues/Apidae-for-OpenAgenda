<?php //On demarre les sessions
	session_start();

	$ip = $_SERVER['REMOTE_ADDR'];
	
	// echo $ip;


	if ($ip == '90.121.192.157') 
	{
		// echo 'Accès autorisé';
	
	} 
	else {
		echo 'Accès interdit';
		exit;
	}


?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire API</title>
    <!-- Lien vers le CSS de Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"> 
<!--	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/animate.min.css" rel="stylesheet">
	<link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="css/form.css" rel="stylesheet">
	<link href="css/calendar.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/icons.css" rel="stylesheet">
	<link href="css/generics.css" rel="stylesheet">
	<link href="css/jquery.dataTables.css" rel="stylesheet">
	<link href="css/messages.css" rel="stylesheet">  
	<link href="css/file-manager.css" rel="stylesheet">		
	<link href="css/summernote.min.css" rel="stylesheet">		
	<link href="css/lightbox.css" rel="stylesheet"> -->

	
    <style>
        .logo {
            width: 300px; /* Ajuste la taille du logo */
            height: auto;
        }
    </style>
	
</head>

<body style="background-color;#f8f2ec"> 

<div class="clearfix"></div>

	<section class="p-relative" id="main" role="main">
      
	  <div class="block-area" id="textarea">
	  
		<div class="container mt-4" > <!-- style="padding: 50%; padding-top: 0px;  padding-right: 20%;  padding-bottom: 0px;"> -->
			<!-- Formulaire -->
			<div class="row">
				<div class="col-12 text-right">
					<img src="img/logo-martigues.png" alt="Logo" class="logo"> <!-- Remplace le lien par ton logo -->
				</div>
			</div>

			<h2 class="mb-4">Formulaire API</h2>

			<form action="edit.php" method="GET" >
				<!-- Ligne pour Événement en test, State et Featured -->
				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="test">Événement en test</label>
						<select class="form-control" id="test" name="test">
							<option value="non">NON</option>
							<option value="oui">OUI</option>
						</select>
					</div>

					<div class="form-group col-md-4">
						<label for="state">État de l'événement</label>
						<select class="form-control" id="state" name="state">
							<option value="0">Non publié et à contrôler</option>
							<option value="1">Non publié et déjà contrôlé</option>
							<option value="2">Événement publié</option>
						</select>
					</div>

					<div class="form-group col-md-4">
						<label for="featured">Événement en avant (haut de la liste)</label>
						<select class="form-control" id="featured" name="featured">
							<option value="fasle">NON</option>
							<option value="true">OUI</option>
						</select>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
						<!-- Public -->
						<div class="form-group">
							<label for="public">Public</label>
							<input type="text" class="form-control" id="public" name="public" placeholder="Public">
						</div>
					</div>
					<div class="form-group col-md-4">
						<!-- Secret -->
						<div class="form-group">
							<label for="secret">Secret</label>
							<input type="text" class="form-control" id="secret" name="secret" placeholder="Secret">
						</div>
					</div>
					<div class="form-group col-md-4">
						<!-- API Key -->
						<div class="form-group">
							<label for="apiKey">API Key</label>
							<input type="text" class="form-control" id="apiKey" name="apiKey" placeholder="API Key">
						</div>
					</div>
					<div class="form-group col-md-4">
						<!-- Projet ID -->
						<div class="form-group">
							<label for="projetId">Projet ID</label>
							<input type="text" class="form-control" id="projetId" name="projetId" placeholder="Projet ID">
						</div>
					</div>
					<div class="form-group col-md-4">
						<!-- Selection IDs -->
						<div class="form-group">
							<label for="selectionIds">Selection IDs</label>
							<input type="text" class="form-control" id="selectionIds" name="selectionIds" placeholder="Selection IDs">
						</div>
					</div>
					<div class="form-group col-md-4">
						<!-- Territoire IDs -->
						<div class="form-group">
							<label for="territoireIds">Territoire IDs</label>
							<input type="text" class="form-control" id="territoireIds" name="territoireIds" placeholder="Territoire IDs">
						</div>
					</div>
					
					<!-- Case à cocher Se souvenir de moi -->
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="rememberMe">
						<label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
					</div>
				</div>
				<!-- Bouton Générer l'exportation -->
				<button type="submit" class="btn btn-primary mt-4">Générer l'exportation</button>
			</form>
		</div>
		<br><br><br>
		<!-- <div class="container mt-4" style="padding: 20%; padding-top: 0px;  padding-right: 20%;  padding-bottom: 0px;">
			<div class="form-group col-md-4">
				<b>* État de l'événement : </b><br>
				<b>0</b> - Non publié et à contrôler <br>
				<b>1</b> - Non publié et déjà contrôlé <br>
				<b>2</b> - Événement publié <br>
			</div>
		</div> -->

	</div>
	  
	</section>

  <!-- Lien vers les scripts Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
