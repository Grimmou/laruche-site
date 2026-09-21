# Modifications à appliquer dans `index.html`

## 1. Ajouter l'onglet Rencontres dans la navigation desktop

Dans `.nav-links`, ajoute :

```html
<a href="/rencontres.html">Rencontres</a>
```

Par exemple :

```html
<div class="nav-links">
  <a class="active" href="/">Accueil</a>
  <a href="/communaute.html">Communauté</a>
  <a href="/rencontres.html">Rencontres</a>
  <a href="/services.html">Services</a>
  <a href="/conseils.html">Conseils</a>
</div>
```

## 2. Ajouter Rencontres dans le menu mobile

Ajoute :

```html
<a href="/rencontres.html">Rencontres</a>
```

## 3. Remplacer le contenu du bloc `.core`

Supprime le SVG actuel dans :

```html
<div class="core" aria-hidden="true">...</div>
```

et remplace-le par :

```html
<div class="core">
  <img
    src="/assets/laruche-logo.png"
    alt="Logo de La Ruche — communauté Discord française"
    width="1254"
    height="1254"
  >
</div>
```

Le logo fourni est déjà en PNG avec transparence.

## 4. Ajouter une carte dédiée aux rencontres sur la page d'accueil

Dans la grille de cartes de la section « La communauté », tu peux remplacer la carte « Rencontrer » actuelle par :

```html
<article class="card community-card encounter-home-card reveal delay-1">
  <span class="number">02</span>
  <div class="icon">🤝</div>
  <h3>Match & Rencontre</h3>
  <p>
    Découvre les membres, crée ton profil, participe aux rencontres,
    envoie des likes et discute en privé lorsqu'un match est réciproque.
  </p>
  <a class="encounter-link" href="/rencontres.html">
    Découvrir le système de rencontre →
  </a>
</article>
```

## 5. Renforcer le SEO de l'accueil

Tu peux remplacer la description actuelle par :

```html
<meta name="description" content="La Ruche est une communauté Discord française pour discuter, rencontrer du monde, faire des rencontres, jouer ensemble et participer à des activités communautaires. Découvrez aussi nos services de création, bots, design, sécurité et optimisation Discord.">
```

Et le titre par :

```html
<title>La Ruche — Communauté Discord française, rencontres & services Discord</title>
```

# Fichier à ajouter

Ajoute le fichier :

```text
assets/laruche-logo.png
```

Le fichier est fourni avec cette mise à jour.

# Fichier à ajouter

Ajoute également :

```text
rencontres.html
```

Le fichier `rencontres.html` contient :
- SEO title + meta description
- canonical
- Open Graph
- navigation desktop/mobile
- contenu détaillé Match & Rencontre
- Rencontre rapide
- Âme sœur
- Likes `/like`
- Matchs
- Discussions privées
- BUMP `/bump`
- Modification de profil `/modifier` et `/edit`
- parcours en 4 étapes
- FAQ
- données structurées Schema.org WebPage + FAQPage
- CTA vers Discord


## 6. Mettre AUSSI le logo officiel tout en haut à gauche

Dans le header de `index.html`, remplace le contenu actuel du bloc :

```html
<span class="brand-mark">...</span>
```

par :

```html
<span class="brand-mark logo-mark">
  <img
    src="/assets/laruche-logo.png"
    alt="Logo La Ruche"
    width="1254"
    height="1254"
  >
</span>
```

Le rendu donnera :

**[ logo La Ruche ] LA RUCHE**

Le logo reste dans le carré jaune de l'en-tête, mais il remplace l'icône générique actuelle.

### Important

Le même fichier :

```text
/assets/laruche-logo.png
```

sert :
- au centre du Hero ;
- dans le coin supérieur gauche du header.

Il n'est donc pas nécessaire d'avoir deux images différentes.
