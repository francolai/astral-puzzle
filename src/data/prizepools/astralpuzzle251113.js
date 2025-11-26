import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('兔兔炸彈', 0.367));
firstRow.addPrize(new Prize('貴族棒棒糖', 0.384));
firstRow.addPrize(new Prize('香辣檸檬雞翅', 0.275));
firstRow.addPrize(new Prize('掉寶+1護符', 48.974));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 48.99));
secondRow.addPrize(new Prize('深海八爪', 0.408));
secondRow.addPrize(new Prize('傳統草仔粿', 0.427));
secondRow.addPrize(new Prize('星光星靈5星滿貫包II', 0.175));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.537));
thirdRow.addPrize(new Prize('手染髮飾‧點點蝴蝶結(金)', 1));
thirdRow.addPrize(new Prize('手染髮飾‧時光仙境緞帶(金)', 1));
thirdRow.addPrize(new Prize('混能精魄自選包V', 0.463));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('手染髮飾‧點點蝴蝶結(粉金)', 0.5));
fourthRow.addPrize(new Prize('手染髮飾‧時光仙境緞帶(粉金)', 0.5));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒IV', 0.54));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.529));
fifthRow.addPrize(new Prize('狙擊之眼', 0.236));
fifthRow.addPrize(new Prize('聖天秤', 0.236));
fifthRow.addPrize(new Prize('特殊稱號自選箱III', 0.289));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
