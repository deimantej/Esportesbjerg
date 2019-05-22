<template>
    <span>


        <home-page></home-page>
        <app-info></app-info>



    </span>
</template>

<script>


import HomePage from '@/components/HomePage';
import AppInfo from '@/components/AppInfo';



export default {
    name: 'home',
    components: {


        HomePage,
        AppInfo

    }
};
</script>

