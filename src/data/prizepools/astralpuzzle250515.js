import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特選戒指附魔‧抗爆α', 0.35));
firstRow.addPrize(new Prize('特選戒指附魔‧頭目降傷α', 0.35));
firstRow.addPrize(new Prize('紅葉的星靈契約書', 0.445, 5));
firstRow.addPrize(new Prize('掉寶+1護符', 48.855));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.381));
secondRow.addPrize(new Prize('特選戒指附魔‧降傷α', 0.35));
secondRow.addPrize(new Prize('特選戒指附魔‧抗性α', 0.35));
secondRow.addPrize(new Prize('誓約星羽‧多多', 0.919));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.461));
thirdRow.addPrize(new Prize('巧酥‧甜點萌犬(金)', 0.81));
thirdRow.addPrize(new Prize('蜜莓‧甜點萌犬(金)', 0.81));
thirdRow.addPrize(new Prize('誓約星羽‧璃兒', 0.919));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.271, 3));
fourthRow.addPrize(new Prize('巧酥‧甜點萌犬(粉金)', 0.405));
fourthRow.addPrize(new Prize('蜜莓‧甜點萌犬(粉金)', 0.405));
fourthRow.addPrize(new Prize('誓約星羽‧小莉塔', 0.919));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('幻姬‧蒼誓召喚法陣', 0.132));
fifthRow.addPrize(new Prize('符能精魄‧金牛', 0.11));
fifthRow.addPrize(new Prize('花音的星靈契約書', 0.445, 5));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.626));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
