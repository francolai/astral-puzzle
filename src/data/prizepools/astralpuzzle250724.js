import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('鬼刀套裝自選箱', 0.206));
firstRow.addPrize(new Prize('剛射套裝自選箱', 0.206));
firstRow.addPrize(new Prize('星光星靈5星滿貫包I', 0.101));
firstRow.addPrize(new Prize('掉寶+1護符', 48.151));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.43));
secondRow.addPrize(new Prize('蟲舞套裝自選箱', 0.229));
secondRow.addPrize(new Prize('殘音套裝自選箱', 0.229));
secondRow.addPrize(new Prize('星光星靈5星滿貫包II', 0.112));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.595));
thirdRow.addPrize(new Prize('手染服飾‧夏日沙灘褲(男)(金)', 1));
thirdRow.addPrize(new Prize('手染服飾‧海風輕語(女)(金)', 1));
thirdRow.addPrize(new Prize('混能精魄自選包IV', 0.405));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('手染服飾‧夏日沙灘褲(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染服飾‧海風輕語(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒IV', 0.54));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('超級頭好壯壯肉肉', 0.115));
fifthRow.addPrize(new Prize('五階星能精魄隨機禮盒', 0.289));
fifthRow.addPrize(new Prize('四極傳說戰徽', 0.144));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.765));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
