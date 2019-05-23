<template>
    <v-app>
        <app-navigation></app-navigation>


        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>

                <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>


<style>
  
    @font-face {
        font-family: "dinB";
        font-family: "dinL";
        font-family: "delirium";
        src: url('assets/Fonts/DINPro-CondBold.otf');
        src: url('assets/Fonts/DINPro-Light.otf');
        src: url('assets/Fonts/FTY DELIRIUM NCV.ttf')
    }

</style>
