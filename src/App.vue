<template>
    <RouterView />
</template>

<style>
/* Fade out when route changes */
.fade-out {
    opacity: 0;
    scale: 0.99;
    transition: all 0.1s ease-in;
}
</style>
