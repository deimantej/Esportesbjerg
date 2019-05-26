<template>
    <span>


        <home-page></home-page>

        <app-info></app-info>
        <app-games></app-games>
        <social-media></social-media>




    </span>
</template>

<script>


import HomePage from '@/components/HomePage';
import AppInfo from '@/components/AppInfo';
import AppGames from '@/components/AppGames';
import SocialMedia from '@/components/SocialMedia';




export default {
    name: 'home',
    components: {


        HomePage,
        AppInfo,
        AppGames,
        SocialMedia

    }
};
</script>


<style>


</style>


