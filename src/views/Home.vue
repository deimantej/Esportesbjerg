<template>
    <span>
        <sponsor-line></sponsor-line>

        <app-carousel></app-carousel>


    </span>
</template>

<script>
import SponsorLine from '@/components/SponsorLine';

import AppCarousel from '@/components/AppCarousel';


export default {
    name: 'home',
    components: {
        SponsorLine,

        AppCarousel

    }
};
</script>

