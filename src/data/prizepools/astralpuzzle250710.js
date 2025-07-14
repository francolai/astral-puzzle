import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('誓約星羽‧貝兒', 0.318));
firstRow.addPrize(new Prize('蟲舞套裝自選箱', 0.141));
firstRow.addPrize(new Prize('2025收藏品自選禮盒II', 0.236));
firstRow.addPrize(new Prize('掉寶+1護符', 49.305));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.188));
secondRow.addPrize(new Prize('未鑑定的S級圖形稱號外觀附魔福袋', 0.393));
secondRow.addPrize(new Prize('殘音套裝自選箱', 0.157));
secondRow.addPrize(new Prize('特殊稱號自選箱II', 0.262));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.568));
thirdRow.addPrize(new Prize('背飾‧解析型未來通訊(金)', 1));
thirdRow.addPrize(new Prize('背飾‧追蹤型未來通訊(金)', 1));
thirdRow.addPrize(new Prize('玫瑰金自選禮盒VII', 0.432));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.64, 3));
fourthRow.addPrize(new Prize('背飾‧解析型未來通訊(粉金)', 0.5));
fourthRow.addPrize(new Prize('背飾‧解析型未來通訊(粉金)', 0.5));
fourthRow.addPrize(new Prize('莉貝菈的星靈契約書', 0.36, 5));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('圖形稱號．夏日(特效)', 0.165));
fifthRow.addPrize(new Prize('傘華‧蒼誓召喚法陣', 0.214));
fifthRow.addPrize(new Prize('瞳與奏的星靈契約書', 0.367, 5));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.567));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
