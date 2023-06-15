<template>
  <span class="text-primary-color ml-2 animate-blink">|</span>
</template>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 2s step-end infinite;
}
</style>
