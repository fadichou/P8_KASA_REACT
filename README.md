# Kasa API

## Prerequisites

You need Docker to launch the app API or you can use service installing nodejs on your system and running in backend forlder the following commandes: `npm install` then `npm start`

## Launch Project

With Docker run command

`docker-compose up -d`

To stop project run
`docker-compose down`

# Kasa – Application de location immobilière

Projet 8 Créez une application web de location immobilière avec React chez OpenClassrooms.

---

## 🏠 Objectif du projet

Développer une application web de location immobilière avec "React".  
Ce projet met en pratique :

- Initialisation du projet avec Vite
- Le routage avec **React Router**
- La structuration d’une application React avec des composants réutilisables
- La gestion d’une architecture de pages : Accueil, À propos, Logement, Erreur 404
- L’intégration d’une API locale via Docker
- La mise en page avec CSS ou SASS

---

## 🚀 Technologies utilisées

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- CSS3
- Git & GitHub
- Docker (pour l’API locale)

---

## Installez les dépendances

cd P8_KASA_REACT
npm install

## Démarrez l’application React

npm run dev

## Ouvrez dans le navigateur

http://localhost:5173

Lancer l’API locale (Back-end fourni)

L’API fournie par OpenClassrooms permet de simuler les données des logements.

Prérequis :
• Avoir Docker installé sur votre machine

## Lancer l’API avec Docker

docker-compose up -d

## L’API sera accessible à l’adresse suivante

http://localhost:8080/api/properties

## Pour arrêter l'API

docker-compose down

## Alternativement, vous pouvez exécuter manuellement l’API (dans un dossier backend/)

npm install
npm start
