<template>
  <v-data-table
    :headers="headers"
    :items="currency"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <Modal :dialog="dialog" :modalAction="save" :object="editedItem" :toggleModal="toggleModal"></Modal>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>


<script>
import Modal from "../components/Modal";
import tableDataApi from "../api/tableData";

export default {
  props: {
    search: String
  },

  beforeCreate() {
    const self = this;
    tableDataApi.getTableData(self).then(() => {
      this.currency = this.$store.getters.GET_ALL_CURRENCIES;
    });
  },

  data() {
    return {
      editedItem: {
        Cur_Abbreviation: "",
        Cur_Name: "",
        Cur_Scale: "",
        Cur_OfficialRate: ""
      },
      currency: [],
      dialog: false,
      headers: [
        {
          text: "Буквенный код валюты",
          align: "center",
          value: "Cur_Abbreviation"
        },
        {
          text: "Наименование валюты",
          align: "center",
          value: "Cur_Name"
        },
        {
          text: "Количество единиц валюты",
          align: "center",
          value: "Cur_Scale"
        },
        {
          text: "Курс к бел. рублю",
          align: "center",
          value: "Cur_OfficialRate"
        },
        { text: "", value: "actions", sortable: false }
      ],
      editedIndex: -1
    };
  },

  methods: {
    toggleModal() {
      this.dialog = !this.dialog;
    },

    editItem(item) {
      this.editedIndex = this.currency.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.toggleModal();
    },

    deleteItem(item) {
      const index = this.currency.indexOf(item);
      confirm("Вы уверены, что хотите удалить запись?") &&
        this.$store.commit("DELETE_CURRENCY", index);
    },

    save() {
      let tempObject = { index: this.editedIndex, item: this.editedItem };
      console.log(tempObject);
      this.$store.commit("EDIT_CURRENCY", tempObject);
      this.toggleModal();
    }
  },

  components: {
    Modal
  }
};
</script>