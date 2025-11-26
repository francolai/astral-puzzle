import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('嗜血電鋸', 0.33));
firstRow.addPrize(new Prize('高級戰徽滿貫包', 0.15));
firstRow.addPrize(new Prize('中秋烤肉串', 0.275));
firstRow.addPrize(new Prize('掉寶+2護符', 49.245));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.126));
secondRow.addPrize(new Prize('臉紅炸彈', 0.367));
secondRow.addPrize(new Prize('四極傳說戰徽', 0.114));
secondRow.addPrize(new Prize('混能精魄自選包V', 0.393));
secondRow.addPrize(new Prize('掉寶+3護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('武器‧繽紛兔兔電鋸(金)', 1));
thirdRow.addPrize(new Prize('武器‧暴走水豚電鋸(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒I', 0.54));
thirdRow.addPrize(new Prize('掉寶+4護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('武器‧繽紛兔兔電鋸(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧暴走水豚電鋸(粉金)', 0.5));
fourthRow.addPrize(new Prize('三階日能精魄禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+5護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 64.211));
fifthRow.addPrize(new Prize('輝光星靈5星滿貫包I', 0.3));
fifthRow.addPrize(new Prize('圖形稱號．中秋(特效)', 0.206));
fifthRow.addPrize(new Prize('榮耀戰鎚', 0.206));
fifthRow.addPrize(new Prize('JackPot', 0.077));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
