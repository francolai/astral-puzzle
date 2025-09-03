import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('蟲舞套裝自選箱', 0.275));
firstRow.addPrize(new Prize('2025收藏品自選禮盒II', 0.3));
firstRow.addPrize(new Prize('混能精魄‧秘術', 0.31));
firstRow.addPrize(new Prize('掉寶+1護符', 49.115));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.035));
secondRow.addPrize(new Prize('殘音套裝自選箱', 0.22));
secondRow.addPrize(new Prize('莉貝菈的星靈契約書', 0.401, 5));
secondRow.addPrize(new Prize('混能精魄‧魔樂', 0.344));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.568));
thirdRow.addPrize(new Prize('武器‧夢魘魔法獨角獸(金)', 1));
thirdRow.addPrize(new Prize('武器‧夢幻魔法獨角獸(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒II', 0.432));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.64, 3));
fourthRow.addPrize(new Prize('武器‧夢魘魔法獨角獸(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧夢幻魔法獨角獸(粉金)', 0.5));
fourthRow.addPrize(new Prize('四象星宮祝福自選包', 0.36));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('將軍魂', 0.257));
fifthRow.addPrize(new Prize('蒼誓金羽‧璃兒', 0.229));
fifthRow.addPrize(new Prize('夏夜鬼刀凜的星靈契約書', 0.386, 5));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.431));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
