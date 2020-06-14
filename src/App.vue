<template>
<v-app>
  <CurrencyTableView></CurrencyTableView>
</v-app>
</template>

<script>
import CurrencyTableView from './views/CurrencyTableView';

export default {
  name: 'App',

  components: {
    CurrencyTableView,
  },

  data: () => ({
    //
  }),
};
</script>

<styles  lang="scss">
@font-face {
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	src: url("./assets/fonts/Montserrat/Montserrat-Medium.eot"); /* IE9 Compat Modes */
	src: local("Montserrat"), local("Montserrat"),
		url("./assets/fonts/Montserrat/Montserrat-Medium.eot")
			format("embedded-opentype"),
		/* Super Modern Browsers */
			url("./assets/fonts/Montserrat/Montserrat-Medium.woff")
			format("woff"),
		/* Modern Browsers */
			url("./assets/fonts/Montserrat/Montserrat-Medium.ttf")
			format("truetype")
}

*{
  box-sizing: border-box;
}

.v-application{
  font-family: "Montserrat"!important;
  font-size: 20px!important;
  color:#333333;
}

</styles>