<template>
  <section class="footer">
    <div class="footer_content">
      <span>Tous les droits réservés &copf;</span>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
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
.footer_content span {
  display: flex;
  justify-content: center;
}
.footer {
  width: 100%;
  padding: 30px;
  background-color: rgba(180, 180, 222, 0.544);
  overflow: hidden;

  position: absolute;
}
</style>
