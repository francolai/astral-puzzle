import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('星光麥克風', 0.367));
firstRow.addPrize(new Prize('雷光核', 0.198));
firstRow.addPrize(new Prize('風準之羽', 0.198));
firstRow.addPrize(new Prize('掉寶+1護符', 49.237));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.152));
secondRow.addPrize(new Prize('海之亡鐮', 0.408));
secondRow.addPrize(new Prize('魂鳴核', 0.22));
secondRow.addPrize(new Prize('羽牙項鍊', 0.22));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('背飾‧狂歡拉霸機(金)', 1));
thirdRow.addPrize(new Prize('背飾‧星彩拉霸機(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒I', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('背飾‧狂歡拉霸機(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧星彩拉霸機(粉金)', 0.5));
fourthRow.addPrize(new Prize('三階日能精魄禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.577));
fifthRow.addPrize(new Prize('四極傳說戰徽', 0.241));
fifthRow.addPrize(new Prize('六階星能精魄隨機禮盒', 0.236));
fifthRow.addPrize(new Prize('冬雪水晶', 0.236));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
