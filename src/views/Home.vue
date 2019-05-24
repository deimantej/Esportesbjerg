<template>
    <span>


        <home-page></home-page>

        <app-info></app-info>
        <app-games></app-games>
        <app-gallery></app-gallery>



    </span>
</template>

<script>


import HomePage from '@/components/HomePage';
import AppInfo from '@/components/AppInfo';
import AppGames from '@/components/AppGames';
import AppGallery from '@/components/AppGallery';



export default {
    name: 'home',
    components: {


        HomePage,
        AppInfo,
        AppGames,
        AppGallery
    }
};
</script>


<style>


</style>


