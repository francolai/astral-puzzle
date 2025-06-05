import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特選項鍊附魔‧爆傷α', 0.25));
firstRow.addPrize(new Prize('特選項鍊附魔‧頭目爆傷α', 0.25));
firstRow.addPrize(new Prize('九星必過強化卷', 0.206, 3));
firstRow.addPrize(new Prize('掉寶+1護符', 49.294));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.271));
secondRow.addPrize(new Prize('特選項鍊附魔‧造傷α', 0.25));
secondRow.addPrize(new Prize('特選項鍊附魔‧頭目造傷α', 0.25));
secondRow.addPrize(new Prize('九星必過飾品強化卷', 0.229, 3));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.73));
thirdRow.addPrize(new Prize('頭飾‧貪吃鬼松鼠(金)', 1));
thirdRow.addPrize(new Prize('頭飾‧小畫家松鼠(金)', 1));
thirdRow.addPrize(new Prize('九星必過戰利品強化卷', 0.27, 3));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.689, 3));
fourthRow.addPrize(new Prize('頭飾‧貪吃鬼松鼠(粉金)', 0.5));
fourthRow.addPrize(new Prize('頭飾‧小畫家松鼠(粉金)', 0.5));
fourthRow.addPrize(new Prize('符能精魄‧銀牛', 0.311));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('星光星靈5星滿貫包I', 0.144));
fifthRow.addPrize(new Prize('蒼誓金羽‧悠姬', 0.152));
fifthRow.addPrize(new Prize('符能精魄‧金牛', 0.2));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.817));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
