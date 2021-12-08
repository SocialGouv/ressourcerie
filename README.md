# Ressourcerie

## Comment ça marche ?

### Prérequis

[Node.js](https://nodejs.org/en/) >= 16

### Serveur de développement

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Variables d’environnement

Afin de configurer le projet correctement, il est conseillé de créer un fichier `.env` avec les variables d’environnement nécessaires à l’application.

`.env` permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

Copier le fichier de configuration

```bash
cp .env.sample .env
```

3. Lancer le serveur de développement

```bash
npm run dev
```

Par défaut, il écoutera sur le port `3000`, pour changer, utiliser `npm run dev -p 4242`.

### Build de production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Générer les bundles de production

```bash
npm run build
```

3. Lancer le serveur de production

```bash
PORT=3000 npm run start
```
