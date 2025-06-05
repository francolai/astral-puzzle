import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('特選披風附魔‧元素α', 0.35));
firstRow.addPrize(new Prize('特選披風附魔‧奧術α', 0.35));
firstRow.addPrize(new Prize('元素之風戰徽', 0.15));
firstRow.addPrize(new Prize('掉寶+1護符', 49.15));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.15));
secondRow.addPrize(new Prize('特選披風附魔‧遠程α', 0.35));
secondRow.addPrize(new Prize('特選披風附魔‧近戰α', 0.35));
secondRow.addPrize(new Prize('遠程之梟戰徽', 0.15));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 43.23));
thirdRow.addPrize(new Prize('雷力光劍(金)', 0.81));
thirdRow.addPrize(new Prize('炎力光劍(金)', 0.81));
thirdRow.addPrize(new Prize('奧術之秘戰徽', 0.15));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 34.04, 3));
fourthRow.addPrize(new Prize('雷力光劍(粉金)', 0.405));
fourthRow.addPrize(new Prize('炎力光劍(粉金)', 0.405));
fourthRow.addPrize(new Prize('近戰之怒戰徽', 0.15));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('武功秘笈自選寶盒', 0.579));
fifthRow.addPrize(new Prize('蒼誓金羽‧娜塔莎', 0.2));
fifthRow.addPrize(new Prize('高級戰徽滿貫包', 0.15));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.384));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
