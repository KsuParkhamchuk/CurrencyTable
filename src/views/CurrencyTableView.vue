<template>
  <v-container>
    <h1 class="header__title">Курсы валют</h1>
    <v-row>
      <v-col cols="6">
        <div class="header__controlBtns">
          <v-row justify="center">
            <Modal
              :object="newCurrency"
              :modalAction="addNewCurrency"
              :dialog="dialog"
              :toggleModal="toggleModal"
            ></Modal>
          </v-row>
          <Button btnText="Добавить" btnIcon="mdi-plus" :action="toggleModal"></Button>
          <Button btnText="Обновить" btnIcon="mdi-restart" :action="updateTable"></Button>
        </div>
      </v-col>
      <v-col cols="6" class="header__search">
        <div class="header__search--wrapper">
          <div class="header__search--content">
            <span class>Поиск</span>
            <v-text-field
              class="searchLine"
              v-model="search"
              append-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
    <Table :search="search" :key="updateTrigger" ></Table>
  </v-container>
</template>

<script>
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import tableDataApi from "../api/tableData";

export default {
  data() {
    return {
      newCurrency: {
        Cur_Abbreviation: "",
        Cur_Name: "",
        Cur_Scale: "",
        Cur_OfficialRate: ""
      },
      dialog: false,
      search: "",
      updateTrigger: 0
    };
  },

  methods: {
    toggleModal() {
      this.dialog = !this.dialog;
    },
    
    checkIsNotEmpty() {
      for (let key in this.newCurrency) {
        if (!this.newCurrency[key]) {
          return false;
        }
      }
      return true;
    },

    addNewCurrency() {
      if (this.checkIsNotEmpty()) {
        this.$store.commit("ADD_NEW_CURRENCY", {...this.newCurrency});
        for (let key in this.newCurrency) {
          this.newCurrency[key] = "";
        }
        this.dialog = false;
      } else {
        alert("Заполните все поля!");
      }
    },

    updateTable() {
      const self = this;
     tableDataApi.getTableData(self).then(() => {
        this.updateTrigger += 1;
      });
    }
  },

  components: {
    Button,
    Table,
    Modal
  }
};
</script>

<style lang="scss">
.header__search {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  &--content {
    display: flex;
    align-items: center;

    & span {
      margin-right: 20px;
    }
  }
}

.header__controlBtns {
  display: flex;
  width: fit-content;
  padding: 30px 0;
  border-top: 1px solid #dddddd;
}

.searchLine {
  box-shadow: 0 0 5px #cccccc inset;
  border-radius: 25px;
  padding: 10px 25px;

  &.v-input__slot {
    position: unset !important;
  }
}
</style>