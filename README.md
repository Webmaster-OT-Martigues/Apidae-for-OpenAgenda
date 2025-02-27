<h1>API (PHP) Apidae -> OpenAgenda (+interface)</h1>

<div align="center">
	<img alt="Office de Tourisme de Martigues" src="https://user-images.githubusercontent.com/8257981/201097229-43a65b5a-5801-4542-ba78-9ad476939cee.png" />
</div>


# API de publication d'événements d'APIDAE vers OPEN Agenda

Ce projet permet de faire le lien entre l'API d'APIDAE et OPEN Agenda, facilitant la publication d'événements depuis APIDAE vers OPEN Agenda.

## Fonctionnalité

L'API permet de :
- Publier des événements d'APIDAE vers OPEN Agenda en établissant une liaison sécurisée entre les deux plateforme grâce à l'utilisation de clés API.

## Prérequis

### Clés API

Pour utiliser cette API, vous aurez besoin d'un ensemble de clés :

1. **Clés APIDAE** : Ces clés sont récupérées depuis votre compte administrateur après la création d'un projet dans l'interface APIDAE.

![201097699-030a5f8c-662f-43d0-990a-a461ed11c8d7](https://github.com/user-attachments/assets/68e819d5-9504-4572-85d9-674878095144)

2. **Clés Open Agenda** : Pour obtenir ces clés, vous devez contacter l'équipe technique d'Open Agenda par email. Vous recevrez ensuite une clé publique et une clé privée (aussi appelée clé secrète).

   - Pour activer la clé privée, vous devez envoyer une demande par email à `support@openagenda.com`. Cette clé est nécessaire pour effectuer des opérations d'écriture sur Open Agenda.
   - Une fois l'activation effectuée, vous pourrez récupérer vos clés d'accès en lecture et écriture depuis l'interface administrateur d'Open Agenda.

![201097801-b276f1d2-01ab-4faa-b3d1-301361c36f87](https://github.com/user-attachments/assets/a7e23707-8e27-4cad-8e22-596d8f5ba85b)

### Formulaire de connexion

Un formulaire est mis à disposition pour saisir vos clés APIDAE et Open Agenda. Ce formulaire est également disponible dans ce repository GitHub. Une fois les clés saisies, elles seront utilisées pour établir une connexion sécurisée et temporaire entre votre compte APIDAE et Open Agenda.

![Capture d'écran 2025-02-20 163006](https://github.com/user-attachments/assets/33ebfe33-7587-48cb-add3-f9fe11b46b87)

Vous pouvez, une fois la nouvelle page ouverte, garder la page d'exportation des événements en favoris. vous n'aurez ainsi plus à saisir les clefs. 

![Capture d'écran 2025-02-20 165307](https://github.com/user-attachments/assets/b01ed363-ce8c-4146-b251-65e266988ca8)



Structure du dépot 
:
└── webmaster-ot-martigues-apidae-for-openagenda/
    ├── README.md /* ce document */
    ├── edit.php
    ├── index.php /* formulaire du 
    ├── css/
    │   ├── desktop.ini
    │   ├── form.css
    │   ├── icons.css
    │   ├── lightbox.css
    │   ├── style-white.css
    │   └── style.css
    ├── fonts/
    │   ├── desktop.ini
    │   ├── fontawesome/
    │   │   ├── desktop.ini
    │   │   ├── fontawesome-webfontba72.eot
    │   │   ├── fontawesome-webfontba72.ttf
    │   │   ├── fontawesome-webfontba72.woff
    │   │   └── fontawesome-webfontd41d.eot
    │   ├── icons/
    │   │   ├── desktop.ini
    │   │   └── icon.woff
    │   └── open-sans/
    │       ├── OpenSans-Light-webfont.eot
    │       ├── OpenSans-Light-webfont.ttf
    │       ├── OpenSans-Light-webfont.woff
    │       ├── OpenSans-Light-webfontd41d.eot
    │       ├── OpenSans-Regular-webfont.eot
    │       ├── OpenSans-Regular-webfont.ttf
    │       ├── OpenSans-Regular-webfont.woff
    │       ├── OpenSans-Regular-webfontd41d.eot
    │       ├── OpenSans-Semibold-webfont.eot
    │       ├── OpenSans-Semibold-webfont.ttf
    │       ├── OpenSans-Semibold-webfont.woff
    │       ├── OpenSans-Semibold-webfontd41d.eot
    │       ├── desktop.ini
    │       └── index.html
    ├── img/
    │   ├── body/
    │   │   └── desktop.ini
    │   └── icon/
    │       └── desktop.ini
    ├── js/
    │   ├── desktop.ini
    │   ├── easypiechart.js
    │   ├── functions.js
    │   ├── icheck.js
    │   ├── jquery.dataTables.js<br>
    │   ├── jquery.easing.1.3.js<br>
    │   └── summernote.js<br>
    └── pages/<br>
        ├── config.php<br>
        ├── fonction.php<br>
        ├── fonctions_API.php<br>
        ├── head.php<br>
        └── header_index.php <br>


## Installation

1. Clonez ce repository :
   ```bash
   git clone [https://github.com/yourusername/nom-du-projet](https://github.com/Webmaster-OT-Martigues/Apidae-for-OpenAgenda).git

