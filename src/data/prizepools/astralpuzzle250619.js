import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('星靈昇華石', 1.24));
firstRow.addPrize(new Prize('四階星能精魄禮盒', 0.413));
firstRow.addPrize(new Prize('流星的星靈契約書', 1.102, 5));
firstRow.addPrize(new Prize('掉寶+1護符', 47.245));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 47.949));
secondRow.addPrize(new Prize('玫瑰金自選禮盒III', 0.367));
secondRow.addPrize(new Prize('特殊小護身符收藏寶盒', 0.919));
secondRow.addPrize(new Prize('莉貝菈的星靈契約書', 0.765, 5));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.52));
thirdRow.addPrize(new Prize('可可‧借物龍貓(金)', 1));
thirdRow.addPrize(new Prize('莓果‧借物龍貓(金)', 1));
thirdRow.addPrize(new Prize('特選α戒指附魔隨機包', 0.48));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.747, 3));
fourthRow.addPrize(new Prize('可可‧借物龍貓(粉金)', 0.5));
fourthRow.addPrize(new Prize('莓果‧借物龍貓(粉金)', 0.5));
fourthRow.addPrize(new Prize('二階日能精魄禮盒', 0.253));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('瞳與奏的星靈契約書', 0.321, 5));
fifthRow.addPrize(new Prize('魔王護符', 0.429));
fifthRow.addPrize(new Prize('特效圖形稱號自選箱', 0.241));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.322));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
