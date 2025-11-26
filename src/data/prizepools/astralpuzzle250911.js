import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('誓約星羽‧貝兒', 0.367));
firstRow.addPrize(new Prize('未鑑定的S級滑翔翼外觀附魔福袋', 0.381));
firstRow.addPrize(new Prize('星光星靈5星滿貫包II', 0.128));
firstRow.addPrize(new Prize('掉寶+1護符', 49.124));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.466));
secondRow.addPrize(new Prize('超級頭好壯壯肉肉(辣)', 0.137));
secondRow.addPrize(new Prize('金色滑翔翼自選禮包', 0.275));
secondRow.addPrize(new Prize('輝光星靈自選箱I', 0.122));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.712));
thirdRow.addPrize(new Prize('四象星宮祝福自選包', 0.288));
thirdRow.addPrize(new Prize('手染服飾‧純月之心黑(女)(金)', 1));
thirdRow.addPrize(new Prize('手染服飾‧純月之心藍(女)(金)', 1));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒V', 0.54));
fourthRow.addPrize(new Prize('手染服飾‧純月之心黑(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染服飾‧純月之心藍(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('錢鼠的護身符', 0.165));
fifthRow.addPrize(new Prize('傘華‧蒼誓召喚法陣', 0.214));
fifthRow.addPrize(new Prize('圖形稱號．鬼靈精怪(特效)', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.728));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
