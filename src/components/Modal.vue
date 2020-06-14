<template>
  <v-dialog class="modalWindow" v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{}">
      <Button btnText="Добавить" btnIcon="mdi-plus" :action="toggleModal"></Button>
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <span class="modalWindow__closeCross" text @click="toggleModal"></span>
            <v-col class="modalWindow__formField" cols="12">
              <label for>Буквенный код валюты</label>
              <v-text-field
                class="modalWindow__formField--input"
                type="text"
                placeholder="RU"
                required
                outlined
                v-model="object.Cur_Abbreviation"
              ></v-text-field>
            </v-col>
            <v-col class="modalWindow__formField" cols="12">
              <label for>Наименование валюты</label>
              <v-text-field
                class="modalWindow__formField--input"
                type="text"
                placeholder="Российский рубль"
                required
                outlined
                v-model="object.Cur_Name"
              ></v-text-field>
            </v-col>
            <v-col class="modalWindow__formField" cols="12">
              <label for>Количество единиц валюты</label>
              <v-text-field
                class="modalWindow__formField--input"
                type="text"
                placeholder="10"
                required
                outlined
                v-model="object.Cur_Scale"
              ></v-text-field>
            </v-col>
            <v-col class="modalWindow__formField" cols="12">
              <label for>Курс к бел.рублю</label>
              <v-text-field
                class="modalWindow__formField--input"
                type="text"
                placeholder="3.4590"
                required
                outlined
                v-model="object.Cur_OfficialRate"
              ></v-text-field>
            </v-col>
            <v-col class="modalWindow__formField" cols="12">
              <v-btn color text @click="modalAction">Сохранить</v-btn>
              <v-btn color=" darken-1" text @click="toggleModal">Отмена</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    object: Object,
    modalAction: Function,
    dialog: Boolean,
    toggleModal: Function
  },
};
</script>

<style lang="scss">
.modalWindow {
  position: relative;
}

.modalWindow__closeCross {
  height: 25px;
  width: 25px;
  right: 15px;
  top: 15px;
  background-color: #878787;
  border-radius: 20px;
  box-shadow: 0 0 7px #aaaaaa;

  &:hover {
     box-shadow: 0 0 7px #aaaaaa inset;
  }
}

.modalWindow__closeCross,
.modalWindow__closeCross:before,
.modalWindow__closeCross:after {
  position: absolute;
  cursor: pointer;
}

.modalWindow__closeCross:before,
.modalWindow__closeCross:after {
  content: "";
  width: 18px;
  height: 2px;
  top: 11px;
  right: 3px;
  background-color: #fff;
}

.modalWindow__closeCross:before {
  transform: rotate(45deg);
}

.modalWindow__closeCross:after {
  transform: rotate(-45deg);
}

.modalWindow__formField {
  display: flex;
  justify-content: space-around;

  & label {
    width: 250px;
    color: #333333;
    display: flex;
    align-items: center;
  }

  &--input {
    border-radius: 35px !important;
    max-width: 250px !important;
  }

  & input {
    text-align: center;
  }

  & button {
    background-color: #878787;
    border-radius: 35px;
    color: #fff !important;
    width: 250px;
    height: 60px !important;
    box-shadow: 0 0 7px #333333;

    &:hover {
    box-shadow: 0 0 7px #333333 inset;
  }
  }

  
}
</style>