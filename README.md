# StruoCV Resume Builder

StruoCV Resume Builder est une application en ligne permettant aux utilisateurs de créer, personnaliser et télécharger facilement un CV professionnel en quelques étapes simples. L'outil propose une interface dynamique et fluide, offrant une expérience utilisateur optimale pour la création d'un CV moderne et adapté aux besoins des utilisateurs.

## Fonctionnalités clés

1. **Formulaire à étapes (Stepper form) avec validation**
   - **Informations personnelles** : Nom complet, photo de profil, email, téléphone, adresse, LinkedIn, GitHub, portfolio, etc.
   - **Détails professionnels** : Titre du poste et résumé de profil.
   - **Compétences techniques et soft skills** : Sections pour renseigner les compétences techniques (hard skills) et les compétences interpersonnelles (soft skills), avec ajout dynamique de compétences.
   - **Langues** : Liste des langues maîtrisées avec leur niveau, possibilité d'ajouter des langues.
   - **Loisirs et intérêts** : Possibilité d'ajouter des loisirs et centres d'intérêt.
   - **Cursus universitaire** : Détails des formations académiques, avec un formulaire dynamique pour ajouter plusieurs parcours.
   - **Expériences professionnelles** : Détails des emplois précédents, possibilité d'ajouter plusieurs expériences professionnelles.
   - **Certifications** : Liste des certifications avec noms et liens associés, possibilité d'ajouter plusieurs certifications.

2. **Suivi de l’avancement**
   - Intégration d’une barre de progression visuelle pour chaque étape, montrant l’avancement de l’utilisateur dans la création du CV.

3. **Modèles de CV personnalisables**
   - Offre de deux designs de CV distincts pour permettre à l’utilisateur de choisir son modèle préféré avant l’impression ou le téléchargement.
   - Possibilité de personnaliser la mise en forme du CV et de le prévisualiser en temps réel.

4. **Options de sauvegarde**
   - Enregistrement facultatif des CV créés pour une utilisation future ou pour apporter des modifications ultérieures.

5. **Validation des champs**
   - Validation des champs selon le type de données (email, téléphone, URL pour LinkedIn, GitHub) pour garantir la précision des informations.

## Technologies utilisées

- **Frontend** : HTML, CSS, JavaScript (ES6+), React.js (ou autre framework JS moderne)
- **Backend** (si applicable) : Node.js, Express (si vous avez un backend pour la gestion des CV ou de l'authentification)
- **Bibliothèques & Outils** :
  - Bootstrap (ou autre framework CSS) pour la mise en page et les composants UI.
  - React Stepper ou toute autre bibliothèque pour le formulaire à étapes.
  - SweetAlert2 pour les messages d'alerte et les notifications.
  - Formik ou React Hook Form pour la gestion des formulaires et la validation des champs.
  - Axios (si vous utilisez un backend pour l’enregistrement des données).
  - LocalStorage pour le stockage temporaire des données utilisateur sur le navigateur.
  
## Installation et démarrage

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (Node Package Manager) ou yarn

