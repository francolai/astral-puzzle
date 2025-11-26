import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('2025收藏品自選禮盒III', 0.124));
firstRow.addPrize(new Prize('貴族棒棒糖', 0.384));
firstRow.addPrize(new Prize('亞倫護身符', 0.33));
firstRow.addPrize(new Prize('掉寶+1護符', 49.162));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.075));
secondRow.addPrize(new Prize('精密電路-弱點檢測', 0.131));
secondRow.addPrize(new Prize('傳統草仔粿', 0.427));
secondRow.addPrize(new Prize('蕾娜護身符', 0.367));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.46));
thirdRow.addPrize(new Prize('武器‧奏鳴樂聲魔槍(金)', 1));
thirdRow.addPrize(new Prize('武器‧交響樂聲魔槍(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒III', 0.54));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.676, 3));
fourthRow.addPrize(new Prize('武器‧奏鳴樂聲魔槍(粉金)', 0.5));
fourthRow.addPrize(new Prize('武器‧交響樂聲魔槍(粉金)', 0.5));
fourthRow.addPrize(new Prize('五階月能精魄禮盒', 0.324));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級戰利品裝備強化卷', 20.529));
fifthRow.addPrize(new Prize('狙擊之眼', 0.236));
fifthRow.addPrize(new Prize('六階星能精魄隨機禮盒', 0.236));
fifthRow.addPrize(new Prize('特殊稱號自選箱III', 0.289));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.71));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
