<template>
    <v-flex xs12 sm2>
                
                <v-btn v-for="(icon,index) in icons" :key="index" flat icon color="white" target="_blank">
                    <a target="_blank" v-bind:href=icon.url>
                       <v-icon>{{icon.icona}}</v-icon>
                    </a>
                </v-btn>
            </v-flex>
</template>


<script>

export default {
    name: 'HomeHero',

    data: () => ({
        icons: [
                { 
                    url: 'https://www.facebook.com/pandiscee',
                    icona: 'mdi-facebook-box',
                },
                { 
                    url: 'https://www.linkedin.com/in/deimante-jokubauskaite-07604b17b/',
                    icona: 'mdi-linkedin-box',
                },
                { 
                    url: 'https://www.instagram.com/pandisce/',
                    icona: 'mdi-instagram',
                },
                {
                url: 'https://www.instagram.com/deimanteedits/',
                icona: 'mdi-instagram'
            }

            ]
    })

}
</script>