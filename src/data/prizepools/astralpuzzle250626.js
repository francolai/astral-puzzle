import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('混能精魄自選包II', 0.318));
firstRow.addPrize(new Prize('近戰之怒戰徽', 0.265));
firstRow.addPrize(new Prize('遠程之梟戰徽', 0.265));
firstRow.addPrize(new Prize('掉寶+1護符', 49.152));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.045));
secondRow.addPrize(new Prize('玫瑰金自選禮盒II', 0.367));
secondRow.addPrize(new Prize('元素之風戰徽', 0.294));
secondRow.addPrize(new Prize('奧術之秘戰徽', 0.294));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.52));
thirdRow.addPrize(new Prize('手染髮型‧夏日少年(男)(金)', 1));
thirdRow.addPrize(new Prize('手染髮型‧夏日少女(女)(金)', 1));
thirdRow.addPrize(new Prize('特選α項鍊附魔隨機包', 0.48));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.558, 3));
fourthRow.addPrize(new Prize('手染髮型‧夏日少年(男)(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染髮型‧夏日少女(女)(粉金)', 0.5));
fourthRow.addPrize(new Prize('混能精魄自選包III', 0.442));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('瞳與奏的星靈契約書', 0.367, 5));
fifthRow.addPrize(new Prize('傳說戰徽鍛造坩堝', 0.193));
fifthRow.addPrize(new Prize('蠻牛之力自選箱', 0.221));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.532));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
