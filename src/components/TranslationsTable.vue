<template functional>
  <table class="translation-table" v-show="props.translations.length > 0">
    <thead>
      <tr>
        <td class="translation-table__text">
          Text
        </td>
        <td class="translation-table__langcode">
          Language Code
        </td>
        <td class="translation-table__length">
          Length
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(translation, index) in props.translations" :key="index">
        <td>
          {{translation.text}}
        </td>
        <td>
          {{translation.lang}}
        </td>
        <td>
          {{translation.length}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'translations-table',
  props: {
    translations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.translation-table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}

.translation-table thead tr td {
  font-weight: bold;
}

.translation-table tr td {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-color: rgba(0,0,0,.2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.translation-table__text {
  width: 50%;
}

.translation-table__langcode, .translation-table__length {
  width: 25%;
}
</style>
