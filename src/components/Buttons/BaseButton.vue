<script lang="ts" setup>
defineProps<{
    text: string;
    propClass?: string;
    href: string;
    icon?: string;
    type: string;
}>();
</script>

<template>
    <a :href="href"
        class="inline-flex items-center justify-center py-2 px-4 rounded-md transition-colors duration-500 shadow-lg"
        :class="[
          propClass,
            type == 'primary'
                ? 'bg-primary-color hover:bg-primary-color-lighter text-primary-dark'
                : '',
            type == 'secondary'
                ? 'border hover:text-primary-color hover:border-primary-color'
                : '',
        ]">
        <i v-if="icon" class="fas mr-2" :class="[`fa-${icon}`]"></i>
        <span>{{ text }}</span>
    </a>
</template>
