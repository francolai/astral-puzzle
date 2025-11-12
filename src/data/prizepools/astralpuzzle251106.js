import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('兔兔炸彈', 0.367));
firstRow.addPrize(new Prize('輝光星靈5星滿貫包I', 0.141));
firstRow.addPrize(new Prize('加農之殤戰徽', 0.62));
firstRow.addPrize(new Prize('掉寶+1護符', 48.872));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.691));
secondRow.addPrize(new Prize('深海八爪', 0.408));
secondRow.addPrize(new Prize('蠻牛之力自選箱', 0.212));
secondRow.addPrize(new Prize('狂刃之襲戰徽', 0.689));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('背飾‧幽光星鑽紛羽(金)', 1));
thirdRow.addPrize(new Prize('背飾‧輝光星鑽紛羽(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒V', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('背飾‧幽光星鑽紛羽(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧輝光星鑽紛羽(粉金)', 0.5));
fourthRow.addPrize(new Prize('五階星能精魄隨機禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+5護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.653));
fifthRow.addPrize(new Prize('榮耀戰鎚', 0.236));
fifthRow.addPrize(new Prize('聖天秤', 0.236));
fifthRow.addPrize(new Prize('神獸護身符自選箱', 0.165));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
