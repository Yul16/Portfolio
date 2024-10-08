<template>
  <header class="app-header">
    <div class="title-container">
      <!-- Titre du portfolio en italique -->
      <h1 class="portfolio-title">Mon portfolio</h1>
    </div>

    <div class="logo-container">
      <!-- Logo cliquable pour retourner en haut de la page -->
      <router-link to="/" @click="scrollToSection('presentation')">
        <img src="@/assets/images/developpeur.png" alt="Logo" class="logo" />
      </router-link>
    </div>

    <!-- Bouton du menu hamburger -->
    <button @click="toggleMenu" class="menu-button">
      <span :class="{ open: isMenuOpen }">☰</span>
    </button>

    <!-- Barre de navigation déroulante -->
    <nav v-if="isMenuOpen" class="nav-links">
      <div class="nav-row">
        <div
          class="nav-link"
          :class="{ active: activeSection === 'presentation' }"
          @click="scrollToSection('presentation'); toggleMenu()"
        >
          Présentation
        </div>

        <!-- Conteneur pour "Créations" et le bouton du sous-menu -->
        <div class="nav-link creations-container" :class="{ active: isSubMenuOpen || activeSection === 'creations' }">
          <div
            @click="scrollToSection('creations'); toggleMenu()"
            @dblclick="scrollToSection('creations')"
          >
            Créations
          </div>
          <!-- Nouveau bouton pour ouvrir/fermer le sous-menu -->
          <button @click="toggleSubMenu" class="submenu-button">
            <span :class="{ open: isSubMenuOpen }">▼</span>
          </button>
        </div>

        <!-- Sous-menu des créations -->
        <div v-if="isSubMenuOpen" class="sub-menu">
          <router-link to="/cv" class="nav-link" :class="{ active: activeSection === 'cv' }" @click="toggleMenu()">CV</router-link>
          <router-link to="/cahier-des-charges" class="nav-link" :class="{ active: activeSection === 'cahier-des-charges' }" @click="toggleMenu()">Cahier des Charges</router-link>
          <router-link to="/commentaires" class="nav-link" :class="{ active: activeSection === 'commentaires' }" @click="toggleMenu()">Dynamiser un espace commentaires</router-link>
        </div>

        <div
          class="nav-link"
          :class="{ active: activeSection === 'contact' }"
          @click="scrollToSection('contact'); toggleMenu()"
        >
          Contact
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeSection: '', // Suivi de la section active
      isMenuOpen: false, // État pour le menu déroulant
      isSubMenuOpen: false, // État pour le sous-menu "Créations"
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$router.afterEach(this.updateActiveSection);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isSubMenuOpen = false; // Fermer le sous-menu lorsque le menu principal est basculé
    },
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen; // Bascule l'état d'ouverture/fermeture du sous-menu
    },
    scrollToTop() {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            this.scrollToTopSmooth();
          }, 300);
        });
      } else {
        this.scrollToTopSmooth();
      }
    },
    scrollToTopSmooth() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.activeSection = ''; 
    },
    scrollToSection(sectionId) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            this.scrollToElement(sectionId);
          }, 300);
        });
      } else {
        this.scrollToElement(sectionId);
      }
    },
    scrollToElement(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
      }
    },
    handleScroll() {
      const presentationSection = document.getElementById('presentation');
      const creationsSection = document.getElementById('creations');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (presentationSection && scrollPosition >= presentationSection.offsetTop && scrollPosition < creationsSection.offsetTop) {
        this.activeSection = 'presentation';
      } else if (creationsSection && scrollPosition >= creationsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        this.activeSection = 'creations';
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        this.activeSection = 'contact';
      } else {
        this.activeSection = ''; 
      }
    },
    updateActiveSection(to) {
      const path = to.path;
      if (path === '/cv') {
        this.activeSection = 'cv';
      } else if (path === '/cahier-des-charges') {
        this.activeSection = 'cahier-des-charges';
      } else if (path === '/commentaires') {
        this.activeSection = 'commentaires';
      } else {
        this.activeSection = '';
      }
    },
  },
};
</script>

<style scoped>
.app-header {
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Centre le logo */
  align-items: center;
  padding: 1rem;
  background-color: #293c63;
  color: #fff;
  position: relative;
  z-index: 1000;
}

.title-container {
  position: absolute; /* Positionne le titre en absolu */
  left: 1rem; /* Place le titre à gauche */
}

.portfolio-title {
  font-style: italic;
  color: #ffffff;
  margin: 0;
}

.logo-container {
  cursor: pointer;
}

.logo {
  height: 50px;
}

.menu-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem; /* Positionne le menu hamburger à droite */
}

.nav-links {
  position: absolute;
  top: 60px;
  right: 1rem;
  background-color: #293c63;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, text-decoration 0.3s;
  cursor: pointer;
}

.nav-link.active {
  background-color: #0d6e51;
  text-decoration: underline;
}

.nav-link:hover {
  background-color: #75c2b5;
}

/* Styles pour le sous-menu */
.sub-menu {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem; /* Décalage pour indiquer un sous-menu */
}

/* Conteneur pour "Créations" et le bouton du sous-menu */
.creations-container {
  display: flex;
  align-items: center;
}

/* Styles pour le bouton du sous-menu */
.submenu-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 5px;
}
</style>
