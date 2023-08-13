<template>
    <header><Navbar></Navbar></header>
        <main>
            <div class="wrapper">
                <p>Cher Client veuillez nous excuser.Cette page est temporairement indisponible</p>
            </div>
        </main>
        <footer><Pagefooter></Pagefooter></footer>

</template>
<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Pagefooter from '@/components/Pagefooter.vue';

import {ref} from 'vue'

</script>
<style scoped>
p{
    font-size: 24px;
    font-weight: 400px;
    padding: 50px;
    text-align: center;
}
</style>