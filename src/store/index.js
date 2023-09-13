import { defineStore } from 'pinia'

export const useAPIendpointsStore = defineStore('APIendpoints', {
  state: () => {
    return {
      "data": [
        {
          "id": 1,
          "titre": "La Banque européenne pour la reconstruction et le développement (BERD) a annoncé la nomination de Antoine Sallé de Chou en tant que nouveau responsable de ses opérations au Maroc.",
          "source": [
            {
              "nom": "Medias24",
              "image": "src/image/media24.png"
            }
          ],
          "sentiment": "src/image/square-caret-up-solid 1.png",
          "date": "Jeudi 04/09/2023",
          "auteur": "Amine",
          "resume": "Dans un communiqué, la BERD indique que « M. Sallé de Chou sera basé à Casablanca et prendra ses fonctions de Directeur pour le Maroc le 1er septembre. Il succède à Marie-Alexandra Veilleux-Laborie ». Il sera responsable des investissements et des opérations de la BERD dans le pays et rendra compte à Heike Harmgart qui est la directrice principale chargée de la partie méridionale et orientale du bassin méditerranéen (SEMED), ajoute la même source. \"C'est un honneur pour moi d'assumer ces nouvelles responsabilités. Je suis déterminé à consolider les succès de la BERD au Maroc. Nous continuerons à soutenir le pays par l'investissement, le conseil aux petites entreprises et le dialogue avec les autorités afin de renforcer son économie et de promouvoir le secteur privé », a déclaré, à cette occasion, M. Sallé de Chou, cité par le communiqué."
        },
        {
          "id": 2,
          "titre": "Le Maroc annonce un nouveau plan national pour l'éducation.",
          "source": [
            {
              "nom": "Le 360",
              "image": "src/image/le360.png"
            }
          ],
          "sentiment": "src/image/square-caret-up-solid 1.png",
          "date": "Mardi 10/09/2023",
          "auteur": "Fatima",
          "resume": "Le gouvernement marocain a dévoilé aujourd'hui un plan ambitieux pour améliorer le système éducatif du pays. Le plan vise à renforcer la qualité de l'éducation et à accroître l'accès à l'éducation pour tous les citoyens."
        },
        {
          "id": 3,
          "titre": "Le tourisme au Maroc en plein essor malgré les défis mondiaux.",
          "source": [
            {
              "nom": "Le monde",
              "image": "src/image/Le-Monde 2.png"
            }
          ],
          "sentiment": "src/image/Vector.png",
          "date": "Vendredi 13/09/2023",
          "auteur": "Karim",
          "resume": "Malgré les défis mondiaux, le tourisme au Maroc continue de prospérer. Le pays attire de plus en plus de touristes grâce à ses attractions culturelles, ses paysages magnifiques et son hospitalité chaleureuse."
        },
        {
          "id": 4,
          "titre": "Le Maroc remporte un prix international pour son innovation dans le domaine de l'agriculture.",
          "source": [
            {
              "nom": "France 24",
              "image": "src/image/Fr 1.png"
            }
          ],
          "sentiment": "src/image/dash.png",
          "date": "Lundi 16/09/2023",
          "auteur": "Mohammed",
          "resume": "Le Maroc a été récompensé pour ses innovations dans le secteur agricole lors d'un événement international. Les avancées technologiques et les pratiques durables du pays ont été saluées par la communauté internationale."
        },
        {
          "id": 5,
          "titre": "La cuisine marocaine à l'honneur lors d'un festival gastronomique à Marrakech.",
          "source": [
            {
              "nom": "France 24",
              "image": "src/image/Fr 1.png"
            }
          ],
          "sentiment": "src/image/Vector.png",
          "date": "Mercredi 18/09/2023",
          "auteur": "Leila",
          "resume": "Le festival gastronomique de Marrakech mettra en avant la délicieuse cuisine marocaine. Les chefs locaux présenteront leurs plats traditionnels et leurs créations culinaires modernes."
        }
      ]
    }
  }
})
