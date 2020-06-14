import axios from "axios";



export default {
  getTableData(self) {
    return axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
      .then(response => {
        self.$store.commit("SAVE_CURRENCY", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateTableData(self){
    return axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
    .then(response => {
        self.$store.commit("UPDATE_CURRENCY", response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }
};

