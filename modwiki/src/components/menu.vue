<template>
    <li  @click="toggleSubMenu">
        <div class="menu-item" >
            <img :src="icon" :alt="title" class="icon">
            <span>{{ title }}</span>
        </div>
        <ul v-if="isOpen" class="submenu" @click.stop>
            <li class="project" v-for="(item, index) in items" :key="index">
                <RouterLink :to="item.route">
                    <img :src="item.icon" :alt="item.title" class="icon">
                    {{ item.title }}
                </RouterLink>
            </li>
        </ul>
    </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: String,
    icon: String,
    items: Array
});

const isOpen = ref(false);

const toggleSubMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.menu-item:hover,.project:hover{
    background-color: #76d2e4;
}
ul{
    list-style: none;
    padding: 0;
    margin: 10px;
    padding-left: 10px;
}
 .menu-item img{
    margin-right: 1rem;
}
.menu-item span{
    color: rgb(63, 105, 230);
}

</style>