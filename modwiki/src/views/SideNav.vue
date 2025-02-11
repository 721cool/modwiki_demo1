<template>
    <div class="side-nav" :class="{ 'side-nav-collapsed': isCollapsed }">
        <button @click="toggleNav" class="nav-button">
            <img src="/CryptocurrencyColorEmc2.svg" alt="menu" class="nav-button-image">
        </button>
        <ul>
            <SubMenu 
                title="角色" 
                icon="/UnjsAutomd.svg" 
                :items="characterItems" 
            />
            <SubMenu 
                title="武器" 
                icon="/StreamlineEmojisOncomingFist1.svg" 
                :items="weaponItems" 
            />
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SubMenu from '../components/menu.vue';

const routes = {
    home: '/',
    character1: '/wilson',
    character2: '/kai',
    weapon1: '/ciws',
    weapon2: '/rgws'
};

const isCollapsed = ref(false);

const characterItems = [
    { title: '饥荒世界', route: routes.character1, icon: '/UnjsAutomd.svg' },
    { title: '传奇宇宙', route: routes.character2, icon: '/UnjsAutomd.svg' }
];

const weaponItems = [
    { title: '近战武器', route: routes.weapon1, icon: '/StreamlineEmojisOncomingFist1.svg' },
    { title: '远程武器', route: routes.weapon2, icon: '/StreamlineEmojisOncomingFist1.svg' }
];

const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.side-nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 160px; /* 根据需要调整宽度 */
    background-color: #2a2727; /* 根据需要调整背景颜色 */
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(233, 219, 219, 0.1); /* 添加阴影效果 */
    transition: width 0.3s ease;
    min-width: 40px; /* 设置最小宽度以适应按钮 */
    border-radius: 20px;
}

.side-nav-collapsed {
    width: 40px; /* 设置最小宽度以适应按钮 */
    overflow: hidden;
}

.side-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.side-nav li {
    margin: 10px 0;
}

.nav-button {
    display: block;
    margin: 10px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
}

.menu-item img {
    margin-right: 2rem; /* 添加两个字节的间距 */
}

.menu-item span {
    font-size: 1rem;
    color: #fff;
    margin-left: 10px; /* 确保文本在图标右侧 */
}
</style>
