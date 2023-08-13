<template>
  <section class="navbar">
    <div class="navbar_content">
      <div class="navbar_item">
        <img src="@/assets/tirelire2.png" alt="" />

        <div class="navbar_menu">
          <ul>
            <li><RouterLink to="/accueil">Accueil</RouterLink></li>
            <li><RouterLink to="/depenses">Dépense</RouterLink></li>
            <li><RouterLink to="/pLanification">PLanification</RouterLink></li>
            <li><button @click="out">Déconnexion</button></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import router from "@/router";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
const user = ref();

const userData = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

const out = async () => {
  console.log("hey");

  const { error } = await supabase.auth.signOut();
  const token = localStorage.getItem("access_token");
  console.log(token);

  if (error) {
    console.log(error);
  } else {
    router.replace("/");
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-style: system-ui;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
  position: relative;
}
button {
  background-color: rgba(80, 80, 210, 0.712);
  padding: 10px 20px;
  color: white;
  border-radius: 9px;
  border: 1px solid transparent;
}
.navbar {
  width: 100%;
  padding: 30px;
  background-color: rgba(174, 174, 250, 0.544);
  overflow-x: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
/* .navbar_item {
  display: flex;
  justify-content: center;
 padding: auto 0px;
} */
.navbar_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}
/* .navbar_logo{
  width: 80px;
  display: flex;
  align-items: center;
} */
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.navbar_menu ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  top: 15px;
  padding-bottom: 15px;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
}
li {
  list-style-type: none;
}
a:hover {
  /* text-decoration: underline; */
  /* border-bottom: 9px solid white; */
  padding-bottom: 22px;
  color: rgb(12, 12, 18);
}
</style>
