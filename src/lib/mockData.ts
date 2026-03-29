import type { MealDetail } from "@/types/meal";

/** モックデータ — AI連携前のデモ用 */
export const mockMeals: MealDetail[] = [
  {
    id: "1",
    name: "鶏むね照り焼き",
    description: "甘辛ダレで食欲そそる、高タンパクの定番おかず",
    imageUrl: "",
    cookingTime: "20分",
    tags: ["高タンパク", "満足感"],
    nutrition: { calories: 380, protein: 35, fat: 12, carbs: 28 },
    partnerComment: "今日はタンパク質しっかりめ！照り焼きなら白ごはんが進むよ。",
    ingredients: [
      { name: "鶏むね肉", amount: "1枚 (250g)" },
      { name: "醤油", amount: "大さじ2" },
      { name: "みりん", amount: "大さじ2" },
      { name: "砂糖", amount: "大さじ1" },
      { name: "酒", amount: "大さじ1" },
      { name: "片栗粉", amount: "適量" },
    ],
    steps: [
      "鶏むね肉を一口大のそぎ切りにし、片栗粉を薄くまぶす",
      "フライパンに油を熱し、鶏肉を両面こんがり焼く（中火4分ずつ）",
      "醤油・みりん・砂糖・酒を混ぜたタレを加え、とろみがつくまで絡める",
      "器に盛り、お好みでネギや白ごまをトッピング",
    ],
    sideDishes: [
      { name: "ほうれん草のおひたし", description: "鉄分補給にぴったりの副菜" },
      { name: "豆腐とわかめの味噌汁", description: "ほっとする定番の汁物" },
    ],
  },
  {
    id: "2",
    name: "サバの味噌煮",
    description: "こっくり味噌がしみたご飯泥棒な魚料理",
    imageUrl: "",
    cookingTime: "25分",
    tags: ["魚料理", "DHA"],
    nutrition: { calories: 340, protein: 28, fat: 18, carbs: 15 },
    partnerComment: "DHAたっぷりのサバ、最近魚食べてなかったでしょ？",
    ingredients: [
      { name: "サバ切り身", amount: "2切れ" },
      { name: "味噌", amount: "大さじ2" },
      { name: "砂糖", amount: "大さじ1.5" },
      { name: "みりん", amount: "大さじ1" },
      { name: "酒", amount: "100ml" },
      { name: "生姜", amount: "1かけ" },
    ],
    steps: [
      "サバに熱湯をかけて臭みを取り、水気をふく",
      "鍋に酒・水(100ml)・砂糖・薄切り生姜を入れて煮立てる",
      "サバを入れ、落し蓋をして中火で10分煮る",
      "味噌を溶き入れ、煮汁をかけながらさらに5分煮て完成",
    ],
    sideDishes: [
      { name: "きんぴらごぼう", description: "食物繊維たっぷりの根菜おかず" },
      { name: "小松菜のナムル", description: "ごま油香るさっぱり副菜" },
    ],
  },
  {
    id: "3",
    name: "豚こまキャベツの回鍋肉風",
    description: "手軽な食材でパパッと作れるピリ辛炒め",
    imageUrl: "",
    cookingTime: "15分",
    tags: ["時短", "野菜たっぷり"],
    nutrition: { calories: 350, protein: 22, fat: 16, carbs: 30 },
    partnerComment: "15分でできちゃう！キャベツもりもりで野菜もバッチリ。",
    ingredients: [
      { name: "豚こま肉", amount: "200g" },
      { name: "キャベツ", amount: "1/4玉" },
      { name: "ピーマン", amount: "2個" },
      { name: "甜面醬", amount: "大さじ1.5" },
      { name: "豆板醬", amount: "小さじ1" },
      { name: "醤油", amount: "大さじ1" },
    ],
    steps: [
      "キャベツはざく切り、ピーマンは乱切りにする",
      "フライパンに油を熱し、豚こまを炒めて一旦取り出す",
      "同じフライパンでキャベツ・ピーマンを強火で炒める",
      "豚肉を戻し、甜面醬・豆板醬・醤油を加えて全体に絡めたら完成",
    ],
    sideDishes: [
      { name: "中華風たまごスープ", description: "ふわふわ卵のやさしいスープ" },
      { name: "きゅうりの浅漬け", description: "さっぱり笸休め" },
    ],
  },
];
