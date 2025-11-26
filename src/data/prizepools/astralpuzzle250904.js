import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('混能精魄‧魔樂', 0.381));
firstRow.addPrize(new Prize('混能精魄‧秘術', 0.381));
firstRow.addPrize(new Prize('夏夜鬼刀凜的星靈契約書', 0.206, 5));
firstRow.addPrize(new Prize('掉寶+1護符', 49.032));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.372));
secondRow.addPrize(new Prize('超級頭好壯壯肉肉(辣)', 0.137));
secondRow.addPrize(new Prize('四階月能精魄禮盒', 0.344));
secondRow.addPrize(new Prize('將軍魂', 0.147));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.568));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒VI', 0.432));
thirdRow.addPrize(new Prize('手染髮型‧厄夜吸血鬼(男)(金)', 1));
thirdRow.addPrize(new Prize('手染髮型‧萬聖小魔女(女)(金)', 1));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.856, 3));
fourthRow.addPrize(new Prize('碧藍星的拖鞋', 0.144));
fourthRow.addPrize(new Prize('手染髮型‧厄夜吸血鬼(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染髮型‧萬聖小魔女(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('緋紅星的殺蟲劑', 0.206));
fifthRow.addPrize(new Prize('單身狗的眼淚', 0.241));
fifthRow.addPrize(new Prize('圖形稱號．鬼靈精怪(特效)', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.66));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
