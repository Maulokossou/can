<template>
  <div class="wrapper_content">
    <div class="wrapper">
      <header class="navbar">
        <div class="container">
          <div class="navbar_content">
            <div class="navbar_menu">
              <ul id="open">
                <li><RouterLink to="/signin">Se connecter</RouterLink></li>
                <li><RouterLink to="/signup">S'inscrire</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="banner">
          <div class="container">
            <div class="banner_content">
              <div class="banner_content_left">
                <div class="banner_content_left_title">
                  <h1>Work Hard</h1>
                </div>
                <div class="banner_content_left_paragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure .
                  </p>
                </div>
                <div class="banner_content_left_discorver">
                  <a href="#">Découvrir</a>
                </div>
              </div>
              <div class="banner_content_right">
                <div class="banner__content_right_img" id="banImage">
                  <img src="@/assets/home.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Section">
          <div class="container">
            <div class="service_content">
              <div class="service_content_title">
                <h2>Nos services</h2>
              </div>
              <div class="service_content_paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.isi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div class="services__content__box">
                <div class="service_content_service_detail">
                  <div
                    class="service_content_service_detail_item"
                    v-for="element in tab"
                  >
                    <div class="service_content_detail_image">
                      <img src="@/assets/service1.png" alt="" />
                    </div>
                    <h3>{{ element.title }}</h3>
                    <p>
                      {{ element.paragraph }}
                    </p>
                    <div class="service_content_service_button_first">
                      <div class="service_content_service_button">
                        <a href="#"> Découvrir </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="more_information">
                <a href="#">Découvrir</a>
              </div>
            </div>
          </div>
        </section>
        <section class="form">
          <div class="container">
            <div class="form_content">
              <form action="">
                <div class="form_content_title">
                  <h6>Pour nous contactez</h6>
                </div>
                <div class="form_content_form_item">
                  <label for="name">Nom et prénoms</label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Nom et prénoms"
                  />
                </div>
                <div class="form_content_form_item">
                  <label for="E-mail">E-mail</label>
                  <input type="email" name="email" id="" placeholder="E-mail" />
                </div>
                <div class="form_content_form_item">
                  <label for="">Objet</label>
                  <input type="text" name="objet" id="" placeholder="Objet" />
                </div>
                <div class="form_content_form_item">
                  <label for="name">Message</label>
                  <textarea
                    name="Message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form_content_submit">
                  <a href="#">Envoyez</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const tab = [
  {
    title: "service 1",
    paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "service 2",
    paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "service 3",
    paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "service 4",
    paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400px;
  position: relative;
}

img {
  width: 100%;
}

.container {
  max-width: 1044px;
  margin: auto;
  padding: 0 16px;
}
.navbar {
  padding: 20px;
}

.navbar_menu ul {
  display: flex;
  gap: 45px;
}
li {
  list-style-type: none;
  background-color: #739be5;
  padding: 10px 15px;
  display: flex;

  border-radius: 9px;
}
li a {
  text-decoration: none;
  color: white;
}

.navbar_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.menu_burger {
  width: 35px;
  height: 35px;
  display: none;
}
.menu_burger span {
  width: 100%;
  height: 4px;
  background-color: #000;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
}
.menu_burger span::before,
.menu_burger span::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.menu_burger span::before {
  transform: translateY(12px);
}
.menu_burger span::after {
  transform: translateY(-12px);
}

.menu_burger.active span {
  background-color: transparent;
}

.menu_burger.active span::before {
  transform: translateY(0) rotateZ(-45deg);
}
.menu_burger.active span::after {
  transform: translateY(0) rotateZ(45deg);
}

.banner_content_left {
  width: 500px;
}
.banner_content_left_title h1 {
  color: #fff;
  font-size: 48px;
  font-weight: 700px;
  margin-bottom: 30px;
}
.banner_content_left_paragraph p {
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
}

.banner_content_left_discorver a {
  background-color: #7a96ff;
  border-radius: 35px;
  text-decoration: none;
  color: #000;
  padding: 10px 50px;
}
.banner_content_left_discorver {
  margin-bottom: 45px;
}
.banner__content_right_img {
  width: 553px;
  height: 321px;
}
.banner_content {
  display: flex;
  gap: 45px;
  padding-top: 74px;
  padding-top: 64px;
  padding: 0 10px;
}
#banner {
  background-color: #2d5298;
}

.services__content__box {
  display: flex;
  justify-content: center;
}

.service_content_service_detail {
  display: flex;
  justify-content: space-between;
}

.service_content_title h2 {
  font-size: 32px;
  font-weight: 700px;
  text-align: center;
  margin-bottom: 38px;
}
.service_content_paragraph p {
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  margin-top: 43px;
}
.service_content_service_detail_item img {
  width: 64px;
  height: 64px;
  /* display: block;
  margin: 10px auto; */
}
.service_content_detail_image {
  text-align: center;
}
.service_content_service_detail_item h3 {
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 14px;
  text-align: center;
}
.service_content_service_detail_item p {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 27px;
}

.service_content_service_detail_item {
  display: block;
  width: 241px;
  border-radius: 6px;
  padding: 20px 10px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  padding-bottom: 26.5px;
  margin-top: 67px;
}

.service_content_service_button a {
  background-color: #7a96ff;
  border-radius: 35px;
  width: 194px;
  height: 47px;
  text-decoration: none;
  color: #000;
  padding: 10px 50px;
  margin-left: 25.5px;
}

.service_content {
  margin-top: 38px;
}
.more_information a {
  background-color: #7a96ff;
  border-radius: 35px;
  text-decoration: none;
  color: #000;
  padding: 10px 50px;
}
.more_information {
  margin: 67px;
  text-align: center;
}

.form_content_form_item {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding: 20px;
}
.form_content_title {
  text-align: center;
  font-size: 32px;
  font-weight: 700px;
  color: #000;
  margin-bottom: 49px;
}
form {
  padding-top: 10px;
  border-radius: 9px;
  border: 1px solid rgba(121, 121, 220, 0.397);
  box-shadow: 0px 0px 10px rgba(46, 44, 44, 0.39);
  max-width: 500px;
  margin: 10px auto;
}
.form_content_form_item label {
  font-size: 15px;
  font-weight: 500px;
  margin-bottom: 9px;
}
.form_content_form_item input {
  border-radius: 35px;
  border: 2px solid #535353;
  padding: 10px;
  margin-bottom: 20px;
}
.form_content_form_item textarea {
  border-radius: 35px;
  border: 2px solid #535353;
  padding: 10px;
  margin-bottom: 20px;
}
.form_content_submit a {
  font-size: 18px;
  font-weight: 600px;
  text-decoration: none;
  color: #000;
  text-align: center;
  padding: 10px 50px;
  background-color: #7a96ff;
  border-radius: 35px;
}
.form_content_submit {
  display: flex;
  justify-content: center;
}
.form_content {
  margin: 10px;
}
</style>
