import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('小莉塔的拳套', 0.387));
firstRow.addPrize(new Prize('加農之殤戰徽', 0.62));
firstRow.addPrize(new Prize('狂刃之襲戰徽', 0.62));
firstRow.addPrize(new Prize('掉寶+2護符', 48.373));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.647));
secondRow.addPrize(new Prize('愛莉榭緹的銀湯匙', 0.43));
secondRow.addPrize(new Prize('命運勇者星靈禮盒', 0.53));
secondRow.addPrize(new Prize('混能精魄自選包IV', 0.393));
secondRow.addPrize(new Prize('掉寶+3護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 43.66));
thirdRow.addPrize(new Prize('髮飾‧球球頑皮海豹(粉金)', 0.4));
thirdRow.addPrize(new Prize('髮飾‧風速疾風丸(粉金)', 0.4));
thirdRow.addPrize(new Prize('武功秘笈自選寶盒', 0.54));
thirdRow.addPrize(new Prize('掉寶+4護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('服飾‧好想兔(粉金)', 0.5));
fourthRow.addPrize(new Prize('服飾‧小賤狗(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒VIII', 0.54));
fourthRow.addPrize(new Prize('掉寶+5護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 64.149));
fifthRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.362, 5));
fifthRow.addPrize(new Prize('緋紅星的殺蟲劑', 0.206));
fifthRow.addPrize(new Prize('碧藍星的拖鞋', 0.206));
fifthRow.addPrize(new Prize('JackPot', 0.077));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
