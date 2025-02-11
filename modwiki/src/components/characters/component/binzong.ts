import { reactive } from "vue";

interface Shuxing {
    health: number;
    hunger: number;
    san: number;
}

const bin = (): { title: string, name: string, introduction: string, image: string, shuxing: Shuxing } => {
    try {
        const data = reactive({
            title: "嫦娥泪",
            name: "月穗",
            introduction: "潘金莲自幼生活在梁山，练就了一身好武艺，尤其擅长使用飞镖。一日，梁山泊的英雄武松为了保护村民，决定独自一人去对付一群为害乡里的强盗。然而，这些强盗中隐藏着一个极为凶猛的敌人，使得武松陷入困境。\n\n潘金莲得知武松的处境后，决定前往相助。她悄悄尾随武松，观察强盗们的动向。在一次强盗们分散之际，潘金莲趁机出手。她利用飞镖的精准，迅速将几个强盗击倒。\n\n最终，潘金莲与武松联手，将所有强盗一一击败。潘金莲的机智和勇敢让村民们刮目相看，她的名声也因此在梁山泊和附近村庄中广为流传。",
            image: "/Wilson_DST.png",
            shuxing: {
                health: 100,
                hunger: 100,
                san: 200,
            }
        });

        return data;
    } catch (error) {
        console.error("创建Data时发生错误:", error);
        throw error;
    }
}

export { kaiData };