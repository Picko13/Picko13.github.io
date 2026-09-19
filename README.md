# Portfolio — Amaury Bernard

Site portfolio personnel, une seule page (single-page), présentant mon profil
d'étudiant en BUT Informatique à l'IUT de Laval : projets, technologies,
expérience et contact.

🔗 En ligne : https://picko13.github.io/

## Structure

```
index.html          → page d'accueil (point d'entrée unique — tout le site est sur cette page)
css/style.css        → toutes les règles de style
js/main.js           → menu mobile, animations au scroll, repli d'images, formulaire de contact
images/
  ├── profil.jpg      → photo de profil (à ajouter — sinon repli automatique sur les initiales "AB")
  ├── projet1.png      → aperçu du projet 1 (à ajouter — sinon repli sur une pastille numérotée)
  ├── projet2.png
  ├── projet3.png
  └── favicon.ico      → icône d'onglet (générée par défaut, à remplacer si besoin)
assets/
  └── cv.pdf           → CV téléchargeable (à ajouter — le bouton "Télécharger mon CV" y renvoie)
```

Le dossier `pages/` n'est pas utilisé : conformément au cahier des charges,
le site est volontairement en une seule page avec navigation par ancres
(`#home`, `#about`, `#projects`, `#technologies`, `#experience`, `#contact`).

## Ajouter mes propres images

Les images de profil et de projets sont optionnelles : le site fonctionne
sans elles (repli automatique en CSS/JS sur des placeholders). Pour les
activer, il suffit de déposer un fichier au bon nom dans `images/` — aucune
modification de code n'est nécessaire :

- `images/profil.jpg` → remplace les initiales "AB"
- `images/projet1.png`, `projet2.png`, `projet3.png` → remplacent les
  pastilles numérotées des projets

## Déploiement (GitHub Pages)

1. Pousser ce dossier à la racine du dépôt `tonpseudo.github.io`.
2. Dans les paramètres du dépôt → *Pages*, vérifier que la branche `main`
   (dossier racine `/`) est sélectionnée comme source.
3. Le site est servi à `https://tonpseudo.github.io/`.

## Stack

HTML / CSS / JavaScript vanilla — aucune dépendance à installer, à part les
polices Google Fonts (Poppins, JetBrains Mono) chargées via `<link>`.