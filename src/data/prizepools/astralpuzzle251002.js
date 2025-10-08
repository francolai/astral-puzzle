import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('英文老師的點名簿', 0.33));
firstRow.addPrize(new Prize('九星必過強化卷', 0.206, 3));
firstRow.addPrize(new Prize('中秋烤肉串', 0.275));
firstRow.addPrize(new Prize('掉寶+1護符', 49.189));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.011));
secondRow.addPrize(new Prize('數學老師的點名簿', 0.367));
secondRow.addPrize(new Prize('九星必過飾品強化卷', 0.229, 3));
secondRow.addPrize(new Prize('除蟲大作戰自選禮盒', 0.393));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.741));
thirdRow.addPrize(new Prize('月兔的護身符', 0.259));
thirdRow.addPrize(new Prize('頭飾‧粉萌兔兔禮帽(金)', 1));
thirdRow.addPrize(new Prize('頭飾‧奶油兔兔禮帽(金)', 1));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.46, 3));
fourthRow.addPrize(new Prize('玫瑰金自選禮盒II', 0.54));
fourthRow.addPrize(new Prize('頭飾‧粉萌兔兔禮帽(粉金)', 0.5));
fourthRow.addPrize(new Prize('頭飾‧奶油兔兔禮帽(粉金)', 0.5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('精密電路-弱點檢測', 0.214));
fifthRow.addPrize(new Prize('圖形稱號．中秋(特效)', 0.206));
fifthRow.addPrize(new Prize('除蟲專家自選禮盒', 0.183));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
