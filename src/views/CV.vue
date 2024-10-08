<template>
    <div>
      <header>
        <div class="photo">
          <figure>
            <a class="photo__link" href="@/assets/images/Photo-de-profil.jpg"><img src="@/assets/images/Photo-de-profil.jpg" alt="Photo-de-profil" /></a>
          </figure>
        </div>
        <div id="nom">
          <h3>MARCEL Cédric</h3>
          <p><strong>Développeur web junior</strong></p>
        </div>
        <div id="adress"> 
          <a href="https://www.google.fr/maps/place/12+Rue+des+Oliviers,+53200+La+Roche-Neuville/@47.8746339,-0.7546045,17z/data=!3m1!4b1!4m6!3m5!1s0x4808f12c7939a8a7:0xaefceff0de598651!8m2!3d47.8746303!4d-0.7520296!16s%2Fg%2F11c1fvm555?entry=ttu">
            12 Rue des oliviers <br> 53200 La Roche-Neuville</a>
          <a href="mailto:marcel.cedric@gmail.com">marcel.cedric@gmail.com</a>
          <a href="tel:0606060606">0606060606</a>
        </div>
      </header>
  
      <main>
        <section class="section__left">
          <div>
            <h4>A propos</h4>
            <p id="info">Jeune homme de 27 ans, je suis infirmier depuis Mars 2021. 
              Ayant pratiqué mon métier durant trois années au sein de plusieurs structures de soin, je souhaite à l'heure actuelle me reconvertir dans un milieu qui m'a toujours intéressé c'est-à-dire le développement.
              C'est pour cela qu'aujourd'hui, je suis une formation de développeur web et webmobile avec le centre européen de formation afin d'acquérir des compétences me permettant d'évoluer dans mon projet professionnel.
            </p>
          </div>
          <div>
            <h4>Langues parlées</h4>
            <ul>
              <li>Français - Langue maternelle</li>
              <li>Anglais - Intermédiaire</li>
            </ul>
          </div>
          <div>
            <h4>Centres d'intérêt</h4>
            <ul>
              <li>Sport</li>
              <li>Musique</li>
              <li>Jeux vidéos</li>
              <li>Animaux</li>
            </ul>
          </div>
        </section>
  
        <section class="section__right">
          <div>
            <h4>Expériences professionnelles</h4>
            <div>
              <p class="post"><strong>Infirmier de bloc opératoire chez Clinique Sainte Anne</strong></p>
              <p class="post__date">De Avril 2021 à Mai 2022 <br />Puis de Mars 2023 à Juin 2024</p>
              <ul class="post__mission">
                <li>Accueil du patient de l'entrée du bloc opératoire jusqu'à son arrivée en SSPI</li>
                <li>Gestion du dossier patient au cours de l'intervention</li>
                <li>Gestion des dispositifs médicaux implantables (DMI)</li>
              </ul>
            </div>
                <p class="post"><strong>Infirmier en HAD chez Hopital Suburbain</strong></p>
                    <p class="post__date">De Juin 2022 à Octobre 2022</p>
                    <ul class="post__mission">
                        <li>Réalisation de soins infirmiers au domicile du patient</li>
                        <li>Transmission en équipe pluridisciplinaire lors de réunion avec les médecins coordinateurs et les infirmier coordinateurs</li>
                        <li>Acceuil des patient lors de nouvelles prise en charge par la structure</li>
                    </ul>
          </div>
          <div>
                    <p class="post"><strong>Infirmier chez Adecco Médical Intérim</strong></p>
                    <p class="post__date">De Novembre 2022 à Février 2023</p>
                    <ul class="post__mission">
                        <li>Missions d'infirmier en Ehpad</li>
                        <li>Missions d'infirmier de bloc opératoire en clinique</li>
                        <li>Missions d'infirmier en foyer médicalisé pour jeunes en situation de handicap</li>
                    </ul>
                </div>
                <div>
                <h4>Diplômes/Formations</h4>
                <div>
                    <p class="post"><strong>Diplômes d'Etat infirmier</strong></p>
                    <p class="post__date">Promotion 2017-2020</p>
                    <p class="post__ecole">IFSI Pellegrin</p>
                </div>
                <div>
                    <p class="post"><strong>Développeur web et webmobile</strong></p>
                    <p class="post__date">Début 21 Mars 2024 (en cours)</p>
                    <p class="post__ecole">Centre européen de formation</p>
                </div>
            </div>
            <div>
                <h4>Compétences</h4>
                <div>
                    <ul id="skill">
                        <li>Soins infirmiers - Expert</li>
                        <li>Acceuil patient - Expert</li>
                        <li>HTML 5 - Intermédiaire</li>
                        <li>CSS 3 - Intermédaire</li>
                        <li>GitHub - Débutant</li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
  
      <footer>
        <div id="reseaux-sociaux">
          <a href="https://github.com/Yul16"><img src="@/assets/images/github.svg" alt="github" /></a>
          <a href="https://www.facebook.com/2cedric33"><img src="@/assets/images/facebook.svg" alt="facebook" /></a>
        </div>
        <div>
          <p id="maj">Dernière mise à jour le 9 Juin 2024.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CV',
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/cv.css";
  </style>
  