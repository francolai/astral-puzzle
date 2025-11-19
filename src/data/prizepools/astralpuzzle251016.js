import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('嗜血電鋸', 0.33));
firstRow.addPrize(new Prize('松茸', 0.367));
firstRow.addPrize(new Prize('誓約星羽‧花音', 0.367));
firstRow.addPrize(new Prize('掉寶+1護符', 48.936));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.817));
secondRow.addPrize(new Prize('臉紅炸彈', 0.367));
secondRow.addPrize(new Prize('大閘蟹', 0.408));
secondRow.addPrize(new Prize('誓約星羽‧莉貝菈', 0.408));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('背飾‧童心旋轉餅乾兔(金)', 1));
thirdRow.addPrize(new Prize('背飾‧夢色旋轉餅乾兔(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒VIII', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('背飾‧童心旋轉餅乾兔(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧夢色旋轉餅乾兔(粉金)', 0.5));
fourthRow.addPrize(new Prize('三階日能精魄禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.578));
fifthRow.addPrize(new Prize('輝光星靈5星滿貫包I', 0.3));
fifthRow.addPrize(new Prize('維序‧蒼誓召喚法陣', 0.206));
fifthRow.addPrize(new Prize('榮耀戰鎚', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
