<template>
  <div class="form_body">
    <div class="wrapper">
      <div class="form_title">
        <h1>Inscription</h1>
      </div>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          class="form_control"
          name="firstName"
          id=""
          placeholder="Robert"
          required
          v-model="userData.prenom"
        />
        <input
          type="text"
          class="form_control"
          name_name="lastName"
          id=""
          placeholder="Latour"
          required
          v-model="userData.nom"
        />
        <input
          type="email"
          class="form_control"
          name=""
          id=""
          placeholder="example@gmail.com"
          required
          v-model="userData.email"
        />
        <input
          type="password"
          class="form_control"
          name=""
          id=""
          placeholder="Mot de passe"
          required
          v-model="userData.password"
        />
        <button @click="submitForm" type="submit" class="formButton">
          Inscription
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, useSSRContext } from "vue";
import router from "@/router";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";
const { addUser } = useUserStore();
const user = ref();
const emits = defineEmits(["submit"]);
const userData = ref({
  email: "",
  password: "",
});

const submitForm = async () => {
  await addUser(userData.value);
  const { data, error } = await supabase.auth.signUp({
    email: userData.value.email,
    password: userData.value.password,
  });
  console.log(data);

  if (error) {
    console.log(error);
  } else {
    router.replace("/signin");
  }
};
</script>
<style scoped>
.form_control {
  width: 100%;
  border-radius: 9px;
  background: none;
  outline: none;
  padding: 10px 5px;
  margin-bottom: 20px;
  border: 1px solid rgba(72, 72, 157, 0.798);
}
/* .form_control::placeholder {
  color: rgba(68, 68, 207, 0.71);
} */
button {
  border: 1px solid transparent;
  padding: 1rem 2rem;
  background-color: rgba(37, 37, 126, 0.767);
  border-radius: 9px;
  margin-top: 1rem;
  font-size: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-left: 40%;
}
button:hover {
  box-shadow: 3px 5px 10px rgb(19, 19, 57);
}
.wrapper {
  max-width: 700px;
  border-radius: 9px;
  border: 1px solid rgb(102, 102, 174);
  padding: 20px;
  margin: 20px 0;
  box-shadow: 3px 5px 10px rgb(140, 140, 227);
}
.form_body {
  display: flex;
  justify-content: center;
}
.form_title h1 {
  font-weight: 500px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  text-transform: uppercase;
  user-select: none;
}
</style>
