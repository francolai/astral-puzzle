import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.155, 5));
firstRow.addPrize(new Prize('小莉塔的拳套', 0.387));
firstRow.addPrize(new Prize('四階月能精魄禮盒', 0.31));
firstRow.addPrize(new Prize('掉寶+1護符', 49.148));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.031));
secondRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.172, 5));
secondRow.addPrize(new Prize('愛莉榭緹的銀湯匙', 0.43));
secondRow.addPrize(new Prize('玫瑰金自選禮盒VII', 0.367));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.798));
thirdRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.202));
thirdRow.addPrize(new Prize('背飾‧暗戀告白綿羊(金)', 1));
thirdRow.addPrize(new Prize('背飾‧甜戀告白綿羊(金)', 1));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.747, 3));
fourthRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.253, 10));
fourthRow.addPrize(new Prize('背飾‧暗戀告白綿羊(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧甜戀告白綿羊(粉金)', 0.5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('豪兔路斯‧好想兔靈契約書', 0.362, 15));
fifthRow.addPrize(new Prize('單身狗的眼淚', 0.241));
fifthRow.addPrize(new Prize('精密電路-弱點檢測', 0.206));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.504));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
