<template>
  <div class="antialiased font-sans bg-white">
    <div>
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6">      
        <div class="bg-white">
          <div>
            <h3 class="text-lg font-medium text-warm-gray-900">Liste des commentaires</h3>
            <!-- COMMENTS  -->
            <div id="comment-list" class="-my-4">
              <div
                v-for="(comment, index) in commentaires"
                :key="index"
                class="flex space-x-4 text-sm text-gray-500"
              >
                <div class="flex-1 py-10 border-t border-gray-200">
                  <h3 class="font-medium text-gray-900">{{ comment.firstName }} {{ comment.lastName }}</h3>
                  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>{{ comment.message }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-10 lg:col-span-2 xl:py-12">
          <h3 class="text-lg font-medium text-warm-gray-900">Écrire un commentaire</h3>
          <!-- ALERT MESSAGE -->
          <div v-if="errorMessage" class="mt-4 mx-auto max-w-4xl">        
            <div class="rounded-md bg-red-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">Tous les champs doivent être remplis</h3>
                </div>
              </div>
            </div>          
          </div>
          <!-- FORM  -->
          <form @submit.prevent="ajouterCommentaire" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-warm-gray-900">Prénom</label>
              <div class="mt-1">
                <input v-model="firstName" type="text" id="first-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Nom</label>
              <div class="mt-1">
                <input v-model="lastName" type="text" id="last-name" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="message" class="block text-sm font-medium text-warm-gray-900">Commentaire</label>
                <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 caractères</span>
              </div>
              <div class="mt-1">
                <textarea v-model="message" id="message" rows="4" maxlength="500" class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500" aria-describedby="message-max"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
      commentaires: [
        {
          firstName: 'Emily',
          lastName: 'Selman',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis ratione eos ipsum incidunt, ut id debitis fugiat cumque omnis, exercitationem, dolores obcaecati maiores eaque architecto delectus distinctio odio et.',
        },
        {
          firstName: 'Hector',
          lastName: 'Gibbons',
          message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, enim vitae quasi culpa est, excepturi cum voluptatum exercitationem id, deleniti similique maiores! Totam, itaque praesentium quod ipsa quos ratione et.',
        },
        {
          firstName: 'Mark',
          lastName: 'Edwards',
          message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusantium quae doloribus. Nobis ipsam libero asperiores a velit ab nemo facere molestias quisquam. Libero, repudiandae dignissimos. Doloribus hic placeat soluta?',
        },
      ],
      errorMessage: false,
    };
  },
  methods: {
    ajouterCommentaire() {
      if (!this.firstName || !this.lastName || !this.message) {
        this.errorMessage = true;
      } else {
        this.errorMessage = false;
        this.commentaires.push({
          firstName: this.firstName,
          lastName: this.lastName,
          message: this.message,
        });
        // Réinitialiser les champs du formulaire
        this.firstName = '';
        this.lastName = '';
        this.message = '';
      }
    },
  },
};
</script>

<style scoped>
</style>
