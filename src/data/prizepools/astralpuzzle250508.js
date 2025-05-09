import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特選戒指附魔‧抗爆α', 0.25));
firstRow.addPrize(new Prize('特選戒指附魔‧頭目降傷α', 0.25));
firstRow.addPrize(new Prize('星河徽印', 0.54));
firstRow.addPrize(new Prize('掉寶+1護符', 48.96));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.96));
secondRow.addPrize(new Prize('特選戒指附魔‧降傷α', 0.25));
secondRow.addPrize(new Prize('特選戒指附魔‧抗性α', 0.25));
secondRow.addPrize(new Prize('銀月徽印', 0.54));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.84));
thirdRow.addPrize(new Prize('手染服飾‧夏日狂想(男)(金)', 0.81));
thirdRow.addPrize(new Prize('手染服飾‧浪漫海風(女)(金)', 0.81));
thirdRow.addPrize(new Prize('赤日徽印', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.684));
fourthRow.addPrize(new Prize('手染服飾‧夏日狂想(男)(粉金)', 0.405));
fourthRow.addPrize(new Prize('手染服飾‧浪漫海風(女)(粉金)', 0.405));
fourthRow.addPrize(new Prize('混能精魄‧龍偶使', 0.506));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('莉貝菈的星靈契約書', 0.445));
fifthRow.addPrize(new Prize('殘響風笛', 0.115));
fifthRow.addPrize(new Prize('高級戰徽滿貫包', 0.2));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.553));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
