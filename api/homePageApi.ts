/*import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCarsForLandingPage } from './fetchCarsForLandingPage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }

    try {
        const cars = await fetchCarsForLandingPage();
        return res.status(200).json({ cars });
    } catch (error) {
        console.error('Erreur lors de la récupération des voitures:', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
}*/
