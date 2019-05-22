<template>
    <span>


        <home-page></home-page>

        <app-info></app-info>
        <app-games></app-games>



    </span>
</template>

<script>


import HomePage from '@/components/HomePage';
import AppInfo from '@/components/AppInfo';
import AppGames from '@/components/AppGames';



export default {
    name: 'home',
    components: {


        HomePage,
        AppInfo,
        AppGames
    }
};
</script>


<style>


</style>


