<template>
  <div class="container">
    <h1>Batch translate</h1>
    <div class="translate-form">
      <input
        class="translate-form__input"
        type="text"
        placeholder="Write what you want to translate here"
        v-model="text"
        @keyup.enter="translate"
        :disabled="loading"
      />
      <button
        class="translate-form__button"
        @click="translate"
        :disabled="loading"
      >
        Go
      </button>
    </div>

    <div v-if="errorMessage" class="error-container">
       Oops: {{ errorMessage }}
    </div>

    <div v-if="loading">
      <Loader />
    </div>

    <div v-else>
      <translations-table :translations="translations"></translations-table> 
    </div>
  </div>
</template>

<script>
import { getTranslations } from '@/api/api';
import Loader from '@/components/Loader';
import TranslationsTable from '@/components/TranslationsTable';

export default {
  name: 'hello',
  data() {
    return {
      text: '',
      loading: false,
      errorMessage: '',
      translations: [],
    };
  },
  components: {
    Loader,
    TranslationsTable,
  },
  methods: {
    translate() {
      const text = this.text;
      if (text) {
        this.loading = true;
        getTranslations(text)
          .then((response) => {
            this.translations = response.data;
          })
          .then(() => new Promise(res => setTimeout(res, 1000)))
          .catch((err) => {
            this.errorMessage = err;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
}

.translate-form {
  display: flex;
}

.translate-form__input, .translate-form__button {
  font-size: 1rem;
}

.translate-form__input {
  height: 40px;
  flex: 1;
  padding: 0 10px;
  border-style: solid;
  border-color: #c5c5c5;
  border-width: 1px;
  margin-right: 10px;
}

.translate-form__button {
  background-color: #FE883B;
  border: 0;
  color: white;
  font-weight: bold;
  width: 70px;
}

.error-container {
  color: white;
  font-size: 1.5rem;
  background: #F44336;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

</style>
