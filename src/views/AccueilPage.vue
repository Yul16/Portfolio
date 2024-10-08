<template>
  <div class="page-content libre-baskerville-regular">
    <div class="home-page">
      <!-- Section Nom et Présentation -->
      <section id="presentation" class="presentation">
        <h1 class="libre-baskerville-bold">MARCEL Cédric</h1>
        <p class="libre-baskerville-regular indented-text">
            <span>Bonjour, je suis Cédric Marcel, et bienvenue dans mon univers numérique !
            Après avoir passé plusieurs années en tant qu'infirmier, j'ai choisi de me reconvertir dans un domaine qui m'a toujours passionné : le développement web.
            Mon expérience en tant qu’infirmier m’a permis de développer des compétences clés telles que la rigueur, l'écoute et la résolution de problèmes, que je mets désormais au service de la création de sites internet. </span> <br>
            <span>Ce qui me passionne dans le développement web, c'est la capacité de donner vie à des idées, de transformer une simple vision en un site interactif et fonctionnel.
            J'aime relever les défis techniques tout en veillant à concevoir des interfaces simples et intuitives. </span> <br>
            <span>Ma reconversion vers ce domaine représente pour moi une opportunité de concilier créativité et technique, tout en continuant à apporter des solutions aux besoins des utilisateurs.
            Que ce soit pour des projets personnels ou professionnels, je mets tout mon savoir-faire en œuvre pour créer des expériences web uniques. </span></p>
      </section>
  
      <!-- Ligne graphique entre les sections -->
      <div class="section-divider"></div>

      <!-- Section Créations avec des Modales -->
      <section id="creations" class="creations">
        <h2 class="libre-baskerville-bold">Mes Créations</h2>
        <div class="creation-list">
          <div
            v-for="(creation, index) in creations"
            :key="index"
            class="creation-item libre-baskerville-regular"
            @click="openModal(index)"
          >
            <img :src="creation.image" :alt="creation.title" class="creation-image" />
            <h3 class="creation-title">{{ creation.title }}</h3>
          </div>
        </div>
  
        <!-- Modal -->
        <div v-if="showModal" class="modal" @click.self="closeModal">
          <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="modal-body">
              <h3>{{ selectedCreation.title }}</h3>
    
              <!-- Image de la création -->
              <img :src="selectedCreation.image" :alt="selectedCreation.title" class="creation-image" v-if="selectedCreation.image" />

              <!-- Date de création -->
              <p><strong>Date de création :</strong> {{ selectedCreation.date }}</p>

              <!-- Technologies utilisées -->
              <p><strong>Technologies utilisées :</strong> {{ selectedCreation.technologies.join(', ') }}</p>
    
              <!-- Description -->
              <p>{{ selectedCreation.description }}</p>

              <!-- Lien vers le site ou le fichier PDF -->
              <div v-if="selectedCreation.link">
                <a :href="selectedCreation.link" class="project-link" style="display: block; margin-top: 10px;">
                  Voir le projet
                </a>
              </div>
              <div v-else>
                <p>Ce projet n'a pas de lien associé.</p>
              </div>

              <!-- Lien vers le repository GitHub -->
              <div v-if="selectedCreation.github" style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
                <a :href="selectedCreation.github" target="_blank" style="display: flex; align-items: center; justify-content: center; text-align: center;">
                  <img src="../assets/images/github.svg" alt="GitHub" style="width: 24px; height: 24px; margin-right: 8px;" />
                </a>
              </div>
              <div v-else style="text-align: center;">
                <p>Ce projet n'a pas de dépôt GitHub associé.</p>
              </div>
            </div>  
          </div>
        </div>
      </section>
  
      <!-- Ligne graphique entre les sections -->
      <div class="section-divider"></div>

      <!-- Section Formulaire de Contact -->
      <section id="contact" class="contact-form">
      <h2 class="libre-baskerville-bold">Contactez-moi</h2>
      <form @submit.prevent="sendMailto">
        <div>
          <label for="name" class="form-label">Nom / Prénom</label>
          <input v-model="contactForm.name" type="text" id="name" autocomplete="name" required />
        </div>
        <div>
          <label for="subject" class="form-label">Objet</label>
          <input v-model="contactForm.subject" type="text" id="subject" autocomplete="organization-title" required />
        </div>
        <div>
          <label for="message" class="form-label">Message</label>
          <textarea v-model="contactForm.message" id="message" autocomplete="off" required></textarea>
        </div>
        <div class="button-container">
          <button type="submit">Envoyer</button>
        </div>
      </form>
      </section>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'AccueilPage',
    data() {
      return {
        creations: [
          {
            title: 'CV en HTML et CSS',
            date: '17 Juin 2024',
            technologies: ['HTML', 'CSS'],
            link:'/cv' ,
            github: 'https://github.com/Yul16/Curriculum-vit-.git',
            image: require('@/assets/images/MonCV.png'),
            description: 'Ce projet est un CV moderne et interactif, entièrement codé en HTML et CSS. Il présente mes compétences, expériences et formations avec un design épuré et professionnel. L\'accent est mis sur la lisibilité et l\'adaptation responsive, assurant une présentation optimale sur tous les appareils.',
          },
          {
            title: 'Cahier des charges',
            date: '17 Juillet 2024',
            technologies: ['Word', 'PDF'],
            link: '/cahier-des-charges',
            github: '',
            image: require('@/assets/images/CDC.png'),
            description: 'Le cahier des charges définit l\'ensemble des besoins et des spécifications à respecter pour la réalisation du projet web. Il fournit un cadre précis sur les fonctionnalités à développer, les contraintes techniques à prendre en compte, ainsi que les délais à respecter. Ce document est essentiel pour assurer une compréhension mutuelle entre le client et le développeur, et permet de suivre l’évolution du projet avec rigueur.',
          },
          {
            title: 'Espace commentaire dynamique',
            date: '1 Septembre 2024',
            technologies: ['Javascript'],
            link: '/commentaires',
            github: 'https://github.com/Yul16/Dynamiser-un-espace-commentaire.git',
            image: require('@/assets/images/Coms.png'),
            description: 'Ce projet consiste à dynamiser l’espace commentaire d’un site communautaire existant en utilisant JavaScript. Il permet d\'améliorer l\'interactivité et la fluidité des échanges, avec des commentaires mis à jour en temps réel pour offrir une expérience utilisateur plus engageante.',
          },
        ],
        showModal: false,
        selectedCreation: null,
        contactForm: {
          name: '',
          subject: '',
          message: '',
        },
      };
    },
    methods: {
      openModal(index) {
        this.selectedCreation = this.creations[index];
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      sendMailto() {
      const recipientEmail = 'cmarcel01.pro@gmail.com'; 
      const subject = encodeURIComponent(this.contactForm.subject);
      const body = encodeURIComponent(
        `Nom: ${this.contactForm.name}\n\nMessage:\n${this.contactForm.message}`
      );

      // Construire l'URL mailto
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      // Ouvrir le client de messagerie avec mailto
      window.location.href = mailtoLink;
        
        // Réinitialiser le formulaire
        this.contactForm = {
          name: '',
          subject: '',
          message: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  /* Appliquer la police à la page d'accueil */
  .libre-baskerville-regular {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
  }

  .libre-baskerville-bold {
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
  }

  .libre-baskerville-regular-italic {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    font-style: italic;
  }

  .indented-text span {
    display: block;
    text-indent: 2em;
    margin-top: 1em;
    line-height: 1.6;
  }

  .section-divider {
    width: 80%;
    height: 2px;
    background-color: #ffffff;
    background: linear-gradient(to right, transparent, #fafafa 50%, transparent);
    margin: 2rem auto;
    border-radius: 5px;
  }

  #presentation h1 {
    color: #293c63;
    text-decoration: underline;
  }

  #creations h2,
  #contact h2 {
    color: #293c63;
    text-decoration: underline;
  }

  .creation-title {
    color: #ffffff;
  }

  .form-label {
    color: #ffffff;
  }

  .page-content {
    background-image: url('../assets/images/image-de-fond-5.jpg'); /* Remplacez par le chemin de votre image */
    background-size: cover; /* L'image couvre toute la page */
    background-position: center; /* Centre l'image */
    background-attachment: fixed; /* L'image reste fixe lors du scroll */
    min-height: 100vh; /* Assurez-vous que l'image couvre toute la hauteur de la page */
    padding-top: 80px; /* Pour que le contenu ne soit pas caché par le header */
    box-sizing: border-box;
  }

  .page-content {
    padding-top: 80px;
  }

  .home-page {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    box-sizing: border-box;
  }
  
  p {
    color: #ffffff;
    font-weight: 700;     
    line-height: 1.6;
  }

  .presentation {
    text-align: center;
  }
  
  .creations {
    width: 100%;
    max-width: 1200px;
    margin: 2rem 0;
    text-align: center;
  }
  
  .creation-list {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .creation-item {
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .creation-item:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); 
    transform: translateY(-5px);
  }

  .creation-image {
    width: 200px;
    height: 150px;
    object-fit: cover;
  }

  .project-link {
    color: black;
    text-decoration: none; 
  }

  .project-link:hover {
    text-decoration: underline; 
  }
  
  .modal .creation-image {
  width: 80%; 
  height: auto;
  margin-top: 20px;
}

  /* Styles pour le modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal p {
    color: #293c63;
  }

  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    max-width: 90%; 
    max-height: 80vh; 
    overflow-y: auto; 
    position: relative;
  }

  .modal-body {
    max-height: 70vh; 
    overflow-y: auto; 
    padding: 1rem; 
  }
  
  .close {
    position: absolute; 
    top: 25px;
    right: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #098373; 
    color: #fff; 
    border-radius: 50%; 
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10; 
    transition: background-color 0.3s; 
}

  .close:hover {
    background-color: #ff1a1a; 
  }

  /* Formulaire de contact */
  .contact-form {
    width: 100%;
    max-width: 600px;
    margin: 2rem auto;
    text-align: center;
    padding: 1rem;
  }
  
  .contact-form form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .contact-form div {
    width: 100%;
    max-width: 400px; 
    display: flex;
    flex-direction: column; 
  }

  .contact-form label {
    margin-bottom: 0.5rem; 
    font-weight: bold; 
    text-align: left; 
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 0.5rem;
    border: 1px solid #098373;
    border-radius: 5px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
  
  .button-container {
  display: flex;
  justify-content: center; 
  width: 100%;
  max-width: 400px;
  }

  .contact-form button {
    padding: 0.5rem;
    background-color: #293c63;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; 
  }
  
  .contact-form button:hover {
    background-color: #0d6e51;
  }
  </style>
  