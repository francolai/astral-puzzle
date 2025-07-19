import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('時尚布料大禮盒', 0.919));
firstRow.addPrize(new Prize('特殊小護身符收藏寶盒', 0.62));
firstRow.addPrize(new Prize('混能精魄‧拳聖', 0.31));
firstRow.addPrize(new Prize('掉寶+1護符', 48.151));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.111));
secondRow.addPrize(new Prize('誓約星羽‧蕾娜', 0.408));
secondRow.addPrize(new Prize('凜冬‧蒼誓召喚法陣', 0.137));
secondRow.addPrize(new Prize('混能精魄‧劍豪', 0.344));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.595));
thirdRow.addPrize(new Prize('武器‧震天三日月(金)', 1));
thirdRow.addPrize(new Prize('武器‧肅月三日月(金)', 1));
thirdRow.addPrize(new Prize('混能精魄‧龍騎', 0.405));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('武器‧震天三日月(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧肅月三日月(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒VIII', 0.54));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('圖形稱號．夏日(特效)', 0.165));
fifthRow.addPrize(new Prize('霜凍湯匙', 0.241));
fifthRow.addPrize(new Prize('四極傳說戰徽', 0.144));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.763));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
