import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('2025收藏品自選禮盒III', 0.124));
firstRow.addPrize(new Prize('戰熊利爪', 0.198));
firstRow.addPrize(new Prize('神木之種', 0.198));
firstRow.addPrize(new Prize('掉寶+1護符', 49.48));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.348));
secondRow.addPrize(new Prize('蠻牛之力自選箱', 0.212));
secondRow.addPrize(new Prize('戰熊尖牙', 0.22));
secondRow.addPrize(new Prize('千手神木', 0.22));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('武器‧熱潮科技之音(金)', 1));
thirdRow.addPrize(new Prize('武器‧冰炫科技之音(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒II', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('武器‧熱潮科技之音(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧冰炫科技之音(粉金)', 0.5));
fourthRow.addPrize(new Prize('五階月能精魄禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.582));
fifthRow.addPrize(new Prize('82年拉菲', 0.236));
fifthRow.addPrize(new Prize('土耳其火雞', 0.236));
fifthRow.addPrize(new Prize('煙燻起司', 0.236));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
