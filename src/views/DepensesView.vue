<template>
  <body>
    <header><Navbar></Navbar></header>
    <main>
      <section>
        <div class="depenses">
          <div class="container">
            <div class="depenses_content">
              <div class="add_expense">
                <div class="add_expense_title">
                  <span>Veuillez ajouter vos dépenses du jour</span>
                </div>
                <div class="table">
                  <table>
                    <tr>
                      <th>Description</th>
                      <th>Montant</th>
                      <th>Date</th>
                      <th>Catégorie</th>
                    </tr>

                    <tr v-for="Expense in expenses">
                      <td>{{ Expense.libelle }}</td>
                      <td>{{ Expense.cost }}</td>
                      <td>{{ Expense.date }}</td>
                      <td>{{ Expense.categorie }}</td>
                    </tr>
                  </table>
                </div>
                <div class="add_button">
                  <button @click="catModal = true">Ajouter</button>
                </div>
              </div>
              <div class="add_depenses">
                <div class="overlay_div">
                  <div
                    class="overlay"
                    :class="{
                      open: catModal === true,
                      close: catModal === false,
                    }"
                  >
                    <div class="modal">
                      <div class="modal_content">
                        <div class="modal_header">
                          <h2>Ajouter une dépense</h2>
                          <button @click="catModal = false" class="modal_close">
                            X
                          </button>
                        </div>
                        <div class="modal_body">
                          <div class="modal_item">
                            <label for="name">Description</label>
                            <div class="input_description">
                              <input
                                type="text"
                                description="name"
                                id=""
                                pattern="(?=.*?[A-Z])(?=.*?[a-z])"
                                v-model="libelle"
                              />
                            </div>
                          </div>
                          <div class="modal_item">
                            <label for="name">Montant</label>
                            <div class="input_cost">
                              <input
                                type="text"
                                mount="name"
                                id=""
                                pattern="(?=.*?[0-1])"
                                v-model="cost"
                              />
                            </div>
                          </div>
                          <div class="modal_item">
                            <label for="name">Date</label>
                            <div class="input_date">
                              <input
                                type="date"
                                date="name"
                                id=""
                                v-model="date"
                              />
                            </div>
                          </div>
                          <div class="modal_item">
                            <label for="name">Catégorie</label>
                            <div class="input_category">
                              <input
                                type="text"
                                categorie="name"
                                id=""
                                pattern="(?=.*?[A-Z])(?=.*?[a-z])"
                                v-model="categorie"
                              />
                            </div>
                          </div>
                          <div class="button">
                            <button type="submit" @click="add">
                              Enregistrer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tri></Tri>
    </main>
    <footer>
      <Pagefooter></Pagefooter>
    </footer>
  </body>
</template>
<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import Pagefooter from "@/components/Pagefooter.vue";
import Tri from "@/components/Tri.vue";
/* afficher sur l'interface utilisateur */
/*  const expenses = ref([]);*/
const libelle = ref("");
const date = ref("");
const cost = ref("");
const categorie = ref("");

import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import { useExpenseStore } from "@/stores/expenses";
const { addExpense } = useExpenseStore();
const catModal = ref();
/* catModal.value = "close"; */
/* 
const  Expense= ref({});
const expenses = ref([]);
 
function addExpense() {
  Expense.value = {
    date: date.value,
    cost: cost.value,
    libelle: libelle.value,
    categorie: categorie.value
    
  };
  expenses.value.push(Expense.value);
  async ()=>{
    const {data,error} = await supabase.from('expenses').insert('Expense.value')
  }
Expense.value = {
  name: "",
  image:''
};
} */
const expense = ref({
  date: "",
  cost: "",
  libelle: "",
  categorie: "",
  id_category: 0,
  id_user: 0,
});
const expenses = ref([]);
const add = async () => {
  await addExpense(expense.value);
  const { data, error } = await supabase
    .from("categories_users")
    .insert(expense.value);
  console.log(data);

  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
  expense.value = {
    date: "",
    cost: "",
    libelle: "",
    categorie: "",
    id_category: "",
    id_user: "",
  };
};
</script>

<style scoped>
.container {
  max-width: 1040px;
  margin: auto;
}

.add_expense_title span {
  font-size: 20px;
  font-weight: 500px;
  padding: 20px;
}
.depenses {
  padding: 80px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333333d3;
  display: none;
  z-index: 100px;
}
.table table {
  border: 2px solid #112254;
  width: 800px;
  padding: 15px;
  z-index: -5px;
}

tr {
  width: 100%;
  padding: 10px;
  z-index: -5px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
th {
  margin: 10px auto;
  z-index: -5px;
}
.open {
  display: block;
}

.close {
  display: none;
}
.add_expense_title {
  display: flex;
  justify-content: center;
}
.modal {
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  max-width: 600px;
  height: 600px;
  z-index: 100px;
}

.modal_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.modal_header h2,
.modal_item label {
  font-size: 20px;
  user-select: none;
  text-transform: uppercase;
}
.modal_body {
  padding: 20px;
}
footer {
  z-index: -20px;
}
.modal_item input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid rgb(140, 126, 126);
  margin: 10px 0;
}
.button {
  display: flex;
  justify-content: center;
}
.add_button {
  position: absolute;
  right: 10%;
  top: 50px;
}

button.record {
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 9px;
  border: 1px solid transparent;
  background-color: rgb(78, 211, 78);
  color: white;
}
.all_categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.category_content {
  width: 250px;
  height: 250px;
  padding: 20px;
  border-radius: 9px;
  border: 2px solid transparent;
  background-color: rgb(86, 186, 86);
  color: white;
}
.category_title h2 {
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.image img {
  width: 100px;
  height: 100px;
  background-color: white;
  padding: 20px;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 20%;
}
</style>
