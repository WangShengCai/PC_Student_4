<template>
    <div class="toast" v-if="over" :class="{'fadeIn':showClass,'fadeOut':!showClass,'success':type == 'success','fail':type == 'fail'}">
        <div v-if="type === 'success'" style="color:#67c23a">√ {{ msg }}</div>
        <div v-if="type === 'fail'" style="color:#f56c6c">× {{ msg }}</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .toast{
        position:fixed;
        top:40px;
        left:50%;
        transform:translateX(-50%);
        padding:10px 40px 10px 40px;
        font-weight:700;
    }
    .success{
        background-color:#f0f9eb;
    }
    .fail{
        background-color:#fef0f0;
    }
    .fadeIn{
        animation:in .35s;
    }
    .fadeOut{
        animation:out .35s;
    }
    @keyframes in {
        0%{top:0;opacity:0;}
        100%{top:40px;opacity:1;}
    }
    @keyframes out {
        100%{top:40px;opacity:1;}
        0%{top:0;opacity:0;}
    }
</style>