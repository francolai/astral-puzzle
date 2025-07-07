import Prize from '../../util/Prize';
import PrizePool from '../../util/PrizePool';

const firstRow = new PrizePool();
firstRow.addPrize(new Prize('星界碎塊', 10));
firstRow.addPrize(new Prize('高級職業經驗提升祝福', 40));
firstRow.addPrize(new Prize('誓約星羽‧貝兒', 0.318));
firstRow.addPrize(new Prize('鬼刀套裝自選箱', 0.141));
firstRow.addPrize(new Prize('九星必過強化卷', 0.172));
firstRow.addPrize(new Prize('掉寶+1護符', 49.369));

const secondRow = new PrizePool();
secondRow.addPrize(new Prize('星界碎塊', 15));
secondRow.addPrize(new Prize('高級角色經驗提升祝福', 49.285));
secondRow.addPrize(new Prize('玫瑰金自選禮盒I', 0.367));
secondRow.addPrize(new Prize('剛射套裝自選箱', 0.157));
secondRow.addPrize(new Prize('九星必過飾品強化卷', 0.191, 3));
secondRow.addPrize(new Prize('掉寶+2護符', 35));

const thirdRow = new PrizePool();
thirdRow.addPrize(new Prize('星界碎塊', 20));
thirdRow.addPrize(new Prize('高級掉寶提升祝福', 42.775));
thirdRow.addPrize(new Prize('面飾‧貓咪鯛魚燒(金)', 1));
thirdRow.addPrize(new Prize('面飾‧小雞鯛魚燒(金)', 1));
thirdRow.addPrize(new Prize('九星必過飾品強化卷', 0.225, 3));
thirdRow.addPrize(new Prize('掉寶+3護符', 35));

const fourthRow = new PrizePool();
fourthRow.addPrize(new Prize('星界碎塊', 30));
fourthRow.addPrize(new Prize('星靈羈絆寶石', 33.595, 3));
fourthRow.addPrize(new Prize('面飾‧貓咪鯛魚燒(粉金)', 0.5));
fourthRow.addPrize(new Prize('面飾‧小雞鯛魚燒(粉金)', 0.5));
fourthRow.addPrize(new Prize('金色滑翔翼自選禮包', 0.405));
fourthRow.addPrize(new Prize('掉寶+4護符', 35));

const fifthRow = new PrizePool();
fifthRow.addPrize(new Prize('星界碎塊', 35));
fifthRow.addPrize(new Prize('星級飾品裝備強化卷', 20.687));
fifthRow.addPrize(new Prize('傘華‧蒼誓召喚法陣', 0.193, 5));
fifthRow.addPrize(new Prize('輝光星靈自選箱I', 0.241));
fifthRow.addPrize(new Prize('2025收藏品自選禮盒II', 0.386));
fifthRow.addPrize(new Prize('掉寶+5護符', 43.493));

export default [fifthRow, fourthRow, thirdRow, secondRow, firstRow];
