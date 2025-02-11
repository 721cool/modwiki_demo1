<template>
  <div class="container">
    <div class="first">
      <div class="character-info">
        <h2>{{ kai.title }}</h2>
        <p>{{ kai.name }}</p>
        <h2>人物三维</h2>
        <div class="sanwei">
          <p>生命值：{{ kai.shuxing.health }}</p>
          <p>饥饿值:{{ kai.shuxing.hunger }}</p>
          <p>san值:{{ kai.shuxing.san }}</p>
        </div>
        <h2>人物介绍：</h2>
        <p>{{ kai.introduction }}</p>
      </div>
      <img class="character-image" :src="kai.image" alt="角色图片">
    </div>


    <div>
      <h2>人物特性</h2>
      <p>1.绝不意气用事</p>
      <p>2.绝不意气用事</p>
      <p>3.绝不意气用事</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface KaiType {
  title: string
  name: string
  introduction: string
  image: string
  shuxing: {
    health: number
    hunger: number
    san: number
  }
}

const props = withDefaults(defineProps<{ kai: KaiType }>(), {
  kai: () => ({
    title: '默认称号',
    name: '默认名字',
    introduction: '默认介绍',
    image: '/UnjsUnenv.svg',
    shuxing: { health: 100, hunger: 50, san: 80 }
  })
})
</script>

<style scoped>

.container {
  display: flex;
  margin:2rem;
  flex-direction: column;
  background-color: rgb(248, 246, 243);
  width: 1000px;
  border-radius: 20px;
  border: 1px solid #b1abab;
  padding: 2rem;
  box-shadow: inset 0 0 0 1px rgba(139, 131, 131, 0.6);
}

.first {
  display: flex;
  justify-content: space-between;
  /* 将内容和图片分隔到两端 */
  align-items: flex-start;
  /* 垂直对齐到顶部 */
  margin: 0;
}

.character-info {
  flex: 1;
  /* 使文本部分占据剩余空间 */
}

.first h2 {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-style: italic;
 
}

.first p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.first span {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.character-image {
  width: 300px;
  /* 根据需要调整图片宽度 */
  height: auto;
  /* 保持图片比例 */
  margin-top: 0%;
  /* 根据需要调整图片顶部间距 */
}

.sanwei {
  display: flex;
}

.sanwei p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  margin-right: 3rem; /* 水平间隔3个字节 */
}

.sanwei p:last-child {
  margin-right: 0; /* 最后一个元素不需要右边距 */
}
</style>
