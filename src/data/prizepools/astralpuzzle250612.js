import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('精密電路-攻勢瓦解', 0.254));
firstRow.addPrize(new Prize('精密電路-銅牆鐵壁', 0.254));
firstRow.addPrize(new Prize('未鑑定的S級滑翔翼外觀附魔福袋', 0.354));
firstRow.addPrize(new Prize('掉寶+1護符', 49.138));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.043));
secondRow.addPrize(new Prize('精密電路-觀察儀', 0.282));
secondRow.addPrize(new Prize('精密電路-檢測儀', 0.282));
secondRow.addPrize(new Prize('未鑑定的S級圖形稱號外觀附魔福袋', 0.393));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.52));
thirdRow.addPrize(new Prize('手染服飾‧青春夏季泳裝(男)(金)', 1));
thirdRow.addPrize(new Prize('手染服飾‧清涼夏日泳裝(女)(金)', 1));
thirdRow.addPrize(new Prize('特選α披風附魔隨機包', 0.48));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.55, 3));
fourthRow.addPrize(new Prize('手染服飾‧青春夏季泳裝(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染服飾‧清涼夏日泳裝(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('誓約星羽‧艾蕾希亞', 0.45));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('輝夜‧蒼誓召喚法陣', 0.193));
fifthRow.addPrize(new Prize('稱號兌換券‧⚔️永劫', 0.128));
fifthRow.addPrize(new Prize('混能精魄自選包III', 0.482));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.51));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
