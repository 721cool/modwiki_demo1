import{d as h,c as u,a as n,t as e,o as c,_ as d,r as m,b as l,u as o,F as g}from"./index-WB17WpQA.js";const _={class:"container"},k={class:"first"},f={class:"character-info"},v={class:"sanwei"},D=["src"],B=h({__name:"model",props:{kai:{default:()=>({title:"默认称号",name:"默认名字",introduction:"默认介绍",image:"/UnjsUnenv.svg",shuxing:{health:100,hunger:50,san:80}})}},setup(t){return(a,s)=>(c(),u("div",_,[n("div",k,[n("div",f,[n("h2",null,e(a.kai.title),1),n("p",null,e(a.kai.name),1),s[0]||(s[0]=n("h2",null,"人物三维",-1)),n("div",v,[n("p",null,"生命值："+e(a.kai.shuxing.health),1),n("p",null,"饥饿值:"+e(a.kai.shuxing.hunger),1),n("p",null,"san值:"+e(a.kai.shuxing.san),1)]),s[1]||(s[1]=n("h2",null,"人物介绍：",-1)),n("p",null,e(a.kai.introduction),1)]),n("img",{class:"character-image",src:a.kai.image,alt:"角色图片"},null,8,D)]),s[2]||(s[2]=n("div",null,[n("h2",null,"人物特性"),n("p",null,"1.绝不意气用事"),n("p",null,"2.绝不意气用事"),n("p",null,"3.绝不意气用事")],-1))]))}}),r=d(B,[["__scopeId","data-v-5480ef88"]]),p=t=>{try{return m(t)}catch(a){throw console.error(`创建${t.name}数据时发生错误:`,a),a}},b=()=>p({title:"宇智波",name:"Kai",introduction:`  证明鱼需要自行车。首先，我们都知道鱼生活在水里，它们有鳍和尾巴，能够在水中自如地游动。但是，如果有一天，鱼来到了陆地上，会发生什么呢？它们会发现，陆地上的环境与水中截然不同。没有了水的浮力，鱼的鳍和尾巴变得无用武之地，仿佛变成了一个只能在地上挣扎的生物。这时，自行车就派上用场了。

想象一下，鱼骑上一辆特制的自行车，前轮是小鳍，后轮是大鳍，车把上有两个小触须，刹车是用尾巴控制的。这样，鱼就能在陆地上稳稳地前行，甚至还能比人类骑自行车更快！自行车不仅提供了移动的便利，还能让鱼在陆地上保持活力，避免长时间的挣扎带来的疲惫。

其次，鱼骑自行车还能帮助它们完成一些特殊任务。比如，海洋中有时会有鱼类需要穿越河流或湖泊，而这些地方可能不适合它们直接游泳。有了自行车，鱼可以直接在陆地上骑行，避开这些障碍，安全到达目的地。

最后，鱼骑自行车还能提升它们的社会地位。在海洋生物的社交圈里，能够掌握一项特殊技能的鱼往往会受到更多的关注和尊重。自行车作为一项特殊的技能，无疑能让鱼在同伴中脱颖而出，成为焦点。`,image:"/images/Wilson_DST.png",shuxing:{health:100,hunger:150,san:100}}),w=()=>p({title:"嫦娥泪",name:"DogBin",introduction:`  潘金莲自幼生活在梁山，练就了一身好武艺，尤其擅长使用飞镖。一日，梁山泊的英雄武松为了保护村民，决定独自一人去对付一群为害乡里的强盗。然而，这些强盗中隐藏着一个极为凶猛的敌人，使得武松陷入困境。

潘金莲得知武松的处境后，决定前往相助。她悄悄尾随武松，观察强盗们的动向。在一次强盗们分散之际，潘金莲趁机出手。她利用飞镖的精准，迅速将几个强盗击倒。

最终，潘金莲与武松联手，将所有强盗一一击败。潘金莲的机智和勇敢让村民们刮目相看，她的名声也因此在梁山泊和附近村庄中广为流传。`,image:"/iamges/Wilson_DST.png",shuxing:{health:75,hunger:125,san:120}}),x={__name:"kai",setup(t){const a=b(),s=w();return(S,i)=>(c(),u(g,null,[i[0]||(i[0]=n("div",{class:"kai"},[n("h1",{class:"welcome"},"人物介绍篇")],-1)),n("div",null,[l(r,{kai:o(a)},null,8,["kai"]),l(r,{kai:o(s)},null,8,["kai"])])],64))}},C=d(x,[["__scopeId","data-v-fef914f5"]]);export{C as default};
