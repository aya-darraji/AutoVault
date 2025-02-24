/*import { randomBytes } from 'node:crypto';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

const sessionMaxAge = 60 * 60 * 24 * 30;
const sessionSecret = process.env.SESSION_SECRET || randomBytes(32).toString('hex');

/**
 * Fonction pour créer l'authentification d'un modèle spécifique.
 * @param {string} listKey - Nom de la liste (ex: 'User' ou 'UsersAgency').
 * @param {Array} fields - Champs requis pour la première connexion.
 *//*
const createCustomAuth = (listKey, fields) => {
  return createAuth({
    listKey,
    identityField: 'email',
    sessionData: 'createdAt',
    secretField: 'password',
    initFirstItem: {
      fields,
    },
  });
};

// Création des authentifications pour User et UsersAgency
const userAuth = createCustomAuth('User', ['fullName', 'email', 'password']);
const agencyAuth = createCustomAuth('UsersAgency', ['AgencyName', 'fullName', 'email', 'phone', 'password']);

// Fonction pour générer une session sécurisée
const createCustomSession = () => {
  return statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
  });
};

// Exportation des authentifications et sessions
export const withUserAuth = userAuth.withAuth;
export const withAgencyAuth = agencyAuth.withAuth;
export const session = createCustomSession();*/
import { randomBytes } from 'node:crypto';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

const sessionMaxAge = 60 * 60 * 24 * 30;
const sessionSecret = process.env.SESSION_SECRET || randomBytes(32).toString('hex');

/**
 * Fonction pour créer l'authentification d'un modèle spécifique.
 * @param {string} listKey - Nom de la liste (ex: 'User').
 * @param {Array} fields - Champs requis pour la première connexion.
 */
const createCustomAuth = (listKey, fields) => {
  return createAuth({
    listKey,
    identityField: 'email',
    sessionData: 'createdAt',
    secretField: 'password',
    initFirstItem: {
      fields,
    },
  });
};

// Création de l'authentification pour User
const userAuth = createCustomAuth('User', ['fullName', 'email', 'password']);

// Fonction pour générer une session sécurisée
const createCustomSession = () => {
  return statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
  });
};

// Exportation des authentifications et sessions
export const withUserAuth = userAuth.withAuth;
export const session = createCustomSession();

