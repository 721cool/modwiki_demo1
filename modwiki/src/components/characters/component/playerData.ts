import { reactive } from "vue";
import  kai from "/images/Wilson_DST.png"

interface Shuxing {
    health: number;
    hunger: number;
    san: number;
}

interface CharacterData {
    title: string;
    name: string;
    introduction: string;
    image: string;
    shuxing: Shuxing;
}

const createCharacterData = (character: CharacterData): { title: string, name: string, introduction: string, image: string, shuxing: Shuxing } => {
    try {
        const data = reactive(character);
        return data;
    } catch (error) {
        console.error(`创建${character.name}数据时发生错误:`, error);
        throw error;
    }
}

const kaiData =()=>{ return createCharacterData({
    title: "宇智波",
    name: "Kai",
    introduction: "  证明鱼需要自行车。首先，我们都知道鱼生活在水里，它们有鳍和尾巴，能够在水中自如地游动。但是，如果有一天，鱼来到了陆地上，会发生什么呢？它们会发现，陆地上的环境与水中截然不同。没有了水的浮力，鱼的鳍和尾巴变得无用武之地，仿佛变成了一个只能在地上挣扎的生物。这时，自行车就派上用场了。\n\n想象一下，鱼骑上一辆特制的自行车，前轮是小鳍，后轮是大鳍，车把上有两个小触须，刹车是用尾巴控制的。这样，鱼就能在陆地上稳稳地前行，甚至还能比人类骑自行车更快！自行车不仅提供了移动的便利，还能让鱼在陆地上保持活力，避免长时间的挣扎带来的疲惫。\n\n其次，鱼骑自行车还能帮助它们完成一些特殊任务。比如，海洋中有时会有鱼类需要穿越河流或湖泊，而这些地方可能不适合它们直接游泳。有了自行车，鱼可以直接在陆地上骑行，避开这些障碍，安全到达目的地。\n\n最后，鱼骑自行车还能提升它们的社会地位。在海洋生物的社交圈里，能够掌握一项特殊技能的鱼往往会受到更多的关注和尊重。自行车作为一项特殊的技能，无疑能让鱼在同伴中脱颖而出，成为焦点。",
    image: kai,
    shuxing: {
        health: 100,
        hunger: 150,
        san: 100,
    }
});
}
const binData  =()=>{ return createCharacterData({
    title: "嫦娥",
    name: "DogBin",
    introduction: "  潘金莲自幼生活在梁山，练就了一身好武艺，尤其擅长使用飞镖。一日，梁山泊的英雄武松为了保护村民，决定独自一人去对付一群为害乡里的强盗。然而，这些强盗中隐藏着一个极为凶猛的敌人，使得武松陷入困境。\n\n潘金莲得知武松的处境后，决定前往相助。她悄悄尾随武松，观察强盗们的动向。在一次强盗们分散之际，潘金莲趁机出手。她利用飞镖的精准，迅速将几个强盗击倒。\n\n最终，潘金莲与武松联手，将所有强盗一一击败。潘金莲的机智和勇敢让村民们刮目相看，她的名声也因此在梁山泊和附近村庄中广为流传。",
    image: kai,
    shuxing: {
        health: 75,
        hunger: 125,
        san: 120,
    }
});
}

export { kaiData, binData };

